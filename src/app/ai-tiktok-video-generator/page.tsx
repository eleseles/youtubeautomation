import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import Link from "next/link";
import { Sparkles, Zap, Smartphone, ArrowRight, Play, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "AI TikTok Video Generator",
  description: "Create viral TikTok content with our AI TikTok Video Generator. Automate your faceless tiktok business and grow faster with AI-powered video creation.",
  alternates: {
    canonical: "https://youtubeautomation.app/ai-tiktok-video-generator",
  }
};

export default function TikTokGeneratorPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Simple Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
            <div className="absolute top-[10%] right-[10%] w-64 h-64 bg-olive-green/5 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-olive-green/10 text-olive-green rounded-full text-[10px] md:text-xs font-semibold tracking-wider uppercase">
              <Sparkles size={12} />
              <span>Viral Content Engine</span>
            </div>
            
            <h1 className="max-w-4xl mx-auto text-4xl md:text-7xl font-serif font-bold text-gray-900 leading-[1.1] tracking-tighter">
              AI <span className="text-olive-green italic font-medium">TikTok</span> Video Generator: Create <span className="text-olive-green italic font-medium">Viral Content</span> in Seconds
            </h1>

            <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-500 font-sans leading-relaxed">
              Automate your <span className="font-semibold text-gray-900">faceless tiktok business</span>. Our AI-driven workflow transforms your ideas into professionally edited vertical videos designed for maximum retention.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                href="/auth/register"
                className="w-full sm:w-auto bg-olive-green text-white px-10 py-4 rounded-full text-base font-medium hover:bg-olive-green-light transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                <span>Generate Video</span>
                <ArrowRight size={18} />
              </Link>
              <button className="w-full sm:w-auto px-10 py-4 rounded-full text-base font-medium text-gray-900 border border-gray-100 hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
                <Play size={18} />
                <span>See Examples</span>
              </button>
            </div>
          </div>
        </section>

        {/* Feature Grid - Minimal */}
        <section className="py-24 bg-white">
           <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
                 <div className="space-y-4 p-8 bg-gray-50/50 rounded-[40px] border border-gray-100 hover:border-olive-green/20 transition-colors">
                    <div className="w-12 h-12 bg-olive-green/10 rounded-2xl flex items-center justify-center text-olive-green">
                       <Smartphone size={24} />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-gray-900">Vertical-First</h3>
                    <p className="text-sm text-gray-500 leading-relaxed font-sans">Optimized for TikTok, Reels, and Shorts. High-engagement layouts that capture attention instantly.</p>
                 </div>
                 <div className="space-y-4 p-8 bg-gray-50/50 rounded-[40px] border border-gray-100 hover:border-olive-green/20 transition-colors">
                    <div className="w-12 h-12 bg-olive-green/10 rounded-2xl flex items-center justify-center text-olive-green">
                       <Zap size={24} />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-gray-900">Instant Captions</h3>
                    <p className="text-sm text-gray-500 leading-relaxed font-sans">AI-powered dynamic captions with perfect timing. Boost retention by keeping viewers glued to the screen.</p>
                 </div>
                 <div className="space-y-4 p-8 bg-gray-50/50 rounded-[40px] border border-gray-100 hover:border-olive-green/20 transition-colors">
                    <div className="w-12 h-12 bg-olive-green/10 rounded-2xl flex items-center justify-center text-olive-green">
                       <CheckCircle2 size={24} />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-gray-900">Stock Integration</h3>
                    <p className="text-sm text-gray-500 leading-relaxed font-sans">Automatic sourcing of high-quality background footage and music from our royalty-free library.</p>
                 </div>
              </div>
           </div>
        </section>

        {/* Action CTA */}
        <section className="py-24 bg-gray-50">
           <div className="container mx-auto px-4 max-w-4xl text-center space-y-8">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 tracking-tight">
                 Ready to dominate <span className="text-olive-green italic font-medium">TikTok</span>?
              </h2>
              <p className="text-gray-500 font-sans max-w-2xl mx-auto">
                 Join thousands of creators using <span className="font-semibold text-gray-900">YouTube Automation AI</span> to scale their social media presence across multiple platforms on autopilot.
              </p>
              <Link 
                href="/blog/how-to-make-ai-tiktok-videos" 
                className="inline-flex items-center gap-2 text-xs font-black text-gray-400 hover:text-olive-green transition-colors uppercase tracking-[0.2em]"
              >
                 Read our TikTok Strategy <ArrowRight size={14} />
              </Link>
           </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
