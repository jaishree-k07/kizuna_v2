import { a as hearths, d as useDwellStore, i as hearthStatus, s as neighborhoods } from "./store-C8IrD_fr.mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { t as Button } from "./button-DSUHlcZ-.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Badge } from "./badge-C_SJJKJx.mjs";
import { t as PersonCard } from "./person-card-CMTRvCZL.mjs";
import { n as Route } from "./router-7Sb4CsZj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/neighborhood._id-Df_-B3DU.js
var import_jsx_runtime = require_jsx_runtime();
function NeighborhoodPage() {
	const { id } = Route.useParams();
	const hood = neighborhoods.find((n) => n.id === id);
	const people = useDwellStore((s) => s.people.filter((p) => p.neighborhoodId === id));
	const visits = useDwellStore((s) => s.visits);
	const localHearths = hearths.filter((h) => h.neighborhoodId === id);
	if (!hood) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-xl px-4 py-20 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-3xl",
			children: "This climate has moved on."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			className: "mt-6",
			asChild: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/atlas",
				children: "Back to the atlas"
			})
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "relative min-h-[46dvh] overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: hood.cover,
				alt: "",
				className: "absolute inset-0 h-full w-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-ink/20" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mx-auto flex min-h-[46dvh] max-w-6xl flex-col justify-end px-4 pb-10 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-[0.2em] text-terracotta",
						children: hood.climate
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 font-display text-5xl tracking-tight",
						children: hood.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 font-display text-xl italic text-cream-dim",
						children: hood.epithet
					})
				]
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-10 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-2xl text-base leading-relaxed text-cream-dim",
				children: hood.description
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-12",
				"aria-labelledby": "res-h",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "res-h",
					className: "font-display text-3xl tracking-tight",
					children: "Residents"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
					children: people.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PersonCard, {
						person: p,
						linger: visits[p.id]?.seconds
					}) }, p.id))
				})]
			}),
			localHearths.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-12",
				"aria-labelledby": "h-h",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "h-h",
					className: "font-display text-3xl tracking-tight",
					children: "Local hearths"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-5 grid gap-4 sm:grid-cols-2",
					children: localHearths.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/hearth/$id",
						params: { id: h.id },
						className: "block overflow-hidden rounded-xl bg-ink-2 shadow-[0_0_0_1px_rgb(244_239_230/0.1)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: h.cover,
							alt: "",
							className: "aspect-[16/9] w-full object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								variant: hearthStatus(h) === "live" ? "live" : "default",
								children: hearthStatus(h) === "live" ? "Lit now" : hearthStatus(h)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-2 font-display text-xl",
								children: h.title
							})]
						})]
					}) }, h.id))
				})]
			}) : null
		]
	})] });
}
//#endregion
export { NeighborhoodPage as component };
