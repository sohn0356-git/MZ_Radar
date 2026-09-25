"use client";

import { ArrowRight } from "lucide-react";
import { useState } from "react";

const steps = [
  { title: "Memes move fast.", body: "놓친 밈도 몇 초 안에 뜻과 맥락을 확인하세요." },
  { title: "Don't get left behind.", body: "지금 뜨는 표현을 부담 없이 따라잡을 수 있습니다." },
  { title: "Search what you don't understand.", body: "정확한 이름을 몰라도 상황과 문장으로 찾아보세요." },
  { title: "Swipe through what's trending.", body: "짧은 피드로 요즘 쓰이는 밈을 계속 발견하세요." },
  { title: "Stay in the loop.", body: "마음에 드는 밈은 저장하고 나만의 컬렉션으로 관리하세요." }
];

export function Onboarding({ onComplete }: { onComplete: () => void }) {
  const [index, setIndex] = useState(0);
  const step = steps[index];
  const final = index === steps.length - 1;

  return (
    <div className="onboarding" role="dialog" aria-modal="true">
      <section className="onboarding-card">
        <div>
          <p className="eyebrow">Never miss the meme everyone is talking about.</p>
          <h2>{step.title}</h2>
          <p className="muted">{step.body}</p>
        </div>
        <div>
          <div className="onboarding-dots" aria-hidden="true">
            {steps.map((_, dotIndex) => (
              <span key={dotIndex} className={dotIndex === index ? "active" : ""} />
            ))}
          </div>
          <button
            className="primary-btn"
            style={{ width: "100%", marginTop: 22 }}
            type="button"
            onClick={() => (final ? onComplete() : setIndex((current) => current + 1))}
          >
            {final ? "Start Exploring" : "Next"}
            <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </div>
  );
}
