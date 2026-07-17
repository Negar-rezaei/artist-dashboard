import { cva } from "class-variance-authority";

const base = `
relative
w-full
rounded-lg
border
bg-input-bg
text-input-fg
placeholder:text-input-placeholder
transition-[border-color,box-shadow,color]
duration-200
outline-none

focus-visible:ring-1
focus-visible:ring-input-border-active
focus-visible:ring-offset-1

disabled:cursor-not-allowed
disabled:pointer-events-none

read-only:cursor-default
`;

export const inputVariants = cva(base, {
  variants: {
    size: {
      sm: `
        h-9
        px-3
        body-md
      `,
      md: `
        h-10
        px-4
        body-md
      `,
      lg: `
        h-12
        px-5
        body-lg
      `,
    },

    state: {
      default: `
        border-input-border
      `,

      hover: `
        border-input-border-hover
      `,

      active: `
        border-input-border-active
      `,

      readonly: `
        border-input-border-readonly
      `,

      disabled: `
        border-input-border-disabled
        bg-input-bg-disabled
        text-input-fg-disabled
      `,
    },

    error: {
      true: `
        border-input-border-error
        hover:border-input-border-error
        focus:border-input-border-error
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
    state: "default",
    error: false,
    hasLeftAdornment: false,
    hasRightAdornment: false,
  },
});
