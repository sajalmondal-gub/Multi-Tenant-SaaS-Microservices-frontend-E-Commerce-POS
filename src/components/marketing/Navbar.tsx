import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Hexagon } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/50 backdrop-blur-3xl border-b border-white shadow-[0_10px_40px_-10px_rgba(139,92,246,0.1)] transition-all duration-300">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
             <div className="absolute inset-0 bg-violet-400 blur-[20px] opacity-30 group-hover:opacity-70 transition-opacity"></div>
             <div className="relative flex h-10 w-10 items-center justify-center rounded-[0.8rem] bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white shadow-[0_5px_15px_rgba(217,70,239,0.3),inset_0_1px_0_0_rgba(255,255,255,0.4)] group-hover:scale-110 transition-transform duration-300">
               <Hexagon className="h-6 w-6" />
             </div>
          </div>
          <span className="text-2xl font-bold tracking-tight text-slate-900 drop-shadow-sm">
            MicroSaaS
          </span>
        </Link>
        <nav className="hidden md:flex gap-8">
          <Link href="/products" className="text-sm font-semibold text-slate-700 hover:text-violet-700 transition-colors tracking-wide drop-shadow-sm">Products</Link>
          <Link href="/pricing" className="text-sm font-semibold text-slate-700 hover:text-violet-700 transition-colors tracking-wide drop-shadow-sm">Pricing</Link>
          <Link href="/about" className="text-sm font-semibold text-slate-700 hover:text-violet-700 transition-colors tracking-wide drop-shadow-sm">About</Link>
          <Link href="/contact" className="text-sm font-semibold text-slate-700 hover:text-violet-700 transition-colors tracking-wide drop-shadow-sm">Contact</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/login" className="hidden sm:block">
            <Button variant="ghost" size="sm" className="font-semibold tracking-wide">Log in</Button>
          </Link>
          <Link href="/signup">
            <Button size="sm">Get started</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
