import { cva } from "class-variance-authority";

export const fieldVariants = cva("flex flex-col gap-2 w-[488px] min-h-[92px] opacity-100", {
  variants: {
    size: {
      sm: "",
      md: "",
      lg: "",
    },
  },
  defaultVariants: {
    size: "md",
  },
});
