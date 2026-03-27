import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowUpRight, Clock, User } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Knowledge Hub",
  description: "Stay ahead with the latest youtube automation trends, AI content engine updates, and niche analysis strategies for your business.",
  alternates: {
    canonical: "https://youtubeautomation.app/blog",
  }
};

const posts = [
  {
    id: 1,
    slug: "what-is-youtube-automation",
    title: "What is YouTube Automation? The Definitive 2026 Guide",
    excerpt: "Learn everything about starting a profitable youtube automation business and scaling automated youtube channels with AI.",
    tag: "Masterclass",
    author: "Alex Rivers",
    date: "Mar 27, 2026"
  },
  {
    id: 2,
    slug: "how-to-create-a-faceless-youtube-channel",
    title: "How to Create a Faceless YouTube Channel",
    excerpt: "The complete roadmap to launching your first automated youtube channel without showing your face.",
    tag: "Strategy",
    author: "Alex Rivers",
    date: "Mar 27, 2026"
  },
  {
    id: 3,
    slug: "how-to-make-faceless-youtube-videos",
    title: "How to Make Faceless YouTube Videos",
    excerpt: "Master the art of high-retention video production using youtube automation software and AI.",
    tag: "Content",
    author: "Alex Rivers",
    date: "Mar 27, 2026"
  },
  {
    id: 4,
    slug: "how-to-do-youtube-automation",
    title: "How to Do YouTube Automation",
    excerpt: "Step-by-step execution guide for managing a successful youtube automation business in 2026.",
    tag: "Execution",
    author: "Alex Rivers",
    date: "Mar 27, 2026"
  },
  {
    id: 5,
    slug: "how-to-make-ai-tiktok-videos",
    title: "How to Make AI TikTok Videos",
    excerpt: "Leverage AI to dominate short-form content and drive massive automated youtube views.",
    tag: "Shorts",
    author: "Alex Rivers",
    date: "Mar 27, 2026"
  },
  {
    id: 6,
    slug: "how-to-start-a-youtube-channel",
    title: "How to Start a YouTube Channel",
    excerpt: "Everything you need to know about starting your youtube journey with automation from day one.",
    tag: "Beginner",
    author: "Alex Rivers",
    date: "Mar 27, 2026"
  },
  {
    id: 7,
    slug: "how-to-start-youtube-automation",
    title: "How to Start YouTube Automation",
    excerpt: "Quick-start guide to setting up your first youtube automation workflow and scaling fast.",
    tag: "Systems",
    author: "Alex Rivers",
    date: "Mar 27, 2026"
  },
  {
    id: 8,
    slug: "how-to-create-ai-videos-for-tiktok",
    title: "How to Create AI Videos for TikTok",
    excerpt: "Advanced techniques for creating viral AI-driven content for the TikTok generation.",
    tag: "AI Tech",
    author: "Alex Rivers",
    date: "Mar 27, 2026"
  },
  {
    id: 9,
    slug: "how-to-make-ai-videos-on-tiktok",
    title: "How to Make AI Videos on TikTok",
    excerpt: "Seamlessly integrate AI into your TikTok content factory for maximum growth and reach.",
    tag: "AI Tech",
    author: "Alex Rivers",
    date: "Mar 27, 2026"
  },
  {
    id: 10,
    slug: "how-to-start-a-youtube-business",
    title: "How to Start a YouTube Business",
    excerpt: "Transform your channel into a high-revenue automated youtube business with these strategies.",
    tag: "Business",
    author: "Alex Rivers",
    date: "Mar 27, 2026"
  }
];

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="py-24 bg-white min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center space-y-6 mb-20">
               <div className="inline-flex items-center gap-2 px-3 py-1 bg-olive-green/5 text-olive-green rounded-full text-[10px] font-bold tracking-widest uppercase">
                  <span>Knowledge Hub</span>
               </div>
               <h1 className="text-4xl md:text-7xl font-serif font-bold text-gray-900 tracking-tight leading-tight">
                  Insights & <br />
                  <span className="text-olive-green italic font-medium">Automation Trends</span>
               </h1>
               <p className="text-lg text-gray-400 font-sans max-w-2xl mx-auto">
                  Stay updated with the latest in <span className="font-semibold text-gray-900">AI YouTube automation</span>, niche analysis, and scaling strategies.
               </p>
            </div>

            {/* Blog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {posts.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`} className="group flex flex-col h-full bg-white border border-gray-100 rounded-[40px] p-8 hover:shadow-2xl hover:shadow-gray-100 transition-all duration-500 hover:-translate-y-2">
                  <div className="flex items-center justify-between mb-8">
                     <span className="px-3 py-1 bg-olive-green text-white text-[10px] font-bold rounded-full uppercase tracking-widest">
                        {post.tag}
                     </span>
                     <div className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center group-hover:bg-olive-green group-hover:text-white transition-colors duration-500">
                        <ArrowUpRight size={18} />
                     </div>
                  </div>
                  
                  <h2 className="text-2xl font-serif font-bold text-gray-900 leading-tight mb-4 group-hover:text-olive-green transition-colors">
                     {post.title}
                  </h2>
                  <p className="text-sm text-gray-400 leading-relaxed font-medium mb-8 line-clamp-2">
                     {post.excerpt}
                  </p>

                  <div className="mt-auto pt-8 border-t border-gray-50 flex items-center justify-between">
                     <div className="flex items-center gap-4">
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
              ))}
            </div>

            {/* Newsletter CTA */}
            <div className="mt-32 p-12 bg-olive-green rounded-[50px] relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl group-hover:bg-white/10 transition-all duration-700" />
               <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                  <div className="space-y-4 text-center md:text-left">
                     <h3 className="text-3xl font-serif font-bold text-white tracking-tight">Stay ahead of the curve.</h3>
                     <p className="text-white/60 text-sm font-medium">Get the latest <span className="text-white font-semibold">youtube automation software</span> updates directly in your inbox.</p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                     <input 
                        type="email" 
                        placeholder="your@email.com" 
                        className="px-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder:text-white/30 focus:outline-none focus:border-white/40 transition-all w-full md:w-64 text-sm"
                     />
                     <button className="px-8 py-4 bg-white text-olive-green font-bold rounded-2xl hover:scale-105 active:scale-95 transition-all text-sm whitespace-nowrap shadow-xl shadow-black/10">
                        Subscribe Now
                     </button>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
