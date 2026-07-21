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
  return (
    <section className={cn(sectionVariants(), className)} {...props}>
      <header className={sectionHeaderVariants()}>
        <div className="flex flex-1 flex-col gap-2">
          <h2 className="title-3 body-lg-strong text-section-title">{title}</h2>

          {description && (
            <p className="body-md text-section-caption">{description}</p>
          )}
        </div>

        {actions}
      </header>

      <div className={sectionBodyVariants()}>{children}</div>
    </section>
  );
}
