import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { useDwellStore } from "@/lib/dwell/store";
import { relativeTime } from "@/lib/utils";

export const Route = createFileRoute("/_world/arrivals")({
  component: ArrivalsPage,
  head: () => ({ meta: [{ title: "Arrivals · DWELL" }] }),
});

function ArrivalsPage() {
  const arrivals = useDwellStore((s) => s.arrivals);
  const mark = useDwellStore((s) => s.markArrivalsRead);

  useEffect(() => {
    mark();
  }, [mark]);

  return (
    <main className="mx-auto max-w-xl px-4 py-10 sm:px-6">
      <p className="text-xs uppercase tracking-[0.2em] text-terracotta">
        What came to the door
      </p>
      <h1 className="mt-2 font-display text-4xl tracking-tight">Arrivals</h1>
      <p className="mt-3 text-base text-cream-dim">
        Not a notification firehose. The few things that actually reached your
        threshold.
      </p>
      {arrivals.length === 0 ? (
        <p className="mt-8 rounded-xl bg-ink-2 p-6 text-sm text-quiet shadow-[0_0_0_1px_rgb(244_239_230/0.1)]">
          The stoop is quiet.
        </p>
      ) : (
        <ul className="mt-8 grid gap-3">
          {arrivals.map((a) => (
            <li key={a.id}>
              <a
                href={a.href}
                className="block rounded-xl bg-ink-2 p-4 shadow-[0_0_0_1px_rgb(244_239_230/0.1)]"
              >
                <p className="text-xs uppercase tracking-[0.16em] text-quiet">
                  {a.kind} · {relativeTime(a.at)}
                </p>
                <h2 className="mt-1 font-display text-xl">{a.title}</h2>
                <p className="mt-1 text-sm text-cream-dim">{a.body}</p>
              </a>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
