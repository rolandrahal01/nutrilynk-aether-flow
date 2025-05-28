
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-slate-50 to-slate-100 py-16 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-nutri-blue to-nutri-green rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">N</span>
              </div>
              <span className="text-3xl font-bold bg-gradient-to-r from-nutri-blue to-nutri-green bg-clip-text text-transparent">
                NutriLynk
              </span>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed max-w-md">
              Where Science Meets Nutrition Intelligence. Revolutionizing dietitian practice with AI-powered personalization and evidence-based protocols.
            </p>
            <div className="flex space-x-4 mt-6">
              <Button variant="ghost" size="sm" className="text-nutri-blue hover:bg-nutri-blue hover:text-white rounded-full w-10 h-10 p-0">
                <span className="text-lg">📧</span>
              </Button>
              <Button variant="ghost" size="sm" className="text-nutri-blue hover:bg-nutri-blue hover:text-white rounded-full w-10 h-10 p-0">
                <span className="text-lg">🐦</span>
              </Button>
              <Button variant="ghost" size="sm" className="text-nutri-blue hover:bg-nutri-blue hover:text-white rounded-full w-10 h-10 p-0">
                <span className="text-lg">💼</span>
              </Button>
              <Button variant="ghost" size="sm" className="text-nutri-blue hover:bg-nutri-blue hover:text-white rounded-full w-10 h-10 p-0">
                <span className="text-lg">📺</span>
              </Button>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h4 className="font-bold text-gray-800 text-lg mb-6">Platform</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-nutri-blue transition-colors">Dashboard</a></li>
              <li><a href="#" className="text-gray-600 hover:text-nutri-blue transition-colors">AI Planner</a></li>
              <li><a href="#" className="text-gray-600 hover:text-nutri-blue transition-colors">Analytics</a></li>
              <li><a href="#" className="text-gray-600 hover:text-nutri-blue transition-colors">Client Portal</a></li>
              <li><a href="#" className="text-gray-600 hover:text-nutri-blue transition-colors">Integrations</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-gray-800 text-lg mb-6">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#blog" className="text-gray-600 hover:text-nutri-blue transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-nutri-blue transition-colors">Research</a></li>
              <li><a href="#" className="text-gray-600 hover:text-nutri-blue transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-gray-600 hover:text-nutri-blue transition-colors">Support</a></li>
              <li><a href="#" className="text-gray-600 hover:text-nutri-blue transition-colors">API Docs</a></li>
            </ul>
          </div>
        </div>

        {/* Partner CTA */}
        <div className="border-t border-gray-200 pt-12 mb-12">
          <div className="text-center bg-gradient-to-r from-nutri-blue/10 to-nutri-green/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Become a NutriLynk Partner
            </h3>
            <p className="text-gray-600 mb-6">
              Join our network of elite nutrition professionals and grow your practice with cutting-edge technology.
            </p>
            <Button className="bg-gradient-to-r from-nutri-blue to-nutri-green hover:opacity-90 text-white font-semibold px-8 py-3">
              Apply Now
            </Button>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © 2024 NutriLynk. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-nutri-blue text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-nutri-blue text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-nutri-blue text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
