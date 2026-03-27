import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Learn how we use cookies to optimize your automated youtube channel experience on our platform.",
  alternates: {
    canonical: "https://youtubeautomation.app/cookies",
  }
};

export default function CookiesPage() {
  return (
    <>
      <Navbar />
      <main className="py-24 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-left">
          <div className="space-y-12">
            <div className="space-y-4">
               <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 tracking-tight leading-tight">
                  Cookie <span className="text-olive-green italic font-medium">Policy</span>
               </h1>
               <p className="text-sm text-gray-400 font-medium uppercase tracking-[0.2em]">Data Choice & Control</p>
            </div>

            <section className="prose prose-gray prose-olive max-w-none space-y-10 text-gray-500 font-sans leading-relaxed">
               <div className="space-y-4">
                  <h2 className="text-2xl font-serif font-bold text-gray-900">1. Use of Cookies</h2>
                  <p>
                     We use cookies to improve your experience on our <span className="font-semibold text-gray-900">youtube automation software</span> platform. Cookies help us understand how users engage with <span className="font-semibold text-gray-900 text-olive-green underline decoration-olive-green/20">AI youtube automation</span> tools and how we can better optimize your <span className="font-semibold text-gray-900">automated youtube business</span> dashboard.
                  </p>
               </div>

               <div className="space-y-4">
                  <h2 className="text-2xl font-serif font-bold text-gray-900">2. Types of Cookies</h2>
                  <p>
                     Essential cookies are necessary for core <span className="font-semibold text-gray-900">youtube automation AI</span> features related to authentication and security. Analytics cookies help us scale our <span className="font-semibold text-gray-900">youtube automation workflow</span> services.
                  </p>
               </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
