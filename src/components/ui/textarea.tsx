import * as React from "react";
import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => (
  <textarea
    className={cn(
      "flex min-h-32 w-full rounded-lg bg-ink-3 px-3 py-3 text-sm text-cream shadow-[0_0_0_1px_rgb(244_239_230/0.14)] placeholder:text-quiet transition-[box-shadow] duration-150 focus-visible:outline-none focus-visible:shadow-[0_0_0_2px_var(--color-terracotta)] disabled:cursor-not-allowed disabled:opacity-50",
      className,
    )}
    ref={ref}
    {...props}
  />
));
Textarea.displayName = "Textarea";

export { Textarea };
