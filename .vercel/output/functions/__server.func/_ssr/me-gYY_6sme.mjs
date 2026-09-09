import { d as useDwellStore, r as formatLinger, s as neighborhoods, u as relativeTime } from "./store-C8IrD_fr.mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { t as Button } from "./button-DSUHlcZ-.mjs";
import { t as Input } from "./input-CTGY0VK5.mjs";
import { t as Label } from "./label-DoeUGlnV.mjs";
import { t as Textarea } from "./textarea-DX0PyQtO.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as FilmImage } from "./film-image-BzI2LKN-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/me-gYY_6sme.js
var import_jsx_runtime = require_jsx_runtime();
function MePage() {
	const identity = useDwellStore((s) => s.identity);
	const setIdentity = useDwellStore((s) => s.setIdentity);
	const people = useDwellStore((s) => s.people);
	const keyring = useDwellStore((s) => s.keyring);
	const visits = useDwellStore((s) => s.visits);
	const sparks = useDwellStore((s) => s.sparks.filter((sp) => sp.dwellingId === "you"));
	const keepsakes = useDwellStore((s) => s.keepsakes.filter((k) => k.dwellingId === "you"));
	const resetWorld = useDwellStore((s) => s.resetWorld);
	const you = people.find((p) => p.id === "you");
	const keyed = keyring.map((id) => people.find((p) => p.id === id)).filter((p) => Boolean(p));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "relative min-h-[42dvh] overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: you?.cover ?? "/images/hero.jpg",
				alt: "The threshold of your dwelling",
				className: "absolute inset-0 h-full w-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/20" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mx-auto flex min-h-[42dvh] max-w-6xl flex-col justify-end px-4 pb-10 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-[0.2em] text-terracotta",
						children: "Your dwelling"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 font-display text-5xl tracking-tight",
						children: identity.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-cream-dim",
						children: identity.craft
					})
				]
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto grid max-w-6xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[minmax(0,1fr)_20rem]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			"aria-labelledby": "tend-h",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "tend-h",
					className: "font-display text-3xl tracking-tight",
					children: "Tend the room"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "mt-6 grid gap-4",
					onSubmit: (e) => {
						e.preventDefault();
						const fd = new FormData(e.currentTarget);
						setIdentity({
							name: String(fd.get("name") || identity.name),
							craft: String(fd.get("craft") || identity.craft),
							letter: String(fd.get("letter") || identity.letter),
							neighborhoodId: String(fd.get("hood") || identity.neighborhoodId)
						});
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-2 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "name",
									children: "Name"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "name",
									name: "name",
									defaultValue: identity.name
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "craft",
									children: "Craft"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "craft",
									name: "craft",
									defaultValue: identity.craft
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "hood",
								children: "Neighborhood"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								id: "hood",
								name: "hood",
								defaultValue: identity.neighborhoodId,
								className: "h-11 rounded-md bg-ink-3 px-3 text-sm text-cream shadow-[0_0_0_1px_rgb(244_239_230/0.14)]",
								children: neighborhoods.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: n.id,
									children: n.name
								}, n.id))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "letter",
								children: "Letter to visitors"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								id: "letter",
								name: "letter",
								defaultValue: identity.letter,
								rows: 5
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							className: "justify-self-start",
							children: "Save the room"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-end justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-3xl tracking-tight",
							children: "Your sparks"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							size: "sm",
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/create",
								children: "Place one"
							})
						})]
					}), sparks.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm text-quiet",
						children: "The room is still. A spark is a moment you are willing to keep."
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 grid gap-3",
						children: sparks.map((sp) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "rounded-xl bg-ink-2 p-4 shadow-[0_0_0_1px_rgb(244_239_230/0.1)]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs uppercase tracking-[0.16em] text-quiet",
									children: [
										sp.mood,
										" · ",
										relativeTime(sp.createdAt)
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-1 font-display text-xl",
									children: sp.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-cream-dim",
									children: sp.body
								})
							]
						}, sp.id))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl tracking-tight",
						children: "Shelf of gifts"
					}), keepsakes.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm text-quiet",
						children: "No one has left a keepsake yet. Linger in other rooms — gifts tend to travel back."
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3",
						children: keepsakes.map((k) => {
							const from = people.find((p) => p.id === k.fromId);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "overflow-hidden rounded-lg bg-ink-2 shadow-[0_0_0_1px_rgb(244_239_230/0.1)]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: k.image,
									alt: "",
									className: "aspect-square w-full object-cover"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm",
										children: k.note
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-1 text-xs text-quiet",
										children: ["from ", from?.name]
									})]
								})]
							}, k.id);
						})
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "space-y-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xs uppercase tracking-[0.16em] text-quiet",
						children: "Keyring"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-cream-dim",
						children: "Keys instead of follows. Rooms you intend to return to."
					}),
					keyed.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-quiet",
						children: "Empty. Visit, then keep a key."
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 grid gap-3",
						children: keyed.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilmImage, {
								src: p.portrait,
								alt: "",
								className: "size-14 shrink-0 rounded-md"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/dwell/$id",
								params: { id: p.id },
								className: "font-display text-lg hover:underline",
								children: p.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-quiet",
								children: p.craft
							})] })]
						}, p.id))
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xs uppercase tracking-[0.16em] text-quiet",
					children: "Where you lingered"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 grid gap-2",
					children: Object.values(visits).sort((a, b) => b.seconds - a.seconds).slice(0, 6).map((v) => {
						const p = people.find((x) => x.id === v.dwellingId);
						if (!p) return null;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/dwell/$id",
								params: { id: p.id },
								className: "text-cream hover:underline",
								children: p.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ml-2 tabular-nums text-quiet",
								children: formatLinger(v.seconds)
							})]
						}, v.dwellingId);
					})
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					onClick: () => resetWorld(),
					children: "Reset this world"
				})
			]
		})]
	})] });
}
//#endregion
export { MePage as component };
