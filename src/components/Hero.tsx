
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import ThreeDElement from './ThreeDElement';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const [imageError, setImageError] = useState(false);
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* 3D animated background */}
      <ThreeDElement />
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-neon-glow opacity-70 z-0"></div>
      
      {/* Grid background */}
      <div className="absolute inset-0 cyberpunk-grid z-0 opacity-30"></div>
      
      <div className="container mx-auto px-4 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-glow text-gradient">
              Professional Cover & Graphic Design with AI
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Create stunning custom designs, book covers, marketing materials, and more with our AI-powered design assistant.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-cyber-purple to-cyber-blue text-white animate-pulse-neon hover:opacity-90 transition-opacity"
                asChild
              >
                <a 
                  href="https://chatgpt.com/g/g-6812c1c50ed48191b6b1647d7d52c62b-graphic-cover-design-gpt" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Start Designing Now <ArrowRight size={18} />
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-cyber-purple text-cyber-purple hover:bg-cyber-purple/10 transition-all"
                asChild
              >
                <a href="#how-it-works">
                  Learn How It Works
                </a>
              </Button>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <div className="relative p-2 rounded-lg neon-border animate-float">
              {imageError ? (
                <div className="flex items-center justify-center bg-cyber-dark w-full aspect-[4/3] rounded-lg">
                  <div className="text-center p-6">
                    <div className="text-4xl mb-4">🎨</div>
                    <h3 className="text-xl font-bold text-gradient mb-2">AI-Powered Design</h3>
                    <p className="text-gray-300">Create stunning professional designs with our AI tool</p>
                  </div>
                </div>
              ) : (
                <img 
                  src="/lovable-uploads/06e647cd-b3ab-455d-8de1-46fdd0ab4280.png"
                  alt="Graphic & Cover Design GPT Example" 
                  className="w-full h-auto rounded-lg shadow-2xl shadow-cyber-purple/20"
                  onError={() => setImageError(true)}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
