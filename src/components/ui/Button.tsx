import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "glass" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-violet-500/50 disabled:opacity-50 disabled:pointer-events-none active:scale-95";
    
    const variants = {
      primary: "bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-[0_8px_30px_-5px_rgba(217,70,239,0.4)] hover:shadow-[0_15px_40px_-5px_rgba(217,70,239,0.6)] hover:-translate-y-1 hover:from-violet-500 hover:to-fuchsia-500 border border-white/20",
      secondary: "bg-slate-900 text-white border border-slate-900 shadow-[0_8px_30px_-5px_rgba(15,23,42,0.3)] hover:bg-slate-800 hover:shadow-[0_15px_40px_-5px_rgba(15,23,42,0.5)] hover:-translate-y-1",
      glass: "bg-white/70 backdrop-blur-2xl text-violet-700 border border-white shadow-[0_8px_30px_-5px_rgba(139,92,246,0.2),inset_0_1px_0_0_rgba(255,255,255,1)] hover:bg-white/90 hover:border-violet-200 hover:shadow-[0_15px_40px_-5px_rgba(139,92,246,0.4)] hover:-translate-y-1",
      ghost: "bg-transparent text-slate-700 hover:text-violet-700 hover:bg-white/50 backdrop-blur-md shadow-none",
    };
    
    const sizes = {
      sm: "h-10 px-5 text-sm",
      md: "h-12 px-6 text-base",
      lg: "h-14 px-10 text-lg",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {props.children}
      </button>
    );
  }
);
Button.displayName = "Button";
