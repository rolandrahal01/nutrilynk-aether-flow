
import { Button } from "@/components/ui/button";
import { DashboardPreview } from "./DashboardPreview";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 hero-bg"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-white/40"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Hero Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              NutriLynk
              <span className="block bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Where Science Meets
              </span>
              <span className="block bg-gradient-to-r from-green-300 to-cyan-300 bg-clip-text text-transparent animate-pulse-glow">
                Nutrition Intelligence
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Revolutionize your practice. Personalize every meal plan. Unlock client loyalty.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-white text-nutri-blue hover:bg-blue-50 font-semibold px-8 py-4 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                Get Started Free
                <span className="ml-2 animate-pulse">✨</span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-nutri-blue font-semibold px-8 py-4 text-lg rounded-xl backdrop-blur-sm"
              >
                See How It Works
                <span className="ml-2">▶️</span>
              </Button>
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className="animate-scale-in">
            <DashboardPreview />
          </div>
        </div>
      </div>
    </section>
  );
};
