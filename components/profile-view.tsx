"use client";

import { Bookmark, Clock, History, LogIn, LogOut, Search } from "lucide-react";
import type { User } from "@supabase/supabase-js";
import type { Meme } from "@/lib/types";
import { avatarFor } from "@/components/use-auth";

const collections = ["Favorites", "Funny", "Work", "Friends", "Reactions"];

export function ProfileView({
  memes,
  savedMemes,
  savedIds,
  viewedIds,
  searches,
  user,
  displayName,
  authConfigured,
  onSignIn,
  onSignOut,
  onOpenMeme,
  onToggleSave
}: {
  memes: Meme[];
  savedMemes: Meme[];
  savedIds: string[];
  viewedIds: string[];
  searches: string[];
  user: User | null;
  displayName: string;
  authConfigured: boolean;
  onSignIn: () => void;
  onSignOut: () => void;
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
        <div className="avatar">{avatarFor(user) ? <img src={avatarFor(user)} alt="" /> : "밈"}</div>
        <div>
          <p className="eyebrow">Profile</p>
          <h2 style={{ margin: "2px 0 6px" }}>{displayName}</h2>
          <p className="muted" style={{ margin: 0 }}>
            {user ? "Saved memes and history are synced to your profile." : "Browse freely. Sign in when you want to save memes."}
          </p>
          {authConfigured && (
            <button className="secondary-btn" type="button" onClick={user ? onSignOut : onSignIn} style={{ marginTop: 10 }}>
              {user ? <LogOut size={17} /> : <LogIn size={17} />}
              {user ? "Sign out" : "Continue with Google"}
            </button>
          )}
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
        <div className="image-grid">
          {(savedMemes.length ? savedMemes : memes.slice(0, 4)).map((meme) => (
            <button className="image-grid-item" key={meme.id} type="button" onClick={() => onOpenMeme(meme)}>
              <img src={meme.thumbnailUrl} alt="" />
              <span>{meme.title}</span>
            </button>
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
