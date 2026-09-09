import { createFileRoute, Link } from "@tanstack/react-router";
import { AtlasMap } from "@/components/atlas/atlas-map";
import { useDwellStore } from "@/lib/dwell/store";
import { neighborhoods } from "@/lib/dwell/seed";

export const Route = createFileRoute("/_world/atlas")({
  component: AtlasPage,
  head: () => ({ meta: [{ title: "Atlas · DWELL" }] }),
});

function AtlasPage() {
  const people = useDwellStore((s) => s.people);
  const visits = useDwellStore((s) => s.visits);

  return (
    <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
      <header className="stagger-in mb-8 max-w-2xl">
        <p className="text-xs uppercase tracking-[0.2em] text-terracotta">
          The peninsula
        </p>
        <h1 className="mt-2 font-display text-4xl tracking-tight sm:text-5xl">
          Atlas
        </h1>
        <p className="mt-3 text-base leading-relaxed text-cream-dim">
          A living map of dwellings. There is no feed. Wander, knock, sit.
          Neighborhoods keep their own weather.
        </p>
      </header>
      <AtlasMap people={people} visits={visits} />
      <section className="mt-12" aria-labelledby="hoods-heading">
        <h2 id="hoods-heading" className="font-display text-2xl tracking-tight">
          Neighborhoods
        </h2>
        <ul className="mt-5 grid gap-4 sm:grid-cols-2">
          {neighborhoods.map((n) => (
            <li key={n.id}>
              <Link
                to="/neighborhood/$id"
                params={{ id: n.id }}
                className="group relative block overflow-hidden rounded-xl"
              >
                <img
                  src={n.cover}
                  alt=""
                  className="aspect-[16/9] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <p className="text-xs uppercase tracking-[0.16em] text-cream/70">
                    {n.climate}
                  </p>
                  <h3 className="font-display text-2xl">{n.name}</h3>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
