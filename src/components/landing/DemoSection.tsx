
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { DashboardPreview } from "./DashboardPreview";
import { Users, Brain, BarChart3, Smartphone } from "lucide-react";

const demoTabs = [
  {
    id: 'onboarding',
    label: 'Client Onboarding',
    icon: Users,
    description: 'AI-powered intake forms that capture medical history, dietary preferences, and lifestyle factors'
  },
  {
    id: 'ai-planning',
    label: 'AI Meal Planning',
    icon: Brain,
    description: 'Science-backed meal plans generated instantly with personalized macro and micronutrient optimization'
  },
  {
    id: 'analytics',
    label: 'Progress Analytics',
    icon: BarChart3,
    description: 'Real-time tracking dashboards with predictive insights and automated progress reports'
  }
];

export const DemoSection = () => {
  const [activeTab, setActiveTab] = useState('analytics');

  return (
    <section id="demo" className="py-32 relative section-container">
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 text-overlay">
            See NutriLynk in
            <span className="block bg-gradient-to-r from-nutri-blue to-nutri-green bg-clip-text text-transparent pulse-glow">
              Action
            </span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed text-overlay">
            Experience the future of nutrition practice management with our interactive demo. 
            See how AI transforms every aspect of your workflow.
          </p>
        </div>

        {/* Interactive Demo Tabs */}
        <div className="flex flex-col lg:flex-row gap-8 mb-16">
          <div className="lg:w-1/3 space-y-4">
            {demoTabs.map((tab) => (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? "default" : "outline"}
                className={`w-full p-6 h-auto text-left transition-all duration-300 micro-interaction ${
                  activeTab === tab.id 
                    ? "cta-glow text-white" 
                    : "glassmorphism-premium border-white/20 text-white hover:bg-white/10"
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                <div className="flex items-start space-x-4">
                  <tab.icon className="w-8 h-8 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{tab.label}</h3>
                    <p className="text-sm opacity-90 leading-relaxed">{tab.description}</p>
                  </div>
                </div>
              </Button>
            ))}
          </div>

          {/* Device Mockup Container */}
          <div className="lg:w-2/3 relative">
            <div className="relative max-w-5xl mx-auto">
              {/* Enhanced Device Frame */}
              <div className="glassmorphism-premium rounded-3xl p-2 shadow-2xl border-2 border-white/20 premium-card">
                <div className="bg-black/20 rounded-2xl p-4">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div className="flex-1 bg-white/10 rounded-lg px-4 py-1 mx-4">
                      <span className="text-white/70 text-sm">app.nutrilynk.com</span>
                    </div>
                  </div>
                  <div className="rounded-xl overflow-hidden">
                    <DashboardPreview />
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-nutri-green to-nutri-cyan rounded-full animate-float pulse-glow"></div>
              <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-gradient-to-r from-nutri-blue to-nutri-teal rounded-full animate-float pulse-glow" style={{ animationDelay: "3s" }}></div>
              <div className="absolute top-1/2 -left-12 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-float pulse-glow" style={{ animationDelay: "6s" }}></div>
            </div>
          </div>
        </div>

        {/* Demo CTA */}
        <div className="text-center">
          <div className="glassmorphism-premium rounded-2xl p-8 max-w-2xl mx-auto premium-card">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Experience NutriLynk?</h3>
            <p className="text-blue-100 mb-6">Start your 14-day free trial and transform your nutrition practice today.</p>
            <Button className="cta-glow text-white font-semibold px-8 py-4 text-lg rounded-xl">
              Start Free Trial
              <Smartphone className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
