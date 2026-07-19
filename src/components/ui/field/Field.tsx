"use client";

import { useId } from "react";

import { cn } from "@/lib/cn";
import { FieldProvider } from "./field.context";
import type { FieldProps } from "./field.types";

export function Field({
  label,
  required = false,
  helperText,
  error = false,
  errorMessage,
  children,
  className,
}: FieldProps) {
  const id = useId();
  const hasDescription = Boolean(helperText || errorMessage);
  const descriptionId = hasDescription ? `${id}-description` : undefined;

  return (
    <FieldProvider
      value={{
        id,
        error,
        required,
        describedBy: descriptionId,
      }}
    >
      <div className={cn("flex flex-col gap-1.5", className)}>
        {label && (
          <label htmlFor={id} className="body-md-strong text-field-label">
            {label}
            {required && (
              <span aria-hidden="true" className="ml-1 text-field-required">
                *
              </span>
            )}
          </label>
        )}

        {children}

        {hasDescription && (
          <div id={descriptionId} role={error ? "alert" : undefined}>
            {error ? (
              <span className="caption text-field-error">{errorMessage}</span>
            ) : (
              <span className="caption text-field-helper">{helperText}</span>
            )}
          </div>
        )}
      </div>
    </FieldProvider>
  );
}
