import { createFileRoute, Link } from "@tanstack/react-router";
import { PersonCard } from "@/components/person-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { neighborhoods, YOU_ID } from "@/lib/dwell/seed";
import { useDwellStore } from "@/lib/dwell/store";
import type { NeighborhoodId } from "@/lib/dwell/types";
import { formatLinger, relativeTime } from "@/lib/utils";
import { FilmImage } from "@/components/film-image";

export const Route = createFileRoute("/_world/me")({
  component: MePage,
  head: () => ({ meta: [{ title: "Your dwelling · DWELL" }] }),
});

function MePage() {
  const identity = useDwellStore((s) => s.identity);
  const setIdentity = useDwellStore((s) => s.setIdentity);
  const people = useDwellStore((s) => s.people);
  const keyring = useDwellStore((s) => s.keyring);
  const visits = useDwellStore((s) => s.visits);
  const sparks = useDwellStore((s) =>
    s.sparks.filter((sp) => sp.dwellingId === YOU_ID),
  );
  const keepsakes = useDwellStore((s) =>
    s.keepsakes.filter((k) => k.dwellingId === YOU_ID),
  );
  const resetWorld = useDwellStore((s) => s.resetWorld);
  const you = people.find((p) => p.id === YOU_ID);

  const keyed = keyring
    .map((id) => people.find((p) => p.id === id))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <main>
      <header className="relative min-h-[42dvh] overflow-hidden">
        <img
          src={you?.cover ?? "/images/hero.jpg"}
          alt="The threshold of your dwelling"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/20" />
        <div className="relative z-10 mx-auto flex min-h-[42dvh] max-w-6xl flex-col justify-end px-4 pb-10 sm:px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-terracotta">
            Your dwelling
          </p>
          <h1 className="mt-2 font-display text-5xl tracking-tight">
            {identity.name}
          </h1>
          <p className="mt-2 text-cream-dim">{identity.craft}</p>
        </div>
      </header>

      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[minmax(0,1fr)_20rem]">
        <section aria-labelledby="tend-h">
          <h2 id="tend-h" className="font-display text-3xl tracking-tight">
            Tend the room
          </h2>
          <form
            className="mt-6 grid gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              const fd = new FormData(e.currentTarget);
              setIdentity({
                name: String(fd.get("name") || identity.name),
                craft: String(fd.get("craft") || identity.craft),
                letter: String(fd.get("letter") || identity.letter),
                neighborhoodId: String(
                  fd.get("hood") || identity.neighborhoodId,
                ) as NeighborhoodId,
              });
            }}
          >
            <div className="grid gap-2 sm:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" defaultValue={identity.name} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="craft">Craft</Label>
                <Input id="craft" name="craft" defaultValue={identity.craft} />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="hood">Neighborhood</Label>
              <select
                id="hood"
                name="hood"
                defaultValue={identity.neighborhoodId}
                className="h-11 rounded-md bg-ink-3 px-3 text-sm text-cream shadow-[0_0_0_1px_rgb(244_239_230/0.14)]"
              >
                {neighborhoods.map((n) => (
                  <option key={n.id} value={n.id}>
                    {n.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="letter">Letter to visitors</Label>
              <Textarea
                id="letter"
                name="letter"
                defaultValue={identity.letter}
                rows={5}
              />
            </div>
            <Button type="submit" className="justify-self-start">
              Save the room
            </Button>
          </form>

          <div className="mt-12">
            <div className="flex items-end justify-between gap-3">
              <h2 className="font-display text-3xl tracking-tight">Your sparks</h2>
              <Button variant="outline" size="sm" asChild>
                <Link to="/create">Place one</Link>
              </Button>
            </div>
            {sparks.length === 0 ? (
              <p className="mt-4 text-sm text-quiet">
                The room is still. A spark is a moment you are willing to keep.
              </p>
            ) : (
              <ul className="mt-4 grid gap-3">
                {sparks.map((sp) => (
                  <li
                    key={sp.id}
                    className="rounded-xl bg-ink-2 p-4 shadow-[0_0_0_1px_rgb(244_239_230/0.1)]"
                  >
                    <p className="text-xs uppercase tracking-[0.16em] text-quiet">
                      {sp.mood} · {relativeTime(sp.createdAt)}
                    </p>
                    <h3 className="mt-1 font-display text-xl">{sp.title}</h3>
                    <p className="mt-2 text-sm text-cream-dim">{sp.body}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="mt-12">
            <h2 className="font-display text-3xl tracking-tight">
              Shelf of gifts
            </h2>
            {keepsakes.length === 0 ? (
              <p className="mt-4 text-sm text-quiet">
                No one has left a keepsake yet. Linger in other rooms — gifts
                tend to travel back.
              </p>
            ) : (
              <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {keepsakes.map((k) => {
                  const from = people.find((p) => p.id === k.fromId);
                  return (
                    <li
                      key={k.id}
                      className="overflow-hidden rounded-lg bg-ink-2 shadow-[0_0_0_1px_rgb(244_239_230/0.1)]"
                    >
                      <img src={k.image} alt="" className="aspect-square w-full object-cover" />
                      <div className="p-3">
                        <p className="text-sm">{k.note}</p>
                        <p className="mt-1 text-xs text-quiet">from {from?.name}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </section>

        <aside className="space-y-8">
          <section>
            <h2 className="text-xs uppercase tracking-[0.16em] text-quiet">
              Keyring
            </h2>
            <p className="mt-2 text-sm text-cream-dim">
              Keys instead of follows. Rooms you intend to return to.
            </p>
            {keyed.length === 0 ? (
              <p className="mt-3 text-sm text-quiet">Empty. Visit, then keep a key.</p>
            ) : (
              <ul className="mt-4 grid gap-3">
                {keyed.map((p) => (
                  <li key={p.id} className="flex gap-3">
                    <FilmImage
                      src={p.portrait}
                      alt=""
                      className="size-14 shrink-0 rounded-md"
                    />
                    <div>
                      <Link
                        to="/dwell/$id"
                        params={{ id: p.id }}
                        className="font-display text-lg hover:underline"
                      >
                        {p.name}
                      </Link>
                      <p className="text-xs text-quiet">{p.craft}</p>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </section>
          <section>
            <h2 className="text-xs uppercase tracking-[0.16em] text-quiet">
              Where you lingered
            </h2>
            <ul className="mt-3 grid gap-2">
              {Object.values(visits)
                .sort((a, b) => b.seconds - a.seconds)
                .slice(0, 6)
                .map((v) => {
                  const p = people.find((x) => x.id === v.dwellingId);
                  if (!p) return null;
                  return (
                    <li key={v.dwellingId} className="text-sm">
                      <Link
                        to="/dwell/$id"
                        params={{ id: p.id }}
                        className="text-cream hover:underline"
                      >
                        {p.name}
                      </Link>
                      <span className="ml-2 tabular-nums text-quiet">
                        {formatLinger(v.seconds)}
                      </span>
                    </li>
                  );
                })}
            </ul>
          </section>
          <Button variant="ghost" onClick={() => resetWorld()}>
            Reset this world
          </Button>
        </aside>
      </div>
    </main>
  );
}
