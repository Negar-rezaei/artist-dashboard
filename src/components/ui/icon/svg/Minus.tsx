import { BaseIconProps } from "../icon.types";

export function Minus({ size = 24, ...props }: BaseIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.3999 5.99999C2.3999 5.75146 2.61481 5.54999 2.8799 5.54999H9.1199C9.385 5.54999 9.5999 5.75146 9.5999 5.99999C9.5999 6.24852 9.385 6.44999 9.1199 6.44999H2.8799C2.61481 6.44999 2.3999 6.24852 2.3999 5.99999Z"
        fill="currentColor"
      />
    </svg>
  );
}
