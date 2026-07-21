"use client";

import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from "react";

import { Toast } from "./toast";

import type { ToastProps } from "./toast.types";

type ToastContextValue = {
  showToast: (toast: ToastProps) => void;
};

const ToastContext = createContext<ToastContextValue | null>(null);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toast, setToast] = useState<ToastProps | null>(null);

  const showToast = useCallback((toast: ToastProps) => {
    setToast(toast);

    setTimeout(() => {
      setToast(null);
    }, 3000);
  }, []);

  return (
    <ToastContext.Provider
      value={{
        showToast,
      }}
    >
      {children}

      {toast && (
        <div
          className="
          fixed
          left-0 right-0 top-8
          z-50
          flex
          items-center
          justify-center
          pointer-events-none
          "
        >
          <div className="pointer-events-auto">
            <Toast {...toast} />
          </div>
        </div>
      )}
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("useToast must be used inside ToastProvider");
  }

  return context;
}
