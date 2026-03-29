"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { blogPosts } from "@/data/blogPosts";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock, User, ArrowUpRight } from "lucide-react";

const BlogCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    skipSnaps: false,
    dragFree: true,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="py-24 bg-[#FCFCFA] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-olive-green/5 rounded-full border border-olive-green/10">
                 <span className="w-1.5 h-1.5 bg-olive-green rounded-full animate-pulse" />
                 <span className="text-[10px] font-black uppercase tracking-widest text-olive-green">Knowledge Hub</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 tracking-tight">
                 Latest from our <span className="italic text-olive-green">Blog</span>
              </h2>
              <p className="text-gray-500 text-lg font-light max-w-xl">
                 Stay ahead with the latest trends in AI automation and professional growth strategies.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <button 
                onClick={scrollPrev}
                className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-olive-green hover:text-olive-green transition-all shadow-sm bg-white"
              >
                <ArrowLeft size={20} />
              </button>
              <button 
                onClick={scrollNext}
                className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-olive-green hover:text-olive-green transition-all shadow-sm bg-white"
              >
                <ArrowRight size={20} />
              </button>
            </div>
          </div>

          {/* Carousel */}
          <div className="embla" ref={emblaRef}>
            <div className="embla__container flex gap-8">
              {Object.entries(blogPosts).map(([slug, post], index) => (
                <div key={slug} className="embla__slide flex-[0_0_85%] md:flex-[0_0_40%] lg:flex-[0_0_30%] min-w-0">
                  <Link 
                    href={`/blog/${slug}`} 
                    className="group block h-full bg-white border border-gray-100 rounded-[2.5rem] p-8 hover:shadow-2xl hover:shadow-olive-green/5 transition-all duration-500 hover:-translate-y-2"
                  >
                    <div className="flex items-center justify-between mb-8">
                       <span className="px-3 py-1 bg-olive-green/10 text-olive-green text-[10px] font-bold rounded-full uppercase tracking-widest border border-olive-green/10">
                          {index % 2 === 0 ? 'Automation' : 'Strategy'}
                       </span>
                       <div className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 group-hover:bg-olive-green group-hover:text-white group-hover:border-olive-green transition-all duration-500">
                          <ArrowUpRight size={18} />
                       </div>
                    </div>
                    
                    <h3 className="text-xl md:text-2xl font-serif font-bold text-gray-900 leading-tight mb-4 group-hover:text-olive-green transition-colors">
                       {post.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed font-light mb-8 line-clamp-2">
                       {post.sections[0].content}
                    </p>

                    <div className="mt-auto pt-8 border-t border-gray-50 flex items-center justify-between">
                       <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center">
                             <User size={14} className="text-gray-400" />
                          </div>
                          <span className="text-[10px] font-bold text-gray-900 uppercase tracking-widest">{post.author}</span>
                       </div>
                       <div className="flex items-center gap-2 text-gray-400">
                          <Clock size={12} />
                          <span className="text-[10px] font-bold uppercase tracking-widest">{post.date}</span>
                       </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-olive-green font-bold text-sm uppercase tracking-widest hover:gap-4 transition-all"
            >
              View All Insights <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogCarousel;
