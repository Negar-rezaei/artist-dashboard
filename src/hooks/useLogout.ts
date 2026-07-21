"use client";

import { useRouter } from "next/navigation";

import { clearSession } from "@/lib/auth";

export function useLogout() {
  const router = useRouter();

  function logout() {
    clearSession();

    router.replace("/login");
  }

  return {
    logout,
  };
}
