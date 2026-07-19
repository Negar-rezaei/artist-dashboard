import { cva } from "class-variance-authority";

const base = `
w-full

rounded-input

border

bg-input-bg

text-input-fg

placeholder:text-input-placeholder

transition-colors
duration-200

outline-none

hover:border-input-border-hover

focus:border-input-border-active
focus:ring-1
focus:ring-input-border-active

disabled:cursor-not-allowed
disabled:border-input-border-disabled
disabled:bg-input-bg-disabled
disabled:text-input-fg-disabled
disabled:placeholder:text-input-placeholder-disabled

read-only:border-input-border-readonly
`;

export const inputVariants = cva(base, {
  variants: {
    size: {
      sm: "h-9 px-3 body-md",

      md: "h-10 px-4 body-md",

      lg: "h-12 px-5 body-lg",
    },

    error: {
      true: `
        border-input-border-error

        hover:border-input-border-error

        focus:border-input-border-error
        focus:ring-1
        focus:ring-input-border-error
      `,

      false: "",
    },

    hasLeftAdornment: {
      true: "pl-10",

      false: "",
    },

    hasRightAdornment: {
      true: "pr-10",

      false: "",
    },
  },

  defaultVariants: {
    size: "md",

    error: false,

    hasLeftAdornment: false,

    hasRightAdornment: false,
  },
});
