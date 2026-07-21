"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Section } from "@/components/ui/section";
import { useToast } from "@/components/ui/toast";

import { LinkButton } from "@/components/ui/link-button";
import { useLogin } from "@/hooks/useLogin";

type LoginValues = {
  username: string;
  password: string;
};

type LoginField = keyof LoginValues;

type LoginErrors = {
  username?: string;
  password?: string;
};

export function LoginForm() {
  const { login, loading } = useLogin();

  const { showToast } = useToast();

  const [values, setValues] = useState<LoginValues>({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState<LoginErrors>({});

  function handleChange(field: LoginField, value: string) {
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
    const newErrors: LoginErrors = {};

    if (!values.username.trim()) {
      newErrors.username = "Username is required";
    }

    if (!values.password.trim()) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!validate()) {
      return;
    }

    try {
      const user = await login({
        username: values.username,
        password: values.password,
        expiresInMins: 30,
      });

      console.log(user);

      showToast({
        variant: "success",
        description: "Login successful.",
        title: "Welcome back!",
      });

      // redirect dashboard
    } catch {
      showToast({
        variant: "error",
        title: "Sign-in Failed!",
        description: "Username and/or Password is invalid",
      });
    }
  }

  const isSubmitDisabled =
    !values.username.trim() || !values.password.trim() || loading;

  return (
    <Section title="Sign in">
      <form onSubmit={handleSubmit} className="space-y-6">
        <Field
          label="Username"
          required
          error={Boolean(errors.username)}
          errorMessage={errors.username}
        >
          <Input
            name="username"
            autoComplete="username"
            error={Boolean(errors.username)}
            value={values.username}
            onChange={(event) => handleChange("username", event.target.value)}
            placeholder="Enter username"
          />
        </Field>

        <Field
          label="Password"
          required
          error={Boolean(errors.password)}
          errorMessage={errors.password}
        >
          <Input
            name="password"
            type="password"
            autoComplete="current-password"
            error={Boolean(errors.password)}
            value={values.password}
            onChange={(event) => handleChange("password", event.target.value)}
            placeholder="Enter password"
          />
        </Field>

        <Button
          type="submit"
          loading={loading}
          disabled={isSubmitDisabled}
          className="w-full mb-3"
        >
          Sign in
        </Button>

        <div className="text-center">
          Have an account? <LinkButton href="/register">Sign up</LinkButton>
        </div>
      </form>
    </Section>
  );
}
