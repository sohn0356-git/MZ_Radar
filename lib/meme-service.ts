"use client";

import { isSupabaseConfigured, supabase } from "@/lib/supabase";
import { mockFeedItems, mockMemes } from "@/lib/mock-data";
import type { FeedItem, Meme, MemeSource, MemeSuggestionInput, UsageExample } from "@/lib/types";

const useMockData = process.env.NEXT_PUBLIC_USE_SUPABASE === "false" || !isSupabaseConfigured;
export const isUsingMockData = useMockData;

type MemeRow = {
  id: string;
  slug: string;
  title: string;
  short_description: string;
  meaning: string;
  origin_description: string;
  cultural_context: string;
  origin_date: string | null;
  origin_platform: string | null;
  origin_creator: string | null;
  thumbnail_url: string | null;
  trend_status: string;
  trend_score: number;
  trend_change_24h: number;
  tone_tags: string[];
  intensity: Record<string, number>;
  usage_context: Record<string, string>;
  timeline: { date: string; event: string }[];
  categories: string[];
  related_meme_ids: string[];
  created_at: string;
  updated_at: string;
  meme_aliases?: { alias: string }[];
  meme_sources?: {
    id: string;
    source_type: string;
    source_url: string;
    youtube_video_id: string | null;
    youtube_timestamp: string | null;
    source_title: string | null;
    source_description: string | null;
    is_original: boolean;
    is_verified: boolean;
    verification_status?: string | null;
  }[];
  meme_usage_examples?: {
    id: string;
    situation: string;
    example_text: string;
    explanation: string | null;
    sort_order: number;
  }[];
  meme_feed_items?: {
    id: string;
    media_type: "image" | "video";
    media_url: string;
    thumbnail_url: string | null;
    source_url: string | null;
    youtube_video_id: string | null;
    youtube_timestamp: string | null;
    short_caption: string | null;
    trend_score: number;
    trend_status: string;
    published_at: string;
  }[];
};

const memeSelect = `
  *,
  meme_aliases(alias),
  meme_sources(*),
  meme_usage_examples(*),
  meme_feed_items(*)
`;

export async function fetchMemes(): Promise<Meme[]> {
  if (useMockData) return mockMemes;
  if (!supabase) return [];
  const { data, error } = await supabase
    .from("memes")
    .select(memeSelect)
    .order("trend_score", { ascending: false });
  if (error) throw error;
  return (data as MemeRow[]).map(toMeme);
}

export async function fetchFeedItems(): Promise<{ item: FeedItem; meme: Meme }[]> {
  if (useMockData) return mockFeedItems;
  if (!supabase) return [];
  const { data, error } = await supabase
    .from("meme_feed_items")
    .select(`*, memes(${memeSelect})`)
    .order("trend_score", { ascending: false })
    .order("published_at", { ascending: false });
  if (error) throw error;
  return (data || []).map((row: any) => ({
    item: toFeedItem(row),
    meme: toMeme(row.memes)
  }));
}

export async function fetchSavedMemeIds(userId: string): Promise<string[]> {
  if (useMockData) return [];
  if (!supabase) return [];
  const { data, error } = await supabase
    .from("saved_memes")
    .select("meme_id")
    .eq("user_id", userId)
    .order("created_at", { ascending: false });
  if (error) throw error;
  return (data || []).map((row) => row.meme_id);
}

export async function toggleSavedMeme(userId: string, memeId: string, saved: boolean) {
  if (useMockData) return;
  if (!supabase) return;
  if (saved) {
    const { error } = await supabase.from("saved_memes").delete().eq("user_id", userId).eq("meme_id", memeId);
    if (error) throw error;
    return;
  }
  const { error } = await supabase.from("saved_memes").insert({ user_id: userId, meme_id: memeId });
  if (error) throw error;
}

export async function recordView(userId: string | null, memeId: string, source: "search" | "feed" | "related" | "direct") {
  if (useMockData) return;
  if (!supabase || !userId) return;
  await supabase.from("meme_view_history").insert({ user_id: userId, meme_id: memeId, source });
}

export async function recordSearch(userId: string | null, query: string, selectedMemeId?: string) {
  if (useMockData) return;
  if (!supabase || !userId || !query.trim()) return;
  await supabase.from("search_history").insert({
    user_id: userId,
    query: query.trim(),
    selected_meme_id: selectedMemeId || null
  });
}

export async function fetchUserHistory(userId: string) {
  if (useMockData) return { viewedIds: [], searches: [] };
  if (!supabase) return { viewedIds: [], searches: [] };
  const [views, searches] = await Promise.all([
    supabase
      .from("meme_view_history")
      .select("meme_id")
      .eq("user_id", userId)
      .order("viewed_at", { ascending: false })
      .limit(30),
    supabase
      .from("search_history")
      .select("query")
      .eq("user_id", userId)
      .order("created_at", { ascending: false })
      .limit(12)
  ]);
  if (views.error) throw views.error;
  if (searches.error) throw searches.error;
  return {
    viewedIds: (views.data || []).map((row) => row.meme_id),
    searches: (searches.data || []).map((row) => row.query)
  };
}

