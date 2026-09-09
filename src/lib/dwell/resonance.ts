import { YOU_ID } from "./seed";
import type { DwellState } from "./store";

export function resonanceScore(personId: string, state: DwellState): number {
  if (personId === YOU_ID) return 0;
  const linger = state.visits[personId]?.seconds ?? 0;
  const keyed = state.keyring.includes(personId) ? 48 : 0;
  const person = state.people.find((p) => p.id === personId);
  const sameHood =
    person?.neighborhoodId === state.identity.neighborhoodId ? 22 : 0;
  const gifts =
    state.keepsakes.filter((k) => k.fromId === YOU_ID && k.dwellingId === personId)
      .length * 18;
  const letters =
    state.letters.filter(
      (l) =>
        (l.fromId === YOU_ID && l.toId === personId) ||
        (l.fromId === personId && l.toId === YOU_ID),
    ).length * 12;
  return linger / 4 + keyed + sameHood + gifts + letters;
}

export function nearbyIds(state: DwellState, limit = 4): string[] {
  return state.people
    .filter((p) => !p.isYou)
    .map((p) => ({ id: p.id, score: resonanceScore(p.id, state) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((x) => x.id);
}
