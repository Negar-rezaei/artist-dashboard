"use client";

import { forwardRef } from "react";

import { cn } from "@/lib/cn";


import { DropdownItemProps } from "./dropdown-item.types";
import { dropdownItemVariants } from "./dropdown-item.variants";
import { Spinner } from "@/components/shared/spinner";

export const DropdownItem = forwardRef<
  HTMLButtonElement,
  DropdownItemProps
>(
  (
    {
      className,
      disabled = false,
      loading = false,
      children,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading;

    return (
      <button
        ref={ref}
        type="button"
        disabled={isDisabled}
        className={cn(
          dropdownItemVariants({
            disabled: isDisabled,
          }),
          className
        )}
        {...props}
      >
        {loading && (
          <Spinner
            size="sm"
            className="text-dropdown-item-spinner"
          />
        )}

        <span>{children}</span>
      </button>
    );
  }
);

DropdownItem.displayName = "DropdownItem";