import { AuthLayout } from "@/components/auth/auth-layout";
import { ResetPasswordForm } from "@/components/auth/reset-password-form";

export default function ResetPasswordPage() {
  return (
    <AuthLayout
      title="Reset Your Password"
      description="Enter the OTP from your email and your new password."
    >
      <ResetPasswordForm />
    </AuthLayout>
  );
}
