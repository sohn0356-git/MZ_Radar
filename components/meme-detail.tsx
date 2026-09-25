"use client";

import { ArrowLeft, Bookmark, ExternalLink, Play, Share2 } from "lucide-react";
import { Meme, relatedFor } from "@/lib/memes";
import { MemeCard } from "@/components/meme-card";

export function MemeDetail({
  meme,
  savedIds,
  onBack,
  onToggleSave,
  onOpenMeme
}: {
  meme: Meme;
  savedIds: string[];
  onBack: () => void;
  onToggleSave: (id: string) => void;
  onOpenMeme: (meme: Meme) => void;
}) {
  const saved = savedIds.includes(meme.id);
  const related = relatedFor(meme);

  return (
    <div className="detail">
      <div className="detail-header">
        <button className="secondary-btn" type="button" onClick={onBack}>
          <ArrowLeft size={18} />
          Back
        </button>
        <div style={{ display: "flex", gap: 8 }}>
          <button
            className="icon-btn"
            type="button"
            title="Share"
            aria-label="Share meme"
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
            {saved ? "Saved" : "Save"}
          </button>
        </div>
      </div>

      <section className="hero-media">
        <img src={meme.mediaUrl} alt="" />
        <div className="hero-overlay">
          <div className="badge-row">
            <span className="badge hot">{meme.trendStatus}</span>
            <span className="badge">Trending {meme.trendChange24h > 0 ? "+" : ""}{meme.trendChange24h}% in 24h</span>
          </div>
          <h2>{meme.title}</h2>
          <p>{meme.shortDescription}</p>
        </div>
      </section>

      <Section title="What does this meme mean?">
        <p>{meme.fullDescription}</p>
      </Section>

      <Section title="Origin">
        <p>{meme.originDescription}</p>
        <div className="badge-row" style={{ marginTop: 12 }}>
          <span className="badge">{meme.originDate}</span>
          <span className="badge">{meme.originPlatform}</span>
          <span className="badge">{meme.originCreator}</span>
        </div>
      </Section>

      <Section title="Original YouTube Video">
        <a className="video-thumb" href={meme.youtubeVideoUrl} target="_blank" rel="noreferrer">
          <img src={meme.thumbnailUrl} alt="" />
          <span>
            <Play size={16} fill="currentColor" />
            Watch from {meme.youtubeTimestamp}
          </span>
        </a>
        <p style={{ marginTop: 10 }}>
          {meme.videoTitle} · {meme.channel}
          <br />
          <a href={meme.originalSourceUrl} target="_blank" rel="noreferrer">
            First known popular usage <ExternalLink size={14} style={{ verticalAlign: "-2px" }} />
          </a>
        </p>
      </Section>

      <Section title="How To Use It">
        {meme.usageExamples.map((example) => (
          <div className="example" key={example.situation}>
            <strong>Situation: {example.situation}</strong>
            <p>{example.conversation}</p>
          </div>
        ))}
      </Section>

      <Section title="Usage Tone">
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

      <Section title="Where It Is Appropriate">
        <div className="context-grid">
          {Object.entries(meme.usageContext).map(([place, guidance]) => (
            <div className="context-item" key={place}>
              <b>{place}</b>
              <span>{guidance}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Meme Timeline">
        <div className="timeline">
          {meme.timeline.map((item) => (
            <div className="timeline-item" key={`${item.date}-${item.event}`}>
              <div className="timeline-date">{item.date}</div>
              <div className="timeline-copy">{item.event}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Related Memes">
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

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="detail-section">
      <h3>{title}</h3>
      {children}
    </section>
  );
}
