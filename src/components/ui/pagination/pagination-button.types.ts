import { VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";

import { paginationButtonVariants } from "./pagination-button.variants";

export interface PaginationButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof paginationButtonVariants> {}
