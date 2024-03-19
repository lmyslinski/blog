import { Github } from "lucide-react";
import { Button } from "./ui/button";

export function GithubIcon() {
  return (
    <a
      href="https://github.com/lmyslinski/json-formatter"
      target="_blank"
      rel="noreferrer"
    >
      <Button variant="ghost" size="icon">
        <Github />
      </Button>
    </a>
  );
}
