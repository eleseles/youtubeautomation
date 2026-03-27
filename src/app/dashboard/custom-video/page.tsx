"use client";

import React, { useState } from "react";
import { 
  ChevronRight, 
  ArrowUpRight, 
  Mic2, 
  Music, 
  Gem,
  CheckCircle2,
  Sparkles
} from "lucide-react";

export default function CustomVideoPage() {
  const [activeStep, setActiveStep] = useState(1);
  const [topic, setTopic] = useState("");
  const [selectedStyle, setSelectedStyle] = useState("Photo Realism");

  const styles = [
    { name: "Photo Realism", img: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=300" },
    { name: "Anime", img: "https://images.unsplash.com/photo-1578632738981-4320de6129d3?q=80&w=300" },
    { name: "Fantasy", img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=300" },
  ];

  return (
    <div className="max-w-2xl mx-auto space-y-4 animate-fadeIn pb-20 mt-4">
      <h1 className="text-xl font-black text-gray-900 leading-tight mb-8">Create a custom video</h1>

      {/* Step 1: Topic */}
      <div className={`overflow-hidden transition-all duration-300 ${activeStep === 1 ? "bg-white border-2 border-black rounded-3xl p-6" : "bg-white border border-gray-100 rounded-2xl p-4"}`}>
         <div className="flex items-center justify-between mb-4">
            <h3 className="text-xs font-black text-gray-900">What is a topic of your video?</h3>
            {activeStep === 1 ? (
               <button className="flex items-center gap-1 text-olive-green text-[10px] font-bold hover:underline">
                  Try script builder <ArrowUpRight size={12} />
               </button>
            ) : (
               <span className="text-[10px] font-black text-gray-900">{topic || "Eles"}</span>
            )}
         </div>

         {activeStep === 1 && (
           <div className="space-y-4 animate-fadeIn">
              <input 
                type="text" 
                placeholder="Enter the title" 
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="w-full h-10 bg-white border border-gray-100 rounded-xl px-4 text-[11px] font-medium text-gray-900 focus:outline-none focus:border-olive-green/20"
              />
              <div className="border border-gray-100 rounded-xl p-4 space-y-3">
                 {["BigMotion", "Video Series", "Generate", "Ads Generator", "Content Planner"].map((opt) => (
                    <button key={opt} onClick={() => setTopic(opt)} className="block w-full text-left text-[11px] font-bold text-gray-900 hover:text-olive-green transition-colors">{opt}</button>
                 ))}
              </div>
              <button 
                onClick={() => setActiveStep(2)}
                className="w-full h-10 bg-gray-50 text-gray-300 text-[11px] font-black uppercase tracking-widest rounded-xl hover:bg-gray-100 transition-all border border-gray-100"
              >
                 Next Step
              </button>
           </div>
         )}
      </div>

      {/* Step 2: Video Style */}
      <div 
        onClick={() => activeStep !== 2 && topic && setActiveStep(2)}
        className={`overflow-hidden transition-all duration-300 ${activeStep === 2 ? "bg-white border-2 border-black rounded-3xl p-6" : "bg-white border border-gray-100 rounded-2xl p-4 cursor-pointer"}`}
      >
         <div className="flex items-center justify-between mb-4">
            <h3 className="text-xs font-black text-gray-900">What video style?</h3>
            {activeStep !== 2 && (
               <span className="text-[10px] font-black text-gray-900">{selectedStyle}</span>
            )}
         </div>

         {activeStep === 2 && (
            <div className="space-y-6 animate-fadeIn">
               <div className="grid grid-cols-3 gap-3">
                  {styles.map((style) => (
                     <button 
                       key={style.name} 
                       onClick={() => setSelectedStyle(style.name)}
                       className="relative aspect-square rounded-2xl overflow-hidden group border-2 border-transparent"
                     >
                        <img src={style.img} className="w-full h-full object-cover" alt={style.name} />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all flex items-end p-2 px-3">
                           <span className="text-[9px] font-black text-white italic tracking-tight leading-none">{style.name}</span>
                        </div>
                        <div className="absolute top-2 left-2">
                           <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${selectedStyle === style.name ? "bg-lime-400 border-white shadow-sm" : "bg-white/20 border-white/40"}`}>
                              {selectedStyle === style.name && <div className="w-1.5 h-1.5 bg-white rounded-full" />}
                           </div>
                        </div>
                     </button>
                  ))}
               </div>
               <button 
                onClick={() => setActiveStep(3)}
                className="w-full h-10 bg-lime-300 text-gray-900 text-[11px] font-black uppercase tracking-widest rounded-xl hover:scale-[1.02] shadow-sm shadow-lime-400/20 active:scale-95 transition-all"
              >
                 Next Step
              </button>
            </div>
         )}
      </div>

      {/* Step 3: Voice and Music */}
      <div 
        onClick={() => activeStep !== 3 && activeStep > 2 && setActiveStep(3)}
        className={`overflow-hidden transition-all duration-300 ${activeStep === 3 ? "bg-white border-2 border-black rounded-3xl p-6" : "bg-white border border-gray-100 rounded-2xl p-4"}`}
      >
         <div className="flex items-center justify-between mb-4">
            <h3 className="text-xs font-black text-gray-900">What voice and music?</h3>
            {activeStep !== 3 && (
               <span className="text-[10px] font-black text-gray-900">Ashley • Blood Moon Ritual</span>
            )}
         </div>

         {activeStep === 3 && (
            <div className="space-y-6 animate-fadeIn">
               <div className="grid grid-cols-2 gap-3">
                  <div className="relative group">
                     <Mic2 className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={12} />
                     <select className="w-full h-9 bg-white border border-gray-100 rounded-xl pl-9 pr-8 text-[11px] font-black text-gray-900 appearance-none focus:outline-none focus:border-olive-green/20">
                        <option>Ashley</option>
                     </select>
                     <ArrowUpRight className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300" size={12} />
                  </div>
                  <div className="relative group">
                     <Music className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={12} />
                     <select className="w-full h-9 bg-white border border-gray-100 rounded-xl pl-9 pr-8 text-[11px] font-black text-gray-900 appearance-none focus:outline-none focus:border-olive-green/20">
                        <option>Blood Moon Ritual</option>
                     </select>
                     <ArrowUpRight className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300" size={12} />
                  </div>
               </div>
               <button className="w-full h-10 bg-lime-300 text-gray-900 text-[11px] font-black uppercase tracking-widest rounded-xl hover:scale-[1.02] shadow-sm shadow-lime-400/20 active:scale-95 transition-all flex items-center justify-center gap-2">
                 Generate video <Gem size={12} /> 130
               </button>
            </div>
         )}
      </div>
    </div>
  );
}
