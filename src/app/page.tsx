import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhatIsAuto from "@/components/WhatIsAuto";
import FacelessAuto from "@/components/FacelessAuto";
import BusinessAuto from "@/components/BusinessAuto";
import SoftwareAuto from "@/components/SoftwareAuto";
import StartGuide from "@/components/StartGuide";
import BlogCarousel from "@/components/BlogCarousel";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://youtubeautomation.app/#organization",
      "name": "AI YouTube Automation",
      "url": "https://youtubeautomation.app",
      "logo": {
        "@type": "ImageObject",
        "url": "https://youtubeautomation.app/logo.png"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://youtubeautomation.app/#website",
      "url": "https://youtubeautomation.app",
      "name": "AI YouTube Automation: Scale Your Automated YouTube Channel",
      "publisher": { "@id": "https://youtubeautomation.app/#organization" },
      "description": "Master AI YouTube Automation. Learn how to start a faceless youtube automation business and scale with automated youtube views.",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://youtubeautomation.app/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is YouTube Automation exactly?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "What is youtube automation? It is the process of building and scaling a youtube automation business where you act as the manager rather than the on-camera talent. Using AI tools like our youtube automation software, you create automated youtube channels for passive income."
          }
        },
        {
          "@type": "Question",
          "name": "Is YouTube automation legit?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Is youtube automation legit? Yes, it is fully compliant with YouTube platform policies as long as your automated youtube channel provides value to its viewers."
          }
        },
        {
          "@type": "Question",
          "name": "How to start a youtube automation channel?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "To start a youtube automation channel, you follow a 5-step blueprint: niche selection, youtube automation software setup, AI content workflow, SEO optimization, and scaling."
          }
        }
      ]
    },
    {
      "@type": "HowTo",
      "name": "How to Start a YouTube Automation Channel",
      "step": [
        {
          "@type": "HowToStep",
          "name": "Niche Selection",
          "text": "Find high-CPM categories for your automated channel."
        },
        {
          "@type": "HowToStep",
          "name": "Automation Setup",
          "text": "Connect your AI content engine with youtube automation software."
        },
        {
          "@type": "HowToStep",
          "name": "Content Workflow",
          "text": "Generate scripts, voiceovers, and visuals automatically using AI."
        }
      ]
    }
  ]
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <HeroSection />
        <WhatIsAuto />
        <FacelessAuto />
        <BusinessAuto />
        <SoftwareAuto />
        <StartGuide />
        <BlogCarousel />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
