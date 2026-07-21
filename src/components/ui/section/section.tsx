import { cn } from "@/lib/cn";

import { SectionProps } from "./section.types";
import {
  sectionBodyVariants,
  sectionHeaderVariants,
  sectionVariants,
} from "./section.variants";

export function Section({
  title,
  description,
  actions,
  children,
  className,
  ...props
}: SectionProps) {
  const hasHeader = title || description || actions;

  return (
    <section className={cn(sectionVariants(), className)} {...props}>
      {hasHeader && (
        <header className={sectionHeaderVariants()}>
          <div>
            {title && <h2>{title}</h2>}

            {description && (
              <p className="body-md text-section-caption">{description}</p>
            )}
          </div>

          {actions}
        </header>
      )}

      <div className={sectionBodyVariants()}>{children}</div>
    </section>
  );
}
