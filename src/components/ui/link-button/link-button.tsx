"use client";

import { forwardRef } from "react";

import { cn } from "@/lib/cn";

import { LinkButtonProps } from "./link-button.types";
import { linkButtonVariants } from "./link-button.variants";

export const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>(
  ({ className, disabled = false, href, onClick, children, ...props }, ref) => {
    return (
      <a
        ref={ref}
        href={disabled ? undefined : href}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : 0}
        onClick={(event) => {
          if (disabled) {
            event.preventDefault();
            return;
          }

          onClick?.(event);
        }}
        className={cn(linkButtonVariants({ disabled }), className)}
        {...props}
      >
        {children}
      </a>
    );
  }
);

LinkButton.displayName = "LinkButton";
