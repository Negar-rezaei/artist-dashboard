"use client";

import { forwardRef } from "react";

import { cn } from "@/lib/cn";

import type { ToastProps } from "./toast.types";
import { toastVariants } from "./toast.variants";

export const Toast = forwardRef<HTMLDivElement, ToastProps>(
  (
    { variant = "success", title, description, icon, className, ...props },
    ref
  ) => {
    return (
      <div
        ref={ref}
        role="status"
        aria-live="polite"
        className={cn(toastVariants({ variant }), className)}
        {...props}
      >
        <div className="flex items-center gap-4">
          {icon}

          <div className="flex items-center gap-2">
            <span className="body-md-strong">{title}</span>

            {description && <span className="caption">{description}</span>}
          </div>
        </div>
      </div>
    );
  }
);

Toast.displayName = "Toast";
