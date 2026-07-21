import Link from "next/link";

import { cn } from "@/lib/cn";

import { SidebarMenuItemProps } from "./sidebar-menu-item.types";
import { sidebarMenuItemVariants } from "./sidebar-menu-item.variants";

export function SidebarMenuItem({
  title,
  subtitle,
  startAdornment,
  endAdornment,
  state,
  selected,
  className,
  href,
  ...props
}: SidebarMenuItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        sidebarMenuItemVariants({
          state,
          selected,
        }),
        className,
      )}
      {...props}
    >
      {startAdornment}

      <div className="flex flex-1 flex-col justify-center">
        <span
          className={cn(
            "body-lg-strong",
            selected
              ? state === "hover"
                ? "text-sidebar-menu-text-selected-hover"
                : "text-sidebar-menu-text-selected"
              : state === "pressed"
                ? "text-sidebar-menu-text-pressed"
                : state === "hover"
                  ? "text-sidebar-menu-text-hover"
                  : "text-sidebar-menu-text",
          )}
        >
          {title}
        </span>

        {subtitle && (
          <span className="caption-1 text-sidebar-menu-subtitle">
            {subtitle}
          </span>
        )}
      </div>

      {endAdornment}
    </Link>
  );
}
