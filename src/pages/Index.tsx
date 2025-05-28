
import { HeroSection } from "../components/landing/HeroSection";
import { Navigation } from "../components/landing/Navigation";
import { WhyNutriLynkSection } from "../components/landing/WhyNutriLynkSection";
import { BlogInsightsSection } from "../components/landing/BlogInsightsSection";
import { TestimonialsSection } from "../components/landing/TestimonialsSection";
import { Footer } from "../components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <WhyNutriLynkSection />
      <BlogInsightsSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;
