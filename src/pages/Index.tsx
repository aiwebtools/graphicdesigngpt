
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
const SOCIAL_MEDIA_IMAGE = "https://scontent-bos5-1.xx.fbcdn.net/v/t39.30808-6/494088313_10102939192851087_3198659876618467469_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=A1yIXETJ_rUQ7kNvwHmRyXl&_nc_oc=AdkSPGOIfg2om-YYO-eS9yuV64sOyehQ0vWA9Qbnrr7FO6OjGSOFgRkM3ueBWnpYtQAezUoXkHjEuLhfw6GCfDOu&_nc_zt=23&_nc_ht=scontent-bos5-1.xx&_nc_gid=_wJiASGBYCyeDMIvl7m6WA&oh=00_AfEDo5fNtKd1ICTCn_Z0my2UsKQSFXsZ2harV5W_FvlrQw&oe=6818B341";

const Index = () => {
  useEffect(() => {
    // Set page title - this should match the one in index.html
    document.title = "Graphic & Cover Design GPT | AI-Powered Design Assistant";
    
    // Update meta tags for social media sharing
    const updateMetaTag = (selector: string, attribute: string, value: string) => {
      const tag = document.querySelector(selector);
      if (tag) {
        tag.setAttribute(attribute, value);
      }
    };
    
    // Update OG image
    updateMetaTag('meta[property="og:image"]', 'content', SOCIAL_MEDIA_IMAGE);
    
    // Update Twitter image
    updateMetaTag('meta[name="twitter:image"]', 'content', SOCIAL_MEDIA_IMAGE);
    
    // Ensure Twitter specific meta tags are present and populated
    updateMetaTag('meta[name="twitter:title"]', 'content', "Graphic & Cover Design GPT | AI-Powered Design Assistant");
    updateMetaTag('meta[name="twitter:description"]', 'content', "Create professional custom front & back cover images and graphic designs with our AI-powered design assistant.");
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
