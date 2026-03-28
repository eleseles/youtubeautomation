import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface SplitHeroProps {
  badge: {
    icon: React.ReactNode;
    text: string;
  };
  title: React.ReactNode; // For colored/italicized text
  description: string;
  bullet: string;
  ctaText: string;
  ctaHref: string;
  rightElement: React.ReactNode;
  statusText?: string;
}

const SplitHero = ({
  badge,
  title,
  description,
  bullet,
  ctaText,
  ctaHref,
  rightElement,
  statusText = "System Operational",
}: SplitHeroProps) => {
  return (
    <section className="relative pt-24 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-[#FCFCFA]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="lg:w-1/2 space-y-8 animate-fadeIn">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-gray-100 shadow-sm rounded-full text-[10px] md:text-xs font-bold text-gray-900 tracking-widest uppercase">
              {badge.icon}
              <span>{badge.text}</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-7xl font-serif font-bold text-gray-900 leading-[1.1] tracking-tight">
              {title}
            </h1>

            {/* Description */}
            <p className="max-w-xl text-lg md:text-xl text-gray-500 font-sans leading-relaxed">
              {description}
            </p>

            {/* Bullet Point */}
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-olive-green rounded-full" />
              <span className="text-[10px] md:text-xs font-black text-gray-400 uppercase tracking-[0.2em]">
                {bullet}
              </span>
            </div>

            {/* CTA */}
            <Link
              href={ctaHref}
              className="inline-flex items-center gap-3 bg-[#111827] text-white px-10 py-5 rounded-3xl text-base font-bold hover:bg-black transition-all shadow-xl shadow-black/10 group"
            >
              <span>{ctaText}</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Right Content (Visual) */}
          <div className="lg:w-1/2 relative">
             <div className="relative bg-white p-4 rounded-[40px] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] border border-gray-100 transform rotate-2 hover:rotate-0 transition-transform duration-700">
                <div className="rounded-[32px] overflow-hidden bg-gray-50 aspect-[4/3] flex items-center justify-center border border-gray-50">
                    {rightElement}
                </div>
                
                {/* Status Pill */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-black text-white px-6 py-3 rounded-full flex items-center gap-3 shadow-2xl border border-white/10 min-w-[220px]">
                    <span className="w-2 h-2 bg-[#22c55e] rounded-full animate-pulse" />
                    <span className="text-xs font-bold uppercase tracking-widest whitespace-nowrap">{statusText}</span>
                    <CheckCircle2 size={16} className="text-[#22c55e] ml-auto" />
                </div>
             </div>

             {/* Background blur decorative element */}
             <div className="absolute -top-12 -right-12 w-64 h-64 bg-olive-green/10 rounded-full blur-3xl -z-10" />
             <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-olive-green/5 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SplitHero;
