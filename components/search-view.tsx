"use client";

import { Search, SlidersHorizontal } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { searchMemes } from "@/lib/meme-service";
import type { Meme } from "@/lib/types";
import { MemeCard } from "@/components/meme-card";
import { MemeDetail } from "@/components/meme-detail";

export function SearchView({
  memes,
  loading,
  selectedMeme,
  onSelectMeme,
  onCloseDetail,
  savedIds,
  onToggleSave,
  onSearch
}: {
  memes: Meme[];
  loading: boolean;
  selectedMeme: Meme | null;
  onSelectMeme: (meme: Meme) => void;
  onCloseDetail: () => void;
  savedIds: string[];
  onToggleSave: (id: string) => void;
  onSearch: (query: string, selectedMemeId?: string) => void;
}) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const categories = useMemo(
    () => Array.from(new Set(memes.flatMap((meme) => meme.categories))).sort(),
    [memes]
  );
  const results = useMemo(() => searchMemes(memes, query, category), [memes, query, category]);
  const suggestions = useMemo(() => buildSuggestions(memes, query).slice(0, 8), [memes, query]);

  useEffect(() => {
    const handle = window.setTimeout(() => onSearch(query), 700);
    return () => window.clearTimeout(handle);
  }, [query, onSearch]);

  if (selectedMeme) {
    return (
      <MemeDetail
        meme={selectedMeme}
        memes={memes}
        savedIds={savedIds}
        onBack={onCloseDetail}
        onToggleSave={onToggleSave}
        onOpenMeme={onSelectMeme}
      />
    );
  }

  return (
    <section>
      <div className="search-stage">
        <label className="search-box">
          <Search size={22} />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search a meme, phrase, or situation"
            autoComplete="off"
          />
          <SlidersHorizontal size={20} />
        </label>
        {query.trim() && suggestions.length > 0 && (
          <div className="suggestions-panel">
            {suggestions.map(({ meme, label, reason }) => (
              <button
                className="suggestion-item"
                type="button"
                key={`${meme.id}-${label}`}
                onClick={() => {
                  onSearch(query, meme.id);
                  onSelectMeme(meme);
                }}
              >
                <img src={meme.thumbnailUrl} alt="" />
                <span>
                  <b>{label}</b>
                  <small>{meme.title} · {reason}</small>
                </span>
                <em>{meme.trendStatus}</em>
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="chips" aria-label="Search filters">
        {["All", ...categories].map((item) => (
          <button
            key={item}
            className={`chip ${category === item ? "active" : ""}`}
            type="button"
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <h2 className="section-title">{query ? "Relevant Meme Entities" : "Trending Meme Entities"}</h2>
      {!query && (
        <div className="discovery-strip">
          {memes.slice(0, 6).map((meme) => (
            <button className="trend-tile" key={meme.id} type="button" onClick={() => onSelectMeme(meme)}>
              <img src={meme.thumbnailUrl} alt="" />
              <span>{meme.title}</span>
            </button>
          ))}
        </div>
      )}
      {loading && <p className="muted">Loading meme database from Supabase...</p>}
      {!loading && !results.length && <p className="muted">No matching meme entities found.</p>}
      <div className="result-grid">
        {results.map((meme) => (
          <MemeCard
            key={meme.id}
            meme={meme}
            saved={savedIds.includes(meme.id)}
            onOpen={onSelectMeme}
            onToggleSave={onToggleSave}
          />
        ))}
      </div>
    </section>
  );
}

function buildSuggestions(memes: Meme[], query: string) {
  const q = normalize(query);
  if (!q) return [];
  return memes
    .flatMap((meme) => {
      const labels = [meme.title, ...meme.aliases, ...meme.categories];
      return labels.map((label) => {
        const normalized = normalize(label);
        const title = normalize(meme.title);
        const aliases = meme.aliases.map(normalize);
        let score = meme.trendScore / 10;
        let reason = "Trending";
        if (normalized.startsWith(q)) {
          score += 100;
          reason = "Prefix match";
        } else if (title.includes(q)) {
          score += 80;
          reason = "Title match";
        } else if (aliases.some((alias) => alias.includes(q))) {
          score += 70;
          reason = "Alias match";
        } else if (normalized.includes(q)) {
          score += 50;
          reason = "Keyword match";
        }
        return { meme, label, score, reason };
      });
    })
    .filter((item) => item.score > item.meme.trendScore / 10)
    .sort((a, b) => b.score - a.score)
    .filter((item, index, array) => array.findIndex((candidate) => candidate.meme.id === item.meme.id) === index);
}

function normalize(value: string) {
  return value.toLowerCase().replace(/\s+/g, "");
}
