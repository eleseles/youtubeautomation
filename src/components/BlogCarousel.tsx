import React from 'react';
import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';
import { blogPosts } from '@/data/blogPosts';

const BlogCarousel = () => {
  // Take the first 3 posts
  const recentPosts = Object.entries(blogPosts).slice(0, 3);

  return (
    <section className="py-24 bg-gray-50/50 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-xl space-y-4">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 tracking-tight leading-tight">
              Our <span className="text-olive-green italic font-medium">Knowledge Hub</span>
            </h2>
            <p className="text-gray-500 font-sans leading-relaxed">
              Stay ahead with the latest strategies, AI updates, and deep dives into the world of YouTube automation.
            </p>
          </div>
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-gray-900 hover:text-olive-green transition-colors uppercase tracking-widest pb-2 border-b-2 border-olive-green/20">
            Visit Hub <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recentPosts.map(([slug, post]) => (
            <Link key={slug} href={`/blog/${slug}`} className="group h-full flex flex-col bg-white border border-gray-100 rounded-[32px] overflow-hidden hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-500 hover:-translate-y-1">
              <div className="aspect-[16/10] bg-gray-50 border-b border-gray-100 flex items-center justify-center overflow-hidden relative">
                 <img 
                   src={post.image} 
                   alt={post.title} 
                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                 />
              </div>
              
              <div className="p-8 flex flex-col flex-1 justify-between gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-[10px] font-black text-gray-400 uppercase tracking-widest">
                     <span className="text-olive-green">{post.readTime}</span>
                     <span>•</span>
                     <span className="flex items-center gap-1"><Clock size={10} /> {post.date}</span>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-gray-900 group-hover:text-olive-green transition-colors leading-tight line-clamp-2">
                    {post.title}
                  </h3>
                </div>
                
                <p className="text-xs text-olive-green font-black uppercase tracking-widest flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                   Read Article <ArrowRight size={14} />
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogCarousel;
