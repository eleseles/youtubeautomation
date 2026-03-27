"use client";

import React, { useState } from "react";
import { 
  Settings, 
  Lightbulb, 
  FileText, 
  Image as ImageIcon, 
  PlayCircle,
  Youtube,
  Smartphone,
  Video,
  ChevronRight,
  Monitor,
  Sparkles,
  Clock,
  CheckCircle2,
  Download,
  Share2,
  ExternalLink
} from "lucide-react";

export default function GeneratorPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [platform, setPlatform] = useState("youtube");
  const [mediaType, setMediaType] = useState("ai-images");
  const [introMediaType, setIntroMediaType] = useState("ai-video");

  // Step 2 State
  const [topic, setTopic] = useState("");
  const [videoLength, setVideoLength] = useState("short");
  const [sectionCount, setSectionCount] = useState(3);

  const steps = [
    { id: 1, name: "Settings", icon: Settings },
    { id: 2, name: "Topic", icon: Lightbulb },
    { id: 3, name: "Script", icon: FileText },
    { id: 4, name: "Assets", icon: ImageIcon },
    { id: 5, name: "Assemble", icon: PlayCircle },
  ];

  const lengths = [
    { id: "short", name: "Short", time: "1.5 - 3 min", sections: "2 - 4 sections", desc: "Quick, punchy narration. Great for TikTok or snackable content." },
    { id: "medium", name: "Medium", time: "3 - 6 min", sections: "6 - 8 sections", desc: "Balanced depth and pacing. Ideal for most YouTube videos." },
    { id: "long", name: "Long", time: "6 - 10 min", sections: "8 - 12 sections", desc: "In-depth analysis with storytelling. Best for educational content." },
  ];

  return (
    <div className="max-w-3xl mx-auto space-y-8 animate-fadeIn pb-20">
      {/* Steps Component - Ultra Compact */}
      <div className="flex items-center justify-between relative px-10">
         {steps.map((step, idx) => (
           <React.Fragment key={step.id}>
             <div className="flex flex-col items-center gap-2 relative z-10 group">
                <div className={`w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-300 border ${
                  currentStep >= step.id 
                    ? "bg-olive-green border-olive-green text-white" 
                    : "bg-white border-gray-100 text-gray-300"
                }`}>
                   <step.icon size={12} />
                </div>
                {currentStep === step.id && (
                  <span className="absolute -bottom-5 text-[9px] font-bold uppercase tracking-widest text-gray-900 whitespace-nowrap">{step.name}</span>
                )}
             </div>
             {idx < steps.length - 1 && (
               <div className={`flex-1 h-[1px] mb-0.5 mx-2 transition-colors duration-500 ${
                  currentStep > step.id ? "bg-olive-green/40" : "bg-gray-100"
               }`} />
             )}
           </React.Fragment>
         ))}
      </div>

      <div className="space-y-6 pt-6">
        {/* Conditional Step Rendering */}
        
        {currentStep === 1 && (
          <div className="space-y-6 animate-fadeIn">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-400"><Monitor size={12} /><h3 className="text-[9px] font-bold uppercase tracking-widest">Platform</h3></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <button 
                  onClick={() => setPlatform("youtube")} 
                  className={`p-4 rounded-2xl border text-left transition-all relative ${platform === "youtube" ? "bg-olive-green/5 border-olive-green/20 ring-1 ring-olive-green/20" : "bg-white border-gray-100"}`}
                >
                  <div className="flex items-center gap-3 pr-6">
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${platform === "youtube" ? "bg-olive-green text-white" : "bg-gray-50 text-gray-400"}`}><Youtube size={16} /></div>
                    <div className="space-y-0.5"><h4 className="text-[11px] font-bold text-gray-900">YouTube</h4><p className="text-[9px] text-gray-400 font-medium leading-none">Landscape 16:9 widescreen format</p></div>
                  </div>
                  <div className={`absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border flex items-center justify-center ${platform === "youtube" ? "border-olive-green bg-white shadow-sm" : "border-gray-100 bg-gray-50/50"}`}>
                     {platform === "youtube" && <div className="w-2.5 h-2.5 bg-olive-green rounded-full" />}
                  </div>
                </button>
                <button 
                  onClick={() => setPlatform("shorts")} 
                  className={`p-4 rounded-2xl border text-left transition-all relative ${platform === "shorts" ? "bg-olive-green/5 border-olive-green/20 ring-1 ring-olive-green/20" : "bg-white border-gray-100"}`}
                >
                  <div className="flex items-center gap-3 pr-6">
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${platform === "shorts" ? "bg-olive-green text-white" : "bg-gray-50 text-gray-400"}`}><Smartphone size={16} /></div>
                    <div className="space-y-0.5"><h4 className="text-[11px] font-bold text-gray-900">Shorts / Reels / TikTok</h4><p className="text-[9px] text-gray-400 font-medium leading-none">Portrait 9:16 vertical format</p></div>
                  </div>
                  <div className={`absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border flex items-center justify-center ${platform === "shorts" ? "border-olive-green bg-white shadow-sm" : "border-gray-100 bg-gray-50/50"}`}>
                     {platform === "shorts" && <div className="w-2.5 h-2.5 bg-olive-green rounded-full" />}
                  </div>
                </button>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-400"><Video size={12} /><h3 className="text-[9px] font-bold uppercase tracking-widest">Section Media</h3></div>
              <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm shadow-gray-100/10">
                <div className="flex border-b border-gray-100 bg-gray-50/20">
                  <button onClick={() => setMediaType("ai-images")} className={`flex-1 py-1.5 text-[9px] font-black uppercase tracking-widest transition-all ${mediaType === "ai-images" ? "bg-olive-green text-white" : "text-gray-400"}`}>AI Images</button>
                  <button onClick={() => setMediaType("ai-video")} className={`flex-1 py-1.5 text-[9px] font-black uppercase tracking-widest transition-all ${mediaType === "ai-video" ? "bg-olive-green text-white" : "text-gray-400"}`}>AI Video</button>
                </div>
                <div className="p-5 space-y-6">
                  <p className="text-[9px] font-bold text-gray-400 italic">Each section will display AI images for 3s with Ken Burns effect</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-1.5"><label className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Images per section</label><select defaultValue="2" className="w-full h-8 bg-gray-50 border border-gray-100 rounded-lg px-2 text-[10px] font-bold text-gray-900 focus:outline-none"><option value="2">2</option></select></div>
                    <div className="space-y-1.5"><label className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Style</label><select defaultValue="Cinematic realistic" className="w-full h-8 bg-gray-50 border border-gray-100 rounded-lg px-2 text-[10px] font-bold text-gray-900 focus:outline-none"><option value="Cinematic realistic">Cinematic realistic</option></select></div>
                    <div className="space-y-1.5"><label className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Resolution</label><select defaultValue="2K" className="w-full h-8 bg-gray-50 border border-gray-100 rounded-lg px-2 text-[10px] font-bold text-gray-900 focus:outline-none"><option value="2K">2K</option></select></div>
                  </div>
                  <div className="flex items-center gap-2 pt-2"><input type="checkbox" defaultChecked className="w-3.5 h-3.5 rounded text-olive-green" /><span className="text-[10px] font-bold text-gray-700">Ken Burns effect</span></div>
                </div>
              </div>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="space-y-6 animate-fadeIn">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-400"><FileText size={12} /><h3 className="text-[9px] font-bold uppercase tracking-widest">What's your video about?</h3></div>
              <input type="text" value={topic} onChange={(e) => setTopic(e.target.value)} placeholder="3 Shopping Malls to Visit in Dubai" className="w-full bg-white border border-gray-100 rounded-xl px-4 py-4 text-xs font-medium text-gray-900 focus:outline-none focus:border-olive-green/30 placeholder:text-gray-300" />
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-400"><Clock size={12} /><h3 className="text-[9px] font-bold uppercase tracking-widest">Video Length</h3></div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {lengths.map((len) => (
                  <button key={len.id} onClick={() => setVideoLength(len.id)} className={`p-4 rounded-xl border text-left transition-all relative ${videoLength === len.id ? "bg-olive-green/5 border-olive-green/20 ring-1 ring-olive-green/20" : "bg-white border-gray-100 hover:border-gray-200"}`}>
                    <div className="flex items-center justify-between mb-2">
                       <div className="flex items-center gap-2"><Clock size={12} className={videoLength === len.id ? "text-olive-green" : "text-gray-300"} /><span className={`text-[11px] font-bold ${videoLength === len.id ? "text-gray-900" : "text-gray-400"}`}>{len.name}</span></div>
                       {videoLength === len.id && <div className="w-1.5 h-1.5 bg-olive-green rounded-full shadow-sm" />}
                    </div>
                    <div className="space-y-1"><h4 className="text-xs font-black text-gray-900">{len.time}</h4><p className="text-[9px] font-bold text-olive-green italic">{len.sections}</p><p className="text-[10px] text-gray-400 font-medium leading-tight mt-2">{len.desc}</p></div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="space-y-6 animate-fadeIn">
            <div className="flex items-center gap-4">
              <div className="w-6 h-6 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400"><FileText size={12} /></div>
              <div className="flex items-baseline gap-3">
                <h3 className="text-xs font-black text-gray-900 leading-tight">3 Epic Dubai Malls You MUST VISIT</h3>
                <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">{sectionCount} Sections</span>
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-5 space-y-5">
              <div className="space-y-1.5"><span className="text-[9px] font-black text-olive-green uppercase tracking-widest">Intro</span><textarea className="w-full bg-gray-50 border border-gray-100 rounded-xl p-3 text-[11px] font-medium text-gray-700 min-h-[80px] focus:outline-none" defaultValue="Dubai isn't just a city..." /></div>
              <div className="flex items-end justify-between">
                <div className="relative group overflow-hidden rounded-xl border border-gray-200 w-32 aspect-video"><img src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=300" className="w-full h-full object-cover" /></div>
                <div className="flex gap-2">
                  <button className="h-7 px-3 bg-gray-100 text-[10px] font-bold text-gray-500 rounded-lg"><Sparkles size={10} /> Regenerate</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {currentStep === 4 && (
          <div className="space-y-4 animate-fadeIn">
            <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden">
               <div className="p-4 flex items-center justify-between border-b border-gray-50/50">
                  <div className="flex items-center gap-3">
                     <div className="w-5 h-5 bg-olive-green text-white text-[9px] font-black rounded-md flex items-center justify-center">1</div>
                     <h4 className="text-[11px] font-black text-gray-900">The Dubai Mall</h4>
                  </div>
                  <div className="flex items-center gap-1.5"><button className="h-6 px-2 bg-gray-50 text-[9px] font-black text-gray-400 rounded-md border border-gray-100 uppercase tracking-widest">regen</button></div>
               </div>
               <div className="p-4 flex gap-4 overflow-x-auto"><div className="relative group w-32 aspect-video rounded-xl overflow-hidden border border-gray-100 shadow-sm"><img src="https://images.unsplash.com/photo-1541443131876-44b03de101c5?q=80&w=300" className="w-full h-full object-cover" /></div></div>
               <div className="px-4 py-2.5 bg-gray-900/95 flex items-center gap-4"><div className="flex-1 flex items-center gap-3"><span className="text-[9px] font-black text-white/40 tabular-nums">00:00</span><div className="flex-1 h-1 bg-white/10 rounded-full relative"><div className="absolute top-0 left-0 h-full w-1/3 bg-olive-green" /></div><span className="text-[9px] font-black text-white/40 tabular-nums">00:01</span></div><PlayCircle size={14} className="text-white" /></div>
            </div>
          </div>
        )}

        {currentStep === 5 && (
          <div className="space-y-6 animate-fadeIn">
            {/* Ready Status */}
            <div className="flex items-center gap-2 text-green-500">
               <CheckCircle2 size={16} />
               <span className="text-[11px] font-black uppercase tracking-widest">Video Ready!</span>
            </div>

            {/* Video Player Area */}
            <div className="relative w-full aspect-[9/16] md:aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl group flex items-center justify-center">
               {/* Background Placeholder */}
               <img 
                 src="https://images.unsplash.com/photo-1541443131876-44b03de101c5?q=80&w=1200" 
                 className="absolute inset-0 w-full h-full object-cover opacity-50 blur-sm" 
                 alt="Video Background"
               />
               
               {/* Vertical Frame Overlay */}
               <div className="relative h-full aspect-[9/16] bg-black shadow-2xl z-10 flex flex-col items-center justify-center group/player">
                  <img 
                    src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=600" 
                    className="absolute inset-0 w-full h-full object-cover" 
                    alt="Dubai Mall Best"
                  />
                  {/* Overlay text */}
                  <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center p-8 text-center">
                     <h2 className="text-4xl md:text-5xl font-black text-white drop-shadow-2xl italic tracking-tighter leading-none mb-2">BEST</h2>
                     <h2 className="text-4xl md:text-5xl font-black text-white drop-shadow-2xl italic tracking-tighter leading-none mb-2">DUBAI</h2>
                     <h2 className="text-4xl md:text-5xl font-black text-white drop-shadow-2xl italic tracking-tighter leading-none">MALLS</h2>
                  </div>

                  {/* Play Button */}
                  <button className="z-20 w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:scale-110 active:scale-95 transition-all group-hover/player:bg-white/30">
                     <PlayCircle size={32} fill="currentColor" />
                  </button>

                  {/* Bottom Controls */}
                  <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between z-20">
                     <span className="text-[10px] font-black text-white/60 tabular-nums">00:00 / 00:09</span>
                     <div className="flex gap-3">
                        <Monitor size={14} className="text-white/60" />
                        <Clock size={14} className="text-white/60" />
                     </div>
                  </div>
               </div>

               {/* Large Play Icon Overlay */}
               <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/10">
                  <PlayCircle size={64} className="text-white/20" />
               </div>
            </div>

            {/* Post-Assemble Actions */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
               <button className="h-10 bg-olive-green text-white text-[10px] font-black uppercase tracking-widest rounded-2xl flex items-center justify-center gap-2 hover:scale-105 transition-all shadow-lg shadow-olive-green/20">
                  <Download size={14} /> Download
               </button>
               <button className="h-10 bg-white border border-gray-100 text-gray-900 text-[10px] font-black uppercase tracking-widest rounded-2xl flex items-center justify-center gap-2 hover:bg-gray-50 transition-all">
                  <ExternalLink size={14} /> View Link
               </button>
               <button className="h-10 bg-white border border-gray-100 text-gray-900 text-[10px] font-black uppercase tracking-widest rounded-2xl flex items-center justify-center gap-2 hover:bg-gray-50 transition-all">
                  <Share2 size={14} /> Share
               </button>
               <button className="h-10 bg-white border border-gray-100 text-gray-900 text-[10px] font-black uppercase tracking-widest rounded-2xl flex items-center justify-center gap-2 hover:bg-gray-50 transition-all">
                  <Sparkles size={14} /> Upscale
               </button>
            </div>
          </div>
        )}

        {/* Footer Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-gray-50">
           {currentStep > 1 && currentStep < 5 ? (
             <button onClick={() => setCurrentStep(currentStep - 1)} className="h-8 px-5 border border-gray-100 text-gray-400 text-[10px] font-bold uppercase tracking-wider rounded-xl hover:bg-gray-50 transition-all">Back</button>
           ) : <div />}

           {currentStep < 5 ? (
             <button onClick={() => setCurrentStep(currentStep + 1)} className="h-8 px-6 bg-olive-green text-white text-[10px] font-bold uppercase tracking-wider rounded-xl hover:scale-105 active:scale-95 transition-all shadow-md shadow-olive-green/10 flex items-center gap-2">
                {currentStep === 1 ? "Next Stage" : currentStep === 2 ? "Generate Script" : currentStep === 3 ? "Review Assets" : "Final Assemble"} <ChevronRight size={14} />
             </button>
           ) : (
             <button onClick={() => setCurrentStep(1)} className="h-8 px-6 border border-olive-green text-olive-green text-[10px] font-bold uppercase tracking-wider rounded-xl hover:bg-olive-green hover:text-white transition-all">
                Create New Video
             </button>
           )}
        </div>
      </div>
    </div>
  );
}
