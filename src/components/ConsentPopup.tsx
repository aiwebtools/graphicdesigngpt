
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const ConsentPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user has already accepted
    const hasAccepted = localStorage.getItem('consentAccepted');
    if (!hasAccepted) {
      setIsOpen(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('consentAccepted', 'true');
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50 p-4">
      <Card className="max-w-md w-full bg-cyber-dark border border-white/10 animate-fade-in">
        <CardHeader>
          <CardTitle className="text-white text-xl">Consent Agreement</CardTitle>
        </CardHeader>
        <CardContent className="text-gray-300">
          <p>
            By using Graphic & Cover Design GPT, you agree to our Terms of Service and Privacy Policy. 
            This AI tool is designed to assist with graphic design work, but results may vary.
          </p>
          <p className="mt-2">
            You acknowledge that any designs created are subject to our disclaimer, and you are responsible 
            for ensuring you have appropriate rights to any content you upload or reference.
          </p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button 
            className="bg-gradient-to-r from-cyber-purple to-cyber-blue hover:opacity-90 transition-opacity w-full"
            onClick={handleAccept}
          >
            I Agree
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ConsentPopup;
