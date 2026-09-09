import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { a as hearths, d as useDwellStore, i as hearthStatus, u as relativeTime } from "./store-C8IrD_fr.mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { t as Button } from "./button-DSUHlcZ-.mjs";
import { t as Label } from "./label-DoeUGlnV.mjs";
import { t as Textarea } from "./textarea-DX0PyQtO.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as Badge } from "./badge-C_SJJKJx.mjs";
import { r as Route$1 } from "./router-7Sb4CsZj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/hearth._id-D5sfSblG.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function HearthPage() {
	const { id } = Route$1.useParams();
	const hearth = hearths.find((h) => h.id === id);
	const people = useDwellStore((s) => s.people);
	const embers = useDwellStore((s) => s.embers.filter((e) => e.hearthId === id));
	const joined = useDwellStore((s) => s.hearthsJoined.includes(id));
	const joinHearth = useDwellStore((s) => s.joinHearth);
	const leaveHearth = useDwellStore((s) => s.leaveHearth);
	const addEmber = useDwellStore((s) => s.addEmber);
	const [body, setBody] = (0, import_react.useState)("");
	if (!hearth) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-xl px-4 py-20 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-3xl",
			children: "This fire has gone out."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			className: "mt-6",
			asChild: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/gather",
				children: "Other hearths"
			})
		})]
	});
	const status = hearthStatus(hearth);
	const host = people.find((p) => p.id === hearth.hostId);
	const seatedIds = joined ? [.../* @__PURE__ */ new Set([...hearth.seated, "you"])] : hearth.seated;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "relative min-h-[48dvh] overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: hearth.cover,
				alt: "",
				className: "absolute inset-0 h-full w-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/25" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mx-auto flex min-h-[48dvh] max-w-3xl flex-col justify-end px-4 pb-10 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: status === "live" ? "live" : "cream",
						children: status === "live" ? "The fire is lit" : status === "soon" ? "Gathering soon" : "Embers remain"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 font-display text-4xl tracking-tight sm:text-5xl",
						children: hearth.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-xl text-base leading-relaxed text-cream-dim",
						children: hearth.prompt
					})
				]
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl px-4 py-10 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs uppercase tracking-[0.16em] text-quiet",
					children: [
						"Hosted by",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/dwell/$id",
							params: { id: hearth.hostId },
							className: "text-cream underline-offset-4 hover:underline",
							children: host?.name
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 flex -space-x-2",
					"aria-label": "Seated",
					children: seatedIds.map((sid) => {
						const p = people.find((x) => x.id === sid);
						if (!p) return null;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/dwell/$id",
							params: { id: sid },
							title: p.name,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: p.portrait,
								alt: p.name,
								className: "size-10 rounded-full object-cover shadow-[0_0_0_2px_var(--color-ink)]"
							})
						}) }, sid);
					})
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: joined ? "outline" : "default",
					onClick: () => {
						if (joined) leaveHearth(id);
						else {
							joinHearth(id);
							toast("You pulled up a chair.");
						}
					},
					children: joined ? "Leave the circle" : "Sit down"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10",
				"aria-labelledby": "embers-h",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "embers-h",
					className: "font-display text-2xl tracking-tight",
					children: "Embers"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-5 grid gap-4",
					children: embers.map((e) => {
						const from = people.find((p) => p.id === e.fromId);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3 rounded-xl bg-ink-2 p-4 shadow-[0_0_0_1px_rgb(244_239_230/0.1)]",
							children: [from ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/dwell/$id",
								params: { id: from.id },
								className: "shrink-0",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: from.portrait,
									alt: from.name,
									className: "size-11 rounded-full object-cover"
								})
							}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-quiet",
								children: [
									from?.name,
									" · ",
									relativeTime(e.createdAt)
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm leading-relaxed text-cream",
								children: e.body
							})] })]
						}, e.id);
					})
				})]
			}),
			joined ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "mt-8 grid gap-3",
				onSubmit: (ev) => {
					ev.preventDefault();
					if (!body.trim()) return;
					addEmber(id, body.trim());
					setBody("");
					toast("Your ember catches.");
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "ember",
						children: "Add an ember"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						id: "ember",
						value: body,
						onChange: (e) => setBody(e.target.value),
						placeholder: "A sentence for the fire…"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						className: "justify-self-start",
						children: "Lay it on the coals"
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-8 text-sm text-quiet",
				children: "Sit down to speak. Presence first, then voice."
			})
		]
	})] });
}
//#endregion
export { HearthPage as component };
