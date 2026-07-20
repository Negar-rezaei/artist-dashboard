import type { ReactNode } from "react";

interface ModalBodyProps {
  children: ReactNode;

  icon?: ReactNode;
}

export function ModalBody({
  children,

  icon,
}: ModalBodyProps) {
  return (
    <section className="flex flex-col items-center gap-4 bg-modal-bg p-6">
      {icon}

      <div className="body-md text-center text-text">{children}</div>
    </section>
  );
}
