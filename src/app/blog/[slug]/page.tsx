import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts[slug as keyof typeof blogPosts];

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.sections[0].content.substring(0, 140) + "...",
    alternates: {
      canonical: `https://youtubeautomation.app/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.sections[0].content.substring(0, 140) + "...",
      url: `https://youtubeautomation.app/blog/${slug}`,
      siteName: "YouTube Automation AI",
      type: "article",
    }
  };
}


export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug: slug,
  }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts[slug as keyof typeof blogPosts];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://youtubeautomation.app"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Blog",
            "item": "https://youtubeautomation.app/blog"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": post.title,
            "item": `https://youtubeautomation.app/blog/${slug}`
          }
        ]
      },
      {
        "@type": "BlogPosting",
        "headline": post.title,
        "name": post.title,
        "description": post.sections[0].content,
        "author": {
          "@type": "Person",
          "name": post.author,
          "url": "https://youtubeautomation.app"
        },
        "publisher": {
          "@type": "Organization",
          "name": "YouTube Automation AI",
          "logo": {
            "@type": "ImageObject",
            "url": "https://youtubeautomation.app/logo.png"
          }
        },
        "datePublished": "2026-03-27T12:00:00Z",
        "dateModified": "2026-03-27T12:00:00Z",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `https://youtubeautomation.app/blog/${slug}`
        },
        "image": {
          "@type": "ImageObject",
          "url": "https://youtubeautomation.app/og-image.jpg",
          "width": 1200,
          "height": 630
        },
        "keywords": post.title.split(" ").filter(word => word.length > 3).join(", "),
        "wordCount": post.sections.reduce((acc, s) => acc + s.content.split(" ").length, 0),
        "timeRequired": `PT${post.readTime.split(" ")[0]}M`,
        "articleSection": post.sections.map(s => s.title).join(", "),
        "isAccessibleForFree": "True",
        "hasPart": post.sections.map(s => ({
          "@type": "WebPageElement",
          "isMainContentOfPage": "True",
          "headline": s.title,
          "description": s.content.substring(0, 100)
        }))
      }
    ]
  };


  return (
    <>
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-white py-24">
        <article className="container mx-auto px-4 max-w-3xl">
          {/* Plain Link */}
          <Link href="/blog" className="inline-flex items-center gap-2 text-xs text-gray-400 hover:text-gray-900 transition-colors uppercase font-bold tracking-widest mb-10">
            <ArrowLeft size={16} />
            Other Articles
          </Link>

          {/* Simple Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 leading-tight mb-6">
               {post.title}
            </h1>
            <p className="text-xs text-gray-400 uppercase tracking-widest">
               {post.author} • {post.date} • {post.readTime}
            </p>
          </div>

          {/* Minimal Image Area */}
          <div className="w-full aspect-video bg-gray-50 rounded-3xl mb-12 flex items-center justify-center border border-gray-100 overflow-hidden relative group">
             <img 
               src={post.image} 
               alt={post.title}
               className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
             />
          </div>

          {/* Pure TOC */}
          <nav className="flex flex-wrap items-center justify-center gap-8 mb-16">
             {post.sections.map((item) => (
               <a key={item.id} href={`#${item.id}`} className="text-[10px] font-black text-gray-400 hover:text-olive-green transition-colors uppercase tracking-[0.2em] no-underline">
                  {item.title}
               </a>
             ))}
          </nav>

          {/* Pure Content */}
          <div className="prose prose-olive max-w-none text-gray-600 font-sans leading-relaxed space-y-6">
            {post.sections.map((section, index) => (
               <section key={section.id} id={section.id}>
                  {index === 0 ? (
                     <p className="text-lg text-gray-900 font-serif italic leading-relaxed">
                        {section.content}
                     </p>
                  ) : (
                     <div className="pt-2">
                        <h2 className="text-xl font-serif font-bold text-gray-900 mb-1">
                          {section.title}
                        </h2>
                        <p className="text-sm md:text-base leading-relaxed">{section.content}</p>
                     </div>
                  )}
               </section>
            ))}
          </div>



          {/* Simple Author Divider */}
          <div className="mt-20 pt-10 border-t border-gray-100 mb-20 text-sm text-gray-400">
             <p className="font-bold text-gray-900 uppercase tracking-widest mb-1">{post.author}</p>
             <p>Founder & Content Strategist of YouTube Automation AI</p>
          </div>

          {/* Related Articles */}
          <section className="pt-20 border-t border-gray-100 mb-20">
             <h4 className="text-[10px] font-black text-gray-400 hover:text-olive-green transition-colors uppercase tracking-[0.3em] mb-10 text-center">Related Insights</h4>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                {Object.entries(blogPosts)
                  .filter(([s]) => s !== slug)
                  .slice(0, 2)
                  .map(([s, p]) => (
                    <Link key={s} href={`/blog/${s}`} className="group space-y-4">
                       <h3 className="text-xl font-serif font-bold text-gray-900 group-hover:text-olive-green transition-colors leading-tight">{p.title}</h3>
                       <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">{p.date}</p>
                    </Link>
                  ))
                }
             </div>
          </section>

          {/* Comments Section */}
          <section className="pt-20 border-t border-gray-100">
             <h4 className="text-[10px] font-black text-gray-400 hover:text-olive-green transition-colors uppercase tracking-[0.3em] mb-10 text-center">Join the Conversation</h4>
             <div className="space-y-12">
                <form className="space-y-6">
                   <textarea 
                     placeholder="Write your thoughts..." 
                     className="w-full p-6 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:border-olive-green/40 min-h-[120px] text-sm"
                   />
                   <div className="flex flex-col sm:flex-row gap-4">
                      <input type="text" placeholder="Name" className="flex-1 p-4 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:outline-none focus:border-olive-green/40" />
                      <button className="px-8 py-4 bg-olive-green text-white text-[10px] font-black uppercase tracking-widest rounded-xl hover:scale-105 active:scale-95 transition-all shadow-lg shadow-olive-green/10">Submit Comment</button>
                   </div>
                </form>

                <div className="space-y-10 pt-10">
                   <div className="space-y-2">
                      <div className="flex items-center gap-3">
                         <span className="text-[10px] font-black text-gray-900 uppercase tracking-widest">Mark J.</span>
                         <span className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">2 hours ago</span>
                      </div>
                      <p className="text-sm text-gray-500 leading-relaxed max-w-2xl">This is the most clear guide on youtube automation I've read in 2026. Very professional.</p>
                   </div>
                   <div className="space-y-2">
                      <div className="flex items-center gap-3">
                         <span className="text-[10px] font-black text-gray-900 uppercase tracking-widest">Sarah K.</span>
                         <span className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">5 hours ago</span>
                      </div>
                      <p className="text-sm text-gray-500 leading-relaxed max-w-2xl">Already implementing these AI systems in my own channel workflow. Scaling fast!</p>
                   </div>
                </div>
             </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
