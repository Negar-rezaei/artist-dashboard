import { cn } from "@/lib/cn";
import type { SpinnerProps } from "./spinner.types";
import { spinnerVariants } from "./spinner.variants";

export function Spinner({ size, className, ...props }: SpinnerProps) {
  return (
    <span
      className={cn(spinnerVariants({ size }), className)}
      aria-hidden="true"
      {...props}
    />
  );
}