export async function submitMemeSuggestion(userId: string | null, input: MemeSuggestionInput) {
  if (!supabase || !isSupabaseConfigured) return false;
  const aliases = input.aliases
    .split(",")
    .map((alias) => alias.trim())
    .filter(Boolean);
  const { error } = await supabase.from("meme_edit_suggestions").insert({
    user_id: userId,
    suggestion_type: "create",
    status: "pending",
    payload: {
      title: input.title.trim(),
      aliases,
      meaning: input.meaning.trim(),
      origin: input.origin.trim(),
      reference_url: input.referenceUrl.trim()
    }
  });
  if (error) throw error;
  return true;
}

export function searchMemes(memes: Meme[], query: string, category = "All") {
  const normalizedQuery = normalize(query);
  const words = query.toLowerCase().split(/[\s,]+/).filter(Boolean);
  return memes
    .filter((meme) => category === "All" || meme.categories.includes(category))
    .map((meme) => {
      const haystack = normalize([
        meme.title,
        ...meme.aliases,
        meme.shortDescription,
        meme.meaning,
        meme.originDescription,
        meme.culturalContext,
        meme.categories.join(" ")
      ].join(" "));
      const semanticBoost = words.reduce((score, word) => score + (haystack.includes(normalize(word)) ? 10 : 0), 0);
      const exactBoost = normalizedQuery && haystack.includes(normalizedQuery) ? 45 : 0;
      const aliasBoost = meme.aliases.some((alias) => normalize(alias).includes(normalizedQuery)) ? 30 : 0;
      return { meme, score: exactBoost + aliasBoost + semanticBoost + Math.round(meme.trendScore / 10) };
    })
    .filter(({ score }) => !query || score > 0)
    .sort((a, b) => b.score - a.score)
    .map(({ meme }) => meme);
}

function toMeme(row: MemeRow): Meme {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    aliases: row.meme_aliases?.map((alias) => alias.alias) || [],
    shortDescription: row.short_description,
    meaning: row.meaning,
    originDescription: row.origin_description,
    culturalContext: row.cultural_context,
    originDate: row.origin_date || "Unknown",
    originPlatform: row.origin_platform || "Unknown",
    originCreator: row.origin_creator || "Unknown",
    thumbnailUrl: row.thumbnail_url || "",
    trendStatus: row.trend_status as Meme["trendStatus"],
    trendScore: row.trend_score,
    trendChange24h: row.trend_change_24h,
    toneTags: row.tone_tags || [],
    intensity: row.intensity || {},
    usageContext: row.usage_context || {},
    timeline: row.timeline || [],
    categories: row.categories || [],
    relatedMemeIds: row.related_meme_ids || [],
    sources: (row.meme_sources || []).map(toSource),
    usageExamples: (row.meme_usage_examples || []).sort((a, b) => a.sort_order - b.sort_order).map(toUsageExample),
    feedItems: (row.meme_feed_items || []).map(toFeedItem),
    createdAt: row.created_at,
    updatedAt: row.updated_at
  };
}

function toSource(row: NonNullable<MemeRow["meme_sources"]>[number]): MemeSource {
  return {
    id: row.id,
    sourceType: row.source_type,
    sourceUrl: row.source_url,
    youtubeVideoId: row.youtube_video_id,
    youtubeTimestamp: row.youtube_timestamp,
    title: row.source_title || "출처",
    description: row.source_description || "",
    isOriginal: row.is_original,
    isVerified: row.is_verified,
    verificationStatus: row.verification_status || (row.is_verified ? "verified" : "reference_only")
  };
}

function toUsageExample(row: NonNullable<MemeRow["meme_usage_examples"]>[number]): UsageExample {
  return {
    id: row.id,
    situation: row.situation,
    exampleText: row.example_text,
    explanation: row.explanation || "",
    sortOrder: row.sort_order
  };
}

function toFeedItem(row: NonNullable<MemeRow["meme_feed_items"]>[number]): FeedItem {
  return {
    id: row.id,
    mediaType: row.media_type,
    mediaUrl: row.media_url,
    thumbnailUrl: row.thumbnail_url || row.media_url,
    sourceUrl: row.source_url || "",
    youtubeVideoId: row.youtube_video_id,
    youtubeTimestamp: row.youtube_timestamp,
    shortCaption: row.short_caption || "",
    trendScore: row.trend_score,
    trendStatus: row.trend_status as FeedItem["trendStatus"],
    publishedAt: row.published_at
  };
}

function normalize(value: string) {
  return value.toLowerCase().replace(/\s+/g, "");
}
