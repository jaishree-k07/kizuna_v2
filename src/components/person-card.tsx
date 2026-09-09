import { Link } from "@tanstack/react-router";
import { FilmImage } from "@/components/film-image";
import { neighborhoodById } from "@/lib/dwell/seed";
import type { Person } from "@/lib/dwell/types";
import { cn } from "@/lib/utils";

export function PersonCard({
  person,
  linger,
  className,
}: {
  person: Person;
  linger?: number;
  className?: string;
}) {
  const hood = neighborhoodById(person.neighborhoodId);
  return (
    <Link
      to="/dwell/$id"
      params={{ id: person.id }}
      className={cn(
        "group block overflow-hidden rounded-xl bg-ink-2 shadow-[0_0_0_1px_rgb(244_239_230/0.1)] transition-[box-shadow,transform] duration-200 hover:shadow-[0_0_0_1px_rgb(244_239_230/0.22)]",
        className,
      )}
    >
      <FilmImage
        src={person.portrait}
        alt={`${person.name}, ${person.craft}`}
        className="aspect-[3/4]"
        imgClassName="transition-transform duration-500 group-hover:scale-[1.03]"
      />
      <div className="p-4">
        <p className="text-xs uppercase tracking-[0.16em] text-quiet">
          {person.craft}
          {hood ? ` · ${hood.name}` : ""}
        </p>
        <h3 className="mt-1 font-display text-xl tracking-tight">{person.name}</h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-cream-dim">
          {person.bio}
        </p>
        {typeof linger === "number" && linger > 0 ? (
          <p className="mt-3 text-xs tabular-nums text-terracotta">
            You lingered {linger}s
          </p>
        ) : null}
      </div>
    </Link>
  );
}
