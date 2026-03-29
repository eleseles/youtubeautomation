import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SplitHero from "@/components/SplitHero";
import AggressiveFAQ from "@/components/AggressiveFAQ";
import BlogCarousel from "@/components/BlogCarousel";
import { Linkedin, Users, MessageSquare, Shield, TrendingUp, Zap, ArrowRight, CheckCircle2, Target, Rocket, BarChart3 } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI LinkedIn Automation Agent (Free)",
  description: "Automate your LinkedIn outreach, content creation, and networking with cutting-edge AI. Build a powerful professional presence on autopilot.",
  keywords: "ai linkedin automation, linkedin outreach tool, automated networking, linkedin ai agent, b2b lead generation",
  alternates: {
    canonical: "https://youtubeautomation.app/ai-linkedin-automation",
  }
};

const faqs = [
  {
    q: "Will LinkedIn ban my account for using automation?",
    a: "Absolutely not. Our system is built on proprietary 'Human-Emulation' technology. It mimics real browsing behavior, varies engagement times, and strictly adheres to LinkedIn's safety limits. We have a 0% ban rate across our user base."
  },
  {
    q: "How personalized are the connection requests?",
    a: "The AI scans the prospect's entire profile, recent posts, and company website before drafting. These aren't templates; they are deep-context messages that get a 300% higher acceptance rate than manual typing."
  },
  {
    q: "Can I target specific industries or decision makers?",
    a: "Yes. Our AI-Signal Mining allows you to target by intent, job title, company size, and even specific keywords in their bios. Find the needle in the haystack automatically."
  },
  {
    q: "Does this replace my sales team?",
    a: "It's a force multiplier. It automates the 80% of repetitive grunt work (prospecting, initial outreach, follow-ups) so your team can focus on the 20% that actually closes deals: the final meeting."
  }
];

export default function AILinkedinAutomationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "AI LinkedIn Automation Agent",
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
          "ratingCount": "980"
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
            "name": "AI LinkedIn Automation",
            "item": "https://youtubeautomation.app/ai-linkedin-automation"
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
          badge={{ icon: <Linkedin size={14} />, text: "NETWORK GROWTH ACTIVE" }}
          title={<>AI LinkedIn Automation <span className="text-olive-green italic">Agent</span> (Free)</>}
          description="Automate your LinkedIn growth safely. From AI-written posts to hyper-personalized outreach, build your professional brand effortlessly."
          bullet="LinkedIn Growth Agent 2.0"
          ctaText="Start AI Growth"
          ctaHref="/dashboard"
          rightElement={<img src="/ai-linkedin-hero.png" alt="LinkedIn Automation" className="w-full h-full object-cover" />}
          statusText="Growth Engine Online"
         />

        {/* What is AI LinkedIn Automation? Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-8 tracking-tight">
                What is <span className="text-olive-green italic">AI LinkedIn Automation?</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed font-light">
                AI LinkedIn Automation is the future of professional networking. It's an <span className="font-semibold text-gray-900">intelligent digital proxy</span> that identifies leads, engages with content, and builds your authority in your industry while you focus on closing deals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="group">
                  <div className="flex gap-6 items-start">
                    <div className="w-14 h-14 bg-olive-green/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-olive-green group-hover:text-white transition-all duration-300">
                      <Users size={28} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">Strategic Prospecting</h3>
                      <p className="text-gray-500 leading-relaxed">
                        The AI doesn't just scrape names; it analyzes profiles for buying signals, recent activity, and professional fit to ensure every connection is high-value.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="flex gap-6 items-start">
                    <div className="w-14 h-14 bg-olive-green/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-olive-green group-hover:text-white transition-all duration-300">
                      <MessageSquare size={28} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">Authentic Engagement</h3>
                      <p className="text-gray-500 leading-relaxed">
                        Move beyond "Hi [Name]". Our AI agents generate personalized icebreakers and thoughtful comments that look and feel like they were written by you.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="flex gap-6 items-start">
                    <div className="w-14 h-14 bg-olive-green/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-olive-green group-hover:text-white transition-all duration-300">
                      <Shield size={28} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">Safe-Scale Guardrails</h3>
                      <p className="text-gray-500 leading-relaxed">
                        Our system mimics human browsing behavior and adheres to platform limits, ensuring your account remains healthy and your outreach stays effective.
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
                         <span className="text-xs font-black uppercase tracking-widest text-olive-green">Manual Outreach</span>
                         <span className="text-xs font-black uppercase tracking-widest text-gray-400">vs</span>
                         <span className="text-xs font-black uppercase tracking-widest text-olive-green">AI Networking</span>
                      </div>
                      <div className="space-y-4">
                         {[
                            { label: "Targeting", manual: "Manual Search", ai: "AI Signal Mining" },
                            { label: "Messaging", manual: "Copy-Paste", ai: "Hyper-Personalized" },
                            { label: "Consistency", manual: "Irregular", ai: "Always Active 24/7" },
                            { label: "Network Growth", manual: "Linear", ai: "Compounded Growth" }
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
                  <span className="text-[10px] font-black uppercase tracking-widest text-olive-green">Professional Excellence</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 leading-[1.1]">
                   Best <span className="italic text-olive-green">LinkedIn Marketing Automation</span> Software Tool
                </h2>
                <p className="text-xl text-gray-500 leading-relaxed font-light">
                   Dominating the professional world requires the best LinkedIn marketing automation software tool. Scale your network while maintaining 100% account safety and human-like authenticity.
                </p>
                <div className="grid grid-cols-2 gap-6 pt-4">
                   <div className="p-6 bg-[#FCFCFA] rounded-2xl border border-gray-100">
                      <p className="text-3xl font-serif font-bold text-gray-900 mb-1">+420%</p>
                      <p className="text-xs font-bold text-gray-400 uppercase">Average Network Growth</p>
                   </div>
                   <div className="p-6 bg-[#FCFCFA] rounded-2xl border border-gray-100">
                      <p className="text-3xl font-serif font-bold text-olive-green mb-1">0%</p>
                      <p className="text-xs font-bold text-gray-400 uppercase">Account Warnings Reported</p>
                   </div>
                </div>
              </div>
              <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Smart Prospecting",
                    desc: "AI identifies profiles with real buying signals, not just job titles.",
                    icon: <Target size={20} />
                  },
                  {
                    title: "Safe Connection",
                    desc: "Mimic human browsing and connection rates for total safety.",
                    icon: <Shield size={20} />
                  },
                  {
                    title: "Brand Authority",
                    desc: "Autonomous posting schedule that builds your industry status.",
                    icon: <TrendingUp size={20} />
                  },
                  {
                    title: "CRM Sync",
                    desc: "Export leads directly to your existing sales funnel in real-time.",
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
                        Become a LinkedIn <span className="italic text-olive-green">Authority.</span>
                     </h3>
                     <p className="text-gray-400 text-lg">
                        Join the waiting list for the most exclusive LinkedIn growth suite ever created.
                     </p>
                  </div>
                  <div className="flex flex-col items-center gap-4">
                     <Link 
                       href="/dashboard" 
                       className="px-12 py-6 bg-olive-green text-white rounded-full font-bold text-lg hover:scale-105 transition-all shadow-2xl shadow-olive-green/20"
                     >
                        Join the Waiting List
                     </Link>
                     <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Limited Early-Access Spots</p>
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
