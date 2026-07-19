import type { ReactNode } from "react";

interface ModalFooterProps {
  children: ReactNode;
}

export function ModalFooter({ children }: ModalFooterProps) {
  return (
    <footer className="flex items-center justify-end gap-4 border-t border-modal-border bg-modal-bg px-6 py-4">
      {children}
    </footer>
  );
}
