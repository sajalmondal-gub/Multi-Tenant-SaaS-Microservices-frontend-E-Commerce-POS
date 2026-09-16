import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="w-full max-w-md">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 mb-2">
          Welcome back
        </h1>
        <p className="text-slate-600 font-medium">
          Enter your details to sign in to your account
        </p>
      </div>

      <Card className="p-8">
        <form className="space-y-5">
          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-800 tracking-wide uppercase">Email address</label>
            <input 
              type="email" 
              placeholder="jane@company.com" 
              className="w-full bg-white/70 backdrop-blur-md border border-white rounded-xl px-4 py-3.5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-300 transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]" 
            />
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="text-xs font-semibold text-slate-800 tracking-wide uppercase">Password</label>
              <Link href="/forgot-password" className="text-xs font-semibold text-violet-600 hover:text-violet-800 transition-colors">
                Forgot password?
              </Link>
            </div>
            <input 
              type="password" 
              placeholder="••••••••" 
              className="w-full bg-white/70 backdrop-blur-md border border-white rounded-xl px-4 py-3.5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-300 transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]" 
            />
          </div>

          <Button variant="primary" className="w-full mt-2 h-12">
            Sign In
          </Button>
        </form>

        <div className="mt-8 text-center text-sm font-medium text-slate-600">
          Don't have an account?{" "}
          <Link href="/signup" className="text-violet-700 hover:text-violet-900 font-semibold transition-colors">
            Sign up
          </Link>
        </div>
      </Card>
    </div>
  );
}
