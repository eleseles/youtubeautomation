"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Link from "next/link";

interface FAQ {
  q: string;
  a: string;
}

interface AggressiveFAQProps {
  faqs: FAQ[];
  title?: React.ReactNode;
  subtitle?: string;
}

const AggressiveFAQ = ({ faqs, title, subtitle }: AggressiveFAQProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
           <div className="text-center mb-16 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-olive-green/5 rounded-full border border-olive-green/10">
                 <span className="w-1.5 h-1.5 bg-olive-green rounded-full animate-pulse" />
                 <span className="text-[10px] font-black uppercase tracking-widest text-olive-green">Deep Knowledge</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 tracking-tight">
                 {title || <>Frequently Asked <span className="italic text-olive-green">Questions</span></>}
              </h2>
              <p className="text-gray-500 text-lg font-light max-w-2xl mx-auto">
                 {subtitle || "Everything you need to know about scaling your digital presence with AI."}
              </p>
           </div>

           <div className="divide-y divide-gray-100 border-t border-b border-gray-100">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className="group transition-all duration-300"
                >
                  <button 
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full text-left py-8 flex items-center justify-between gap-6 hover:px-2 transition-all"
                  >
                     <span className={`text-lg md:text-xl font-bold tracking-tight transition-colors duration-300 ${openIndex === index ? 'text-olive-green' : 'text-gray-900 group-hover:text-olive-green'}`}>
                        {faq.q}
                     </span>
                     <div className={`shrink-0 w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-olive-green transition-all duration-500 ${openIndex === index ? 'rotate-180 bg-olive-green text-white border-olive-green' : 'group-hover:border-olive-green/30'}`}>
                        {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                     </div>
                  </button>
                  <div className={`transition-all duration-500 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-96 opacity-100 mb-8' : 'max-h-0 opacity-0'}`}>
                     <div className="text-base md:text-lg text-gray-500 leading-relaxed font-light pr-12">
                        {faq.a}
                     </div>
                  </div>
                </div>
              ))}
           </div>
           
           <div className="mt-16 text-center">
              <p className="text-sm text-gray-400 font-medium">
                 Still have questions? <Link href="/contact" className="text-olive-green underline decoration-olive-green/30 hover:decoration-olive-green transition-all">Contact our 24/7 Support Team</Link>
              </p>
           </div>
        </div>
      </div>
    </section>
  );
};

export default AggressiveFAQ;
