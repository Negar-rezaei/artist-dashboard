import { cva } from "class-variance-authority";

export const paginationVariants = cva(
  [
    "inline-flex",
    "items-center",
    "gap-2",
    "rounded-lg",
    "border",
    "border-pagination-border",
    "bg-pagination-bg",
    "p-1",
  ],
  {
    variants: {
      disabled: {
        true: "pointer-events-none",
        false: "",
      },
    },

    defaultVariants: {
      disabled: false,
    },
  }
);
