import type { InputHTMLAttributes, ReactNode } from "react";

export interface CheckboxProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "type" | "size" | "checked" | "defaultChecked" | "onChange"
  > {
  checked?: boolean;

  defaultChecked?: boolean;

  indeterminate?: boolean;

  invalid?: boolean;

  label?: ReactNode;

  description?: ReactNode;

  onCheckedChange?: (checked: boolean) => void;
}
