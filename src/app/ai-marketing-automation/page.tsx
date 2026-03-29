import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SplitHero from "@/components/SplitHero";
import AggressiveFAQ from "@/components/AggressiveFAQ";
import BlogCarousel from "@/components/BlogCarousel";
import { Sparkles, Target, Zap, BarChart3, Rocket, Shield } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Marketing Automation Tool (Free)",
  description: "Automate your marketing workflow with the best AI marketing automation software tool. Scale your growth, manage multiple platforms, and save hours of manual work.",
  keywords: "ai marketing automation, marketing software, automated marketing tool, artificial intelligence marketing, free marketing automation",
  alternates: {
    canonical: "https://youtubeautomation.app/ai-marketing-automation",
  }
};

const faqs = [
  {
    q: "Is AI Marketing Automation safe for my brand?",
    a: "Beyond safe. Our system uses advanced human-mimicry algorithms that follow platform guidelines perfectly. We haven't had a single account warning in 2 years of operation."
  },
  {
    q: "How soon can I expect to see real results?",
    a: "Efficiency is immediate. Brand growth typically scales exponentially after the first 14 days as our AI learns your audience's unique behavioral patterns."
  },
  {
    q: "What if I decide to stay small? Is this too much?",
    a: "Scaling is a choice, not a requirement. Our tool is designed to give you back 40+ hours a week, whether you want to use that time to grow or just to have a life."
  },
  {
    q: "Is there a long-term commitment or contract?",
    a: "No lock-ins. No fine print. You can start for free, and if it's not the best marketing automation tool you've ever used, you can leave with one click. Period."
  }
];

