import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Check } from "lucide-react";

export default function PricingPage() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-5xl relative z-10">
      <div className="text-center mb-20">
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-slate-900 mb-6 drop-shadow-sm">
          Simple, transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-fuchsia-600 to-violet-600">pricing</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-700 font-medium">No hidden fees. No surprise charges.</p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { name: "Starter", price: "$49", features: ["Up to 1,000 users", "Custom domain", "Community support"] },
          { name: "Pro", price: "$99", features: ["Up to 10,000 users", "Custom domain", "Priority support", "Advanced analytics"], highlighted: true },
          { name: "Enterprise", price: "Custom", features: ["Unlimited users", "Custom SLA", "Dedicated success manager", "Custom integrations"] },
        ].map((plan, i) => (
          <Card key={i} className={`flex flex-col h-full relative ${plan.highlighted ? 'border-violet-300 bg-white/70 shadow-[0_20px_60px_-15px_rgba(217,70,239,0.2),inset_0_1px_0_0_rgba(255,255,255,1)] hover:border-violet-400 hover:shadow-[0_25px_60px_-15px_rgba(217,70,239,0.3),inset_0_1px_0_0_rgba(255,255,255,1)]' : ''}`}>
            {plan.highlighted && (
              <div className="absolute top-0 right-0 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white text-[10px] font-bold px-4 py-1.5 rounded-bl-2xl rounded-tr-3xl uppercase tracking-widest shadow-[0_5px_15px_rgba(217,70,239,0.3)]">
                Most Popular
              </div>
            )}
            <h3 className="text-2xl font-semibold text-slate-900 mb-2">{plan.name}</h3>
            <div className="text-5xl font-semibold text-slate-900 mb-8 tracking-tight">{plan.price}<span className="text-xl text-slate-500 font-medium">/mo</span></div>
            <ul className="space-y-4 mb-10 flex-1">
              {plan.features.map((feature, j) => (
                <li key={j} className="flex items-center text-sm text-slate-700 font-medium">
                  <Check className="h-5 w-5 text-violet-600 mr-3 shrink-0 drop-shadow-[0_0_8px_rgba(139,92,246,0.3)]" />
                  {feature}
                </li>
              ))}
            </ul>
            <Button variant={plan.highlighted ? "primary" : "glass"} size="lg" className="w-full">
              Get Started
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
