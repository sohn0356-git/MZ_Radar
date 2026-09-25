"use client";

import { useCallback, useEffect, useState } from "react";

type StoreState = {
  onboarded: boolean;
  savedIds: string[];
  viewedIds: string[];
  searches: string[];
};

const key = "mz-radar-store";
const initial: StoreState = {
  onboarded: false,
  savedIds: ["jung-gguk-ma", "wonyoung-thinking"],
  viewedIds: [],
  searches: []
};

export function useLocalStore() {
  const [state, setState] = useState<StoreState>(initial);

  useEffect(() => {
    const raw = window.localStorage.getItem(key);
    if (raw) {
      setState({ ...initial, ...JSON.parse(raw) });
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state]);

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

  return {
    ...state,
    toggleSave,
    addViewed,
    addSearch,
    finishOnboarding
  };
}
