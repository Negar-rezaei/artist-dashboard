"use client";

import { cn } from "@/lib/cn";

import { PaginationButtonProps } from "./pagination-button.types";
import { paginationButtonVariants } from "./pagination-button.variants";

export function PaginationButton({
  state,
  selected,
  ellipsis,
  className,
  children,
  disabled,
  ...props
}: PaginationButtonProps) {
  return (
    <button
      type="button"
      disabled={disabled}
      className={cn(
        paginationButtonVariants({
          state,
          selected,
          ellipsis,
        }),
        className
      )}
      {...props}
    >
      {ellipsis ? "..." : children}
    </button>
  );
}
