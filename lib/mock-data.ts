import type { FeedItem, Meme, TrendStatus } from "@/lib/types";

type SeedMeme = {
  id: string;
  title: string;
  aliases: string[];
  trendPeriod: string;
  trendStatus: TrendStatus;
  shortDescription: string;
  meaning: string;
  origin: string;
  usage: string[];
  referenceUrl: string;
  youtubeUrl: string | null;
};

const seeds: SeedMeme[] = [
  {
    id: "jang-wonyoung-oo",
    title: "장원영 OO",
    aliases: ["장원영 밈", "장원영 OO 밈", "밤티 반대말", "원영고치"],
    trendPeriod: "2026-09",
    trendStatus: "trending",
    shortDescription: "보기 좋고 완성도가 높은 대상 앞에 '장원영'을 붙여 최고의 칭찬처럼 사용하는 밈.",
    meaning: "촌스럽거나 어설픈 것을 표현하는 '밤티'와 반대되는 개념으로, 예쁘고 세련되거나 완성도가 높은 것을 칭찬할 때 사용한다.",
    origin: "다마고치 커뮤니티에서 잘 자란 캐릭터를 '원영고치'라고 부르던 표현에서 확장된 것으로 소개된다. 이후 음식, 패션, 사진 등 다양한 대상 앞에 '장원영'을 붙이는 표현으로 확산됐다.",
    usage: ["장원영 불닭", "오늘 완전 장원영 하루다", "이 인테리어 진짜 장원영이다"],
    referenceUrl: "https://www.instablank.com/meme/209",
    youtubeUrl: null
  },
  {
    id: "kinda-chic-to",
    title: "Kinda Chic To",
    aliases: ["Kinda Chic To 밈", "하는 게 좀 시크하지", "돈 안 드는 자랑"],
    trendPeriod: "2026-09",
    trendStatus: "trending",
    shortDescription: "돈이나 명품이 아닌 소소한 습관과 성취를 '시크하다'고 표현하는 캡션형 밈.",
    meaning: "잘 자는 것, 감정을 잘 조절하는 것, 연락을 제때 하는 것처럼 작지만 긍정적인 행동을 멋있는 일처럼 자랑한다.",
    origin: "2026년 봄부터 Instagram Reels와 TikTok 등에서 'Kinda chic to...'로 시작하는 문장을 반복하는 포맷이 확산된 것으로 정리된다.",
    usage: ["Kinda chic to go to bed before midnight.", "Kinda chic to not reply when you're angry.", "일찍 자는 게 좀 시크하지."],
    referenceUrl: "https://www.instablank.com/meme/226",
    youtubeUrl: null
  },
  {
    id: "saxophones-are-getting-louder",
    title: "색소폰이 커지고 있다",
    aliases: ["Saxophones Are Getting Louder", "색소폰 밈", "불길한 색소폰"],
    trendPeriod: "2026-09",
    trendStatus: "trending",
    shortDescription: "평범한 상황에 불길한 색소폰 음악을 넣어 곧 큰일이 날 것처럼 연출하는 영상 밈.",
    meaning: "실제로는 별일 아닌 상황을 영화의 비극적인 장면처럼 과장하는 데 사용한다.",
    origin: "1991년 영화 'Boyz n the Hood'의 긴장감 있는 장면에 사용된 색소폰 사운드가 밈의 기반으로 소개된다. 이후 TikTok에서 평범한 상황에 해당 음악을 덧붙이는 형태로 재유행했다.",
    usage: ["월요일 아침 메일함을 여는 순간", "팀장님이 '잠깐 얘기 좀 하자'고 할 때", "시험 결과 확인 버튼을 누르기 직전"],
    referenceUrl: "https://www.instablank.com/meme/225",
    youtubeUrl: null
  },
  {
    id: "remember-november-2026",
    title: "Remember November 2026",
    aliases: ["Remember November 2026 밈", "AI 북극곰 밈", "11월 북극곰"],
    trendPeriod: "2026-09",
    trendStatus: "viral",
    shortDescription: "AI 북극곰이 'Remember November 2026'을 반복하는 초현실적인 숏폼 밈.",
    meaning: "특별한 의미가 없는 문장을 마치 거대한 예언이나 사건처럼 비장하게 말하는 데서 웃음을 만든다.",
    origin: "몇 년 전 게시된 북극곰 AI 이미지 농담과 연결되며, 2026년 8월 말 AI 뮤직비디오 형태의 콘텐츠가 등장한 뒤 숏폼에서 확산된 것으로 소개된다.",
    usage: ["11월 일정표와 함께 'Remember November 2026'", "11월 만료되는 계약이나 쿠폰을 보여주며 사용", "아무 의미 없는 사건을 예언처럼 과장"],
    referenceUrl: "https://www.instablank.com/meme/224",
    youtubeUrl: null
  },
  {
    id: "pogi-hagetseumnida-ani-hagetseumnida",
    title: "포기하겠습니다… 아니 하겠습니다",
    aliases: ["9월 포기하겠습니다", "면접 포기 밈", "포기하겠습니다 밈"],
    trendPeriod: "2026-09",
    trendStatus: "trending",
    shortDescription: "포기했다가 다시 하겠다고 번복하고 다시 포기하는 갈팡질팡 상태를 표현하는 텍스트 밈.",
    meaning: "결심과 포기를 반복하는 사람의 마음을 과장해서 표현할 때 사용한다.",
    origin: "면접을 포기하겠다고 했다가 번복하고 다시 포기하는 내용의 문자 캡처가 커뮤니티에서 확산된 것으로 정리된다.",
    usage: [
      "다이어트 포기하겠습니다… 아니 다시 하겠습니다… 죄송합니다 그냥 포기하겠습니다.",
      "공부 열심히 하겠습니다… 아니 잠깐만 쉬겠습니다… 그냥 포기하겠습니다.",
      "퇴사하겠습니다… 아니 다니겠습니다… 죄송합니다 퇴사하겠습니다."
    ],
    referenceUrl: "https://www.instablank.com/meme/211",
    youtubeUrl: null
  },
  {
    id: "macaron-malmeok",
    title: "마카롱 말먹",
    aliases: ["마카롱 말먹 밈", "마카롱 우유", "마카롱 아아"],
    trendPeriod: "2026-09",
    trendStatus: "trending",
    shortDescription: "마카롱을 우유나 아이스 아메리카노 등에 담가 먹는 먹방·ASMR 유행.",
    meaning: "마카롱을 음료에 '말아 먹는' 모습 자체를 시각적·청각적 콘텐츠로 즐기는 트렌드.",
    origin: "마카롱의 강한 단맛을 줄이기 위해 음료에 적셔 먹는 방식이 먹방 콘텐츠에서 소개되면서 확산된 것으로 정리된다.",
    usage: ["마카롱을 우유에 담그는 ASMR", "아이스 아메리카노에 마카롱을 넣어 먹기", "색깔별 마카롱 말먹 챌린지"],
    referenceUrl: "https://www.instablank.com/meme/216",
    youtubeUrl: null
  },
  {
    id: "gwiin-map",
    title: "귀인 지도",
    aliases: ["귀인지도", "사주 귀인", "내 귀인 찾기"],
    trendPeriod: "2026-09",
    trendStatus: "trending",
    shortDescription: "생년월일을 이용해 자신에게 도움이 되는 사람이나 궁합을 찾고 결과를 공유하는 참여형 콘텐츠.",
    meaning: "사주 결과를 친구 관계와 연결해 누가 자신의 귀인인지 확인하고 SNS에서 공유하는 놀이.",
    origin: "생년월일 기반 사주 서비스의 공유 기능이 Instagram Story 등에서 확산되며 참여형 밈처럼 소비됐다.",
    usage: ["내 귀인 누군지 찾아보기", "스토리에 결과 공유하기", "친구에게 링크를 보내 서로 궁합 확인"],
    referenceUrl: "https://www.instablank.com/meme/214",
    youtubeUrl: null
  },
  {
    id: "roblox-geunhwang",
    title: "로블록스 근황",
    aliases: ["로블록스 근황 밈", "로블록스 먹방", "로블록스 ASMR"],
    trendPeriod: "2026-09",
    trendStatus: "trending",
    shortDescription: "로블록스 안에서 벌어지는 기묘하거나 지나치게 현실적인 장면을 '근황'처럼 소개하는 밈.",
    meaning: "각진 게임 캐릭터가 식사, 춤, ASMR 등 현실적인 활동을 진지하게 하는 모습에서 웃음을 만든다.",
    origin: "이용자가 직접 다양한 게임을 만드는 Roblox 특성상 기묘한 콘텐츠가 계속 등장했고, 이를 '로블록스 근황'이라는 제목으로 공유하면서 밈화됐다.",
    usage: ["로블록스에서 혼밥하는 캐릭터", "로블록스 ASMR", "로블록스 캐릭터의 현실적인 일상"],
    referenceUrl: "https://www.instablank.com/meme/213",
    youtubeUrl: null
  },
  {
    id: "i-wash",
    title: "아이워시",
    aliases: ["아이워시 밈", "LG 워시콤보 걸그룹", "AI DOL"],
    trendPeriod: "2026-09",
    trendStatus: "trending",
    shortDescription: "세탁기 기능을 걸그룹 멤버처럼 의인화한 LG전자 광고 캠페인이 밈처럼 소비된 사례.",
    meaning: "평범한 제품 기능을 아이돌 콘셉트와 중독성 있는 노래로 과장해 소개하는 데서 재미를 만든다.",
    origin: "LG전자의 워시콤보 관련 AI 기능을 5인조 그룹처럼 표현한 광고 캠페인에서 시작됐다.",
    usage: ["사물의 기능을 아이돌 멤버처럼 소개", "캠페인 음악을 배경음으로 활용", "제품 기능을 그룹 멤버 캐릭터로 패러디"],
    referenceUrl: "https://www.instablank.com/meme/217",
    youtubeUrl: null
  },
  {
    id: "google-timeline-visualizer",
    title: "구글 타임라인 비주얼라이저",
    aliases: ["구글 타임라인 밈", "이동경로 지도", "타임라인 비주얼라이저"],
    trendPeriod: "2026-09",
    trendStatus: "trending",
    shortDescription: "Google Maps 타임라인 이동 기록을 지도 위에 시각화해 공유하는 인증형 트렌드.",
    meaning: "자신이 1년 동안 어디를 다녔는지 지도에 표시하고, 여행이 많거나 집-회사만 반복한 모습을 재미있게 공유한다.",
    origin: "Google Maps의 위치 기록 데이터를 별도의 시각화 방식으로 표현한 결과물을 SNS에 공유하면서 유행했다.",
    usage: ["1년 이동 경로 인증", "집-회사만 반복한 동선을 자조적으로 공유", "해외여행 이동 경로 자랑"],
    referenceUrl: "https://www.instablank.com/meme/215",
    youtubeUrl: null
  }
];

