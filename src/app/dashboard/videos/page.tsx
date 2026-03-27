"use client";

import React, { useState } from "react";
import { 
  PlayCircle, 
  Search, 
  Filter, 
  MoreHorizontal, 
  Download, 
  Trash2, 
  Share2,
  ExternalLink,
  Clock,
  Youtube,
  Smartphone,
  CheckCircle2,
  AlertCircle,
  Loader2,
  FileText,
  Video as VideoIcon
} from "lucide-react";

const MOCK_VIDEOS = [
  {
    id: "1",
    title: "3 Epic Dubai Malls You MUST VISIT",
    thumbnail: "https://images.unsplash.com/photo-1541443131876-44b03de101c5?q=80&w=400",
    status: "ready",
    duration: "00:09",
    platform: "shorts",
    date: "Mar 27, 2026",
    sections: 3
  },
  {
    id: "2",
    title: "The Ultimate Guide to Swiss Alps",
    thumbnail: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=400",
    status: "processing",
    duration: "03:45",
    platform: "youtube",
    date: "Mar 26, 2026",
    sections: 8
  },
  {
    id: "3",
    title: "Morning Routine for High Performance",
    thumbnail: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=400",
    status: "ready",
    duration: "00:58",
    platform: "shorts",
    date: "Mar 25, 2026",
    sections: 4
  },
  {
    id: "4",
    title: "AI Revolutions in 2026",
    thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=400",
    status: "ready",
    duration: "12:15",
    platform: "youtube",
    date: "Mar 24, 2026",
    sections: 12
  },
  {
    id: "5",
    title: "Hidden Gems of Tokyo",
    thumbnail: "https://images.unsplash.com/photo-1540959733332-e94e7bf71fef?q=80&w=400",
    status: "error",
    duration: "08:20",
    platform: "youtube",
    date: "Mar 23, 2026",
    sections: 10
  }
];

