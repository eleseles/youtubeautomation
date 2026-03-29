import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SplitHero from "@/components/SplitHero";
import AggressiveFAQ from "@/components/AggressiveFAQ";
import BlogCarousel from "@/components/BlogCarousel";
import { Mail, Inbox, Send, ShieldCheck, Zap, ArrowRight, CheckCircle2, Clock, Users, Shield, Rocket, BarChart3 } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Email Automation Tool (Free)",
  description: "Revolutionize your email marketing with AI. Automate your inbox, generate personalized responses, and manage high-converting email campaigns with ease.",
  keywords: "ai email automation, smart inbox, automated email marketing, artificial intelligence email, cold email automation",
  alternates: {
    canonical: "https://youtubeautomation.app/ai-email-automation",
  }
};

const faqs = [
  {
    q: "Will my emails end up in the spam folder?",
    a: "No. Our AI engine handles smart-warming, DMARC alignment, and deliverability monitoring automatically. We maintain a 98% inbox placement rate across all major providers."
  },
  {
    q: "Can the AI handle complex customer inquiries?",
    a: "The AI reads context, sentiment, and history. It's not a mindless bot; it's a digital proxy that understands your business logic and drafts human-level responses."
  },
  {
    q: "How secure is my inbox data?",
    a: "Enterprise-grade encryption is our baseline. Your data is isolated, encrypted, and never sold. We only process what's necessary to automate your success."
  },
  {
    q: "Is it difficult to set up with my current email?",
    a: "If you can login to your email, you can set this up. We have one-click integrations for Gmail, Outlook, and all major IMAP/SMTP services. Zero tech skills needed."
  }
];

export default function AIEmailAutomationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "AI Email Automation Tool",
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
          "ratingValue": "4.8",
          "ratingCount": "850"
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
            "name": "AI Email Automation",
            "item": "https://youtubeautomation.app/ai-email-automation"
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
          badge={{ icon: <Mail size={14} />, text: "EMAIL ENGINE ACTIVE" }}
          title={<>AI Email Automation <span className="text-olive-green italic">Tool</span> (Free)</>}
          description="Transform your inbox into a high-converting growth tool. Our AI engine writes, responds, and manages your entire email workflow while you focus on high-level strategy."
          bullet="Smart Inbox Management"
          ctaText="Start Free Automation"
          ctaHref="/dashboard"
          rightElement={<img src="/ai-email-hero.png" alt="Email Automation" className="w-full h-full object-cover" />}
          statusText="Response Speed: < 2 Mins"
         />

        {/* What is AI Email Automation? Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-8 tracking-tight">
                What is <span className="text-olive-green italic">AI Email Automation?</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed font-light">
                AI Email Automation is the evolution of communication. It's an <span className="font-semibold text-gray-900">intelligent digital assistant</span> that doesn't just send templates, but understands intent, drafts personalized replies, and moves prospects through your funnel automatically.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="group">
                  <div className="flex gap-6 items-start">
                    <div className="w-14 h-14 bg-olive-green/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-olive-green group-hover:text-white transition-all duration-300">
                      <Inbox size={28} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">Contextual Triage</h3>
                      <p className="text-gray-500 leading-relaxed">
                        The AI scans incoming emails for urgency, sentiment, and topic, automatically categorizing and prioritizing your most important leads.
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
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">Hyper-Personalized Drafting</h3>
                      <p className="text-gray-500 leading-relaxed">
                        Stop using boring templates. Our system reads the history of your conversation to draft human-like replies that feel authentic and drive conversions.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="flex gap-6 items-start">
                    <div className="w-14 h-14 bg-olive-green/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-olive-green group-hover:text-white transition-all duration-300">
                      <ShieldCheck size={28} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">Deliverability Shield</h3>
                      <p className="text-gray-500 leading-relaxed">
                        Our agents monitor your domain health in real-time, adjusting sending patterns to ensure your emails always land in the main inbox, not the spam folder.
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
                         <span className="text-xs font-black uppercase tracking-widest text-olive-green">Standard CRM</span>
                         <span className="text-xs font-black uppercase tracking-widest text-gray-400">vs</span>
                         <span className="text-xs font-black uppercase tracking-widest text-olive-green">AI Email Agent</span>
                      </div>
                      <div className="space-y-4">
                         {[
                            { label: "Drafting", manual: "3-5 Mins / Email", ai: "Seconds / Batch" },
                            { label: "Personalization", manual: "Surface Level", ai: "Deep Contextual" },
                            { label: "Filtering", manual: "Manual / Rule-based", ai: "Sentiment-driven" },
                            { label: "Success Rate", manual: "Standard CTR", ai: "4x Engagement" }
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
            <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
              <div className="lg:w-1/2 space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-olive-green/5 rounded-full border border-olive-green/10">
                  <span className="w-2 h-2 bg-olive-green rounded-full animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-olive-green">Communication Excellence</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 leading-[1.1]">
                   Best <span className="italic text-olive-green">Email Marketing Automation</span> Software Tool
                </h2>
                <p className="text-xl text-gray-500 leading-relaxed font-light">
                   Dominating your inbox require the best email marketing automation software tool. Our AI engine handle the entire communication cycle so you never miss a lead again.
                </p>
                <div className="grid grid-cols-2 gap-6 pt-4">
                   <div className="p-6 bg-[#FCFCFA] rounded-2xl border border-gray-100">
                      <p className="text-3xl font-serif font-bold text-gray-900 mb-1">98%</p>
                      <p className="text-xs font-bold text-gray-400 uppercase">Inbox Placement Rate</p>
                   </div>
                   <div className="p-6 bg-[#FCFCFA] rounded-2xl border border-gray-100">
                      <p className="text-3xl font-serif font-bold text-olive-green mb-1">24/7</p>
                      <p className="text-xs font-bold text-gray-400 uppercase">Autonomous Operation</p>
                   </div>
                </div>
              </div>
              <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Smart Triage",
                    desc: "AI automatically prioritizes high-value leads and schedules follow-ups.",
                    icon: <Clock size={20} />
                  },
                  {
                    title: "Brand Voice",
                    desc: "Learns and replicates your unique tone for 100% consistent communication.",
                    icon: <Users size={20} />
                  },
                  {
                    title: "Security Shield",
                    desc: "Enterprise-grade encryption and protocol alignment for total safety.",
                    icon: <Shield size={20} />
                  },
                  {
                    title: "Lead Intelligence",
                    desc: "Unified analytics dashboard showing real-time conversion and engagement.",
                    icon: <BarChart3 size={20} />
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
                     <h3 className="text-3xl md:text-5xl font-serif font-medium text-white leading-tight">
                        Master Your <span className="italic text-olive-green">Communication</span> Suite.
                     </h3>
                     <p className="text-gray-400 text-lg">
                        Stop managing your inbox. Start dominating your industry with autonomous email growth.
                     </p>
                  </div>
                  <div className="flex flex-col items-center gap-4">
                     <Link 
                       href="/dashboard" 
                       className="px-12 py-6 bg-olive-green text-white rounded-full font-bold text-lg hover:scale-105 transition-all shadow-2xl shadow-olive-green/20"
                     >
                        Get Early Access
                     </Link>
                     <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Immediate 1-Account Setup</p>
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
