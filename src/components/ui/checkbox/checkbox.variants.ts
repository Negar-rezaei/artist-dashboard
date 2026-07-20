import { cva } from "class-variance-authority";

export const checkboxRootVariants = cva([
  "inline-flex items-start gap-[var(--checkbox-gap)]",
  "cursor-pointer select-none",
]);

export const checkboxIndicatorVariants = cva(
  [
    "relative flex items-center justify-center shrink-0",
    "transition-colors duration-150",
    "size-[var(--checkbox-size)]",
    "rounded-checkbox",
    "border-[length:var(--checkbox-border-width)]",
    "before:absolute before:inset-0",
    "before:size-[var(--checkbox-hit-area)]",
    "before:-translate-x-1/2 before:-translate-y-1/2",
    "before:top-1/2 before:left-1/2",
    "peer-focus-visible:ring-[length:var(--checkbox-focus-ring-width)]",
    "peer-focus-visible:ring-checkbox-focus-ring",
    "peer-focus-visible:ring-offset-[length:var(--checkbox-focus-ring-offset)]",
  ],
  {
    variants: {
      checked: { true: "", false: "" },
      disabled: { true: "cursor-not-allowed", false: "" },
    },
    compoundVariants: [
      {
        checked: false,
        disabled: false,
        class: [
          "bg-checkbox-bg border-checkbox-border",
          "hover:bg-checkbox-bg-hover hover:border-checkbox-border-hover",
          "active:bg-checkbox-bg-pressed active:border-checkbox-border-pressed",
        ],
      },
      {
        checked: false,
        disabled: true,
        class: "bg-checkbox-bg-disabled border-checkbox-border-disabled",
      },
      {
        checked: true,
        disabled: false,
        class: [
          "bg-checkbox-bg-checked border-checkbox-border-checked",
          "hover:bg-checkbox-bg-checked-hover hover:border-checkbox-border-checked-hover",
          "active:bg-checkbox-bg-checked-pressed active:border-checkbox-border-checked-pressed",
        ],
      },
      {
        checked: true,
        disabled: true,
        class:
          "bg-checkbox-bg-checked-disabled border-checkbox-border-checked-disabled",
      },
    ],
    defaultVariants: { checked: false, disabled: false },
  }
);
