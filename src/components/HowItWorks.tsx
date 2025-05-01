
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Provide Project Details",
      description: "Upload documents, product specifications, outlines, or brand references to help the AI understand your design needs.",
      color: "from-cyber-purple to-cyber-blue"
    },
    {
      number: "02",
      title: "Answer Design Questions",
      description: "The AI will ask you about your preferred layout, style, colors, and other design elements to ensure a perfect match.",
      color: "from-cyber-blue to-cyber-pink"
    },
    {
      number: "03",
      title: "Generate Front Design",
      description: "The AI creates a stunning front cover or primary design visual based on your specifications using advanced image generation.",
      color: "from-cyber-pink to-cyber-purple"
    },
    {
      number: "04",
      title: "Create Back Cover (if needed)",
      description: "For cover designs, the AI will also create a perfectly matching back cover to complete your project.",
      color: "from-cyber-purple to-cyber-neon"
    },
    {
      number: "05",
      title: "Compile & Download",
      description: "All designs are compiled into a downloadable format, ready for printing, publishing, or digital distribution.",
      color: "from-cyber-neon to-cyber-blue"
    }
  ];

  return (
    <section id="how-it-works" className="py-16 relative">
      <div className="absolute left-0 right-0 top-0 h-32 bg-gradient-to-b from-cyber-black to-transparent z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">How It Works</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Creating professional designs with Graphic & Cover Design GPT is simple, fast and intuitive.
          </p>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <Card 
              key={index} 
              className="bg-cyber-dark border border-white/10 overflow-hidden relative group"
            >
              <div 
                className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${step.color}`}
              ></div>
              
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                  <span className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
                    {step.number}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
