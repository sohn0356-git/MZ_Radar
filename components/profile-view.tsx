"use client";

import { Bookmark, Clock, History, Search } from "lucide-react";
import { Meme, memes } from "@/lib/memes";
import { MemeCard } from "@/components/meme-card";

const collections = ["Favorites", "Funny", "Work", "Friends", "Reactions"];

export function ProfileView({
  savedMemes,
  savedIds,
  viewedIds,
  searches,
  onOpenMeme,
  onToggleSave
}: {
  savedMemes: Meme[];
  savedIds: string[];
  viewedIds: string[];
  searches: string[];
  onOpenMeme: (meme: Meme) => void;
  onToggleSave: (id: string) => void;
}) {
  const viewedMemes = viewedIds
    .map((id) => memes.find((meme) => meme.id === id))
    .filter(Boolean) as Meme[];
  const workplaceCount = savedMemes.filter((meme) => meme.categories.includes("Workplace")).length;
  const memeAge = Math.max(22, Math.min(43, 43 - Math.round(savedMemes.length * 1.3) - Math.round(viewedIds.length * 0.35)));

  return (
    <section>
      <div className="profile-panel profile-hero">
        <div className="avatar">밈</div>
        <div>
          <p className="eyebrow">Profile</p>
          <h2 style={{ margin: "2px 0 6px" }}>Meme Explorer</h2>
          <p className="muted" style={{ margin: 0 }}>요즘 밈을 천천히 따라잡는 중입니다.</p>
        </div>
      </div>

      <div className="profile-panel">
        <h2>User Meme Stats</h2>
        <div className="stats-grid">
          <Stat icon={<Clock size={18} />} value={viewedIds.length || 84} label="viewed this week" />
          <Stat icon={<Bookmark size={18} />} value={savedIds.length} label="saved memes" />
          <Stat icon={<History size={18} />} value={workplaceCount || 3} label="workplace picks" />
          <Stat icon={<Search size={18} />} value={memeAge} label="Meme Age" />
        </div>
        <p className="muted" style={{ marginBottom: 0 }}>
          {memeAge <= 28 ? "You're keeping up with current trends." : "You may have missed a few recent memes, but it is recoverable."}
        </p>
      </div>

      <div className="profile-panel">
        <h2>Collections</h2>
        <div className="collection-list">
          {collections.map((collection, index) => (
            <div className="collection" key={collection}>
              <strong>{collection}</strong>
              <span className="badge">{Math.max(0, savedIds.length - index)} memes</span>
            </div>
          ))}
        </div>
      </div>

      <div className="profile-panel">
        <h2>Saved Memes</h2>
        <div className="result-grid">
          {(savedMemes.length ? savedMemes : memes.slice(0, 4)).map((meme) => (
            <MemeCard
              key={meme.id}
              meme={meme}
              saved={savedIds.includes(meme.id)}
              onOpen={onOpenMeme}
              onToggleSave={onToggleSave}
            />
          ))}
        </div>
      </div>

      <div className="profile-panel">
        <h2>Recently Viewed</h2>
        <div className="badge-row">
          {(viewedMemes.length ? viewedMemes : memes.slice(4, 10)).map((meme) => (
            <button className="chip" type="button" key={meme.id} onClick={() => onOpenMeme(meme)}>
              {meme.title}
            </button>
          ))}
        </div>
      </div>

      <div className="profile-panel">
        <h2>Search History</h2>
        <div className="badge-row">
          {(searches.length ? searches : ["중꺾마", "킹받네 뜻", "cat looking confused meme"]).map((item) => (
            <span className="badge" key={item}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stat({ icon, value, label }: { icon: React.ReactNode; value: number; label: string }) {
  return (
    <div className="stat">
      {icon}
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}
