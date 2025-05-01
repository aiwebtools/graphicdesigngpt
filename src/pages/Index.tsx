
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

const Index = () => {
  useEffect(() => {
    // Set page title and meta description
    document.title = "Graphic & Cover Design GPT | AI-Powered Design Assistant";
    
    // Update meta image if it exists - use the uploaded image
    const metaImage = document.querySelector('meta[property="og:image"]');
    if (metaImage) {
      metaImage.setAttribute('content', window.location.origin + '/lovable-uploads/06e647cd-b3ab-455d-8de1-46fdd0ab4280.png');
    }
    
    const twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (twitterImage) {
      twitterImage.setAttribute('content', window.location.origin + '/lovable-uploads/06e647cd-b3ab-455d-8de1-46fdd0ab4280.png');
    }
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
