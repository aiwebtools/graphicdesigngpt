
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqItems = [
    {
      question: "What is Graphic & Cover Design GPT?",
      answer: "Graphic & Cover Design GPT is an AI-powered creative assistant that generates professional custom front and back cover images as well as a wide range of graphic design work. It uses advanced AI to create high-quality designs based on your specifications and requirements."
    },
    {
      question: "What types of designs can it create?",
      answer: "It can create book covers, album artwork, marketing materials, social media graphics, posters, packaging designs, branding materials, and virtually any other type of graphic design work you might need."
    },
    {
      question: "How do I provide my design requirements?",
      answer: "You can upload reference documents, provide written descriptions, or answer a series of questions that the AI will ask to understand your design needs. The more detail you provide, the better the AI can tailor the design to your specifications."
    },
    {
      question: "What file formats do I receive?",
      answer: "The designs are delivered in digital format suitable for both print and digital use. The AI can compile designs into downloadable PDFs or other requested file formats."
    },
    {
      question: "Can I request revisions to the designs?",
      answer: "Yes, you can request revisions until your vision is fully realized. The AI will work with you to make any changes to fonts, layout, colors, or imagery until you're satisfied with the result."
    },
    {
      question: "Is there a limit to how many designs I can create?",
      answer: "There are no set limits on the number of designs you can create or revisions you can request. The tool is designed to help you achieve your perfect design."
    },
    {
      question: "What makes this different from other design tools?",
      answer: "Graphic & Cover Design GPT combines advanced AI image generation with over 50 years of professional design experience. It not only creates designs but also provides guidance, asks relevant questions, and helps you refine your design concept to achieve professional results."
    }
  ];

  return (
    <section id="faq" className="py-16 relative">
      <div className="absolute left-0 right-0 top-0 h-32 bg-gradient-to-b from-cyber-black to-transparent z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Find answers to common questions about our AI design tool.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="bg-cyber-dark border border-white/10 rounded-lg overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 text-white hover:text-cyber-purple hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-300">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
