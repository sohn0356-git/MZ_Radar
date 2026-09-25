"use client";

import { Bookmark, Share2, Volume2, VolumeX } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import type { FeedItem, Meme } from "@/lib/types";

export function FeedView({
  items,
  savedIds,
  onToggleSave,
  onOpenMeme
}: {
  items: { item: FeedItem; meme: Meme }[];
  savedIds: string[];
  onToggleSave: (id: string) => void;
  onOpenMeme: (meme: Meme) => void;
}) {
  const [category, setCategory] = useState("Trending Now");
  const [activeIndex, setActiveIndex] = useState(0);
  const [muted, setMuted] = useState(true);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const feedCategories = useMemo(
    () => ["Trending Now", ...Array.from(new Set(items.flatMap(({ meme }) => meme.categories))).filter((item) => item !== "Trending Now")],
    [items]
  );
  const visibleItems = useMemo(() => {
    const base = category === "Trending Now" ? items : items.filter(({ meme }) => meme.categories.includes(category));
    const ordered = base.length ? base : items;
    return [...ordered, ...ordered, ...ordered];
  }, [category, items]);

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
        {visibleItems.map(({ item, meme }, index) => (
          <FeedCard
            key={`${item.id}-${index}`}
            item={item}
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
  item,
  meme,
  active,
  muted,
  saved,
  onToggleMute,
  onToggleSave,
  onOpen
}: {
  item: FeedItem;
  meme: Meme;
  active: boolean;
  muted: boolean;
  saved: boolean;
  onToggleMute: () => void;
  onToggleSave: () => void;
  onOpen: () => void;
}) {
  const embedSrc = item.youtubeVideoId
    ? `https://www.youtube.com/embed/${item.youtubeVideoId}?autoplay=1&mute=${muted ? 1 : 0}&playsinline=1&controls=0&rel=0${item.youtubeTimestamp ? `&start=${timestampToSeconds(item.youtubeTimestamp)}` : ""}`
    : "";

  return (
    <article className="feed-card">
      {active && item.mediaType === "video" && embedSrc ? (
        <iframe
          className="feed-video"
          src={embedSrc}
          title={meme.title}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <img src={item.thumbnailUrl} alt="" loading={active ? "eager" : "lazy"} />
      )}
      <button className="sound-chip" type="button" onClick={onToggleMute}>
        {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
      </button>
      <div className="feed-info">
        <span className="badge hot">{item.trendStatus} · Trend Score {item.trendScore}</span>
        <h2>{meme.title}</h2>
        <p>{item.shortCaption || meme.shortDescription}</p>
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

function timestampToSeconds(timestamp: string) {
  const parts = timestamp.split(":").map((part) => Number(part));
  if (parts.some(Number.isNaN)) return 0;
  return parts.reduce((total, part) => total * 60 + part, 0);
}
