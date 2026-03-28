import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SplitHero from "@/components/SplitHero";
import { Sparkles, Zap, Smartphone, ArrowRight, Play, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI TikTok Video Generator (Free)",
  description: "Create viral TikTok content with our AI TikTok Video Generator. Automate your faceless tiktok business and grow faster with AI-powered video creation.",
  alternates: {
    canonical: "https://youtubeautomation.app/ai-tiktok-video-generator",
  }
};

export default function TikTokGeneratorPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background text-gray-900 font-sans">
        {/* Split Hero Section */}
        <SplitHero 
          badge={{ icon: <Smartphone size={14} />, text: "TIKTOK VIRAL FLOW ENGINE" }}
          title={<>AI TikTok Video <span className="text-olive-green italic">Generator</span> (Free)</>}
          description="Automate your faceless tiktok business. Our AI-driven workflow transforms ideas into professionally edited vertical videos for maximum retention."
          bullet="Viral Content System"
          ctaText="Generate Video"
          ctaHref="/dashboard"
          rightElement={<img src="/ai-tiktok-hero.png" alt="TikTok Generator" className="w-full h-full object-cover" />}
          statusText="Viral Flow Active"
        />

        {/* Feature Grid */}
        <section className="py-24 bg-white border-y border-gray-100">
           <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
                 <div className="space-y-4 p-8 bg-[#FCFCFA] rounded-[40px] border border-gray-100 hover:border-olive-green/20 transition-colors group">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-olive-green shadow-sm group-hover:scale-110 transition-transform">
                       <Smartphone size={24} />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-gray-900">Vertical-First</h3>
                    <p className="text-sm text-gray-500 leading-relaxed font-sans">Optimized for TikTok, Reels, and Shorts. High-engagement layouts that capture attention instantly.</p>
                 </div>
                 <div className="space-y-4 p-8 bg-[#FCFCFA] rounded-[40px] border border-gray-100 hover:border-olive-green/20 transition-colors group">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-olive-green shadow-sm group-hover:scale-110 transition-transform">
                       <Zap size={24} />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-gray-900">Instant Captions</h3>
                    <p className="text-sm text-gray-500 leading-relaxed font-sans">AI-powered dynamic captions with perfect timing. Boost retention by keeping viewers glued to the screen.</p>
                 </div>
                 <div className="space-y-4 p-8 bg-[#FCFCFA] rounded-[40px] border border-gray-100 hover:border-olive-green/20 transition-colors group">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-olive-green shadow-sm group-hover:scale-110 transition-transform">
                       <CheckCircle2 size={24} />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-gray-900">Stock Integration</h3>
                    <p className="text-sm text-gray-500 leading-relaxed font-sans">Automatic sourcing of high-quality background footage and music from our royalty-free library.</p>
                 </div>
              </div>
           </div>
        </section>

        {/* Action CTA */}
        <section className="py-32 overflow-hidden">
           <div className="container mx-auto px-4 max-w-4xl text-center space-y-12">
              <h2 className="text-4xl md:text-7xl font-serif font-bold text-gray-900 tracking-tighter leading-[1.1]">
                 Ready to dominate <br />
                 <span className="text-olive-green italic font-medium">TikTok</span>?
              </h2>
              <p className="text-gray-500 font-sans text-lg md:text-xl max-w-2xl mx-auto mb-10">
                 Join thousands of creators using <span className="font-semibold text-gray-900 uppercase tracking-widest text-xs">AI YouTube Automation</span> to scale their social media presence across multiple platforms on autopilot.
              </p>
              <div className="flex flex-col items-center gap-6">
                 <Link 
                   href="/dashboard" 
                   className="bg-black text-white px-12 py-5 rounded-full text-lg font-bold hover:scale-105 transition-all shadow-2xl"
                 >
                    Get Started Now
                 </Link>
                 <Link 
                   href="/blog/how-to-make-ai-tiktok-videos" 
                   className="inline-flex items-center gap-2 text-[10px] font-black text-gray-400 hover:text-olive-green transition-colors uppercase tracking-[0.3em]"
                 >
                    Read our TikTok Strategy <ArrowRight size={14} />
                 </Link>
              </div>
           </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
