import Link from "next/link";
import { Hexagon } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-white/60 backdrop-blur-3xl border-t border-white pt-20 pb-12 z-10 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5 mb-16">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="relative">
                <div className="absolute inset-0 bg-violet-400 blur-[15px] opacity-20 group-hover:opacity-50 transition-opacity"></div>
                <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white shadow-lg shadow-violet-500/20 group-hover:scale-105 transition-transform">
                  <Hexagon className="h-6 w-6" />
                </div>
              </div>
              <span className="text-2xl font-bold tracking-tight text-slate-900 drop-shadow-sm">MicroSaaS</span>
            </Link>
            <p className="text-sm text-slate-600 leading-relaxed font-medium max-w-xs">
              Enterprise-grade multi-tenant platform for modern SaaS businesses. Built for scale.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-violet-700 uppercase tracking-widest mb-5">Product</h3>
            <ul className="space-y-4 text-sm font-medium text-slate-700">
              <li><Link href="/products" className="hover:text-violet-700 transition-colors">Features</Link></li>
              <li><Link href="/pricing" className="hover:text-violet-700 transition-colors">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-violet-700 uppercase tracking-widest mb-5">Company</h3>
            <ul className="space-y-4 text-sm font-medium text-slate-700">
              <li><Link href="/about" className="hover:text-violet-700 transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-violet-700 transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-violet-700 uppercase tracking-widest mb-5">Legal</h3>
            <ul className="space-y-4 text-sm font-medium text-slate-700">
              <li><Link href="/privacy" className="hover:text-violet-700 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-violet-700 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white pt-8 flex flex-col md:flex-row items-center justify-between text-sm font-medium text-slate-600">
          <p>© {new Date().getFullYear()} MicroSaaS Inc. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex gap-6">
            <Link href="#" className="hover:text-violet-700 transition-colors">Twitter</Link>
            <Link href="#" className="hover:text-violet-700 transition-colors">GitHub</Link>
            <Link href="#" className="hover:text-violet-700 transition-colors">LinkedIn</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
