import type { ReactNode } from "react";

export interface FieldProps {

  label?: ReactNode;
  required?: boolean;
  helperText?: ReactNode;
  error?: boolean;
  errorMessage?: ReactNode;
  children: ReactNode;
  className?: string;
}
