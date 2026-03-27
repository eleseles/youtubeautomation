"use client";

import React from "react";
import { 
  Users, 
  Eye, 
  Video, 
  Zap, 
  Plus, 
  ChevronRight, 
  PlayCircle, 
  CheckCircle2, 
  ArrowUpRight,
  Youtube,
  Clock,
  LayoutDashboard
} from "lucide-react";

export default function DashboardPage() {
  const stats = [
    { label: "Total Subs", value: "24.5k", trend: "+12.4%", icon: Users, color: "text-green-500" },
    { label: "Total Views", value: "842k", trend: "+24.1%", icon: Eye, color: "text-green-500" },
    { label: "AI Creations", value: "142", trend: null, icon: Video, color: "text-gray-400" },
    { label: "AI Credits", value: "450", trend: null, icon: Zap, color: "text-gray-400" },
  ];

  const channels = [
    { name: "Tech Daily AI", subs: "12.4k", status: "Active", statusColor: "bg-green-50 text-green-600" },
    { name: "Luxury Shorts", subs: "8.1k", status: "Active", statusColor: "bg-green-50 text-green-600" },
    { name: "Mindset Hub", subs: "4.0k", status: "Syncing", statusColor: "bg-orange-50 text-orange-600" },
  ];

  const activities = [
    { title: "AI Script Generated", sub: "2 hours ago • Script", icon: Plus },
    { title: "Video Uploaded to Tech Daily", sub: "5 hours ago • Upload", icon: Video },
    { title: "Thumbnail Rendered", sub: "1 day ago • Design", icon: CheckCircle2 },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-fadeIn pb-20">
      {/* Welcome Header */}
      <div className="flex items-start justify-between">
         <div className="space-y-1">
            <h1 className="text-xl font-black text-gray-900 leading-tight">
               Welcome back, <span className="italic font-medium text-olive-green">Alex</span>
            </h1>
            <p className="text-[10px] font-bold text-gray-300 uppercase tracking-widest flex items-center gap-1.5">
               Workspace Overview <span className="w-1 h-1 rounded-full bg-gray-200" /> March 27, 2026
            </p>
         </div>
         <button className="bg-olive-green text-white px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:scale-105 transition-all shadow-lg shadow-olive-green/20">
            <Plus size={14} /> New
         </button>
      </div>

      {/* Stats Grid - High Density */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
         {stats.map((stat, idx) => (
           <div key={idx} className="bg-white border border-gray-50 rounded-2xl p-5 space-y-4 hover:border-gray-100 transition-all shadow-sm shadow-gray-100/10">
              <div className="flex items-center justify-between">
                 <div className="w-8 h-8 rounded-xl bg-gray-50 flex items-center justify-center text-gray-300">
                    <stat.icon size={14} />
                 </div>
                 {stat.trend && (
                    <span className="text-[9px] font-black text-green-500 uppercase tracking-tighter flex items-center gap-0.5">
                       {stat.trend} <ArrowUpRight size={10} />
                    </span>
                 )}
              </div>
              <div className="space-y-0.5">
                 <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest">{stat.label}</p>
                 <h2 className="text-xl font-black text-gray-900 tabular-nums">{stat.value}</h2>
              </div>
           </div>
         ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         {/* Active Channels - 2/3 Width */}
         <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center justify-between">
               <h3 className="text-xs font-black text-gray-900">Active Channels</h3>
               <button className="text-[9px] font-bold text-gray-300 uppercase tracking-widest hover:text-olive-green transition-colors">View All</button>
            </div>
            
            <div className="bg-white border border-gray-50 rounded-2xl overflow-hidden shadow-sm shadow-gray-100/10">
               <table className="w-full text-left">
                  <thead>
                     <tr className="border-b border-gray-50">
                        <th className="px-6 py-4 text-[9px] font-black text-gray-300 uppercase tracking-widest">Channel Name</th>
                        <th className="px-6 py-4 text-[9px] font-black text-gray-300 uppercase tracking-widest">Subs</th>
                        <th className="px-6 py-4 text-[9px] font-black text-gray-300 uppercase tracking-widest">Status</th>
                        <th className="px-6 py-4 text-[9px] font-black text-gray-300 uppercase tracking-widest text-right">Actions</th>
                     </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                     {channels.map((channel) => (
                        <tr key={channel.name} className="group hover:bg-gray-50/50 transition-colors">
                           <td className="px-6 py-4">
                              <div className="flex items-center gap-3">
                                 <div className="w-6 h-6 rounded-md bg-gray-50 flex items-center justify-center text-gray-300 group-hover:text-olive-green transition-colors"><Youtube size={12} /></div>
                                 <span className="text-[11px] font-black text-gray-900">{channel.name}</span>
                              </div>
                           </td>
                           <td className="px-6 py-4 text-[10px] font-bold text-gray-400 tabular-nums">{channel.subs}</td>
                           <td className="px-6 py-4">
                              <span className={`px-2 py-0.5 rounded-full text-[8px] font-black uppercase tracking-widest ${channel.statusColor}`}>
                                 {channel.status}
                              </span>
                           </td>
                           <td className="px-6 py-4 text-right">
                              <button className="w-6 h-6 rounded-lg bg-gray-50 text-gray-300 hover:text-olive-green hover:bg-white border border-transparent hover:border-gray-100 transition-all shadow-sm shadow-black/5 flex items-center justify-center ml-auto">
                                 <ArrowUpRight size={12} />
                              </button>
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         </div>

         {/* Activity Feed - 1/3 Width */}
         <div className="space-y-5">
            <h3 className="text-xs font-black text-gray-900">Activity</h3>
            <div className="space-y-3">
               {activities.map((act, idx) => (
                  <div key={idx} className="bg-white border border-gray-50 rounded-2xl p-4 flex items-center gap-4 hover:border-gray-100 transition-all shadow-sm shadow-gray-100/10 group">
                     <div className="w-8 h-8 rounded-xl bg-gray-50 flex items-center justify-center text-gray-300 group-hover:bg-olive-green/5 group-hover:text-olive-green transition-colors flex-shrink-0">
                        <act.icon size={14} />
                     </div>
                     <div className="space-y-0.5">
                        <h4 className="text-[10px] font-black text-gray-900 leading-tight">{act.title}</h4>
                        <p className="text-[8px] font-bold text-gray-300 uppercase tracking-tighter">{act.sub}</p>
                     </div>
                  </div>
               ))}
               <button className="w-full py-2.5 bg-gray-50 text-gray-400 text-[9px] font-black uppercase tracking-widest rounded-xl hover:bg-gray-100 hover:text-gray-900 transition-all mt-4">
                  Show More
               </button>
            </div>
         </div>
      </div>
    </div>
  );
}
