
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
                  src="https://scontent-bos5-1.xx.fbcdn.net/v/t39.30808-6/494088313_10102939192851087_3198659876618467469_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=A1yIXETJ_rUQ7kNvwHmRyXl&_nc_oc=AdkSPGOIfg2om-YYO-eS9yuV64sOyehQ0vWA9Qbnrr7FO6OjGSOFgRkM3ueBWnpYtQAezUoXkHjEuLhfw6GCfDOu&_nc_zt=23&_nc_ht=scontent-bos5-1.xx&_nc_gid=_wJiASGBYCyeDMIvl7m6WA&oh=00_AfEDo5fNtKd1ICTCn_Z0my2UsKQSFXsZ2harV5W_FvlrQw&oe=6818B341"
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
