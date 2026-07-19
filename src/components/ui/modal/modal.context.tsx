"use client";

import { createContext, useContext } from "react";

import type { ModalSize, ModalVariant } from "./modal.types";

interface ModalContextValue {
  size: ModalSize;

  variant: ModalVariant;

  close: () => void;
}

const ModalContext = createContext<ModalContextValue | null>(null);

export function ModalProvider({
  children,

  value,
}: {
  children: React.ReactNode;

  value: ModalContextValue;
}) {
  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
}

export function useModalContext() {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error("Modal components must be used inside Modal");
  }

  return context;
}
