import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
  embers as seedEmbers,
  hearths as seedHearths,
  keepsakes as seedKeepsakes,
  letters as seedLetters,
  people as seedPeople,
  sparks as seedSparks,
  YOU_ID,
} from "./seed";
import type {
  Arrival,
  Ember,
  Identity,
  Keepsake,
  KeepsakeKind,
  Letter,
  NeighborhoodId,
  Person,
  Spark,
  Visit,
} from "./types";
import { KEEPSAKE_META } from "./types";

export interface DwellState {
  hydrated: boolean;
  onboardingComplete: boolean;
  identity: Identity;
  people: Person[];
  sparks: Spark[];
  keepsakes: Keepsake[];
  letters: Letter[];
  embers: Ember[];
  hearthsJoined: string[];
  keyring: string[];
  visits: Record<string, Visit>;
  arrivals: Arrival[];
  completeOnboarding: (identity: Partial<Identity>) => void;
  setIdentity: (patch: Partial<Identity>) => void;
  linger: (dwellingId: string, seconds?: number) => void;
  keepKey: (dwellingId: string) => void;
  dropKey: (dwellingId: string) => void;
  leaveKeepsake: (dwellingId: string, kind: KeepsakeKind, note: string) => void;
  addSpark: (title: string, body: string, mood: string) => void;
  sendLetter: (toId: string, body: string) => void;
  markLetterRead: (id: string) => void;
  joinHearth: (hearthId: string) => void;
  leaveHearth: (hearthId: string) => void;
  addEmber: (hearthId: string, body: string) => void;
  markArrivalsRead: () => void;
  resetWorld: () => void;
}

const defaultIdentity: Identity = {
  name: "You",
  craft: "Wanderer",
  letter:
    "I just crossed the threshold. The rooms are still empty. If you visit, leave something small — I am still learning how to host.",
  mood: "threshold",
  neighborhoodId: "meadow-edge",
};

function withYou(identity: Identity): Person[] {
  return seedPeople.map((p) =>
    p.id === YOU_ID
      ? {
          ...p,
          name: identity.name || "You",
          craft: identity.craft || "Wanderer",
          letter: identity.letter,
          neighborhoodId: identity.neighborhoodId,
          mood: identity.mood,
        }
      : p,
  );
}

function uid(prefix: string) {
  return `${prefix}-${Math.random().toString(36).slice(2, 9)}`;
}

const initialArrivals: Arrival[] = [
  {
    id: "a-welcome",
    kind: "letter",
    title: "A letter from Mira",
    body: "The Clay Room has a guest wheel.",
    href: "/letters",
    at: Date.now() - 2.5 * 60 * 60 * 1000,
    read: false,
  },
  {
    id: "a-hearth",
    kind: "hearth",
    title: "Night bread is lit",
    body: "Aya has the ovens on. The marble is warm.",
    href: "/hearth/night-bread",
    at: Date.now() - 20 * 60 * 1000,
    read: false,
  },
];

