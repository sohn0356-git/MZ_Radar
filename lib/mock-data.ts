import type { FeedItem, Meme } from "@/lib/types";

const img = (id: string) => `https://img.youtube.com/vi/${id}/hqdefault.jpg`;

const meme = (
  id: string,
  title: string,
  aliases: string[],
  shortDescription: string,
  meaning: string,
  originDescription: string,
  options: Partial<Meme> & { youtubeVideoId?: string | null; verified?: boolean } = {}
): Meme => {
  const feedItem: FeedItem = {
    id: `${id}-feed`,
    mediaType: options.youtubeVideoId ? "video" : "image",
    mediaUrl: options.youtubeVideoId ? img(options.youtubeVideoId) : "/icons/icon.svg",
    thumbnailUrl: options.youtubeVideoId ? img(options.youtubeVideoId) : "/icons/icon.svg",
    sourceUrl: options.youtubeVideoId ? `https://www.youtube.com/watch?v=${options.youtubeVideoId}` : "",
    youtubeVideoId: options.youtubeVideoId || null,
    youtubeTimestamp: "00:00",
    shortCaption: shortDescription,
    trendScore: options.trendScore ?? 70,
    trendStatus: options.trendStatus ?? "rising",
    publishedAt: "2026-09-25T00:00:00Z"
  };

  return {
    id,
    slug: id,
    title,
    aliases,
    shortDescription,
    meaning,
    originDescription,
    culturalContext: options.culturalContext || "정확한 단일 원본이 확인되지 않은 경우에는 대표 사용 맥락과 first known popular usage 기준으로 표시합니다.",
    originDate: options.originDate || "2026",
    originPlatform: options.originPlatform || "SNS / short-form",
    originCreator: options.originCreator || "origin not fully verified",
    thumbnailUrl: feedItem.thumbnailUrl,
    trendStatus: options.trendStatus || "rising",
    trendScore: options.trendScore || 70,
    trendChange24h: options.trendChange24h || 24,
    toneTags: options.toneTags || ["Funny", "Ironic"],
    intensity: options.intensity || { Humor: 72, Sarcasm: 38, Aggressiveness: 8 },
    usageContext: options.usageContext || { Friends: "Good", "Social media": "Good", "Work chat": "Use carefully", Formal: "Avoid" },
    timeline: options.timeline || [
      { date: "2026", event: "SNS와 숏폼에서 사용 증가" },
      { date: "2026.09", event: "검색 가능한 임시 데이터로 추가" }
    ],
    categories: options.categories || ["Trending Now", "YouTube", "Korean Communities"],
    relatedMemeIds: options.relatedMemeIds || [],
    sources: [
      {
        id: `${id}-source`,
        sourceType: options.youtubeVideoId ? "youtube" : "community",
        sourceUrl: feedItem.sourceUrl,
        youtubeVideoId: options.youtubeVideoId || null,
        youtubeTimestamp: "00:00",
        title: options.verified ? "Representative source" : "First known popular usage",
        description: options.verified ? "대표 영상 또는 확인 가능한 설명 자료입니다." : "원본이 완전히 검증되지 않아 대표 사용 사례로 표시합니다.",
        isOriginal: Boolean(options.verified),
        isVerified: Boolean(options.verified)
      }
    ],
    usageExamples: options.usageExamples || [
      {
        id: `${id}-usage-1`,
        situation: "친구가 요즘 표현을 물어볼 때",
        exampleText: title,
        explanation: shortDescription,
        sortOrder: 1
      },
      {
        id: `${id}-usage-2`,
        situation: "SNS에서 짧게 반응할 때",
        exampleText: aliases[0] || title,
        explanation: "친한 사이 또는 가벼운 온라인 맥락에서 사용하는 편이 안전합니다.",
        sortOrder: 2
      }
    ],
    feedItems: [feedItem],
    createdAt: "2026-09-25T00:00:00Z",
    updatedAt: "2026-09-25T00:00:00Z"
  };
};

