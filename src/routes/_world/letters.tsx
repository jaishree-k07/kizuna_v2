import { createFileRoute, Link } from "@tanstack/react-router";
import { YOU_ID } from "@/lib/dwell/seed";
import { useDwellStore } from "@/lib/dwell/store";
import { relativeTime } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

export const Route = createFileRoute("/_world/letters")({
  component: LettersPage,
  head: () => ({ meta: [{ title: "Letters · DWELL" }] }),
});

function LettersPage() {
  const letters = useDwellStore((s) => s.letters);
  const people = useDwellStore((s) => s.people);
  const markRead = useDwellStore((s) => s.markLetterRead);
  const now = Date.now();

  const inbox = letters.filter(
    (l) => l.toId === YOU_ID && l.arrivesAt <= now,
  );
  const travelling = letters.filter(
    (l) => l.fromId === YOU_ID && l.arrivesAt > now,
  );
  const sent = letters.filter(
    (l) => l.fromId === YOU_ID && l.arrivesAt <= now,
  );

  return (
    <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-10">
      <header>
        <p className="text-xs uppercase tracking-[0.2em] text-terracotta">
          Slow mail
        </p>
        <h1 className="mt-2 font-display text-4xl tracking-tight sm:text-5xl">
          Letters
        </h1>
        <p className="mt-3 text-base leading-relaxed text-cream-dim">
          No chat. A letter spends a little time on the path so that sending it
          costs something. Open one only when you can answer with the same care.
        </p>
      </header>

      <Tabs defaultValue="inbox" className="mt-8">
        <TabsList>
          <TabsTrigger value="inbox">
            Inbox
            {inbox.filter((l) => !l.read).length > 0
              ? ` (${inbox.filter((l) => !l.read).length})`
              : ""}
          </TabsTrigger>
          <TabsTrigger value="travelling">Travelling</TabsTrigger>
          <TabsTrigger value="sent">Arrived</TabsTrigger>
        </TabsList>
        <TabsContent value="inbox">
          {inbox.length === 0 ? (
            <Empty text="The table is empty. Visit a dwelling and write first." />
          ) : (
            <ul className="grid gap-3">
              {inbox.map((l) => {
                const from = people.find((p) => p.id === l.fromId);
                return (
                  <li key={l.id}>
                    <article className="rounded-xl bg-ink-2 p-5 shadow-[0_0_0_1px_rgb(244_239_230/0.1)]">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-xs uppercase tracking-[0.16em] text-quiet">
                            From{" "}
                            {from ? (
                              <Link
                                to="/dwell/$id"
                                params={{ id: from.id }}
                                className="text-cream"
                              >
                                {from.name}
                              </Link>
                            ) : (
                              "someone"
                            )}{" "}
                            · {relativeTime(l.arrivesAt)}
                          </p>
                          {!l.read ? (
                            <Badge variant="terracotta" className="mt-2">
                              Unopened
                            </Badge>
                          ) : null}
                        </div>
                        {from ? (
                          <Link to="/dwell/$id" params={{ id: from.id }}>
                            <img
                              src={from.portrait}
                              alt=""
                              className="size-11 rounded-full object-cover"
                            />
                          </Link>
                        ) : null}
                      </div>
                      <p className="mt-4 font-display text-xl leading-snug">
                        {l.body}
                      </p>
                      {!l.read ? (
                        <button
                          type="button"
                          className="mt-4 text-sm text-terracotta hover:underline"
                          onClick={() => markRead(l.id)}
                        >
                          Mark as read
                        </button>
                      ) : null}
                    </article>
                  </li>
                );
              })}
            </ul>
          )}
        </TabsContent>
        <TabsContent value="travelling">
          {travelling.length === 0 ? (
            <Empty text="Nothing is on the path. Write from inside a dwelling." />
          ) : (
            <ul className="grid gap-3">
              {travelling.map((l) => {
                const to = people.find((p) => p.id === l.toId);
                const wait = Math.max(0, Math.ceil((l.arrivesAt - now) / 1000));
                return (
                  <li
                    key={l.id}
                    className="rounded-xl bg-ink-2 p-5 text-sm shadow-[0_0_0_1px_rgb(244_239_230/0.1)]"
                  >
                    <p className="text-xs uppercase tracking-[0.16em] text-quiet">
                      To {to?.name} · arrives in {wait}s
                    </p>
                    <p className="mt-3 font-display text-lg">{l.body}</p>
                  </li>
                );
              })}
            </ul>
          )}
        </TabsContent>
        <TabsContent value="sent">
          {sent.length === 0 ? (
            <Empty text="No letters have arrived yet." />
          ) : (
            <ul className="grid gap-3">
              {sent.map((l) => {
                const to = people.find((p) => p.id === l.toId);
                return (
                  <li
                    key={l.id}
                    className="rounded-xl bg-ink-2 p-5 shadow-[0_0_0_1px_rgb(244_239_230/0.1)]"
                  >
                    <p className="text-xs uppercase tracking-[0.16em] text-quiet">
                      To {to?.name} · {relativeTime(l.arrivesAt)}
                    </p>
                    <p className="mt-3 font-display text-lg">{l.body}</p>
                  </li>
                );
              })}
            </ul>
          )}
        </TabsContent>
      </Tabs>
    </main>
  );
}

function Empty({ text }: { text: string }) {
  return (
    <p className="rounded-xl bg-ink-2 p-6 text-sm text-quiet shadow-[0_0_0_1px_rgb(244_239_230/0.1)]">
      {text}
    </p>
  );
}
