import { ReactNode } from "react";

export interface HeaderProps {
  title: ReactNode;
  value?: ReactNode;

  leading?: ReactNode;
  trailing?: ReactNode;
}
