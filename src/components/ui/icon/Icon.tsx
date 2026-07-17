import { icons } from "./icons";

import type { BaseIconProps } from "./icon.types";

export type IconName = keyof typeof icons;

interface IconProps extends BaseIconProps {
  name: IconName;
}

export function Icon({
  name,
  size = 24,
  ...props
}: IconProps) {
  const Component = icons[name];

  if (!Component) 
    return null;
  

  return (
    <Component
      size={size}
      aria-hidden="true"
      focusable="false"
      {...props}
    />
  );
}