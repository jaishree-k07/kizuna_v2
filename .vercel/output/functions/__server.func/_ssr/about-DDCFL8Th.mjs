import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { c as DoorOpen, f as ArrowLeft } from "../_libs/lucide-react.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-DDCFL8Th.js
var import_jsx_runtime = require_jsx_runtime();
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "min-h-dvh bg-ink text-cream",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-2xl px-5 py-8 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "inline-flex h-11 items-center gap-2 text-sm text-quiet hover:text-cream",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), "Threshold"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "flex items-center gap-2 font-display",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DoorOpen, { className: "size-4 text-terracotta" }), "DWELL"]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-16 text-xs uppercase tracking-[0.2em] text-terracotta",
					children: "A different social contract"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 font-display text-4xl tracking-tight sm:text-5xl",
					children: "Social as a place you inhabit."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 space-y-6 text-base leading-relaxed text-cream-dim",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Most platforms trained us to scroll, tap, and leave. Attention became a metric. People became profiles. Rooms became content." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							"DWELL is an atlas of intimate rooms. You do not follow. You",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "font-medium text-cream",
								children: "visit"
							}),
							". You do not like. You leave a",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "font-medium text-cream",
								children: "keepsake"
							}),
							". You do not DM. You write a",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "font-medium text-cream",
								children: "letter that travels"
							}),
							". You do not join a group chat. You sit at a",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "font-medium text-cream",
								children: "hearth"
							}),
							" that will burn down."
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Time spent in a dwelling is the only ranking signal — a candle that grows while you stay. Resonance is built from lingering, keys, gifts, and shared weather, not from virality." })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
					className: "mt-12 grid gap-8 sm:grid-cols-2",
					children: [
						["Dwelling", "Identity as a room you tend, not a grid of posts."],
						["Atlas", "Discovery by wandering a peninsula, not a feed."],
						["Keepsake", "A physical-feeling gift with one sentence."],
						["Keyring", "Intention to return — the opposite of a follow."],
						["Hearth", "A timed gathering around a prompt."],
						["Letter", "Mail with travel time. Slow on purpose."]
					].map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "font-display text-xl text-cream",
						children: k
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "mt-1 text-sm text-quiet",
						children: v
					})] }, k))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/atlas",
					className: "mt-12 inline-flex h-12 items-center rounded-lg bg-cream px-5 text-sm font-medium text-ink",
					children: "Cross the threshold"
				})
			]
		})
	});
}
//#endregion
export { AboutPage as component };
