"use client";

import { Bookmark, Clock, History, LogIn, LogOut, Search } from "lucide-react";
import type { User } from "@supabase/supabase-js";
import type { Meme } from "@/lib/types";
import { avatarFor } from "@/components/use-auth";
import { SafeImage } from "@/components/safe-image";

const collections = ["즐겨찾기", "웃긴 밈", "직장", "친구", "리액션"];

export function ProfileView({
  memes,
  savedMemes,
  savedIds,
  viewedIds,
  searches,
  suggestions,
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
  suggestions: {
    title: string;
    aliases: string;
    meaning: string;
    origin: string;
    referenceUrl: string;
    createdAt: string;
  }[];
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
          <p className="eyebrow">내 정보</p>
          <h2 style={{ margin: "2px 0 6px" }}>{displayName}</h2>
          <p className="muted" style={{ margin: 0 }}>
            {user ? "저장한 밈과 기록이 프로필에 연결됩니다." : "로그인 없이 둘러보고, 저장이 필요할 때만 로그인하세요."}
          </p>
          {authConfigured && (
            <button className="secondary-btn" type="button" onClick={user ? onSignOut : onSignIn} style={{ marginTop: 10 }}>
              {user ? <LogOut size={17} /> : <LogIn size={17} />}
              {user ? "로그아웃" : "구글로 계속하기"}
            </button>
          )}
        </div>
      </div>

      <div className="profile-panel">
        <h2>나의 밈 감각</h2>
        <div className="stats-grid">
          <Stat icon={<Clock size={18} />} value={viewedIds.length || 84} label="이번 주 조회" />
          <Stat icon={<Bookmark size={18} />} value={savedIds.length} label="저장한 밈" />
          <Stat icon={<History size={18} />} value={workplaceCount || 3} label="직장 밈" />
          <Stat icon={<Search size={18} />} value={memeAge} label="밈 나이" />
        </div>
        <p className="muted" style={{ marginBottom: 0 }}>
          {memeAge <= 28 ? "요즘 흐름을 잘 따라가고 있어요." : "최근 밈 몇 개만 따라잡으면 금방 회복됩니다."}
        </p>
      </div>

      <div className="profile-panel">
        <h2>컬렉션</h2>
        <div className="collection-list">
          {collections.map((collection, index) => (
            <div className="collection" key={collection}>
              <strong>{collection}</strong>
              <span className="badge">{Math.max(0, savedIds.length - index)}개</span>
            </div>
          ))}
        </div>
      </div>

      <div className="profile-panel">
        <h2>저장한 밈</h2>
        <div className="image-grid">
          {(savedMemes.length ? savedMemes : memes.slice(0, 4)).map((meme) => (
            <button className="image-grid-item" key={meme.id} type="button" onClick={() => onOpenMeme(meme)}>
              <SafeImage src={meme.thumbnailUrl} label={meme.title} />
              <span>{meme.title}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="profile-panel">
        <h2>내 제안</h2>
        {suggestions.length ? (
          <div className="suggestion-list">
            {suggestions.map((item) => (
              <article className="suggestion-row" key={`${item.title}-${item.createdAt}`}>
                <div>
                  <strong>{item.title}</strong>
                  <p>{item.meaning}</p>
                  <a href={item.referenceUrl} target="_blank" rel="noreferrer">출처 확인</a>
                </div>
                <span className="badge">검토 대기</span>
              </article>
            ))}
          </div>
        ) : (
          <p className="muted" style={{ margin: 0 }}>아직 제안한 밈이 없습니다.</p>
        )}
      </div>

      <div className="profile-panel">
        <h2>최근 본 밈</h2>
        <div className="badge-row">
          {(viewedMemes.length ? viewedMemes : memes.slice(4, 10)).map((meme) => (
            <button className="chip" type="button" key={meme.id} onClick={() => onOpenMeme(meme)}>
              {meme.title}
            </button>
          ))}
        </div>
      </div>

      <div className="profile-panel">
        <h2>검색 기록</h2>
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
