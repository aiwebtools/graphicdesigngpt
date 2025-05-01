
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const Disclaimer = () => {
  return (
    <section id="disclaimer" className="py-16 relative">
      <div className="absolute left-0 right-0 top-0 h-32 bg-gradient-to-b from-cyber-black to-transparent z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Legal Disclaimer</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Important information regarding the use of our AI design tool.
          </p>
        </div>

        <Card className="bg-cyber-dark border border-white/10">
          <CardContent className="p-6 text-gray-300 space-y-4">
            <p>
              <strong className="text-white">SERVICE DESCRIPTION:</strong> Graphic & Cover Design GPT is an AI-powered tool designed to assist users in creating graphical content. While we strive for professional-quality results, the tool is provided "as is" without warranties of any kind.
            </p>
            
            <p>
              <strong className="text-white">COPYRIGHT AND OWNERSHIP:</strong> Users retain full ownership of the content they create using our service. However, users are responsible for ensuring they have the necessary rights to any content they upload or reference in their designs.
            </p>
            
            <p>
              <strong className="text-white">LIMITATION OF LIABILITY:</strong> AI WEB TOOLS LLC and its affiliates shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use our services, including but not limited to damages for loss of profits, goodwill, use, data, or other intangible losses.
            </p>
            
            <p>
              <strong className="text-white">NO GUARANTEES:</strong> While our AI technology aims to produce high-quality design work, we cannot guarantee that the designs generated will meet all user expectations or be suitable for all purposes. Users should review all designs before commercial use.
            </p>
            
            <p>
              <strong className="text-white">USER RESPONSIBILITIES:</strong> Users are responsible for reviewing and ensuring the appropriateness of the content generated. The AI may occasionally produce unexpected results, and users should verify all content before publication or distribution.
            </p>
            
            <p>
              <strong className="text-white">THIRD-PARTY SERVICES:</strong> This tool integrates with OpenAI's technologies. Use of these technologies is also subject to OpenAI's terms of service and privacy policies.
            </p>
            
            <p>
              <strong className="text-white">MODIFICATIONS:</strong> We reserve the right to modify, suspend, or discontinue the service at any time without notice.
            </p>
            
            <p>
              <strong className="text-white">INDEMNIFICATION:</strong> Users agree to indemnify and hold harmless AI WEB TOOLS LLC and its affiliates from any claims arising from their use of the service or violation of these terms.
            </p>
            
            <p>
              By using Graphic & Cover Design GPT, you acknowledge that you have read, understood, and agree to be bound by this disclaimer and our full terms of service.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Disclaimer;
