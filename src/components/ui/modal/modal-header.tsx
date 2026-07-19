import type { ReactNode } from "react";

interface ModalHeaderProps {
  title: string;
  description?: string;
  action?: ReactNode;
}

export function ModalHeader({ title, description, action }: ModalHeaderProps) {
  return (
    <header className="flex items-center gap-2 border-b border-modal-border px-6 py-4 bg-modal-bg">
      <div className="flex flex-1 flex-col">
        <h2 className="body-md-strong text-text">{title}</h2>

        {description && (
          <p className="caption text-modal-title">{description}</p>
        )}
      </div>

      {action}
    </header>
  );
}
