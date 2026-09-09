import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { d as useDwellStore, u as relativeTime } from "./store-C8IrD_fr.mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/arrivals-Ctr72sBN.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ArrivalsPage() {
	const arrivals = useDwellStore((s) => s.arrivals);
	const mark = useDwellStore((s) => s.markArrivalsRead);
	(0, import_react.useEffect)(() => {
		mark();
	}, [mark]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-xl px-4 py-10 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs uppercase tracking-[0.2em] text-terracotta",
				children: "What came to the door"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl tracking-tight",
				children: "Arrivals"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-base text-cream-dim",
				children: "Not a notification firehose. The few things that actually reached your threshold."
			}),
			arrivals.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-8 rounded-xl bg-ink-2 p-6 text-sm text-quiet shadow-[0_0_0_1px_rgb(244_239_230/0.1)]",
				children: "The stoop is quiet."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-8 grid gap-3",
				children: arrivals.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: a.href,
					className: "block rounded-xl bg-ink-2 p-4 shadow-[0_0_0_1px_rgb(244_239_230/0.1)]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs uppercase tracking-[0.16em] text-quiet",
							children: [
								a.kind,
								" · ",
								relativeTime(a.at)
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-1 font-display text-xl",
							children: a.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-cream-dim",
							children: a.body
						})
					]
				}) }, a.id))
			})
		]
	});
}
//#endregion
export { ArrivalsPage as component };
