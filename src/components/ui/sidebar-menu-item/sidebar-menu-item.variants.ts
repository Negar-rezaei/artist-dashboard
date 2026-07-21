import { cva } from "class-variance-authority";

export const sidebarMenuItemVariants = cva(
  [
    "flex",
    "w-full",
    "items-center",
    "gap-2",
    "px-2",
    "py-2",
    "transition-colors",
    "duration-200",
    "select-none",
    "outline-none",
  ],
  {
    variants: {
      state: {
        default: "",
        hover: "",
        pressed: "",
      },

      selected: {
        true: "",
        false: "",
      },
    },

    compoundVariants: [
      {
        state: "default",
        selected: false,
        className: "bg-sidebar-menu-bg text-sidebar-menu-text",
      },

      {
        state: "hover",
        selected: false,
        className: "bg-sidebar-menu-bg-hover text-sidebar-menu-text-hover",
      },

      {
        state: "pressed",
        selected: false,
        className: "bg-sidebar-menu-bg-pressed text-sidebar-menu-text-pressed",
      },

      {
        state: "default",
        selected: true,
        className:
          "bg-sidebar-menu-bg-selected text-sidebar-menu-text-selected",
      },

      {
        state: "hover",
        selected: true,
        className:
          "bg-sidebar-menu-bg-selected-hover text-sidebar-menu-text-selected-hover",
      },
    ],

    defaultVariants: {
      state: "default",
      selected: false,
    },
  }
);
