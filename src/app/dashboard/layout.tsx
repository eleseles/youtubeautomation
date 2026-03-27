"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  LayoutDashboard, 
  Youtube, 
  Video, 
  Image as ImageIcon,
  BarChart3, 
  Settings, 
  ChevronLeft, 
  ChevronRight,
  Menu,
  Bell,
  User,
  Users,
  Zap,
  Sparkles,
  Clapperboard
} from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const navItems = [
    { name: "Overview", icon: LayoutDashboard, href: "/dashboard" },
    { name: "Custom Video", icon: Clapperboard, href: "/dashboard/custom-video" },
    { name: "AI Generator", icon: Zap, href: "/dashboard/generator" },
    { name: "Videos", icon: Video, href: "/dashboard/videos" },
    { name: "Thumbnail", icon: ImageIcon, href: "/dashboard/thumbnail" },
    { name: "UGC", icon: Users, href: "/dashboard/ugc" },
    { name: "Settings", icon: Settings, href: "/dashboard/settings" },
  ];

  return (
    <div className="flex h-screen bg-gray-50/50">
      {/* Sidebar */}
      <aside 
        className={`bg-white border-r border-gray-100 transition-all duration-300 relative flex flex-col ${
          isSidebarOpen ? "w-44" : "w-14"
        }`}
      >
        {/* Sidebar Header */}
        <div className="h-14 flex items-center px-4 border-b border-gray-100">
          <Link href="/" className="flex items-center gap-2 overflow-hidden">
             <div className="w-5 h-5 bg-olive-green rounded-md flex-shrink-0 flex items-center justify-center text-white">
                <Youtube size={10} />
             </div>
             {isSidebarOpen && (
               <span className="font-serif font-bold text-[13px] tracking-tight text-gray-900 whitespace-nowrap">
                 YouTube <span className="text-olive-green italic font-medium">Auto AI</span>
               </span>
             )}
          </Link>
        </div>

        {/* Sidebar Navigation */}
        <nav className="flex-1 py-6 px-2 space-y-0.5 overflow-y-auto scrollbar-hide">
           {navItems.map((item) => (
             <Link 
               key={item.name} 
               href={item.href}
               className="flex items-center gap-3 px-3 py-1.5 rounded-lg text-gray-500 hover:bg-olive-green/5 hover:text-olive-green transition-all duration-200 group"
             >
                <item.icon size={15} className="flex-shrink-0" />
                {isSidebarOpen && (
                  <span className="text-[12px] font-medium leading-none">{item.name}</span>
                )}
             </Link>
           ))}
        </nav>

        {/* Toggle Button */}
        <button 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="absolute -right-3 top-20 w-6 h-6 bg-white border border-gray-100 rounded-full flex items-center justify-center text-gray-400 hover:text-olive-green shadow-sm z-20"
        >
          {isSidebarOpen ? <ChevronLeft size={14} /> : <ChevronRight size={14} />}
        </button>

        {/* User Workspace Status */}
        {isSidebarOpen && (
          <div className="m-2 p-2.5 bg-gray-50 rounded-xl border border-gray-100">
             <p className="text-[9px] font-bold text-gray-400 mb-1.5 line-clamp-1">Free Workspace Plan</p>
             <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full w-2/3 bg-olive-green" />
             </div>
             <p className="text-[9px] font-medium text-gray-400 mt-1.5">2/3 active channels</p>
          </div>
        )}
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Header */}
        <header className="h-12 bg-white border-b border-gray-100 flex items-center justify-between px-6 flex-shrink-0">
           <div className="flex items-center gap-3">
              <button className="md:hidden text-gray-500"><Menu size={18} /></button>
              <h2 className="text-[10px] font-semibold text-gray-400">Workspace / Overview</h2>
           </div>
           
           <div className="flex items-center gap-4 text-gray-400">
              <button className="hover:text-olive-green transition-colors"><Bell size={16} /></button>
              <div className="w-7 h-7 rounded-full bg-gray-100 overflow-hidden border border-gray-100">
                 <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=dashboard" alt="User" className="w-full h-full object-cover" />
              </div>
           </div>
        </header>

        {/* Content Scrollable */}
        <main className="flex-1 overflow-y-auto p-8 bg-gray-50/50 scrollbar-hide">
           {children}
        </main>
      </div>
    </div>
  );
}
