"use client";

import { useCallback, useEffect, useState } from "react";

type StoreState = {
  onboarded: boolean;
  savedIds: string[];
  viewedIds: string[];
  searches: string[];
  suggestions: {
    title: string;
    aliases: string;
    meaning: string;
    origin: string;
    referenceUrl: string;
    createdAt: string;
  }[];
};

const key = "mz-radar-store";
const initial: StoreState = {
  onboarded: false,
  savedIds: ["jung-gguk-ma", "wonyoung-thinking"],
  viewedIds: [],
  searches: [],
  suggestions: []
};

export function useLocalStore() {
  const [state, setState] = useState<StoreState>(initial);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const raw = window.localStorage.getItem(key);
    if (raw) {
      setState({ ...initial, ...JSON.parse(raw) });
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [hydrated, state]);

  const toggleSave = useCallback((id: string) => {
    setState((current) => ({
      ...current,
      savedIds: current.savedIds.includes(id)
        ? current.savedIds.filter((savedId) => savedId !== id)
        : [id, ...current.savedIds]
    }));
  }, []);

  const addViewed = useCallback((id: string) => {
    setState((current) => ({
      ...current,
      viewedIds: [id, ...current.viewedIds.filter((viewedId) => viewedId !== id)].slice(0, 30)
    }));
  }, []);

  const addSearch = useCallback((query: string) => {
    const trimmed = query.trim();
    if (!trimmed) return;
    setState((current) => ({
      ...current,
      searches: [trimmed, ...current.searches.filter((item) => item !== trimmed)].slice(0, 12)
    }));
  }, []);

  const finishOnboarding = useCallback(() => {
    setState((current) => ({ ...current, onboarded: true }));
  }, []);

  const addSuggestion = useCallback((suggestion: Omit<StoreState["suggestions"][number], "createdAt">) => {
    setState((current) => ({
      ...current,
      suggestions: [{ ...suggestion, createdAt: new Date().toISOString() }, ...current.suggestions].slice(0, 20)
    }));
  }, []);

  return {
    ...state,
    toggleSave,
    addViewed,
    addSearch,
    finishOnboarding,
    addSuggestion
  };
}
