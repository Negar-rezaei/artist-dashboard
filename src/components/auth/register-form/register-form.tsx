"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { LinkButton } from "@/components/ui/link-button";
import { Section } from "@/components/ui/section";
import { useToast } from "@/components/ui/toast";

type RegisterValues = {
  Username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

type RegisterField = keyof RegisterValues;

type RegisterErrors = {
  Username?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
};

export function RegisterForm() {
  const router = useRouter();

  const { showToast } = useToast();

  const [loading, setLoading] = useState(false);

  const [values, setValues] = useState<RegisterValues>({
    Username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<RegisterErrors>({});

  function handleChange(field: RegisterField, value: string) {
    setValues((previous) => ({
      ...previous,
      [field]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [field]: undefined,
    }));
  }

  function validate() {
    const newErrors: RegisterErrors = {};

    if (!values.Username.trim()) {
      newErrors.Username = "Name is required";
    }

    if (!values.email.trim()) {
      newErrors.email = "Email is required";
    }

    if (!values.password.trim()) {
      newErrors.password = "Password is required";
    }

    if (!values.confirmPassword.trim()) {
      newErrors.confirmPassword = "Confirm password is required";
    }

    if (
      values.password &&
      values.confirmPassword &&
      values.password !== values.confirmPassword
    ) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!validate()) {
      return;
    }

    setLoading(true);

    try {
      // Register API

      showToast({
        variant: "success",
        title: "Account created successfully.",
        description: "You can now sign in.",
      });

      router.push("/login");
    } catch {
      showToast({
        variant: "error",
        title: "Registration failed.",
        description: "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  }

  const disabled =
    !values.Username ||
    !values.email ||
    !values.password ||
    !values.confirmPassword ||
    loading;

  return (
    <Section title="Create account">
      <form onSubmit={handleSubmit} className="space-y-6">
        <Field
          label="Username"
          required
          error={Boolean(errors.Username)}
          errorMessage={errors.Username}
        >
          <Input
            value={values.Username}
            onChange={(event) => handleChange("Username", event.target.value)}
            error={Boolean(errors.Username)}
            placeholder="Enter your Username"
          />
        </Field>

        <Field
          label="Email"
          required
          error={Boolean(errors.email)}
          errorMessage={errors.email}
        >
          <Input
            type="email"
            value={values.email}
            error={Boolean(errors.email)}
            onChange={(event) => handleChange("email", event.target.value)}
            placeholder="Enter your email"
          />
        </Field>

        <Field
          label="Password"
          required
          error={Boolean(errors.password)}
          errorMessage={errors.password}
        >
          <Input
            type="password"
            value={values.password}
            error={Boolean(errors.password)}
            onChange={(event) => handleChange("password", event.target.value)}
            placeholder="Enter password"
          />
        </Field>

        <Field
          label="Confirm Password"
          required
          error={Boolean(errors.confirmPassword)}
          errorMessage={errors.confirmPassword}
        >
          <Input
            type="password"
            value={values.confirmPassword}
            error={Boolean(errors.confirmPassword)}
            onChange={(event) =>
              handleChange("confirmPassword", event.target.value)
            }
            placeholder="Confirm password"
          />
        </Field>

        <Button
          type="submit"
          loading={loading}
          disabled={disabled}
          className="w-full mb-3"
        >
          Sign up
        </Button>

        <div className="text-center">
          Have an account? <LinkButton href="/login">Sign in</LinkButton>
        </div>
      </form>
    </Section>
  );
}
