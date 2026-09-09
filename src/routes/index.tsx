import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, DoorOpen } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Landing,
  head: () => ({
    meta: [{ title: "DWELL — visit, don't scroll" }],
  }),
});

function Landing() {
  return (
    <main className="relative min-h-dvh overflow-hidden bg-ink text-cream">
      <div className="absolute inset-0">
        <img
          src="/images/hero.jpg"
          alt="A lamp-lit doorway opening onto a coastal cottage at dusk"
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/25" />
        <div className="grain absolute inset-0" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-dvh max-w-6xl flex-col px-5 py-6 sm:px-8">
        <header className="flex items-center justify-between">
          <p className="flex items-center gap-2 font-display text-lg tracking-tight">
            <DoorOpen className="size-4 text-terracotta" strokeWidth={1.75} />
            DWELL
          </p>
          <Link
            to="/about"
            className="inline-flex h-11 items-center text-sm text-cream/80 hover:text-cream"
          >
            The idea
          </Link>
        </header>

        <div className="stagger-in mt-auto max-w-xl pb-16 pt-24 sm:pb-20">
          <p className="text-xs uppercase tracking-[0.22em] text-terracotta">
            A social atlas of rooms
          </p>
          <h1 className="mt-4 font-display text-5xl leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            Visit,
            <br />
            don't scroll.
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-cream-dim sm:text-lg">
            People here keep dwellings, not feeds. You wander an atlas, sit long
            enough to be changed, and leave a keepsake instead of a like.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              to="/atlas"
              className="inline-flex h-12 items-center gap-2 rounded-lg bg-cream px-5 text-sm font-medium text-ink transition-transform duration-150 active:scale-[0.96]"
            >
              Cross the threshold
              <ArrowRight className="size-4" />
            </Link>
            <Link
              to="/gather"
              className="inline-flex h-12 items-center rounded-lg px-4 text-sm text-cream shadow-[0_0_0_1px_rgb(244_239_230/0.2)] hover:bg-cream/5"
            >
              Sit at a hearth
            </Link>
          </div>
          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-cream/15 pt-6 text-sm">
            <div>
              <dt className="text-xs uppercase tracking-[0.16em] text-quiet">
                Signal
              </dt>
              <dd className="mt-1 text-cream">Time spent</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.16em] text-quiet">
                Gesture
              </dt>
              <dd className="mt-1 text-cream">A keepsake</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.16em] text-quiet">
                Return
              </dt>
              <dd className="mt-1 text-cream">A key</dd>
            </div>
          </dl>
        </div>
      </div>
    </main>
  );
}
