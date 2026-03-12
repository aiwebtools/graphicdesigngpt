
import React from "react";
import Logo from "./Logo";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-cyber-dark border-t border-white/10 py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="flex flex-col gap-4">
            <Logo />
            <p className="text-gray-400 mt-2">
              Professional custom front & back cover images and a wide range of graphic design work.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a
                  href="https://chatgpt.com/g/g-6812c1c50ed48191b6b1647d7d52c62b-graphic-cover-design-gpt"
                  className="hover:text-cyber-purple transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  USE Graphic & Cover Design GPT
                </a>
              </li>
              <li>
                <a
                  href="https://adandlogomakergpt.lovable.app/?via=aiwebtools"
                  className="hover:text-cyber-purple transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ad & Logo Maker GPT
                </a>
              </li>
              <li>
                <a
                  href="https://productphotographygpt.lovable.app/?via=aiwebtools"
                  className="hover:text-cyber-purple transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Product Photography GPT
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-cyber-purple transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#disclaimer" className="hover:text-cyber-purple transition-colors">
                  Disclaimer
                </a>
              </li>
              <li>
                <a
                  href="https://aiwebtools.lovable.app/?via=aiwebtools"
                  className="hover:text-cyber-purple transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  More AI Tools
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Legal</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a
                  href="https://openai.com/policies/privacy-policy/"
                  className="hover:text-cyber-purple transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="https://aiwebtools.lovable.app/disclaimers"
                  className="hover:text-cyber-purple transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a
                  href="tel:+14758008096"
                  className="flex items-center gap-2 hover:text-cyber-purple transition-colors"
                >
                  <Phone size={16} /> (475) 800-8096
                </a>
              </li>
              <li>
                <a
                  href="mailto:Contact@ai-webtools.com"
                  className="flex items-center gap-2 hover:text-cyber-purple transition-colors"
                >
                  <Mail size={16} /> Contact@ai-webtools.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 mt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            <a 
              href="https://aiwebtools.lovable.app/?via=aiwebtools" 
              className="hover:text-cyber-purple transition-colors"
              target="_blank" 
              rel="noopener noreferrer"
            >
              © 2025 AI WEB TOOLS LLC All rights reserved.
            </a>
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            {/* Ad & Logo Maker GPT Button */}
            <Button
              className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:opacity-90 transition-opacity"
              asChild
            >
              <a
                href="https://adandlogomakergpt.lovable.app/?via=aiwebtools"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Ad & Logo Maker GPT <ArrowRight size={16} />
              </a>
            </Button>

            {/* Product Photography GPT Button */}
            <Button
              className="rounded-full bg-gradient-to-r from-green-500 to-teal-500 hover:opacity-90 transition-opacity"
              asChild
            >
              <a
                href="https://productphotographygpt.lovable.app/?via=aiwebtools"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Product Photography GPT <ArrowRight size={16} />
              </a>
            </Button>

            {/* More AI Tools Button */}
            <Button
              className="rounded-full bg-gradient-to-r from-cyber-purple to-cyber-blue hover:opacity-90 transition-opacity"
              asChild
            >
              <a
                href="https://aiwebtools.lovable.app/?via=aiwebtools"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                More AI Tools <ArrowRight size={16} />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
