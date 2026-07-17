import { cva } from "class-variance-authority";

export const spinnerVariants = cva(
  `
    inline-block
    animate-spin
    rounded-full
    border-2
    border-current/20
    border-t-current
  `,
  {
    variants: {
      size: {
        sm: "h-4 w-4",
        md: "h-5 w-5",
        lg: "h-6 w-6",
        xl: "h-8 w-8",
      },
    },

    defaultVariants: {
      size: "md",
    },
  },
);