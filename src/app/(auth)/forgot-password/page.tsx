import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ForgotPasswordPage() {
  return (
    <div className="w-full max-w-md">
      <div className="mb-6">
        <Link href="/login" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to login
        </Link>
      </div>

      <div className="text-center mb-8">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 mb-2">
          Forgot password?
        </h1>
        <p className="text-slate-600 font-medium">
          Enter your email and we'll send you a reset link
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

          <Button variant="primary" className="w-full mt-2 h-12">
            Send Reset Link
          </Button>
        </form>
      </Card>
    </div>
  );
}
