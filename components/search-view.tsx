"use client";

import { Search, SlidersHorizontal } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { searchMemes } from "@/lib/meme-service";
import type { Meme } from "@/lib/types";
import type { MemeSuggestionInput } from "@/lib/types";
import { MemeCard } from "@/components/meme-card";
import { MemeDetail } from "@/components/meme-detail";
import { SafeImage } from "@/components/safe-image";
import { labelForCategory, labelForTrend } from "@/lib/labels";

export function SearchView({
  memes,
  loading,
  selectedMeme,
  onSelectMeme,
  onCloseDetail,
  savedIds,
  onToggleSave,
  onSearch,
  onSuggestMeme
}: {
  memes: Meme[];
  loading: boolean;
  selectedMeme: Meme | null;
  onSelectMeme: (meme: Meme) => void;
  onCloseDetail: () => void;
  savedIds: string[];
  onToggleSave: (id: string) => void;
  onSearch: (query: string, selectedMemeId?: string) => void;
  onSuggestMeme: (input: MemeSuggestionInput) => Promise<"local" | "remote">;
}) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [showSuggest, setShowSuggest] = useState(false);
  const [suggestionStatus, setSuggestionStatus] = useState("");

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
            placeholder="밈 이름, 사람, 상황을 검색"
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
                <SafeImage src={meme.thumbnailUrl} label={meme.title} />
                <span>
                  <b>{label}</b>
                  <small>{meme.title} · {reason}</small>
                </span>
                <em>{labelForTrend(meme.trendStatus)}</em>
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
            {item === "All" ? "전체" : labelForCategory(item)}
          </button>
        ))}
      </div>

      <h2 className="section-title">{query ? "검색 결과" : "지금 많이 보는 밈"}</h2>
      {!query && (
        <button className="add-meme-btn" type="button" onClick={() => setShowSuggest(true)}>
          새 밈 제안하기
        </button>
      )}
      {!query && (
        <div className="discovery-strip">
          {memes.slice(0, 6).map((meme) => (
            <button className="trend-tile" key={meme.id} type="button" onClick={() => onSelectMeme(meme)}>
              <SafeImage src={meme.thumbnailUrl} label={meme.title} />
              <span>{meme.title}</span>
            </button>
          ))}
        </div>
      )}
      {loading && <p className="muted">밈 데이터를 불러오는 중입니다...</p>}
      {!loading && !results.length && <p className="muted">맞는 밈을 찾지 못했습니다.</p>}
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
      {showSuggest && (
        <SuggestMemeSheet
          onClose={() => setShowSuggest(false)}
          onSubmit={async (input) => {
            const result = await onSuggestMeme(input);
            setSuggestionStatus(result === "remote" ? "제안이 검토 대기열에 등록됐습니다." : "Supabase가 준비되기 전까지 이 기기에 임시 저장했습니다.");
            setShowSuggest(false);
          }}
        />
      )}
      {suggestionStatus && <p className="toast-message">{suggestionStatus}</p>}
    </section>
  );
}

function SuggestMemeSheet({
  onClose,
  onSubmit
}: {
  onClose: () => void;
  onSubmit: (input: MemeSuggestionInput) => Promise<void>;
}) {
  const [input, setInput] = useState<MemeSuggestionInput>({
    title: "",
    aliases: "",
    meaning: "",
    origin: "",
    referenceUrl: ""
  });
  const valid = input.title.trim() && input.meaning.trim() && input.referenceUrl.trim();

  const update = (key: keyof MemeSuggestionInput, value: string) => {
    setInput((current) => ({ ...current, [key]: value }));
  };

  return (
    <div className="sheet-backdrop" role="dialog" aria-modal="true">
      <form
        className="suggest-sheet"
        onSubmit={async (event) => {
          event.preventDefault();
          if (!valid) return;
          await onSubmit(input);
        }}
      >
        <div className="sheet-handle" />
        <div className="sheet-head">
          <div>
            <p className="eyebrow">참여형 밈 DB</p>
            <h2>새 밈 제안</h2>
          </div>
          <button className="chip" type="button" onClick={onClose}>닫기</button>
        </div>
        <label>
          밈 이름
          <input value={input.title} onChange={(event) => update("title", event.target.value)} placeholder="예: 장원영 OO" />
        </label>
        <label>
          별칭
          <input value={input.aliases} onChange={(event) => update("aliases", event.target.value)} placeholder="쉼표로 구분" />
        </label>
        <label>
          뜻
          <textarea value={input.meaning} onChange={(event) => update("meaning", event.target.value)} placeholder="이 밈이 어떤 의미인지 적어주세요." />
        </label>
        <label>
          유래
          <textarea value={input.origin} onChange={(event) => update("origin", event.target.value)} placeholder="처음 본 곳, 퍼진 계기, 불확실한 부분을 적어주세요." />
        </label>
        <label>
          검증 출처 URL
          <input value={input.referenceUrl} onChange={(event) => update("referenceUrl", event.target.value)} placeholder="https://..." />
        </label>
        <button className="primary-btn" type="submit" disabled={!valid}>
          검토 요청하기
        </button>
      </form>
    </div>
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
        let reason = "화제";
        if (normalized.startsWith(q)) {
          score += 100;
          reason = "앞글자 일치";
        } else if (title.includes(q)) {
          score += 80;
          reason = "제목 일치";
        } else if (aliases.some((alias) => alias.includes(q))) {
          score += 70;
          reason = "별칭 일치";
        } else if (normalized.includes(q)) {
          score += 50;
          reason = "키워드 일치";
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
