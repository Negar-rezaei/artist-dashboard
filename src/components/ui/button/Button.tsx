import { cn } from "@/lib/cn";

import { Spinner } from "./Spinner";
import { ButtonProps } from "./button.types";
import { buttonVariants } from "./button.variants";

export function Button({
  children,

  variant,
  size,

  fullWidth,

  loading = false,
  disabled = false,

  icon,

  className,

  type = "button",

  ...props
}: ButtonProps) {
  const isDisabled = disabled || loading;

  const isIconOnly = !!icon && !children;

  return (
    <button
      type={type}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      aria-busy={loading}
      className={cn(
        buttonVariants({
          variant,
          size,
          fullWidth,
          iconOnly: isIconOnly,
        }),
        className
      )}
      {...props}
    >
      <span
        className={cn(
          "inline-flex items-center justify-center gap-2 leading-none",
          loading && "invisible"
        )}
      >
        {icon && (
          <span
            className="flex shrink-0 items-center justify-center"
          >
            {icon}
          </span>
        )}

        {children}

      </span>

      {loading && (
        <span
          className="absolute inset-0 flex items-center justify-center"
        >
          <Spinner />
        </span>
      )}
    </button>
  );
}