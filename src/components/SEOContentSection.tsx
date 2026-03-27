"use client";

import React from "react";
import { Sparkles, ArrowRight, CheckCircle2, Search, TrendingUp, Cpu } from "lucide-react";

const SEOContentSection = () => {
  return (
    <section className="py-24 bg-gray-50/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Main Content Column */}
          <div className="lg:col-span-8 space-y-12">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-olive-green/10 text-olive-green rounded-full text-xs font-semibold tracking-wider uppercase">
                <Sparkles size={14} />
                <span>Deep Dive Analysis</span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 leading-tight">
                Mastering the <span className="text-olive-green italic font-medium">YouTube Automation Business</span> in 2026
              </h2>
              
              <div className="prose prose-lg prose-olive font-sans text-gray-600 max-w-none space-y-6">
                <p>
                  The landscape of digital content creation has undergone a seismic shift. Today, starting a <span className="font-semibold text-gray-900">youtube automation business</span> isn't just a trend—it's a sophisticated data-driven venture. By leveraging <span className="font-semibold text-gray-900 text-olive-green">youtube automation software</span> and advanced AI, creators are now able to manage multiple <span className="font-semibold text-gray-900">automated youtube channels</span> that generate consistent passive income without the need for traditional video production teams.
                </p>
                <p>
                  But <span className="font-bold text-gray-900 underline decoration-olive-green/20 underline-offset-4 italic">is youtube automation legit?</span> Absolutely. Major media conglomerates have used similar "faceless" models for decades. The difference now is that <span className="font-semibold text-gray-900">ai youtube automation</span> tools have democratized this process, allowing individual entrepreneurs to scale their <span className="font-semibold text-gray-900">automated youtube views</span> and revenue potential like never before.
                </p>
                
                <h3 className="text-2xl font-serif font-bold text-gray-900 mt-12 mb-6">
                  The Blueprint for <span className="text-olive-green italic font-medium">Automated Success</span>
                </h3>
                
                <p>
                  To build a successful <span className="font-semibold text-gray-900">youtube automation business</span>, you need three core pillars: 
                  <span className="bg-olive-green/5 px-2 py-0.5 rounded text-olive-green font-medium">Niche Optimization</span>, 
                  <span className="bg-olive-green/5 px-2 py-0.5 rounded text-olive-green font-medium">Algorithmic Alignment</span>, and 
                  <span className="bg-olive-green/5 px-2 py-0.5 rounded text-olive-green font-medium">Systemic Scaling</span>.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div className="glass p-8 rounded-[32px] border border-gray-100 space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-olive-green">
                    <Search size={24} />
                  </div>
                  <h4 className="text-xl font-serif font-bold text-gray-900">Keyword Supremacy</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Our <span className="font-semibold text-gray-900">youtube automation software</span> identifies high-CPM keywords that ensure your <span className="font-semibold text-gray-900">automated youtube channel</span> targets the most profitable audiences worldwide.
                  </p>
                </div>
                
                <div className="glass p-8 rounded-[32px] border border-gray-100 space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-olive-green">
                    <TrendingUp size={24} />
                  </div>
                  <h4 className="text-xl font-serif font-bold text-gray-900">Viral Mechanics</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    We decode the YouTube algorithm using <span className="font-semibold text-gray-900">ai youtube automation</span> to predict trends before they happen, giving your <span className="font-semibold text-gray-900">automated youtube views</span> an unfair advantage.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar/Callouts Column */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-olive-green text-white p-10 rounded-[40px] shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-500">
                <Cpu size={120} />
              </div>
              
              <div className="relative z-10 space-y-6">
                <h4 className="text-2xl font-serif font-bold leading-tight">
                  Ready to start your <br />
                  <span className="italic font-medium text-white/80">Automation Journey</span>?
                </h4>
                <p className="text-white/70 text-sm leading-relaxed">
                  Join 5,000+ creators who have built a sustainable <span className="font-bold text-white">youtube automation business</span> using our proprietary AI workflow.
                </p>
                <button className="w-full py-4 bg-white text-olive-green rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors shadow-lg">
                  Get Started Now
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>

            <div className="glass p-8 rounded-[40px] border border-gray-100 space-y-6">
                <h5 className="text-sm font-bold text-gray-900 uppercase tracking-widest">Key Takeaways</h5>
                <ul className="space-y-4">
                  {[
                    "Passive Income Systems",
                    "AI Content Generation",
                    "Algorithmic SEO Strategy",
                    "Niche Market Analysis",
                    "Scaling Infrastructure"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                      <CheckCircle2 size={16} className="text-olive-green" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SEOContentSection;
