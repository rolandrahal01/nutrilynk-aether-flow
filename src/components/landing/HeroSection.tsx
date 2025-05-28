
import { Button } from "@/components/ui/button";
import { Play, ArrowRight } from "lucide-react";

export const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 section-container">
      {/* Enhanced Neural Mesh Background */}
      <div className="absolute inset-0 neural-mesh">
        {/* Enhanced Flowing Particles */}
        <div className="particle-field">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>
      </div>

      {/* Enhanced Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/40"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center animate-fade-in max-w-6xl mx-auto">
          <div className="mb-8">
            <span className="inline-block px-6 py-3 glassmorphism-premium border border-white/20 rounded-full text-base font-medium text-white/95 mb-6 micro-interaction">
              🚀 AI-Powered Nutrition Platform
            </span>
          </div>
          
          <h1 className="hero-text text-white mb-8 leading-tight text-overlay">
            NutriLynk
            <span className="block bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              Where Science Meets
            </span>
            <span className="block bg-gradient-to-r from-green-300 via-cyan-300 to-green-300 bg-clip-text text-transparent pulse-glow">
              Nutrition Intelligence
            </span>
          </h1>
          
          <p className="hero-subtitle text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed text-overlay">
            Revolutionize your practice. Personalize every meal plan. Unlock client loyalty with the most advanced AI-powered nutrition platform on Earth.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Button
              size="lg"
              className="cta-glow text-white font-semibold px-10 py-6 text-xl rounded-xl relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center">
                Get Started Free
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/40 text-white hover:bg-white/15 font-semibold px-10 py-6 text-xl rounded-xl backdrop-blur-sm glassmorphism-premium group micro-interaction"
            >
              <Play className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-300" />
              See How It Works
            </Button>
          </div>

          {/* Enhanced Social Proof */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-white/80 text-lg mb-16">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="font-medium">2,500+ Active Dietitians</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="font-medium">150,000+ Meal Plans Created</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
              <span className="font-medium">98% Client Satisfaction</span>
            </div>
          </div>

          {/* Enhanced "As Seen In" Media Bar */}
          <div className="text-center">
            <p className="text-white/70 text-base mb-8 font-medium">Trusted by leading nutrition professionals worldwide</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                "Academy of Nutrition & Dietetics",
                "Sports Nutrition Institute", 
                "Clinical Nutrition Board",
                "International Dietetics Association"
              ].map((org, index) => (
                <div key={index} className="glassmorphism-premium p-4 rounded-lg premium-card micro-interaction">
                  <span className="text-white/90 font-semibold text-sm">{org}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
