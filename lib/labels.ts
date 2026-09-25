export const categoryLabels: Record<string, string> = {
  "Trending Now": "지금 뜨는",
  New: "새 밈",
  "Korean Communities": "커뮤니티",
  YouTube: "유튜브",
  Celebrities: "셀럽",
  Workplace: "직장",
  School: "학교",
  Animals: "동물",
  Classic: "클래식",
  Gaming: "게임",
  Sports: "스포츠",
  "Social media": "SNS"
};

export const trendLabels: Record<string, string> = {
  new: "신규",
  rising: "상승",
  trending: "화제",
  viral: "바이럴",
  stable: "꾸준함",
  declining: "하락",
  revived: "재유행",
  classic: "클래식"
};

export function labelForCategory(category: string) {
  return categoryLabels[category] || category;
}

export function labelForTrend(status: string) {
  return trendLabels[status] || status;
}
