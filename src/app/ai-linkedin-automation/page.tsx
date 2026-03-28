import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SplitHero from "@/components/SplitHero";
import { Linkedin, Users, MessageSquare, Shield, TrendingUp, Zap, ArrowRight, CheckCircle2 } from "lucide-react";
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

export default function AILinkedinAutomationPage() {
  return (
    <>
      <Navbar />
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

        {/* Features Highlights */}
        <section className="py-24 bg-white border-y border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-4">Network Smarter, Not Harder</h2>
              <p className="text-gray-500 max-w-xl mx-auto">Leverage the most advanced AI agents specifically trained for professional networking.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Users className="text-olive-green" size={24} />,
                  title: "Smart Targeting",
                  desc: "AI identifies and filters high-value prospects based on role, industry, and activity."
                },
                {
                  icon: <MessageSquare className="text-olive-green" size={24} />,
                  title: "Personalized Outreach",
                  desc: "Generate LinkedIn connection requests and messages that feel authentic and human."
                },
                {
                  icon: <Shield className="text-olive-green" size={24} />,
                  title: "Safe Automation",
                  desc: "Algorithms that mimic human behavior to keep your LinkedIn account safe and compliant."
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

        {/* Growth Statistics */}
        <section className="py-24 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2 space-y-8">
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 leading-[1.1]">
                  Scale Your <br />
                  <span className="text-olive-green italic font-medium">B2B Authority</span>
                </h2>
                <p className="text-lg text-gray-500 leading-relaxed">
                  Building authority on LinkedIn takes months. Our AI agents accelerate this by maintaining constant engagement and providing deep network insights.
                </p>
                <ul className="space-y-4">
                  {[
                    "AI-generated thought leadership posts",
                    "Automated comment & engagement pod",
                    "CRM integration for lead export",
                    "Real-time network growth tracking"
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
                    View LinkedIn growth case studies <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
              <div className="lg:w-1/2 relative">
                <div className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Network Reach</p>
                      <p className="text-3xl font-serif font-bold text-gray-900">+12% This Week</p>
                    </div>
                    <TrendingUp className="text-olive-green" size={32} />
                  </div>
                  <div className="space-y-4 pt-4 border-t border-gray-50">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-500">Profile Views</span>
                      <span className="font-bold text-gray-900">2,142</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-500">Connection Velocity</span>
                      <span className="font-bold text-olive-green">High</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-500">Post Impression Gain</span>
                      <span className="font-bold text-gray-900">+340%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="py-24 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900 rounded-[2.5rem] p-12 md:p-24 relative overflow-hidden text-center">
            {/* Background design elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(140,163,140,0.1),_transparent)]" />
            
            <div className="relative z-10 max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-6xl font-serif font-medium text-white tracking-tight">
                Become a LinkedIn <br />
                <span className="italic">powerhouse.</span>
              </h2>
              <p className="text-gray-400 text-lg md:text-xl">
                Ready to automate your B2B networking and lead generation?
              </p>
              <div className="pt-4">
                <Link
                  href="/dashboard"
                  className="bg-white text-gray-900 px-12 py-5 rounded-full text-lg font-bold hover:scale-105 transition-transform inline-block shadow-2xl"
                >
                  Join the Waiting List
                </Link>
                <p className="mt-4 text-gray-500 text-[10px] font-bold uppercase tracking-[0.3em]">
                  Limited access for early adopters
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
