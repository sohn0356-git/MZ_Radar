import type { MetadataRoute } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  const scope = `${basePath || ""}/`;
  const iconSvg = `${basePath}/icons/icon.svg`;
  const icon192 = `${basePath}/icons/icon-192.png`;
  const icon512 = `${basePath}/icons/icon-512.png`;

  return {
    name: "밈레이더 - Meme Radar",
    short_name: "밈레이더",
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
        name: "Search memes",
        short_name: "Search",
        description: "Find a meme by phrase or situation",
        url: `${basePath}/?tab=search`,
        icons: [{ src: icon192, sizes: "192x192", type: "image/png" }]
      },
      {
        name: "Trending feed",
        short_name: "Feed",
        description: "Swipe through trending memes",
        url: `${basePath}/?tab=feed`,
        icons: [{ src: icon192, sizes: "192x192", type: "image/png" }]
      }
    ]
  };
}
