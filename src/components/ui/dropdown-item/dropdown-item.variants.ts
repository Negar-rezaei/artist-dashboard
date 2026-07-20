import { cva } from "class-variance-authority";

export const dropdownItemVariants = cva(
  [
    "flex",
    "w-full",
    "items-center",
    "justify-between",
    "rounded-lg",
    "px-2",
    "py-2",
    "body-md",
    "text-left",
    "transition-colors",
    "duration-200",
    "outline-none",
    "focus-visible:ring-2",
    "focus-visible:ring-primary-focus",
  ],
  {
    variants: {
      disabled: {
        true: [
          "pointer-events-none",
          "bg-dropdown-item-bg",
          "text-dropdown-item-text-disabled",
        ],

        false: [
          "bg-dropdown-item-bg",
          "text-dropdown-item-text",
          "hover:bg-dropdown-item-bg-hover",
          "hover:text-dropdown-item-text-hover",
          "active:bg-dropdown-item-bg-active",
          "active:text-dropdown-item-text-active",
        ],
      },
    },

    defaultVariants: {
      disabled: false,
    },
  }
);
