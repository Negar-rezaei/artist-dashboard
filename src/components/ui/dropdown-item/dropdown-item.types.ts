import { VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";

import { dropdownItemVariants } from "./dropdown-item.variants";

export interface DropdownItemProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    Omit<VariantProps<typeof dropdownItemVariants>, "disabled"> {
  loading?: boolean;
}
