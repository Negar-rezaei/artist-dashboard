"use client";

import { createContext, useContext } from "react";

interface FieldContextValue {
  id: string;

  error: boolean;

  required: boolean;

  describedBy?: string;
}

const FieldContext = createContext<FieldContextValue | undefined>(undefined);

export function FieldProvider({
  value,

  children,
}: {
  value: FieldContextValue;

  children: React.ReactNode;
}) {
  return (
    <FieldContext.Provider value={value}>{children}</FieldContext.Provider>
  );
}

export function useFieldContext() {
  return useContext(FieldContext);
}
