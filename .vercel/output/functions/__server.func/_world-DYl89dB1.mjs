import { i as __toESM } from "./_runtime.mjs";
import { u as require_react } from "./_libs/@floating-ui/react-dom+[...].mjs";
import { d as useDwellStore, l as rehydrateDwell, n as cn, s as neighborhoods } from "./_ssr/store-C8IrD_fr.mjs";
import { s as require_jsx_runtime } from "./_libs/@radix-ui/react-collection+[...].mjs";
import { t as Button } from "./_ssr/button-DSUHlcZ-.mjs";
import { a as Mail, c as DoorOpen, i as Plus, l as Compass, r as Sparkles, s as Flame, u as Bell } from "./_libs/lucide-react.mjs";
import { a as DialogTitle, i as DialogHeader, n as DialogContent, r as DialogDescription, t as Dialog } from "./_ssr/dialog-a7o-Z0gv.mjs";
import { t as Input } from "./_ssr/input-CTGY0VK5.mjs";
import { t as Label } from "./_ssr/label-DoeUGlnV.mjs";
import { t as Textarea } from "./_ssr/textarea-DX0PyQtO.mjs";
import { d as useRouterState, m as Outlet, v as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { n as toast, t as Toaster } from "./_libs/sonner.mjs";
import { n as Portal, r as Provider, t as Content2 } from "./_libs/@radix-ui/react-tooltip+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_world-DYl89dB1.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var TooltipProvider = Provider;
var TooltipContent = import_react.forwardRef(({ className, sideOffset = 8, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	sideOffset,
	className: cn("z-50 overflow-hidden rounded-md bg-cream px-3 py-1.5 text-xs text-ink shadow-sm", className),
	...props
}) }));
TooltipContent.displayName = Content2.displayName;
function Onboarding() {
	const hydrated = useDwellStore((s) => s.hydrated);
	const done = useDwellStore((s) => s.onboardingComplete);
	const complete = useDwellStore((s) => s.completeOnboarding);
	const identity = useDwellStore((s) => s.identity);
	const [step, setStep] = (0, import_react.useState)(0);
	const [name, setName] = (0, import_react.useState)(identity.name === "You" ? "" : identity.name);
	const [craft, setCraft] = (0, import_react.useState)(identity.craft === "Wanderer" ? "" : identity.craft);
	const [letter, setLetter] = (0, import_react.useState)(identity.letter);
	const [hood, setHood] = (0, import_react.useState)(identity.neighborhoodId);
	if (!hydrated || done) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			showClose: false,
			className: "sm:max-w-lg",
			onPointerDownOutside: (e) => e.preventDefault(),
			onEscapeKeyDown: (e) => e.preventDefault(),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-[0.2em] text-terracotta",
						children: "Crossing the threshold"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, { children: [
						step === 0 && "This is not a feed.",
						step === 1 && "Who keeps this room?",
						step === 2 && "A letter for whoever visits."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, { children: [
						step === 0 && "In DWELL, you visit rooms instead of scrolling. Time spent is the signal. A keepsake is how you say you were here. A key is how you return.",
						step === 1 && "Your dwelling starts almost empty. Name it after yourself, or after the craft you are practicing.",
						step === 2 && "Every dwelling has a letter on the table. Write the first one. You can change it later."
					] })
				] }),
				step === 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "ob-name",
								children: "Your name"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "ob-name",
								value: name,
								onChange: (e) => setName(e.target.value),
								placeholder: "A name you answer to",
								autoComplete: "nickname"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "ob-craft",
								children: "Your craft"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "ob-craft",
								value: craft,
								onChange: (e) => setCraft(e.target.value),
								placeholder: "Baker, listener, cartographer…"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
							className: "grid gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
								className: "text-xs font-medium uppercase tracking-[0.16em] text-quiet",
								children: "Neighborhood"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-2 gap-2",
								children: neighborhoods.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => setHood(n.id),
									className: cn("rounded-lg px-3 py-3 text-left text-sm shadow-[0_0_0_1px_rgb(244_239_230/0.12)] transition-colors duration-150", hood === n.id ? "bg-ink-3 text-cream" : "text-quiet hover:text-cream"),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block font-medium text-cream",
										children: n.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-1 block text-xs",
										children: n.climate
									})]
								}, n.id))
							})]
						})
					]
				}) : null,
				step === 2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "ob-letter",
						children: "Letter to visitors"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						id: "ob-letter",
						value: letter,
						onChange: (e) => setLetter(e.target.value),
						rows: 5
					})]
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-3 pt-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs tabular-nums text-quiet",
						children: [step + 1, " / 3"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2",
						children: [step > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							onClick: () => setStep((s) => s - 1),
							children: "Back"
						}) : null, step < 2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							onClick: () => setStep((s) => s + 1),
							children: "Continue"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							onClick: () => complete({
								name: name.trim() || "You",
								craft: craft.trim() || "Wanderer",
								letter,
								neighborhoodId: hood
							}),
							children: "Light the room"
						})]
					})]
				})
			]
		})
	});
}
var nav = [
	{
		to: "/atlas",
		label: "Atlas",
		icon: Compass
	},
	{
		to: "/discover",
		label: "Discover",
		icon: Sparkles
	},
	{
		to: "/gather",
		label: "Hearths",
		icon: Flame
	},
	{
		to: "/letters",
		label: "Letters",
		icon: Mail
	},
	{
		to: "/me",
		label: "Dwelling",
		icon: DoorOpen
	}
];
function AppShell() {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const hydrated = useDwellStore((s) => s.hydrated);
	const people = useDwellStore((s) => s.people);
	const letters = useDwellStore((s) => s.letters);
	const arrivals = useDwellStore((s) => s.arrivals);
	const toasted = (0, import_react.useRef)(/* @__PURE__ */ new Set());
	(0, import_react.useEffect)(() => {
		rehydrateDwell();
	}, []);
	(0, import_react.useEffect)(() => {
		const tick = () => {
			const state = useDwellStore.getState();
			const now = Date.now();
			for (const letter of state.letters) {
				if (letter.fromId !== "you") continue;
				if (letter.arrivesAt > now) continue;
				if (toasted.current.has(letter.id)) continue;
				toasted.current.add(letter.id);
				const to = state.people.find((p) => p.id === letter.toId);
				toast(`Your letter reached ${to?.name ?? "them"}.`);
			}
		};
		tick();
		const id = window.setInterval(tick, 1500);
		return () => window.clearInterval(id);
	}, [letters, people]);
	const unreadLetters = letters.filter((l) => l.toId === "you" && !l.read && l.arrivesAt <= Date.now()).length;
	const unreadArrivals = arrivals.filter((a) => !a.read).length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TooltipProvider, {
		delayDuration: 200,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#main",
				className: "skip-link",
				children: "Skip to content"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-h-dvh bg-ink text-cream",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
						className: "sticky top-0 z-40 border-b border-cream/10 bg-ink/85 backdrop-blur-md",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto flex h-16 max-w-6xl items-center gap-3 px-4 sm:h-[4.25rem] sm:px-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/atlas",
									className: "flex items-center gap-2.5 rounded-md pr-1",
									"aria-label": "DWELL, back to atlas",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "flex size-8 items-center justify-center rounded-md bg-terracotta/15 text-terracotta",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DoorOpen, {
											className: "size-4",
											strokeWidth: 1.75
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-display text-lg tracking-tight",
										children: "DWELL"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
									"aria-label": "Primary",
									className: "ml-4 hidden items-center gap-1 md:flex",
									children: nav.map((item) => {
										const active = pathname === item.to || pathname.startsWith(`${item.to}/`);
										const Icon = item.icon;
										return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: item.to,
											"aria-current": active ? "page" : void 0,
											className: cn("inline-flex h-11 items-center gap-2 rounded-md px-3 text-sm transition-colors duration-150", active ? "text-cream" : "text-quiet hover:bg-ink-3 hover:text-cream"),
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
													className: "size-4",
													strokeWidth: 1.75
												}),
												item.label,
												item.to === "/letters" && unreadLetters > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "tabular-nums text-terracotta",
													children: unreadLetters
												}) : null
											]
										}, item.to);
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "ml-auto flex items-center gap-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/arrivals",
										"aria-label": unreadArrivals ? `${unreadArrivals} unread arrivals` : "Arrivals",
										className: "relative inline-flex size-11 items-center justify-center rounded-md text-quiet hover:bg-ink-3 hover:text-cream",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, {
											className: "size-4",
											strokeWidth: 1.75
										}), unreadArrivals > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute right-2 top-2 size-2 rounded-full bg-terracotta" }) : null]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/create",
										className: "inline-flex h-11 items-center gap-2 rounded-md bg-terracotta px-3.5 text-sm font-medium text-terracotta-fg transition-transform duration-150 active:scale-[0.96]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "hidden sm:inline",
											children: "Place a spark"
										})]
									})]
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						id: "main",
						tabIndex: -1,
						className: "outline-none",
						children: hydrated ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShellSkeleton, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						"aria-label": "Mobile",
						className: "fixed inset-x-0 bottom-0 z-40 border-t border-cream/10 bg-ink/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-md md:hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "grid grid-cols-5",
							children: nav.map((item) => {
								const active = pathname === item.to || pathname.startsWith(`${item.to}/`);
								const Icon = item.icon;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: item.to,
									"aria-current": active ? "page" : void 0,
									className: cn("flex h-14 flex-col items-center justify-center gap-1 text-[10px] uppercase tracking-[0.14em]", active ? "text-cream" : "text-quiet"),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
										className: "size-5",
										strokeWidth: 1.75
									}), item.label]
								}) }, item.to);
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-16 md:hidden" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Onboarding, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
				theme: "dark",
				position: "bottom-right",
				toastOptions: { style: {
					background: "#1c1916",
					color: "#f4efe6",
					border: "1px solid rgb(244 239 230 / 0.12)"
				} }
			})
		]
	});
}
function ShellSkeleton() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-10 sm:px-6",
		"aria-busy": "true",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-8 w-40 rounded-md bg-ink-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-6 h-64 rounded-xl bg-ink-3" })]
	});
}
var SplitComponent = AppShell;
//#endregion
export { SplitComponent as component };
