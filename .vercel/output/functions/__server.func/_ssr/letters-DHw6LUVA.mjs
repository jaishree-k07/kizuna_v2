import { d as useDwellStore, u as relativeTime } from "./store-C8IrD_fr.mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Badge } from "./badge-C_SJJKJx.mjs";
import { i as TabsTrigger, n as TabsContent, r as TabsList, t as Tabs } from "./tabs-PNJhKc8h.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/letters-DHw6LUVA.js
var import_jsx_runtime = require_jsx_runtime();
function LettersPage() {
	const letters = useDwellStore((s) => s.letters);
	const people = useDwellStore((s) => s.people);
	const markRead = useDwellStore((s) => s.markLetterRead);
	const now = Date.now();
	const inbox = letters.filter((l) => l.toId === "you" && l.arrivesAt <= now);
	const travelling = letters.filter((l) => l.fromId === "you" && l.arrivesAt > now);
	const sent = letters.filter((l) => l.fromId === "you" && l.arrivesAt <= now);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs uppercase tracking-[0.2em] text-terracotta",
				children: "Slow mail"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl tracking-tight sm:text-5xl",
				children: "Letters"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-base leading-relaxed text-cream-dim",
				children: "No chat. A letter spends a little time on the path so that sending it costs something. Open one only when you can answer with the same care."
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
			defaultValue: "inbox",
			className: "mt-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
						value: "inbox",
						children: ["Inbox", inbox.filter((l) => !l.read).length > 0 ? ` (${inbox.filter((l) => !l.read).length})` : ""]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
						value: "travelling",
						children: "Travelling"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
						value: "sent",
						children: "Arrived"
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
					value: "inbox",
					children: inbox.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Empty, { text: "The table is empty. Visit a dwelling and write first." }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "grid gap-3",
						children: inbox.map((l) => {
							const from = people.find((p) => p.id === l.fromId);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "rounded-xl bg-ink-2 p-5 shadow-[0_0_0_1px_rgb(244_239_230/0.1)]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start justify-between gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-xs uppercase tracking-[0.16em] text-quiet",
											children: [
												"From",
												" ",
												from ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
													to: "/dwell/$id",
													params: { id: from.id },
													className: "text-cream",
													children: from.name
												}) : "someone",
												" ",
												"· ",
												relativeTime(l.arrivesAt)
											]
										}), !l.read ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
											variant: "terracotta",
											className: "mt-2",
											children: "Unopened"
										}) : null] }), from ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/dwell/$id",
											params: { id: from.id },
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: from.portrait,
												alt: "",
												className: "size-11 rounded-full object-cover"
											})
										}) : null]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 font-display text-xl leading-snug",
										children: l.body
									}),
									!l.read ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "mt-4 text-sm text-terracotta hover:underline",
										onClick: () => markRead(l.id),
										children: "Mark as read"
									}) : null
								]
							}) }, l.id);
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
					value: "travelling",
					children: travelling.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Empty, { text: "Nothing is on the path. Write from inside a dwelling." }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "grid gap-3",
						children: travelling.map((l) => {
							const to = people.find((p) => p.id === l.toId);
							const wait = Math.max(0, Math.ceil((l.arrivesAt - now) / 1e3));
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "rounded-xl bg-ink-2 p-5 text-sm shadow-[0_0_0_1px_rgb(244_239_230/0.1)]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs uppercase tracking-[0.16em] text-quiet",
									children: [
										"To ",
										to?.name,
										" · arrives in ",
										wait,
										"s"
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 font-display text-lg",
									children: l.body
								})]
							}, l.id);
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
					value: "sent",
					children: sent.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Empty, { text: "No letters have arrived yet." }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "grid gap-3",
						children: sent.map((l) => {
							const to = people.find((p) => p.id === l.toId);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "rounded-xl bg-ink-2 p-5 shadow-[0_0_0_1px_rgb(244_239_230/0.1)]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs uppercase tracking-[0.16em] text-quiet",
									children: [
										"To ",
										to?.name,
										" · ",
										relativeTime(l.arrivesAt)
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 font-display text-lg",
									children: l.body
								})]
							}, l.id);
						})
					})
				})
			]
		})]
	});
}
function Empty({ text }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "rounded-xl bg-ink-2 p-6 text-sm text-quiet shadow-[0_0_0_1px_rgb(244_239_230/0.1)]",
		children: text
	});
}
//#endregion
export { LettersPage as component };
