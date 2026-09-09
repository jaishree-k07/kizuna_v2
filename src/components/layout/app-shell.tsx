import { useEffect, useRef } from "react";
import { Link, Outlet, useRouterState } from "@tanstack/react-router";
import {
  Bell,
  Compass,
  DoorOpen,
  Flame,
  Mail,
  Plus,
  Sparkles,
} from "lucide-react";
import { Toaster, toast } from "sonner";
import { cn } from "@/lib/utils";
import { YOU_ID } from "@/lib/dwell/seed";
import { rehydrateDwell, useDwellStore } from "@/lib/dwell/store";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Onboarding } from "@/components/layout/onboarding";

const nav = [
  { to: "/atlas", label: "Atlas", icon: Compass },
  { to: "/discover", label: "Discover", icon: Sparkles },
  { to: "/gather", label: "Hearths", icon: Flame },
  { to: "/letters", label: "Letters", icon: Mail },
  { to: "/me", label: "Dwelling", icon: DoorOpen },
] as const;

export function AppShell() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const hydrated = useDwellStore((s) => s.hydrated);
  const people = useDwellStore((s) => s.people);
  const letters = useDwellStore((s) => s.letters);
  const arrivals = useDwellStore((s) => s.arrivals);
  const toasted = useRef(new Set<string>());

  useEffect(() => {
    void rehydrateDwell();
  }, []);

  useEffect(() => {
    const tick = () => {
      const state = useDwellStore.getState();
      const now = Date.now();
      for (const letter of state.letters) {
        if (letter.fromId !== YOU_ID) continue;
        if (letter.arrivesAt > now) continue;
        if (toasted.current.has(letter.id)) continue;
        toasted.current.add(letter.id);
        const to = state.people.find((p) => p.id === letter.toId);
        toast(`Your letter reached ${to?.name ?? "them"}.`);
      }
    };
    tick();
    const id = window.setInterval(tick, 1500);
    return () => window.clearInterval(id);
  }, [letters, people]);

  const unreadLetters = letters.filter(
    (l) => l.toId === YOU_ID && !l.read && l.arrivesAt <= Date.now(),
  ).length;
  const unreadArrivals = arrivals.filter((a) => !a.read).length;

  return (
    <TooltipProvider delayDuration={200}>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <div className="min-h-dvh bg-ink text-cream">
        <header className="sticky top-0 z-40 border-b border-cream/10 bg-ink/85 backdrop-blur-md">
          <div className="mx-auto flex h-16 max-w-6xl items-center gap-3 px-4 sm:h-[4.25rem] sm:px-6">
            <Link
              to="/atlas"
              className="flex items-center gap-2.5 rounded-md pr-1"
              aria-label="DWELL, back to atlas"
            >
              <span className="flex size-8 items-center justify-center rounded-md bg-terracotta/15 text-terracotta">
                <DoorOpen className="size-4" strokeWidth={1.75} />
              </span>
              <span className="font-display text-lg tracking-tight">DWELL</span>
            </Link>
            <nav
              aria-label="Primary"
              className="ml-4 hidden items-center gap-1 md:flex"
            >
              {nav.map((item) => {
                const active =
                  pathname === item.to || pathname.startsWith(`${item.to}/`);
                const Icon = item.icon;
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "inline-flex h-11 items-center gap-2 rounded-md px-3 text-sm transition-colors duration-150",
                      active
                        ? "text-cream"
                        : "text-quiet hover:bg-ink-3 hover:text-cream",
                    )}
                  >
                    <Icon className="size-4" strokeWidth={1.75} />
                    {item.label}
                    {item.to === "/letters" && unreadLetters > 0 ? (
                      <span className="tabular-nums text-terracotta">
                        {unreadLetters}
                      </span>
                    ) : null}
                  </Link>
                );
              })}
            </nav>
            <div className="ml-auto flex items-center gap-1">
              <Link
                to="/arrivals"
                aria-label={
                  unreadArrivals
                    ? `${unreadArrivals} unread arrivals`
                    : "Arrivals"
                }
                className="relative inline-flex size-11 items-center justify-center rounded-md text-quiet hover:bg-ink-3 hover:text-cream"
              >
                <Bell className="size-4" strokeWidth={1.75} />
                {unreadArrivals > 0 ? (
                  <span className="absolute right-2 top-2 size-2 rounded-full bg-terracotta" />
                ) : null}
              </Link>
              <Link
                to="/create"
                className="inline-flex h-11 items-center gap-2 rounded-md bg-terracotta px-3.5 text-sm font-medium text-terracotta-fg transition-transform duration-150 active:scale-[0.96]"
              >
                <Plus className="size-4" />
                <span className="hidden sm:inline">Place a spark</span>
              </Link>
            </div>
          </div>
        </header>

        <div id="main" tabIndex={-1} className="outline-none">
          {hydrated ? <Outlet /> : <ShellSkeleton />}
        </div>

        <nav
          aria-label="Mobile"
          className="fixed inset-x-0 bottom-0 z-40 border-t border-cream/10 bg-ink/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-md md:hidden"
        >
          <ul className="grid grid-cols-5">
            {nav.map((item) => {
              const active =
                pathname === item.to || pathname.startsWith(`${item.to}/`);
              const Icon = item.icon;
              return (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "flex h-14 flex-col items-center justify-center gap-1 text-[10px] uppercase tracking-[0.14em]",
                      active ? "text-cream" : "text-quiet",
                    )}
                  >
                    <Icon className="size-5" strokeWidth={1.75} />
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="h-16 md:hidden" />
      </div>
      <Onboarding />
      <Toaster
        theme="dark"
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#1c1916",
            color: "#f4efe6",
            border: "1px solid rgb(244 239 230 / 0.12)",
          },
        }}
      />
    </TooltipProvider>
  );
}

function ShellSkeleton() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6" aria-busy="true">
      <div className="h-8 w-40 rounded-md bg-ink-3" />
      <div className="mt-6 h-64 rounded-xl bg-ink-3" />
    </div>
  );
}
