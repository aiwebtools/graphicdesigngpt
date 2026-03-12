
import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-panel py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <Logo />

        {/* Mobile hamburger menu button - only shown on mobile */}
        {isMobile && (
          <div className="flex">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white"
            >
              <Menu />
            </Button>
          </div>
        )}

        {/* Desktop navigation - always visible on desktop */}
        {!isMobile && (
          <nav className="flex items-center gap-6">
            <a
              href="https://chatgpt.com/g/g-6812c1c50ed48191b6b1647d7d52c62b-graphic-cover-design-gpt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-cyber-purple transition-colors"
            >
              USE Graphic & Cover Design GPT
            </a>
            <a
              href="https://adandlogomakergpt.lovable.app/?via=aiwebtools"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-cyber-purple transition-colors"
            >
              Ad & Logo Maker GPT
            </a>
            <a
              href="https://productphotographygpt.lovable.app/?via=aiwebtools"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-cyber-purple transition-colors"
            >
              Product Photography GPT
            </a>
            <a
              href="#faq"
              className="text-white hover:text-cyber-purple transition-colors"
            >
              FAQ
            </a>
            <a
              href="#disclaimer"
              className="text-white hover:text-cyber-purple transition-colors"
            >
              Disclaimer
            </a>
            <a
              href="https://aiwebtools.lovable.app/?via=aiwebtools"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-cyber-purple transition-colors"
            >
              More AI Tools
            </a>
            <Button
              className="bg-gradient-to-r from-cyber-purple to-cyber-blue hover:opacity-90 transition-opacity"
              asChild
            >
              <a
                href="https://chatgpt.com/g/g-6812c1c50ed48191b6b1647d7d52c62b-graphic-cover-design-gpt"
                target="_blank"
                rel="noopener noreferrer"
              >
                Try It Now
              </a>
            </Button>
          </nav>
        )}
      </div>

      {/* Mobile menu - only shown when toggled on mobile */}
      {isMobile && mobileMenuOpen && (
        <div className="glass-panel border-b border-white/10 py-4">
          <nav className="container mx-auto flex flex-col gap-4 px-4">
            <a
              href="https://chatgpt.com/g/g-6812c1c50ed48191b6b1647d7d52c62b-graphic-cover-design-gpt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-cyber-purple transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              USE Graphic & Cover Design GPT
            </a>
            <a
              href="https://adandlogomakergpt.lovable.app/?via=aiwebtools"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-cyber-purple transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Ad & Logo Maker GPT
            </a>
            <a
              href="https://productphotographygpt.lovable.app/?via=aiwebtools"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-cyber-purple transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Product Photography GPT
            </a>
            <a
              href="#faq"
              className="text-white hover:text-cyber-purple transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </a>
            <a
              href="#disclaimer"
              className="text-white hover:text-cyber-purple transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Disclaimer
            </a>
            <a
              href="https://aiwebtools.lovable.app/?via=aiwebtools"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-cyber-purple transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              More AI Tools
            </a>
            <Button
              className="bg-gradient-to-r from-cyber-purple to-cyber-blue hover:opacity-90 transition-opacity w-full"
              asChild
              onClick={() => setMobileMenuOpen(false)}
            >
              <a
                href="https://chatgpt.com/g/g-6812c1c50ed48191b6b1647d7d52c62b-graphic-cover-design-gpt"
                target="_blank"
                rel="noopener noreferrer"
              >
                Try It Now
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
