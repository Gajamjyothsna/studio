import { AuthLayout } from "@/components/auth/auth-layout";
import { SignupForm } from "@/components/auth/signup-form";

export default function SignupPage() {
  return (
    <AuthLayout
      title="Create an Account"
      description="Enter your details to get started with Resource Hub"
    >
      <SignupForm />
    </AuthLayout>
  );
}
