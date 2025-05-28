
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: "🧠",
    title: "AI-Powered Intelligence",
    description: "Advanced algorithms analyze client data to create personalized nutrition plans with scientific precision.",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: "📊",
    title: "Evidence-Based Protocols",
    description: "Built on the latest nutrition research and clinical guidelines for optimal client outcomes.",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: "🎯",
    title: "Personalized Plans",
    description: "Every meal plan is tailored to individual preferences, allergies, and nutritional requirements.",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: "🔒",
    title: "Secure Cloud Platform",
    description: "Enterprise-grade security ensures client data is always protected and HIPAA compliant.",
    gradient: "from-orange-500 to-red-500"
  },
  {
    icon: "⚡",
    title: "Instant Onboarding",
    description: "Get started in minutes with our streamlined setup process and intuitive interface.",
    gradient: "from-indigo-500 to-purple-500"
  }
];

export const WhyNutriLynkSection = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white/40 to-slate-50/80 backdrop-blur-sm">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-nutri-blue via-nutri-green to-nutri-cyan bg-clip-text text-transparent mb-6">
            Why NutriLynk?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience the future of nutrition practice with cutting-edge technology that transforms how you serve your clients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 transform hover:scale-105 glassmorphism border-white/30 overflow-hidden animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                <div className="relative z-10">
                  <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-nutri-blue transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
