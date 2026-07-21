"use client";

import { Button } from "@/components/ui/button";
import { Header } from "@/components/ui/header";
import { useLocalStorageUser } from "@/hooks/useLocalStorage";

import { useLogout } from "@/hooks/useLogout";

export function DashboardHeader() {
  const { logout } = useLogout();

  const user = useLocalStorageUser();

  return (
    <Header
      leading={
        <span className="body-md">
          Welcome
          <span className="body-md-strong">{user?.username ?? "User"}</span> 👋
        </span>
      }
      title="ArvanCloud Challenge"
      trailing={
        <Button variant="secondary" onClick={logout}>
          Logout
        </Button>
      }
    />
  );
}
