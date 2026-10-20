import * as React from "react";
import { cn } from "@/lib/utils";

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "relative rounded-2xl border border-zinc-800/80 bg-zinc-900/50 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/40 hover:bg-zinc-900/80 hover:shadow-xl hover:shadow-indigo-500/10",
        className
      )}
      {...props}
    />
  );
}
