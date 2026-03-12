
import React from "react";
import { Square } from "lucide-react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  withName?: boolean;
}

const Logo = ({ className, withName = true }: LogoProps) => {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="flex items-center justify-center bg-gradient-to-r from-cyber-purple via-cyber-blue to-cyber-pink rounded-md p-0.5">
        <Square size={24} className="text-white" />
      </div>
      {withName && (
        <div className="flex flex-col">
          <span className="font-['Orbitron'] font-bold text-white leading-tight">
            Graphic & Cover Design GPT
          </span>
          <span className="text-[10px] text-gray-400">
            Presented by <a href="https://aiwebtools.lovable.app/?via=aiwebtools" className="underline hover:text-cyber-blue transition-colors" target="_blank" rel="noopener noreferrer">AiWebTools.Ai</a>
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
