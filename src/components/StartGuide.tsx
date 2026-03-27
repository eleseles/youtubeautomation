"use client";

import React from "react";
import { Compass, Zap, Flag, ArrowRight } from "lucide-react";

const StartGuide = () => {
    return (
        <section className="py-24 bg-gray-50/50 relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16 space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-gray-100 text-olive-green rounded-full text-[10px] font-bold tracking-widest uppercase shadow-sm">
                            <Compass size={12} />
                            <span>Roadmap to Success</span>
                        </div>
                        
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 tracking-tight leading-[1.1]">
                            The Essential Blueprint: <br />
                            <span className="text-olive-green italic font-medium">How to Start a YouTube Automation Channel</span>
                        </h2>
                        
                        <p className="text-lg text-gray-500 font-sans leading-relaxed max-w-2xl mx-auto">
                            Stop wondering <span className="font-semibold text-gray-900">how to start youtube automation</span>. 
                            Our proven strategy takes your <span className="font-semibold text-gray-900 text-olive-green underline decoration-olive-green/10">automated youtube business</span> from zero to first revenue in 30 days.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {[
                            { 
                                step: "01", 
                                title: "Niche Selection & Market Research", 
                                desc: "Find high-CPM categories for your automated channel. We help you identify niches with the highest return on investment (ROI) using our data tools."
                            },
                            { 
                                step: "02", 
                                title: "AI Automation Infrastructure", 
                                desc: "Setup your youtube automation software. Connect your AI content engine to your channel to start a youtube automation channel the right way."
                            },
                            { 
                                step: "03", 
                                title: "Infinite Content Workflow", 
                                desc: "Master the art of generating scripts, voiceovers, and visuals automatically. Scale your faceless youtube automation without manual work."
                            },
                            { 
                                step: "04", 
                                title: "Advanced SEO & CTR Optimization", 
                                desc: "Learn how to get automated youtube views by optimizing your titles, descriptions, and thumbnails using neural AI algorithms."
                            },
                            { 
                                step: "05", 
                                title: "Exponential Channel Scaling", 
                                desc: "Once your first channel is profitable, we show you how to start youtube automation across 10+ channels simultaneously."
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="group p-8 glass rounded-[36px] border-white/40 hover:bg-white transition-all duration-500 shadow-sm flex flex-col md:flex-row gap-8 items-start hover:shadow-xl hover:shadow-gray-100/50">
                                <div className="w-14 h-14 bg-olive-green text-white rounded-2xl flex items-center justify-center font-serif font-bold text-xl shrink-0 group-hover:scale-110 transition-transform shadow-lg shadow-olive-green/20">
                                   {item.step}
                                </div>
                                <div className="space-y-2 pt-2">
                                    <h3 className="text-xl font-bold font-serif text-gray-900 tracking-tight leading-none group-hover:text-olive-green transition-colors">{item.title}</h3>
                                    <p className="text-sm text-gray-400 font-medium leading-relaxed max-w-2xl">
                                       {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>


                    <div className="mt-16 text-center">
                       <button className="inline-flex items-center gap-2 text-sm font-bold text-olive-green group">
                          <span>Get the full checklist</span>
                          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                       </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StartGuide;
