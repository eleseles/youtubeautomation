"use client";

import React from "react";
import Link from "next/link";
import { Briefcase, BarChart3, Rocket, DollarSign } from "lucide-react";

const BusinessAuto = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    {/* Left Side: Overlapping Dashboard Cards */}
                    <div className="w-full lg:w-1/2 relative">
                        <div className="relative z-10 space-y-4">
                            {/* Main Revenue Card */}
                            <div className="glass p-8 rounded-[32px] border-white/50 shadow-xl max-w-sm ml-auto mr-8 transform -rotate-3 hover:rotate-0 transition-all duration-700 group">
                               <div className="flex items-center justify-between mb-6">
                                  <div className="w-12 h-12 rounded-2xl bg-olive-green flex items-center justify-center shadow-lg shadow-olive-green/20">
                                     <DollarSign size={24} className="text-white" />
                                  </div>
                                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest bg-gray-50 px-3 py-1 rounded-full">Passive Income</span>
                               </div>
                               <div className="space-y-1">
                                  <p className="text-sm font-medium text-gray-500">Monthly Projected Revenue</p>
                                  <p className="text-4xl font-serif font-bold text-gray-900">$12,450.00</p>
                               </div>
                               <div className="mt-6 pt-6 border-t border-gray-100 flex items-center justify-between">
                                  <div className="flex -space-x-2">
                                     {[1, 2, 3].map(i => (
                                        <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-100 overflow-hidden">
                                            <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=biz${i}`} alt="user" className="w-full h-full object-cover" />
                                        </div>
                                     ))}
                                  </div>
                                  <span className="text-xs font-bold text-olive-green">+24.5% Growth</span>
                               </div>
                            </div>

                            {/* Automated Views Card */}
                            <div className="glass p-6 rounded-[28px] border-white/50 shadow-lg max-w-[280px] absolute -bottom-10 -left-4 z-20 animate-float">
                               <div className="flex items-center gap-4">
                                  <div className="w-10 h-10 rounded-xl bg-olive-green/5 flex items-center justify-center">
                                     <BarChart3 size={20} className="text-olive-green" />
                                  </div>
                                  <div className="space-y-0.5">
                                     <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">Automated Views</p>
                                     <p className="text-xl font-bold text-gray-900 tracking-tight leading-none">1.2M+</p>
                                  </div>
                               </div>
                            </div>
                        </div>

                        {/* Gradient Background Decoration */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-olive-green/10 rounded-full blur-[100px] -z-0" />
                    </div>

                    {/* Right Side: Content & Blueprint */}
                    <div className="w-full lg:w-1/2 space-y-10">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-olive-green/10 text-olive-green rounded-full text-[10px] font-bold tracking-widest uppercase">
                                <Briefcase size={12} />
                                <span>Business Blueprint</span>
                            </div>
                            
                            <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 tracking-tight leading-[1.1]">
                                The Evolution of Your <br />
                                <span className="text-olive-green italic font-medium">YouTube Automation Business</span>
                            </h2>
                            
                            <p className="text-lg text-gray-500 font-sans leading-relaxed max-w-xl">
                                Stop guessing and start scaling with a proven framework for <span className="font-semibold text-gray-900 text-olive-green">automated youtube channels</span>. 
                                Master how to do youtube automation like the top 1%.
                            </p>
                        </div>

                        <div className="space-y-8">
                            {[
                                { title: "Niche Selection", desc: "Identify high-CPM niches for your automated channel." },
                                { title: "Workflow Setup", desc: "Integrate our YouTube automation software for 24/7 production." },
                                { title: "Strategic Scaling", desc: "Grow your automated youtube views exponentially." }
                            ].map((step, idx) => (
                                <div key={idx} className="flex gap-6 group">
                                    <span className="text-2xl font-serif font-bold text-olive-green/40 group-hover:text-olive-green transition-colors leading-none">0{idx + 1}</span>
                                    <div className="space-y-1">
                                        <h4 className="text-lg font-bold text-gray-900 tracking-tight leading-none">{step.title}</h4>
                                        <p className="text-sm text-gray-400 font-medium">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="pt-4">
                            <Link href="/auth/register" className="inline-flex items-center gap-3 bg-olive-green text-white px-8 py-4 rounded-full text-sm font-bold hover:bg-olive-green-light transition-all shadow-xl shadow-olive-green/10 transform hover:-translate-y-1">
                                Start Scaling Today
                                <Rocket size={18} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BusinessAuto;
