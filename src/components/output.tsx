import { useEffect } from "react";
import { useZustand } from "./zustand";
import hljs from "highlight.js/lib/core";
import json from "highlight.js/lib/languages/json";
// import "highlight.js/styles/grayscale.min.css";
import { Copy } from "lucide-react";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";

// Then register the languages you need
hljs.registerLanguage("json", json);

export default function Output() {
  const { json, error } = useZustand();
  const { toast } = useToast();

  useEffect(() => {
    hljs.highlightAll();
  }, [json]);

  const highlightedCode = () => {
    if (json) {
      const str = JSON.stringify(json, null, 2);
      return str;
    } else {
      return "";
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(JSON.stringify(json, null, 2));
    toast({
      description: "Copied to clipboard.",
    });
  };

  const lineCount =
    (JSON.stringify(json, null, 2).match(/\n/g) || "").length + 1;

  return (
    <div className="flex-col items-center justify-center px-8 mt-8 grow max-w-7xl w-full mb-8">
      <div className="flex-col space-y-4">
        <div className="flex justify-between">
          <small className="flex text-sm font-medium leading-none">
            Output
          </small>
          <small className="flex text-sm font-medium leading-none">
            {error}
          </small>
        </div>

        {json && (
          <pre className="border rounded-md border-input mt-3 relative">
            {" "}
            <div className="flex justify-end absolute top-2 right-2">
              {" "}
              <Button
                onClick={() => copyToClipboard()}
                variant="ghost"
                className="text-muted-foreground"
                size="icon"
              >
                <Copy />
              </Button>
            </div>
            <code className="language-json text-muted-foreground text-sm -mt-2 block px-4 text-wrap pb-4">
              {highlightedCode()}
            </code>
          </pre>
        )}
        {json && lineCount > 40 && (
          <a
            href="#"
            className="text-muted-foreground text-sm justify-self-end"
          >
            <span>Back to top</span>
          </a>
        )}
      </div>
    </div>
  );
}
