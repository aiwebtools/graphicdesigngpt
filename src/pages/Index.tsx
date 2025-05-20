
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
    <div className="min-h-screen bg-cyber-black text-white relative">
      {/* Background elements */}
      <div className="fixed inset-0 bg-cyber-dark z-[-1]"></div>
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyber-purple/10 via-transparent to-transparent z-[-1]"></div>
      
      <Header />
      
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <Disclaimer />
      </main>
      
      <Footer />
      <ConsentPopup />
    </div>
  );
};

export default Index;
