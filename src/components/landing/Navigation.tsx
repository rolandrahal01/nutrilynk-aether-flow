
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "glassmorphism-premium shadow-2xl py-3 backdrop-blur-lg"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-nutri-blue to-nutri-green rounded-xl flex items-center justify-center pulse-glow shadow-lg">
            <span className="text-white font-bold text-xl">N</span>
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-nutri-blue to-nutri-green bg-clip-text text-transparent">
            NutriLynk
          </span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <a href="#blog" className="text-gray-700 hover:text-nutri-blue transition-all duration-300 font-medium relative group">
            Blog
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-nutri-blue transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#dashboard" className="text-gray-700 hover:text-nutri-blue transition-all duration-300 font-medium relative group">
            Dashboard
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-nutri-blue transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#ai-planner" className="text-gray-700 hover:text-nutri-blue transition-all duration-300 font-medium relative group">
            AI Planner
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-nutri-blue transition-all duration-300 group-hover:w-full"></span>
          </a>
          <Button 
            variant="outline" 
            className="border-nutri-blue text-nutri-blue hover:bg-nutri-blue hover:text-white transition-all duration-300 backdrop-blur-sm"
          >
            Login
          </Button>
          <Button className="cta-glow text-white font-semibold transition-all duration-300">
            Sign Up
          </Button>
        </div>

        <div className="md:hidden">
          <Button variant="ghost" size="sm" className="glassmorphism-premium">
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className="w-full h-0.5 bg-gray-700 transition-all duration-300"></span>
              <span className="w-full h-0.5 bg-gray-700 transition-all duration-300"></span>
              <span className="w-full h-0.5 bg-gray-700 transition-all duration-300"></span>
            </div>
          </Button>
        </div>
      </div>
    </nav>
  );
};
