import { AuthLayout } from "@/components/auth/auth-layout";
import { ForgotPasswordForm } from "@/components/auth/forgot-password-form";

export default function ForgotPasswordPage() {
  return (
    <AuthLayout
      title="Forgot Your Password?"
      description="No worries! Enter your email and we'll send you a reset code."
    >
      <ForgotPasswordForm />
    </AuthLayout>
  );
}
