import { useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useDwellStore } from "@/lib/dwell/store";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/_world/create")({
  component: CreatePage,
  head: () => ({ meta: [{ title: "Place a spark · DWELL" }] }),
});

const moods = [
  "threshold",
  "clay",
  "dusk",
  "ember",
  "chlorophyll",
  "ink",
  "starlight",
  "silver",
  "steam",
];

function CreatePage() {
  const addSpark = useDwellStore((s) => s.addSpark);
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [mood, setMood] = useState("threshold");

  return (
    <main className="mx-auto max-w-xl px-4 py-10 sm:px-6">
      <p className="text-xs uppercase tracking-[0.2em] text-terracotta">
        Content with a body
      </p>
      <h1 className="mt-2 font-display text-4xl tracking-tight">Place a spark</h1>
      <p className="mt-3 text-base leading-relaxed text-cream-dim">
        A spark lives in your dwelling. It is not broadcast. People find it by
        visiting you — the way a note is found on a table.
      </p>
      <form
        className="mt-8 grid gap-5"
        onSubmit={(e) => {
          e.preventDefault();
          if (!title.trim() || !body.trim()) return;
          addSpark(title.trim(), body.trim(), mood);
          toast("The spark is on the table.");
          void navigate({ to: "/dwell/$id", params: { id: "you" } });
        }}
      >
        <div className="grid gap-2">
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="The bowl that leaked"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="body">What the room kept</Label>
          <Textarea
            id="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            rows={7}
            placeholder="Write as if someone will sit with this, not skim it."
          />
        </div>
        <fieldset className="grid gap-2">
          <legend className="text-xs font-medium uppercase tracking-[0.16em] text-quiet">
            Mood
          </legend>
          <div className="flex flex-wrap gap-2">
            {moods.map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => setMood(m)}
                className={cn(
                  "h-11 rounded-full px-3 text-sm capitalize",
                  mood === m
                    ? "bg-cream text-ink"
                    : "text-cream-dim shadow-[0_0_0_1px_rgb(244_239_230/0.14)]",
                )}
              >
                {m}
              </button>
            ))}
          </div>
        </fieldset>
        <Button type="submit">Lay it in the room</Button>
      </form>
    </main>
  );
}
