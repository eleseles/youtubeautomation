"use client";

import React from "react";
import { Sparkles, Youtube, PenTool, Layout, BarChart, Rocket } from "lucide-react";

const features = [
  {
    icon: <Sparkles className="text-olive-green" size={24} />,
    title: "AI Scripting",
    description: "High-engagement scripts tailored to your channel's voice and niche, ready in seconds."
  },
  {
    icon: <Layout className="text-olive-green" size={24} />,
    title: "Smart Thumbnails",
    description: "Professional thumbnail designs optimized to maximize click-through rates (CTR)."
  },
  {
    icon: <Youtube className="text-olive-green" size={24} />,
    title: "SEO Automation",
    description: "Boost visibility with the right keywords, compelling titles, and comprehensive descriptions."
  },
  {
    icon: <BarChart className="text-olive-green" size={24} />,
    title: "Data-Driven Insights",
    description: "Analyze what works and refine your strategy with AI-powered content recommendations."
  },
  {
    icon: <PenTool className="text-olive-green" size={24} />,
    title: "Content Planner",
    description: "Manage and automate your weekly or monthly content calendar from a single dashboard."
  },
  {
    icon: <Rocket className="text-olive-green" size={24} />,
    title: "Fast Scaling",
    description: "Manage multiple channels simultaneously and scale your content with minimum effort."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24 space-y-4">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 tracking-tight">
            Everything You Need <br />
            <span className="text-olive-green italic font-medium underline underline-offset-8 decoration-1 decoration-olive-green/30">In One Dashboard</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Professional tools designed to simplify YouTube automation and grow your channel smarter.
          </p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group p-8 glass rounded-3xl hover:bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1 transform"
            >
              <div className="w-12 h-12 rounded-2xl bg-olive-green/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-tight font-serif">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-base leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
