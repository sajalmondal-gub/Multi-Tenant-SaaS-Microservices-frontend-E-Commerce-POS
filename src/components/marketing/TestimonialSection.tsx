"use client";

import { motion } from "framer-motion";

export function TestimonialSection() {
  return (
    <section className="py-24 md:py-36 relative z-10 border-t border-white/60 bg-white/40 backdrop-blur-3xl shadow-[0_-10px_40px_rgba(139,92,246,0.02)]">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="flex justify-center mb-12">
            <div className="flex space-x-1.5 bg-white/80 backdrop-blur-2xl px-6 py-2.5 rounded-full border border-white shadow-[0_10px_30px_rgba(139,92,246,0.1),inset_0_1px_0_0_rgba(255,255,255,1)] transition-transform hover:scale-105 duration-300">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6 text-fuchsia-500 drop-shadow-[0_2px_4px_rgba(217,70,239,0.2)]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
            
          <blockquote className="text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900 leading-tight mb-14 tracking-tight drop-shadow-sm">
            "We migrated our monolithic application to MicroSaaS in less than two weeks. Our enterprise clients love the dedicated performance, and we saved months of engineering time."
          </blockquote>
            
          <div className="flex items-center justify-center gap-5">
            <div className="relative">
               <div className="absolute inset-0 bg-violet-400 blur-[25px] opacity-30 rounded-full"></div>
               <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-3xl flex items-center justify-center border border-white shadow-[0_10px_30px_rgba(139,92,246,0.15),inset_0_1px_0_0_rgba(255,255,255,1)] relative z-10 overflow-hidden hover:scale-110 transition-transform duration-300 cursor-default">
                 <span className="text-lg font-bold text-violet-700 drop-shadow-sm">JD</span>
               </div>
            </div>
            <div className="text-left">
              <div className="font-semibold text-slate-900 text-xl tracking-tight">Jane Doe</div>
              <div className="text-violet-700 font-semibold text-xs tracking-widest uppercase mt-1">CTO at TechFlow</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
