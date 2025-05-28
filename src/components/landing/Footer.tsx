
import { Button } from "@/components/ui/button";
import { Heart, Mail, Twitter, Linkedin, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-slate-50 to-slate-100 py-20 px-6 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="particle-field">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>
      </div>

      <div className="container mx-auto relative">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Enhanced Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-nutri-blue to-nutri-green rounded-xl flex items-center justify-center pulse-glow shadow-lg">
                <span className="text-white font-bold text-2xl">N</span>
              </div>
              <span className="text-3xl font-bold bg-gradient-to-r from-nutri-blue to-nutri-green bg-clip-text text-transparent">
                NutriLynk
              </span>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed max-w-lg mb-6">
              Where Science Meets Nutrition Intelligence. Revolutionizing dietitian practice with AI-powered personalization, evidence-based protocols, and unparalleled client outcomes.
            </p>
            <div className="flex space-x-4">
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-nutri-blue hover:bg-nutri-blue hover:text-white rounded-full w-12 h-12 p-0 transition-all duration-300 hover:scale-110 premium-card"
              >
                <Mail className="w-5 h-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-nutri-blue hover:bg-nutri-blue hover:text-white rounded-full w-12 h-12 p-0 transition-all duration-300 hover:scale-110 premium-card"
              >
                <Twitter className="w-5 h-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-nutri-blue hover:bg-nutri-blue hover:text-white rounded-full w-12 h-12 p-0 transition-all duration-300 hover:scale-110 premium-card"
              >
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-nutri-blue hover:bg-nutri-blue hover:text-white rounded-full w-12 h-12 p-0 transition-all duration-300 hover:scale-110 premium-card"
              >
                <Youtube className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="font-bold text-gray-800 text-lg mb-6 flex items-center">
              <span className="w-2 h-6 bg-gradient-to-b from-nutri-blue to-nutri-green rounded-full mr-3"></span>
              Platform
            </h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-600 hover:text-nutri-blue transition-all duration-300 hover:translate-x-1 inline-block">Dashboard</a></li>
              <li><a href="#" className="text-gray-600 hover:text-nutri-blue transition-all duration-300 hover:translate-x-1 inline-block">AI Planner</a></li>
              <li><a href="#" className="text-gray-600 hover:text-nutri-blue transition-all duration-300 hover:translate-x-1 inline-block">Analytics</a></li>
              <li><a href="#" className="text-gray-600 hover:text-nutri-blue transition-all duration-300 hover:translate-x-1 inline-block">Client Portal</a></li>
              <li><a href="#" className="text-gray-600 hover:text-nutri-blue transition-all duration-300 hover:translate-x-1 inline-block">Integrations</a></li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-bold text-gray-800 text-lg mb-6 flex items-center">
              <span className="w-2 h-6 bg-gradient-to-b from-nutri-green to-nutri-cyan rounded-full mr-3"></span>
              Resources
            </h4>
            <ul className="space-y-4">
              <li><a href="#blog" className="text-gray-600 hover:text-nutri-blue transition-all duration-300 hover:translate-x-1 inline-block">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-nutri-blue transition-all duration-300 hover:translate-x-1 inline-block">Research</a></li>
              <li><a href="#" className="text-gray-600 hover:text-nutri-blue transition-all duration-300 hover:translate-x-1 inline-block">Case Studies</a></li>
              <li><a href="#" className="text-gray-600 hover:text-nutri-blue transition-all duration-300 hover:translate-x-1 inline-block">Support</a></li>
              <li><a href="#" className="text-gray-600 hover:text-nutri-blue transition-all duration-300 hover:translate-x-1 inline-block">API Docs</a></li>
            </ul>
          </div>
        </div>

        {/* Enhanced Partner CTA */}
        <div className="border-t border-gray-200 pt-16 mb-16">
          <div className="text-center glassmorphism-premium rounded-3xl p-12 premium-card shadow-2xl">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-nutri-blue/10 to-nutri-green/10 border border-nutri-blue/20 rounded-full text-nutri-blue font-medium mb-4">
                🚀 Partnership Program
              </span>
            </div>
            <h3 className="text-4xl font-bold text-gray-800 mb-6">
              Become a NutriLynk Partner
            </h3>
            <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto leading-relaxed">
              Join our exclusive network of elite nutrition professionals. Access cutting-edge technology, premium resources, and transform your practice with industry-leading innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="cta-glow text-white font-semibold px-10 py-4 text-lg">
                Apply for Partnership
              </Button>
              <Button 
                variant="outline" 
                className="border-2 border-nutri-blue text-nutri-blue hover:bg-nutri-blue hover:text-white font-semibold px-10 py-4 text-lg transition-all duration-300"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Section */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center text-gray-500 text-sm mb-4 md:mb-0">
            <span>© 2024 NutriLynk. All rights reserved.</span>
            <span className="mx-2">•</span>
            <span className="flex items-center">
              Made with <Heart className="w-4 h-4 mx-1 text-red-500 pulse-glow" fill="currentColor" /> for nutrition professionals
            </span>
          </div>
          <div className="flex space-x-8">
            <a href="#" className="text-gray-500 hover:text-nutri-blue text-sm transition-all duration-300 hover:scale-105">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-nutri-blue text-sm transition-all duration-300 hover:scale-105">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-nutri-blue text-sm transition-all duration-300 hover:scale-105">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
