import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { c as DoorOpen, d as ArrowRight } from "../_libs/lucide-react.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-D01glVn7.js
var import_jsx_runtime = require_jsx_runtime();
function Landing() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "relative min-h-dvh overflow-hidden bg-ink text-cream",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute inset-0",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/hero.jpg",
					alt: "A lamp-lit doorway opening onto a coastal cottage at dusk",
					className: "h-full w-full object-cover",
					fetchPriority: "high"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/25" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "grain absolute inset-0" })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative z-10 mx-auto flex min-h-dvh max-w-6xl flex-col px-5 py-6 sm:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "flex items-center gap-2 font-display text-lg tracking-tight",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DoorOpen, {
						className: "size-4 text-terracotta",
						strokeWidth: 1.75
					}), "DWELL"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/about",
					className: "inline-flex h-11 items-center text-sm text-cream/80 hover:text-cream",
					children: "The idea"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "stagger-in mt-auto max-w-xl pb-16 pt-24 sm:pb-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-[0.22em] text-terracotta",
						children: "A social atlas of rooms"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-4 font-display text-5xl leading-[1.05] tracking-tight sm:text-6xl md:text-7xl",
						children: [
							"Visit,",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"don't scroll."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-md text-base leading-relaxed text-cream-dim sm:text-lg",
						children: "People here keep dwellings, not feeds. You wander an atlas, sit long enough to be changed, and leave a keepsake instead of a like."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/atlas",
							className: "inline-flex h-12 items-center gap-2 rounded-lg bg-cream px-5 text-sm font-medium text-ink transition-transform duration-150 active:scale-[0.96]",
							children: ["Cross the threshold", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/gather",
							className: "inline-flex h-12 items-center rounded-lg px-4 text-sm text-cream shadow-[0_0_0_1px_rgb(244_239_230/0.2)] hover:bg-cream/5",
							children: "Sit at a hearth"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-cream/15 pt-6 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-xs uppercase tracking-[0.16em] text-quiet",
								children: "Signal"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1 text-cream",
								children: "Time spent"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-xs uppercase tracking-[0.16em] text-quiet",
								children: "Gesture"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1 text-cream",
								children: "A keepsake"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-xs uppercase tracking-[0.16em] text-quiet",
								children: "Return"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1 text-cream",
								children: "A key"
							})] })
						]
					})
				]
			})]
		})]
	});
}
//#endregion
export { Landing as component };
