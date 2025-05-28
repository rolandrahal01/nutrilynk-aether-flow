
import { HeroSection } from "../components/landing/HeroSection";
import { Navigation } from "../components/landing/Navigation";
import { HowItWorksSection } from "../components/landing/HowItWorksSection";
import { DemoSection } from "../components/landing/DemoSection";
import { WhyNutriLynkSection } from "../components/landing/WhyNutriLynkSection";
import { BlogInsightsSection } from "../components/landing/BlogInsightsSection";
import { TestimonialsSection } from "../components/landing/TestimonialsSection";
import { Footer } from "../components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <HowItWorksSection />
      <DemoSection />
      <WhyNutriLynkSection />
      <BlogInsightsSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;
