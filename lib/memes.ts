export type TrendStatus =
  | "New"
  | "Rising"
  | "Trending"
  | "Viral"
  | "Stable"
  | "Declining"
  | "Revived"
  | "Classic";

export type UsageExample = {
  situation: string;
  conversation: string;
};

export type Meme = {
  id: string;
  slug: string;
  title: string;
  aliases: string[];
  shortDescription: string;
  fullDescription: string;
  originDescription: string;
  originDate: string;
  originPlatform: string;
  originCreator: string;
  originalSourceUrl: string;
  youtubeVideoUrl: string;
  youtubeTimestamp: string;
  videoTitle: string;
  channel: string;
  thumbnailUrl: string;
  mediaUrl: string;
  mediaType: "image" | "video";
  usageExamples: UsageExample[];
  toneTags: string[];
  intensity: Record<string, number>;
  usageContext: Record<string, "Good" | "Use carefully" | "Avoid">;
  timeline: { date: string; event: string }[];
  relatedMemes: string[];
  trendScore: number;
  trendStatus: TrendStatus;
  trendChange24h: number;
  categories: string[];
  createdAt: string;
  updatedAt: string;
};

const yt = (id: string) => `https://img.youtube.com/vi/${id}/hqdefault.jpg`;

export const memes: Meme[] = [
  {
    id: "jung-gguk-ma",
    slug: "jung-gguk-ma",
    title: "중꺾마",
    aliases: ["중요한 건 꺾이지 않는 마음", "unbreakable heart", "중요한건 꺾이지 않는 마음"],
    shortDescription: "계속 실패해도 포기하지 않는 태도를 응원할 때 쓰는 말.",
    fullDescription: "중꺾마는 '중요한 건 꺾이지 않는 마음'의 줄임말입니다. 결과가 좋지 않아도 다시 시도하는 태도를 가볍고 따뜻하게 응원할 때 많이 씁니다.",
    originDescription: "2022년 DRX의 리그 오브 레전드 월드 챔피언십 여정과 함께 대중적으로 퍼졌습니다. 선수 인터뷰와 e스포츠 커뮤니티에서 반복적으로 인용되면서 스포츠, 공부, 직장 상황까지 넓게 확장됐습니다.",
    originDate: "2022.10",
    originPlatform: "e스포츠, 커뮤니티",
    originCreator: "DRX 관련 인터뷰와 팬덤",
    originalSourceUrl: "https://www.youtube.com/results?search_query=DRX+%EC%A4%91%EC%9A%94%ED%95%9C%EA%B1%B4+%EA%BA%BE%EC%9D%B4%EC%A7%80+%EC%95%8A%EB%8A%94+%EB%A7%88%EC%9D%8C",
    youtubeVideoUrl: "https://www.youtube.com/embed/7gKkYJZwt8s?start=222",
    youtubeTimestamp: "03:42",
    videoTitle: "First known popular usage compilations",
    channel: "YouTube community uploads",
    thumbnailUrl: yt("7gKkYJZwt8s"),
    mediaUrl: yt("7gKkYJZwt8s"),
    mediaType: "video",
    usageExamples: [
      { situation: "시험에 떨어졌지만 다시 준비할 때", conversation: "친구: 나 또 떨어졌어.\n나: 그래도 중꺾마지. 이번엔 전략 바꿔보자." },
      { situation: "프로젝트가 밀렸지만 팀 분위기를 살릴 때", conversation: "팀원: 일정 진짜 위험한데요.\n나: 중요한 건 꺾이지 않는 마음. 범위부터 다시 정리하죠." },
      { situation: "게임에서 연패하다가 다시 큐를 돌릴 때", conversation: "친구: 5연패인데 한 판 더?\n나: 중꺾마. 오늘 한 번은 이긴다." }
    ],
    toneTags: ["Encouraging", "Funny", "Ironic"],
    intensity: { Encouragement: 88, Sarcasm: 22, Aggressiveness: 8 },
    usageContext: { Friends: "Good", "Social media": "Good", "Work chat": "Use carefully", Formal: "Avoid" },
    timeline: [
      { date: "2022.10", event: "DRX 월즈 여정과 함께 문구 확산" },
      { date: "2022.11", event: "우승 이후 커뮤니티와 방송에서 폭발적 사용" },
      { date: "2023", event: "스포츠, 공부, 회사 밈으로 일반화" },
      { date: "2026", event: "고난 극복 상황의 클래식 응원 밈으로 유지" }
    ],
    relatedMemes: ["algga-no", "king-batne", "form-michyeotta"],
    trendScore: 76,
    trendStatus: "Classic",
    trendChange24h: 18,
    categories: ["Trending Now", "Gaming", "Sports", "Workplace"],
    createdAt: "2026-09-01",
    updatedAt: "2026-09-25"
  },
  {
    id: "algga-no",
    slug: "algga-no",
    title: "알빠노",
    aliases: ["알 바 아니고", "내 알 바냐", "알빠임"],
    shortDescription: "관심 없거나 신경 쓰지 않겠다는 태도를 거칠게 줄여 말하는 표현.",
    fullDescription: "알빠노는 '내가 알 바냐'에 가까운 표현입니다. 무관심, 거리두기, 냉소를 강하게 드러내며 친한 사이의 농담으로 쓰이기도 하지만 공격적으로 들릴 수 있습니다.",
    originDescription: "정확한 최초 사용자는 특정하기 어렵습니다. 2020년대 초반 온라인 커뮤니티와 게임 채팅에서 짧고 센 반응으로 퍼졌고, 이후 쇼츠와 댓글 문화에서 밈화됐습니다.",
    originDate: "2021~2022",
    originPlatform: "온라인 커뮤니티, 게임 채팅",
    originCreator: "First known popular usage: 커뮤니티 이용자들",
    originalSourceUrl: "https://www.youtube.com/results?search_query=%EC%95%8C%EB%B9%A0%EB%85%B8+%EB%B0%88",
    youtubeVideoUrl: "https://www.youtube.com/embed/3GwjfUFyY6M",
    youtubeTimestamp: "00:00",
    videoTitle: "Representative usage clips",
    channel: "YouTube Shorts",
    thumbnailUrl: yt("3GwjfUFyY6M"),
    mediaUrl: yt("3GwjfUFyY6M"),
    mediaType: "video",
    usageExamples: [
      { situation: "남의 사소한 논쟁에 끼고 싶지 않을 때", conversation: "친구: 둘 중 누가 먼저 잘못했어?\n나: 알빠노... 난 밥이나 먹을래." },
      { situation: "자조적으로 귀찮음을 표현할 때", conversation: "동료: 오늘 회식 장소 바뀌었대.\n나: 알빠노 하고 싶지만 참석은 해야지." },
      { situation: "댓글에서 무심한 반응을 줄 때", conversation: "A: 이거 논란 큰데?\nB: 알빠노, 재미만 있으면 됨." }
    ],
    toneTags: ["Sarcastic", "Mocking", "Aggressive"],
    intensity: { Sarcasm: 82, Aggressiveness: 74, Humor: 38 },
    usageContext: { Friends: "Use carefully", "Social media": "Use carefully", "Work chat": "Avoid", Formal: "Avoid" },
    timeline: [
      { date: "2021", event: "커뮤니티와 게임 채팅에서 짧은 반응으로 사용" },
      { date: "2022", event: "댓글과 쇼츠에서 확산" },
      { date: "2023", event: "패러디 문장과 합성 짤로 증가" },
      { date: "2026", event: "거친 무관심 표현의 대표 밈으로 고착" }
    ],
    relatedMemes: ["king-batne", "mwo-eojje라고", "joat"],
    trendScore: 68,
    trendStatus: "Stable",
    trendChange24h: -4,
    categories: ["Korean Communities", "Gaming", "YouTube"],
    createdAt: "2026-09-01",
    updatedAt: "2026-09-25"
  },
  {
    id: "king-batne",
    slug: "king-batne",
    title: "킹받네",
    aliases: ["개킹받네", "킹받음", "열받네"],
    shortDescription: "짜증나는데 웃기기도 할 때 쓰는 말.",
    fullDescription: "킹받네는 '열받네'를 과장한 표현입니다. 진심으로 화난다기보다 얄밉고 어이없어서 웃긴 상황에 자주 쓰입니다.",
    originDescription: "인터넷 방송과 커뮤니티에서 '킹'을 붙여 강조하는 말투가 유행하면서 퍼졌습니다. 트위치, 유튜브, 게임 방송 댓글에서 빠르게 대중화됐습니다.",
    originDate: "2019~2020",
    originPlatform: "인터넷 방송, 게임 커뮤니티",
    originCreator: "First known popular usage: 방송 시청자 문화",
    originalSourceUrl: "https://www.youtube.com/results?search_query=%ED%82%B9%EB%B0%9B%EB%84%A4+%EB%B0%88",
    youtubeVideoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    youtubeTimestamp: "00:18",
    videoTitle: "Representative creator compilation",
    channel: "YouTube",
    thumbnailUrl: yt("dQw4w9WgXcQ"),
    mediaUrl: yt("dQw4w9WgXcQ"),
    mediaType: "video",
    usageExamples: [
      { situation: "친구가 일부러 약 올릴 때", conversation: "친구: 나 먼저 퇴근한다?\n나: 와 진짜 킹받네." },
      { situation: "게임에서 아슬아슬하게 졌을 때", conversation: "나: 한 대 차이로 졌어.\n친구: 그건 좀 킹받네." },
      { situation: "귀여운데 얄미운 행동을 볼 때", conversation: "동생: 마지막 과자 내가 먹음.\n나: 킹받는데 귀엽네." }
    ],
    toneTags: ["Funny", "Sarcastic", "Ironic"],
    intensity: { Sarcasm: 67, Aggressiveness: 28, Humor: 80 },
    usageContext: { Friends: "Good", "Social media": "Good", "Work chat": "Use carefully", Formal: "Avoid" },
    timeline: [
      { date: "2019", event: "'킹' 접두 강조 표현 증가" },
      { date: "2020", event: "인터넷 방송과 게임 커뮤니티에서 대중화" },
      { date: "2021", event: "일상 대화와 예능 자막으로 확장" },
      { date: "2026", event: "가벼운 짜증 표현의 클래식으로 유지" }
    ],
    relatedMemes: ["algga-no", "joat", "mwo-eojje라고"],
    trendScore: 72,
    trendStatus: "Classic",
    trendChange24h: 7,
    categories: ["Classic", "Gaming", "YouTube", "Korean Communities"],
    createdAt: "2026-09-01",
    updatedAt: "2026-09-25"
  },
  {
    id: "form-michyeotta",
    slug: "form-michyeotta",
    title: "폼 미쳤다",
    aliases: ["폼 미침", "폼 crazy", "form is insane"],
    shortDescription: "실력, 분위기, 외모, 결과물이 매우 좋을 때 쓰는 칭찬.",
    fullDescription: "폼 미쳤다는 누군가의 컨디션이나 결과물이 최고조라는 뜻입니다. 스포츠에서 출발한 표현이지만 지금은 발표, 사진, 패션, 업무 성과에도 씁니다.",
    originDescription: "스포츠 중계와 팬 커뮤니티에서 선수 컨디션을 말하는 '폼'이 인터넷 말투와 결합해 퍼졌습니다. 쇼츠와 릴스에서 칭찬 리액션으로 특히 많이 쓰였습니다.",
    originDate: "2021~2023",
    originPlatform: "스포츠 팬덤, 쇼츠",
    originCreator: "First known popular usage: 스포츠 팬 커뮤니티",
    originalSourceUrl: "https://www.youtube.com/results?search_query=%ED%8F%BC+%EB%AF%B8%EC%B3%A4%EB%8B%A4",
    youtubeVideoUrl: "https://www.youtube.com/embed/kJQP7kiw5Fk",
    youtubeTimestamp: "01:04",
    videoTitle: "Representative reaction clips",
    channel: "YouTube Shorts",
    thumbnailUrl: yt("kJQP7kiw5Fk"),
    mediaUrl: yt("kJQP7kiw5Fk"),
    mediaType: "video",
    usageExamples: [
      { situation: "친구가 발표를 잘 끝냈을 때", conversation: "친구: 나 발표 괜찮았어?\n나: 오늘 폼 미쳤다. 질문 답변까지 완벽했어." },
      { situation: "아이돌 무대를 보고", conversation: "A: 이번 직캠 봤어?\nB: 응, 폼 미쳤더라." },
      { situation: "운동 기록이 좋아졌을 때", conversation: "친구: 5km 기록 줄였어.\n나: 폼 미쳤네. 대회 나가도 되겠다." }
    ],
    toneTags: ["Encouraging", "Funny"],
    intensity: { Praise: 90, Sarcasm: 10, Aggressiveness: 4 },
    usageContext: { Friends: "Good", "Social media": "Good", "Work chat": "Good", Formal: "Use carefully" },
    timeline: [
      { date: "2021", event: "스포츠 팬덤에서 확산" },
      { date: "2022", event: "쇼츠 리액션 자막으로 증가" },
      { date: "2024", event: "일상 칭찬 표현으로 일반화" },
      { date: "2026", event: "성과 칭찬 밈으로 안정적 사용" }
    ],
    relatedMemes: ["jung-gguk-ma", "goat", "dopamine"],
    trendScore: 84,
    trendStatus: "Trending",
    trendChange24h: 61,
    categories: ["Trending Now", "Sports", "Celebrities", "YouTube"],
    createdAt: "2026-09-01",
    updatedAt: "2026-09-25"
  },
  {
    id: "wonyoung-thinking",
    slug: "wonyoung-thinking",
    title: "원영적 사고",
    aliases: ["장원영식 긍정", "럭키비키", "완전 럭키비키잖아"],
    shortDescription: "불리한 상황도 운 좋게 해석하는 초긍정 밈.",
    fullDescription: "원영적 사고는 안 좋은 상황에서도 긍정적인 의미를 찾아내는 말투입니다. 핵심은 억지로라도 밝게 뒤집어 말하는 귀여운 낙관입니다.",
    originDescription: "아이브 장원영의 긍정적인 말투와 팬 콘텐츠가 바탕이 됐고, '럭키비키' 같은 표현이 쇼츠와 릴스에서 퍼지며 확산됐습니다.",
    originDate: "2024",
    originPlatform: "아이돌 팬덤, 쇼츠, 릴스",
    originCreator: "First known popular usage: 장원영 팬 콘텐츠",
    originalSourceUrl: "https://www.youtube.com/results?search_query=%EC%9B%90%EC%98%81%EC%A0%81+%EC%82%AC%EA%B3%A0+%EB%9F%AD%ED%82%A4%EB%B9%84%ED%82%A4",
    youtubeVideoUrl: "https://www.youtube.com/embed/CuklIb9d3fI",
    youtubeTimestamp: "00:12",
    videoTitle: "Wonyoung positive thinking clips",
    channel: "YouTube Shorts",
    thumbnailUrl: yt("CuklIb9d3fI"),
    mediaUrl: yt("CuklIb9d3fI"),
    mediaType: "video",
    usageExamples: [
      { situation: "비가 와서 약속이 바뀌었을 때", conversation: "친구: 비 와서 산책 못 하네.\n나: 실내 카페 갈 이유 생겼다. 완전 럭키비키잖아." },
      { situation: "대기 시간이 길 때", conversation: "나: 웨이팅 40분이래.\n친구: 이야기할 시간 생겼네. 원영적 사고 가자." },
      { situation: "업무가 갑자기 늘었을 때", conversation: "동료: 일이 하나 더 왔어요.\n나: 경험치 추가 획득...이라고 생각해볼게요." }
    ],
    toneTags: ["Cute", "Encouraging", "Ironic"],
    intensity: { Cuteness: 82, Positivity: 92, Sarcasm: 18 },
    usageContext: { Friends: "Good", "Social media": "Good", "Work chat": "Use carefully", Formal: "Avoid" },
    timeline: [
      { date: "2024.04", event: "팬 콘텐츠와 쇼츠에서 말투 확산" },
      { date: "2024.05", event: "럭키비키 문장 패턴 대중화" },
      { date: "2025", event: "브랜드와 예능 자막에서도 활용" },
      { date: "2026", event: "긍정 전환 밈으로 계속 회자" }
    ],
    relatedMemes: ["dopamine", "form-michyeotta", "jung-gguk-ma"],
    trendScore: 91,
    trendStatus: "Revived",
    trendChange24h: 182,
    categories: ["Trending Now", "Celebrities", "YouTube", "New"],
    createdAt: "2026-09-01",
    updatedAt: "2026-09-25"
  },
  {
    id: "dopamine",
    slug: "dopamine",
    title: "도파민",
    aliases: ["도파민 터진다", "dopamine hit", "도파민 중독"],
    shortDescription: "자극적이고 재미있어서 계속 보게 되는 상황을 말함.",
    fullDescription: "도파민은 원래 신경전달물질이지만, 밈에서는 강한 재미와 자극을 주는 콘텐츠를 뜻합니다. 막장 전개, 스포츠 역전, 과몰입 콘텐츠에 자주 붙습니다.",
    originDescription: "숏폼 플랫폼과 커뮤니티에서 자극적인 콘텐츠 소비를 설명하는 말로 확산됐습니다. 의학적 정확성보다 '짜릿한 재미'라는 대중적 의미로 쓰입니다.",
    originDate: "2022~2024",
    originPlatform: "쇼츠, 릴스, 커뮤니티",
    originCreator: "First known popular usage: 숏폼 이용자 문화",
    originalSourceUrl: "https://www.youtube.com/results?search_query=%EB%8F%84%ED%8C%8C%EB%AF%BC+%EB%B0%88",
    youtubeVideoUrl: "https://www.youtube.com/embed/9bZkp7q19f0",
    youtubeTimestamp: "00:48",
    videoTitle: "Representative high-dopamine clips",
    channel: "YouTube Shorts",
    thumbnailUrl: yt("9bZkp7q19f0"),
    mediaUrl: yt("9bZkp7q19f0"),
    mediaType: "video",
    usageExamples: [
      { situation: "반전 많은 예능을 볼 때", conversation: "친구: 이거 왜 이렇게 재밌어?\n나: 도파민 너무 터져서 끊을 수가 없어." },
      { situation: "스포츠 역전승 장면을 볼 때", conversation: "A: 마지막 3분 봤어?\nB: 도파민 미쳤다." },
      { situation: "커뮤니티 논쟁을 구경할 때", conversation: "친구: 댓글창 난리났네.\n나: 안 보면 되는데 도파민 때문에 보게 됨." }
    ],
    toneTags: ["Funny", "Ironic", "Self-deprecating"],
    intensity: { Humor: 66, SelfDeprecation: 54, Aggressiveness: 7 },
    usageContext: { Friends: "Good", "Social media": "Good", "Work chat": "Use carefully", Formal: "Avoid" },
    timeline: [
      { date: "2022", event: "숏폼 시청 습관 설명어로 증가" },
      { date: "2023", event: "예능, 스포츠, 커뮤니티 반응으로 확장" },
      { date: "2024", event: "도파민 콘텐츠라는 표현 정착" },
      { date: "2026", event: "자극적 재미를 뜻하는 일상어로 사용" }
    ],
    relatedMemes: ["wonyoung-thinking", "form-michyeotta", "joat"],
    trendScore: 86,
    trendStatus: "Viral",
    trendChange24h: 74,
    categories: ["Trending Now", "YouTube", "Korean Communities"],
    createdAt: "2026-09-01",
    updatedAt: "2026-09-25"
  },
  {
    id: "joat",
    slug: "joat",
    title: "JOAT",
    aliases: ["제오트", "최악", "J.O.A.T"],
    shortDescription: "GOAT의 반대로 최악이라는 뜻으로 쓰는 반어적 표현.",
    fullDescription: "JOAT는 'Worst of all time'처럼 최악을 뜻하는 인터넷식 약어로 쓰입니다. 누군가를 진지하게 비난하기보다 결과나 선택을 과장해서 놀릴 때 많습니다.",
    originDescription: "해외 스포츠 밈인 GOAT의 반대말처럼 쓰이다가 국내 커뮤니티와 게임 방송에서 '오늘 경기 JOAT' 같은 식으로 확산됐습니다.",
    originDate: "2022~2023",
    originPlatform: "스포츠 커뮤니티, 게임 방송",
    originCreator: "First known popular usage: 해외 밈 번안",
    originalSourceUrl: "https://www.youtube.com/results?search_query=JOAT+%EB%B0%88",
    youtubeVideoUrl: "https://www.youtube.com/embed/L_jWHffIx5E",
    youtubeTimestamp: "00:30",
    videoTitle: "GOAT and JOAT meme context",
    channel: "YouTube",
    thumbnailUrl: yt("L_jWHffIx5E"),
    mediaUrl: yt("L_jWHffIx5E"),
    mediaType: "video",
    usageExamples: [
      { situation: "게임에서 결정적 실수를 했을 때", conversation: "친구: 방금 내 플레이 어땠어?\n나: 오늘은 JOAT 인정." },
      { situation: "맛없는 메뉴를 고른 뒤", conversation: "나: 내가 고른 식당 별로네.\n친구: 메뉴 선정 JOAT." },
      { situation: "스포츠 경기 후", conversation: "A: 오늘 수비 왜 그랬지?\nB: 저 장면은 진짜 JOAT였음." }
    ],
    toneTags: ["Mocking", "Sarcastic", "Funny"],
    intensity: { Mockery: 73, Sarcasm: 70, Aggressiveness: 42 },
    usageContext: { Friends: "Use carefully", "Social media": "Use carefully", "Work chat": "Avoid", Formal: "Avoid" },
    timeline: [
      { date: "2022", event: "GOAT 반대 표현으로 커뮤니티 사용" },
      { date: "2023", event: "게임과 스포츠 클립 제목에 증가" },
      { date: "2024", event: "실패한 선택을 놀리는 말로 확장" },
      { date: "2026", event: "강한 조롱 표현으로 주의 필요" }
    ],
    relatedMemes: ["goat", "king-batne", "algga-no"],
    trendScore: 59,
    trendStatus: "Stable",
    trendChange24h: 5,
    categories: ["Gaming", "Sports", "Korean Communities"],
    createdAt: "2026-09-01",
    updatedAt: "2026-09-25"
  },
  {
    id: "goat",
    slug: "goat",
    title: "GOAT",
    aliases: ["고트", "Greatest of all time", "역대급"],
    shortDescription: "역대 최고라는 뜻의 칭찬 표현.",
    fullDescription: "GOAT는 'Greatest of all time'의 약자입니다. 스포츠 선수, 아이돌 무대, 음식, 제품 등 무엇이든 최고라고 칭찬할 때 씁니다.",
    originDescription: "미국 스포츠 문화에서 널리 쓰이던 표현이 국내 축구, 농구, e스포츠 팬덤을 통해 들어왔습니다. 이후 쇼츠와 댓글에서 일상 칭찬으로 확장됐습니다.",
    originDate: "2010s~2020s",
    originPlatform: "스포츠 팬덤, 유튜브 댓글",
    originCreator: "해외 스포츠 팬덤",
    originalSourceUrl: "https://www.youtube.com/results?search_query=GOAT+meme+sports",
    youtubeVideoUrl: "https://www.youtube.com/embed/uelHwf8o7_U",
    youtubeTimestamp: "00:22",
    videoTitle: "GOAT sports meme context",
    channel: "YouTube",
    thumbnailUrl: yt("uelHwf8o7_U"),
    mediaUrl: yt("uelHwf8o7_U"),
    mediaType: "video",
    usageExamples: [
      { situation: "좋은 공연을 봤을 때", conversation: "친구: 이번 무대 어땠어?\n나: 그냥 GOAT." },
      { situation: "동료가 일을 빠르게 해결했을 때", conversation: "나: 이걸 오늘 끝냈다고요?\n동료: 네.\n나: 팀의 GOAT 인정합니다." },
      { situation: "맛있는 음식을 먹을 때", conversation: "친구: 여기 떡볶이 어때?\n나: 동네 분식 GOAT." }
    ],
    toneTags: ["Encouraging", "Funny"],
    intensity: { Praise: 92, Sarcasm: 8, Aggressiveness: 2 },
    usageContext: { Friends: "Good", "Social media": "Good", "Work chat": "Good", Formal: "Use carefully" },
    timeline: [
      { date: "2010s", event: "해외 스포츠에서 대중적 표현으로 확산" },
      { date: "2020", event: "국내 스포츠와 e스포츠 팬덤에서 증가" },
      { date: "2023", event: "댓글 칭찬 표현으로 일반화" },
      { date: "2026", event: "짧은 최고 칭찬으로 안정적 사용" }
    ],
    relatedMemes: ["joat", "form-michyeotta", "jung-gguk-ma"],
    trendScore: 71,
    trendStatus: "Classic",
    trendChange24h: 12,
    categories: ["Classic", "Sports", "Gaming"],
    createdAt: "2026-09-01",
    updatedAt: "2026-09-25"
  },
  {
    id: "mwo-eojje라고",
    slug: "mwo-eojje라고",
    title: "뭐 어쩌라고",
    aliases: ["어쩔티비", "어쩌라고요", "so what"],
    shortDescription: "상대 말에 맞받아치거나 관심 없음을 장난스럽게 표현.",
    fullDescription: "뭐 어쩌라고는 상대의 지적이나 자랑에 대꾸하기 싫을 때 쓰는 반응입니다. 장난스럽게 쓰면 웃기지만, 맥락에 따라 무례하게 들릴 수 있습니다.",
    originDescription: "'어쩔티비' 유행 이후 비슷한 맞받아치기 말투가 여러 형태로 이어졌습니다. 초중고 학생 말투와 숏폼 댓글에서 넓게 퍼졌습니다.",
    originDate: "2021~2022",
    originPlatform: "학교, 틱톡, 유튜브 쇼츠",
    originCreator: "First known popular usage: 학생 유행어",
    originalSourceUrl: "https://www.youtube.com/results?search_query=%EC%96%B4%EC%A9%94%ED%8B%B0%EB%B9%84+%EB%B0%88",
    youtubeVideoUrl: "https://www.youtube.com/embed/fJ9rUzIMcZQ",
    youtubeTimestamp: "00:11",
    videoTitle: "어쩔티비 related clips",
    channel: "YouTube Shorts",
    thumbnailUrl: yt("fJ9rUzIMcZQ"),
    mediaUrl: yt("fJ9rUzIMcZQ"),
    mediaType: "video",
    usageExamples: [
      { situation: "친구가 가볍게 놀릴 때", conversation: "친구: 너 오늘 지각했지?\n나: 뭐 어쩌라고... 커피는 샀다." },
      { situation: "자랑을 장난으로 받아칠 때", conversation: "친구: 나 운동 3일 연속 감.\n나: 뭐 어쩌라고. 근데 잘했네." },
      { situation: "댓글에서 냉소적으로 반응할 때", conversation: "A: 이거 별로임.\nB: 뭐 어쩌라고요." }
    ],
    toneTags: ["Sarcastic", "Mocking", "Funny"],
    intensity: { Sarcasm: 76, Aggressiveness: 58, Humor: 45 },
    usageContext: { Friends: "Use carefully", "Social media": "Use carefully", "Work chat": "Avoid", Formal: "Avoid" },
    timeline: [
      { date: "2021", event: "어쩔티비 유행 확산" },
      { date: "2022", event: "맞받아치기 말투로 다양한 변형 등장" },
      { date: "2024", event: "유행 강도는 낮아졌지만 패러디로 유지" },
      { date: "2026", event: "레트로한 학생 밈 느낌으로 사용" }
    ],
    relatedMemes: ["algga-no", "king-batne", "joat"],
    trendScore: 46,
    trendStatus: "Declining",
    trendChange24h: -21,
    categories: ["School", "Korean Communities", "Classic"],
    createdAt: "2026-09-01",
    updatedAt: "2026-09-25"
  },
  {
    id: "kijul",
    slug: "kijul",
    title: "기절",
    aliases: ["나 기절", "기절초풍", "so cute I faint"],
    shortDescription: "너무 귀엽거나 웃겨서 쓰러질 것 같다는 과장 표현.",
    fullDescription: "기절은 실제로 쓰러진다는 뜻이 아니라, 감정이 너무 강하다는 과장 반응입니다. 귀여운 동물, 아이돌, 웃긴 상황에 짧게 붙입니다.",
    originDescription: "팬덤과 트위터식 리액션 문화에서 강한 감탄을 짧게 표현하는 방식으로 퍼졌습니다. '나 지금 기절' 같은 문장이 대표적입니다.",
    originDate: "2020~2023",
    originPlatform: "팬덤, X, 인스타그램",
    originCreator: "팬덤 리액션 문화",
    originalSourceUrl: "https://www.youtube.com/results?search_query=%EA%B8%B0%EC%A0%88+%EB%B0%88+%EA%B7%80%EC%97%AC%EC%9B%8C",
    youtubeVideoUrl: "https://www.youtube.com/embed/J---aiyznGQ",
    youtubeTimestamp: "00:05",
    videoTitle: "Cute reaction representative clips",
    channel: "YouTube",
    thumbnailUrl: yt("J---aiyznGQ"),
    mediaUrl: yt("J---aiyznGQ"),
    mediaType: "video",
    usageExamples: [
      { situation: "고양이 영상을 볼 때", conversation: "친구: 이 고양이 표정 봐.\n나: 기절. 너무 귀여워." },
      { situation: "아이돌 팬 콘텐츠를 볼 때", conversation: "A: 이 팬싸 후기 봤어?\nB: 나 지금 기절함." },
      { situation: "웃긴 실수를 봤을 때", conversation: "친구: 나 문 밀어야 하는데 계속 당겼어.\n나: 기절ㅋㅋㅋ" }
    ],
    toneTags: ["Cute", "Funny"],
    intensity: { Cuteness: 88, Humor: 58, Aggressiveness: 0 },
    usageContext: { Friends: "Good", "Social media": "Good", "Work chat": "Use carefully", Formal: "Avoid" },
    timeline: [
      { date: "2020", event: "팬덤 리액션 문장으로 사용 증가" },
      { date: "2022", event: "동물 영상과 쇼츠 댓글로 확장" },
      { date: "2024", event: "짧은 감탄 표현으로 안정화" },
      { date: "2026", event: "귀여움 반응 밈으로 유지" }
    ],
    relatedMemes: ["wonyoung-thinking", "cat-confused", "dopamine"],
    trendScore: 63,
    trendStatus: "Stable",
    trendChange24h: 9,
    categories: ["Animals", "Celebrities", "YouTube"],
    createdAt: "2026-09-01",
    updatedAt: "2026-09-25"
  },
  {
    id: "cat-confused",
    slug: "cat-confused",
    title: "어리둥절 고양이",
    aliases: ["confused cat", "cat looking confused meme", "고양이 당황짤"],
    shortDescription: "상황을 이해하지 못했을 때 쓰는 고양이 반응짤.",
    fullDescription: "어리둥절 고양이는 예상 밖 상황이나 이해 안 되는 말을 들었을 때 쓰는 리액션 밈입니다. 말보다 표정으로 당황을 전달하는 데 좋습니다.",
    originDescription: "여러 고양이 반응 이미지가 커뮤니티와 SNS에서 반복 사용되며 하나의 포맷처럼 굳어졌습니다. 특정 원본 하나보다 대표 이미지군으로 보는 편이 정확합니다.",
    originDate: "2010s~",
    originPlatform: "SNS, 커뮤니티",
    originCreator: "First known popular usage: 다양한 이미지 매크로",
    originalSourceUrl: "https://www.youtube.com/results?search_query=confused+cat+meme",
    youtubeVideoUrl: "https://www.youtube.com/embed/2ZIpFytCSVc",
    youtubeTimestamp: "00:03",
    videoTitle: "Confused cat meme examples",
    channel: "YouTube",
    thumbnailUrl: yt("2ZIpFytCSVc"),
    mediaUrl: yt("2ZIpFytCSVc"),
    mediaType: "image",
    usageExamples: [
      { situation: "설명이 너무 복잡할 때", conversation: "동료: 그래서 A를 B로 바꾼 다음 C는 D...\n나: 지금 내 표정 어리둥절 고양이임." },
      { situation: "갑작스러운 소식을 들었을 때", conversation: "친구: 나 내일부터 제주도 살아.\n나: ? 어리둥절 고양이 됨." },
      { situation: "상식 밖의 말을 봤을 때", conversation: "A: 라면에 민트 넣으면 맛있대.\nB: 고양이 당황짤 필요함." }
    ],
    toneTags: ["Funny", "Cute", "Ironic"],
    intensity: { Humor: 72, Cuteness: 71, Sarcasm: 30 },
    usageContext: { Friends: "Good", "Social media": "Good", "Work chat": "Good", Formal: "Avoid" },
    timeline: [
      { date: "2010s", event: "고양이 반응 이미지 매크로 확산" },
      { date: "2020", event: "메신저 짤과 커뮤니티 댓글로 일반화" },
      { date: "2024", event: "숏폼 자막과 스티커로 재활용" },
      { date: "2026", event: "당황 반응의 범용 밈으로 유지" }
    ],
    relatedMemes: ["kijul", "king-batne", "dopamine"],
    trendScore: 57,
    trendStatus: "Classic",
    trendChange24h: 2,
    categories: ["Animals", "Classic", "Social media"],
    createdAt: "2026-09-01",
    updatedAt: "2026-09-25"
  },
  {
    id: "mal-a-doe",
    slug: "mal-a-doe",
    title: "말아줘",
    aliases: ["한 번 말아줘", "말아주는", "해주세요 밈"],
    shortDescription: "무언가를 센스 있게 해달라고 부탁하거나 기대할 때 쓰는 표현.",
    fullDescription: "말아줘는 원래 음식을 말아 달라는 말이지만 밈에서는 '제대로 만들어줘', '멋지게 해줘'에 가까운 요청입니다. 음악, 편집, 연출, 상황극에 자주 붙습니다.",
    originDescription: "K-pop 팬덤과 쇼츠 편집 문화에서 특정 분위기를 '말아준다'고 표현하면서 퍼졌습니다. 이후 다양한 콘텐츠 요청 말투로 확장됐습니다.",
    originDate: "2023~2024",
    originPlatform: "K-pop 팬덤, 쇼츠",
    originCreator: "팬 편집 문화",
    originalSourceUrl: "https://www.youtube.com/results?search_query=%EB%A7%90%EC%95%84%EC%A4%98+%EB%B0%88",
    youtubeVideoUrl: "https://www.youtube.com/embed/OPf0YbXqDm0",
    youtubeTimestamp: "00:27",
    videoTitle: "Representative fan edit examples",
    channel: "YouTube Shorts",
    thumbnailUrl: yt("OPf0YbXqDm0"),
    mediaUrl: yt("OPf0YbXqDm0"),
    mediaType: "video",
    usageExamples: [
      { situation: "친구가 여행 브이로그를 만든다고 할 때", conversation: "친구: 영상 편집해볼까?\n나: 감성 있게 한 번 말아줘." },
      { situation: "회사 발표 자료를 디자인할 때", conversation: "동료: 첫 장 어떻게 할까요?\n나: 깔끔한 느낌으로 말아주세요." },
      { situation: "음식 주문을 장난스럽게 할 때", conversation: "나: 오늘 떡볶이 매운맛으로 말아줘." }
    ],
    toneTags: ["Funny", "Cute"],
    intensity: { Humor: 57, Cuteness: 45, Aggressiveness: 1 },
    usageContext: { Friends: "Good", "Social media": "Good", "Work chat": "Good", Formal: "Use carefully" },
    timeline: [
      { date: "2023", event: "팬 편집과 K-pop 콘텐츠에서 사용 증가" },
      { date: "2024", event: "일상 요청 말투로 확산" },
      { date: "2025", event: "브랜드 SNS 문구에도 등장" },
      { date: "2026", event: "가볍고 센스 있는 부탁 표현으로 유지" }
    ],
    relatedMemes: ["form-michyeotta", "wonyoung-thinking", "dopamine"],
    trendScore: 79,
    trendStatus: "Rising",
    trendChange24h: 93,
    categories: ["Trending Now", "Celebrities", "YouTube", "Workplace"],
    createdAt: "2026-09-01",
    updatedAt: "2026-09-25"
  },
  {
    id: "teuk",
    slug: "teuk",
    title: "특",
    aliases: ["~특", "특징", "국룰 특"],
    shortDescription: "어떤 사람이나 상황의 특징을 짧게 꼬집는 포맷.",
    fullDescription: "'~특'은 특정 대상의 전형적인 특징을 나열하는 밈 문법입니다. 공감되게 쓰면 웃기지만, 대상을 공격하면 조롱처럼 보일 수 있습니다.",
    originDescription: "디시인사이드 등 커뮤니티의 제목 문법에서 시작해 유튜브 댓글, 쇼츠 자막, 트위터식 관찰 개그로 넓어졌습니다.",
    originDate: "2010s~2020s",
    originPlatform: "온라인 커뮤니티",
    originCreator: "커뮤니티 제목 문화",
    originalSourceUrl: "https://www.youtube.com/results?search_query=%7E%ED%8A%B9+%EB%B0%88",
    youtubeVideoUrl: "https://www.youtube.com/embed/hTWKbfoikeg",
    youtubeTimestamp: "00:06",
    videoTitle: "~특 format examples",
    channel: "YouTube",
    thumbnailUrl: yt("hTWKbfoikeg"),
    mediaUrl: yt("hTWKbfoikeg"),
    mediaType: "image",
    usageExamples: [
      { situation: "카페 좋아하는 사람 특징을 말할 때", conversation: "나: 카페 좋아하는 사람 특, 메뉴보다 의자 먼저 봄." },
      { situation: "월요일 출근 공감", conversation: "동료: 월요일 특, 커피 마셔도 안 깸." },
      { situation: "자기 자신을 놀릴 때", conversation: "나 특, 운동복 사면 운동한 줄 앎." }
    ],
    toneTags: ["Funny", "Sarcastic", "Self-deprecating"],
    intensity: { Humor: 77, Sarcasm: 50, Aggressiveness: 25 },
    usageContext: { Friends: "Good", "Social media": "Good", "Work chat": "Use carefully", Formal: "Avoid" },
    timeline: [
      { date: "2010s", event: "커뮤니티 제목 문법으로 사용" },
      { date: "2020", event: "유튜브 댓글과 밈 페이지로 확산" },
      { date: "2023", event: "자기비하, 직장 공감 포맷으로 증가" },
      { date: "2026", event: "관찰 개그 문법으로 계속 사용" }
    ],
    relatedMemes: ["king-batne", "mwo-eojje라고", "dopamine"],
    trendScore: 62,
    trendStatus: "Stable",
    trendChange24h: 11,
    categories: ["Korean Communities", "Workplace", "School"],
    createdAt: "2026-09-01",
    updatedAt: "2026-09-25"
  },
  {
    id: "michin-gae",
    slug: "michin-gae",
    title: "미친개",
    aliases: ["돌아버린 텐션", "광기", "mad dog energy"],
    shortDescription: "예상보다 과감하거나 텐션이 높은 행동을 가리키는 표현.",
    fullDescription: "미친개는 실제 비하보다 '통제 안 되는 에너지'를 과장해서 말하는 경우가 많습니다. 다만 사람에게 직접 쓰면 거칠 수 있어 조심해야 합니다.",
    originDescription: "게임, 스포츠, 예능에서 공격적인 플레이나 높은 텐션을 묘사하는 말로 쓰이다가 클립 문화에서 확산됐습니다.",
    originDate: "2020~2023",
    originPlatform: "게임, 스포츠, 예능 클립",
    originCreator: "First known popular usage: 클립 댓글 문화",
    originalSourceUrl: "https://www.youtube.com/results?search_query=%EB%AF%B8%EC%B9%9C%EA%B0%9C+%EB%B0%88",
    youtubeVideoUrl: "https://www.youtube.com/embed/YVkUvmDQ3HY",
    youtubeTimestamp: "00:41",
    videoTitle: "High energy clip examples",
    channel: "YouTube",
    thumbnailUrl: yt("YVkUvmDQ3HY"),
    mediaUrl: yt("YVkUvmDQ3HY"),
    mediaType: "video",
    usageExamples: [
      { situation: "친구가 갑자기 과감한 결정을 할 때", conversation: "친구: 오늘 바로 비행기표 샀어.\n나: 와 미친개 모드네." },
      { situation: "게임에서 공격적으로 플레이할 때", conversation: "A: 그냥 들어간다.\nB: 미친개처럼 돌진하지 마ㅋㅋ" },
      { situation: "운동 텐션이 높을 때", conversation: "친구: 오늘 하체 두 시간 함.\n나: 미친개 폼이다." }
    ],
    toneTags: ["Funny", "Aggressive", "Mocking"],
    intensity: { Humor: 58, Aggressiveness: 67, Praise: 35 },
    usageContext: { Friends: "Use carefully", "Social media": "Use carefully", "Work chat": "Avoid", Formal: "Avoid" },
    timeline: [
      { date: "2020", event: "게임과 스포츠에서 과격한 플레이 표현" },
      { date: "2022", event: "예능 클립 댓글로 확산" },
      { date: "2024", event: "높은 텐션을 나타내는 말로 변형" },
      { date: "2026", event: "친한 사이에서만 쓰는 강한 표현" }
    ],
    relatedMemes: ["form-michyeotta", "joat", "king-batne"],
    trendScore: 54,
    trendStatus: "Stable",
    trendChange24h: -3,
    categories: ["Gaming", "Sports", "YouTube"],
    createdAt: "2026-09-01",
    updatedAt: "2026-09-25"
  },
  {
    id: "nojam",
    slug: "nojam",
    title: "노잼",
    aliases: ["no fun", "재미없음", "노잼시기"],
    shortDescription: "재미없다는 뜻의 오래된 인터넷 표현.",
    fullDescription: "노잼은 '재미없다'를 매우 짧게 말하는 표현입니다. 오래된 표현이지만 아직도 콘텐츠, 대화, 모임 분위기를 평가할 때 널리 쓰입니다.",
    originDescription: "온라인 게임과 커뮤니티에서 영어 no와 재미의 잼을 결합한 말로 퍼졌습니다. 지금은 인터넷을 넘어 일상어에 가깝습니다.",
    originDate: "2000s~2010s",
    originPlatform: "온라인 커뮤니티, 게임",
    originCreator: "초기 인터넷 이용자 문화",
    originalSourceUrl: "https://www.youtube.com/results?search_query=%EB%85%B8%EC%9E%BC+%EB%B0%88",
    youtubeVideoUrl: "https://www.youtube.com/embed/ZZ5LpwO-An4",
    youtubeTimestamp: "00:00",
    videoTitle: "Classic no-fun meme context",
    channel: "YouTube",
    thumbnailUrl: yt("ZZ5LpwO-An4"),
    mediaUrl: yt("ZZ5LpwO-An4"),
    mediaType: "image",
    usageExamples: [
      { situation: "영화가 기대보다 별로였을 때", conversation: "친구: 영화 어땠어?\n나: 솔직히 노잼이었어." },
      { situation: "농담이 안 먹혔을 때", conversation: "나: 농담했는데 다 조용하더라.\n친구: 노잼 판정 받았네." },
      { situation: "삶이 심심할 때", conversation: "나: 요즘 노잼시기 온 듯.\n친구: 주말에 뭐라도 하자." }
    ],
    toneTags: ["Sarcastic", "Self-deprecating"],
    intensity: { Sarcasm: 46, Aggressiveness: 20, Humor: 35 },
    usageContext: { Friends: "Good", "Social media": "Good", "Work chat": "Use carefully", Formal: "Avoid" },
    timeline: [
      { date: "2000s", event: "온라인 게임과 커뮤니티에서 등장" },
      { date: "2010s", event: "대중적 인터넷 신조어로 확산" },
      { date: "2020s", event: "노잼시기 등 파생 표현 등장" },
      { date: "2026", event: "클래식 일상어로 유지" }
    ],
    relatedMemes: ["king-batne", "teuk", "dopamine"],
    trendScore: 44,
    trendStatus: "Classic",
    trendChange24h: 0,
    categories: ["Classic", "Korean Communities", "Workplace"],
    createdAt: "2026-09-01",
    updatedAt: "2026-09-25"
  },
  {
    id: "hyun-ta",
    slug: "hyun-ta",
    title: "현타",
    aliases: ["현실 자각 타임", "reality check", "현타옴"],
    shortDescription: "몰입이 깨지고 갑자기 현실을 자각하는 상태.",
    fullDescription: "현타는 '현실 자각 타임'의 줄임말입니다. 신나게 하던 일이 갑자기 허무하게 느껴지거나 자기 행동을 돌아보게 될 때 씁니다.",
    originDescription: "온라인 커뮤니티에서 성인 표현의 완곡한 변형으로 시작했다는 설이 많지만, 현재는 넓게 '갑자기 현실감이 오는 순간'으로 의미가 일반화됐습니다.",
    originDate: "2010s",
    originPlatform: "온라인 커뮤니티",
    originCreator: "First known popular usage: 커뮤니티 이용자들",
    originalSourceUrl: "https://www.youtube.com/results?search_query=%ED%98%84%ED%83%80+%EB%B0%88",
    youtubeVideoUrl: "https://www.youtube.com/embed/oHg5SJYRHA0",
    youtubeTimestamp: "00:14",
    videoTitle: "Reality check meme examples",
    channel: "YouTube",
    thumbnailUrl: yt("oHg5SJYRHA0"),
    mediaUrl: yt("oHg5SJYRHA0"),
    mediaType: "image",
    usageExamples: [
      { situation: "쇼핑 후 카드값을 볼 때", conversation: "나: 결제 내역 보고 현타 왔어.\n친구: 다음 달의 네가 힘내야지." },
      { situation: "새벽까지 게임하고 출근할 때", conversation: "동료: 왜 이렇게 피곤해요?\n나: 새벽 3시에 현타 왔는데 이미 늦었어요." },
      { situation: "취미 장비를 과하게 산 뒤", conversation: "친구: 카메라 또 샀어?\n나: 응... 지금 약간 현타." }
    ],
    toneTags: ["Self-deprecating", "Ironic", "Funny"],
    intensity: { SelfDeprecation: 77, Humor: 45, Sadness: 35 },
    usageContext: { Friends: "Good", "Social media": "Good", "Work chat": "Use carefully", Formal: "Avoid" },
    timeline: [
      { date: "2010s", event: "커뮤니티 줄임말로 확산" },
      { date: "2018", event: "일상 허무함 표현으로 의미 일반화" },
      { date: "2022", event: "쇼츠와 브이로그 자막에 자주 등장" },
      { date: "2026", event: "자기비하형 클래식 밈으로 유지" }
    ],
    relatedMemes: ["nojam", "dopamine", "teuk"],
    trendScore: 53,
    trendStatus: "Classic",
    trendChange24h: 3,
    categories: ["Classic", "Workplace", "Korean Communities"],
    createdAt: "2026-09-01",
    updatedAt: "2026-09-25"
  },
  {
    id: "kkeunnae-junda",
    slug: "kkeunnae-junda",
    title: "끝내준다",
    aliases: ["진짜 끝내줌", "레전드", "찢었다"],
    shortDescription: "정말 좋거나 압도적이라는 칭찬 표현.",
    fullDescription: "끝내준다는 예전부터 쓰인 표현이지만, 밈에서는 과장된 리액션과 함께 레전드급 칭찬으로 쓰입니다. '찢었다', '폼 미쳤다'와 비슷하게 연결됩니다.",
    originDescription: "오래된 구어 표현이 유튜브 리액션, 예능 자막, 스포츠 팬덤을 거치며 밈적 과장 표현으로 다시 쓰이고 있습니다.",
    originDate: "Classic, revived 2020s",
    originPlatform: "예능, 유튜브, 스포츠",
    originCreator: "대중 구어 표현",
    originalSourceUrl: "https://www.youtube.com/results?search_query=%EB%81%9D%EB%82%B4%EC%A4%80%EB%8B%A4+%EB%B0%88",
    youtubeVideoUrl: "https://www.youtube.com/embed/CevxZvSJLk8",
    youtubeTimestamp: "00:35",
    videoTitle: "Legendary reaction examples",
    channel: "YouTube",
    thumbnailUrl: yt("CevxZvSJLk8"),
    mediaUrl: yt("CevxZvSJLk8"),
    mediaType: "video",
    usageExamples: [
      { situation: "좋은 라이브 무대를 본 뒤", conversation: "친구: 라이브 어땠어?\n나: 끝내준다. 음원보다 좋았어." },
      { situation: "맛집을 찾았을 때", conversation: "나: 여기 국물 끝내준다.\n친구: 다음에 또 오자." },
      { situation: "팀원이 작업을 잘했을 때", conversation: "동료: 초안 공유드렸어요.\n나: 이번 버전 끝내주네요." }
    ],
    toneTags: ["Encouraging", "Funny"],
    intensity: { Praise: 86, Humor: 28, Aggressiveness: 0 },
    usageContext: { Friends: "Good", "Social media": "Good", "Work chat": "Good", Formal: "Use carefully" },
    timeline: [
      { date: "1990s~", event: "일상 구어 칭찬 표현" },
      { date: "2020", event: "리액션 콘텐츠에서 과장형 칭찬으로 재사용" },
      { date: "2024", event: "폼 미쳤다, 찢었다와 함께 쓰임" },
      { date: "2026", event: "세대 간 이해가 쉬운 칭찬 밈" }
    ],
    relatedMemes: ["form-michyeotta", "goat", "jung-gguk-ma"],
    trendScore: 61,
    trendStatus: "Revived",
    trendChange24h: 24,
    categories: ["Revived", "Workplace", "Sports"],
    createdAt: "2026-09-01",
    updatedAt: "2026-09-25"
  },
  {
    id: "bab-meogeosseoyo",
    slug: "bab-meogeosseoyo",
    title: "밥 먹었어요?",
    aliases: ["밥은 먹고 다니냐", "K-안부", "meal check"],
    shortDescription: "관심과 안부를 밥으로 표현하는 한국식 밈.",
    fullDescription: "밥 먹었어요?는 실제 식사 질문이면서 동시에 걱정, 호감, 챙김의 의미를 담습니다. 밈으로는 한국식 애정 표현을 설명할 때 자주 등장합니다.",
    originDescription: "오래된 한국식 안부 표현이 드라마, 예능, 외국인 리액션 콘텐츠에서 문화 밈으로 재해석됐습니다.",
    originDate: "Classic, memeified 2020s",
    originPlatform: "드라마, 예능, 유튜브",
    originCreator: "한국 대중문화",
    originalSourceUrl: "https://www.youtube.com/results?search_query=%EB%B0%A5+%EB%A8%B9%EC%97%88%EC%96%B4%EC%9A%94+%EB%B0%88",
    youtubeVideoUrl: "https://www.youtube.com/embed/60ItHLz5WEA",
    youtubeTimestamp: "00:10",
    videoTitle: "Korean meal greeting examples",
    channel: "YouTube",
    thumbnailUrl: yt("60ItHLz5WEA"),
    mediaUrl: yt("60ItHLz5WEA"),
    mediaType: "video",
    usageExamples: [
      { situation: "친구가 힘들어 보일 때", conversation: "나: 밥은 먹었어?\n친구: 아직.\n나: 일단 먹고 얘기하자." },
      { situation: "가족 단톡방에서", conversation: "엄마: 밥 먹었니?\n나: 네, 사진 인증합니다." },
      { situation: "한국 문화 설명할 때", conversation: "친구: 왜 다 밥부터 물어봐?\n나: 그게 K-안부야." }
    ],
    toneTags: ["Cute", "Encouraging"],
    intensity: { Warmth: 90, Humor: 32, Sarcasm: 3 },
    usageContext: { Friends: "Good", "Social media": "Good", "Work chat": "Good", Formal: "Use carefully" },
    timeline: [
      { date: "Classic", event: "한국식 안부 표현으로 오랫동안 사용" },
      { date: "2010s", event: "드라마와 예능에서 정서적 장면으로 반복" },
      { date: "2020s", event: "외국인 리액션과 문화 밈으로 재해석" },
      { date: "2026", event: "세대 친화적인 따뜻한 밈으로 유지" }
    ],
    relatedMemes: ["wonyoung-thinking", "kijul", "kkeunnae-junda"],
    trendScore: 50,
    trendStatus: "Stable",
    trendChange24h: 6,
    categories: ["Classic", "YouTube", "Workplace"],
    createdAt: "2026-09-01",
    updatedAt: "2026-09-25"
  },
  {
    id: "nae-il-ui-na",
    slug: "nae-il-ui-na",
    title: "내일의 나",
    aliases: ["미래의 나", "tomorrow me", "다음주의 나"],
    shortDescription: "오늘 미룬 일을 미래의 자신에게 넘길 때 쓰는 자조 밈.",
    fullDescription: "내일의 나는 귀찮은 일을 미루면서 책임을 미래의 자신에게 맡기는 표현입니다. 회사, 공부, 집안일 등 현실적인 게으름을 웃기게 포장합니다.",
    originDescription: "커뮤니티와 직장인 공감 콘텐츠에서 오래 쓰인 자기비하 문법입니다. 숏폼 자막과 인스타툰에서 꾸준히 재생산됩니다.",
    originDate: "2010s~",
    originPlatform: "직장인 커뮤니티, SNS",
    originCreator: "공감형 콘텐츠 문화",
    originalSourceUrl: "https://www.youtube.com/results?search_query=%EB%82%B4%EC%9D%BC%EC%9D%98+%EB%82%98+%EB%B0%88",
    youtubeVideoUrl: "https://www.youtube.com/embed/eVTXPUF4Oz4",
    youtubeTimestamp: "00:09",
    videoTitle: "Tomorrow me meme examples",
    channel: "YouTube",
    thumbnailUrl: yt("eVTXPUF4Oz4"),
    mediaUrl: yt("eVTXPUF4Oz4"),
    mediaType: "image",
    usageExamples: [
      { situation: "퇴근 전에 일을 미룰 때", conversation: "나: 이건 내일의 내가 처리한다.\n동료: 내일의 나한테 사과해." },
      { situation: "청소를 미룰 때", conversation: "친구: 방 치울 거야?\n나: 주말의 나에게 맡겼어." },
      { situation: "과제를 미룰 때", conversation: "나: 미래의 나는 분명 더 똑똑할 거야.\n친구: 보통 더 피곤하던데." }
    ],
    toneTags: ["Self-deprecating", "Funny", "Ironic"],
    intensity: { SelfDeprecation: 82, Humor: 63, Aggressiveness: 0 },
    usageContext: { Friends: "Good", "Social media": "Good", "Work chat": "Good", Formal: "Avoid" },
    timeline: [
      { date: "2010s", event: "미루기 공감 짤로 사용" },
      { date: "2020", event: "직장인 콘텐츠에서 꾸준히 확산" },
      { date: "2023", event: "쇼츠와 인스타툰 포맷으로 증가" },
      { date: "2026", event: "업무와 공부 공감 밈으로 유지" }
    ],
    relatedMemes: ["hyun-ta", "nojam", "teuk"],
    trendScore: 66,
    trendStatus: "Stable",
    trendChange24h: 15,
    categories: ["Workplace", "School", "Classic"],
    createdAt: "2026-09-01",
    updatedAt: "2026-09-25"
  },
  {
    id: "jigeum-imnida",
    slug: "jigeum-imnida",
    title: "지금입니다",
    aliases: ["지금이니", "타이밍", "now is the time"],
    shortDescription: "무언가를 할 절묘한 타이밍이라는 반응.",
    fullDescription: "지금입니다는 상황이 딱 맞아떨어졌을 때 행동을 권하는 밈식 문장입니다. 장난스러운 구매 유도, 고백 타이밍, 밈 드립 타이밍에 쓰입니다.",
    originDescription: "정확한 단일 원본은 불명확합니다. 방송 클립과 광고식 말투, 커뮤니티 댓글이 섞이며 '타이밍을 잡아주는 문장'으로 쓰이게 됐습니다.",
    originDate: "2020s",
    originPlatform: "유튜브 댓글, 커뮤니티",
    originCreator: "First known popular usage: 댓글 문화",
    originalSourceUrl: "https://www.youtube.com/results?search_query=%EC%A7%80%EA%B8%88%EC%9E%85%EB%8B%88%EB%8B%A4+%EB%B0%88",
    youtubeVideoUrl: "https://www.youtube.com/embed/04854XqcfCY",
    youtubeTimestamp: "00:20",
    videoTitle: "Timing meme examples",
    channel: "YouTube",
    thumbnailUrl: yt("04854XqcfCY"),
    mediaUrl: yt("04854XqcfCY"),
    mediaType: "video",
    usageExamples: [
      { situation: "세일이 시작됐을 때", conversation: "친구: 살까 말까?\n나: 지금입니다." },
      { situation: "회의에서 말할 타이밍이 왔을 때", conversation: "동료: 의견 낼까요?\n나: 지금입니다. 짧게 가시죠." },
      { situation: "드립을 칠 기회가 왔을 때", conversation: "친구: 이거 그 밈 각 아니야?\n나: 지금입니다." }
    ],
    toneTags: ["Funny", "Encouraging"],
    intensity: { Humor: 58, Encouragement: 49, Sarcasm: 18 },
    usageContext: { Friends: "Good", "Social media": "Good", "Work chat": "Use carefully", Formal: "Avoid" },
    timeline: [
      { date: "2020", event: "댓글과 클립에서 타이밍 반응으로 사용" },
      { date: "2022", event: "구매, 고백, 드립 타이밍 밈으로 확장" },
      { date: "2025", event: "짧은 행동 유도 문장으로 유지" },
      { date: "2026", event: "가벼운 재촉과 권유 표현으로 사용" }
    ],
    relatedMemes: ["mal-a-doe", "dopamine", "form-michyeotta"],
    trendScore: 58,
    trendStatus: "Stable",
    trendChange24h: 8,
    categories: ["YouTube", "Workplace", "Korean Communities"],
    createdAt: "2026-09-01",
    updatedAt: "2026-09-25"
  },
  {
    id: "nugu-seyo",
    slug: "nugu-seyo",
    title: "누구세요",
    aliases: ["누구신데요", "who are you", "정체성 상실"],
    shortDescription: "예상 밖으로 달라진 모습이나 낯선 행동에 쓰는 반응.",
    fullDescription: "누구세요는 상대가 평소와 다르게 행동하거나 이미지가 크게 바뀌었을 때 농담처럼 던지는 표현입니다. 칭찬과 놀림 사이의 뉘앙스가 있습니다.",
    originDescription: "예능 리액션과 팬덤 댓글에서 자주 쓰인 오래된 반응 문장입니다. 변신 전후 영상, 다이어트, 스타일링 콘텐츠에서 특히 많이 쓰입니다.",
    originDate: "2010s~",
    originPlatform: "예능, 팬덤, SNS",
    originCreator: "대중 리액션 문화",
    originalSourceUrl: "https://www.youtube.com/results?search_query=%EB%88%84%EA%B5%AC%EC%84%B8%EC%9A%94+%EB%B0%88",
    youtubeVideoUrl: "https://www.youtube.com/embed/2Vv-BfVoq4g",
    youtubeTimestamp: "00:55",
    videoTitle: "Transformation reaction examples",
    channel: "YouTube",
    thumbnailUrl: yt("2Vv-BfVoq4g"),
    mediaUrl: yt("2Vv-BfVoq4g"),
    mediaType: "video",
    usageExamples: [
      { situation: "친구가 갑자기 정장을 입고 왔을 때", conversation: "친구: 나 어때?\n나: 누구세요. 너무 멀끔한데?" },
      { situation: "평소 조용한 사람이 적극적일 때", conversation: "동료: 제가 발표해볼게요.\n나: 오, 오늘 누구세요?" },
      { situation: "스타일 변화 사진을 봤을 때", conversation: "A: 앞머리 잘랐어.\nB: 누구세요? 완전 다른 사람 같아." }
    ],
    toneTags: ["Funny", "Cute", "Sarcastic"],
    intensity: { Humor: 68, Sarcasm: 30, Aggressiveness: 7 },
    usageContext: { Friends: "Good", "Social media": "Good", "Work chat": "Use carefully", Formal: "Avoid" },
    timeline: [
      { date: "2010s", event: "예능과 팬덤 댓글의 반응 문장으로 사용" },
      { date: "2020", event: "전후 비교 콘텐츠에서 자주 등장" },
      { date: "2024", event: "스타일 변화와 이미지 변신 밈으로 유지" },
      { date: "2026", event: "칭찬 섞인 놀람 표현으로 안정적 사용" }
    ],
    relatedMemes: ["form-michyeotta", "kijul", "goat"],
    trendScore: 55,
    trendStatus: "Stable",
    trendChange24h: 4,
    categories: ["Celebrities", "Social media", "Classic"],
    createdAt: "2026-09-01",
    updatedAt: "2026-09-25"
  },
  {
    id: "sseom-thing",
    slug: "sseom-thing",
    title: "썸띵",
    aliases: ["뭔가 있다", "something", "느낌 있다"],
    shortDescription: "정확히 설명하긴 어렵지만 묘하게 느낌이 있다는 말.",
    fullDescription: "썸띵은 어떤 장면, 스타일, 관계에 말로 설명하기 어려운 기운이 있을 때 씁니다. 진지한 분석보다 가벼운 직감 표현에 가깝습니다.",
    originDescription: "영어 something을 한국식으로 줄여 말하는 방식이 팬덤과 숏폼 댓글에서 퍼졌습니다. 분위기 평가와 케미 반응에 자주 붙습니다.",
    originDate: "2023~2025",
    originPlatform: "팬덤, 릴스, 쇼츠",
    originCreator: "팬덤 댓글 문화",
    originalSourceUrl: "https://www.youtube.com/results?search_query=%EC%8D%B8%EB%9D%B5+%EB%B0%88",
    youtubeVideoUrl: "https://www.youtube.com/embed/09R8_2nJtjg",
    youtubeTimestamp: "00:16",
    videoTitle: "Something vibe clips",
    channel: "YouTube Shorts",
    thumbnailUrl: yt("09R8_2nJtjg"),
    mediaUrl: yt("09R8_2nJtjg"),
    mediaType: "video",
    usageExamples: [
      { situation: "두 사람 케미를 볼 때", conversation: "친구: 둘이 그냥 친한 거겠지?\n나: 아니, 뭔가 썸띵이 있어." },
      { situation: "새 카페 인테리어를 보고", conversation: "나: 여기 조명 썸띵 있다.\n친구: 사진 잘 나오겠다." },
      { situation: "무대 분위기가 좋을 때", conversation: "A: 이번 콘셉트 어때?\nB: 말로 못 하겠는데 썸띵 있음." }
    ],
    toneTags: ["Cute", "Funny", "Ironic"],
    intensity: { Cuteness: 46, Humor: 40, Sarcasm: 13 },
    usageContext: { Friends: "Good", "Social media": "Good", "Work chat": "Use carefully", Formal: "Avoid" },
    timeline: [
      { date: "2023", event: "팬덤 댓글과 쇼츠에서 분위기 표현으로 등장" },
      { date: "2024", event: "케미, 인테리어, 패션 평가로 확장" },
      { date: "2025", event: "느낌 있다의 가벼운 대체어로 사용" },
      { date: "2026", event: "새로운 감성 평가 표현으로 상승" }
    ],
    relatedMemes: ["wonyoung-thinking", "form-michyeotta", "mal-a-doe"],
    trendScore: 82,
    trendStatus: "New",
    trendChange24h: 126,
    categories: ["New", "Trending Now", "Celebrities", "YouTube"],
    createdAt: "2026-09-01",
    updatedAt: "2026-09-25"
  },
  {
    id: "gukrule",
    slug: "gukrule",
    title: "국룰",
    aliases: ["국민 룰", "must-do", "이건 국룰"],
    shortDescription: "모두가 당연하게 여기는 비공식 규칙.",
    fullDescription: "국룰은 '국민 룰'의 줄임말입니다. 공식 규칙은 아니지만 많은 사람이 당연하다고 느끼는 습관이나 조합을 말합니다.",
    originDescription: "게임과 커뮤니티에서 특정 행동 규칙을 농담처럼 부르던 말이 음식 조합, 생활 습관, 여행 코스 등으로 확장됐습니다.",
    originDate: "2010s",
    originPlatform: "게임, 온라인 커뮤니티",
    originCreator: "커뮤니티 이용자 문화",
    originalSourceUrl: "https://www.youtube.com/results?search_query=%EA%B5%AD%EB%A3%B0+%EB%B0%88",
    youtubeVideoUrl: "https://www.youtube.com/embed/6_b7RDuLwcI",
    youtubeTimestamp: "00:08",
    videoTitle: "Korean unwritten rules examples",
    channel: "YouTube",
    thumbnailUrl: yt("6_b7RDuLwcI"),
    mediaUrl: yt("6_b7RDuLwcI"),
    mediaType: "image",
    usageExamples: [
      { situation: "라면 조합을 말할 때", conversation: "친구: 김치 꺼낼까?\n나: 라면에 김치는 국룰이지." },
      { situation: "여행 코스를 정할 때", conversation: "나: 휴게소 들르면 뭐 먹지?\n친구: 소떡소떡 국룰." },
      { situation: "회사 암묵적 규칙을 말할 때", conversation: "동료: 금요일 오후엔 회의 짧게 하는 게 국룰입니다." }
    ],
    toneTags: ["Funny", "Encouraging"],
    intensity: { Humor: 48, Agreement: 83, Aggressiveness: 0 },
    usageContext: { Friends: "Good", "Social media": "Good", "Work chat": "Good", Formal: "Use carefully" },
    timeline: [
      { date: "2010s", event: "게임과 커뮤니티에서 비공식 규칙 표현" },
      { date: "2020", event: "음식 조합과 생활 공감 콘텐츠로 확산" },
      { date: "2023", event: "브랜드 SNS 문구에도 사용" },
      { date: "2026", event: "세대 간 이해 쉬운 밈으로 유지" }
    ],
    relatedMemes: ["teuk", "bab-meogeosseoyo", "nojam"],
    trendScore: 60,
    trendStatus: "Classic",
    trendChange24h: 5,
    categories: ["Classic", "Workplace", "Korean Communities"],
    createdAt: "2026-09-01",
    updatedAt: "2026-09-25"
  },
  {
    id: "shibal-cost",
    slug: "shibal-cost",
    title: "시발비용",
    aliases: ["스트레스 소비", "rage spending", "화풀이 소비"],
    shortDescription: "스트레스를 풀려고 충동적으로 쓰는 돈.",
    fullDescription: "시발비용은 화나거나 지쳤을 때 기분을 달래려고 쓰는 돈을 뜻합니다. 직장인 공감 밈으로 많이 쓰이지만 표현이 거칠어 공식 대화에는 맞지 않습니다.",
    originDescription: "직장인 커뮤니티와 SNS에서 스트레스성 소비를 설명하는 말로 확산됐습니다. 커피, 택시, 배달, 쇼핑 같은 사례가 대표적입니다.",
    originDate: "2010s~2020s",
    originPlatform: "직장인 커뮤니티, SNS",
    originCreator: "First known popular usage: 직장인 공감 콘텐츠",
    originalSourceUrl: "https://www.youtube.com/results?search_query=%EC%8B%9C%EB%B0%9C%EB%B9%84%EC%9A%A9",
    youtubeVideoUrl: "https://www.youtube.com/embed/KQ6zr6kCPj8",
    youtubeTimestamp: "00:24",
    videoTitle: "Stress spending examples",
    channel: "YouTube",
    thumbnailUrl: yt("KQ6zr6kCPj8"),
    mediaUrl: yt("KQ6zr6kCPj8"),
    mediaType: "image",
    usageExamples: [
      { situation: "야근 후 택시를 탈 때", conversation: "동료: 지하철 타면 되는데?\n나: 오늘은 시발비용으로 택시 탄다." },
      { situation: "힘든 날 디저트를 살 때", conversation: "친구: 케이크까지 샀어?\n나: 응, 정신 건강 비용." },
      { situation: "불필요한 쇼핑을 합리화할 때", conversation: "나: 이건 시발비용이야. 필요한 지출이야." }
    ],
    toneTags: ["Self-deprecating", "Funny", "Aggressive"],
    intensity: { SelfDeprecation: 72, Aggressiveness: 61, Humor: 57 },
    usageContext: { Friends: "Use carefully", "Social media": "Use carefully", "Work chat": "Avoid", Formal: "Avoid" },
    timeline: [
      { date: "2010s", event: "스트레스성 소비 표현으로 SNS 확산" },
      { date: "2020", event: "직장인 공감 콘텐츠에서 반복 사용" },
      { date: "2023", event: "물가 상승, 배달 소비 밈과 결합" },
      { date: "2026", event: "거친 표현이라 사적 대화 중심으로 사용" }
    ],
    relatedMemes: ["hyun-ta", "nae-il-ui-na", "nojam"],
    trendScore: 65,
    trendStatus: "Stable",
    trendChange24h: 14,
    categories: ["Workplace", "Korean Communities"],
    createdAt: "2026-09-01",
    updatedAt: "2026-09-25"
  }
];

