"use client";

import { Bookmark, TrendingUp } from "lucide-react";
import { SafeImage } from "@/components/safe-image";
import { labelForTrend } from "@/lib/labels";
import type { Meme } from "@/lib/types";

export function MemeCard({
  meme,
  saved,
  onOpen,
  onToggleSave
}: {
  meme: Meme;
  saved: boolean;
  onOpen: (meme: Meme) => void;
  onToggleSave: (id: string) => void;
}) {
  return (
    <article className="meme-card" onClick={() => onOpen(meme)} role="button" tabIndex={0}>
      <div className="thumb">
        <SafeImage src={meme.thumbnailUrl} label={meme.title} />
      </div>
      <div className="card-copy">
        <div className="card-head">
          <h3>{meme.title}</h3>
          <button
            className="icon-btn"
            type="button"
            aria-label={saved ? "저장 취소" : "저장"}
            title={saved ? "저장 취소" : "저장"}
            onClick={(event) => {
              event.stopPropagation();
              onToggleSave(meme.id);
            }}
          >
            <Bookmark size={18} fill={saved ? "currentColor" : "none"} />
          </button>
        </div>
        <p>{meme.shortDescription}</p>
        <div className="badge-row">
          <span className="badge hot">
            <TrendingUp size={13} />
            {labelForTrend(meme.trendStatus)}
          </span>
          <span className="badge">지수 {meme.trendScore}</span>
          <span className="badge">{meme.trendChange24h > 0 ? "+" : ""}{meme.trendChange24h}%</span>
        </div>
      </div>
    </article>
  );
}