export const mockMemes: Meme[] = seeds.map((seed, index) => {
  const trendScore = seed.trendStatus === "viral" ? 94 : 86 - index;
  return {
    id: seed.id,
    slug: seed.id,
    title: seed.title,
    aliases: seed.aliases,
    shortDescription: seed.shortDescription,
    meaning: seed.meaning,
    originDescription: seed.origin,
    culturalContext: `Reference source: ${seed.referenceUrl}. YouTube 영상은 아직 정확히 검증되지 않아 비워둡니다.`,
    originDate: seed.trendPeriod,
    originPlatform: "Instablank reference / SNS",
    originCreator: "origin not fully verified",
    thumbnailUrl: "/icons/icon.svg",
    trendStatus: seed.trendStatus,
    trendScore,
    trendChange24h: seed.trendStatus === "viral" ? 140 : 72 - index * 3,
    toneTags: ["Funny", "Ironic", "Trend-oriented"],
    intensity: { Humor: 74, Sarcasm: 28, Aggressiveness: 4 },
    usageContext: { Friends: "Good", "Social media": "Good", "Work chat": "Use carefully", Formal: "Avoid" },
    timeline: [
      { date: seed.trendPeriod, event: "2026년 9월 트렌드 목록에 포함" },
      { date: seed.trendPeriod, event: "reference_url 기반으로 초기 검증 seed에 반영" }
    ],
    categories: ["Trending Now", "New", "Korean Communities"],
    relatedMemeIds: seeds.filter((item) => item.id !== seed.id).slice(0, 3).map((item) => item.id),
    sources: [
      {
        id: `${seed.id}-reference`,
        sourceType: "article",
        sourceUrl: seed.referenceUrl,
        youtubeVideoId: null,
        youtubeTimestamp: null,
        title: "Verification reference",
        description: "초기 검증용 reference_url입니다. 정확히 매칭되는 YouTube 원본은 아직 연결하지 않았습니다.",
        isOriginal: false,
        isVerified: true,
        verificationStatus: "reference_only"
      }
    ],
    usageExamples: seed.usage.map((text, usageIndex) => ({
      id: `${seed.id}-usage-${usageIndex + 1}`,
      situation: usageIndex === 0 ? "일상 대화나 SNS 캡션에서 사용할 때" : "비슷한 맥락으로 응용할 때",
      exampleText: text,
      explanation: seed.meaning,
      sortOrder: usageIndex + 1
    })),
    feedItems: [],
    createdAt: "2026-09-25T00:00:00Z",
    updatedAt: "2026-09-25T00:00:00Z"
  };
});

export const mockFeedItems: { item: FeedItem; meme: Meme }[] = [];
