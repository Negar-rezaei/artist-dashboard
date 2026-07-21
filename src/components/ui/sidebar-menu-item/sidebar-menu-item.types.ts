import { HTMLAttributes, ReactNode } from "react";
import { VariantProps } from "class-variance-authority";

import { sidebarMenuItemVariants } from "./sidebar-menu-item.variants";

export interface SidebarMenuItemProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof sidebarMenuItemVariants> {
  title: string;
  subtitle?: string;

  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
}