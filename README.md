# DWELL

**Visit, don't scroll.**

DWELL is a frontend-only social world: an atlas of intimate rooms instead of a feed. People keep dwellings. You wander, sit, leave a keepsake, keep a key, write a letter that actually travels, and gather at hearths that burn down.

This is not Instagram, Twitter, Reddit, or Snapchat. There are no likes, followers, streaks, or infinite scroll.

## The social contract

| Instead of | DWELL |
| --- | --- |
| Profile grid | A **dwelling** you tend — letter, sparks, a shelf |
| Follow | A **key** you keep for rooms you intend to return to |
| Like / upvote | A **keepsake** — an object with one sentence |
| Chat / DM | A **letter** that spends time on the path |
| Group / subreddit | A **hearth** — a timed fire around a prompt |
| Algorithmic feed | An **atlas** you wander + **resonance** from time spent |

Time spent in a room is the ranking signal. A candle grows while you stay.

## What you can do

- Cross the threshold and name your craft, neighborhood, and visitor letter
- Pan the peninsula atlas and open dwellings by pin
- Linger (the app quietly counts the seconds you sit)
- Leave a keepsake, keep a key, write a travelling letter
- Place a spark in your own room
- Sit at a live hearth and lay an ember on the coals
- Discover rooms by resonance, search, and neighborhood weather
- Read arrivals (the opposite of a notification firehose)

All of it persists in the browser (`localStorage`). No accounts, no backend.

## Architecture

Frontend-only. TanStack Start + React 19 + Tailwind v4 + Zustand.

```
src/
  routes/                 file-based pages
    index.tsx             cinematic threshold (landing)
    about.tsx             the social model
    _world.tsx            pathless shell (nav, onboarding)
    _world/atlas.tsx
    _world/dwell.$id.tsx
    _world/discover.tsx
    _world/gather.tsx
    _world/hearth.$id.tsx
    _world/neighborhood.$id.tsx
    _world/letters.tsx
    _world/create.tsx
    _world/me.tsx
    _world/arrivals.tsx
  lib/dwell/              domain layer
    types.ts              people, hearths, keepsakes, letters
    seed.ts               the peninsula's residents & copy
    store.ts              zustand + persist
    resonance.ts          ranking from linger / keys / gifts
  components/             ui primitives, atlas map, cards, shell
  styles.css              design tokens (ink, cream, terracotta, sage)
```

Visual language: editorial film photography, Fraunces + Outfit, warm ink and terracotta. No purple gradients, no like buttons, no infinite feed.

## Run locally

```bash
npm install
npm run dev
```

Then open the printed local URL. `npm run build` and `npm run typecheck` should both pass.

## Deploy on Vercel

1. Push this repo to GitHub.
2. In Vercel: **Add New Project** → import the repo.
3. Framework: Vite. Build command: `npm run build`. Output is handled by the Nitro Vercel preset already in `vite.config.ts`.
4. Deploy. No environment variables required.

## GitHub

This folder is the complete app. Do not upload `node_modules`. A `.gitignore` is included.

---

DWELL is a prototype of a slower social web: presence over posting, rooms over feeds, objects over metrics.
