import { cva } from "class-variance-authority";

export const sectionVariants = cva([
  "overflow-hidden",
  "rounded-lg",
  "bg-section-bg",
]);

export const sectionHeaderVariants = cva([
  "flex",
  "items-center",
  "justify-between",
  "gap-6",
  "px-6",
  "py-6",
]);

export const sectionBodyVariants = cva([
  "border-t",
  "border-border-primary",
  "p-6",
]);
