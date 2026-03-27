"use client";

import React, { useState } from "react";
import { 
  Plus, 
  Search, 
  Monitor, 
  Smartphone, 
  Sparkles, 
  Image as ImageIcon,
  Download,
  ExternalLink,
  ChevronRight,
  Zap,
  Layout,
  Palette,
  Maximize2,
  RefreshCcw,
  CheckCircle2
} from "lucide-react";

export default function ThumbnailPage() {
  const [platform, setPlatform] = useState("youtube");
  const [style, setStyle] = useState("Realistic");
  const [ratio, setRatio] = useState("16:9");

  const platforms = [
    { id: "youtube", icon: Monitor, label: "YouTube" },
    { id: "shorts", icon: Smartphone, label: "Shorts" },
    { id: "tiktok", icon: Smartphone, label: "TikTok" },
  ];

  const styles = ["Realistic", "Cinematic", "Anime", "3D Render", "Artistic"];

  return (
    <div className="max-w-5xl mx-auto space-y-6 animate-fadeIn pb-20">
      <div className="space-y-1">
        <h1 className="text-sm font-black text-gray-900 leading-tight">AI Thumbnail Generator</h1>
        <p className="text-[9px] font-bold text-gray-300 uppercase tracking-widest pl-0.5">Create high-CTR thumbnails using AI</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Filters / Configuration - Very Compact */}
        <div className="lg:col-span-4 space-y-5">
           {/* Section: Platform */}
           <div className="bg-white border border-gray-50 rounded-2xl p-4 space-y-3 shadow-sm shadow-gray-100/10">
              <div className="flex items-center gap-2"><Layout size={10} className="text-gray-300" /><h3 className="text-[9px] font-black text-gray-400 uppercase tracking-widest leading-none">Platform</h3></div>
              <div className="grid grid-cols-3 gap-1.5">
                 {platforms.map((p) => (
                    <button 
                      key={p.id} 
                      onClick={() => setPlatform(p.id)}
                      className={`h-7 rounded-lg flex items-center justify-center gap-2 border transition-all ${platform === p.id ? "bg-olive-green border-olive-green text-white shadow-md shadow-olive-green/10" : "bg-white border-gray-50 text-gray-400 hover:border-gray-100"}`}
                    >
                       <p.icon size={10} />
                       <span className="text-[8px] font-black uppercase tracking-tighter">{p.label}</span>
                    </button>
                 ))}
              </div>
           </div>

           {/* Section: Style & Ratio */}
           <div className="bg-white border border-gray-50 rounded-2xl p-4 space-y-4 shadow-sm shadow-gray-100/10">
              <div className="space-y-2.5">
                 <div className="flex items-center gap-2"><Palette size={10} className="text-gray-300" /><h3 className="text-[9px] font-black text-gray-400 uppercase tracking-widest leading-none">Art Style</h3></div>
                 <div className="flex flex-wrap gap-1.5">
                    {styles.map((s) => (
                       <button 
                         key={s} 
                         onClick={() => setStyle(s)}
                         className={`px-3 h-6 rounded-lg text-[8px] font-black uppercase tracking-widest border transition-all ${style === s ? "bg-gray-900 border-gray-900 text-white" : "bg-white border-gray-50 text-gray-400 hover:border-gray-100"}`}
                       >
                          {s}
                       </button>
                    ))}
                 </div>
              </div>

              <div className="space-y-2.5 pt-2 border-t border-gray-50">
                 <div className="flex items-center gap-2"><Maximize2 size={10} className="text-gray-300" /><h3 className="text-[9px] font-black text-gray-400 uppercase tracking-widest leading-none">Aspect Ratio</h3></div>
                 <div className="flex gap-1.5">
                    {["16:9", "9:16", "1:1"].map((r) => (
                       <button 
                         key={r} 
                         onClick={() => setRatio(r)}
                         className={`flex-1 h-6 rounded-lg text-[8px] font-black uppercase tracking-widest border transition-all ${ratio === r ? "bg-gray-100 border-gray-100 text-gray-900" : "bg-white border-gray-50 text-gray-400 hover:border-gray-100"}`}
                       >
                          {r}
                       </button>
                    ))}
                 </div>
              </div>
           </div>

           {/* Section: Prompt */}
           <div className="bg-white border border-gray-50 rounded-2xl p-4 space-y-3 shadow-sm shadow-gray-100/10">
              <div className="flex items-center gap-2"><Sparkles size={10} className="text-gray-400" /><h3 className="text-[9px] font-black text-gray-900 uppercase tracking-widest leading-none">Prompt</h3></div>
              <textarea 
                placeholder="A person surprised by a massive suitcase full of cash in Dubai..."
                className="w-full h-16 bg-gray-50/50 border border-gray-100 rounded-xl p-3 text-[10px] font-bold text-gray-900 focus:outline-none focus:border-olive-green/20 placeholder:text-gray-200"
              />
              <button className="w-full h-8 bg-olive-green text-white text-[9px] font-black uppercase tracking-widest rounded-xl hover:scale-105 transition-all shadow-md shadow-olive-green/10 flex items-center justify-center gap-2 group">
                 <Zap size={12} fill="currentColor" className="group-hover:animate-pulse" /> Generate Design
              </button>
           </div>
        </div>

        {/* Right: Preview Area */}
        <div className="lg:col-span-8 flex flex-col gap-6 items-center">
           <div className="w-full bg-white border border-gray-50 rounded-3xl p-6 flex flex-col items-center gap-6 shadow-sm shadow-gray-100/10 relative overflow-hidden group/preview">
              <div className={`w-full group/image relative rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 overflow-hidden bg-gray-50 border border-gray-100 ${ratio === "16:9" ? "aspect-video" : ratio === "9:16" ? "max-w-[280px] aspect-[9/16]" : "max-w-[400px] aspect-square"}`}>
                 <img src="https://images.unsplash.com/photo-1541443131876-44b03de101c5?q=80&w=800" className="w-full h-full object-cover transition-transform duration-700 group-hover/image:scale-105" alt="Thumbnail Preview" />
                 <div className="absolute inset-0 bg-black/10 group-hover/image:bg-black/30 transition-all flex items-center justify-center opacity-0 group-hover/image:opacity-100">
                    <button className="w-10 h-10 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 active:scale-90 transition-all border border-white/20">
                       <Maximize2 size={16} />
                    </button>
                 </div>
                 <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md border border-white/20 rounded-lg px-2 py-1 text-[8px] font-black text-white uppercase tracking-widest shadow-sm">
                    {ratio} Preview
                 </div>
              </div>

              <div className="w-full max-w-[400px] flex items-center justify-between">
                 <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1.5 text-green-500"><CheckCircle2 size={10} /><span className="text-[9px] font-black uppercase tracking-widest">Design Ready</span></div>
                    <div className="flex items-center gap-1.5 text-gray-300"><ImageIcon size={10} /><span className="text-[9px] font-bold uppercase tracking-widest">High Res (2K)</span></div>
                 </div>
                 <div className="flex items-center gap-2">
                    <button className="w-7 h-7 rounded-lg bg-gray-50 text-gray-400 hover:bg-white hover:text-gray-900 border border-transparent hover:border-gray-100 transition-all shadow-sm flex items-center justify-center"><RefreshCcw size={12} /></button>
                    <button className="h-7 px-4 bg-gray-900 text-white text-[9px] font-black uppercase tracking-widest rounded-lg hover:scale-105 transition-all shadow-md flex items-center gap-2"><Download size={10} /> Export</button>
                 </div>
              </div>
           </div>

           {/* Design Inspiration / Recent */}
           <div className="w-full space-y-3">
              <h3 className="text-[10px] font-black text-gray-900 uppercase tracking-widest pl-2 flex items-center gap-2"><ImageIcon size={12} className="text-gray-300" /> Recent Creations</h3>
              <div className="grid grid-cols-4 gap-3 w-full">
                 {[1,2,3,4].map((i) => (
                    <div key={i} className="group aspect-video rounded-xl bg-gray-100 border border-transparent hover:border-olive-green/30 transition-all overflow-hidden relative cursor-pointer shadow-sm shadow-gray-100/5 hover:shadow-lg hover:shadow-olive-green/5">
                       <img src={`https://images.unsplash.com/photo-${i === 1 ? '1677442136019-21780ecad995' : i === 2 ? '1494438639946-1ebd1d20bf85' : i === 3 ? '1464822759023-fed622ff2c3b' : '1540959733332-e94e7bf71fef'}?q=80&w=200`} className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all group-hover:scale-110" />
                       <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"><ExternalLink size={12} className="text-white" /></div>
                    </div>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
