"use client";

import { useEffect } from "react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function AppProviders({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register(`${basePath}/sw.js`, { scope: `${basePath || ""}/` })
        .catch(() => undefined);
    }
  }, []);

  return children;
}
