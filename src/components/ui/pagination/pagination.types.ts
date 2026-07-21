import { HTMLAttributes } from "react";

export interface PaginationProps extends HTMLAttributes<HTMLElement> {
  page: number;
  totalPages: number;
  disabled?: boolean;
  onPageChange?: (page: number) => void;
}
