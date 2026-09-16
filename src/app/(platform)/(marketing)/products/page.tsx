import { FeatureGrid } from "@/components/marketing/FeatureGrid";

export default function ProductsPage() {
  return (
    <div className="relative z-10 pt-16">
      <div className="container mx-auto px-4 text-center">
         <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-slate-900 mb-6 drop-shadow-sm">
          Platform <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-fuchsia-600 to-violet-600">Features</span>
         </h1>
         <p className="text-lg md:text-xl text-slate-700 font-medium max-w-2xl mx-auto">
            Explore the primitive components that make up the MicroSaaS ecosystem.
         </p>
      </div>
      <FeatureGrid />
    </div>
  );
}
