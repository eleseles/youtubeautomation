"use client";

import React from "react";
import { UserMinus, Sparkles, TrendingUp, Cpu } from "lucide-react";

const FacelessAuto = () => {
    return (
        <section className="py-24 bg-secondary/30 relative overflow-hidden text-left">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-olive-green/5 rounded-full blur-[120px] -z-0" />
            
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    {/* Left: Content & Features */}
                    <div className="w-full lg:w-1/2 space-y-12">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-gray-100 text-olive-green rounded-full text-[10px] font-bold tracking-widest uppercase shadow-sm">
                                <UserMinus size={12} />
                                <span>100% Privacy & Scale</span>
                            </div>
                            
                            <h2 className="text-3xl md:text-6xl font-serif font-bold text-gray-900 tracking-tight leading-[1.1]">
                                Master <span className="text-olive-green italic font-medium">Faceless</span> <br />
                                YouTube Automation
                            </h2>
                            
                            <p className="text-lg text-gray-500 leading-relaxed max-w-xl">
                                Build an empire of <span className="font-semibold text-gray-900">automated youtube channels</span> without ever stepping in front of a camera. Scale <span className="font-semibold text-gray-900 text-olive-green text-olive-green underline decoration-olive-green/20">faceless youtube automation</span> with AI.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                           {[
                              { title: "Anonymous Growth", desc: "No camera, no mic, just pure scalable revenue." },
                              { title: "Niche Dominance", desc: "Manage multiple high-CPM niches simultaneously." },
                              { title: "AI Voice & Visuals", desc: "Generate human-like voiceovers and pro visuals." },
                              { title: "Global Reach", desc: "Translate and automate for any international market." }
                           ].map((item, i) => (
                              <div key={i} className="p-6 glass rounded-3xl border-white/50 hover:bg-white transition-all duration-300">
                                 <h4 className="text-sm font-bold text-gray-900 mb-1">{item.title}</h4>
                                 <p className="text-xs text-gray-400 font-medium">{item.desc}</p>
                              </div>
                           ))}
                        </div>
                    </div>

                    {/* Right: The Pipeline Visualization */}
                    <div className="w-full lg:w-1/2">
                        <div className="glass p-10 rounded-[48px] border-white shadow-2xl space-y-10 relative overflow-hidden">
                           <div className="absolute top-0 right-0 w-32 h-32 bg-olive-green/5 rounded-full blur-2xl" />
                           
                           <h3 className="text-xl font-serif font-bold text-gray-900 text-center">AI Content Pipeline</h3>
                           
                           <div className="space-y-12 relative">
                              {/* Connector Line */}
                              <div className="absolute top-0 bottom-0 left-[23.5px] w-0.5 bg-gray-100" />
                              
                              {[
                                 { icon: Sparkles, title: "AI Scripting", desc: "Viral hooks & data-driven storytelling." },
                                 { icon: Cpu, title: "Voice & Sync", desc: "Human-grade AI voiceover synthesis." },
                                 { icon: TrendingUp, title: "Automated SEO", desc: "Dynamic metadata & CTR-optimized thumbnails." }
                              ].map((step, i) => (
                                 <div key={i} className="flex gap-6 relative z-10 group">
                                    <div className="w-12 h-12 rounded-full bg-white shadow-md border border-gray-50 flex items-center justify-center group-hover:bg-olive-green transition-all duration-500">
                                       <step.icon className="text-olive-green group-hover:text-white transition-colors" size={20} />
                                    </div>
                                    <div className="space-y-1">
                                       <h5 className="text-sm font-bold text-gray-900 leading-none">{step.title}</h5>
                                       <p className="text-xs text-gray-400 font-medium italic">{step.desc}</p>
                                    </div>
                                 </div>
                              ))}
                           </div>

                           <div className="pt-6 border-t border-gray-100">
                              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest text-center">
                                 Your <span className="text-olive-green">Faceless YouTube Business</span> starts here
                              </p>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FacelessAuto;
