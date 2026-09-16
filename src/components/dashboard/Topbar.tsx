"use client";

import { Bell, Menu, Search, AlignLeft } from "lucide-react";

interface TopbarProps {
  onOpenMobileSidebar: () => void;
  onToggleDesktopSidebar: () => void;
  isDesktopCollapsed: boolean;
}

export function Topbar({ onOpenMobileSidebar, onToggleDesktopSidebar, isDesktopCollapsed }: TopbarProps) {
  return (
    <header className="h-16 bg-white border-b border-slate-200 sticky top-0 z-30 flex items-center justify-between px-4 lg:px-8 shadow-sm transition-all duration-300">
      <div className="flex items-center gap-4 w-full">
        {/* Mobile Sidebar Toggle */}
        <button 
          onClick={onOpenMobileSidebar}
          className="lg:hidden p-2 -ml-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
        >
          <Menu className="h-5 w-5" />
        </button>

        {/* Desktop Sidebar Toggle */}
        <button 
          onClick={onToggleDesktopSidebar}
          className="hidden lg:flex p-2 -ml-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
          title={isDesktopCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
        >
          <AlignLeft className="h-5 w-5" />
        </button>
        
        {/* Search */}
        <div className="hidden sm:flex items-center relative w-full max-w-md ml-2 lg:ml-0">
          <Search className="h-4 w-4 absolute left-3.5 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search tenants, users, or settings..." 
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-violet-400 focus:ring-4 focus:ring-violet-100 outline-none transition-all"
          />
        </div>
      </div>

      <div className="flex items-center gap-5">
        <button className="relative p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-colors">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1.5 right-1.5 h-2.5 w-2.5 rounded-full bg-red-500 border-2 border-white"></span>
        </button>
        
        <div className="h-9 w-9 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm shadow-md cursor-pointer hover:ring-2 hover:ring-slate-900 hover:ring-offset-2 transition-all">
          AD
        </div>
      </div>
    </header>
  );
}
