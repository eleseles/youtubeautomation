import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Read the terms of service for our youtube automation software and platform.",
  alternates: {
    canonical: "https://youtubeautomation.app/terms",
  }
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="py-24 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-left">
          <div className="space-y-12">
            <div className="space-y-4">
               <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 tracking-tight leading-tight">
                  Terms of <span className="text-olive-green italic font-medium">Service</span>
               </h1>
               <p className="text-sm text-gray-400 font-medium uppercase tracking-[0.2em]">Latest Revision: March 27, 2026</p>
            </div>

            <section className="prose prose-gray prose-olive max-w-none space-y-10 text-gray-500 font-sans leading-relaxed">
               <div className="space-y-4">
                  <h2 className="text-2xl font-serif font-bold text-gray-900">1. Agreement to Terms</h2>
                  <p>
                     By accessing <span className="font-semibold text-gray-900">AI YouTube Automation</span>, you agree to be bound by these Terms of Service. Our <span className="font-semibold text-gray-900">youtube automation software</span> is provided to help you scale your <span className="font-semibold text-gray-900">automated youtube business</span> efficiently.
                  </p>
               </div>

               <div className="space-y-4">
                  <h2 className="text-2xl font-serif font-bold text-gray-900">2. Use License</h2>
                  <p>
                     Permission is granted to use our <span className="font-semibold text-gray-900">AI youtube automation</span> tools for personal or commercial <span className="font-semibold text-gray-900">automated youtube channels</span>. This is a license, not a transfer of title.
                  </p>
               </div>

               <div className="space-y-4">
                  <h2 className="text-2xl font-serif font-bold text-gray-900">3. YouTube Compliance</h2>
                  <p>
                     Users must comply with all <span className="font-semibold text-gray-900 underline decoration-olive-green/20">YouTube Terms of Service</span>. We are not responsible for any channel terminations due to violation of platform policies by the user's content choices.
                  </p>
               </div>

               <div className="space-y-4">
                  <h2 className="text-2xl font-serif font-bold text-gray-900">4. Service Limitations</h2>
                  <p>
                     While our <span className="font-semibold text-gray-900">AI youtube automation</span> is highly advanced, we do not guarantee specific revenue results. Success in the <span className="font-semibold text-gray-900">youtube automation business</span> depends on niche selection and strategy.
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
