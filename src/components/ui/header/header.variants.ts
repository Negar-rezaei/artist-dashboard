import { cva } from "class-variance-authority";

export const headerVariants = cva([
  "flex",
  "items-center",
  "justify-between",
  "border-b",
  "border-header-border",
  "bg-header-bg",
  "px-6",
  "py-3",
]);

export const headerInfoVariants = cva(["flex", "items-center", "gap-0.5"]);

export const headerLeadingVariants = cva(["flex", "justify-center", "px-4"]);

export const headerTrailingVariants = cva([
  "flex",
  "items-center",
  "justify-end",
  "gap-2",
]);

export const headerPreviewVariants = cva([
  "rounded",
  "bg-header-preview-bg",
  "px-3",
  "hidden",
  "sm:block",
  "py-2",
  "body-lg-strong",
  "text-header-text",
]);
