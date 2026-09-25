import type { MetadataRoute } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  const scope = `${basePath || ""}/`;
  const iconSvg = `${basePath}/icons/icon.svg`;
  const icon192 = `${basePath}/icons/icon-192.png`;
  const icon512 = `${basePath}/icons/icon-512.png`;

  return {
    name: "Meme Radar",
    short_name: "Meme Radar",
    description: "Never miss the meme everyone is talking about.",
    id: scope,
    start_url: `${basePath}/?source=pwa`,
    scope,
    display: "standalone",
    orientation: "portrait",
    background_color: "#fcfaf5",
    theme_color: "#fcfaf5",
    categories: ["entertainment", "education", "social"],
    lang: "ko",
    icons: [
      {
        src: icon192,
        sizes: "192x192",
        type: "image/png",
        purpose: "any"
      },
      {
        src: icon512,
        sizes: "512x512",
        type: "image/png",
        purpose: "any"
      },
      {
        src: icon512,
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable"
      },
      {
        src: iconSvg,
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any"
      }
    ],
    shortcuts: [
      {
        name: "밈 검색",
        short_name: "검색",
        description: "이름, 문장, 상황으로 밈 찾기",
        url: `${basePath}/?tab=search`,
        icons: [{ src: icon192, sizes: "192x192", type: "image/png" }]
      },
      {
        name: "트렌드 피드",
        short_name: "피드",
        description: "요즘 밈 넘겨보기",
        url: `${basePath}/?tab=feed`,
        icons: [{ src: icon192, sizes: "192x192", type: "image/png" }]
      }
    ]
  };
}
