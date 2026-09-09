import { useEffect, useState } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { KeyRound, Mail, Sparkles } from "lucide-react";
import { FilmImage } from "@/components/film-image";
import { PersonCard } from "@/components/person-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { neighborhoodById, YOU_ID } from "@/lib/dwell/seed";
import { useDwellStore } from "@/lib/dwell/store";
import {
  KEEPSAKE_META,
  type KeepsakeKind,
} from "@/lib/dwell/types";
import { formatLinger, relativeTime } from "@/lib/utils";
import { toast } from "sonner";

export const Route = createFileRoute("/_world/dwell/$id")({
  component: DwellingPage,
  head: () => ({
    meta: [{ title: "Dwelling · DWELL" }],
  }),
});

function DwellingPage() {
  const { id } = Route.useParams();
  const navigate = useNavigate();
  const person = useDwellStore((s) => s.people.find((p) => p.id === id));
  const sparks = useDwellStore((s) =>
    s.sparks.filter((sp) => sp.dwellingId === id),
  );
  const keepsakes = useDwellStore((s) =>
    s.keepsakes.filter((k) => k.dwellingId === id),
  );
  const people = useDwellStore((s) => s.people);
  const visits = useDwellStore((s) => s.visits);
  const keyring = useDwellStore((s) => s.keyring);
  const linger = useDwellStore((s) => s.linger);
  const keepKey = useDwellStore((s) => s.keepKey);
  const dropKey = useDwellStore((s) => s.dropKey);
  const leaveKeepsake = useDwellStore((s) => s.leaveKeepsake);
  const sendLetter = useDwellStore((s) => s.sendLetter);

  useEffect(() => {
    if (!person) return;
    linger(id, 3);
    const t = window.setInterval(() => linger(id, 3), 3000);
    return () => window.clearInterval(t);
  }, [id, person, linger]);

  if (!person) {
    return (
      <main className="mx-auto max-w-xl px-4 py-20 text-center">
        <h1 className="font-display text-3xl">This room has gone dark.</h1>
        <Button className="mt-6" onClick={() => navigate({ to: "/atlas" })}>
          Return to the atlas
        </Button>
      </main>
    );
  }

  const hood = neighborhoodById(person.neighborhoodId);
  const seconds = visits[id]?.seconds ?? 0;
  const hasKey = keyring.includes(id);
  const isYou = person.id === YOU_ID;
  const neighbors = people.filter(
    (p) => p.neighborhoodId === person.neighborhoodId && p.id !== person.id,
  );

  return (
    <article>
      <header className="relative min-h-[72dvh] overflow-hidden">
        <img
          src={person.portrait}
          alt={`${person.name}, ${person.craft}`}
          className="absolute inset-0 h-full w-full object-cover object-[center_20%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/20" />
        <div className="relative z-10 mx-auto flex min-h-[72dvh] max-w-6xl flex-col justify-end px-4 pb-10 sm:px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-terracotta">
            {person.craft}
            {hood ? ` · ${hood.name}` : ""}
          </p>
          <h1 className="mt-2 font-display text-5xl tracking-tight sm:text-6xl">
            {person.name}
          </h1>
          <p className="mt-3 max-w-xl text-base text-cream-dim">{person.bio}</p>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <Badge variant="terracotta">{formatLinger(seconds)}</Badge>
            <LingerCandle seconds={seconds} />
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div>
          <section aria-labelledby="letter-h">
            <h2 id="letter-h" className="text-xs uppercase tracking-[0.2em] text-quiet">
              Letter to visitors
            </h2>
            <blockquote className="mt-3 max-w-2xl font-display text-2xl leading-snug tracking-tight text-cream">
              {person.letter}
            </blockquote>
          </section>

          {!isYou ? (
            <div className="mt-8 flex flex-wrap gap-2">
              <Button
                variant={hasKey ? "outline" : "default"}
                onClick={() => {
                  if (hasKey) dropKey(id);
                  else {
                    keepKey(id);
                    toast(`You kept a key to ${person.name}'s dwelling.`);
                  }
                }}
              >
                <KeyRound className="size-4" />
                {hasKey ? "Return the key" : "Keep a key"}
              </Button>
              <KeepsakeDialog
                hostName={person.name}
                onLeave={(kind, note) => {
                  leaveKeepsake(id, kind, note);
                  toast("A keepsake sits on the shelf.");
                }}
              />
              <LetterDialog
                hostName={person.name}
                onSend={(body) => {
                  sendLetter(id, body);
                  toast("The letter is travelling. It will arrive shortly.");
                }}
              />
            </div>
          ) : (
            <div className="mt-8 flex flex-wrap gap-2">
              <Button asChild>
                <Link to="/me">Tend this room</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/create">Place a spark</Link>
              </Button>
            </div>
          )}

          <section className="mt-14" aria-labelledby="sparks-h">
            <h2 id="sparks-h" className="font-display text-3xl tracking-tight">
              Sparks
            </h2>
            <p className="mt-2 max-w-xl text-sm text-quiet">
              Not posts. Moments the room wanted to keep.
            </p>
            <ul className="mt-6 grid gap-8">
              {sparks.length === 0 ? (
                <li className="rounded-xl bg-ink-2 p-6 text-sm text-quiet shadow-[0_0_0_1px_rgb(244_239_230/0.1)]">
                  The room is still. Place a spark to give it a pulse.
                </li>
              ) : (
                sparks.map((sp) => (
                  <li key={sp.id} className="grid gap-4 sm:grid-cols-5">
                    {sp.image ? (
                      <FilmImage
                        src={sp.image}
                        alt=""
                        className="aspect-[4/5] rounded-lg sm:col-span-2"
                      />
                    ) : (
                      <div className="hidden rounded-lg bg-ink-2 sm:col-span-2 sm:block" />
                    )}
                    <div className="sm:col-span-3">
                      <p className="text-xs uppercase tracking-[0.16em] text-quiet">
                        {sp.mood} · {relativeTime(sp.createdAt)}
                      </p>
                      <h3 className="mt-2 font-display text-2xl tracking-tight">
                        {sp.title}
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-cream-dim">
                        {sp.body}
                      </p>
                    </div>
                  </li>
                ))
              )}
            </ul>
          </section>

          <section className="mt-14" aria-labelledby="shelf-h">
            <h2 id="shelf-h" className="font-display text-3xl tracking-tight">
              The shelf
            </h2>
            <p className="mt-2 max-w-xl text-sm text-quiet">
              Keepsakes left by visitors. Not likes — objects with a sentence.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {keepsakes.map((k) => {
                const from = people.find((p) => p.id === k.fromId);
                const meta = KEEPSAKE_META[k.kind];
                return (
                  <li
                    key={k.id}
                    className="overflow-hidden rounded-lg bg-ink-2 shadow-[0_0_0_1px_rgb(244_239_230/0.1)]"
                  >
                    <img
                      src={k.image}
                      alt={meta.label}
                      className="aspect-square w-full object-cover"
                    />
                    <div className="p-3">
                      <p className="text-xs uppercase tracking-[0.14em] text-quiet">
                        {meta.label}
                      </p>
                      <p className="mt-1 text-sm leading-snug text-cream">
                        {k.note}
                      </p>
                      <p className="mt-2 text-xs text-quiet">
                        from {from?.name ?? "a visitor"} · {relativeTime(k.createdAt)}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </section>
        </div>

        <aside className="space-y-6 lg:pt-2">
          {hood ? (
            <Link
              to="/neighborhood/$id"
              params={{ id: hood.id }}
              className="block overflow-hidden rounded-xl"
            >
              <img src={hood.cover} alt="" className="aspect-[16/10] w-full object-cover" />
              <div className="bg-ink-2 p-4">
                <p className="text-xs uppercase tracking-[0.16em] text-quiet">
                  Neighborhood
                </p>
                <p className="mt-1 font-display text-xl">{hood.name}</p>
                <p className="mt-1 text-sm text-quiet">{hood.climate}</p>
              </div>
            </Link>
          ) : null}
          {neighbors.length > 0 ? (
            <div>
              <h2 className="text-xs uppercase tracking-[0.16em] text-quiet">
                Along this path
              </h2>
              <ul className="mt-3 grid gap-3">
                {neighbors.map((n) => (
                  <li key={n.id}>
                    <PersonCard person={n} linger={visits[n.id]?.seconds} />
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </aside>
      </div>
    </article>
  );
}

function LingerCandle({ seconds }: { seconds: number }) {
  const height = Math.min(100, 18 + seconds / 2);
  return (
    <span className="inline-flex items-center gap-2 text-xs text-quiet" title="Linger time">
      <span className="relative h-8 w-3 overflow-hidden rounded-full bg-ink-3">
        <span
          className="absolute inset-x-0 bottom-0 bg-terracotta"
          style={{ height: `${height}%` }}
        />
      </span>
      A candle for how long you have sat
    </span>
  );
}

function KeepsakeDialog({
  hostName,
  onLeave,
}: {
  hostName: string;
  onLeave: (kind: KeepsakeKind, note: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const [kind, setKind] = useState<KeepsakeKind>("stone");
  const [note, setNote] = useState("");
  const kinds = Object.keys(KEEPSAKE_META) as KeepsakeKind[];

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Sparkles className="size-4" />
          Leave a keepsake
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>A gift for {hostName}</DialogTitle>
          <DialogDescription>
            Choose an object. Write one sentence. No hearts, no fire emojis —
            just a thing that says you were here.
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-3 gap-2">
          {kinds.map((k) => (
            <button
              key={k}
              type="button"
              onClick={() => setKind(k)}
              className={`overflow-hidden rounded-md text-left shadow-[0_0_0_1px_rgb(244_239_230/0.12)] ${
                kind === k ? "ring-2 ring-terracotta" : ""
              }`}
            >
              <img src={KEEPSAKE_META[k].image} alt="" className="aspect-square w-full object-cover" />
              <span className="block px-2 py-1.5 text-[11px] uppercase tracking-[0.12em] text-quiet">
                {KEEPSAKE_META[k].label}
              </span>
            </button>
          ))}
        </div>
        <p className="text-sm text-cream-dim">{KEEPSAKE_META[kind].meaning}</p>
        <div className="grid gap-2">
          <Label htmlFor="keep-note">Your sentence</Label>
          <Textarea
            id="keep-note"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="I stayed long enough to grow quiet."
          />
        </div>
        <Button
          onClick={() => {
            if (!note.trim()) return;
            onLeave(kind, note.trim());
            setNote("");
            setOpen(false);
          }}
        >
          Place it on the shelf
        </Button>
      </DialogContent>
    </Dialog>
  );
}

function LetterDialog({
  hostName,
  onSend,
}: {
  hostName: string;
  onSend: (body: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const [body, setBody] = useState("");
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost">
          <Mail className="size-4" />
          Write a letter
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>To {hostName}</DialogTitle>
          <DialogDescription>
            Letters travel. They do not ping. Yours will arrive in a little
            while — enough time to mean it.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-2">
          <Label htmlFor="letter-body">The letter</Label>
          <Textarea
            id="letter-body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            rows={6}
            placeholder="I sat in your room until the light changed…"
          />
        </div>
        <Button
          onClick={() => {
            if (!body.trim()) return;
            onSend(body.trim());
            setBody("");
            setOpen(false);
          }}
        >
          Send into travel
        </Button>
      </DialogContent>
    </Dialog>
  );
}
