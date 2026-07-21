import { LoginForm } from "@/components/auth/login-form";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center 2xl:w-1/4 xl:w-1/3 sm:w-1/2 w-3/4">
      <div className="w-full ">
        <LoginForm />
      </div>
    </main>
  );
}