export const mockMemes: Meme[] = [
  meme(
    "wonyoung-thinking",
    "원영적 사고",
    ["장원영", "장원영식 긍정", "럭키비키", "완전 럭키비키잖아"],
    "불리한 상황도 운 좋게 해석하는 초긍정 밈.",
    "안 좋은 상황에서도 긍정적인 의미를 찾아내는 말투입니다. 억지스럽지만 밝게 뒤집는 점이 웃음 포인트입니다.",
    "아이브 장원영의 긍정적인 말투와 팬 콘텐츠가 바탕이 되었고, ‘럭키비키’ 표현이 쇼츠와 릴스에서 확산됐습니다.",
    { originDate: "2024~2026", originPlatform: "K-pop fandom / Shorts", trendScore: 93, trendStatus: "revived", trendChange24h: 182, toneTags: ["Cute", "Encouraging", "Ironic"], relatedMemeIds: ["kinda-chic-to", "jung-gguk-ma"] }
  ),
  meme(
    "kinda-chic-to",
    "Kinda chic to",
    ["킨다 시크", "kinda chic", "평범한데 시크", "normal is chic"],
    "평범한 행동을 고급스럽고 쿨한 라이프스타일처럼 포장하는 밈.",
    "‘Kinda chic to…’ 뒤에 평범한 행동을 붙여 자조적 자기승인을 만드는 포맷입니다.",
    "2026년 해외 SNS에서 ‘평범함을 세련됨으로 말하기’ 포맷으로 확산됐고 한국어권에서도 번역/응용 사례가 늘었습니다.",
    { originDate: "2026.09", originPlatform: "TikTok / X / Instagram", trendScore: 88, trendStatus: "new", trendChange24h: 96, categories: ["Trending Now", "New", "Social media"], relatedMemeIds: ["wonyoung-thinking", "young-creator-crew"] }
  ),
  meme(
    "trend-next",
    "그럼 다음은 무조건 OO겠지",
    ["대한민국 유행 훅훅", "다음은 무조건", "두쫀쿠 다음"],
    "빠르게 바뀌는 유행 다음 차례에 자신이 좋아하는 것을 넣는 소원형 밈.",
    "초단기 유행 릴레이를 보며 ‘다음 유행은 내가 좋아하는 것’이길 바라는 팬덤식 농담입니다.",
    "2026년 초 두바이 쫀득쿠키, 봄동비빔밥 등 빠른 먹거리 유행 교체를 두고 X에서 퍼진 포맷으로 알려졌습니다.",
    { originDate: "2026 상반기", originPlatform: "X / Korean communities", trendScore: 86, trendStatus: "rising", relatedMemeIds: ["kinda-chic-to"] }
  ),
  meme(
    "millennial-vs-genz",
    "밀레니얼 PR팀 vs 젠지 소셜팀",
    ["Millennial vs Gen Z", "젠지식 한 줄", "it's giving"],
    "긴 공식 설명과 짧은 젠지식 감성 문장을 나란히 비교하는 브랜드 밈.",
    "같은 내용을 장황하게 설명하는 방식과 한 줄 감성으로 말하는 방식을 대비시켜 웃기는 포맷입니다.",
    "해외 브랜드 SNS 포맷이 2026년 한국 마케팅/커뮤니티로 확산된 사례로 알려졌습니다.",
    { originDate: "2026.04~06", originPlatform: "Instagram / brand social", trendScore: 81, trendStatus: "viral", categories: ["Trending Now", "Workplace", "Social media"] }
  ),
  meme(
    "jungti-nanda",
    "중티난다",
    ["중국스럽다", "중티", "과한 중국 감성", "China-core"],
    "촌스럽다는 말이 화려하고 콘텐츠감 있는 취향 코드로 재가공된 표현.",
    "과한 네온, 화려한 비주얼, 중국식 감성이 오히려 사진/숏폼 콘텐츠로 소비되는 흐름을 말합니다.",
    "2026년 중국 브랜드/공간 소비 트렌드와 함께 SNS에서 ‘중티난다’가 장난스러운 취향 코드로 언급됐습니다.",
    { originDate: "2026", originPlatform: "SNS / lifestyle media", trendScore: 76, trendStatus: "rising", categories: ["Trending Now", "Social media"] }
  ),
  meme(
    "young-creator-crew",
    "영크크 / 늙크크",
    ["영크크", "늙크크", "Young Creator Crew", "트렌드 못 따라감"],
    "트렌드를 잘 따라가는 사람과 못 따라가는 사람을 장난스럽게 나누는 표현.",
    "‘영크크’는 젊고 창작자적인 감각, ‘늙크크’는 트렌드에 뒤처진 느낌을 자조적으로 말할 때 씁니다.",
    "코르티스 팬덤 표현이 방송 노출과 숏폼을 거치며 2026년에 다시 넓게 회자된 흐름으로 보는 편이 안전합니다.",
    { originDate: "2026 revival", originPlatform: "Fandom / TV / Shorts", trendScore: 78, trendStatus: "revived", categories: ["Trending Now", "Celebrities", "YouTube"] }
  ),
  meme("bamti", "밤티", ["밤티나다", "살짝 밤티", "촌스러움 밈"], "어설프거나 촌스러운 결과물을 가볍게 놀릴 때 쓰는 표현.", "완성도가 낮거나 어딘가 어설픈 느낌을 귀엽게 놀리는 말입니다.", "2026년 신조어/숏폼 목록에서 자주 언급되지만 단일 원본은 추가 검증이 필요합니다.", { trendStatus: "new", trendScore: 69 }),
  meme("shagal", "아 샤갈", ["샤갈", "욕 대신 샤갈", "아 샤갈!"], "강한 욕설 대신 비슷한 발음의 감탄사로 어이없음을 표현.", "화나거나 어이없는 순간 수위를 낮춰 말하는 대체 감탄사입니다.", "유튜브/숏폼 감탄사 밈으로 소개되지만 원본 영상은 추가 검증이 필요합니다.", { trendStatus: "new", trendScore: 67 }),
  meme("jung-gguk-ma", "중꺾마", ["중요한 건 꺾이지 않는 마음", "꺾이지 않는 마음", "unbreakable heart"], "계속 실패해도 포기하지 않는 태도를 응원할 때 쓰는 말.", "결과가 좋지 않아도 다시 시도하는 태도를 가볍고 따뜻하게 응원합니다.", "2022년 DRX 월즈 우승 서사와 함께 대중적으로 퍼진 e스포츠 밈입니다.", { originDate: "2022", originPlatform: "eSports", trendStatus: "classic", trendScore: 74, toneTags: ["Encouraging", "Funny"] }),
  meme("algga-no", "알빠노", ["알 바 아니고", "내 알 바냐", "알빠임"], "관심 없거나 신경 쓰지 않겠다는 태도를 거칠게 줄여 말하는 표현.", "무관심, 거리두기, 냉소를 강하게 드러냅니다. 공격적으로 들릴 수 있습니다.", "2020년대 초반 온라인 커뮤니티와 게임 채팅에서 짧고 센 반응으로 퍼졌습니다.", { originDate: "2021~2022", trendStatus: "stable", trendScore: 63, toneTags: ["Sarcastic", "Mocking", "Aggressive"] }),
  meme("king-batne", "킹받네", ["개킹받네", "킹받음", "열받네"], "짜증나는데 웃기기도 할 때 쓰는 말.", "진심으로 화난다기보다 얄밉고 어이없어서 웃긴 상황에 자주 씁니다.", "인터넷 방송과 커뮤니티에서 ‘킹’을 붙여 강조하는 말투가 확산되며 대중화됐습니다.", { originDate: "2019~2020", trendStatus: "classic", trendScore: 72 }),
  meme("form-michyeotta", "폼 미쳤다", ["폼 미침", "form is insane", "폼 crazy"], "실력, 분위기, 외모, 결과물이 매우 좋을 때 쓰는 칭찬.", "누군가의 컨디션이나 결과물이 최고조라는 뜻입니다.", "스포츠 팬덤의 ‘폼’ 표현이 쇼츠 리액션과 결합해 대중화됐습니다.", { trendStatus: "viral", trendScore: 85, toneTags: ["Encouraging", "Funny"] }),
  meme("mal-a-doe", "말아줘", ["한 번 말아줘", "제대로 말아줘", "감성 있게 말아줘"], "무언가를 센스 있게 해달라고 부탁하거나 기대할 때 쓰는 표현.", "‘제대로 만들어줘’, ‘멋지게 해줘’에 가까운 요청입니다.", "K-pop 팬덤과 쇼츠 편집 문화에서 특정 분위기를 ‘말아준다’고 표현하며 퍼졌습니다.", { trendStatus: "rising", trendScore: 79 }),
  meme("dopamine", "도파민", ["도파민 터진다", "도파민 중독", "dopamine hit"], "자극적이고 재미있어서 계속 보게 되는 상황.", "강한 재미와 자극을 주는 콘텐츠를 뜻합니다.", "숏폼 플랫폼과 커뮤니티에서 자극적인 콘텐츠 소비를 설명하는 말로 확산됐습니다.", { trendStatus: "viral", trendScore: 84 }),
  meme("cat-confused", "어리둥절 고양이", ["confused cat", "고양이 당황짤", "cat looking confused meme"], "상황을 이해하지 못했을 때 쓰는 고양이 반응짤.", "예상 밖 상황이나 이해 안 되는 말을 들었을 때 표정으로 당황을 전달합니다.", "여러 고양이 반응 이미지가 SNS에서 반복 사용되며 하나의 포맷처럼 굳어졌습니다.", { trendStatus: "classic", trendScore: 58, categories: ["Animals", "Classic"] }),
  meme("teuk", "~특", ["특", "국룰 특", "특징"], "어떤 사람이나 상황의 특징을 짧게 꼬집는 포맷.", "특정 대상의 전형적인 특징을 나열하는 밈 문법입니다.", "커뮤니티 제목 문법에서 시작해 유튜브 댓글, 쇼츠 자막으로 넓어졌습니다.", { trendStatus: "stable", trendScore: 62 }),
  meme("gukrule", "국룰", ["국민 룰", "이건 국룰", "must-do"], "모두가 당연하게 여기는 비공식 규칙.", "공식 규칙은 아니지만 많은 사람이 당연하다고 느끼는 습관이나 조합을 말합니다.", "게임과 커뮤니티에서 농담처럼 부르던 말이 음식 조합과 생활 습관으로 확장됐습니다.", { trendStatus: "classic", trendScore: 60 }),
  meme("hyun-ta", "현타", ["현실 자각 타임", "현타옴", "reality check"], "몰입이 깨지고 갑자기 현실을 자각하는 상태.", "신나게 하던 일이 갑자기 허무하게 느껴지거나 자기 행동을 돌아보게 될 때 씁니다.", "커뮤니티 줄임말로 시작해 현재는 일상 허무함 표현으로 일반화됐습니다.", { trendStatus: "classic", trendScore: 54 }),
  meme("nae-il-ui-na", "내일의 나", ["미래의 나", "tomorrow me", "다음주의 나"], "오늘 미룬 일을 미래의 자신에게 넘길 때 쓰는 자조 밈.", "귀찮은 일을 미루면서 책임을 미래의 자신에게 맡기는 표현입니다.", "직장인 공감 콘텐츠와 SNS에서 오래 쓰인 자기비하 문법입니다.", { trendStatus: "stable", trendScore: 66, categories: ["Workplace", "School"] }),
  meme("shibal-cost", "시발비용", ["스트레스 소비", "rage spending", "화풀이 소비"], "스트레스를 풀려고 충동적으로 쓰는 돈.", "화나거나 지쳤을 때 기분을 달래려고 쓰는 돈을 뜻합니다. 표현이 거칠어 공식 대화에는 맞지 않습니다.", "직장인 커뮤니티와 SNS에서 스트레스성 소비를 설명하는 말로 확산됐습니다.", { trendStatus: "stable", trendScore: 65, categories: ["Workplace"] })
];

export const mockFeedItems = mockMemes
  .flatMap((meme) => meme.feedItems.map((item) => ({ item, meme })))
  .sort((a, b) => b.item.trendScore - a.item.trendScore);
