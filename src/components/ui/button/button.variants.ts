import { cva } from "class-variance-authority";

const base = `
relative
inline-flex
items-center
justify-center
gap-2
cursor-pointer
overflow-hidden
rounded-xl
whitespace-nowrap
select-none
transition-[background-color,border-color,color,box-shadow]
duration-200
ease-out

focus-visible:outline-none
focus-visible:ring-2
focus-visible:ring-[var(--color-brand)]
focus-visible:ring-offset-2

disabled:pointer-events-none
disabled:cursor-not-allowed
`;

export const buttonVariants = cva(base, {
  variants: {
    variant: {
      primary: `
        bg-button-primary
        text-button-primary-fg

        hover:bg-button-primary-hover

        active:bg-button-primary-pressed

        disabled:bg-button-primary-disabled
        `,
      secondary: `
       border-button-secondary

       text-button-secondary-fg

       hover:border-button-secondary-hover
       hover:text-button-secondary-fg-hover

       active:border-button-secondary-pressed
       active:text-button-secondary-fg-pressed

       disabled:border-button-secondary-disabled
       disabled:text-button-secondary-fg-disabled
        `,
      danger: `
        bg-button-danger

        text-button-danger-fg

        hover:bg-button-danger-hover

        active:bg-button-danger-pressed

        disabled:bg-button-danger-disabled
        `,
    },

    size: {
      sm: "h-8 px-3 body-md-strong",
      md: "h-10 px-4 body-md-strong",
      lg: "h-12 px-5 body-lg-strong",
      iconSm: "h-8 w-8 min-w-8 p-0",
      iconMd: "h-10 w-10 min-w-10 p-0",
      iconLg: "h-12 w-12 min-w-12 p-0",
    },
    fullWidth: {
      true: "w-full",

      false: "",
    },

    border: {
      true: "border",
      false: "border-transparent border-0",
    },

    iconOnly: {
      true: "aspect-square p-0",

      false: "",
    },
  },

  defaultVariants: {
    variant: "primary",

    size: "md",

    fullWidth: false,

    border: true,

    iconOnly: false,
  },
});
