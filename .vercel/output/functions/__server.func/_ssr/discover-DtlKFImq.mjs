import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { a as hearths, d as useDwellStore, i as hearthStatus, s as neighborhoods, u as relativeTime } from "./store-C8IrD_fr.mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { t as Input } from "./input-CTGY0VK5.mjs";
import { t as Label } from "./label-DoeUGlnV.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Badge } from "./badge-C_SJJKJx.mjs";
import { t as PersonCard } from "./person-card-CMTRvCZL.mjs";
import { i as TabsTrigger, n as TabsContent, r as TabsList, t as Tabs } from "./tabs-PNJhKc8h.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/discover-DtlKFImq.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function resonanceScore(personId, state) {
	if (personId === "you") return 0;
	const linger = state.visits[personId]?.seconds ?? 0;
	const keyed = state.keyring.includes(personId) ? 48 : 0;
	const sameHood = state.people.find((p) => p.id === personId)?.neighborhoodId === state.identity.neighborhoodId ? 22 : 0;
	const gifts = state.keepsakes.filter((k) => k.fromId === "you" && k.dwellingId === personId).length * 18;
	const letters = state.letters.filter((l) => l.fromId === "you" && l.toId === personId || l.fromId === personId && l.toId === "you").length * 12;
	return linger / 4 + keyed + sameHood + gifts + letters;
}
function nearbyIds(state, limit = 4) {
	return state.people.filter((p) => !p.isYou).map((p) => ({
		id: p.id,
		score: resonanceScore(p.id, state)
	})).sort((a, b) => b.score - a.score).slice(0, limit).map((x) => x.id);
}
function DiscoverPage() {
	const state = useDwellStore();
	const [q, setQ] = (0, import_react.useState)("");
	const query = q.trim().toLowerCase();
	const filteredPeople = (0, import_react.useMemo)(() => {
		return state.people.filter((p) => !p.isYou).map((p) => ({
			person: p,
			score: resonanceScore(p.id, state)
		})).sort((a, b) => b.score - a.score);
	}, [state]).filter(({ person }) => {
		if (!query) return true;
		const hood = neighborhoods.find((n) => n.id === person.neighborhoodId);
		return [
			person.name,
			person.craft,
			person.bio,
			person.mood,
			hood?.name
		].join(" ").toLowerCase().includes(query);
	});
	const sparkHits = state.sparks.filter((sp) => {
		if (!query) return sp.dwellingId !== "you";
		return sp.dwellingId !== "you" && `${sp.title} ${sp.body} ${sp.mood}`.toLowerCase().includes(query);
	});
	const near = nearbyIds(state, 3);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "max-w-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-[0.2em] text-terracotta",
						children: "Resonance"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 font-display text-4xl tracking-tight sm:text-5xl",
						children: "Discover"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-base leading-relaxed text-cream-dim",
						children: "Not an algorithm of virality. Rooms rise here because you lingered, left a key, shared a neighborhood, or wrote."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 max-w-lg",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "search",
					children: "Search dwellings, crafts, sparks"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "search",
					className: "mt-2",
					value: q,
					onChange: (e) => setQ(e.target.value),
					placeholder: "clay, night baker, meadow…",
					type: "search"
				})]
			}),
			!query && near.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10",
				"aria-labelledby": "near-h",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "near-h",
					className: "font-display text-2xl tracking-tight",
					children: "Near you"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 grid gap-4 sm:grid-cols-3",
					children: near.map((id) => {
						const p = state.people.find((x) => x.id === id);
						if (!p) return null;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PersonCard, {
							person: p,
							linger: state.visits[id]?.seconds
						}) }, id);
					})
				})]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
				defaultValue: "people",
				className: "mt-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, {
						"aria-label": "Discovery views",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
								value: "people",
								children: "Dwellings"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
								value: "sparks",
								children: "Sparks"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
								value: "hearths",
								children: "Hearths"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
						value: "people",
						children: filteredPeople.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Empty, { query }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
							children: filteredPeople.map(({ person, score }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PersonCard, {
								person,
								linger: state.visits[person.id]?.seconds
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "sr-only",
								children: ["Resonance ", Math.round(score)]
							})] }, person.id))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
						value: "sparks",
						children: sparkHits.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Empty, { query }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "grid gap-6",
							children: sparkHits.map((sp) => {
								const host = state.people.find((p) => p.id === sp.dwellingId);
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/dwell/$id",
									params: { id: sp.dwellingId },
									className: "grid gap-4 rounded-xl bg-ink-2 p-3 shadow-[0_0_0_1px_rgb(244_239_230/0.1)] sm:grid-cols-5",
									children: [sp.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: sp.image,
										alt: "",
										className: "aspect-[4/5] w-full rounded-lg object-cover sm:col-span-2"
									}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "p-2 sm:col-span-3",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "text-xs uppercase tracking-[0.16em] text-quiet",
												children: [
													host?.name,
													" · ",
													relativeTime(sp.createdAt)
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "mt-2 font-display text-2xl",
												children: sp.title
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-2 line-clamp-3 text-sm leading-relaxed text-cream-dim",
												children: sp.body
											})
										]
									})]
								}) }, sp.id);
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
						value: "hearths",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "grid gap-4 sm:grid-cols-2",
							children: hearths.filter((h) => query ? `${h.title} ${h.prompt}`.toLowerCase().includes(query) : true).map((h) => {
								const status = hearthStatus(h);
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/hearth/$id",
									params: { id: h.id },
									className: "block overflow-hidden rounded-xl bg-ink-2 shadow-[0_0_0_1px_rgb(244_239_230/0.1)]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: h.cover,
										alt: "",
										className: "aspect-[16/9] w-full object-cover"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "p-4",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
												variant: status === "live" ? "live" : "default",
												children: status === "live" ? "Lit now" : status === "soon" ? "Soon" : "Embers"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "mt-2 font-display text-2xl",
												children: h.title
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-2 line-clamp-2 text-sm text-cream-dim",
												children: h.prompt
											})
										]
									})]
								}) }, h.id);
							})
						})
					})
				]
			})
		]
	});
}
function Empty({ query }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "rounded-xl bg-ink-2 p-6 text-sm text-quiet shadow-[0_0_0_1px_rgb(244_239_230/0.1)]",
		children: query ? `Nothing on the peninsula answers to “${query}”. Try a craft, a mood, or a name.` : "The atlas is still waking."
	});
}
//#endregion
export { DiscoverPage as component };
