import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-3xl relative z-10">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-slate-900 mb-6 drop-shadow-sm">
          Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-fuchsia-600 to-violet-600">Touch</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-700 font-medium">
          Have questions about Enterprise plans or need technical support? We're here to help.
        </p>
      </div>
      
      <Card className="p-8 md:p-12">
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-800 tracking-wide uppercase">First Name</label>
              <input type="text" placeholder="Jane" className="w-full bg-white/70 backdrop-blur-md border border-white rounded-xl px-4 py-4 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-300 transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-800 tracking-wide uppercase">Last Name</label>
              <input type="text" placeholder="Doe" className="w-full bg-white/70 backdrop-blur-md border border-white rounded-xl px-4 py-4 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-300 transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-800 tracking-wide uppercase">Work Email</label>
            <input type="email" placeholder="jane@company.com" className="w-full bg-white/70 backdrop-blur-md border border-white rounded-xl px-4 py-4 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-300 transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-800 tracking-wide uppercase">How can we help?</label>
            <textarea rows={5} placeholder="Tell us about your needs..." className="w-full bg-white/70 backdrop-blur-md border border-white rounded-xl px-4 py-4 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-300 transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] resize-none"></textarea>
          </div>
          <Button variant="primary" size="lg" className="w-full mt-4">Send Message</Button>
        </form>
      </Card>
    </div>
  );
}
