import { HeaderProps } from "./header.types";
import {
  headerLeadingVariants,
  headerPreviewVariants,
  headerTrailingVariants,
  headerVariants,
} from "./header.variants";

export function Header({ title, value, leading, trailing }: HeaderProps) {
  return (
    <header className={headerVariants()}>
      {leading && <div className={headerLeadingVariants()}>{leading}</div>}

      <div className={headerPreviewVariants()}>
        {title}
        {value}
      </div>

      {trailing && <div className={headerTrailingVariants()}>{trailing}</div>}
    </header>
  );
}
