import { Navbar } from "@/components/marketing/Navbar";
import { Footer } from "@/components/marketing/Footer";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#FAFAFA] selection:bg-violet-200 selection:text-violet-900 overflow-x-hidden font-sans text-slate-700">
      {/* Light Vibrant Aurora Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Soft base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-50/50 via-white to-fuchsia-50/50"></div>
        
        {/* Glowing Orbs - Using multiply for light theme */}
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-violet-300/40 blur-[100px] mix-blend-multiply animate-[spin_30s_linear_infinite]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-fuchsia-300/40 blur-[100px] mix-blend-multiply animate-[spin_25s_linear_infinite_reverse]"></div>
        <div className="absolute top-[30%] left-[20%] w-[60vw] h-[30vw] rounded-full bg-blue-300/30 blur-[120px] mix-blend-multiply animate-pulse" style={{ animationDuration: '8s' }}></div>
      </div>

      <Navbar />
      <main className="flex-1 relative z-10 w-full backdrop-blur-[2px]">
        {children}
      </main>
      <Footer />
    </div>
  );
}
