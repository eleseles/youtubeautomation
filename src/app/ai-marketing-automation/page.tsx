import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SplitHero from "@/components/SplitHero";
import { Sparkles, Target, Zap, BarChart3, Rocket, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Marketing Automation Software (Free)",
  description: "Automate your marketing workflows with the power of artificial intelligence. Generate content, analyze performance, and scale your YouTube business faster than ever.",
  keywords: "ai marketing automation, marketing automation software, artificial intelligence marketing, automate youtube growth",
  alternates: {
    canonical: "https://youtubeautomation.app/ai-marketing-automation",
  }
};

export default function AIMarketingAutomationPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#FCFCFA]">
        {/* Split Hero Section */}
        <SplitHero 
          badge={{ icon: <Sparkles size={14} />, text: "AI MARKETING READY" }}
          title={<>AI Marketing Automation <span className="text-olive-green italic">Software</span> (Free)</>}
          description="Stop wasting time on repetitive tasks. Our AI-driven engine automates your entire marketing funnel, from content creation to audience engagement."
          bullet="MARKETING AUTOMATION SYSTEM 4.0"
          ctaText="Try AI Automation Free"
          ctaHref="/dashboard"
          rightElement={<img src="/ai-marketing-hero.png" alt="Marketing Automation" className="w-full h-full object-cover" />}
          statusText="Marketing Engine Online"
        />

        {/* Features Grid */}
        <section className="py-24 bg-white border-y border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-4">Features Engineered for Growth</h2>
              <p className="text-gray-500 max-w-xl mx-auto">Discover how our AI marketing automation helps you stay ahead of the competition.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Target className="text-olive-green" size={24} />,
                  title: "Smart Targeting",
                  desc: "AI identifies the most profitable segments for your YouTube channel automatically."
                },
                {
                  icon: <Zap className="text-olive-green" size={24} />,
                  title: "Instant Content Generation",
                  desc: "Create social media posts, headlines, and descriptions in seconds using generative AI."
                },
                {
                  icon: <BarChart3 className="text-olive-green" size={24} />,
                  title: "Predictive Analytics",
                  desc: "Forecast your channel growth and viral potential before you even hit publish."
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

        {/* Workflow Section */}
        <section className="py-24 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2 space-y-8">
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 leading-[1.1]">
                  Automate Once, <br />
                  <span className="text-olive-green italic font-medium">Scale Forever.</span>
                </h2>
                <p className="text-lg text-gray-500 leading-relaxed">
                  Our platform integrates seamlessly with your YouTube workflow. Once configured, our AI agents handle the heavy lifting, allowing you to focus on high-level strategy and creativity.
                </p>
                <ul className="space-y-4">
                  {[
                    "Multi-channel distribution automation",
                    "AI-driven competitor analysis",
                    "Automated thumbnail A/B testing",
                    "Voice-to-content marketing engine"
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
                    Explore all automation workflows <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
              <div className="lg:w-1/2 relative">
                <div className="absolute inset-0 bg-olive-green/5 rounded-full blur-3xl -z-10 transform scale-110" />
                <div className="bg-white p-4 rounded-3xl shadow-2xl border border-gray-100">
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-50">
                    <div className="flex items-center gap-2">
                      <Rocket className="text-olive-green" size={20} />
                      <span className="font-bold text-sm tracking-tight">Active Automation #342</span>
                    </div>
                    <span className="px-2 py-0.5 bg-green-100 text-green-700 text-[10px] font-bold rounded-full">RUNNING</span>
                  </div>
                  <div className="space-y-4">
                    {[
                      { l: "Niche Research", p: 100 },
                      { l: "Script Optimization", p: 85 },
                      { l: "SEO Tagging", p: 40 }
                    ].map((step, i) => (
                      <div key={i} className="space-y-2">
                        <div className="flex justify-between text-xs font-semibold">
                          <span className="text-gray-500 uppercase">{step.l}</span>
                          <span className="text-gray-900">{step.p}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-olive-green transition-all duration-1000" 
                            style={{ width: `${step.p}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900 rounded-[2.5rem] p-12 md:p-24 relative overflow-hidden text-center">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[size:40px_40px]" />
            </div>
            
            <div className="relative z-10 max-w-3xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-6xl font-serif font-medium text-white tracking-tight">
                Ready to automate your <br />
                <span className="italic">marketing growth?</span>
              </h2>
              <p className="text-gray-400 text-lg md:text-xl">
                Join thousands of creators using AI to build their YouTube kingdoms.
              </p>
              <div className="pt-4">
                <Link
                  href="/dashboard"
                  className="bg-white text-gray-900 px-12 py-5 rounded-full text-lg font-bold hover:scale-105 transition-transform inline-block"
                >
                  Get Started for Free
                </Link>
                <p className="mt-4 text-gray-500 text-xs font-medium uppercase tracking-[0.2em]">
                  No credit card required
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
