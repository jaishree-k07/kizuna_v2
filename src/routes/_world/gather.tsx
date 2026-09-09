import { createFileRoute, Link } from "@tanstack/react-router";
import { Badge } from "@/components/ui/badge";
import { hearths, hearthStatus, people } from "@/lib/dwell/seed";
import { useDwellStore } from "@/lib/dwell/store";

export const Route = createFileRoute("/_world/gather")({
  component: GatherPage,
  head: () => ({ meta: [{ title: "Hearths · DWELL" }] }),
});

function GatherPage() {
  const joined = useDwellStore((s) => s.hearthsJoined);
  const sorted = [...hearths].sort((a, b) => {
    const order = { live: 0, soon: 1, ember: 2 };
    return order[hearthStatus(a)] - order[hearthStatus(b)];
  });

  return (
    <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
      <header className="max-w-2xl">
        <p className="text-xs uppercase tracking-[0.2em] text-terracotta">
          Gatherings
        </p>
        <h1 className="mt-2 font-display text-4xl tracking-tight sm:text-5xl">
          Hearths
        </h1>
        <p className="mt-3 text-base leading-relaxed text-cream-dim">
          Timed fires. You sit with a prompt, leave an ember, and when the wood
          is gone the room becomes a memory. No infinite rooms.
        </p>
      </header>
      <ul className="mt-10 grid gap-6 lg:grid-cols-2">
        {sorted.map((h) => {
          const status = hearthStatus(h);
          const host = people.find((p) => p.id === h.hostId);
          const seated = h.seated.length + (joined.includes(h.id) ? 1 : 0);
          return (
            <li key={h.id}>
              <Link
                to="/hearth/$id"
                params={{ id: h.id }}
                className="group grid overflow-hidden rounded-xl bg-ink-2 shadow-[0_0_0_1px_rgb(244_239_230/0.1)] sm:grid-cols-5"
              >
                <div className="relative sm:col-span-2">
                  <img
                    src={h.cover}
                    alt=""
                    className="aspect-[4/3] h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  {status === "live" ? (
                    <span className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-full bg-terracotta px-2.5 py-1 text-[11px] uppercase tracking-[0.14em] text-terracotta-fg">
                      <span
                        className="size-1.5 rounded-full bg-cream"
                        style={{ animation: "ember-flicker 1.6s ease-in-out infinite" }}
                      />
                      Lit now
                    </span>
                  ) : (
                    <span className="absolute left-3 top-3 rounded-full bg-ink/70 px-2.5 py-1 text-[11px] uppercase tracking-[0.14em] text-cream">
                      {status === "soon" ? "Soon" : "Embers"}
                    </span>
                  )}
                </div>
                <div className="flex flex-col justify-between p-5 sm:col-span-3">
                  <div>
                    <h2 className="font-display text-2xl tracking-tight">
                      {h.title}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-cream-dim">
                      {h.prompt}
                    </p>
                  </div>
                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    <Badge>Hosted by {host?.name}</Badge>
                    <Badge variant="cream">{seated} seated</Badge>
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
