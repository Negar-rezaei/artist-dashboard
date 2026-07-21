"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { saveSession } from "@/lib/auth";
import { authService } from "@/services/auth.service";

import type { LoginRequest, LoginResponse } from "@/types/auth.types";

export function useLogin() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  async function login(data: LoginRequest): Promise<LoginResponse> {
    setLoading(true);

    try {
      const user = await authService.login(data);

      saveSession(user, user.accessToken);

      router.replace("/dashboard");

      return user;
    } finally {
      setLoading(false);
    }
  }

  return {
    login,
    loading,
  };
}
