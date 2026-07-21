"use client";

import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function HomePage() {
  const router = useRouter();

  const { token } = useAuth();

  useEffect(() => {
    if (token) {
      router.replace("/dashboard");
    } else if (token === null) {
      router.replace("/login");
    }
  }, [token, router]);

  return null;
}
