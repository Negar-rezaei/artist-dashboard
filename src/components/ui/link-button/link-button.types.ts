import { VariantProps } from "class-variance-authority";
import { AnchorHTMLAttributes } from "react";

import { linkButtonVariants } from "./link-button.variants";

export interface LinkButtonProps
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkButtonVariants> {
  disabled?: boolean;
}
