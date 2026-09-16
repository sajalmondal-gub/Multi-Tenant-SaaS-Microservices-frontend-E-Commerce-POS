import { Card } from "@/components/ui/Card";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl relative z-10">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-slate-900 mb-6 drop-shadow-sm">
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-fuchsia-600 to-violet-600">Mission</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-700 font-medium leading-relaxed">
          We believe that building SaaS should be about focusing on your product, not reinventing the infrastructure.
        </p>
      </div>
      
      <Card className="prose prose-lg max-w-none text-slate-700 font-medium p-8 md:p-14">
        <h2 className="text-3xl font-semibold text-slate-900 mb-6">The Story</h2>
        <p className="mb-6 leading-relaxed">
          MicroSaaS was born out of frustration. After building our fifth SaaS product and realizing we spent 80% of our time setting up authentication, billing, and tenant isolation, we knew there had to be a better way.
        </p>
        <p className="mb-6 leading-relaxed">
          We built the platform we wished we had. A platform that takes a git repository and instantly provides a production-ready, multi-tenant environment capable of scaling to millions of users.
        </p>
        <h2 className="text-3xl font-semibold text-slate-900 mt-12 mb-6">Our Team</h2>
        <p className="leading-relaxed">
          We are a globally distributed team of engineers, designers, and operators who have scaled products at some of the world's fastest-growing companies.
        </p>
      </Card>
    </div>
  );
}
