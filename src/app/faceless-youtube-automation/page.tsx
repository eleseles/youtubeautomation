import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SplitHero from "@/components/SplitHero";
import { Youtube, Sparkles, Video, Mic, Share2, Zap, ArrowRight, CheckCircle2, PlayCircle } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Faceless YouTube Automation AI (Free)",
  description: "Create and scale faceless YouTube channels with AI. From niche selection and scriptwriting to voiceovers and video editing, automate your entire channel growth.",
  keywords: "faceless youtube automation, ai video generator, automated youtube channel, youtube automation business, ai voiceover youtube, passive income youtube",
  alternates: {
    canonical: "https://youtubeautomation.app/faceless-youtube-automation",
  }
};

export default function FacelessYoutubeAutomationPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#FCFCFA]">
        {/* Split Hero Section */}
        <SplitHero 
          badge={{ icon: <Youtube size={14} />, text: "YOUTUBE AUTOMATION ACTIVE" }}
          title={<>Faceless YouTube Automation <span className="text-olive-green italic">AI</span> (Free)</>}
          description="Launch a profitable YouTube business without ever showing your face. Our AI engine handles scripts, voices, and visual editing on autopilot."
          bullet="Faceless Empire System"
          ctaText="Start Your Channel"
          ctaHref="/dashboard"
          rightElement={<img src="/faceless-hero.png" alt="YouTube Automation" className="w-full h-full object-cover" />}
          statusText="Channel Automation Online"
        />

        {/* Feature Highlights */}
        <section className="py-24 bg-white border-y border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-4">Complete Automation Workflow</h2>
              <p className="text-gray-500 max-w-xl mx-auto">Everything you need to run multiple YouTube channels from a single dashboard.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Mic className="text-olive-green" size={24} />,
                  title: "AI Voiceover Engine",
                  desc: "Select from hundreds of human-like AI voices in 50+ languages for your videos."
                },
                {
                  icon: <Video className="text-olive-green" size={24} />,
                  title: "Automated Video Editor",
                  desc: "AI automatically syncs visuals, clips, and captions based on your generated script."
                },
                {
                  icon: <PlayCircle className="text-olive-green" size={24} />,
                  title: "Niche Research AI",
                  desc: "Discover high-CPM, low-competition niches for maximum profitability."
                }
              ].map((feature, i) => (
                <div key={i} className="p-8 rounded-2xl bg-[#FCFCFA] border border-gray-50 hover:border-olive-green/20 transition-all group">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Passive Income Focus */}
        <section className="py-24 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
              <div className="lg:w-1/2 space-y-8">
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 leading-[1.1]">
                  Build a <br />
                  <span className="text-olive-green italic font-medium">Passive Income Stream</span>
                </h2>
                <p className="text-lg text-gray-500 leading-relaxed">
                  Faceless YouTube automation is the ultimate digital asset. Once your channel starts gaining traction, our AI ensures consistent content delivery to keep the revenue flowing.
                </p>
                <ul className="space-y-4">
                  {[
                    "Daily automated video uploads",
                    "SEO-optimized titles & descriptions",
                    "AI Thumbnail generation A/B testing",
                    "Automated community post management"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                      <CheckCircle2 className="text-olive-green" size={20} />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="pt-4">
                  <Link
                    href="/dashboard"
                    className="inline-flex items-center gap-2 text-olive-green font-bold hover:gap-4 transition-all"
                  >
                    View earning calculator <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
              <div className="lg:w-1/2 relative text-white">
                 <div className="bg-gray-900 p-8 rounded-3xl shadow-2xl relative border border-white/10">
                    <div className="absolute top-4 right-4 animate-pulse">
                        <div className="w-3 h-3 bg-red-500 rounded-full" />
                    </div>
                    <div className="space-y-6">
                        <div className="pb-4 border-b border-white/10">
                             <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Active Channel Revenue</p>
                             <p className="text-4xl font-serif font-bold mt-1">$12,402.50</p>
                             <p className="text-xs text-green-400 mt-2">+14.2% from last month</p>
                        </div>
                        <div className="space-y-4">
                            {[
                                { n: "History Channel", v: "1.2M", r: "$4,200" },
                                { n: "Tech Reviews", v: "840K", r: "$3,150" },
                                { n: "Motivation AI", v: "2.1M", r: "$5,052" }
                            ].map((ch, i) => (
                                <div key={i} className="flex items-center justify-between text-sm">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center font-bold text-[10px]">{ch.n[0]}</div>
                                        <span className="text-gray-300 font-medium">{ch.n}</span>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-bold">{ch.r}</p>
                                        <p className="text-[10px] text-gray-500">{ch.v} views</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="py-24 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-olive-green rounded-[2.5rem] p-12 md:p-24 relative overflow-hidden text-center text-white shadow-2xl shadow-olive-green/20">
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_0%,_white_1px,_transparent_1px)] bg-[size:30px_30px]" />
            </div>
            
            <div className="relative z-10 max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-6xl font-serif font-medium tracking-tight">
                Your faceless empire <br />
                <span className="italic text-gray-900/40">starts here.</span>
              </h2>
              <p className="text-white/80 text-lg md:text-xl">
                The most advanced YouTube automation tool is now available for creators worldwide.
              </p>
              <div className="pt-4">
                <Link
                  href="/dashboard"
                  className="bg-white text-gray-900 px-12 py-5 rounded-full text-lg font-bold hover:scale-105 transition-transform inline-block shadow-2xl"
                >
                  Join the Program
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
