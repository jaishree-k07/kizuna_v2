import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PersonCard } from "@/components/person-card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { hearths, neighborhoods, YOU_ID } from "@/lib/dwell/seed";
import { nearbyIds, resonanceScore } from "@/lib/dwell/resonance";
import { useDwellStore } from "@/lib/dwell/store";
import { relativeTime } from "@/lib/utils";
import { Link } from "@tanstack/react-router";
import { Badge } from "@/components/ui/badge";
import { hearthStatus } from "@/lib/dwell/seed";

export const Route = createFileRoute("/_world/discover")({
  component: DiscoverPage,
  head: () => ({ meta: [{ title: "Discover · DWELL" }] }),
});

function DiscoverPage() {
  const state = useDwellStore();
  const [q, setQ] = useState("");
  const query = q.trim().toLowerCase();

  const ranked = useMemo(() => {
    return state.people
      .filter((p) => !p.isYou)
      .map((p) => ({ person: p, score: resonanceScore(p.id, state) }))
      .sort((a, b) => b.score - a.score);
  }, [state]);

  const filteredPeople = ranked.filter(({ person }) => {
    if (!query) return true;
    const hood = neighborhoods.find((n) => n.id === person.neighborhoodId);
    return [person.name, person.craft, person.bio, person.mood, hood?.name]
      .join(" ")
      .toLowerCase()
      .includes(query);
  });

  const sparkHits = state.sparks.filter((sp) => {
    if (!query) return sp.dwellingId !== YOU_ID;
    return (
      sp.dwellingId !== YOU_ID &&
      `${sp.title} ${sp.body} ${sp.mood}`.toLowerCase().includes(query)
    );
  });

  const near = nearbyIds(state, 3);

  return (
    <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
      <header className="max-w-2xl">
        <p className="text-xs uppercase tracking-[0.2em] text-terracotta">
          Resonance
        </p>
        <h1 className="mt-2 font-display text-4xl tracking-tight sm:text-5xl">
          Discover
        </h1>
        <p className="mt-3 text-base leading-relaxed text-cream-dim">
          Not an algorithm of virality. Rooms rise here because you lingered,
          left a key, shared a neighborhood, or wrote.
        </p>
      </header>

      <div className="mt-8 max-w-lg">
        <Label htmlFor="search">Search dwellings, crafts, sparks</Label>
        <Input
          id="search"
          className="mt-2"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="clay, night baker, meadow…"
          type="search"
        />
      </div>

      {!query && near.length > 0 ? (
        <section className="mt-10" aria-labelledby="near-h">
          <h2 id="near-h" className="font-display text-2xl tracking-tight">
            Near you
          </h2>
          <ul className="mt-4 grid gap-4 sm:grid-cols-3">
            {near.map((id) => {
              const p = state.people.find((x) => x.id === id);
              if (!p) return null;
              return (
                <li key={id}>
                  <PersonCard person={p} linger={state.visits[id]?.seconds} />
                </li>
              );
            })}
          </ul>
        </section>
      ) : null}

      <Tabs defaultValue="people" className="mt-10">
        <TabsList aria-label="Discovery views">
          <TabsTrigger value="people">Dwellings</TabsTrigger>
          <TabsTrigger value="sparks">Sparks</TabsTrigger>
          <TabsTrigger value="hearths">Hearths</TabsTrigger>
        </TabsList>
        <TabsContent value="people">
          {filteredPeople.length === 0 ? (
            <Empty query={query} />
          ) : (
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filteredPeople.map(({ person, score }) => (
                <li key={person.id}>
                  <PersonCard
                    person={person}
                    linger={state.visits[person.id]?.seconds}
                  />
                  <p className="sr-only">Resonance {Math.round(score)}</p>
                </li>
              ))}
            </ul>
          )}
        </TabsContent>
        <TabsContent value="sparks">
          {sparkHits.length === 0 ? (
            <Empty query={query} />
          ) : (
            <ul className="grid gap-6">
              {sparkHits.map((sp) => {
                const host = state.people.find((p) => p.id === sp.dwellingId);
                return (
                  <li key={sp.id}>
                    <Link
                      to="/dwell/$id"
                      params={{ id: sp.dwellingId }}
                      className="grid gap-4 rounded-xl bg-ink-2 p-3 shadow-[0_0_0_1px_rgb(244_239_230/0.1)] sm:grid-cols-5"
                    >
                      {sp.image ? (
                        <img
                          src={sp.image}
                          alt=""
                          className="aspect-[4/5] w-full rounded-lg object-cover sm:col-span-2"
                        />
                      ) : null}
                      <div className="p-2 sm:col-span-3">
                        <p className="text-xs uppercase tracking-[0.16em] text-quiet">
                          {host?.name} · {relativeTime(sp.createdAt)}
                        </p>
                        <h3 className="mt-2 font-display text-2xl">{sp.title}</h3>
                        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-cream-dim">
                          {sp.body}
                        </p>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </TabsContent>
        <TabsContent value="hearths">
          <ul className="grid gap-4 sm:grid-cols-2">
            {hearths
              .filter((h) =>
                query
                  ? `${h.title} ${h.prompt}`.toLowerCase().includes(query)
                  : true,
              )
              .map((h) => {
                const status = hearthStatus(h);
                return (
                  <li key={h.id}>
                    <Link
                      to="/hearth/$id"
                      params={{ id: h.id }}
                      className="block overflow-hidden rounded-xl bg-ink-2 shadow-[0_0_0_1px_rgb(244_239_230/0.1)]"
                    >
                      <img
                        src={h.cover}
                        alt=""
                        className="aspect-[16/9] w-full object-cover"
                      />
                      <div className="p-4">
                        <Badge
                          variant={status === "live" ? "live" : "default"}
                        >
                          {status === "live"
                            ? "Lit now"
                            : status === "soon"
                              ? "Soon"
                              : "Embers"}
                        </Badge>
                        <h3 className="mt-2 font-display text-2xl">{h.title}</h3>
                        <p className="mt-2 line-clamp-2 text-sm text-cream-dim">
                          {h.prompt}
                        </p>
                      </div>
                    </Link>
                  </li>
                );
              })}
          </ul>
        </TabsContent>
      </Tabs>
    </main>
  );
}

function Empty({ query }: { query: string }) {
  return (
    <p className="rounded-xl bg-ink-2 p-6 text-sm text-quiet shadow-[0_0_0_1px_rgb(244_239_230/0.1)]">
      {query
        ? `Nothing on the peninsula answers to “${query}”. Try a craft, a mood, or a name.`
        : "The atlas is still waking."}
    </p>
  );
}
