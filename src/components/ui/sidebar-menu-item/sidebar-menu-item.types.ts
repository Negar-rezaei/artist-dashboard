import type { ReactNode } from "react";

export interface SidebarMenuItemProps {
  href: string;
  className?: string;
  title: string;
  subtitle?: string;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  selected?: boolean;
  state?: "default" | "hover" | "pressed";
}