export default function VideosPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const stats = [
    { label: "Total Videos", value: "42", icon: VideoIcon },
    { label: "Ready", value: "38", icon: CheckCircle2 },
    { label: "Processing", value: "2", icon: Loader2 },
    { label: "Storage", value: "1.2 GB", icon: FileText },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-4 animate-fadeIn pb-10">
      {/* Header & Stats - Dramatically Scaled Down */}
      <div className="flex items-end justify-between gap-4">
         <div className="space-y-0.5">
            <h1 className="text-sm font-black text-gray-900 leading-none">My Videos</h1>
            <p className="text-[8px] font-bold text-gray-300 uppercase tracking-widest pl-0.5">Manage and export your generated content</p>
         </div>

         <div className="flex gap-2">
            {stats.map((s, idx) => (
               <div key={idx} className="bg-white border border-gray-50 rounded-xl p-1.5 flex flex-col items-center justify-center min-w-[70px] transition-all hover:border-gray-100 shadow-sm shadow-gray-100/10">
                  <div className="w-5 h-5 rounded-md bg-gray-50 flex items-center justify-center text-gray-300 mb-1"><s.icon size={10} /></div>
                  <span className="text-[10px] font-black text-gray-900 leading-none">{s.value}</span>
                  <span className="text-[7px] font-black text-gray-400 uppercase tracking-tighter mt-0.5">{s.label}</span>
               </div>
            ))}
         </div>
      </div>

      {/* Filters & Actions - Compressed */}
      <div className="flex items-center justify-between gap-4 pt-3 border-t border-gray-50">
         <div className="relative w-64 group">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-olive-green transition-colors" size={12} />
            <input 
              type="text" 
              placeholder="Search videos..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white border border-gray-100 rounded-lg pl-8 pr-3 h-7 text-[10px] font-medium text-gray-900 focus:outline-none focus:border-olive-green/20 placeholder:text-gray-200"
            />
         </div>

         <div className="flex items-center gap-1.5">
            {["all", "ready", "processing", "error"].map((f) => (
               <button 
                 key={f}
                 onClick={() => setFilter(f)}
                 className={`h-6.5 px-3 rounded-lg text-[8px] font-black uppercase tracking-widest border transition-all ${
                    filter === f 
                    ? "bg-olive-green border-olive-green text-white shadow-sm shadow-olive-green/10" 
                    : "bg-white border-gray-50 text-gray-400 hover:border-gray-100"
                 }`}
               >
                  {f}
               </button>
            ))}
         </div>
      </div>

      {/* Videos Grid - High Density */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
         {MOCK_VIDEOS.map((video) => (
            <div key={video.id} className="group bg-white border border-gray-50 rounded-xl overflow-hidden transition-all duration-300 hover:border-gray-200 hover:shadow-lg hover:shadow-gray-200/20 flex flex-col">
               {/* Thumbnail - Scaled Down */}
               <div className="relative aspect-video overflow-hidden">
                  <img src={video.thumbnail} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={video.title} />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                     <button className="w-8 h-8 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white shadow-2xl">
                        <PlayCircle size={16} fill="currentColor" />
                     </button>
                  </div>
                  
                  {/* Status & Duration Badge - Tiny */}
                  <div className="absolute top-1.5 left-1.5 flex items-center gap-1">
                     <div className={`px-1.5 py-0.5 rounded-full text-[7px] font-black uppercase tracking-widest flex items-center gap-0.5 shadow-sm ${
                        video.status === 'ready' ? "bg-green-500 text-white" : 
                        video.status === 'processing' ? "bg-amber-500 text-white" : "bg-red-500 text-white"
                     }`}>
                        {video.status === 'processing' && <Loader2 size={6} className="animate-spin" />}
                        {video.status}
                     </div>
                  </div>

                  {/* Platform Icon - Tiny */}
                  <div className="absolute top-1.5 right-1.5 w-5 h-5 rounded-md bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/20">
                     {video.platform === 'shorts' ? <Smartphone size={10} /> : <Youtube size={10} />}
                  </div>

                  <div className="absolute bottom-1.5 right-1.5 bg-black/40 backdrop-blur-sm px-1.5 py-0.5 rounded-md text-[8px] font-black text-white tabular-nums">
                     {video.duration}
                  </div>
               </div>

               {/* Info - Tight Padding */}
               <div className="p-2.5 flex-1 flex flex-col">
                  <div className="flex-1 space-y-0.5">
                     <h3 className="text-[10px] font-black text-gray-800 line-clamp-1 leading-tight group-hover:text-olive-green transition-colors">{video.title}</h3>
                     <div className="flex items-center gap-1.5 text-[8px] font-bold text-gray-300">
                        <span>{video.date}</span>
                        <div className="w-0.5 h-0.5 rounded-full bg-gray-100" />
                        <span>{video.sections} sections</span>
                     </div>
                  </div>

                  {/* Actions - Micro */}
                  <div className="flex items-center justify-between pt-2">
                     <div className="flex items-center gap-1">
                        <button className="w-6 h-6 bg-gray-50/50 text-gray-400 rounded-md flex items-center justify-center hover:bg-olive-green hover:text-white transition-all"><Download size={10} /></button>
                        <button className="w-6 h-6 bg-gray-50/50 text-gray-400 rounded-md flex items-center justify-center hover:bg-olive-green hover:text-white transition-all"><Share2 size={10} /></button>
                     </div>
                     <button className="w-6 h-6 text-gray-200 rounded-md flex items-center justify-center hover:bg-red-50 hover:text-red-500 transition-all"><Trash2 size={10} /></button>
                  </div>
               </div>
            </div>
         ))}

         {/* Empty State / Add New Placeholder */}
         <button onClick={() => window.location.href = '/dashboard/generator'} className="aspect-video border border-dashed border-gray-100 rounded-xl flex flex-col items-center justify-center gap-1 hover:border-olive-green/30 hover:bg-olive-green/5 transition-all group p-4">
            <div className="w-8 h-8 rounded-xl bg-gray-50 flex items-center justify-center text-gray-300 group-hover:bg-white group-hover:text-olive-green transition-all"><VideoIcon size={14} /></div>
            <span className="text-[8px] font-black text-gray-400 uppercase tracking-widest group-hover:text-olive-green transition-colors">Generate New</span>
         </button>
      </div>
    </div>
  );
}
