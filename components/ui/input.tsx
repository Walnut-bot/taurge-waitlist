import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-12 w-full rounded-xl border border-white/10 bg-[#160F22]/90 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-500 shadow-inner backdrop-blur-md transition-all duration-200 focus:border-[#FF5C5C] focus:bg-[#1A1228] focus:outline-none focus:ring-2 focus:ring-[#FF5C5C]/30 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
