import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-[transform,background-color,color,opacity,box-shadow] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 focus-visible:ring-offset-ink disabled:pointer-events-none disabled:opacity-40 active:not-disabled:scale-[0.96] [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-terracotta text-terracotta-fg hover:bg-terracotta/90",
        cream: "bg-cream text-ink hover:bg-cream-dim",
        outline:
          "text-cream shadow-[0_0_0_1px_rgb(244_239_230/0.16)] hover:bg-ink-3",
        ghost: "text-cream hover:bg-ink-3",
        sage: "bg-sage text-cream hover:bg-sage/90",
        link: "text-cream underline-offset-4 hover:underline h-auto px-0",
      },
      size: {
        default: "h-11 px-4 rounded-md text-sm",
        sm: "h-9 px-3 rounded-sm text-sm",
        lg: "h-12 px-5 rounded-lg text-base",
        icon: "size-11 rounded-md",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
