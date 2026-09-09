import { a as hearths, c as people, d as useDwellStore, i as hearthStatus } from "./store-C8IrD_fr.mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Badge } from "./badge-C_SJJKJx.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gather-CeEiF_45.js
var import_jsx_runtime = require_jsx_runtime();
function GatherPage() {
	const joined = useDwellStore((s) => s.hearthsJoined);
	const sorted = [...hearths].sort((a, b) => {
		const order = {
			live: 0,
			soon: 1,
			ember: 2
		};
		return order[hearthStatus(a)] - order[hearthStatus(b)];
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "max-w-2xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.2em] text-terracotta",
					children: "Gatherings"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 font-display text-4xl tracking-tight sm:text-5xl",
					children: "Hearths"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-base leading-relaxed text-cream-dim",
					children: "Timed fires. You sit with a prompt, leave an ember, and when the wood is gone the room becomes a memory. No infinite rooms."
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-10 grid gap-6 lg:grid-cols-2",
			children: sorted.map((h) => {
				const status = hearthStatus(h);
				const host = people.find((p) => p.id === h.hostId);
				const seated = h.seated.length + (joined.includes(h.id) ? 1 : 0);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/hearth/$id",
					params: { id: h.id },
					className: "group grid overflow-hidden rounded-xl bg-ink-2 shadow-[0_0_0_1px_rgb(244_239_230/0.1)] sm:grid-cols-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative sm:col-span-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: h.cover,
							alt: "",
							className: "aspect-[4/3] h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
						}), status === "live" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "absolute left-3 top-3 inline-flex items-center gap-2 rounded-full bg-terracotta px-2.5 py-1 text-[11px] uppercase tracking-[0.14em] text-terracotta-fg",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "size-1.5 rounded-full bg-cream",
								style: { animation: "ember-flicker 1.6s ease-in-out infinite" }
							}), "Lit now"]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute left-3 top-3 rounded-full bg-ink/70 px-2.5 py-1 text-[11px] uppercase tracking-[0.14em] text-cream",
							children: status === "soon" ? "Soon" : "Embers"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col justify-between p-5 sm:col-span-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl tracking-tight",
							children: h.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-cream-dim",
							children: h.prompt
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex flex-wrap items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, { children: ["Hosted by ", host?.name] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
								variant: "cream",
								children: [seated, " seated"]
							})]
						})]
					})]
				}) }, h.id);
			})
		})]
	});
}
//#endregion
export { GatherPage as component };
