"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Hexagon, LayoutDashboard, Users, CreditCard, Settings, LogOut, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  isCollapsed?: boolean;
}

export function Sidebar({ isOpen, onClose, isCollapsed = false }: SidebarProps) {
  const pathname = usePathname();

  const links = [
    { name: "Overview", href: "/super-admin", icon: LayoutDashboard },
    { name: "Tenants", href: "/super-admin/tenants", icon: Users },
    { name: "Billing", href: "/super-admin/billing", icon: CreditCard },
    { name: "Settings", href: "/super-admin/settings", icon: Settings },
  ];

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar Content */}
      <aside
        className={cn(
          "fixed top-0 left-0 z-50 h-screen bg-[#0F172A] border-r border-slate-800 transition-all duration-300 ease-in-out flex flex-col shadow-xl",
          isOpen ? "translate-x-0 w-64" : "-translate-x-full lg:translate-x-0",
          isCollapsed ? "lg:w-20" : "lg:w-64"
        )}
      >
        <div className="flex h-16 items-center justify-between px-6 border-b border-slate-800/60 bg-[#0B1120] overflow-hidden whitespace-nowrap">
          <Link href="/super-admin" className="flex items-center gap-3">
            <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-violet-600 shadow-[0_0_15px_rgba(124,58,237,0.5)] shrink-0">
              <Hexagon className="h-5 w-5 text-white" />
            </div>
            <span className={cn("text-lg font-bold tracking-tight text-white transition-opacity duration-300", isCollapsed ? "opacity-0 lg:hidden" : "opacity-100")}>
              SuperAdmin
            </span>
          </Link>
          <button onClick={onClose} className="lg:hidden text-slate-400 hover:text-white transition-colors shrink-0">
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-2 overflow-x-hidden">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "flex items-center rounded-lg font-semibold transition-all duration-200 group relative",
                  isCollapsed ? "justify-center p-3" : "gap-3 px-3 py-2.5",
                  isActive 
                    ? "bg-violet-600/10 text-violet-400 border border-violet-500/20 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]" 
                    : "text-slate-400 hover:bg-slate-800/50 hover:text-slate-200 border border-transparent"
                )}
                title={isCollapsed ? link.name : undefined}
              >
                <link.icon className={cn("shrink-0", isCollapsed ? "h-6 w-6" : "h-4 w-4", isActive ? "text-violet-400 drop-shadow-[0_0_8px_rgba(167,139,250,0.5)]" : "text-slate-500 group-hover:text-slate-300")} />
                <span className={cn("transition-opacity duration-300 whitespace-nowrap", isCollapsed ? "hidden opacity-0" : "block opacity-100")}>
                  {link.name}
                </span>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-slate-800 bg-[#0B1120] overflow-hidden">
          <Button 
            variant="ghost" 
            className={cn(
              "w-full text-slate-400 hover:text-white hover:bg-slate-800/50 font-semibold transition-all duration-300",
              isCollapsed ? "justify-center px-0" : "justify-start"
            )}
            title={isCollapsed ? "Sign Out" : undefined}
          >
            <LogOut className={cn("shrink-0", isCollapsed ? "h-5 w-5 m-0" : "h-4 w-4 mr-3")} />
            <span className={cn("transition-opacity duration-300 whitespace-nowrap", isCollapsed ? "hidden opacity-0" : "block opacity-100")}>
              Sign Out
            </span>
          </Button>
        </div>
      </aside>
    </>
  );
}