export const useDwellStore = create<DwellState>()(
  persist(
    (set, get) => ({
      hydrated: false,
      onboardingComplete: false,
      identity: defaultIdentity,
      people: withYou(defaultIdentity),
      sparks: seedSparks,
      keepsakes: seedKeepsakes,
      letters: seedLetters,
      embers: seedEmbers,
      hearthsJoined: [],
      keyring: ["mira"],
      visits: {},
      arrivals: initialArrivals,

      completeOnboarding: (identity) => {
        const next = { ...get().identity, ...identity };
        set({
          onboardingComplete: true,
          identity: next,
          people: withYou(next),
        });
      },

      setIdentity: (patch) => {
        const next = { ...get().identity, ...patch };
        set({ identity: next, people: withYou(next) });
      },

      linger: (dwellingId, seconds = 3) => {
        const visits = { ...get().visits };
        const prev = visits[dwellingId];
        visits[dwellingId] = {
          dwellingId,
          lastAt: Date.now(),
          seconds: (prev?.seconds ?? 0) + seconds,
          count: prev?.count ?? (seconds >= 3 ? 1 : 0),
        };
        if (!prev) visits[dwellingId].count = 1;
        set({ visits });
      },

      keepKey: (dwellingId) => {
        if (dwellingId === YOU_ID) return;
        const keyring = get().keyring;
        if (keyring.includes(dwellingId)) return;
        set({
          keyring: [...keyring, dwellingId],
          arrivals: [
            {
              id: uid("a"),
              kind: "visitor",
              title: "A key kept",
              body: `You kept a key to ${get().people.find((p) => p.id === dwellingId)?.name ?? "a dwelling"}.`,
              href: "/me",
              at: Date.now(),
              read: true,
            },
            ...get().arrivals,
          ],
        });
      },

      dropKey: (dwellingId) => {
        set({ keyring: get().keyring.filter((id) => id !== dwellingId) });
      },

      leaveKeepsake: (dwellingId, kind, note) => {
        const item: Keepsake = {
          id: uid("k"),
          dwellingId,
          fromId: YOU_ID,
          kind,
          note,
          image: KEEPSAKE_META[kind].image,
          createdAt: Date.now(),
        };
        const host = get().people.find((p) => p.id === dwellingId);
        set({
          keepsakes: [item, ...get().keepsakes],
          arrivals: [
            {
              id: uid("a"),
              kind: "keepsake",
              title: `You left ${KEEPSAKE_META[kind].label.toLowerCase()}`,
              body: host ? `On the shelf in ${host.name}'s dwelling.` : note,
              href: `/dwell/${dwellingId}`,
              at: Date.now(),
              read: true,
            },
            ...get().arrivals,
          ],
        });
      },

      addSpark: (title, body, mood) => {
        const spark: Spark = {
          id: uid("sp"),
          dwellingId: YOU_ID,
          title,
          body,
          createdAt: Date.now(),
          mood,
        };
        set({ sparks: [spark, ...get().sparks] });
      },

      sendLetter: (toId, body) => {
        const travel = 8000 + Math.floor(Math.random() * 7000);
        const letter: Letter = {
          id: uid("l"),
          fromId: YOU_ID,
          toId,
          body,
          sentAt: Date.now(),
          arrivesAt: Date.now() + travel,
          read: false,
        };
        set({ letters: [letter, ...get().letters] });
      },

      markLetterRead: (id) => {
        set({
          letters: get().letters.map((l) =>
            l.id === id ? { ...l, read: true } : l,
          ),
        });
      },

      joinHearth: (hearthId) => {
        if (get().hearthsJoined.includes(hearthId)) return;
        set({ hearthsJoined: [...get().hearthsJoined, hearthId] });
      },

      leaveHearth: (hearthId) => {
        set({
          hearthsJoined: get().hearthsJoined.filter((id) => id !== hearthId),
        });
      },

      addEmber: (hearthId, body) => {
        const ember: Ember = {
          id: uid("e"),
          hearthId,
          fromId: YOU_ID,
          body,
          createdAt: Date.now(),
        };
        set({ embers: [...get().embers, ember] });
      },

      markArrivalsRead: () => {
        set({
          arrivals: get().arrivals.map((a) => ({ ...a, read: true })),
        });
      },

      resetWorld: () => {
        set({
          onboardingComplete: false,
          identity: defaultIdentity,
          people: withYou(defaultIdentity),
          sparks: seedSparks,
          keepsakes: seedKeepsakes,
          letters: seedLetters,
          embers: seedEmbers,
          hearthsJoined: [],
          keyring: ["mira"],
          visits: {},
          arrivals: initialArrivals,
        });
      },
    }),
    {
      name: "dwell-world-v1",
      skipHydration: true,
      partialize: (s) => ({
        onboardingComplete: s.onboardingComplete,
        identity: s.identity,
        sparks: s.sparks,
        keepsakes: s.keepsakes,
        letters: s.letters,
        embers: s.embers,
        hearthsJoined: s.hearthsJoined,
        keyring: s.keyring,
        visits: s.visits,
        arrivals: s.arrivals,
      }),
    },
  ),
);

export async function rehydrateDwell() {
  await useDwellStore.persist.rehydrate();
  const s = useDwellStore.getState();
  useDwellStore.setState({
    hydrated: true,
    people: withYou(s.identity),
  });
}

export function usePerson(id: string | undefined) {
  return useDwellStore((s) => s.people.find((p) => p.id === id));
}

export { seedHearths };
