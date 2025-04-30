import { ThemeToggle } from "@/components/theme-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { siAnilist, siX } from "simple-icons";

export default function SocialLinks() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4 transition-colors duration-300">
      <div className="absolute right-4 top-4 z-10">
        <ThemeToggle />
      </div>
      <Card className="w-full max-w-md border-border bg-card text-card-foreground">
        <CardHeader className="items-center text-center">
          <Avatar className="h-24 w-24 border border-border">
            <AvatarImage
              src="https://pbs.twimg.com/profile_images/1567992162381447170/Ug_PoojZ_400x400.jpg"
              alt="Profile"
            />
            <AvatarFallback>NatsuDzn</AvatarFallback>
          </Avatar>
          <CardTitle className="mt-4 text-2xl">NatsuDzn</CardTitle>
          <CardDescription>manga enthusiastic.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <Button
            asChild
            variant="outline"
            className="h-12 justify-start gap-2"
          >
            <a
              href="https://x.com/NatsuDzn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                role="img"
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="currentColor"
              >
                <path d={siX.path} />
              </svg>
              Twitter
            </a>
          </Button>

          <Button
            asChild
            variant="outline"
            className="h-12 justify-start gap-2"
          >
            <a
              href="https://anilist.co/user/NatsuDzn/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                role="img"
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill={`#${siAnilist.hex}`}
              >
                <path d={siAnilist.path} />
              </svg>
              AniList
            </a>
          </Button>

          <Button
            asChild
            variant="outline"
            className="h-12 justify-start gap-2"
          >
            <a
              href="https://www.mangacollec.com/user/natsudzn/collection"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./mangacollec.svg" className="h-5 w-5" />
              Mangacollec
            </a>
          </Button>

          <Button
            asChild
            variant="outline"
            className="h-12 justify-start gap-2"
          >
            <a
              href="https://letterboxd.com/NatsuDzn/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./letterboxd.svg" className="h-5 w-5" />
              Letterboxd
            </a>
          </Button>
        </CardContent>
      </Card>
      <p className="mt-8 text-center text-sm text-muted-foreground">
        Lisez Yotsuba !
      </p>
    </div>
  );
}
