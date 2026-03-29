import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SplitHero from "@/components/SplitHero";
import AggressiveFAQ from "@/components/AggressiveFAQ";
import BlogCarousel from "@/components/BlogCarousel";
import { Smartphone, Zap, Sparkles, ArrowRight, CheckCircle2, Play, Rocket, BarChart3, Shield } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI TikTok Video Generator (Free)",
  description: "Create viral and faceless TikTok videos in seconds with AI. From trending script generation to automatic vertical video editing, dominate the FYP effortlessly.",
  keywords: "ai tiktok video generator, tiktok automation, viral tiktok ai, vertical video generator, faceless tiktok tool",
  alternates: {
    canonical: "https://youtubeautomation.app/ai-tiktok-video-generator",
  }
};

const faqs = [
  {
    q: "Can I really go viral in 24 hours?",
    a: "Success is never guaranteed, but our AI-Signal Radar identifies trends 48 hours before they peak. By posting trend-optimized content in the first 'viral-wave', your chances of hitting the FYP increase by 400% compared to manual posting."
  },
  {
    q: "Does TikTok detect AI-generated content?",
    a: "Our engine uses low-entropy generation which produces high-bitrate, human-like video structures. TikTok detects quality and engagement, not the tool used to create it. If people watch it, TikTok pushes it."
  },
  {
    q: "How many videos can I generate per day?",
    a: "As many as your account can handle. We recommend 2-3 high-quality viral attempts per day. Our system can generate 10+ videos in the time it takes you to drink a cup of coffee."
  },
  {
    q: "Do I need any video editing skills?",
    a: "Absolutely zero. If you can provide a topic or a keyword, the AI handles the script, the cuts, the captions, and the music synchronization. You focus on the niche; we focus on the viral execution."
  }
];

export default function AITiktokVideoGeneratorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "AI TikTok Video Generator",
        "operatingSystem": "Web",
        "applicationCategory": "BusinessApplication",
        "datePublished": "2026-03-20T08:00:00+00:00",
        "dateModified": "2026-03-29T12:00:00+00:00",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "ratingCount": "1920"
        }
      },
      {
        "@type": "FAQPage",
        "datePublished": "2026-03-20T08:00:00+00:00",
        "dateModified": "2026-03-29T12:00:00+00:00",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a
          }
        }))
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://youtubeautomation.app"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "AI TikTok Video Generator",
            "item": "https://youtubeautomation.app/ai-tiktok-video-generator"
          }
        ]
      }
    ]
  };

  return (
    <>
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="bg-[#FCFCFA]">
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

        {/* What is AI TikTok Video Generator? Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-8 tracking-tight">
                What is <span className="text-olive-green italic">AI TikTok Video Generator?</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed font-light">
                AI TikTok Video Generator is a specialized engine for the vertical-video era. It's a <span className="font-semibold text-gray-900">viral-engineered workflow</span> that handles rapid script development, high-energy editing, and dynamic captions to dominate the FYP on autopilot.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="group">
                  <div className="flex gap-6 items-start">
                    <div className="w-14 h-14 bg-olive-green/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-olive-green group-hover:text-white transition-all duration-300">
                      <Smartphone size={28} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">Vertical-First Logic</h3>
                      <p className="text-gray-500 leading-relaxed">
                        The engine doesn't just crop video; it designs for the vertical frame. It knows where to place captions, overlays, and hooks for maximum visual impact on mobile screens.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="flex gap-6 items-start">
                    <div className="w-14 h-14 bg-olive-green/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-olive-green group-hover:text-white transition-all duration-300">
                      <Zap size={28} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">Instant Viral Hooks</h3>
                      <p className="text-gray-500 leading-relaxed">
                        Our AI analyzes current TikTok trends and psychological triggers to generate opening hooks that stop the scroll and keep viewers through the entire video.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="flex gap-6 items-start">
                    <div className="w-14 h-14 bg-olive-green/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-olive-green group-hover:text-white transition-all duration-300">
                      <CheckCircle2 size={28} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">Dynamic Automated Captions</h3>
                      <p className="text-gray-500 leading-relaxed">
                        Perfectly timed, animated captions are generated automatically. This proven engagement booster is handled entirely by our AI, saving you hours of manual editing.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-olive-green/5 blur-3xl rounded-full scale-125 -z-10" />
                <div className="bg-[#FCFCFA] p-10 rounded-[3rem] border border-gray-100 shadow-sm">
                   <div className="space-y-6">
                      <div className="flex items-center justify-between pb-6 border-b border-gray-100">
                         <span className="text-xs font-black uppercase tracking-widest text-olive-green">Manual Editing</span>
                         <span className="text-xs font-black uppercase tracking-widest text-gray-400">vs</span>
                         <span className="text-xs font-black uppercase tracking-widest text-olive-green">Viral Flow AI</span>
                      </div>
                      <div className="space-y-4">
                         {[
                            { label: "Edit Time", manual: "4-6 Hours", ai: "Instant Generation" },
                            { label: "Hooks", manual: "Trial & Error", ai: "Trend-Optimized" },
                            { label: "Captions", manual: "Manual Entry", ai: "AI-Synced Styles" },
                            { label: "Volume", manual: "1-2 / Week", ai: "10+ / Day" }
                         ].map((item, i) => (
                            <div key={i} className="flex flex-col gap-2">
                               <div className="flex justify-between text-xs font-bold text-gray-900 uppercase">
                                  <span>{item.label}</span>
                               </div>
                               <div className="h-6 w-full bg-gray-100 rounded-full overflow-hidden flex">
                                  <div className="h-full bg-gray-300 w-1/3 text-[8px] flex items-center px-4 font-bold">MANUAL</div>
                                  <div className="h-full bg-olive-green flex-1 text-[8px] flex items-center justify-end px-4 font-bold text-white uppercase italic">AI POWERED</div>
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

        {/* Statistics & Feature Grid Section */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#8ca38c_1px,transparent_1px)] [background-size:32px_32px]" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
              <div className="lg:w-1/2 space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-olive-green/5 rounded-full border border-olive-green/10">
                  <span className="w-2 h-2 bg-olive-green rounded-full animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-olive-green">Viral Velocity</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 leading-[1.1]">
                   Best <span className="italic text-olive-green">TikTok Marketing Automation</span> Software Tool
                </h2>
                <p className="text-xl text-gray-500 leading-relaxed font-light">
                   Viral success is no longer a mystery. With the best TikTok marketing automation software tool, you can deploy trend-optimized content at scale and dominate the FYP while you sleep.
                </p>
                <div className="grid grid-cols-2 gap-6 pt-4">
                   <div className="p-6 bg-[#FCFCFA] rounded-2xl border border-gray-100">
                      <p className="text-3xl font-serif font-bold text-gray-900 mb-1">2.1B+</p>
                      <p className="text-xs font-bold text-gray-400 uppercase">Total Viral Impressions</p>
                   </div>
                   <div className="p-6 bg-[#FCFCFA] rounded-2xl border border-gray-100">
                      <p className="text-3xl font-serif font-bold text-olive-green mb-1">#1</p>
                      <p className="text-xs font-bold text-gray-400 uppercase">Vertical AI Engine</p>
                   </div>
                </div>
              </div>
              <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Trend Radar",
                    desc: "AI identifies audio and visual trends before they go global.",
                    icon: <Zap size={20} />
                  },
                  {
                    title: "Retention Logic",
                    desc: "Fast-paced, high-energy editing designed to keep viewers hooked.",
                    icon: <Play size={20} />
                  },
                  {
                    title: "Mass Deployment",
                    desc: "Run 10+ niche channels simultaneously with unified management.",
                    icon: <Rocket size={20} />
                  },
                  {
                    title: "Safety Shield",
                    desc: "Adheres to TikTok community guidelines to ensure account longevity.",
                    icon: <Shield size={20} />
                  }
                ].map((item, i) => (
                  <div key={i} className="p-8 bg-[#FCFCFA] rounded-3xl border border-gray-100 hover:border-olive-green/30 hover:bg-white hover:shadow-2xl hover:shadow-olive-green/5 transition-all group">
                    <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-olive-green group-hover:bg-olive-green group-hover:text-white transition-all">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3 tracking-tight">{item.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Aggressive FAQ Section */}
        <AggressiveFAQ faqs={faqs} />

        {/* Blog Carousel Section */}
        <BlogCarousel />

        {/* Final Sell CTA Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gray-900 rounded-[3rem] p-8 md:p-16 relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-96 h-96 bg-olive-green/10 blur-[100px] rounded-full group-hover:scale-110 transition-transform duration-1000" />
               <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
                  <div className="max-w-2xl text-center lg:text-left space-y-6">
                     <h3 className="text-3xl md:text-5xl font-serif font-medium text-white leading-tight tracking-tight">
                        Command the <span className="italic text-olive-green">For You Page.</span>
                     </h3>
                     <p className="text-gray-400 text-lg">
                        Stop guessing what goes viral. Start generating viral success with the power of our AI engine.
                     </p>
                  </div>
                  <div className="flex flex-col items-center gap-4">
                     <Link 
                       href="/dashboard" 
                       className="px-12 py-6 bg-olive-green text-white rounded-full font-bold text-lg hover:scale-105 transition-all shadow-2xl shadow-olive-green/20"
                     >
                        Go Viral Now
                     </Link>
                     <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Immediate Video Generation</p>
                  </div>
               </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
