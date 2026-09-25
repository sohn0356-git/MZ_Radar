"use client";

import { useMemo, useState } from "react";
import { BottomNav } from "@/components/bottom-nav";
import { FeedView } from "@/components/feed-view";
import { InstallPrompt } from "@/components/install-prompt";
import { Onboarding } from "@/components/onboarding";
import { ProfileView } from "@/components/profile-view";
import { SearchView } from "@/components/search-view";
import { displayNameFor, useAuth } from "@/components/use-auth";
import { useLocalStore } from "@/components/use-local-store";
import {
  fetchFeedItems,
  fetchMemes,
  fetchSavedMemeIds,
  fetchUserHistory,
  isUsingMockData,
  recordSearch,
  recordView,
  submitMemeSuggestion,
  toggleSavedMeme
} from "@/lib/meme-service";
import { mockFeedItems, mockMemes } from "@/lib/mock-data";
import type { FeedItem, Meme } from "@/lib/types";
import type { MemeSuggestionInput } from "@/lib/types";
import { useEffect } from "react";

export type Tab = "search" | "feed" | "profile";

export default function Home() {
  const [tab, setTab] = useState<Tab>("search");
  const [selectedMeme, setSelectedMeme] = useState<Meme | null>(null);
  const [memes, setMemes] = useState<Meme[]>([]);
  const [feedItems, setFeedItems] = useState<{ item: FeedItem; meme: Meme }[]>([]);
  const [savedIds, setSavedIds] = useState<string[]>([]);
  const [viewedIds, setViewedIds] = useState<string[]>([]);
  const [searches, setSearches] = useState<string[]>([]);
  const [loadingData, setLoadingData] = useState(true);
  const [dataError, setDataError] = useState("");
  const store = useLocalStore();
  const auth = useAuth();

  useEffect(() => {
    let cancelled = false;
    setLoadingData(true);
    Promise.all([fetchMemes(), fetchFeedItems()])
      .then(([nextMemes, nextFeedItems]) => {
        if (cancelled) return;
        setMemes(nextMemes.length ? nextMemes : mockMemes);
        setFeedItems(nextFeedItems.length ? nextFeedItems : mockFeedItems);
        setDataError("");
      })
      .catch((error) => {
        if (!cancelled) {
          setMemes(mockMemes);
          setFeedItems(mockFeedItems);
          setDataError(error.message || "Failed to load meme data.");
        }
      })
      .finally(() => {
        if (!cancelled) setLoadingData(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (isUsingMockData) {
      setSavedIds(store.savedIds);
      setViewedIds(store.viewedIds);
      setSearches(store.searches);
      return;
    }
    const userId = auth.user?.id;
    if (!userId) {
      setSavedIds([]);
      setViewedIds([]);
      setSearches([]);
      return;
    }
    Promise.all([fetchSavedMemeIds(userId), fetchUserHistory(userId)])
      .then(([nextSavedIds, history]) => {
        setSavedIds(nextSavedIds);
        setViewedIds(history.viewedIds);
        setSearches(history.searches);
      })
      .catch(() => undefined);
  }, [auth.user?.id, store.savedIds, store.searches, store.viewedIds]);

  const savedMemes = useMemo(() => memes.filter((meme) => savedIds.includes(meme.id)), [memes, savedIds]);

  const openMeme = (meme: Meme, source: "search" | "feed" | "related" | "direct" = "direct") => {
    setViewedIds((current) => [meme.id, ...current.filter((id) => id !== meme.id)].slice(0, 30));
    if (isUsingMockData) {
      store.addViewed(meme.id);
    }
    recordView(auth.user?.id || null, meme.id, source);
    setSelectedMeme(meme);
    setTab("search");
  };

  const toggleSave = async (memeId: string) => {
    if (isUsingMockData) {
      store.toggleSave(memeId);
      return;
    }
    if (!auth.user) {
      await auth.signInWithGoogle();
      return;
    }
    const currentlySaved = savedIds.includes(memeId);
    setSavedIds((current) => currentlySaved ? current.filter((id) => id !== memeId) : [memeId, ...current]);
    try {
      await toggleSavedMeme(auth.user.id, memeId, currentlySaved);
    } catch {
      setSavedIds((current) => currentlySaved ? [memeId, ...current] : current.filter((id) => id !== memeId));
    }
  };

  const saveSearch = (query: string, selectedMemeId?: string) => {
    if (!query.trim()) return;
    if (isUsingMockData) {
      store.addSearch(query);
      return;
    }
    setSearches((current) => [query.trim(), ...current.filter((item) => item !== query.trim())].slice(0, 12));
    recordSearch(auth.user?.id || null, query, selectedMemeId);
  };

  const suggestMeme = async (input: MemeSuggestionInput) => {
    try {
      const savedToSupabase = await submitMemeSuggestion(auth.user?.id || null, input);
      store.addSuggestion(input);
      return savedToSupabase ? "remote" as const : "local" as const;
    } catch {
      store.addSuggestion(input);
      return "local" as const;
    }
  };

  return (
    <>
      {!store.onboarded && <Onboarding onComplete={store.finishOnboarding} />}
      <main className="app-shell">
        <div className="topbar">
          <div>
            <p className="eyebrow">Meme Radar</p>
            <h1>Meme Radar</h1>
          </div>
          <InstallPrompt />
        </div>
        {!isUsingMockData && !auth.configured && (
          <section className="detail-section">
            <h3>Supabase 설정 필요</h3>
            <p>
              배포 환경에 Supabase URL과 publishable key를 설정한 뒤 migration과 seed SQL을 실행하세요.
            </p>
          </section>
        )}
        {dataError && (
          <section className="detail-section">
            <h3>데이터를 불러오지 못했습니다</h3>
            <p>{dataError}</p>
          </section>
        )}
        {tab === "search" && (
          <SearchView
            memes={memes}
            loading={loadingData}
            selectedMeme={selectedMeme}
            onSelectMeme={(meme) => openMeme(meme, "search")}
            onCloseDetail={() => setSelectedMeme(null)}
            savedIds={savedIds}
            onToggleSave={toggleSave}
            onSearch={saveSearch}
            onSuggestMeme={suggestMeme}
          />
        )}
        {tab === "feed" && (
          <FeedView
            items={feedItems}
            savedIds={savedIds}
            onToggleSave={toggleSave}
            onOpenMeme={(meme) => openMeme(meme, "feed")}
          />
        )}
        {tab === "profile" && (
          <ProfileView
            memes={memes}
            savedMemes={savedMemes}
            savedIds={savedIds}
            viewedIds={viewedIds}
            searches={searches}
            suggestions={store.suggestions}
            user={auth.user}
            displayName={displayNameFor(auth.user)}
            authConfigured={auth.configured}
            onSignIn={auth.signInWithGoogle}
            onSignOut={auth.signOut}
            onOpenMeme={(meme) => openMeme(meme, "direct")}
            onToggleSave={toggleSave}
          />
        )}
      </main>
      <BottomNav active={tab} onChange={setTab} />
    </>
  );
}
