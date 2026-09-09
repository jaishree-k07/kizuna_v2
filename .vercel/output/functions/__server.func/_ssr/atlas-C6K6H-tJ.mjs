import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { d as useDwellStore, n as cn, s as neighborhoods } from "./store-C8IrD_fr.mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Badge } from "./badge-C_SJJKJx.mjs";
import { t as FilmImage } from "./film-image-BzI2LKN-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/atlas-C6K6H-tJ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AtlasMap({ people, visits }) {
	const [hood, setHood] = (0, import_react.useState)("all");
	const [focus, setFocus] = (0, import_react.useState)(null);
	const pins = (0, import_react.useMemo)(() => people.filter((p) => hood === "all" ? true : p.neighborhoodId === hood), [people, hood]);
	const focused = people.find((p) => p.id === focus) ?? pins[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-6 lg:grid-cols-[minmax(0,1.4fr)_20rem]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			role: "listbox",
			"aria-label": "Filter atlas by neighborhood",
			className: "mb-4 flex flex-wrap gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterChip, {
				active: hood === "all",
				onClick: () => setHood("all"),
				label: "Whole peninsula"
			}), neighborhoods.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterChip, {
				active: hood === n.id,
				onClick: () => setHood(n.id),
				label: n.name
			}, n.id))]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative overflow-hidden rounded-xl bg-ink-2 shadow-[0_0_0_1px_rgb(244_239_230/0.1)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "max-h-[70dvh] overflow-auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative min-w-[40rem] origin-top",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/atlas.jpg",
						alt: "Illustrated atlas of a foggy coastal peninsula at golden hour, with cottages, a conservatory, a harbor, and winding paths",
						className: "block w-full",
						width: 1792,
						height: 1008
					}), pins.map((p) => {
						const active = focus === p.id;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							role: "option",
							"aria-selected": active,
							"aria-label": `${p.name}, ${p.craft}`,
							onClick: () => setFocus(p.id),
							onFocus: () => setFocus(p.id),
							className: "absolute size-11 -translate-x-1/2 -translate-y-1/2 rounded-full",
							style: {
								left: `${p.x}%`,
								top: `${p.y}%`
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: cn("absolute inset-1 rounded-full bg-cover bg-center shadow-[0_0_0_2px_rgb(20_17_14/0.8)]", active && "ring-2 ring-terracotta ring-offset-2 ring-offset-ink"),
								style: { backgroundImage: `url(${p.portrait})` }
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute inset-0 rounded-full bg-terracotta/30",
								style: { animation: "dwell-pulse 2.8s ease-out infinite" },
								"aria-hidden": true
							})]
						}, p.id);
					})]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "px-4 py-3 text-xs text-quiet",
				children: "Pan the atlas. Open a pin to visit. Time spent in a room is how this world knows you."
			})]
		})] }), focused ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "rounded-xl bg-ink-2 p-4 shadow-[0_0_0_1px_rgb(244_239_230/0.1)] lg:sticky lg:top-24 lg:self-start",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilmImage, {
					src: focused.cover,
					alt: `${focused.name}'s dwelling`,
					className: "aspect-[3/2] rounded-lg"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-xs uppercase tracking-[0.16em] text-quiet",
					children: focused.craft
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-1 font-display text-2xl tracking-tight",
					children: focused.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm leading-relaxed text-cream-dim",
					children: focused.bio
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 flex flex-wrap gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: neighborhoods.find((n) => n.id === focused.neighborhoodId)?.name }), visits[focused.id]?.seconds ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
						variant: "terracotta",
						children: [
							"Lingered ",
							visits[focused.id].seconds,
							"s"
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: "cream",
						children: "Unvisited"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/dwell/$id",
					params: { id: focused.id },
					className: "mt-5 inline-flex h-11 w-full items-center justify-center rounded-md bg-terracotta text-sm font-medium text-terracotta-fg transition-transform duration-150 active:scale-[0.96]",
					children: focused.isYou ? "Enter your dwelling" : `Visit ${focused.name}`
				})
			]
		}) : null]
	});
}
function FilterChip({ active, onClick, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		"aria-pressed": active,
		className: cn("h-11 rounded-full px-4 text-sm transition-colors duration-150", active ? "bg-cream text-ink" : "text-cream-dim shadow-[0_0_0_1px_rgb(244_239_230/0.14)] hover:bg-ink-3"),
		children: label
	});
}
function AtlasPage() {
	const people = useDwellStore((s) => s.people);
	const visits = useDwellStore((s) => s.visits);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "stagger-in mb-8 max-w-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-[0.2em] text-terracotta",
						children: "The peninsula"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 font-display text-4xl tracking-tight sm:text-5xl",
						children: "Atlas"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-base leading-relaxed text-cream-dim",
						children: "A living map of dwellings. There is no feed. Wander, knock, sit. Neighborhoods keep their own weather."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AtlasMap, {
				people,
				visits
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-12",
				"aria-labelledby": "hoods-heading",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "hoods-heading",
					className: "font-display text-2xl tracking-tight",
					children: "Neighborhoods"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-5 grid gap-4 sm:grid-cols-2",
					children: neighborhoods.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/neighborhood/$id",
						params: { id: n.id },
						className: "group relative block overflow-hidden rounded-xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: n.cover,
								alt: "",
								className: "aspect-[16/9] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute inset-x-0 bottom-0 p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs uppercase tracking-[0.16em] text-cream/70",
									children: n.climate
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-2xl",
									children: n.name
								})]
							})
						]
					}) }, n.id))
				})]
			})
		]
	});
}
//#endregion
export { AtlasPage as component };
