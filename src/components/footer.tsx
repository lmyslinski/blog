import { Twitter } from "lucide-react";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

export default function Footer() {
  return (
    <div className="w-full border-t py-2 px-8 flex mt-auto justify-center">
      <div className="flex justify-center w-full max-w-7xl px-8">
        <div className="flex items-center space-x-4">
          <a href="https://lmyslinski.com">
            <h3 className="scroll-m-20 tracking-tight text-sm text-muted-foreground">
              Blog
            </h3>
          </a>

          <Separator orientation="vertical" />
          <a href="https://lmyslinski.com/about">
            <h3 className="scroll-m-20 tracking-tight text-sm text-muted-foreground">
              About
            </h3>
          </a>
          <Separator orientation="vertical" />
          <a
            href="https://twitter.com/lukmyslinski"
            target="_blank"
            rel="noreferrer"
          >
            <Button
              className="text-muted-foreground"
              variant="ghost"
              size="icon"
            >
              <Twitter />
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
