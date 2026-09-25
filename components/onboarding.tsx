"use client";

import { ArrowRight } from "lucide-react";
import { useState } from "react";

const steps = [
  { title: "밈은 너무 빨리 바뀝니다.", body: "놓친 표현도 몇 초 안에 뜻과 맥락을 확인하세요." },
  { title: "이름을 몰라도 괜찮아요.", body: "사람, 상황, 들은 단어 일부만 입력해도 찾을 수 있습니다." },
  { title: "출처를 확인합니다.", body: "검증되지 않은 영상은 억지로 붙이지 않습니다." },
  { title: "요즘 흐름을 넘겨보세요.", body: "검증된 짧은 콘텐츠가 생기면 피드에서 빠르게 볼 수 있습니다." },
  { title: "내가 궁금한 밈을 모아두세요.", body: "저장하고 다시 보면서 나만의 밈 감각을 업데이트하세요." }
];

export function Onboarding({ onComplete }: { onComplete: () => void }) {
  const [index, setIndex] = useState(0);
  const step = steps[index];
  const final = index === steps.length - 1;

  return (
    <div className="onboarding" role="dialog" aria-modal="true">
      <section className="onboarding-card">
        <div>
          <p className="eyebrow">Meme Radar</p>
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
            {final ? "시작하기" : "다음"}
            <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </div>
  );
}
