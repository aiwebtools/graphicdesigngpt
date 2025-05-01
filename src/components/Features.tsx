
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      title: "Professional Cover Designs",
      description: "Create stunning front and back cover designs for books, albums, magazines, and more with detailed customization.",
      icon: "📚"
    },
    {
      title: "Complete Graphic Design",
      description: "Generate professional graphics for branding, marketing materials, social media posts, and digital content.",
      icon: "🎨"
    },
    {
      title: "Custom Output Formats",
      description: "Get your designs in the perfect format for your needs, including high-resolution print-quality images.",
      icon: "📁"
    },
    {
      title: "Personalized Results",
      description: "Upload your content or provide detailed descriptions for truly unique and tailored design work.",
      icon: "🔍"
    },
    {
      title: "Professional Guidance",
      description: "Drawing from over 50 years of professional design experience across all industries.",
      icon: "🧠"
    },
    {
      title: "Revision Support",
      description: "Easy iterations and adjustments until your design perfectly matches your vision.",
      icon: "🔄"
    }
  ];

  return (
    <section id="features" className="py-16 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Powerful Design Features</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Graphic & Cover Design GPT offers professional-grade design capabilities powered by advanced AI technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="bg-cyber-dark border border-white/10 hover:border-cyber-purple/50 transition-all group">
              <CardHeader className="pb-2">
                <div className="text-4xl mb-3">{feature.icon}</div>
                <CardTitle className="text-xl text-white group-hover:text-gradient transition-all">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400 text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
