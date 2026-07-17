import { Button } from "@/components/ui/button/Button";
import { Icon } from "@/components/ui/icon/Icon";

const states = [
  {
    title: "Primary",
    variant: "primary" as const,
  },
  {
    title: "Secondary",
    variant: "secondary" as const,
  },
  {
    title: "Danger",
    variant: "danger" as const,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white p-10">
      <div className="mx-auto flex max-w-5xl flex-col gap-12">
        {states.map(({ title, variant }) => (
          <section key={variant}>
            <h2 className="mb-6 heading-md">
              {title}
            </h2>

            <div className="flex flex-wrap items-center gap-6">

              {/* Default Text */}

              <Button variant={variant}>
                button
              </Button>

              {/* Default Icon */}

              <Button
                variant={variant}
                icon={<Icon name="checkCircle" size={18} />}
                aria-label="check"
              />

              {/* Hover */}

              <Button
                variant={variant}
                className="pointer-events-none"
              >
                Hover
              </Button>

              <Button
                variant={variant}
                icon={<Icon name="checkCircle" size={18} />}
                className="pointer-events-none"
              />

              {/* Press */}

              <Button
                variant={variant}
                className="pointer-events-none"
              >
                Press
              </Button>

              <Button
                variant={variant}
                icon={<Icon name="checkCircle" size={18} />}
                className="pointer-events-none"
              />

              {/* Loading */}

              <Button
                variant={variant}
                loading
              >
                button
              </Button>

              <Button
                variant={variant}
                loading
                icon={<Icon name="checkCircle" size={18} />}
                aria-label="loading"
              />

              {/* Disabled */}

              <Button
                variant={variant}
                disabled
              >
                button
              </Button>

              <Button
                variant={variant}
                disabled
                icon={<Icon name="checkCircle" size={18} />}
                aria-label="disabled"
              />

            </div>
          </section>
        ))}
      </div>
    </main>
  );
}