import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { hearths, hearthStatus, YOU_ID } from "@/lib/dwell/seed";
import { useDwellStore } from "@/lib/dwell/store";
import { relativeTime } from "@/lib/utils";

export const Route = createFileRoute("/_world/hearth/$id")({
  component: HearthPage,
  head: () => ({ meta: [{ title: "Hearth · DWELL" }] }),
});

function HearthPage() {
  const { id } = Route.useParams();
  const hearth = hearths.find((h) => h.id === id);
  const people = useDwellStore((s) => s.people);
  const embers = useDwellStore((s) => s.embers.filter((e) => e.hearthId === id));
  const joined = useDwellStore((s) => s.hearthsJoined.includes(id));
  const joinHearth = useDwellStore((s) => s.joinHearth);
  const leaveHearth = useDwellStore((s) => s.leaveHearth);
  const addEmber = useDwellStore((s) => s.addEmber);
  const [body, setBody] = useState("");

  if (!hearth) {
    return (
      <main className="mx-auto max-w-xl px-4 py-20 text-center">
        <h1 className="font-display text-3xl">This fire has gone out.</h1>
        <Button className="mt-6" asChild>
          <Link to="/gather">Other hearths</Link>
        </Button>
      </main>
    );
  }

  const status = hearthStatus(hearth);
  const host = people.find((p) => p.id === hearth.hostId);
  const seatedIds = joined
    ? [...new Set([...hearth.seated, YOU_ID])]
    : hearth.seated;

  return (
    <main>
      <header className="relative min-h-[48dvh] overflow-hidden">
        <img
          src={hearth.cover}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/25" />
        <div className="relative z-10 mx-auto flex min-h-[48dvh] max-w-3xl flex-col justify-end px-4 pb-10 sm:px-6">
          <Badge variant={status === "live" ? "live" : "cream"}>
            {status === "live" ? "The fire is lit" : status === "soon" ? "Gathering soon" : "Embers remain"}
          </Badge>
          <h1 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">
            {hearth.title}
          </h1>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-cream-dim">
            {hearth.prompt}
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-quiet">
              Hosted by{" "}
              <Link
                to="/dwell/$id"
                params={{ id: hearth.hostId }}
                className="text-cream underline-offset-4 hover:underline"
              >
                {host?.name}
              </Link>
            </p>
            <ul className="mt-3 flex -space-x-2" aria-label="Seated">
              {seatedIds.map((sid) => {
                const p = people.find((x) => x.id === sid);
                if (!p) return null;
                return (
                  <li key={sid}>
                    <Link to="/dwell/$id" params={{ id: sid }} title={p.name}>
                      <img
                        src={p.portrait}
                        alt={p.name}
                        className="size-10 rounded-full object-cover shadow-[0_0_0_2px_var(--color-ink)]"
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <Button
            variant={joined ? "outline" : "default"}
            onClick={() => {
              if (joined) leaveHearth(id);
              else {
                joinHearth(id);
                toast("You pulled up a chair.");
              }
            }}
          >
            {joined ? "Leave the circle" : "Sit down"}
          </Button>
        </div>

        <section className="mt-10" aria-labelledby="embers-h">
          <h2 id="embers-h" className="font-display text-2xl tracking-tight">
            Embers
          </h2>
          <ol className="mt-5 grid gap-4">
            {embers.map((e) => {
              const from = people.find((p) => p.id === e.fromId);
              return (
                <li
                  key={e.id}
                  className="flex gap-3 rounded-xl bg-ink-2 p-4 shadow-[0_0_0_1px_rgb(244_239_230/0.1)]"
                >
                  {from ? (
                    <Link
                      to="/dwell/$id"
                      params={{ id: from.id }}
                      className="shrink-0"
                    >
                      <img
                        src={from.portrait}
                        alt={from.name}
                        className="size-11 rounded-full object-cover"
                      />
                    </Link>
                  ) : null}
                  <div>
                    <p className="text-xs text-quiet">
                      {from?.name} · {relativeTime(e.createdAt)}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-cream">
                      {e.body}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </section>

        {joined ? (
          <form
            className="mt-8 grid gap-3"
            onSubmit={(ev) => {
              ev.preventDefault();
              if (!body.trim()) return;
              addEmber(id, body.trim());
              setBody("");
              toast("Your ember catches.");
            }}
          >
            <Label htmlFor="ember">Add an ember</Label>
            <Textarea
              id="ember"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              placeholder="A sentence for the fire…"
            />
            <Button type="submit" className="justify-self-start">
              Lay it on the coals
            </Button>
          </form>
        ) : (
          <p className="mt-8 text-sm text-quiet">
            Sit down to speak. Presence first, then voice.
          </p>
        )}
      </div>
    </main>
  );
}
