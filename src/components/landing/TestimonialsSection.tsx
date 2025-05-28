
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Dr. Sarah Mitchell",
    title: "Clinical Dietitian",
    company: "Austin Medical Center",
    content: "NutriLynk has revolutionized my practice. The AI-powered meal planning saves me 10+ hours per week, and my clients see 40% better adherence rates.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Michael Chen",
    title: "Sports Nutritionist",
    company: "Elite Performance Center",
    content: "The analytics dashboard gives me insights I never had before. My athletes' performance has improved dramatically with personalized nutrition plans.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Dr. Lisa Rodriguez",
    title: "Registered Dietitian",
    company: "Wellness Clinic Network",
    content: "Client retention increased by 60% since implementing NutriLynk. The platform makes evidence-based nutrition accessible and engaging.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "James Thompson",
    title: "Nutrition Consultant",
    company: "Thompson Nutrition",
    content: "The research-backed protocols and real-time monitoring have transformed how I work with clients. Results speak for themselves.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Dr. Amanda Foster",
    title: "Clinical Director",
    company: "Integrative Health Solutions",
    content: "NutriLynk's AI insights help me identify patterns I would have missed. It's like having a research team at my fingertips.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-slate-50/50">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-nutri-blue via-nutri-green to-nutri-cyan bg-clip-text text-transparent mb-6">
            Trusted by Leading Professionals
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join thousands of dietitians and nutrition professionals who are transforming their practice with NutriLynk.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full glassmorphism border-white/30 hover:shadow-xl transition-all duration-500 transform hover:scale-105">
                    <CardContent className="p-8">
                      <div className="flex items-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <span key={i} className="text-yellow-400 text-xl">⭐</span>
                        ))}
                      </div>
                      <p className="text-gray-700 mb-6 leading-relaxed italic">
                        "{testimonial.content}"
                      </p>
                      <div className="flex items-center">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full object-cover mr-4"
                        />
                        <div>
                          <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                          <p className="text-sm text-nutri-blue font-medium">{testimonial.title}</p>
                          <p className="text-xs text-gray-500">{testimonial.company}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="glassmorphism border-white/30 hover:bg-nutri-blue hover:text-white" />
            <CarouselNext className="glassmorphism border-white/30 hover:bg-nutri-blue hover:text-white" />
          </Carousel>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="glassmorphism border-white/30 p-12 max-w-4xl mx-auto shadow-2xl">
            <h3 className="text-4xl font-bold text-gray-800 mb-6">
              Ready to Transform Your Practice?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join the nutrition revolution and provide your clients with personalized, evidence-based care that drives real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-nutri-blue to-nutri-green hover:opacity-90 text-white font-semibold px-12 py-4 text-lg rounded-xl shadow-xl"
              >
                Start Free Trial
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-nutri-blue text-nutri-blue hover:bg-nutri-blue hover:text-white font-semibold px-12 py-4 text-lg rounded-xl"
              >
                Book Demo
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
