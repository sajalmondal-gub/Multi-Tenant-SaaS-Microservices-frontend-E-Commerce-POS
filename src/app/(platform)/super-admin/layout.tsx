"use client";

import { useState } from "react";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { Topbar } from "@/components/dashboard/Topbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [desktopSidebarCollapsed, setDesktopSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-900 selection:bg-violet-200 selection:text-violet-900">
      <Sidebar 
        isOpen={mobileSidebarOpen} 
        onClose={() => setMobileSidebarOpen(false)}
        isCollapsed={desktopSidebarCollapsed}
      />
      
      <div 
        className={`flex flex-col min-h-screen transition-all duration-300 ease-in-out ${desktopSidebarCollapsed ? 'lg:ml-20' : 'lg:ml-64'}`}
      >
        <Topbar 
          onOpenMobileSidebar={() => setMobileSidebarOpen(true)} 
          onToggleDesktopSidebar={() => setDesktopSidebarCollapsed(!desktopSidebarCollapsed)}
          isDesktopCollapsed={desktopSidebarCollapsed}
        />
        
        <main className="flex-1 p-4 lg:p-8 overflow-x-hidden">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
