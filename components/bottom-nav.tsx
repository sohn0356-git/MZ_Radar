"use client";

import { Flame, Search, UserRound } from "lucide-react";
import type { Tab } from "@/app/page";

export function BottomNav({ active, onChange }: { active: Tab; onChange: (tab: Tab) => void }) {
  const items: { id: Tab; label: string; icon: React.ReactNode }[] = [
    { id: "search", label: "Search", icon: <Search size={22} /> },
    { id: "feed", label: "Feed", icon: <Flame size={22} /> },
    { id: "profile", label: "Profile", icon: <UserRound size={22} /> }
  ];

  return (
    <nav className="bottom-nav" aria-label="Primary">
      {items.map((item) => (
        <button
          key={item.id}
          className={`nav-item ${active === item.id ? "active" : ""}`}
          onClick={() => onChange(item.id)}
          type="button"
        >
          {item.icon}
          <span>{item.label}</span>
        </button>
      ))}
    </nav>
  );
}
