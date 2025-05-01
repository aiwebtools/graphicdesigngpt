
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-cyber-black text-white flex flex-col">
      {/* Background elements */}
      <div className="fixed inset-0 bg-cyber-dark z-[-1]"></div>
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyber-purple/10 via-transparent to-transparent z-[-1]"></div>
      
      <Header />
      
      <main className="flex-grow flex items-center justify-center">
        <div className="text-center p-8">
          <h1 className="text-5xl sm:text-7xl font-bold mb-4 text-gradient">404</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-purple to-cyber-blue mx-auto mb-6"></div>
          <p className="text-xl sm:text-2xl text-gray-300 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Button 
            asChild 
            className="bg-gradient-to-r from-cyber-purple to-cyber-blue hover:opacity-90 transition-opacity"
          >
            <Link to="/" className="flex items-center gap-2">
              <ArrowLeft size={16} /> Return to Home
            </Link>
          </Button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
