import type { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary" | "danger";

export type ButtonSize = "sm" | "md" | "lg" | "iconSm" | "iconMd" | "iconLg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;

  size?: ButtonSize;

  loading?: boolean;

  fullWidth?: boolean;

  icon?: ReactNode;

  iconOnly?: boolean;

  border?: boolean;
}
