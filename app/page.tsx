"use client";

import { useMemo, useState } from "react";
import { BottomNav } from "@/components/bottom-nav";
import { FeedView } from "@/components/feed-view";
import { InstallPrompt } from "@/components/install-prompt";
import { Onboarding } from "@/components/onboarding";
import { ProfileView } from "@/components/profile-view";
import { SearchView } from "@/components/search-view";
import { useLocalStore } from "@/components/use-local-store";
import { Meme, memes } from "@/lib/memes";

export type Tab = "search" | "feed" | "profile";

export default function Home() {
  const [tab, setTab] = useState<Tab>("search");
  const [selectedMeme, setSelectedMeme] = useState<Meme | null>(null);
  const store = useLocalStore();

  const savedMemes = useMemo(
    () => memes.filter((meme) => store.savedIds.includes(meme.id)),
    [store.savedIds]
  );

  const openMeme = (meme: Meme) => {
    store.addViewed(meme.id);
    setSelectedMeme(meme);
    setTab("search");
  };

  return (
    <>
      {!store.onboarded && <Onboarding onComplete={store.finishOnboarding} />}
      <main className="app-shell">
        <div className="topbar">
          <div>
            <p className="eyebrow">MZ Radar</p>
            <h1>밈레이더</h1>
          </div>
          <InstallPrompt />
        </div>
        {tab === "search" && (
          <SearchView
            selectedMeme={selectedMeme}
            onSelectMeme={openMeme}
            onCloseDetail={() => setSelectedMeme(null)}
            savedIds={store.savedIds}
            onToggleSave={store.toggleSave}
            onSearch={store.addSearch}
          />
        )}
        {tab === "feed" && (
          <FeedView
            savedIds={store.savedIds}
            onToggleSave={store.toggleSave}
            onOpenMeme={openMeme}
          />
        )}
        {tab === "profile" && (
          <ProfileView
            savedMemes={savedMemes}
            savedIds={store.savedIds}
            viewedIds={store.viewedIds}
            searches={store.searches}
            onOpenMeme={openMeme}
            onToggleSave={store.toggleSave}
          />
        )}
      </main>
      <BottomNav active={tab} onChange={setTab} />
    </>
  );
}
