import type { MetadataRoute } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  const icon = `${basePath}/icons/icon.svg`;

  return {
    name: "밈레이더 - Meme Radar",
    short_name: "밈레이더",
    description: "Never miss the meme everyone is talking about.",
    id: `${basePath || "/"}`,
    start_url: `${basePath}/?source=pwa`,
    scope: `${basePath || "/"}`,
    display: "standalone",
    orientation: "portrait",
    background_color: "#fcfaf5",
    theme_color: "#fcfaf5",
    categories: ["entertainment", "education", "social"],
    lang: "ko",
    icons: [
      {
        src: icon,
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any"
      },
      {
        src: icon,
        sizes: "any",
        type: "image/svg+xml",
        purpose: "maskable"
      }
    ],
    shortcuts: [
      {
        name: "Search memes",
        short_name: "Search",
        description: "Find a meme by phrase or situation",
        url: `${basePath}/?tab=search`,
        icons: [{ src: icon, sizes: "any", type: "image/svg+xml" }]
      },
      {
        name: "Trending feed",
        short_name: "Feed",
        description: "Swipe through trending memes",
        url: `${basePath}/?tab=feed`,
        icons: [{ src: icon, sizes: "any", type: "image/svg+xml" }]
      }
    ]
  };
}
