
import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Disclaimer from "../components/Disclaimer";
import ConsentPopup from "../components/ConsentPopup";

// Define the social media image URL as a constant
const SOCIAL_MEDIA_IMAGE = "https://graphiccoverdesigngpt.lovable.app/og-image.png";

const Index = () => {
  useEffect(() => {
    // Set page title with SEO keywords
    document.title = "Graphic & Cover Design GPT - Create Professional AI-Powered Designs | Free Tool";
    
    // Update meta tags for SEO and social media sharing
    const updateMetaTag = (selector: string, attribute: string, value: string) => {
      const tag = document.querySelector(selector);
      if (tag) {
        tag.setAttribute(attribute, value);
      }
    };
    
    // Enhanced meta description with keywords
    updateMetaTag('meta[name="description"]', 'content', "Graphic & Cover Design GPT: Create stunning custom front & back cover images and professional graphic designs instantly with AI. Free design tool for authors, marketers & businesses.");
    
    // Update OG tags with keywords
    updateMetaTag('meta[property="og:title"]', 'content', "Graphic & Cover Design GPT - Create Professional AI-Powered Designs");
    updateMetaTag('meta[property="og:description"]', 'content', "Create stunning custom front & back cover images and professional graphic designs instantly with AI. Free design tool for authors, marketers & businesses by AIWEBTOOLS.AI");
    updateMetaTag('meta[property="og:image"]', 'content', SOCIAL_MEDIA_IMAGE);
    
    // Update Twitter tags with keywords
    updateMetaTag('meta[name="twitter:title"]', 'content', "Graphic & Cover Design GPT - Create Professional AI-Powered Designs");
    updateMetaTag('meta[name="twitter:description"]', 'content', "Create stunning custom front & back cover images and professional graphic designs instantly with AI. Free design tool for authors, marketers & businesses by AIWEBTOOLS.AI");
    updateMetaTag('meta[name="twitter:image"]', 'content', SOCIAL_MEDIA_IMAGE);
    
    // Add additional SEO meta tags
    const addMetaTag = (name: string, content: string) => {
      if (!document.querySelector(`meta[name="${name}"]`)) {
        const meta = document.createElement('meta');
        meta.name = name;
        meta.content = content;
        document.head.appendChild(meta);
      }
    };
    
    addMetaTag('keywords', 'AI tools, free AI tools, AI web tools, graphic design AI, cover design AI, AI design assistant, book cover generator, AI graphic designer, professional design tools, marketing design AI, AIWEBTOOLS.AI, AI WEB TOOLS');
    addMetaTag('robots', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    addMetaTag('googlebot', 'index, follow');
    
    // Add canonical link
    if (!document.querySelector('link[rel="canonical"]')) {
      const canonical = document.createElement('link');
      canonical.rel = 'canonical';
      canonical.href = window.location.href;
      document.head.appendChild(canonical);
    }
  }, []);

  return (
    <div className="min-h-screen bg-cyber-black text-white relative overflow-hidden">
      {/* Enhanced background elements with multiple layers */}
      <div className="fixed inset-0 bg-gradient-to-br from-cyber-black via-purple-950/30 to-blue-950/20 z-[-4]"></div>
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-600/20 via-purple-900/10 to-transparent animate-pulse z-[-3]"></div>
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-600/15 via-cyan-700/5 to-transparent z-[-3]"></div>
      
      {/* Animated floating orbs */}
      <div className="fixed top-20 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-float z-[-2]"></div>
      <div className="fixed top-40 right-20 w-24 h-24 bg-blue-500/15 rounded-full blur-lg animate-float z-[-2]" style={{ animationDelay: '2s' }}></div>
      <div className="fixed bottom-40 left-1/4 w-20 h-20 bg-pink-500/10 rounded-full blur-md animate-float z-[-2]" style={{ animationDelay: '4s' }}></div>
      <div className="fixed bottom-20 right-1/3 w-28 h-28 bg-cyan-500/8 rounded-full blur-lg animate-float z-[-2]" style={{ animationDelay: '1s' }}></div>
      
      {/* Shimmering grid overlay */}
      <div className="fixed inset-0 bg-cyber-grid bg-[length:60px_60px] opacity-20 animate-pulse z-[-1]"></div>
      
      <Header />
      
      {/* Disclaimer Notice */}
      <div className="fixed bottom-4 left-4 bg-black/80 backdrop-blur-sm border border-purple-500/30 rounded-lg px-4 py-2 text-xs text-gray-300 max-w-sm z-40">
        For informational, educational, and research purposes only.
      </div>
      
      <main className="relative z-10">
        <div className="space-y-32">
          <Hero />
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/5 to-transparent h-px"></div>
            <Features />
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent h-px"></div>
            <HowItWorks />
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-500/5 to-transparent h-px"></div>
            <Testimonials />
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent h-px"></div>
            <FAQ />
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/5 to-transparent h-px"></div>
            <Disclaimer />
          </div>
        </div>
      </main>
      
      <Footer />
      <ConsentPopup />
    </div>
  );
};

export default Index;
