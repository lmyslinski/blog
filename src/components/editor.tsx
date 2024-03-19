import { Textarea } from "./ui/textarea";
import { useZustand as useZustand } from "./zustand";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export default function Editor() {
  const { input, setInput, autoFix, setAutoFix } = useZustand();

  return (
    <div className="flex flex-col items-center justify-center space-y-4 mt-8 xl:mt-16 px-8 max-w-7xl w-full">
      <div className="flex-col w-full space-y-4">
        <div className="flex justify-between">
          <small className="flex text-sm font-medium leading-none">
            Paste your json here
          </small>
          <div className="flex items-center space-x-2">
            <Switch
              checked={autoFix}
              onCheckedChange={(val) => {
                setAutoFix(val);
                setInput(input, val);
              }}
              id="autofix"
            />
            <Label htmlFor="autofix">Autofix</Label>
          </div>
        </div>

        <Textarea
          autoFocus={true}
          value={input}
          onChange={(e) => setInput(e.target.value, autoFix)}
          placeholder="Json input"
          id="message"
          className="h-80 text-muted-foreground"
        />
      </div>
    </div>
  );
}
