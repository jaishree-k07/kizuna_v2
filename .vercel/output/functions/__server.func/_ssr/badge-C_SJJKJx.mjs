import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { n as cn } from "./store-C8IrD_fr.mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/badge-C_SJJKJx.js
var import_jsx_runtime = require_jsx_runtime();
var badgeVariants = cva("inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.14em]", {
	variants: { variant: {
		default: "bg-ink-3 text-cream-dim",
		terracotta: "bg-terracotta/15 text-terracotta",
		sage: "bg-sage/20 text-cream",
		live: "bg-terracotta text-terracotta-fg",
		cream: "bg-cream/10 text-cream"
	} },
	defaultVariants: { variant: "default" }
});
function Badge({ className, variant, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn(badgeVariants({ variant }), className),
		...props
	});
}
//#endregion
export { Badge as t };
