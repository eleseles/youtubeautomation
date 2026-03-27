import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Learn how we handle your data and channel connectivity. Our policy ensures your automated youtube business remains secure.",
  alternates: {
    canonical: "https://youtubeautomation.app/privacy",
  }
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="py-24 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-left">
          <div className="space-y-12">
            <div className="space-y-4">
               <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 tracking-tight leading-tight">
                  Privacy <span className="text-olive-green italic font-medium">Policy</span>
               </h1>
               <p className="text-sm text-gray-400 font-medium uppercase tracking-[0.2em]">Last Updated: March 27, 2026</p>
            </div>

            <section className="prose prose-gray prose-olive max-w-none space-y-10 text-gray-500 font-sans leading-relaxed">
               <div className="space-y-4">
                  <h2 className="text-2xl font-serif font-bold text-gray-900">1. Information We Collect</h2>
                  <p>
                     At <span className="font-semibold text-gray-900">YouTube Automation AI</span>, we collect information necessary to provide you with the best <span className="font-semibold text-gray-900">youtube automation software</span> experience. This includes account details, channel connectivity info, and usage data to optimize your <span className="font-semibold text-gray-900">automated youtube business</span> results.
                  </p>
               </div>

               <div className="space-y-4">
                  <h2 className="text-2xl font-serif font-bold text-gray-900">2. How We Use Data</h2>
                  <p>
                     Your data is used specifically to power our <span className="font-semibold text-gray-900">AI youtube automation</span> tools. This allows for automated scripting, thumbnail generation, and SEO optimization. We never sell your personal data to third parties.
                  </p>
               </div>

               <div className="space-y-4">
                  <h2 className="text-2xl font-serif font-bold text-gray-900">3. YouTube Data Usage</h2>
                  <p>
                     When you connect an <span className="font-semibold text-gray-900">automated youtube channel</span>, we only access the data required to perform your requested <span className="font-semibold text-gray-900 text-olive-green underline decoration-olive-green/20">youtube automation workflow</span>. We comply fully with the YouTube API Services Terms of Service.
                  </p>
               </div>

               <div className="space-y-4">
                  <h2 className="text-2xl font-serif font-bold text-gray-900">4. Data Security</h2>
                  <p>
                     Security is our priority. Your <span className="font-semibold text-gray-900">faceless youtube automation</span> business data is encrypted using industry-standard protocols, ensuring that your content and strategies remain private and secure.
                  </p>
               </div>

               <div className="space-y-4">
                   <h2 className="text-2xl font-serif font-bold text-gray-900">5. Contact Us</h2>
                   <p>
                      If you have questions about this <span className="font-semibold text-gray-900 underline decoration-olive-green/10">Privacy Policy</span>, contact our support team at <span className="text-olive-green font-medium">privacy@youtubeautomation.app</span>.
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
