export type NeighborhoodId =
  | "meadow-edge"
  | "conservatory"
  | "hearth-grain"
  | "night-terrace";

export type KeepsakeKind =
  | "stone"
  | "bowl"
  | "crumb"
  | "leaf"
  | "type"
  | "star"
  | "silver"
  | "steam"
  | "key"
  | "thread"
  | "shell"
  | "page";

export interface Person {
  id: string;
  name: string;
  craft: string;
  letter: string;
  bio: string;
  portrait: string;
  cover: string;
  neighborhoodId: NeighborhoodId;
  mood: string;
  x: number;
  y: number;
  isYou?: boolean;
}

export interface Neighborhood {
  id: NeighborhoodId;
  name: string;
  epithet: string;
  description: string;
  climate: string;
  cover: string;
  accent: string;
}

export interface Spark {
  id: string;
  dwellingId: string;
  title: string;
  body: string;
  image?: string;
  createdAt: number;
  mood: string;
}

export interface Keepsake {
  id: string;
  dwellingId: string;
  fromId: string;
  kind: KeepsakeKind;
  note: string;
  image: string;
  createdAt: number;
}

export interface Hearth {
  id: string;
  title: string;
  prompt: string;
  hostId: string;
  neighborhoodId: NeighborhoodId;
  cover: string;
  startsAt: number;
  durationMin: number;
  seated: string[];
}

export interface Ember {
  id: string;
  hearthId: string;
  fromId: string;
  body: string;
  createdAt: number;
}

export interface Letter {
  id: string;
  fromId: string;
  toId: string;
  body: string;
  sentAt: number;
  arrivesAt: number;
  read: boolean;
}

export interface Visit {
  dwellingId: string;
  lastAt: number;
  seconds: number;
  count: number;
}

export interface Arrival {
  id: string;
  kind: "letter" | "visitor" | "keepsake" | "hearth" | "ember";
  title: string;
  body: string;
  href: string;
  at: number;
  read: boolean;
}

export interface Identity {
  name: string;
  craft: string;
  letter: string;
  mood: string;
  neighborhoodId: NeighborhoodId;
}

export const KEEPSAKE_META: Record<
  KeepsakeKind,
  { label: string; meaning: string; image: string }
> = {
  stone: {
    label: "A river stone",
    meaning: "I stayed long enough to grow quiet.",
    image: "/images/keepsakes/stone.jpg",
  },
  bowl: {
    label: "A small bowl",
    meaning: "Something in here held me.",
    image: "/images/keepsakes/bowl.jpg",
  },
  crumb: {
    label: "A warm crumb",
    meaning: "I was fed.",
    image: "/images/keepsakes/crumb.jpg",
  },
  leaf: {
    label: "A pressed leaf",
    meaning: "This place is still growing.",
    image: "/images/keepsakes/leaf.jpg",
  },
  type: {
    label: "A letter of type",
    meaning: "A word of yours stayed with me.",
    image: "/images/keepsakes/type.jpg",
  },
  star: {
    label: "A paper star",
    meaning: "I looked up with you.",
    image: "/images/keepsakes/star.jpg",
  },
  silver: {
    label: "A strip of silver",
    meaning: "I will remember the light.",
    image: "/images/keepsakes/silver.jpg",
  },
  steam: {
    label: "A curl of steam",
    meaning: "I sat. I did not rush.",
    image: "/images/keepsakes/steam.jpg",
  },
  key: {
    label: "A spare key",
    meaning: "I would like to return.",
    image: "/images/keepsakes/key.jpg",
  },
  thread: {
    label: "A length of thread",
    meaning: "We are connected now.",
    image: "/images/keepsakes/thread.jpg",
  },
  shell: {
    label: "A tide shell",
    meaning: "I brought the outside in.",
    image: "/images/keepsakes/shell.jpg",
  },
  page: {
    label: "A blank page",
    meaning: "Write back when you are ready.",
    image: "/images/keepsakes/page.jpg",
  },
};
