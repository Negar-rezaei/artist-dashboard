import { Button } from "@/components/ui/button/Button";
import { Field } from "@/components/ui/field";
import { Icon } from "@/components/ui/icon/Icon";
import { Input } from "@/components/ui/input";

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
            <h2 className="mb-6 heading-md">{title}</h2>

            <div className="flex flex-wrap items-center gap-6">
              {/* Default Text */}

              <Button variant={variant}>button</Button>

              {/* Default Icon */}

              <Button
                variant={variant}
                icon={<Icon name="checkCircle" size={18} />}
                aria-label="check"
              />

              {/* Hover */}

              <Button variant={variant} className="pointer-events-none">
                Hover
              </Button>

              <Button
                variant={variant}
                icon={<Icon name="checkCircle" size={18} />}
                className="pointer-events-none"
              />

              {/* Press */}

              <Button variant={variant} className="pointer-events-none">
                Press
              </Button>

              <Button
                variant={variant}
                icon={<Icon name="checkCircle" size={18} />}
                className="pointer-events-none"
              />

              {/* Loading */}

              <Button variant={variant} loading>
                button
              </Button>

              <Button
                variant={variant}
                loading
                icon={<Icon name="checkCircle" size={18} />}
                aria-label="loading"
              />

              {/* Disabled */}

              <Button variant={variant} disabled>
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

      <section>
        <h2 className="mb-6 heading-md">Input</h2>

        <div className="flex flex-col gap-6 max-w-md">
          {/* Default */}

          <Input placeholder="Default" />

          {/* Filled */}

          <Input defaultValue="Filled value" />

          {/* Hover */}

          <Input
            placeholder="Hover"
            className="pointer-events-none border-input-border-hover"
          />

          {/* Active */}

          <Input
            placeholder="Active"
            className="border-input-border-active ring-1 ring-input-border-active"
          />

          {/* Readonly */}

          <Input defaultValue="Readonly" readOnly />

          {/* Disabled */}

          <Input placeholder="Disabled" disabled />

          {/* Error */}

          <Input placeholder="Error" error />

          {/* Left Icon */}

          <Input
            placeholder="Search..."
            leftAdornment={<Icon name="warning" size={18} />}
          />

          {/* Right Icon */}

          <Input
            placeholder="Password"
            rightAdornment={<Icon name="warning" size={18} />}
          />

          {/* Large */}

          <Input size="lg" placeholder="Large" />

          {/* Medium */}

          <Input size="md" placeholder="Medium" />

          {/* Small */}

          <Input size="sm" placeholder="Small" />
        </div>
      </section>

      <section className="mt-12">
        <h2 className="mb-6 heading-md">Field</h2>

        <div className="flex max-w-md flex-col gap-8">
          {/* Default */}

          <Field label="Email" helperText="We will never share your email">
            <Input placeholder="Enter your email" />
          </Field>

          {/* Required */}

          <Field label="Username" required>
            <Input placeholder="Username" />
          </Field>

          {/* Filled */}

          <Field label="Full name" helperText="Your public display name">
            <Input defaultValue="Negar Rezaei" />
          </Field>

          {/* Error */}

          <Field
            label="Email"
            error
            errorMessage="Please enter a valid email address"
          >
            <Input placeholder="example@mail.com" error />
          </Field>

          {/* Required + Error */}

          <Field
            label="Password"
            required
            error
            errorMessage="Password is required"
          >
            <Input type="password" error />
          </Field>

          {/* Disabled */}

          <Field label="Disabled field" helperText="This field is disabled">
            <Input placeholder="Disabled" disabled />
          </Field>

          {/* Readonly */}

          <Field
            label="Readonly field"
            helperText="This value cannot be edited"
          >
            <Input defaultValue="Readonly value" readOnly />
          </Field>

          {/* With Left Adornment */}

          <Field label="Search">
            <Input
              placeholder="Search..."
              leftAdornment={<Icon name="warning" size={18} />}
            />
          </Field>

          {/* With Right Adornment */}

          <Field label="Password">
            <Input
              placeholder="Password"
              type="password"
              rightAdornment={<Icon name="warning" size={18} />}
            />
          </Field>
        </div>
      </section>
    </main>
  );
}