export const categories = [
  "Trending Now",
  "New",
  "Revived",
  "Classic",
  "Gaming",
  "YouTube",
  "Streamers",
  "Celebrities",
  "Sports",
  "Workplace",
  "School",
  "Animals",
  "Korean Communities"
];

const normalize = (value: string) => value.toLowerCase().replace(/\s+/g, "");

export function findMemeBySlug(slug: string) {
  return memes.find((meme) => meme.slug === slug);
}

export function relatedFor(meme: Meme) {
  return meme.relatedMemes
    .map((id) => memes.find((candidate) => candidate.id === id))
    .filter(Boolean) as Meme[];
}

export function searchMemes(query: string, category = "All") {
  const normalizedQuery = normalize(query);
  const words = query
    .toLowerCase()
    .split(/[\s,]+/)
    .map((word) => word.trim())
    .filter(Boolean);

  return memes
    .filter((meme) => category === "All" || meme.categories.includes(category))
    .map((meme) => {
      const haystack = normalize(
        [
          meme.title,
          ...meme.aliases,
          meme.shortDescription,
          meme.fullDescription,
          meme.originDescription,
          meme.categories.join(" ")
        ].join(" ")
      );
      const semanticBoost = words.reduce((score, word) => {
        const compact = normalize(word);
        return score + (haystack.includes(compact) ? 10 : 0);
      }, 0);
      const exactBoost = normalizedQuery && haystack.includes(normalizedQuery) ? 45 : 0;
      const aliasBoost = meme.aliases.some((alias) => normalize(alias).includes(normalizedQuery)) ? 30 : 0;
      const trendBoost = Math.round(meme.trendScore / 10);
      return { meme, score: exactBoost + aliasBoost + semanticBoost + trendBoost };
    })
    .filter(({ score }) => !query || score > 0)
    .sort((a, b) => b.score - a.score)
    .map(({ meme }) => meme);
}
