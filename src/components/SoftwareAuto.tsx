"use client";

import React from "react";
import { Cpu, Terminal, Layers, Workflow, CheckCircle } from "lucide-react";

const SoftwareAuto = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto space-y-16">

                    {/* Header */}
                    <div className="text-center space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-olive-green/5 text-olive-green rounded-full text-[10px] font-bold tracking-widest uppercase">
                            <Terminal size={12} />
                            <span>Proprietary AI Ecosystem</span>
                        </div>
                        
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 tracking-tight leading-[1.1]">
                            The Leading <br />
                            <span className="text-olive-green italic font-medium">YouTube Automation Software</span>
                        </h2>
                        
                        <p className="text-lg text-gray-500 font-sans leading-relaxed max-w-2xl mx-auto">
                            Scale your <span className="font-semibold text-gray-900">automated youtube channels</span> with the industry's most advanced <span className="font-semibold text-gray-900 text-olive-green">workflow automation</span> suite. Stop guessing and start automating.
                        </p>
                    </div>

                    {/* 4-Card Tool Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-12">
                        {/* Tool 1: Scripting */}
                        <div className="p-8 glass rounded-[36px] border-white/40 hover:bg-white transition-all duration-500 shadow-xl shadow-gray-50/50 group bg-gray-50/10">
                           <div className="flex items-center justify-between mb-8">
                              <div className="w-12 h-12 rounded-2xl bg-olive-green flex items-center justify-center shadow-lg shadow-olive-green/20 group-hover:scale-110 transition-transform">
                                 <Terminal className="text-white" size={24} />
                              </div>
                              <span className="text-[10px] font-bold text-olive-green bg-olive-green/5 px-3 py-1 rounded-full uppercase tracking-widest">Script AI</span>
                           </div>
                           <h3 className="text-lg font-bold font-serif text-gray-900 mb-2 tracking-tight">AI Master Scripting</h3>
                           <p className="text-xs text-gray-400 font-medium leading-relaxed mb-6">
                              Our <span className="text-gray-900">youtube automation software</span> creates viral, high-retention scripts using data-driven narrative hooks.
                           </p>
                           <div className="flex flex-wrap gap-2">
                              {["Hooks", "Storyboards", "Sync"].map(tag => (
                                 <span key={tag} className="text-[9px] font-bold text-gray-400 border border-gray-100 px-2 py-0.5 rounded text-gray-600 uppercase tracking-widest">{tag}</span>
                              ))}
                           </div>
                        </div>

                        {/* Tool 2: Voiceover */}
                        <div className="p-8 glass rounded-[36px] border-white/40 hover:bg-white transition-all duration-500 shadow-xl shadow-gray-50/50 group bg-gray-50/10">
                           <div className="flex items-center justify-between mb-8">
                              <div className="w-12 h-12 rounded-2xl bg-olive-green flex items-center justify-center shadow-lg shadow-olive-green/20 group-hover:scale-110 transition-transform">
                                 <Cpu className="text-white" size={24} />
                              </div>
                              <span className="text-[10px] font-bold text-olive-green bg-olive-green/5 px-3 py-1 rounded-full uppercase tracking-widest">Neural Voice</span>
                           </div>
                           <h3 className="text-lg font-bold font-serif text-gray-900 mb-2 tracking-tight">Neural Voice Synthesis</h3>
                           <p className="text-xs text-gray-400 font-medium leading-relaxed mb-6">
                              Human-grade <span className="text-gray-900">voiceover generation</span> integrated directly into your <span className="text-gray-900 text-olive-green">automation workflow</span>.
                           </p>
                           <div className="flex flex-wrap gap-2">
                              {["Human-Like", "40+ Languages", "Tone Control"].map(tag => (
                                 <span key={tag} className="text-[9px] font-bold text-gray-400 border border-gray-100 px-2 py-0.5 rounded text-gray-600 uppercase tracking-widest">{tag}</span>
                              ))}
                           </div>
                        </div>

                        {/* Tool 3: SEO */}
                        <div className="p-8 glass rounded-[36px] border-white/40 hover:bg-white transition-all duration-500 shadow-xl shadow-gray-50/50 group bg-gray-50/10">
                           <div className="flex items-center justify-between mb-8">
                              <div className="w-12 h-12 rounded-2xl bg-olive-green flex items-center justify-center shadow-lg shadow-olive-green/20 group-hover:scale-110 transition-transform">
                                 <Layers className="text-white" size={24} />
                              </div>
                              <span className="text-[10px] font-bold text-olive-green bg-olive-green/5 px-3 py-1 rounded-full uppercase tracking-widest">SEO Engine</span>
                           </div>
                           <h3 className="text-lg font-bold font-serif text-gray-900 mb-2 tracking-tight">Rank-First Video SEO</h3>
                           <p className="text-xs text-gray-400 font-medium leading-relaxed mb-6">
                              Maximize your <span className="text-gray-900">automated youtube views</span> with keyword extraction and AI metadata syncing.
                           </p>
                           <div className="flex flex-wrap gap-2">
                              {["Metadata", "Title AI", "Tag Sync"].map(tag => (
                                 <span key={tag} className="text-[9px] font-bold text-gray-400 border border-gray-100 px-2 py-0.5 rounded text-gray-600 uppercase tracking-widest">{tag}</span>
                              ))}
                           </div>
                        </div>

                        {/* Tool 4: Growth */}
                        <div className="p-8 glass rounded-[36px] border-white/40 hover:bg-white transition-all duration-500 shadow-xl shadow-gray-50/50 group bg-gray-50/10">
                           <div className="flex items-center justify-between mb-8 text-olive-green">
                              <div className="w-12 h-12 rounded-2xl bg-olive-green flex items-center justify-center shadow-lg shadow-olive-green/20 group-hover:scale-110 transition-transform">
                                 <Workflow className="text-white" size={24} />
                              </div>
                              <span className="text-[10px] font-bold text-olive-green bg-olive-green/5 px-3 py-1 rounded-full uppercase tracking-widest">Scaling Hub</span>
                           </div>
                           <h3 className="text-lg font-bold font-serif text-gray-900 mb-2 tracking-tight">Multi-Channel Automator</h3>
                           <p className="text-xs text-gray-400 font-medium leading-relaxed mb-6">
                              The only <span className="text-gray-900">YouTube automation software</span> designed to manage and scale dozens of channels from one place.
                           </p>
                           <div className="flex flex-wrap gap-2">
                              {["Bulk Upload", "Analytics", "Multi-Niche"].map(tag => (
                                 <span key={tag} className="text-[9px] font-bold text-gray-400 border border-gray-100 px-2 py-0.5 rounded text-gray-600 uppercase tracking-widest">{tag}</span>
                              ))}
                           </div>
                        </div>
                    </div>


                    {/* Footer / CTA in section */}
                    <div className="pt-12 flex flex-col items-center gap-6">
                       <div className="flex items-center gap-3 text-olive-green">
                          <Workflow size={20} className="animate-spin-slow" />
                          <span className="text-xs font-bold uppercase tracking-[0.2em]">Scale Your Workflow 24/7</span>
                       </div>
                       <p className="text-sm text-gray-400 font-medium max-w-lg text-center leading-relaxed">
                          Your entire <span className="font-semibold text-gray-900 border-b border-gray-100 italic">automated youtube journey</span> is managed through a single dashboard, giving you total freedom to grow your empire.
                       </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SoftwareAuto;