export default function AIMarketingAutomationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "AI Marketing Automation Tool",
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
          "ratingCount": "1240"
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
            "name": "AI Marketing Automation",
            "item": "https://youtubeautomation.app/ai-marketing-automation"
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
          badge={{ icon: <Sparkles size={14} />, text: "MARKETING ENGINE ONLINE" }}
          title={<>AI Marketing Automation <span className="text-olive-green italic">Tool</span> (Free)</>}
          description="Scale your marketing across all platforms with the power of autonomous AI agents. Automate once, grow forever, while maintaining a premium human touch."
          bullet="AI GROWTH ENGINE ACTIVE"
          ctaText="Start Scaling Now"
          ctaHref="/dashboard"
          rightElement={<img src="/ai-marketing-hero.png" alt="Marketing Automation" className="w-full h-full object-cover" />}
          statusText="Campaign Efficiency: +400%"
        />

        {/* What is AI Marketing Automation? Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-8 tracking-tight">
                What is <span className="text-olive-green italic">AI Marketing Automation?</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed font-light">
                AI Marketing Automation is more than just scheduling posts. It's an <span className="font-semibold text-gray-900">intelligent growth layer</span> that analyzes market trends, generates high-intent content, and engages with your audience 24/7—doing the work of a whole marketing team on autopilot.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="group">
                  <div className="flex gap-6 items-start">
                    <div className="w-14 h-14 bg-olive-green/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-olive-green group-hover:text-white transition-all duration-300">
                      <Zap size={28} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">Autonomous Creative</h3>
                      <p className="text-gray-500 leading-relaxed">
                        The AI doesn't just copy-paste. It generates unique, platform-specific content that maintains your brand voice while optimizing for virality and engagement metrics.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="flex gap-6 items-start">
                    <div className="w-14 h-14 bg-olive-green/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-olive-green group-hover:text-white transition-all duration-300">
                      <Target size={28} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">Deep Intelligence</h3>
                      <p className="text-gray-500 leading-relaxed">
                        Make decisions based on data, not guesses. Our agents scan platform signals to identify the exact second your audience is ready to convert.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="flex gap-6 items-start">
                    <div className="w-14 h-14 bg-olive-green/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-olive-green group-hover:text-white transition-all duration-300">
                      <BarChart3 size={28} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">Continuous Optimization</h3>
                      <p className="text-gray-500 leading-relaxed">
                        While you sleep, our AI is A/B testing thousands of variables, from hook styles to call-to-actions, constantly improving your conversion rates.
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
                         <span className="text-xs font-black uppercase tracking-widest text-olive-green">Standard Marketing</span>
                         <span className="text-xs font-black uppercase tracking-widest text-gray-400">vs</span>
                         <span className="text-xs font-black uppercase tracking-widest text-olive-green">AI Growth Engine</span>
                      </div>
                      <div className="space-y-4">
                         {[
                            { label: "Content Creation", manual: "10-15h / Week", ai: "Autonomous / Instant" },
                            { label: "Data Analysis", manual: "Reactive / Late", ai: "Predictive / Live" },
                            { label: "Platform Reach", manual: "Single / Slower", ai: "Omni-Channel / Fast" },
                            { label: "Efficiency", manual: "Linear Scale", ai: "Exponential Scale" }
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
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#8ca38c_1px,transparent_1px)] [background-size:32px_32px]" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/2 space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-olive-green/5 rounded-full border border-olive-green/10">
                  <span className="w-2 h-2 bg-olive-green rounded-full animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-olive-green">World-Class Standard</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 leading-[1.1]">
                  Best <span className="italic text-olive-green">Marketing Automation</span> Software Tool for Global Growth
                </h2>
                <p className="text-xl text-gray-500 leading-relaxed font-light">
                  Our platform is engineered for high-intent entrepreneurs. We've combined generative AI with complex marketing logic to create a tool that doesn't just automate—it <span className="text-gray-900 font-semibold underline decoration-olive-green/30">dominates</span>.
                </p>
                <div className="grid grid-cols-2 gap-6 pt-4">
                   <div className="p-6 bg-[#FCFCFA] rounded-2xl border border-gray-100">
                      <p className="text-3xl font-serif font-bold text-gray-900 mb-1">99.9%</p>
                      <p className="text-xs font-bold text-gray-400 uppercase">Uptime Reliability</p>
                   </div>
                   <div className="p-6 bg-[#FCFCFA] rounded-2xl border border-gray-100">
                      <p className="text-3xl font-serif font-bold text-olive-green mb-1">3.4M+</p>
                      <p className="text-xs font-bold text-gray-400 uppercase">Automated Actions</p>
                   </div>
                </div>
              </div>
              <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Advanced AI Core",
                    desc: "State-of-the-art neural networks trained on millions of high-converting campaigns.",
                    icon: <Zap size={20} />
                  },
                  {
                    title: "Omni-Channel Flow",
                    desc: "Unified automation across YouTube, TikTok, LinkedIn, and Email from one hub.",
                    icon: <Rocket size={20} />
                  },
                  {
                    title: "Predictive ROI",
                    desc: "Real-time revenue forecasting based on historical performance metrics.",
                    icon: <BarChart3 size={20} />
                  },
                  {
                    title: "Enterprise Grade",
                    desc: "Robust security and scalable infrastructure for businesses of all sizes.",
                    icon: <Shield size={20} />
                  }
                ].map((item, i) => (
                  <div key={i} className="p-8 bg-[#FCFCFA] rounded-3xl border border-gray-100 hover:border-olive-green/30 hover:bg-white hover:shadow-2xl hover:shadow-olive-green/5 transition-all group">
                    <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-olive-green group-hover:bg-olive-green group-hover:text-white transition-all">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
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
                     <h3 className="text-3xl md:text-5xl font-serif font-medium text-white leading-tight">
                        Experience the <span className="italic text-olive-green">Elite Version</span> of Marketing.
                     </h3>
                     <p className="text-gray-400 text-lg">
                        Join the top 1% of creators who use our suite to automate their entire digital existence. No technical skills required.
                     </p>
                  </div>
                  <div className="flex flex-col items-center gap-4">
                     <Link 
                       href="/dashboard" 
                       className="px-12 py-6 bg-olive-green text-white rounded-full font-bold text-lg hover:scale-105 transition-all shadow-2xl shadow-olive-green/20"
                     >
                        Get Started for Free
                     </Link>
                     <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Immediate Access • No Card Needed</p>
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
