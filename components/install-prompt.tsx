"use client";

import { Download } from "lucide-react";
import { useEffect, useState } from "react";

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

export function InstallPrompt() {
  const [event, setEvent] = useState<BeforeInstallPromptEvent | null>(null);
  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    const onPrompt = (promptEvent: Event) => {
      promptEvent.preventDefault();
      setEvent(promptEvent as BeforeInstallPromptEvent);
    };
    const onInstalled = () => setInstalled(true);
    window.addEventListener("beforeinstallprompt", onPrompt);
    window.addEventListener("appinstalled", onInstalled);
    return () => {
      window.removeEventListener("beforeinstallprompt", onPrompt);
      window.removeEventListener("appinstalled", onInstalled);
    };
  }, []);

  if (installed) return null;

  return (
    <button
      className="icon-btn"
      type="button"
      aria-label="Install app"
      title="Install app"
      onClick={async () => {
        if (!event) return;
        await event.prompt();
        await event.userChoice;
        setEvent(null);
      }}
    >
      <Download size={20} />
    </button>
  );
}
