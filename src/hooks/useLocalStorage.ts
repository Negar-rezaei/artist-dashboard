"use client";

import { useSyncExternalStore } from "react";

function subscribe() {
  return () => {};
}

function getSnapshot() {
  return localStorage.getItem("user");
}

function getServerSnapshot() {
  return null;
}

export function useLocalStorageUser() {
  const user = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  if (!user) {
    return null;
  }

  try {
    return JSON.parse(user);
  } catch {
    return null;
  }
}
