import { n as cn } from "./store-C8IrD_fr.mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/film-image-BzI2LKN-.js
var import_jsx_runtime = require_jsx_runtime();
function FilmImage({ src, alt, className, imgClassName, priority, sizes }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("relative overflow-hidden bg-ink-3", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src,
			alt,
			sizes,
			loading: priority ? "eager" : "lazy",
			fetchPriority: priority ? "high" : "auto",
			className: cn("h-full w-full object-cover", imgClassName)
		})
	});
}
//#endregion
export { FilmImage as t };
