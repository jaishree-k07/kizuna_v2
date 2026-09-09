import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { d as useDwellStore, n as cn } from "./store-C8IrD_fr.mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { t as Button } from "./button-DSUHlcZ-.mjs";
import { t as Input } from "./input-CTGY0VK5.mjs";
import { t as Label } from "./label-DoeUGlnV.mjs";
import { t as Textarea } from "./textarea-DX0PyQtO.mjs";
import { y as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/create-C-QK_7zR.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var moods = [
	"threshold",
	"clay",
	"dusk",
	"ember",
	"chlorophyll",
	"ink",
	"starlight",
	"silver",
	"steam"
];
function CreatePage() {
	const addSpark = useDwellStore((s) => s.addSpark);
	const navigate = useNavigate();
	const [title, setTitle] = (0, import_react.useState)("");
	const [body, setBody] = (0, import_react.useState)("");
	const [mood, setMood] = (0, import_react.useState)("threshold");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-xl px-4 py-10 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs uppercase tracking-[0.2em] text-terracotta",
				children: "Content with a body"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl tracking-tight",
				children: "Place a spark"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-base leading-relaxed text-cream-dim",
				children: "A spark lives in your dwelling. It is not broadcast. People find it by visiting you — the way a note is found on a table."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "mt-8 grid gap-5",
				onSubmit: (e) => {
					e.preventDefault();
					if (!title.trim() || !body.trim()) return;
					addSpark(title.trim(), body.trim(), mood);
					toast("The spark is on the table.");
					navigate({
						to: "/dwell/$id",
						params: { id: "you" }
					});
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "title",
							children: "Title"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "title",
							value: title,
							onChange: (e) => setTitle(e.target.value),
							placeholder: "The bowl that leaked"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "body",
							children: "What the room kept"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
							id: "body",
							value: body,
							onChange: (e) => setBody(e.target.value),
							rows: 7,
							placeholder: "Write as if someone will sit with this, not skim it."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
						className: "grid gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
							className: "text-xs font-medium uppercase tracking-[0.16em] text-quiet",
							children: "Mood"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-2",
							children: moods.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setMood(m),
								className: cn("h-11 rounded-full px-3 text-sm capitalize", mood === m ? "bg-cream text-ink" : "text-cream-dim shadow-[0_0_0_1px_rgb(244_239_230/0.14)]"),
								children: m
							}, m))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						children: "Lay it in the room"
					})
				]
			})
		]
	});
}
//#endregion
export { CreatePage as component };
