import * as React from "react";
import { cn } from "@/lib/utils";

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "relative rounded-2xl border border-white/[0.08] bg-[#160F22]/60 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#FF5C5C]/40 hover:bg-[#1C142A]/80 hover:shadow-xl hover:shadow-[#FF5C5C]/10",
        className
      )}
      {...props}
    />
  );
}
