import { HeaderProps } from "./header.types";
import {
  headerInfoVariants,
  headerLeadingVariants,
  headerTrailingVariants,
  headerVariants,
} from "./header.variants";

export function Header({ title, value, leading, trailing }: HeaderProps) {
  return (
    <header className={headerVariants()}>
      <div className={headerInfoVariants()}>
        {title}
        {value}
      </div>

      {leading && <div className={headerLeadingVariants()}>{leading}</div>}

      {trailing && <div className={headerTrailingVariants()}>{trailing}</div>}
    </header>
  );
}
