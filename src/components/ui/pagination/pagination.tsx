"use client";

import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { cn } from "@/lib/cn";

import { PaginationButton } from "./pagination-button";
import { PaginationProps } from "./pagination.types";
import { paginationVariants } from "./pagination.variants";

export function Pagination({
  page,
  totalPages,
  disabled = false,
  onPageChange,
  className,
  ...props
}: PaginationProps) {
  const pages: (number | "...")[] = [];

  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
  } else {
    pages.push(1);

    if (page > 3) {
      pages.push("...");
    }

    const start = Math.max(2, page - 1);
    const end = Math.min(totalPages - 1, page + 1);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (page < totalPages - 2) {
      pages.push("...");
    }

    pages.push(totalPages);
  }

  return (
    <nav
      aria-label="Pagination"
      className={cn(paginationVariants({ disabled }), className)}
      {...props}
    >
      <Button
        variant="secondary"
        size="iconSm"
        border={false}
        disabled={disabled || page === 1}
        icon={<Icon name="chevronLeft" size={20} />}
        aria-label="Previous page"
        onClick={() => onPageChange?.(page - 1)}
      />

      {pages.map((item, index) =>
        item === "..." ? (
          <PaginationButton
            key={`ellipsis-${index}`}
            ellipsis
            state={disabled ? "disabled" : "default"}
            disabled={disabled}
          />
        ) : (
          <PaginationButton
            key={item}
            selected={item === page}
            disabled={disabled}
            state={disabled ? "disabled" : "default"}
            onClick={() => onPageChange?.(item)}
          >
            {item}
          </PaginationButton>
        )
      )}

      <Button
        variant="secondary"
        size="iconSm"
        border={false}
        disabled={disabled || page === totalPages}
        icon={<Icon name="chevronRight" size={20} />}
        aria-label="Next page"
        onClick={() => onPageChange?.(page + 1)}
      />
    </nav>
  );
}
