import { LoginForm } from "@/components/auth/login-form";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center w-1/4">
      <div className="w-full ">
        <LoginForm />
      </div>
    </main>
  );
}
