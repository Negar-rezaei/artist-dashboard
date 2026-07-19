"use client";

import { ModalProvider } from "./modal.context";

import type { ModalProps } from "./modal.types";

import { cn } from "@/lib/cn";

const sizeClasses = {
  sm: "w-[456px]",

  md: "w-[600px]",

  lg: "w-[800px]",
};

export function Modal({
  open,

  onOpenChange,

  size = "md",

  variant = "default",

  children,
}: ModalProps) {
  if (!open) {
    return null;
  }

  return (
    <ModalProvider
      value={{
        size,

        variant,

        close() {
          onOpenChange(false);
        },
      }}
    >
      <div
        className="
          fixed
          inset-0
          z-50
          flex
          items-center
          justify-center
        "
      >
        <button
          aria-label="Close modal"
          className="
            absolute
            inset-0
            bg-modal-overlay
          "
          onClick={() => onOpenChange(false)}
        />

        <div
          role="dialog"
          aria-modal="true"
          className={cn(
            "relative",

            "flex",

            "flex-col",

            "overflow-hidden",

            "rounded-modal",

            "bg-modal-bg",

            sizeClasses[size]
          )}
        >
          {children}
        </div>
      </div>
    </ModalProvider>
  );
}
