"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative pt-24 pb-28 md:pt-32 md:pb-36 overflow-hidden border-b border-violet-100">
      {/* Intense Glowing Aura around Hero - Light Mode */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] max-w-[700px] max-h-[700px] rounded-full bg-gradient-to-tr from-fuchsia-400/40 via-violet-400/40 to-blue-400/40 blur-[150px] mix-blend-multiply pointer-events-none"></div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/70 backdrop-blur-3xl border border-white shadow-[0_10px_30px_-5px_rgba(139,92,246,0.15)] mb-10 transition-transform duration-500 hover:-translate-y-1 hover:shadow-[0_15px_40px_-5px_rgba(217,70,239,0.25)] cursor-default">
            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 shadow-[0_0_15px_rgba(217,70,239,0.4)]">
              <Sparkles className="h-3 w-3 text-white" />
            </div>
            <span className="text-slate-800 font-bold text-xs tracking-wide">Introducing MicroSaaS Enterprise 2.0</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] mb-8 text-slate-900">
            The infrastructure for <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-fuchsia-600 to-violet-600 animate-pulse" style={{ animationDuration: '4s' }}>
              next-gen SaaS
            </span>
          </h1>
          
          <p className="mt-8 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed text-slate-700 font-medium">
            Deploy, scale, and manage multi-tenant applications with zero configuration. We handle the custom domains, tenant isolation, and billing instantly.
          </p>
          
          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-5">
            <Link href="/signup">
              <Button size="lg" className="w-full sm:w-auto group">
                Start building for free
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1.5 transition-transform" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="glass" size="lg" className="w-full sm:w-auto">
                Book a demo
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
