
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glassmorphism shadow-xl py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-nutri-blue to-nutri-green rounded-lg flex items-center justify-center animate-pulse-glow">
            <span className="text-white font-bold text-lg">N</span>
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-nutri-blue to-nutri-green bg-clip-text text-transparent">
            NutriLynk
          </span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <a href="#blog" className="text-gray-700 hover:text-nutri-blue transition-colors font-medium">
            Blog
          </a>
          <a href="#dashboard" className="text-gray-700 hover:text-nutri-blue transition-colors font-medium">
            Dashboard
          </a>
          <a href="#ai-planner" className="text-gray-700 hover:text-nutri-blue transition-colors font-medium">
            AI Planner
          </a>
          <Button variant="outline" className="border-nutri-blue text-nutri-blue hover:bg-nutri-blue hover:text-white">
            Login
          </Button>
          <Button className="bg-gradient-to-r from-nutri-blue to-nutri-green hover:opacity-90 text-white">
            Sign Up
          </Button>
        </div>

        <div className="md:hidden">
          <Button variant="ghost" size="sm">
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className="w-full h-0.5 bg-gray-700"></span>
              <span className="w-full h-0.5 bg-gray-700"></span>
              <span className="w-full h-0.5 bg-gray-700"></span>
            </div>
          </Button>
        </div>
      </div>
    </nav>
  );
};
