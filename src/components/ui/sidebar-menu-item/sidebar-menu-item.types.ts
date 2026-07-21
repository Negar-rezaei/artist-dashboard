import { ComponentPropsWithoutRef } from "react";

export interface SidebarMenuItemProps extends ComponentPropsWithoutRef<"div"> {
  title: string;
  subtitle?: string;
  href?: string;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  state?: "default" | "hover" | "pressed";
  selected?: boolean;
}
