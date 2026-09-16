import React from "react";
import { cn } from "@/lib/utils";

export const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-3xl bg-white/60 backdrop-blur-3xl p-8 border border-white",
        "shadow-[0_10px_40px_-10px_rgba(139,92,246,0.15),inset_0_1px_0_0_rgba(255,255,255,1)]",
        "transition-all duration-500",
        "hover:-translate-y-2 hover:bg-white/80 hover:border-violet-300 hover:shadow-[0_20px_60px_-15px_rgba(217,70,239,0.3),inset_0_1px_0_0_rgba(255,255,255,1)]",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/80 via-transparent to-transparent pointer-events-none opacity-50"></div>
      <div className="relative z-10">{props.children}</div>
    </div>
  )
);
Card.displayName = "Card";
