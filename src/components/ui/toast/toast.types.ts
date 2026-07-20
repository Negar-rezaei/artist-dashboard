import { HTMLAttributes, ReactNode } from "react";

export type ToastVariant = "success" | "error";

export interface ToastProps extends HTMLAttributes<HTMLDivElement> {
  variant?: ToastVariant;

  title: string;

  description?: string;

  icon?: ReactNode;
}
