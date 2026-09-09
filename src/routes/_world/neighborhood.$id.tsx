import { createFileRoute, Link } from "@tanstack/react-router";
import { PersonCard } from "@/components/person-card";
import { hearths, hearthStatus, neighborhoods } from "@/lib/dwell/seed";
import { useDwellStore } from "@/lib/dwell/store";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/_world/neighborhood/$id")({
  component: NeighborhoodPage,
  head: () => ({ meta: [{ title: "Neighborhood · DWELL" }] }),
});

function NeighborhoodPage() {
  const { id } = Route.useParams();
  const hood = neighborhoods.find((n) => n.id === id);
  const people = useDwellStore((s) =>
    s.people.filter((p) => p.neighborhoodId === id),
  );
  const visits = useDwellStore((s) => s.visits);
  const localHearths = hearths.filter((h) => h.neighborhoodId === id);

  if (!hood) {
    return (
      <main className="mx-auto max-w-xl px-4 py-20 text-center">
        <h1 className="font-display text-3xl">This climate has moved on.</h1>
        <Button className="mt-6" asChild>
          <Link to="/atlas">Back to the atlas</Link>
        </Button>
      </main>
    );
  }

  return (
    <main>
      <header className="relative min-h-[46dvh] overflow-hidden">
        <img
          src={hood.cover}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-ink/20" />
        <div className="relative z-10 mx-auto flex min-h-[46dvh] max-w-6xl flex-col justify-end px-4 pb-10 sm:px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-terracotta">
            {hood.climate}
          </p>
          <h1 className="mt-2 font-display text-5xl tracking-tight">{hood.name}</h1>
          <p className="mt-2 font-display text-xl italic text-cream-dim">
            {hood.epithet}
          </p>
        </div>
      </header>
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <p className="max-w-2xl text-base leading-relaxed text-cream-dim">
          {hood.description}
        </p>
        <section className="mt-12" aria-labelledby="res-h">
          <h2 id="res-h" className="font-display text-3xl tracking-tight">
            Residents
          </h2>
          <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {people.map((p) => (
              <li key={p.id}>
                <PersonCard person={p} linger={visits[p.id]?.seconds} />
              </li>
            ))}
          </ul>
        </section>
        {localHearths.length > 0 ? (
          <section className="mt-12" aria-labelledby="h-h">
            <h2 id="h-h" className="font-display text-3xl tracking-tight">
              Local hearths
            </h2>
            <ul className="mt-5 grid gap-4 sm:grid-cols-2">
              {localHearths.map((h) => (
                <li key={h.id}>
                  <Link
                    to="/hearth/$id"
                    params={{ id: h.id }}
                    className="block overflow-hidden rounded-xl bg-ink-2 shadow-[0_0_0_1px_rgb(244_239_230/0.1)]"
                  >
                    <img src={h.cover} alt="" className="aspect-[16/9] w-full object-cover" />
                    <div className="p-4">
                      <Badge variant={hearthStatus(h) === "live" ? "live" : "default"}>
                        {hearthStatus(h) === "live" ? "Lit now" : hearthStatus(h)}
                      </Badge>
                      <h3 className="mt-2 font-display text-xl">{h.title}</h3>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </div>
    </main>
  );
}
