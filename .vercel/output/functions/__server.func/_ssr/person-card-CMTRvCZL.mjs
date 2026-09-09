import { n as cn, o as neighborhoodById } from "./store-C8IrD_fr.mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as FilmImage } from "./film-image-BzI2LKN-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/person-card-CMTRvCZL.js
var import_jsx_runtime = require_jsx_runtime();
function PersonCard({ person, linger, className }) {
	const hood = neighborhoodById(person.neighborhoodId);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/dwell/$id",
		params: { id: person.id },
		className: cn("group block overflow-hidden rounded-xl bg-ink-2 shadow-[0_0_0_1px_rgb(244_239_230/0.1)] transition-[box-shadow,transform] duration-200 hover:shadow-[0_0_0_1px_rgb(244_239_230/0.22)]", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilmImage, {
			src: person.portrait,
			alt: `${person.name}, ${person.craft}`,
			className: "aspect-[3/4]",
			imgClassName: "transition-transform duration-500 group-hover:scale-[1.03]"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs uppercase tracking-[0.16em] text-quiet",
					children: [person.craft, hood ? ` · ${hood.name}` : ""]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-1 font-display text-xl tracking-tight",
					children: person.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 line-clamp-2 text-sm leading-relaxed text-cream-dim",
					children: person.bio
				}),
				typeof linger === "number" && linger > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 text-xs tabular-nums text-terracotta",
					children: [
						"You lingered ",
						linger,
						"s"
					]
				}) : null
			]
		})]
	});
}
//#endregion
export { PersonCard as t };
