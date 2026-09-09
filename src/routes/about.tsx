import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, DoorOpen } from "lucide-react";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({ meta: [{ title: "The idea · DWELL" }] }),
});

function AboutPage() {
  return (
    <main className="min-h-dvh bg-ink text-cream">
      <div className="mx-auto max-w-2xl px-5 py-8 sm:px-6">
        <header className="flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex h-11 items-center gap-2 text-sm text-quiet hover:text-cream"
          >
            <ArrowLeft className="size-4" />
            Threshold
          </Link>
          <p className="flex items-center gap-2 font-display">
            <DoorOpen className="size-4 text-terracotta" />
            DWELL
          </p>
        </header>
        <p className="mt-16 text-xs uppercase tracking-[0.2em] text-terracotta">
          A different social contract
        </p>
        <h1 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">
          Social as a place you inhabit.
        </h1>
        <div className="mt-8 space-y-6 text-base leading-relaxed text-cream-dim">
          <p>
            Most platforms trained us to scroll, tap, and leave. Attention became
            a metric. People became profiles. Rooms became content.
          </p>
          <p>
            DWELL is an atlas of intimate rooms. You do not follow. You{" "}
            <strong className="font-medium text-cream">visit</strong>. You do not
            like. You leave a{" "}
            <strong className="font-medium text-cream">keepsake</strong>. You do
            not DM. You write a{" "}
            <strong className="font-medium text-cream">letter that travels</strong>.
            You do not join a group chat. You sit at a{" "}
            <strong className="font-medium text-cream">hearth</strong> that will
            burn down.
          </p>
          <p>
            Time spent in a dwelling is the only ranking signal — a candle that
            grows while you stay. Resonance is built from lingering, keys, gifts,
            and shared weather, not from virality.
          </p>
        </div>
        <dl className="mt-12 grid gap-8 sm:grid-cols-2">
          {[
            ["Dwelling", "Identity as a room you tend, not a grid of posts."],
            ["Atlas", "Discovery by wandering a peninsula, not a feed."],
            ["Keepsake", "A physical-feeling gift with one sentence."],
            ["Keyring", "Intention to return — the opposite of a follow."],
            ["Hearth", "A timed gathering around a prompt."],
            ["Letter", "Mail with travel time. Slow on purpose."],
          ].map(([k, v]) => (
            <div key={k}>
              <dt className="font-display text-xl text-cream">{k}</dt>
              <dd className="mt-1 text-sm text-quiet">{v}</dd>
            </div>
          ))}
        </dl>
        <Link
          to="/atlas"
          className="mt-12 inline-flex h-12 items-center rounded-lg bg-cream px-5 text-sm font-medium text-ink"
        >
          Cross the threshold
        </Link>
      </div>
    </main>
  );
}
