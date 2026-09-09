import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { neighborhoods } from "@/lib/dwell/seed";
import type { NeighborhoodId, Person } from "@/lib/dwell/types";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { FilmImage } from "@/components/film-image";

export function AtlasMap({
  people,
  visits,
}: {
  people: Person[];
  visits: Record<string, { seconds: number }>;
}) {
  const [hood, setHood] = useState<NeighborhoodId | "all">("all");
  const [focus, setFocus] = useState<string | null>(null);

  const pins = useMemo(
    () =>
      people.filter((p) => (hood === "all" ? true : p.neighborhoodId === hood)),
    [people, hood],
  );

  const focused = people.find((p) => p.id === focus) ?? pins[0];

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1.4fr)_20rem]">
      <div>
        <div
          role="listbox"
          aria-label="Filter atlas by neighborhood"
          className="mb-4 flex flex-wrap gap-2"
        >
          <FilterChip
            active={hood === "all"}
            onClick={() => setHood("all")}
            label="Whole peninsula"
          />
          {neighborhoods.map((n) => (
            <FilterChip
              key={n.id}
              active={hood === n.id}
              onClick={() => setHood(n.id)}
              label={n.name}
            />
          ))}
        </div>

        <div className="relative overflow-hidden rounded-xl bg-ink-2 shadow-[0_0_0_1px_rgb(244_239_230/0.1)]">
          <div className="max-h-[70dvh] overflow-auto">
            <div className="relative min-w-[40rem] origin-top">
              <img
                src="/images/atlas.jpg"
                alt="Illustrated atlas of a foggy coastal peninsula at golden hour, with cottages, a conservatory, a harbor, and winding paths"
                className="block w-full"
                width={1792}
                height={1008}
              />
              {pins.map((p) => {
                const active = focus === p.id;
                return (
                  <button
                    key={p.id}
                    type="button"
                    role="option"
                    aria-selected={active}
                    aria-label={`${p.name}, ${p.craft}`}
                    onClick={() => setFocus(p.id)}
                    onFocus={() => setFocus(p.id)}
                    className="absolute size-11 -translate-x-1/2 -translate-y-1/2 rounded-full"
                    style={{ left: `${p.x}%`, top: `${p.y}%` }}
                  >
                    <span
                      className={cn(
                        "absolute inset-1 rounded-full bg-cover bg-center shadow-[0_0_0_2px_rgb(20_17_14/0.8)]",
                        active && "ring-2 ring-terracotta ring-offset-2 ring-offset-ink",
                      )}
                      style={{ backgroundImage: `url(${p.portrait})` }}
                    />
                    <span
                      className="absolute inset-0 rounded-full bg-terracotta/30"
                      style={{ animation: "dwell-pulse 2.8s ease-out infinite" }}
                      aria-hidden
                    />
                  </button>
                );
              })}
            </div>
          </div>
          <p className="px-4 py-3 text-xs text-quiet">
            Pan the atlas. Open a pin to visit. Time spent in a room is how this
            world knows you.
          </p>
        </div>
      </div>

      {focused ? (
        <aside className="rounded-xl bg-ink-2 p-4 shadow-[0_0_0_1px_rgb(244_239_230/0.1)] lg:sticky lg:top-24 lg:self-start">
          <FilmImage
            src={focused.cover}
            alt={`${focused.name}'s dwelling`}
            className="aspect-[3/2] rounded-lg"
          />
          <p className="mt-4 text-xs uppercase tracking-[0.16em] text-quiet">
            {focused.craft}
          </p>
          <h2 className="mt-1 font-display text-2xl tracking-tight">
            {focused.name}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-cream-dim">
            {focused.bio}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <Badge>
              {neighborhoods.find((n) => n.id === focused.neighborhoodId)?.name}
            </Badge>
            {visits[focused.id]?.seconds ? (
              <Badge variant="terracotta">
                Lingered {visits[focused.id].seconds}s
              </Badge>
            ) : (
              <Badge variant="cream">Unvisited</Badge>
            )}
          </div>
          <Link
            to="/dwell/$id"
            params={{ id: focused.id }}
            className="mt-5 inline-flex h-11 w-full items-center justify-center rounded-md bg-terracotta text-sm font-medium text-terracotta-fg transition-transform duration-150 active:scale-[0.96]"
          >
            {focused.isYou ? "Enter your dwelling" : `Visit ${focused.name}`}
          </Link>
        </aside>
      ) : null}
    </div>
  );
}

function FilterChip({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "h-11 rounded-full px-4 text-sm transition-colors duration-150",
        active
          ? "bg-cream text-ink"
          : "text-cream-dim shadow-[0_0_0_1px_rgb(244_239_230/0.14)] hover:bg-ink-3",
      )}
    >
      {label}
    </button>
  );
}
