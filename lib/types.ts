export type TrendStatus = "new" | "rising" | "viral" | "stable" | "declining" | "revived" | "classic";

export type MemeSource = {
  id: string;
  sourceType: string;
  sourceUrl: string;
  youtubeVideoId: string | null;
  youtubeTimestamp: string | null;
  title: string;
  description: string;
  isOriginal: boolean;
  isVerified: boolean;
};

export type UsageExample = {
  id: string;
  situation: string;
  exampleText: string;
  explanation: string;
  sortOrder: number;
};

export type FeedItem = {
  id: string;
  mediaType: "image" | "video";
  mediaUrl: string;
  thumbnailUrl: string;
  sourceUrl: string;
  youtubeVideoId: string | null;
  youtubeTimestamp: string | null;
  shortCaption: string;
  trendScore: number;
  trendStatus: TrendStatus;
  publishedAt: string;
};

export type Meme = {
  id: string;
  slug: string;
  title: string;
  aliases: string[];
  shortDescription: string;
  meaning: string;
  originDescription: string;
  culturalContext: string;
  originDate: string;
  originPlatform: string;
  originCreator: string;
  thumbnailUrl: string;
  trendStatus: TrendStatus;
  trendScore: number;
  trendChange24h: number;
  toneTags: string[];
  intensity: Record<string, number>;
  usageContext: Record<string, string>;
  timeline: { date: string; event: string }[];
  categories: string[];
  relatedMemeIds: string[];
  sources: MemeSource[];
  usageExamples: UsageExample[];
  feedItems: FeedItem[];
  createdAt: string;
  updatedAt: string;
};

export type UserProfile = {
  id: string;
  displayName: string;
  email: string;
  avatarUrl: string;
  createdAt: string;
  updatedAt: string;
};
