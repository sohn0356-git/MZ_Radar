"use client";

import { Search, SlidersHorizontal } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Meme, categories, searchMemes } from "@/lib/memes";
import { MemeCard } from "@/components/meme-card";
import { MemeDetail } from "@/components/meme-detail";

export function SearchView({
  selectedMeme,
  onSelectMeme,
  onCloseDetail,
  savedIds,
  onToggleSave,
  onSearch
}: {
  selectedMeme: Meme | null;
  onSelectMeme: (meme: Meme) => void;
  onCloseDetail: () => void;
  savedIds: string[];
  onToggleSave: (id: string) => void;
  onSearch: (query: string) => void;
}) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const results = useMemo(() => searchMemes(query, category), [query, category]);

  useEffect(() => {
    const handle = window.setTimeout(() => onSearch(query), 700);
    return () => window.clearTimeout(handle);
  }, [query, onSearch]);

  if (selectedMeme) {
    return (
      <MemeDetail
        meme={selectedMeme}
        savedIds={savedIds}
        onBack={onCloseDetail}
        onToggleSave={onToggleSave}
        onOpenMeme={onSelectMeme}
      />
    );
  }

  return (
    <section>
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
