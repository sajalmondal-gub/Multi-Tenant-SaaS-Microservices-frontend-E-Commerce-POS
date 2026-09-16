"use client";

import { TenantThemeProvider } from "@/components/tenant/ThemeProvider";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  Users, 
  Settings, 
  Bell, 
  LogOut,
  Search,
  Menu,
  Leaf,
  Calculator,
  Truck
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function TenantAdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false); // Mobile
  const [desktopSidebarCollapsed, setDesktopSidebarCollapsed] = useState(false); // Desktop
  const params = useParams();
  const domain = params?.domain as string || "demo.com";
  const pathname = usePathname();

  const navigation = [
    { name: "Dashboard", href: `/`, icon: LayoutDashboard },
    { name: "POS", href: `/pos`, icon: Calculator },
    { name: "Orders", href: `/orders`, icon: ShoppingCart },
    { name: "Products", href: `/products`, icon: Package },
    { name: "Purchase", href: `/purchase`, icon: Truck },
    { name: "Customers", href: `/customers`, icon: Users },
    { name: "Settings", href: `/settings`, icon: Settings },
  ];

  if (pathname?.endsWith('/pos')) {
    return (
      <TenantThemeProvider>
        <main className="h-screen w-screen bg-tenant-bg overflow-hidden font-sans">
          {children}
        </main>
      </TenantThemeProvider>
    );
  }

  return (
    <TenantThemeProvider>
      <div className="flex h-screen bg-tenant-bg font-sans overflow-hidden">
        {/* Mobile Sidebar Overlay */}
        <div 
          className={cn(
            "fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300",
            sidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          )}
          onClick={() => setSidebarOpen(false)}
        />

        {/* Sidebar */}
        <aside 
          className={cn(
            "fixed inset-y-0 left-0 z-50 bg-tenant-secondary border-r border-tenant-muted/10 transform transition-all duration-300 ease-in-out lg:relative flex flex-col",
            sidebarOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full lg:translate-x-0",
            desktopSidebarCollapsed ? "lg:w-20" : "w-72"
          )}
        >
          {/* Logo */}
          <div className="h-20 flex items-center px-6 border-b border-tenant-muted/10 bg-tenant-secondary/50 overflow-hidden shrink-0">
            <Link href={`http://${domain}:3000`} className="flex items-center gap-3 group whitespace-nowrap">
              <div className="h-10 w-10 shrink-0 rounded-xl bg-tenant-primary flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                <Leaf className="h-6 w-6 text-tenant-primary-foreground" />
              </div>
              <div className={cn("transition-opacity duration-200", desktopSidebarCollapsed ? "lg:opacity-0 lg:w-0" : "opacity-100")}>
                <span className="text-xl font-extrabold tracking-tight text-tenant-text block">
                  Store Admin
                </span>
                <span className="text-[10px] uppercase font-bold text-tenant-muted tracking-widest">{domain}</span>
              </div>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-4 space-y-2 overflow-x-hidden">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all duration-200 group whitespace-nowrap",
                    isActive 
                      ? "bg-tenant-primary text-tenant-primary-foreground shadow-md" 
                      : "text-tenant-text hover:bg-tenant-primary/10 hover:text-tenant-primary",
                    desktopSidebarCollapsed ? "lg:px-2 lg:justify-center" : ""
                  )}
                  title={desktopSidebarCollapsed ? item.name : undefined}
                >
                  <item.icon className={cn("h-5 w-5 shrink-0", isActive ? "text-tenant-primary-foreground" : "text-tenant-muted group-hover:text-tenant-primary")} />
                  <span className={cn("transition-all duration-200", desktopSidebarCollapsed ? "lg:opacity-0 lg:w-0 lg:hidden" : "opacity-100")}>
                    {item.name}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* User & Logout */}
          <div className="p-4 border-t border-tenant-muted/10 overflow-hidden shrink-0">
            <button 
              className={cn(
                "flex items-center gap-3 px-4 py-3 w-full rounded-xl font-bold text-tenant-text hover:bg-red-50 hover:text-red-600 transition-colors group whitespace-nowrap",
                desktopSidebarCollapsed ? "lg:px-2 lg:justify-center" : ""
              )}
              title={desktopSidebarCollapsed ? "Log out" : undefined}
            >
              <LogOut className="h-5 w-5 shrink-0 text-tenant-muted group-hover:text-red-600" />
              <span className={cn("transition-all duration-200", desktopSidebarCollapsed ? "lg:opacity-0 lg:w-0 lg:hidden" : "opacity-100")}>
                Log out
              </span>
            </button>
          </div>
        </aside>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
          {/* Top Header */}
          <header className="h-20 bg-tenant-bg border-b border-tenant-muted/10 flex items-center justify-between px-4 lg:px-8 shrink-0 relative z-10 shadow-sm transition-all duration-300">
            <div className="flex items-center gap-4">
              {/* Mobile Menu Toggle */}
              <button 
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 rounded-lg text-tenant-text hover:bg-tenant-secondary transition-colors"
              >
                <Menu className="h-6 w-6" />
              </button>

              {/* Desktop Menu Toggle */}
              <button 
                onClick={() => setDesktopSidebarCollapsed(!desktopSidebarCollapsed)}
                className="hidden lg:block p-2 rounded-lg text-tenant-text hover:bg-tenant-secondary transition-colors"
                title="Toggle Sidebar"
              >
                <Menu className="h-6 w-6" />
              </button>
              
              {/* Search Bar */}
              <div className="hidden sm:flex items-center relative max-w-md w-full">
                <Search className="absolute left-3 h-5 w-5 text-tenant-muted" />
                <input 
                  type="text" 
                  placeholder="Search orders, products..." 
                  className="w-80 h-10 pl-10 pr-4 rounded-xl border border-tenant-muted/20 bg-tenant-secondary/50 focus:outline-none focus:border-tenant-primary focus:ring-1 focus:ring-tenant-primary transition-all text-sm font-medium text-tenant-text placeholder:text-tenant-muted"
                />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button className="relative p-2 rounded-full text-tenant-muted hover:bg-tenant-secondary hover:text-tenant-primary transition-colors">
                <Bell className="h-5 w-5" />
                <span className="absolute top-1 right-1 h-2.5 w-2.5 rounded-full bg-tenant-accent border-2 border-tenant-bg"></span>
              </button>
              <div className="h-8 w-px bg-tenant-muted/20 mx-2"></div>
              <div className="flex items-center gap-3">
                <div className="text-right hidden sm:block">
                  <p className="text-sm font-bold text-tenant-text">Store Owner</p>
                  <p className="text-xs font-semibold text-tenant-muted">Admin Role</p>
                </div>
                <div className="h-10 w-10 rounded-full bg-tenant-primary/20 border-2 border-tenant-primary flex items-center justify-center text-tenant-primary font-bold">
                  SO
                </div>
              </div>
            </div>
          </header>

          {/* Page Content */}
          <main className="flex-1 overflow-y-auto bg-tenant-secondary/30 p-4 lg:p-8">
            {children}
          </main>
        </div>
      </div>
    </TenantThemeProvider>
  );
}
