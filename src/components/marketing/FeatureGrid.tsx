"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Shield, Zap, Globe, Users, CreditCard, Layout } from "lucide-react";

const features = [
  {
    title: "Automated Domains",
    description: "Instantly provision SSL certificates and custom domains globally.",
    icon: Globe,
    color: "from-blue-500 to-violet-500",
  },
  {
    title: "Ironclad Isolation",
    description: "Enterprise-grade database isolation ensuring data never leaks.",
    icon: Shield,
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    title: "Edge Performance",
    description: "Built on serverless edge infrastructure for sub-50ms latency.",
    icon: Zap,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Role Management",
    description: "Out-of-the-box RBAC for your tenants to manage their teams.",
    icon: Users,
    color: "from-fuchsia-500 to-rose-500",
  },
  {
    title: "Stripe Billing",
    description: "Fully automated metered billing, subscriptions, and invoicing.",
    icon: CreditCard,
    color: "from-pink-500 to-orange-500",
  },
  {
    title: "White-label UI",
    description: "Customizable UI components matching your exact brand identity.",
    icon: Layout,
    color: "from-rose-500 to-amber-500",
  },
];

export function FeatureGrid() {
  return (
    <section className="py-24 md:py-32 relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mb-20 text-center mx-auto">
          <div className="inline-block px-5 py-2 rounded-full bg-white/70 backdrop-blur-2xl border border-white shadow-[0_10px_30px_-10px_rgba(139,92,246,0.15)] mb-6">
            <h2 className="text-violet-700 font-bold tracking-widest text-xs uppercase">Enterprise Capabilities</h2>
          </div>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 mb-6 drop-shadow-sm">
            Everything required to scale
          </h3>
          <p className="text-lg text-slate-700 font-medium">
            Stop rebuilding foundational components. MicroSaaS provides the complete primitive toolkit for B2B applications.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col group">
                <div className="relative mb-8">
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} blur-[15px] opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>
                  <div className={`relative h-16 w-16 rounded-[1.2rem] bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-[0_10px_20px_rgba(0,0,0,0.1),inset_0_1px_0_0_rgba(255,255,255,0.4)] group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500`}>
                    <feature.icon className="h-8 w-8 text-white drop-shadow-sm" />
                  </div>
                </div>
                <h4 className="text-2xl font-semibold text-slate-900 mb-3 tracking-tight">{feature.title}</h4>
                <p className="text-base text-slate-600 leading-relaxed font-medium">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
