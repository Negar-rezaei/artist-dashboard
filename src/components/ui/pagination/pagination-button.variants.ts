import { cva } from "class-variance-authority";

export const paginationButtonVariants = cva(
  [
    "flex",
    "h-8",
    "min-w-8",
    "items-center",
    "justify-center",
    "rounded-lg",
    "px-1",
    "body-md-strong",
    "transition-colors",
    "duration-200",
    "outline-none",
    "focus-visible:ring-2",
    "focus-visible:ring-primary-focus",
  ],
  {
    variants: {
      state: {
        default: [
          "bg-pagination-button-bg",
          "text-pagination-button",
          "hover:bg-pagination-button-hover",
          "hover:text-pagination-button",
          "active:bg-pagination-button-pressed",
          "active:text-pagination-button",
        ],

        disabled: [
          "pointer-events-none",
          "bg-pagination-button-bg",
          "text-pagination-button-disabled",
        ],
      },

      selected: {
        true: [
          "bg-pagination-button-active",
          "text-pagination-button-active-text",
        ],

        false: "",
      },

      ellipsis: {
        true: "px-0",

        false: "",
      },
    },

    compoundVariants: [
      {
        state: "disabled",
        selected: true,
        className: [
          "bg-pagination-button-active-disabled",
          "text-pagination-button-active-text",
        ],
      },
    ],

    defaultVariants: {
      state: "default",
      selected: false,
      ellipsis: false,
    },
  }
);