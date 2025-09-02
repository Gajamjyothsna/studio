import type { ReactNode } from "react";
import { BookCopy } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type AuthLayoutProps = {
  title: string;
  description: string;
  children: ReactNode;
};

export function AuthLayout({ title, description, children }: AuthLayoutProps) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background p-4">
      <div className="w-full max-w-md">
        <Card className="shadow-lg">
          <CardHeader className="items-center text-center">
            <div className="mb-4 flex justify-center">
              <div className="rounded-full bg-primary p-3 text-primary-foreground">
                <BookCopy className="h-8 w-8" />
              </div>
            </div>
            <CardTitle className="text-3xl font-bold tracking-tight text-primary">
              Resource Hub
            </CardTitle>
            <CardDescription className="pt-2 text-base">{description}</CardDescription>
          </CardHeader>
          <CardContent>{children}</CardContent>
        </Card>
      </div>
    </main>
  );
}
