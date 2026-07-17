import type { VariantProps } from "class-variance-authority";
import type { HTMLAttributes } from "react";
import { spinnerVariants } from "./spinner.variants";

export type SpinnerVariantProps = VariantProps<typeof spinnerVariants>;

export type SpinnerProps = HTMLAttributes<HTMLSpanElement> &
  SpinnerVariantProps;
