"use client";

import React, { useState } from "react";
import { 
  Plus, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Music, 
  AlignLeft, 
  AlignCenter, 
  AlignRight,
  PlayCircle,
  Video,
  Sparkles,
  Download,
  Trash2
} from "lucide-react";

export default function UGCPage() {
  const [hookText, setHookText] = useState("Place your product hook text here. Example from Duolingo: bruh, who needs textbooks when an owl is yelling at you?");
  const [selectedAvatar, setSelectedAvatar] = useState(0);

  const avatars = [
    "https://api.dicebear.com/7.x/avataaars/svg?seed=1",
    "https://api.dicebear.com/7.x/avataaars/svg?seed=2",
    "https://api.dicebear.com/7.x/avataaars/svg?seed=3",
    "https://api.dicebear.com/7.x/avataaars/svg?seed=4",
    "https://api.dicebear.com/7.x/avataaars/svg?seed=5",
    "https://api.dicebear.com/7.x/avataaars/svg?seed=6",
    "https://api.dicebear.com/7.x/avataaars/svg?seed=7",
    "https://api.dicebear.com/7.x/avataaars/svg?seed=8",
    "https://api.dicebear.com/7.x/avataaars/svg?seed=9",
    "https://api.dicebear.com/7.x/avataaars/svg?seed=10",
    "https://api.dicebear.com/7.x/avataaars/svg?seed=11",
    "https://api.dicebear.com/7.x/avataaars/svg?seed=12",
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-10 animate-fadeIn pb-20">
      <div className="space-y-1">
        <h1 className="text-xl font-black text-gray-900 leading-tight">Let's create your Ads video!</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Form Column */}
        <div className="lg:col-span-7 space-y-8">
          {/* Hook Section */}
          <div className="space-y-3">
             <div className="flex items-center justify-between">
                <label className="text-xs font-black text-gray-900">Hook</label>
                <select className="h-7 bg-white border border-gray-100 rounded-lg px-2 text-[10px] font-bold text-gray-500 focus:outline-none">
                   <option>No product</option>
                </select>
             </div>
             <textarea 
               value={hookText}
               onChange={(e) => setHookText(e.target.value)}
               className="w-full h-24 bg-white border border-gray-100 rounded-xl p-4 text-[11px] font-medium text-gray-700 focus:outline-none focus:border-olive-green/20"
             />
             <div className="flex items-center justify-between">
                <div className="flex bg-gray-50 rounded-lg p-0.5 border border-gray-100">
                   <button className="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-gray-900 bg-white shadow-sm rounded-md"><AlignLeft size={12} /></button>
                   <button className="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-gray-900"><AlignCenter size={12} /></button>
                   <button className="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-gray-900"><AlignRight size={12} /></button>
                </div>
                <div className="flex items-center gap-2 bg-white border border-gray-100 rounded-lg px-2.5 h-7">
                   <Music size={10} className="text-gray-400" />
                   <span className="text-[10px] font-bold text-gray-500">Sound: <span className="text-gray-900">champagne coast</span></span>
                </div>
             </div>
          </div>

          {/* Avatars Section */}
          <div className="space-y-4">
             <div className="flex items-center gap-4">
                <button className="text-[11px] font-black text-gray-900 border-b-2 border-olive-green pb-1">Popular Avatars</button>
                <button className="text-[11px] font-bold text-gray-300 pb-1">Custom Avatars</button>
             </div>
             <div className="grid grid-cols-6 gap-2">
                {avatars.map((url, idx) => (
                   <button 
                     key={idx} 
                     onClick={() => setSelectedAvatar(idx)}
                     className={`aspect-square rounded-xl overflow-hidden border-2 transition-all ${selectedAvatar === idx ? "border-olive-green scale-95 shadow-lg shadow-olive-green/10" : "border-transparent opacity-60 hover:opacity-100"}`}
                   >
                      <img src={url} className="w-full h-full object-cover bg-gray-50 flex items-center justify-center" alt="Avatar" />
                   </button>
                ))}
             </div>
             <div className="flex items-center justify-end gap-3 text-gray-300">
                <button className="hover:text-gray-900 transition-colors"><ChevronLeft size={14}/></button>
                <span className="text-[10px] font-bold tabular-nums">1/4</span>
                <button className="hover:text-gray-900 transition-colors"><ChevronRight size={14}/></button>
             </div>
          </div>

          {/* Demos Section */}
          <div className="space-y-3">
             <h3 className="text-xs font-black text-gray-900">Demos</h3>
             <div className="flex gap-3">
                <button className="w-16 h-16 border border-dashed border-gray-100 rounded-2xl flex flex-col items-center justify-center gap-1 group hover:border-olive-green/40 hover:bg-olive-green/5 transition-all">
                   <Plus size={14} className="text-gray-300 group-hover:text-olive-green" />
                   <span className="text-[9px] font-bold text-gray-300 group-hover:text-olive-green uppercase tracking-tighter">Upload</span>
                </button>
                <button className="w-16 h-16 border-2 border-olive-green rounded-2xl flex flex-col items-center justify-center gap-1 bg-olive-green/5">
                   <X size={14} className="text-olive-green" />
                   <span className="text-[9px] font-bold text-olive-green uppercase tracking-tighter">None</span>
                </button>
             </div>
          </div>
        </div>

        {/* Preview Column */}
        <div className="lg:col-span-5 flex flex-col items-center">
           <div className="w-full max-w-[280px] aspect-[9/16] bg-black rounded-[32px] overflow-hidden shadow-2xl relative group/player">
              <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=600" className="w-full h-full object-cover opacity-80" />
              <div className="absolute inset-0 bg-black/20 p-8 flex items-center justify-center text-center">
                 <p className="text-white text-xs font-black drop-shadow-lg leading-tight tracking-tight italic uppercase">{hookText}</p>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/player:opacity-100 transition-opacity">
                 <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white"><PlayCircle size={24} fill="currentColor" /></div>
              </div>
           </div>
           <div className="w-full max-w-[280px] mt-6 space-y-4 text-center">
              <button className="w-full h-10 bg-gray-100 text-gray-400 text-[11px] font-black uppercase tracking-widest rounded-2xl transition-all cursor-not-allowed">
                 Render video
              </button>
              <p className="text-[9px] font-bold text-gray-300">A <span className="text-gray-900">subscription</span> is required to use</p>
           </div>
        </div>
      </div>

      {/* Your Videos List */}
      <div className="space-y-6 pt-10 border-t border-gray-50">
         <h2 className="text-sm font-black text-gray-900">Your videos</h2>
         <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {[1,2].map((i) => (
              <div key={i} className="group bg-white border border-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col">
                 <div className="relative aspect-video">
                    <img src={`https://images.unsplash.com/photo-${i === 1 ? '1540959733332-e94e7bf71fef' : '1512453979798-5ea266f8880c'}?q=80&w=400`} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                       <PlayCircle size={16} className="text-white" fill="currentColor" />
                    </div>
                 </div>
                 <div className="p-2 space-y-2">
                    <h4 className="text-[10px] font-black text-gray-900 line-clamp-1">Project Video {i}</h4>
                    <div className="flex items-center justify-between">
                       <div className="flex gap-1">
                          <button className="w-6 h-6 bg-gray-50 text-gray-300 hover:text-olive-green rounded-md flex items-center justify-center transition-colors"><Download size={10} /></button>
                       </div>
                       <button className="w-6 h-6 text-gray-100 hover:text-red-500 rounded-md flex items-center justify-center transition-colors"><Trash2 size={10} /></button>
                    </div>
                 </div>
              </div>
            ))}
         </div>
      </div>
    </div>
  );
}
