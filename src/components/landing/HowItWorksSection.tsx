
import { UserCheck, Brain, TrendingUp, CheckCircle } from "lucide-react";

const steps = [
  {
    id: 1,
    icon: UserCheck,
    title: "Smart Client Onboarding",
    description: "AI-powered intake forms capture comprehensive health profiles, medical history, dietary preferences, and lifestyle factors in minutes, not hours.",
    features: ["Medical history analysis", "Dietary preference mapping", "Lifestyle factor assessment", "Automated risk screening"]
  },
  {
    id: 2,
    icon: Brain,
    title: "AI-Driven Meal Planning",
    description: "Our proprietary AI engine creates personalized, science-backed meal plans that adapt to individual needs, preferences, and health goals.",
    features: ["Evidence-based recommendations", "Macro & micronutrient optimization", "Cultural preference integration", "Real-time plan adjustments"]
  },
  {
    id: 3,
    icon: TrendingUp,
    title: "Progress Tracking & Analytics",
    description: "Advanced analytics provide real-time insights into client progress, adherence patterns, and predictive outcomes for optimal results.",
    features: ["Real-time progress monitoring", "Predictive health analytics", "Automated progress reports", "Outcome optimization"]
  }
];

export const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-32 relative section-container">
      <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-black/15"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 text-overlay">
            How NutriLynk
            <span className="block bg-gradient-to-r from-nutri-blue to-nutri-green bg-clip-text text-transparent pulse-glow">
              Transforms Your Practice
            </span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed text-overlay">
            From client onboarding to outcome optimization, experience the seamless workflow 
            that's revolutionizing nutrition practice worldwide.
          </p>
        </div>

        <div className="space-y-32">
          {steps.map((step, index) => (
            <div key={step.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16`}>
              {/* Content Side */}
              <div className="flex-1 space-y-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-nutri-blue to-nutri-green rounded-2xl flex items-center justify-center pulse-glow shadow-lg">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="w-12 h-1 bg-gradient-to-r from-nutri-blue to-nutri-green rounded-full"></div>
                  <span className="text-6xl font-bold bg-gradient-to-r from-white/20 to-white/10 bg-clip-text text-transparent">
                    0{step.id}
                  </span>
                </div>

                <div className="glassmorphism-premium rounded-2xl p-8 premium-card">
                  <h3 className="text-3xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-blue-100 text-lg mb-8 leading-relaxed">{step.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {step.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3 micro-interaction">
                        <CheckCircle className="w-5 h-5 text-nutri-green flex-shrink-0" />
                        <span className="text-white/90">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Visual Side */}
              <div className="flex-1 relative">
                <div className="glassmorphism-premium rounded-3xl p-8 premium-card">
                  <div className="aspect-video bg-gradient-to-br from-nutri-blue/20 to-nutri-green/20 rounded-2xl flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
                    <step.icon className="w-24 h-24 text-white/80 pulse-glow" />
                    
                    {/* Animated Elements */}
                    <div className="absolute top-4 left-4 w-8 h-8 bg-nutri-green/50 rounded-full animate-float"></div>
                    <div className="absolute bottom-6 right-6 w-12 h-12 bg-nutri-blue/50 rounded-full animate-float" style={{ animationDelay: "2s" }}></div>
                    <div className="absolute top-1/2 right-8 w-6 h-6 bg-nutri-cyan/50 rounded-full animate-float" style={{ animationDelay: "4s" }}></div>
                  </div>
                </div>

                {/* Floating Number */}
                <div className="absolute -top-8 -right-8 w-20 h-20 bg-gradient-to-r from-nutri-blue to-nutri-green rounded-full flex items-center justify-center pulse-glow shadow-2xl">
                  <span className="text-2xl font-bold text-white">{step.id}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Process Summary */}
        <div className="mt-32 text-center">
          <div className="glassmorphism-premium rounded-2xl p-12 max-w-4xl mx-auto premium-card">
            <h3 className="text-3xl font-bold text-white mb-6">The Result?</h3>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              A seamless, intelligent workflow that saves time, improves outcomes, and delights both practitioners and clients.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-nutri-green mb-2 pulse-glow">85%</div>
                <div className="text-white/80">Time Saved</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-nutri-blue mb-2 pulse-glow">92%</div>
                <div className="text-white/80">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-nutri-cyan mb-2 pulse-glow">3x</div>
                <div className="text-white/80">Practice Growth</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
