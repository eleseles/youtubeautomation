import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SplitHero from "@/components/SplitHero";
import AggressiveFAQ from "@/components/AggressiveFAQ";
import BlogCarousel from "@/components/BlogCarousel";
import { Youtube, Sparkles, Video, Mic, Share2, Zap, ArrowRight, CheckCircle2, PlayCircle, Rocket, BarChart3, Shield } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Faceless YouTube Automation AI (Free)",
  description: "Start your faceless YouTube empire with AI. Automated scripts, human-like voiceovers, and AI-driven video editing for high-revenue channels.",
  keywords: "faceless youtube, youtube automation ai, automated youtube channel, ai video generator, youtube cash cow",
  alternates: {
    canonical: "https://youtubeautomation.app/faceless-youtube-automation",
  }
};

const faqs = [
  {
    q: "Can I actually monetize AI-generated videos?",
    a: "Yes. YouTube prioritizes 'Original Content' and 'Viewer Value'. Our AI generates 100% unique scripts and visuals that comply with all monetization policies. We have users running multiple monetized channels with this exact system."
  },
  {
    q: "How long does it take to create one video?",
    a: "Manual takes 20+ hours. Our AI does it in under 20 minutes. From niche research to final render, the system handles the heavy lifting while you handle the strategy."
  },
  {
    q: "Do I need to show my face or use my voice?",
    a: "Never. That's the power of faceless automation. Our neural voiceovers are indistinguishable from humans, and our visual engine sources high-end footage to tell your story perfectly."
  },
  {
    q: "Is there a limit to how many channels I can run?",
    a: "No limits. Once you find a winning niche, you can clone the workflow and launch 5, 10, or 20 channels. This is how you build a digital media empire on autopilot."
  }
];

export default function FacelessYouTubeAutomationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "Faceless YouTube Automation AI",
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
          "ratingCount": "1560"
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
            "name": "Faceless YouTube Automation",
            "item": "https://youtubeautomation.app/faceless-youtube-automation"
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
          badge={{ icon: <Youtube size={14} />, text: "YOUTUBE AUTOMATION ACTIVE" }}
          title={<>Faceless YouTube Automation <span className="text-olive-green italic">AI</span> (Free)</>}
          description="Launch a profitable YouTube business without ever showing your face. Our AI engine handles scripts, voices, and visual editing on autopilot."
          bullet="Faceless Empire System"
          ctaText="Start Your Channel"
          ctaHref="/dashboard"
          rightElement={<img src="/faceless-hero.png" alt="YouTube Automation" className="w-full h-full object-cover" />}
          statusText="Channel Automation Online"
        />

        {/* What is Faceless YouTube Automation? Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-8 tracking-tight">
                What is <span className="text-olive-green italic">Faceless YouTube Automation?</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed font-light">
                Faceless YouTube Automation is the art of building high-revenue digital assets without being on camera. It's an <span className="font-semibold text-gray-900">end-to-end production system</span> where AI handles everything from niche analysis to final video rendering.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="group">
                  <div className="flex gap-6 items-start">
                    <div className="w-14 h-14 bg-olive-green/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-olive-green group-hover:text-white transition-all duration-300">
                      <Sparkles size={28} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">AI Niche Synthesis</h3>
                      <p className="text-gray-500 leading-relaxed">
                        Our agents analyze thousands of channels to find underserved niches with high CPM and low competition, ensuring your channel starts with a competitive edge.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="flex gap-6 items-start">
                    <div className="w-14 h-14 bg-olive-green/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-olive-green group-hover:text-white transition-all duration-300">
                      <Mic size={28} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">Neural Voiceover Engine</h3>
                      <p className="text-gray-500 leading-relaxed">
                        Access ultra-realistic AI voices that carry emotion, cadence, and authority. Your audience won't even know they're listening to a machine.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="flex gap-6 items-start">
                    <div className="w-14 h-14 bg-olive-green/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-olive-green group-hover:text-white transition-all duration-300">
                      <Video size={28} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">Automated Visual Assembly</h3>
                      <p className="text-gray-500 leading-relaxed">
                        The system automatically sources relevant stock footage, generates AI images, and syncs them perfectly with your script and audio for a professional finish.
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
                         <span className="text-xs font-black uppercase tracking-widest text-olive-green">Traditional YT</span>
                         <span className="text-xs font-black uppercase tracking-widest text-gray-400">vs</span>
                         <span className="text-xs font-black uppercase tracking-widest text-olive-green">AI Automation</span>
                      </div>
                      <div className="space-y-4">
                         {[
                            { label: "Production", manual: "2-3 Days / Video", ai: "15-30 Mins / Video" },
                            { label: "Cost", manual: "$200+ per Video", ai: "Fraction of Cost" },
                            { label: "Scaling", manual: "One Channel Max", ai: "Unlimited Channels" },
                            { label: "Content Flow", manual: "Inconsistent", ai: "Daily Reliablity" }
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
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(#8ca38c_1px,transparent_1px)] [background-size:32px_32px]" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row-reverse gap-16 items-center mb-24">
              <div className="lg:w-1/2 space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-olive-green/5 rounded-full border border-olive-green/10">
                  <span className="w-2 h-2 bg-olive-green rounded-full animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-olive-green">Digital Asset Mastery</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 leading-[1.1]">
                   Best <span className="italic text-olive-green">Faceless YouTube Marketing Automation</span> Software Tool
                </h2>
                <p className="text-xl text-gray-500 leading-relaxed font-light">
                   Building a digital empire requires the best faceless YouTube marketing automation software tool. Turn your ideas into a high-CPM recurring revenue stream with zero technical debt.
                </p>
                <div className="grid grid-cols-2 gap-6 pt-4">
                   <div className="p-6 bg-[#FCFCFA] rounded-2xl border border-gray-100">
                      <p className="text-3xl font-serif font-bold text-gray-900 mb-1">$0 to $10K</p>
                      <p className="text-xs font-bold text-gray-400 uppercase">Avg. 6-Month Roadmap</p>
                   </div>
                   <div className="p-6 bg-[#FCFCFA] rounded-2xl border border-gray-100">
                      <p className="text-3xl font-serif font-bold text-olive-green mb-1">100%</p>
                      <p className="text-xs font-bold text-gray-400 uppercase">Automation Capability</p>
                   </div>
                </div>
              </div>
              <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Script Mastery",
                    desc: "Viral-engineered scripts that hook viewers and maximize retention.",
                    icon: <PlayCircle size={20} />
                  },
                  {
                    title: "Asset Sourcing",
                    desc: "Automatic sourcing of copyright-free footage and AI-generated visuals.",
                    icon: <Share2 size={20} />
                  },
                  {
                    title: "SEO Domination",
                    desc: "AI-optimized titles, descriptions, and tag sets for maximum search reach.",
                    icon: <Sparkles size={20} />
                  },
                  {
                    title: "Niche Scouting",
                    desc: "Uncover underserved, high-revenue niches with deep market data.",
                    icon: <Rocket size={20} />
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
                        Launch your <span className="italic text-olive-green">Cash Cow</span> Empire.
                     </h3>
                     <p className="text-gray-400 text-lg">
                        The gold rush of faceless YouTube is here. Claim your territory with world-class automation.
                     </p>
                  </div>
                  <div className="flex flex-col items-center gap-4">
                     <Link 
                       href="/dashboard" 
                       className="px-12 py-6 bg-olive-green text-white rounded-full font-bold text-lg hover:scale-105 transition-all shadow-2xl shadow-olive-green/20"
                     >
                        Start Your Channel
                     </Link>
                     <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Immediate 1-Channel Access</p>
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
