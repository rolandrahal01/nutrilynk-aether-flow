
import { Button } from "@/components/ui/button";
import { DashboardPreview } from "./DashboardPreview";
import { Play } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Neural Mesh Background */}
      <div className="absolute inset-0 neural-mesh">
        {/* Flowing Particles */}
        <div className="particle-field">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/20"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Hero Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium text-white/90 mb-4">
                🚀 AI-Powered Nutrition Platform
              </span>
            </div>
            
            <h1 className="hero-text text-white mb-6 leading-tight">
              NutriLynk
              <span className="block bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                Where Science Meets
              </span>
              <span className="block bg-gradient-to-r from-green-300 via-cyan-300 to-green-300 bg-clip-text text-transparent pulse-glow">
                Nutrition Intelligence
              </span>
            </h1>
            
            <p className="hero-subtitle text-blue-100 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Revolutionize your practice. Personalize every meal plan. Unlock client loyalty with the most advanced AI-powered nutrition platform on Earth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button
                size="lg"
                className="cta-glow text-white font-semibold px-8 py-4 text-lg rounded-xl relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center">
                  Get Started Free
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">✨</span>
                </span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-4 text-lg rounded-xl backdrop-blur-sm glassmorphism group"
              >
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                See How It Works
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center justify-center lg:justify-start space-x-6 text-white/70 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>1,000+ Active Dietitians</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <span>50,000+ Meal Plans Created</span>
              </div>
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className="animate-scale-in">
            <DashboardPreview />
          </div>
        </div>

        {/* As Seen In Bar */}
        <div className="mt-20 text-center">
          <p className="text-white/60 text-sm mb-6 font-medium">Trusted by leading nutrition professionals worldwide</p>
          <div className="flex items-center justify-center space-x-12 opacity-60">
            <div className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg">
              <span className="text-white font-semibold">Academy of Nutrition</span>
            </div>
            <div className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg">
              <span className="text-white font-semibold">Sports Nutrition Institute</span>
            </div>
            <div className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg">
              <span className="text-white font-semibold">Clinical Nutrition Board</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
