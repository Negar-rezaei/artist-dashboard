import { cva } from "class-variance-authority";

export const toastVariants = cva(
  [
    "inline-flex",
    "min-w-fit",
    "flex-col",
    "rounded-xl",
    "px-4",
    "py-3",
    "shadow-[var(--shadow-xl)]",
    "transition-colors",
  ],
  {
    variants: {
      variant: {
        success: ["bg-toast-success-bg", " text-toast-success-text"],

        error: ["bg-toast-error-bg", "text-toast-error-text"],
      },
    },

    defaultVariants: {
      variant: "success",
    },
  }
);
