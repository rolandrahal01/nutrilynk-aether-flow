
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['hero', 'how-it-works', 'demo', 'why-nutrilynk', 'blog', 'testimonials'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navigationItems = [
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'demo', label: 'Demo' },
    { id: 'why-nutrilynk', label: 'Features' },
    { id: 'blog', label: 'Blog' },
    { id: 'testimonials', label: 'Reviews' }
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "glassmorphism-premium shadow-2xl py-3 backdrop-blur-lg"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-nutri-blue to-nutri-green rounded-xl flex items-center justify-center pulse-glow shadow-lg">
              <span className="text-white font-bold text-xl">N</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-nutri-blue to-nutri-green bg-clip-text text-transparent">
              NutriLynk
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-white/90 hover:text-white transition-all duration-300 font-medium relative group micro-interaction ${
                  activeSection === item.id ? 'text-nutri-green' : ''
                }`}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-nutri-green transition-all duration-300 ${
                  activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </button>
            ))}
            
            <Button 
              variant="outline" 
              className="border-nutri-blue/50 text-white hover:bg-nutri-blue hover:text-white transition-all duration-300 backdrop-blur-sm glassmorphism micro-interaction"
            >
              Login
            </Button>
            <Link to="/dashboard">
              <Button 
                className="cta-glow text-white font-semibold transition-all duration-300"
              >
                Dashboard
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="sm" 
              className="glassmorphism-premium text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden glassmorphism-premium border-t border-white/20 mt-4">
            <div className="container mx-auto px-6 py-4 space-y-4">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-white/90 hover:text-white transition-all duration-300 font-medium py-2"
                >
                  {item.label}
                </button>
              ))}
              <div className="flex flex-col space-y-3 pt-4 border-t border-white/20">
                <Button 
                  variant="outline" 
                  className="border-nutri-blue/50 text-white hover:bg-nutri-blue hover:text-white"
                >
                  Login
                </Button>
                <Link to="/dashboard">
                  <Button className="w-full cta-glow text-white font-semibold">
                    Dashboard
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Dark Mode Toggle */}
      <div 
        className="dark-mode-toggle micro-interaction"
        onClick={toggleDarkMode}
      >
        {isDarkMode ? (
          <Sun className="w-5 h-5 text-yellow-400" />
        ) : (
          <Moon className="w-5 h-5 text-blue-300" />
        )}
      </div>

      {/* Persistent CTA */}
      <div className="persistent-cta">
        <Button 
          onClick={() => scrollToSection('hero')}
          className="cta-glow text-white font-semibold px-6 py-3 rounded-full shadow-2xl"
        >
          Start Free Trial
        </Button>
      </div>
    </>
  );
};
