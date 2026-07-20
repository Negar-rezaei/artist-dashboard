import { cva } from "class-variance-authority";

export const linkButtonVariants = cva(
  [
    "inline-flex",
    "items-center",
    "justify-center",
    "body-md-strong",
    "transition-colors",
    "duration-200",
    "outline-none",
    "focus-visible:ring-2",
    "focus-visible:ring-primary-focus",
  ],
  {
    variants: {
      disabled: {
        true: ["pointer-events-none", "text-link-button-disabled"],

        false: [
          "text-link-button",
          "hover:text-link-button-hover",
          "active:text-link-button-active",
        ],
      },
    },

    defaultVariants: {
      disabled: false,
    },
  }
);
