export type ModalSize = "sm" | "md" | "lg";

export type ModalVariant = "default" | "danger";

export interface ModalProps {
  open: boolean;

  onOpenChange: (open: boolean) => void;

  size?: ModalSize;

  variant?: ModalVariant;

  children: React.ReactNode;
}
