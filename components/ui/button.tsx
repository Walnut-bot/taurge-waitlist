import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "secondary";
  size?: "default" | "sm" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5C5C] disabled:pointer-events-none disabled:opacity-50 cursor-pointer active:scale-[0.98]";
    
    const variants = {
      default:
        "bg-gradient-to-r from-[#FF5C5C] via-[#FF4D4D] to-[#E63946] text-white shadow-lg shadow-[#FF5C5C]/25 hover:shadow-[#FF5C5C]/40 hover:brightness-105 border border-[#FF7A7A]/40",
      outline:
        "border border-white/10 bg-white/[0.04] text-zinc-100 hover:bg-white/[0.08] hover:border-[#FF5C5C]/40 backdrop-blur-sm",
      secondary:
        "bg-zinc-800/80 text-zinc-100 hover:bg-zinc-700 hover:text-white border border-zinc-700/50",
      ghost: "hover:bg-white/[0.06] text-zinc-300 hover:text-white",
    };

    const sizes = {
      default: "h-12 px-6 py-2.5",
      sm: "h-9 rounded-lg px-3.5 text-xs",
      lg: "h-14 rounded-2xl px-8 text-base",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
