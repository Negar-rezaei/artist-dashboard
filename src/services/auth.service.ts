import type { LoginRequest, LoginResponse } from "@/types/auth.types";
import { api } from "./api";

export const authService = {
  login(data: LoginRequest) {
    return api<LoginResponse>({
      path: "/auth/login",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  },
};
