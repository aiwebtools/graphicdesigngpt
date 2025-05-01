
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
    
    // Update meta image if it exists - use the direct image URL from the external source
    const metaImage = document.querySelector('meta[property="og:image"]');
    if (metaImage) {
      metaImage.setAttribute('content', "https://sdmntprnorthcentralus.oaiusercontent.com/files/00000000-96f8-622f-b8ec-afcc2007bbb9/raw?se=2025-05-01T01%3A48%3A03Z&sp=r&sv=2024-08-04&sr=b&scid=2fbd3274-80f5-5f5e-bf76-7c674c41e927&skoid=d958ec58-d47c-4d2f-a9f2-7f3e03fdcf72&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-30T04%3A46%3A35Z&ske=2025-05-01T04%3A46%3A35Z&sks=b&skv=2024-08-04&sig=fRPAh57sPzxDOhm0FKdhF3lastdaW4%2BGUscHFuWXzhI%3D");
    }
    
    const twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (twitterImage) {
      twitterImage.setAttribute('content', "https://sdmntprnorthcentralus.oaiusercontent.com/files/00000000-96f8-622f-b8ec-afcc2007bbb9/raw?se=2025-05-01T01%3A48%3A03Z&sp=r&sv=2024-08-04&sr=b&scid=2fbd3274-80f5-5f5e-bf76-7c674c41e927&skoid=d958ec58-d47c-4d2f-a9f2-7f3e03fdcf72&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-30T04%3A46%3A35Z&ske=2025-05-01T04%3A46%3A35Z&sks=b&skv=2024-08-04&sig=fRPAh57sPzxDOhm0FKdhF3lastdaW4%2BGUscHFuWXzhI%3D");
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
