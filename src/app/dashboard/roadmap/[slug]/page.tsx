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
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BookCopy, User, LogOut, ArrowLeft, FileText } from "lucide-react";
import { roadmaps } from "@/lib/roadmaps";
import { notFound } from "next/navigation";

// 👇 Add this function
export async function generateStaticParams() {
  return roadmaps.map((roadmap) => ({
    slug: roadmap.slug,
  }));
}

export default function RoadmapPage({ params }: { params: { slug: string } }) {
  const roadmap = roadmaps.find((r) => r.slug === params.slug);

  if (!roadmap) {
    notFound();
  }

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
        <div className="mb-6">
          <Button asChild variant="ghost">
            <Link href="/dashboard">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Dashboard
            </Link>
          </Button>
        </div>
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-3xl">{roadmap.title}</CardTitle>
            <CardDescription>{roadmap.description}</CardDescription>
          </CardHeader>
        </Card>
        <div className="grid gap-4">
          <h2 className="text-2xl font-bold">Documents</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {roadmap.documents.map((doc) => (
              <Card key={doc.title}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <FileText className="h-8 w-8 text-primary" />
                    <div>
                      <h3 className="font-semibold">{doc.title}</h3>
                      <Button asChild variant="link" className="p-0 h-auto">
                        <Link href={doc.link} target="_blank">
                          Open Document
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
