
import React, { useState, useEffect, useCallback } from "react";
import Logo from "./Logo";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  {
    label: "USE Graphic & Cover Design GPT",
    href: "https://chatgpt.com/g/g-6812c1c50ed48191b6b1647d7d52c62b-graphic-cover-design-gpt",
    external: true,
  },
  {
    label: "Ad & Logo Maker GPT",
    href: "https://adandlogomakergpt.lovable.app/?via=aiwebtools",
    external: true,
  },
  {
    label: "Product Photography GPT",
    href: "https://productphotographygpt.lovable.app/?via=aiwebtools",
    external: true,
  },
  { label: "FAQ", href: "#faq", external: false },
  { label: "Disclaimer", href: "#disclaimer", external: false },
  {
    label: "More AI Tools",
    href: "https://aiwebtools.lovable.app/?via=aiwebtools",
    external: true,
  },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  const closeMobileMenu = useCallback(() => setMobileMenuOpen(false), []);

  const linkProps = (link: typeof NAV_LINKS[0]) =>
    link.external
      ? { target: "_blank" as const, rel: "noopener noreferrer" }
      : {};

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-panel py-2" : "bg-transparent py-3 md:py-4"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <Logo />

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="lg:hidden text-white p-2 -mr-2 touch-manipulation"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              {...linkProps(link)}
              className="text-sm xl:text-base text-white hover:text-cyber-purple transition-colors whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
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
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`lg:hidden fixed inset-0 top-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-200 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMobileMenu}
      />

      {/* Mobile menu panel */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-[min(80vw,320px)] bg-cyber-dark/95 backdrop-blur-lg border-l border-white/10 z-50 transform transition-transform duration-200 ease-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={closeMobileMenu}
            className="text-white p-2 touch-manipulation"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>
        <nav className="flex flex-col gap-1 px-6 pb-8 overflow-y-auto max-h-[calc(100vh-80px)]">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              {...linkProps(link)}
              className="text-white hover:text-cyber-purple transition-colors py-3 text-base border-b border-white/5"
              onClick={closeMobileMenu}
            >
              {link.label}
            </a>
          ))}
          <Button
            className="bg-gradient-to-r from-cyber-purple to-cyber-blue hover:opacity-90 transition-opacity w-full mt-4"
            asChild
          >
            <a
              href="https://chatgpt.com/g/g-6812c1c50ed48191b6b1647d7d52c62b-graphic-cover-design-gpt"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobileMenu}
            >
              Try It Now
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
