"use client";

import { ArrowLeft, Bookmark, ExternalLink, FileText, Play, Share2 } from "lucide-react";
import type { Meme } from "@/lib/types";
import { MemeCard } from "@/components/meme-card";
import { SafeImage } from "@/components/safe-image";
import { labelForTrend } from "@/lib/labels";

export function MemeDetail({
  meme,
  memes,
  savedIds,
  onBack,
  onToggleSave,
  onOpenMeme
}: {
  meme: Meme;
  memes: Meme[];
  savedIds: string[];
  onBack: () => void;
  onToggleSave: (id: string) => void;
  onOpenMeme: (meme: Meme) => void;
}) {
  const saved = savedIds.includes(meme.id);
  const related = meme.relatedMemeIds
    .map((id) => memes.find((candidate) => candidate.id === id))
    .filter(Boolean) as Meme[];
  const primarySource = meme.sources.find((source) => source.isOriginal) || meme.sources[0];
  const primaryFeedItem = meme.feedItems[0];
  const heroImage = primaryFeedItem?.thumbnailUrl || meme.thumbnailUrl;
  const youtubeUrl = primarySource?.youtubeVideoId
    ? `https://www.youtube.com/embed/${primarySource.youtubeVideoId}${primarySource.youtubeTimestamp ? `?start=${timestampToSeconds(primarySource.youtubeTimestamp)}` : ""}`
    : primarySource?.sourceUrl || "";

  return (
    <div className="detail">
      <div className="detail-header">
        <button className="secondary-btn" type="button" onClick={onBack}>
          <ArrowLeft size={18} />
          뒤로
        </button>
        <div style={{ display: "flex", gap: 8 }}>
          <button
            className="icon-btn"
            type="button"
            title="공유"
            aria-label="공유"
            onClick={() => navigator.share?.({ title: meme.title, text: meme.shortDescription })}
          >
            <Share2 size={18} />
          </button>
          <button
            className="primary-btn"
            type="button"
            onClick={() => onToggleSave(meme.id)}
          >
            <Bookmark size={18} fill={saved ? "currentColor" : "none"} />
            {saved ? "저장됨" : "저장"}
          </button>
        </div>
      </div>

      <section className="hero-media">
        <SafeImage src={heroImage} label={meme.title} loading="eager" />
        <div className="hero-overlay">
          <div className="badge-row">
            <span className="badge hot">{labelForTrend(meme.trendStatus)}</span>
            <span className="badge">24시간 {meme.trendChange24h > 0 ? "+" : ""}{meme.trendChange24h}%</span>
          </div>
          <h2>{meme.title}</h2>
          <p>{meme.shortDescription}</p>
        </div>
      </section>

      <Section title="무슨 뜻인가요?">
        <p>{meme.meaning}</p>
      </Section>

      <Section title="유래와 맥락">
        <p>{meme.originDescription}</p>
        <p style={{ marginTop: 10 }}>{meme.culturalContext}</p>
        <div className="badge-row" style={{ marginTop: 12 }}>
          <span className="badge">{meme.originDate}</span>
          <span className="badge">{meme.originPlatform}</span>
          <span className="badge">{meme.originCreator}</span>
        </div>
      </Section>

      <Section title="출처와 영상">
        {primarySource?.youtubeVideoId ? (
          <>
            <div className="video-embed">
              <iframe
                src={`${youtubeUrl}${youtubeUrl.includes("?") ? "&" : "?"}rel=0&playsinline=1`}
                title={primarySource.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <a className="secondary-btn" href={primarySource.sourceUrl} target="_blank" rel="noreferrer" style={{ marginTop: 10 }}>
              <Play size={16} fill="currentColor" />
              유튜브에서 열기
            </a>
          </>
        ) : (
          <div className="reference-panel">
            <FileText size={22} />
            <div>
              <strong>검증된 유튜브 영상이 아직 없습니다</strong>
              <p>정확히 매칭되는 원본/대표 영상이 확인되기 전까지 앱은 임의 영상을 재생하지 않습니다.</p>
            </div>
          </div>
        )}
        {primarySource?.youtubeVideoId ? null : primarySource?.sourceUrl ? (
          <a className="secondary-btn" href={primarySource.sourceUrl} target="_blank" rel="noreferrer" style={{ marginTop: 10 }}>
            <ExternalLink size={16} />
            검증 출처 열기
          </a>
        ) : null}
        <p style={{ marginTop: 10 }}>
          {primarySource?.title || "출처"} · {sourceTypeLabel(primarySource?.sourceType)}
          <br />
          <a href={primarySource?.sourceUrl || "#"} target="_blank" rel="noreferrer">
            {primarySource?.isVerified ? "검증 참고자료" : "초기 사용 사례"} <ExternalLink size={14} style={{ verticalAlign: "-2px" }} />
          </a>
        </p>
      </Section>

      <Section title="이렇게 씁니다">
        {meme.usageExamples.map((example) => (
          <div className="example" key={example.situation}>
            <strong>상황: {example.situation}</strong>
            <p>{example.exampleText}</p>
            {example.explanation && <p style={{ marginTop: 8 }}>{example.explanation}</p>}
          </div>
        ))}
      </Section>

      <Section title="말투와 강도">
        <div className="badge-row">
          {meme.toneTags.map((tag) => (
            <span className="badge" key={tag}>{tag}</span>
          ))}
        </div>
        <div className="meter">
          {Object.entries(meme.intensity).map(([label, value]) => (
            <div className="meter-row" key={label}>
              <span>{label}</span>
              <span className="meter-track">
                <span className="meter-fill" style={{ width: `${value}%` }} />
              </span>
              <b>{value}%</b>
            </div>
          ))}
        </div>
      </Section>

      <Section title="어디서 쓰면 좋나요?">
        <div className="context-grid">
          {Object.entries(meme.usageContext).map(([place, guidance]) => (
            <div className="context-item" key={place}>
              <b>{place}</b>
              <span>{guidance}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="밈 흐름">
        <div className="timeline">
          {meme.timeline.map((item) => (
            <div className="timeline-item" key={`${item.date}-${item.event}`}>
              <div className="timeline-date">{item.date}</div>
              <div className="timeline-copy">{item.event}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="관련 밈">
        <div className="result-grid">
          {related.map((item) => (
            <MemeCard
              key={item.id}
              meme={item}
              saved={savedIds.includes(item.id)}
              onOpen={onOpenMeme}
              onToggleSave={onToggleSave}
            />
          ))}
        </div>
      </Section>
    </div>
  );
}

function sourceTypeLabel(type?: string) {
  if (type === "article") return "참고자료";
  if (type === "youtube") return "유튜브";
  if (type === "community") return "커뮤니티";
  if (type === "social_media") return "SNS";
  return "출처";
}

function timestampToSeconds(timestamp: string) {
  const parts = timestamp.split(":").map((part) => Number(part));
  if (parts.some(Number.isNaN)) return 0;
  return parts.reduce((total, part) => total * 60 + part, 0);
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="detail-section">
      <h3>{title}</h3>
      {children}
    </section>
  );
}
