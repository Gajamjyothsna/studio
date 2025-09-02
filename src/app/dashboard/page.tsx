import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookCopy, User, LogOut } from "lucide-react";

export default function DashboardPage() {
  const roadmaps = [
    {
      title: "Full Stack Developer Roadmap",
      description: "A comprehensive guide to becoming a full stack developer.",
      link: "#",
    },
    {
      title: "Java Developer Roadmap",
      description: "Your path to becoming a proficient Java developer.",
      link: "#",
    },
  ];

  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <header className="sticky top-0 z-10 flex h-16 items-center justify-between gap-4 border-b bg-background px-4 md:px-6">
        <div className="flex items-center gap-4">
          <BookCopy className="h-6 w-6 text-primary" />
          <h1 className="text-2xl font-bold tracking-tight text-primary">
            Resources Hub
          </h1>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="rounded-full">
              <Avatar className="h-8 w-8">
                <AvatarImage
                  src="https://picsum.photos/32/32"
                  alt="@user"
                  data-ai-hint="person"
                />
                <AvatarFallback>
                  <User />
                </AvatarFallback>
              </Avatar>
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/" className="flex w-full items-center">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>
      <main className="flex-1 p-4 md:p-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {roadmaps.map((roadmap) => (
            <Link
              key={roadmap.title}
              href={roadmap.link}
              className="block rounded-lg border bg-card text-card-foreground shadow-sm transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <Card className="h-full border-0">
                <CardHeader>
                  <CardTitle>{roadmap.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {roadmap.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}