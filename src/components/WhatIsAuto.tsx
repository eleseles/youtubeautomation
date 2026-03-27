"use client";

import React from "react";
import { Info, CheckCircle2 } from "lucide-react";

const WhatIsAuto = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-olive-green/10 text-olive-green rounded-full text-xs font-semibold tracking-wider uppercase">
              <Info size={14} />
              <span>Full Definition</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 leading-tight">
              What is <span className="text-olive-green italic font-medium">YouTube Automation</span> and How Can It Scale Your Channel?
            </h2>
            
            <div className="space-y-6 text-lg text-gray-500 font-sans leading-relaxed">
              <p>
                At its core, <span className="font-semibold text-gray-900">YouTube automation</span> is the business model of creating and growing content-driven channels using specialized <span className="font-semibold text-gray-900 text-olive-green">YouTube automation software</span> and artificial intelligence. 
              </p>
              <p>
                Instead of micro-managing every task, you leverage <span className="font-bold text-gray-900 underline decoration-olive-green/30">AI automation</span> to handle scriptwriting, thumbnail design, and video SEO — allowing you to manage multiple channels simultaneously.
              </p>
            </div>

            <ul className="space-y-4 pt-4 text-gray-700 font-medium">
               {[
                 "High-interest YouTube automation niches",
                 "Scalable YouTube automation business model",
                 "Professional AI-powered workflow",
                 "Proven strategies to grow views"
               ].map((item, i) => (
                 <li key={i} className="flex items-center gap-3">
                   <div className="w-5 h-5 rounded-full bg-olive-green/10 flex items-center justify-center">
                      <CheckCircle2 size={14} className="text-olive-green" />
                   </div>
                   <span>{item}</span>
                 </li>
               ))}
            </ul>
          </div>

          {/* Right Image/Display Area */}
          <div className="relative">
            <div className="glass rounded-[40px] p-8 md:p-12 shadow-2xl relative z-10">
               <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 italic font-serif text-xl md:text-2xl text-gray-800 leading-relaxed relative">
                  <span className="absolute -top-6 -left-2 text-6xl text-olive-green/20">"</span>
                  The goal of <span className="text-olive-green font-bold">YouTube Automation AI</span> is to reclaim your time while maximizing your revenue potential through <span className="italic">strategic optimization</span>.
               </div>
               
               <div className="mt-8 flex flex-col md:flex-row items-center gap-6">
                  <div className="flex -space-x-3">
                     {[8, 9, 10].map((i) => (
                        <div key={i} className="w-12 h-12 rounded-full border-4 border-white overflow-hidden">
                           <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=user${i}`} alt="user" className="w-full h-full object-cover" />
                        </div>
                     ))}
                  </div>
                  <div className="text-xs text-gray-400 font-bold uppercase tracking-widest leading-none">
                     Used by top <br /> automation experts
                  </div>
               </div>
            </div>
            
            {/* Background Shape */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-olive-green/5 rounded-full blur-3xl pointer-events-none -z-0" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsAuto;
