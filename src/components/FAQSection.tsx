"use client";

import React, { useState } from "react";
import { ChevronDown, MessageCircleQuestion, Sparkles, TrendingUp, ShieldCheck } from "lucide-react";

const faqs = [
    {
        question: "What is YouTube Automation exactly?",
        answer: "At its core, <span className='font-bold text-gray-900 underline decoration-olive-green/20 underline-offset-4'>what is youtube automation?</span> It is the process of building and scaling a <span className='font-semibold text-gray-900'>youtube automation business</span> where you act as the manager rather than the on-camera talent using <span className='font-semibold text-gray-900 text-olive-green'>youtube ai automation</span>."
    },
    {
        question: "How to do YouTube automation successfully?",
        answer: "To understand <span className='font-bold text-gray-900'>how to do youtube automation</span>, you need a solid workflow: pick a niche, leverage <span className='font-semibold text-gray-900'>youtube automation software</span> for scripting/editing, and use AI to manage the growth of your <span className='font-semibold text-gray-900'>automated youtube channel</span>."
    },
    {
        question: "How to start YouTube automation for beginners?",
        answer: "Learning <span className='font-bold text-gray-900'>how to start youtube automation</span> begins with identifying high-CPM niches. Once selected, you implement our <span className='font-semibold text-gray-900'>AI youtube automation</span> tools to generate content without manual video production."
    },
    {
        question: "Is YouTube automation legit in 2026?",
        answer: "Yes, <span className='font-bold text-gray-900'>is youtube automation legit?</span> Absolutely. It is a recognized business model used by major media companies to produce content at scale while staying 100% compliant with YouTube's platform policies."
    },
    {
        question: "How to start a youtube automation channel from scratch?",
        answer: "If you want to know <span className='font-bold text-gray-900'>how to start a youtube automation channel</span>, the secret is in the 'faceless' strategy. You don't need expensive gear; you only need <span className='font-semibold text-gray-900'>youtube automation software</span> and a viral-ready niche."
    },
    {
        question: "Is YouTube automation worth it in 2026?",
        answer: "Looking at the growth of AI, <span className='font-bold text-gray-900'>is youtube automation worth it in 2025</span> and 2026? More than ever. The entry barrier is lower due to AI, but the revenue potential for a <span className='font-semibold text-gray-900'>youtube automation business</span> has never been higher."
    },
    {
        question: "How to make automated youtube shorts?",
        answer: "Many ask <span className='font-bold text-gray-900'>how to make automated youtube shorts</span> to gain rapid views. We provide <span className='font-semibold text-gray-900 text-olive-green'>ai youtube automation</span> tools that specifically resize and re-script long-form videos into viral vertical shorts automatically."
    },
    {
        question: "What is YouTube AI automation meaning?",
        answer: "<span className='font-bold text-gray-900'>What is youtube ai automation?</span> It is the use of neural networks and LLMs to handle all time-consuming tasks of a <span className='font-semibold text-gray-900 underline decoration-olive-green/10'>youtube automation workflow</span>, from voiceovers to final exports."
    },
    {
        question: "Can you make money from youtube automation directly?",
        answer: "Yes, <span className='font-bold text-gray-900'>can you make money from youtube automation</span>? The majority of our users generate passive income through AdSense, affiliate marketing, and digital products sold through their <span className='font-semibold text-gray-900 italic'>automated youtube channels</span>."
    },
    {
        question: "Can you make money with youtube automation as a side hustle?",
        answer: "Definitely. <span className='font-bold text-gray-900'>Can you make money with youtube automation</span> even as a beginner? Yes, because our <span className='font-semibold text-gray-900'>youtube automation software</span> reduces the daily time requirement to less than 1 hour per channel."
    },
    {
        question: "What are the best niches for YouTube automation?",
        answer: "The <span className='font-bold text-gray-900'>best niches for youtube automation</span> are high-CPM categories like Finance, Tech, Luxury, and Health. These niches attract higher-paying advertisers."
    },
    {
        question: "Can I do faceless YouTube automation?",
        answer: "Yes! <span className='font-bold text-gray-900'>Faceless youtube automation</span> is the most popular way to scale. You can produce viral videos without ever showing your face."
    },
    {
        question: "What is the role of AI in YouTube automation?",
        answer: "<span className='font-bold text-gray-900'>AI YouTube Automation</span> is the engine behind modern channels. It handles everything from scripting to thumbnail creation."
    },
    {
        question: "How to get more automated YouTube views?",
        answer: "To increase <span className='font-bold text-gray-900'>automated youtube views</span>, you must use <span className='font-semibold text-gray-900'>youtube automation software</span> for keyword research and high-CTR thumbnail design."
    },
    {
        question: "Is YouTube automation a good passive income source?",
        answer: "Definitively. A mature <span className='font-bold text-gray-900'>youtube automation business</span> is one of the best sources of passive income available today."
    },
    {
        question: "How do I choose the right YouTube automation software?",
        answer: "The right <span className='font-bold text-gray-900'>youtube automation software</span> should offer an all-in-one solution for scripting, voiceovers, and <span className='font-semibold text-gray-900'>workflow automation</span>."
    },
    {
        question: "Can I automate an existing YouTube channel?",
        answer: "Yes, you can <span className='font-bold text-gray-900'>automate youtube</span> channels that are already active by implementing our software-driven <span className='font-semibold text-gray-900'>youtube automation workflow</span>."
    },
    {
        question: "How long does it take to learn YouTube automation?",
        answer: "You can master <span className='font-bold text-gray-900'>how to start youtube automation</span> in just a few weeks with our step-by-step roadmap."
    },
    {
        question: "Are there any risks in a youtube automation business?",
        answer: "Like any business, a <span className='font-bold text-gray-900'>youtube automation business</span> has risks if you don't follow platform policies. We help you stay safe and compliant."
    },
    {
        question: "How do I scale from 1 to 10 automated youtube channels?",
        answer: "Scaling your <span className='font-bold text-gray-900'>youtube automation business</span> requires a robust <span className='font-semibold text-gray-900'>youtube automation workflow</span> replicated across multiple niches."
    }
];

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20 space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-olive-green/5 text-olive-green rounded-full text-[10px] font-bold tracking-widest uppercase">
                        <MessageCircleQuestion size={12} />
                        <span>Aggressive SEO Knowledge Base</span>
                    </div>
                    
                    <h2 className="text-3xl md:text-6xl font-serif font-bold text-gray-900 tracking-tight leading-[1.1]">
                        The Comprehensive <br />
                        <span className="text-olive-green italic font-medium">YouTube Automation FAQ</span>
                    </h2>
                    
                    <p className="text-lg text-gray-500 font-sans leading-relaxed max-w-2xl mx-auto">
                        Everything you need to know about the <span className="font-semibold text-gray-900">youtube automation business</span> model and how to scale your <span className="font-semibold text-gray-900 text-olive-green">automated youtube views</span>.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                    {faqs.map((faq, idx) => (
                        <div 
                            key={idx} 
                            className={`glass rounded-[32px] border transition-all duration-500 overflow-hidden ${openIndex === idx ? 'border-olive-green/20 shadow-xl shadow-gray-100/50 bg-white scale-[1.02]' : 'border-gray-100 hover:border-olive-green/10'}`}
                        >
                            <button 
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                className="w-full px-8 py-6 text-left flex items-center justify-between group"
                            >
                                <span className={`text-base font-bold font-serif tracking-tight transition-colors pr-4 ${openIndex === idx ? 'text-olive-green' : 'text-gray-900 group-hover:text-olive-green'}`}>
                                    {faq.question}
                                </span>
                                <ChevronDown className={`text-olive-green transition-transform duration-500 shrink-0 ${openIndex === idx ? 'rotate-180' : ''}`} size={18} />
                            </button>
                            
                            <div className={`transition-all duration-500 ease-in-out px-8 ${openIndex === idx ? 'max-h-[500px] pb-8 opacity-100' : 'max-h-0 opacity-0'}`}>
                                <div 
                                    className="text-gray-500 leading-relaxed font-sans text-sm border-t border-gray-50 pt-6"
                                    dangerouslySetInnerHTML={{ __html: faq.answer }}
                                />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-gray-100">
                   <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-olive-green/10 flex items-center justify-center shrink-0">
                         <Sparkles className="text-olive-green" size={20} />
                      </div>
                      <div>
                         <p className="text-xs font-bold text-gray-900 uppercase tracking-widest leading-none mb-1 text-left">SEO Driven</p>
                         <p className="text-[10px] text-gray-400 font-medium leading-relaxed text-left">Optimized for search engines and high conversion.</p>
                      </div>
                   </div>
                   <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-olive-green/10 flex items-center justify-center shrink-0">
                         <TrendingUp className="text-olive-green" size={20} />
                      </div>
                      <div>
                         <p className="text-xs font-bold text-gray-900 uppercase tracking-widest leading-none mb-1 text-left">Growth First</p>
                         <p className="text-[10px] text-gray-400 font-medium leading-relaxed text-left">Scaling your automated youtube business to the top.</p>
                      </div>
                   </div>
                   <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-olive-green/10 flex items-center justify-center shrink-0">
                         <ShieldCheck className="text-olive-green" size={20} />
                      </div>
                      <div>
                         <p className="text-xs font-bold text-gray-900 uppercase tracking-widest leading-none mb-1 text-left">100% Legit</p>
                         <p className="text-[10px] text-gray-400 font-medium leading-relaxed text-left">Fully compliant with YouTube platform policies.</p>
                      </div>
                   </div>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
