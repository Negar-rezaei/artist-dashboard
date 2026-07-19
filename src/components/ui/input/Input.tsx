import { forwardRef } from "react";

import { cn } from "@/lib/cn";

import type { InputProps } from "./input.types";
import { inputVariants } from "./input.variants";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      size,

      error = false,

      leftAdornment,

      rightAdornment,

      disabled = false,

      readOnly = false,

      className,

      ...props
    },
    ref
  ) => {
    return (
      <div className="relative w-full">
        {leftAdornment && (
          <span
            className="
              absolute
              left-3
              top-1/2
              -translate-y-1/2

              flex
              items-center
              justify-center

              text-input-icon
              pointer-events-none
            "
          >
            {leftAdornment}
          </span>
        )}

        <input
          ref={ref}
          disabled={disabled}
          readOnly={readOnly}
          aria-invalid={error || undefined}
          className={cn(
            inputVariants({
              size,
              error,
              hasLeftAdornment: !!leftAdornment,
              hasRightAdornment: !!rightAdornment,
            }),
            className
          )}
          {...props}
        />

        {rightAdornment && (
          <span
            className="
              absolute
              right-3
              top-1/2
              -translate-y-1/2

              flex
              items-center
              justify-center

              text-input-icon
              pointer-events-none
            "
          >
            {rightAdornment}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
