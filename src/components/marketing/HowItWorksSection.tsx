"use client";

import { motion } from "framer-motion";
import { Server, ShieldCheck, Rocket } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Deploy Infrastructure",
    description: "Connect your repo and we provision databases and edge computing.",
    icon: Server,
  },
  {
    id: "02",
    title: "Configure Tenants",
    description: "Set up billing plans, roles, and onboarding flows via our API.",
    icon: ShieldCheck,
  },
  {
    id: "03",
    title: "Scale Globally",
    description: "Customers connect custom domains and experience sub-50ms latency.",
    icon: Rocket,
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden z-10 border-t border-white/40 bg-white/30 backdrop-blur-3xl shadow-[0_-10px_40px_rgba(139,92,246,0.02)]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-block px-5 py-2 rounded-full bg-white/70 backdrop-blur-2xl border border-white shadow-[0_10px_30px_-10px_rgba(139,92,246,0.15)] mb-6">
            <h2 className="text-violet-700 font-bold tracking-widest uppercase text-xs">The Process</h2>
          </div>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 mb-6 drop-shadow-sm">
            From Code to Enterprise
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 relative max-w-5xl mx-auto">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-[2px] bg-white/80 shadow-[0_0_15px_rgba(255,255,255,1)] -z-10 rounded-full"></div>

          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative text-center flex flex-col items-center group"
            >
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-violet-400 blur-[25px] opacity-20 group-hover:opacity-40 transition-opacity duration-500 rounded-full"></div>
                <div className="relative w-24 h-24 rounded-[2rem] bg-white/80 backdrop-blur-3xl border border-white shadow-[0_15px_40px_-10px_rgba(139,92,246,0.15),inset_0_1px_0_0_rgba(255,255,255,1)] flex items-center justify-center transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-105 group-hover:shadow-[0_25px_60px_-15px_rgba(217,70,239,0.3)] group-hover:border-violet-200">
                  <step.icon className="h-10 w-10 text-violet-600 drop-shadow-sm group-hover:text-fuchsia-600 transition-colors duration-300" strokeWidth={1.5} />
                </div>
              </div>
              <div className="text-violet-700 font-bold text-lg mb-3 tracking-widest">{step.id}</div>
              <h4 className="text-2xl font-semibold text-slate-900 mb-3 tracking-tight">{step.title}</h4>
              <p className="text-base text-slate-600 leading-relaxed font-medium max-w-xs">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
