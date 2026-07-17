import { forwardRef } from "react";

import { cn } from "@/lib/cn";

import { inputVariants } from "./input.variants";

import { Spinner } from "../../shared/spinner/Spinner";
import type { InputProps } from "./input.types";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      size,

      error,

      loading,

      leftAdornment,

      rightAdornment,

      disabled,

      readOnly,

      className,

      ...props
    },
    ref
  ) => {
    return (
      <div className="relative w-full">
        {leftAdornment && (
          <span className="absolute left-3 top-1/2 z-0 flex shrink-0 -translate-y-1/2 items-center justify-center text-input-fg">
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

              state: disabled ? "disabled" : readOnly ? "readonly" : "default",

              hasLeftAdornment: !!leftAdornment,

              hasRightAdornment: !!rightAdornment || loading,
            }),

            className
          )}
          {...props}
        />

        {(rightAdornment || loading) && (
          <span className="absolute right-3 top-1/2 flex shrink-0 -translate-y-1/2 items-center justify-center text-input-fg">
            {loading ? <Spinner /> : rightAdornment}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
