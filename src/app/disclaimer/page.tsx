import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Earnings Disclaimer",
  description: "Learn about income potential and realistic expectations for starting an automated youtube business on our platform.",
  alternates: {
    canonical: "https://youtubeautomation.app/disclaimer",
  }
};

export default function DisclaimerPage() {
  return (
    <>
      <Navbar />
      <main className="py-24 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-left">
          <div className="space-y-12">
            <div className="space-y-4">
               <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 tracking-tight leading-tight">
                  Earnings <span className="text-olive-green italic font-medium">Disclaimer</span>
               </h1>
               <p className="text-sm text-gray-400 font-medium uppercase tracking-[0.2em]">Required Legal Information</p>
            </div>

            <section className="prose prose-gray prose-olive max-w-none space-y-10 text-gray-500 font-sans leading-relaxed">
               <div className="space-y-4">
                  <h2 className="text-2xl font-serif font-bold text-gray-900">1. No Earnings Guarantees</h2>
                  <p>
                     While <span className="font-semibold text-gray-900">youtube automation business</span> can be highly profitable, we make no guarantees regarding results or income levels. Your success in <span className="font-semibold text-gray-900">automated youtube views</span> and revenue depends on your strategy and dedication.
                  </p>
               </div>

               <div className="space-y-4">
                  <h2 className="text-2xl font-serif font-bold text-gray-900">2. Accuracy of Claims</h2>
                  <p>
                     Testimonials and examples of <span className="font-semibold text-gray-900">youtube automation AI</span> results on this site are illustrative only. They do not represent what you should expect to achieve with our <span className="font-semibold text-gray-900">automated youtube software</span> without personal effort.
                  </p>
               </div>

               <div className="space-y-4">
                  <h2 className="text-2xl font-serif font-bold text-gray-900 text-red-900/40">3. High Risk Disclaimer</h2>
                  <p className="text-xs italic leading-relaxed">
                     Digital entrepreneurship and building <span className="font-semibold text-gray-900 underline decoration-olive-green/20">automated youtube channels</span> involves risk. Always do your own research or consult with a financial advisor before making business investments in <span className="font-semibold text-gray-900">youtube ai automation</span>.
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
