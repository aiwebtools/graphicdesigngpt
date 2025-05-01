
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "This AI tool helped me create a stunning book cover for my self-published novel. The process was intuitive and the results exceeded my expectations.",
      author: "Sarah Johnson",
      role: "Author",
      rating: 5
    },
    {
      quote: "As a marketing manager, I needed quick designs for our campaign. Graphic & Cover Design GPT delivered professional results in minutes that would have taken days with traditional designers.",
      author: "Michael Chen",
      role: "Marketing Director",
      rating: 5
    },
    {
      quote: "The ability to generate both front and back covers was exactly what I needed for my music album. The designs perfectly captured the vibe I was going for.",
      author: "Tanya Rodriguez",
      role: "Independent Musician",
      rating: 5
    },
    {
      quote: "I'm impressed with how well the AI understood my brand requirements. The designs were on-point and required minimal revisions.",
      author: "David Williams",
      role: "Small Business Owner",
      rating: 4
    }
  ];

  return (
    <section id="testimonials" className="py-16 relative">
      <div className="absolute left-0 right-0 top-0 h-32 bg-gradient-to-b from-cyber-black to-transparent z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Customer Success Stories</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            See how others have transformed their design process with our AI tool.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-cyber-dark border border-white/10 hover:neon-border transition-all">
              <CardContent className="p-6">
                <div className="mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`text-xl ${i < testimonial.rating ? 'text-cyber-purple' : 'text-gray-600'}`}>
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-300 italic mb-4">"{testimonial.quote}"</p>
                <div>
                  <p className="font-bold text-white">{testimonial.author}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
