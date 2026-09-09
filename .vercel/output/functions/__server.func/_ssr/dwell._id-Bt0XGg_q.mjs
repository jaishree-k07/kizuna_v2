import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { d as useDwellStore, o as neighborhoodById, r as formatLinger, t as KEEPSAKE_META, u as relativeTime } from "./store-C8IrD_fr.mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { t as Button } from "./button-DSUHlcZ-.mjs";
import { a as Mail, o as KeyRound, r as Sparkles } from "../_libs/lucide-react.mjs";
import { a as DialogTitle, i as DialogHeader, n as DialogContent, o as DialogTrigger, r as DialogDescription, t as Dialog } from "./dialog-a7o-Z0gv.mjs";
import { t as Label } from "./label-DoeUGlnV.mjs";
import { t as Textarea } from "./textarea-DX0PyQtO.mjs";
import { v as Link, y as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as Badge } from "./badge-C_SJJKJx.mjs";
import { t as FilmImage } from "./film-image-BzI2LKN-.mjs";
import { t as PersonCard } from "./person-card-CMTRvCZL.mjs";
import { i as Route$2 } from "./router-7Sb4CsZj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dwell._id-Bt0XGg_q.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function DwellingPage() {
	const { id } = Route$2.useParams();
	const navigate = useNavigate();
	const person = useDwellStore((s) => s.people.find((p) => p.id === id));
	const sparks = useDwellStore((s) => s.sparks.filter((sp) => sp.dwellingId === id));
	const keepsakes = useDwellStore((s) => s.keepsakes.filter((k) => k.dwellingId === id));
	const people = useDwellStore((s) => s.people);
	const visits = useDwellStore((s) => s.visits);
	const keyring = useDwellStore((s) => s.keyring);
	const linger = useDwellStore((s) => s.linger);
	const keepKey = useDwellStore((s) => s.keepKey);
	const dropKey = useDwellStore((s) => s.dropKey);
	const leaveKeepsake = useDwellStore((s) => s.leaveKeepsake);
	const sendLetter = useDwellStore((s) => s.sendLetter);
	(0, import_react.useEffect)(() => {
		if (!person) return;
		linger(id, 3);
		const t = window.setInterval(() => linger(id, 3), 3e3);
		return () => window.clearInterval(t);
	}, [
		id,
		person,
		linger
	]);
	if (!person) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-xl px-4 py-20 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-3xl",
			children: "This room has gone dark."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			className: "mt-6",
			onClick: () => navigate({ to: "/atlas" }),
			children: "Return to the atlas"
		})]
	});
	const hood = neighborhoodById(person.neighborhoodId);
	const seconds = visits[id]?.seconds ?? 0;
	const hasKey = keyring.includes(id);
	const isYou = person.id === "you";
	const neighbors = people.filter((p) => p.neighborhoodId === person.neighborhoodId && p.id !== person.id);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "relative min-h-[72dvh] overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: person.portrait,
				alt: `${person.name}, ${person.craft}`,
				className: "absolute inset-0 h-full w-full object-cover object-[center_20%]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/20" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mx-auto flex min-h-[72dvh] max-w-6xl flex-col justify-end px-4 pb-10 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs uppercase tracking-[0.2em] text-terracotta",
						children: [person.craft, hood ? ` · ${hood.name}` : ""]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 font-display text-5xl tracking-tight sm:text-6xl",
						children: person.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-xl text-base text-cream-dim",
						children: person.bio
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 flex flex-wrap items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							variant: "terracotta",
							children: formatLinger(seconds)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LingerCandle, { seconds })]
					})
				]
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto grid max-w-6xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[minmax(0,1fr)_18rem]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				"aria-labelledby": "letter-h",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "letter-h",
					className: "text-xs uppercase tracking-[0.2em] text-quiet",
					children: "Letter to visitors"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
					className: "mt-3 max-w-2xl font-display text-2xl leading-snug tracking-tight text-cream",
					children: person.letter
				})]
			}),
			!isYou ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex flex-wrap gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: hasKey ? "outline" : "default",
						onClick: () => {
							if (hasKey) dropKey(id);
							else {
								keepKey(id);
								toast(`You kept a key to ${person.name}'s dwelling.`);
							}
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyRound, { className: "size-4" }), hasKey ? "Return the key" : "Keep a key"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeepsakeDialog, {
						hostName: person.name,
						onLeave: (kind, note) => {
							leaveKeepsake(id, kind, note);
							toast("A keepsake sits on the shelf.");
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LetterDialog, {
						hostName: person.name,
						onSend: (body) => {
							sendLetter(id, body);
							toast("The letter is travelling. It will arrive shortly.");
						}
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex flex-wrap gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/me",
						children: "Tend this room"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/create",
						children: "Place a spark"
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-14",
				"aria-labelledby": "sparks-h",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id: "sparks-h",
						className: "font-display text-3xl tracking-tight",
						children: "Sparks"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-xl text-sm text-quiet",
						children: "Not posts. Moments the room wanted to keep."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-6 grid gap-8",
						children: sparks.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "rounded-xl bg-ink-2 p-6 text-sm text-quiet shadow-[0_0_0_1px_rgb(244_239_230/0.1)]",
							children: "The room is still. Place a spark to give it a pulse."
						}) : sparks.map((sp) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "grid gap-4 sm:grid-cols-5",
							children: [sp.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilmImage, {
								src: sp.image,
								alt: "",
								className: "aspect-[4/5] rounded-lg sm:col-span-2"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hidden rounded-lg bg-ink-2 sm:col-span-2 sm:block" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "sm:col-span-3",
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
										className: "mt-2 font-display text-2xl tracking-tight",
										children: sp.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-base leading-relaxed text-cream-dim",
										children: sp.body
									})
								]
							})]
						}, sp.id))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-14",
				"aria-labelledby": "shelf-h",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id: "shelf-h",
						className: "font-display text-3xl tracking-tight",
						children: "The shelf"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-xl text-sm text-quiet",
						children: "Keepsakes left by visitors. Not likes — objects with a sentence."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3",
						children: keepsakes.map((k) => {
							const from = people.find((p) => p.id === k.fromId);
							const meta = KEEPSAKE_META[k.kind];
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "overflow-hidden rounded-lg bg-ink-2 shadow-[0_0_0_1px_rgb(244_239_230/0.1)]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: k.image,
									alt: meta.label,
									className: "aspect-square w-full object-cover"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs uppercase tracking-[0.14em] text-quiet",
											children: meta.label
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-sm leading-snug text-cream",
											children: k.note
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "mt-2 text-xs text-quiet",
											children: [
												"from ",
												from?.name ?? "a visitor",
												" · ",
												relativeTime(k.createdAt)
											]
										})
									]
								})]
							}, k.id);
						})
					})
				]
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "space-y-6 lg:pt-2",
			children: [hood ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/neighborhood/$id",
				params: { id: hood.id },
				className: "block overflow-hidden rounded-xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: hood.cover,
					alt: "",
					className: "aspect-[16/10] w-full object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-ink-2 p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-[0.16em] text-quiet",
							children: "Neighborhood"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 font-display text-xl",
							children: hood.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-quiet",
							children: hood.climate
						})
					]
				})]
			}) : null, neighbors.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-xs uppercase tracking-[0.16em] text-quiet",
				children: "Along this path"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-3 grid gap-3",
				children: neighbors.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PersonCard, {
					person: n,
					linger: visits[n.id]?.seconds
				}) }, n.id))
			})] }) : null]
		})]
	})] });
}
function LingerCandle({ seconds }) {
	const height = Math.min(100, 18 + seconds / 2);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "inline-flex items-center gap-2 text-xs text-quiet",
		title: "Linger time",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "relative h-8 w-3 overflow-hidden rounded-full bg-ink-3",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute inset-x-0 bottom-0 bg-terracotta",
				style: { height: `${height}%` }
			})
		}), "A candle for how long you have sat"]
	});
}
function KeepsakeDialog({ hostName, onLeave }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [kind, setKind] = (0, import_react.useState)("stone");
	const [note, setNote] = (0, import_react.useState)("");
	const kinds = Object.keys(KEEPSAKE_META);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, {
		open,
		onOpenChange: setOpen,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
			asChild: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "outline",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-4" }), "Leave a keepsake"]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, { children: ["A gift for ", hostName] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Choose an object. Write one sentence. No hearts, no fire emojis — just a thing that says you were here." })] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-3 gap-2",
				children: kinds.map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setKind(k),
					className: `overflow-hidden rounded-md text-left shadow-[0_0_0_1px_rgb(244_239_230/0.12)] ${kind === k ? "ring-2 ring-terracotta" : ""}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: KEEPSAKE_META[k].image,
						alt: "",
						className: "aspect-square w-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block px-2 py-1.5 text-[11px] uppercase tracking-[0.12em] text-quiet",
						children: KEEPSAKE_META[k].label
					})]
				}, k))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-cream-dim",
				children: KEEPSAKE_META[kind].meaning
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "keep-note",
					children: "Your sentence"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					id: "keep-note",
					value: note,
					onChange: (e) => setNote(e.target.value),
					placeholder: "I stayed long enough to grow quiet."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				onClick: () => {
					if (!note.trim()) return;
					onLeave(kind, note.trim());
					setNote("");
					setOpen(false);
				},
				children: "Place it on the shelf"
			})
		] })]
	});
}
function LetterDialog({ hostName, onSend }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [body, setBody] = (0, import_react.useState)("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, {
		open,
		onOpenChange: setOpen,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
			asChild: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "ghost",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-4" }), "Write a letter"]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, { children: ["To ", hostName] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Letters travel. They do not ping. Yours will arrive in a little while — enough time to mean it." })] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "letter-body",
					children: "The letter"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					id: "letter-body",
					value: body,
					onChange: (e) => setBody(e.target.value),
					rows: 6,
					placeholder: "I sat in your room until the light changed…"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				onClick: () => {
					if (!body.trim()) return;
					onSend(body.trim());
					setBody("");
					setOpen(false);
				},
				children: "Send into travel"
			})
		] })]
	});
}
//#endregion
export { DwellingPage as component };
