import type { Metadata, Viewport } from "next";
import "./globals.css";
import { AppProviders } from "@/components/app-providers";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const metadata: Metadata = {
  title: "밈레이더",
  description: "요즘 모두가 말하는 밈을 놓치지 마세요.",
  applicationName: "밈레이더",
  manifest: `${basePath}/manifest.webmanifest`,
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "밈레이더"
  },
  icons: {
    icon: [
      { url: `${basePath}/icons/icon.svg`, type: "image/svg+xml", sizes: "any" }
    ],
    apple: [{ url: `${basePath}/icons/icon.svg`, sizes: "any" }]
  }
};

export const viewport: Viewport = {
  themeColor: "#fcfaf5",
  viewportFit: "cover",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
