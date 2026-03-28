import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SplitHero from "@/components/SplitHero";
import { Mail, Inbox, Send, ShieldCheck, Zap, ArrowRight, CheckCircle2, Clock } from "lucide-react";
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

export default function AIEmailAutomationPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#FCFCFA]">
        {/* Split Hero Section */}
        <SplitHero 
          badge={{ icon: <Mail size={14} />, text: "SMART INBOX READY" }}
          title={<>AI Email Automation <span className="text-olive-green italic">Tool</span> (Free)</>}
          description="Transform your email communication with AI. From automated sorting to human-like drafting, manage your campaigns and inbox on autopilot."
          bullet="EMAIL AUTOMATION READY"
          ctaText="Activate Smart Email"
          ctaHref="/dashboard"
          rightElement={<img src="/ai-email-hero.png" alt="Email Automation" className="w-full h-full object-cover" />}
          statusText="Smart Inbox Operational"
        />

        {/* Features Section */}
        <section className="py-24 bg-white border-y border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-4">Email Efficiency, Redefined</h2>
              <p className="text-gray-500 max-w-xl mx-auto">Our AI tools handle the repetitive parts of email, so you can focus on building real connections.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Inbox className="text-olive-green" size={24} />,
                  title: "AI Smart Sorting",
                  desc: "Automatically categorize incoming emails by priority, intent, and sentiment."
                },
                {
                  icon: <Send className="text-olive-green" size={24} />,
                  title: "Predictive Drafting",
                  desc: "Generate personalized responses based on previous conversations and context."
                },
                {
                  icon: <ShieldCheck className="text-olive-green" size={24} />,
                  title: "DMARC & Deliverability",
                  desc: "Built-in AI monitoring to ensure your emails always land in the primary inbox."
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

        {/* Workflow & Efficiency Section */}
        <section className="py-24 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
              <div className="lg:w-1/2 space-y-8">
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 leading-[1.1]">
                  Save Hours Every Week <br />
                  <span className="text-olive-green italic font-medium">With AI Filters</span>
                </h2>
                <p className="text-lg text-gray-500 leading-relaxed">
                  Most people spend 28% of their work week reading and answering emails. Our AI reduces that time by up to 70% by automating routine inquiries and flagging what actually matters.
                </p>
                <ul className="space-y-4">
                  {[
                    "Zero-inbox automation workflow",
                    "Custom AI reply templates",
                    "Spam & Phishing AI protection",
                    "Optimized sending times using AI"
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
                    View time-saving metrics <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
              <div className="lg:w-1/2 relative">
                <div className="bg-white p-6 rounded-3xl shadow-2xl border border-gray-100 flex flex-col gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-olive-green/10 flex items-center justify-center">
                      <Clock className="text-olive-green" size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Time Saved This Month</p>
                      <p className="text-2xl font-serif font-bold text-gray-900">42.5 Hours</p>
                    </div>
                  </div>
                  <div className="h-48 w-full bg-gray-50 rounded-2xl flex items-end justify-between p-4 gap-2">
                    {[40, 70, 45, 90, 65, 80, 55].map((h, i) => (
                      <div 
                        key={i} 
                        className="w-full bg-olive-green/20 rounded-t-lg transition-all duration-1000" 
                        style={{ height: `${h}%`, backgroundColor: i === 3 ? '#8ca38c' : '' }}
                      />
                    ))}
                  </div>
                  <p className="text-center text-sm text-gray-500 font-medium italic">"The AI agent handled 142 routine emails today."</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="py-24 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900 rounded-[2.5rem] p-12 md:p-24 relative overflow-hidden text-center">
            {/* Background design */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-olive-green/10 blur-[120px] rounded-full" />
            
            <div className="relative z-10 max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-6xl font-serif font-medium text-white tracking-tight">
                Focus on the <span className="italic">conversation</span>, <br />
                not the <span className="italic">inbox.</span>
              </h2>
              <p className="text-gray-400 text-lg md:text-xl">
                Ready to unleash the power of AI on your email workflows?
              </p>
              <div className="pt-4">
                <Link
                  href="/dashboard"
                  className="bg-olive-green text-white px-12 py-5 rounded-full text-lg font-bold hover:bg-olive-green-light transition-all inline-block shadow-xl shadow-black/20"
                >
                  Start Free Trial
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
