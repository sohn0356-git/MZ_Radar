"use client";

import { Bookmark, Share2, Volume2, VolumeX } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { Meme, categories, memes } from "@/lib/memes";

const feedCategories = categories.filter((category) =>
  ["Trending Now", "New", "Revived", "Classic", "Gaming", "YouTube", "Streamers", "Celebrities", "Sports", "Workplace", "School", "Animals", "Korean Communities"].includes(category)
);

export function FeedView({
  savedIds,
  onToggleSave,
  onOpenMeme
}: {
  savedIds: string[];
  onToggleSave: (id: string) => void;
  onOpenMeme: (meme: Meme) => void;
}) {
  const [category, setCategory] = useState("Trending Now");
  const [activeIndex, setActiveIndex] = useState(0);
  const [muted, setMuted] = useState(true);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const items = useMemo(() => {
    const base = memes.filter((meme) => meme.categories.includes(category));
    const ordered = (base.length ? base : memes).sort((a, b) => b.trendScore - a.trendScore);
    return [...ordered, ...ordered, ...ordered];
  }, [category]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const onScroll = () => {
      const height = container.clientHeight || 1;
      setActiveIndex(Math.round(container.scrollTop / height));
    };
    container.addEventListener("scroll", onScroll, { passive: true });
    return () => container.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="feed-shell">
      <div className="category-bar" aria-label="Feed categories">
        {feedCategories.map((item) => (
          <button
            key={item}
            className={`chip ${category === item ? "active" : ""}`}
            type="button"
            onClick={() => {
              setCategory(item);
              setActiveIndex(0);
              containerRef.current?.scrollTo({ top: 0 });
            }}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="feed-list" ref={containerRef}>
        {items.map((meme, index) => (
          <FeedCard
            key={`${meme.id}-${index}`}
            meme={meme}
            active={index === activeIndex}
            muted={muted}
            saved={savedIds.includes(meme.id)}
            onToggleMute={() => setMuted((current) => !current)}
            onToggleSave={() => onToggleSave(meme.id)}
            onOpen={() => onOpenMeme(meme)}
          />
        ))}
      </div>
    </section>
  );
}

function FeedCard({
  meme,
  active,
  muted,
  saved,
  onToggleMute,
  onToggleSave,
  onOpen
}: {
  meme: Meme;
  active: boolean;
  muted: boolean;
  saved: boolean;
  onToggleMute: () => void;
  onToggleSave: () => void;
  onOpen: () => void;
}) {
  const embedSrc = `${meme.youtubeVideoUrl}${meme.youtubeVideoUrl.includes("?") ? "&" : "?"}autoplay=1&mute=${muted ? 1 : 0}&playsinline=1&controls=0&loop=1`;

  return (
    <article className="feed-card">
      {active && meme.mediaType === "video" ? (
        <iframe
          className="feed-video"
          src={embedSrc}
          title={meme.title}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <img src={meme.mediaUrl} alt="" loading={active ? "eager" : "lazy"} />
      )}
      <button className="sound-chip" type="button" onClick={onToggleMute}>
        {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
      </button>
      <div className="feed-info">
        <span className="badge hot">{meme.trendStatus} · Trend Score {meme.trendScore}</span>
        <h2>{meme.title}</h2>
        <p>{meme.shortDescription}</p>
        <button className="primary-btn" type="button" onClick={onOpen}>
          Learn More
        </button>
      </div>
      <div className="feed-actions">
        <button className="icon-btn" type="button" onClick={onToggleSave} aria-label={saved ? "Unsave meme" : "Save meme"}>
          <Bookmark size={21} fill={saved ? "currentColor" : "none"} />
        </button>
        <button
          className="icon-btn"
          type="button"
          aria-label="Share meme"
          onClick={() => navigator.share?.({ title: meme.title, text: meme.shortDescription })}
        >
          <Share2 size={21} />
        </button>
      </div>
    </article>
  );
}
