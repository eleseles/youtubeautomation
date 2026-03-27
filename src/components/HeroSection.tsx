"use client";

import React from "react";
import Link from "next/link";
import { Youtube, Sparkles, Play, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-background">
      {/* Background Ornaments */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-[10%] right-[10%] w-64 h-64 bg-olive-green/5 rounded-full blur-3xl" />
        <div className="absolute bottom-[20%] left-[5%] w-96 h-96 bg-olive-green/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-olive-green/10 text-olive-green rounded-full text-[10px] md:text-xs font-semibold tracking-wider uppercase animate-fadeIn">
            <Sparkles size={12} className="md:size-[14px]" />
            <span>AI-Powered Content Creation</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-7xl font-serif font-bold text-gray-900 leading-[1.2] md:leading-[1.1] tracking-tighter">
            <span className="text-olive-green italic font-medium">AI YouTube Automation Software</span>: Build Your <span className="text-olive-green italic font-medium">Faceless YouTube Channel Business</span>
          </h1>

          {/* Subtext */}
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-500 font-sans leading-relaxed">
            The leading <span className="font-semibold text-gray-900">YouTube Automation AI</span> platform to build your <span className="font-semibold text-gray-900">YouTube automation business</span>. 
            Automate your workflow, generate AI video scripts, and grow your automated youtube views on autopilot.
          </p>


          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/auth/register"
              className="w-full sm:w-auto bg-olive-green text-white px-10 py-4 rounded-full text-base font-medium hover:bg-olive-green-light transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2 group"
            >
              <span>Get Started Now</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#how-it-works"
              className="w-full sm:w-auto px-10 py-4 rounded-full text-base font-medium text-gray-900 border border-gray-200 hover:bg-gray-50 transition-all flex items-center justify-center gap-2"
            >
              <Play size={18} />
              <span>How it Works</span>
            </Link>
          </div>

          {/* Social Proof */}
          <div className="pt-12 flex flex-col items-center gap-4">
            <p className="text-xs font-medium text-gray-400 uppercase tracking-widest">
              Trusted by 5,000+ Creators
            </p>

            <div className="flex -space-x-3">
               {[1, 2, 3, 4, 5].map((i) => (
                 <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-100 overflow-hidden flex items-center justify-center">
                   <img 
                     src={`https://api.dicebear.com/7.x/avataaars/svg?seed=user${i}`} 
                     alt={`User ${i}`} 
                     className="w-full h-full object-cover"
                   />
                 </div>
               ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};


export default HeroSection;
