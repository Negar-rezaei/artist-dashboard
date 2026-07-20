"use client";

import { useEffect, useId, useRef } from "react";

import { cn } from "@/lib/cn";
import { Icon } from "../icon";
import type { CheckboxProps } from "./checkbox.types";
import {
  checkboxIndicatorVariants,
  checkboxRootVariants,
} from "./checkbox.variants";

export function Checkbox({
  id,
  checked,
  defaultChecked,
  disabled = false,
  indeterminate = false,
  label,
  description,
  className,
  onCheckedChange,
  ...props
}: CheckboxProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!inputRef.current) return;
    inputRef.current.indeterminate = indeterminate;
  }, [indeterminate]);

  const isChecked = checked ?? defaultChecked ?? false;
  const isMarked = isChecked || indeterminate;

  return (
    <label
      htmlFor={inputId}
      className={cn(
        checkboxRootVariants(),
        disabled && "cursor-not-allowed",
        className
      )}
    >
      <input
        {...props}
        id={inputId}
        ref={inputRef}
        type="checkbox"
        checked={checked}
        defaultChecked={defaultChecked}
        disabled={disabled}
        className="peer sr-only"
        onChange={(event) => onCheckedChange?.(event.target.checked)}
      />

      <span
        aria-hidden="true"
        className={checkboxIndicatorVariants({ checked: isMarked, disabled })}
      >
        {isMarked && (
          <Icon
            name={indeterminate ? "minus" : "check"}
            size={12}
            className={cn(
              disabled
                ? isMarked
                  ? "text-checkbox-icon-checked-disabled"
                  : "text-checkbox-icon-disabled"
                : isMarked
                ? "text-checkbox-icon-checked"
                : "text-checkbox-icon"
            )}
          />
        )}
      </span>

      {(label || description) && (
        <span className="flex flex-col">
          {label && (
            <span
              className={cn(
                "body-md",
                disabled
                  ? "text-checkbox-label-disabled"
                  : "text-checkbox-label"
              )}
            >
              {label}
            </span>
          )}
          {description && (
            <span className="caption text-checkbox-description">
              {description}
            </span>
          )}
        </span>
      )}
    </label>
  );
}
