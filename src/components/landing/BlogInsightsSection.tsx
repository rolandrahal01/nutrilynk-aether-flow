
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, User, Tag } from "lucide-react";

const blogPosts = [
  {
    title: "The Science Behind Protein Timing for Optimal Muscle Synthesis",
    excerpt: "Revolutionary research reveals the critical windows for protein intake that maximize muscle protein synthesis and accelerate recovery in athletes and active individuals.",
    author: "Dr. Sarah Chen, RD",
    category: "Sports Nutrition",
    tags: ["Protein", "Performance", "Recovery"],
    readTime: "8 min read",
    date: "Dec 15, 2024",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop",
    featured: true
  },
  {
    title: "Microbiome Revolution: How Gut Health Transforms Weight Management",
    excerpt: "Discover how cutting-edge microbiome research is fundamentally reshaping our understanding of sustainable weight loss and metabolic health.",
    author: "Dr. Michael Torres, PhD",
    category: "Gut Health",
    tags: ["Microbiome", "Weight Loss", "Metabolism"],
    readTime: "12 min read",
    date: "Dec 12, 2024",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop"
  },
  {
    title: "AI-Powered Meal Planning: Clinical Case Study Results",
    excerpt: "Breakthrough data from 500+ dietitians reveals 40% improvement in client adherence with AI-assisted nutrition planning and real-time optimization.",
    author: "NutriLynk Research Team",
    category: "AI in Nutrition",
    tags: ["AI", "Clinical Research", "Technology"],
    readTime: "15 min read",
    date: "Dec 10, 2024",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop"
  },
  {
    title: "Omega-3 Supplementation: Revolutionary Guidelines for Clinical Practice",
    excerpt: "Game-changing evidence-based recommendations for EPA/DHA dosing in cardiovascular health, cognitive function, and inflammation management.",
    author: "Dr. Lisa Park, RD",
    category: "Supplements",
    tags: ["Omega-3", "Supplements", "Clinical"],
    readTime: "10 min read",
    date: "Dec 8, 2024",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=250&fit=crop"
  },
  {
    title: "Plant-Based Athlete Nutrition: Performance Optimization Mastery",
    excerpt: "Advanced evidence-based protocols for maximizing athletic performance, recovery, and adaptation on carefully planned plant-based diets.",
    author: "Dr. James Rodriguez, RD",
    category: "Sports Nutrition",
    tags: ["Plant-Based", "Athletes", "Performance"],
    readTime: "11 min read",
    date: "Dec 5, 2024",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=250&fit=crop"
  },
  {
    title: "Success Story: 95% Client Retention Through Personalized Nutrition",
    excerpt: "How one innovative practice transformed their business model using data-driven nutrition interventions and AI-powered client engagement strategies.",
    author: "Jennifer Walsh, RD",
    category: "Case Studies",
    tags: ["Success Story", "Business", "Client Retention"],
    readTime: "6 min read",
    date: "Dec 3, 2024",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop"
  },
  {
    title: "Metabolic Flexibility: The Ultimate Key to Sustainable Weight Management",
    excerpt: "Understanding metabolic adaptation mechanisms and implementing practical strategies for long-term weight management success.",
    author: "Dr. Amanda Foster, PhD",
    category: "Weight Management",
    tags: ["Metabolism", "Weight Loss", "Sustainability"],
    readTime: "13 min read",
    date: "Nov 30, 2024",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop"
  },
  {
    title: "Nutrigenomics in Practice: DNA-Based Personalized Nutrition Revolution",
    excerpt: "How advanced genetic testing is revolutionizing personalized nutrition recommendations and transforming clinical practice outcomes.",
    author: "Dr. Robert Kim, MD",
    category: "Personalized Nutrition",
    tags: ["Nutrigenomics", "DNA", "Personalization"],
    readTime: "14 min read",
    date: "Nov 28, 2024",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=250&fit=crop"
  },
  {
    title: "Anti-Inflammatory Nutrition: Clinical Protocols That Actually Work",
    excerpt: "Evidence-based dietary interventions for managing chronic inflammation, autoimmune conditions, and promoting optimal health outcomes.",
    author: "Dr. Maria Gonzalez, RD",
    category: "Clinical Nutrition",
    tags: ["Anti-Inflammatory", "Clinical", "Health"],
    readTime: "9 min read",
    date: "Nov 25, 2024",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=400&h=250&fit=crop"
  }
];

export const BlogInsightsSection = () => {
  return (
    <section id="blog" className="py-24 px-6 bg-gradient-to-b from-slate-50/80 to-white relative overflow-hidden">
      {/* Background Particles */}
      <div className="absolute inset-0">
        <div className="particle-field opacity-30">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>
      </div>

      <div className="container mx-auto relative">
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-nutri-blue/10 to-nutri-green/10 border border-nutri-blue/20 rounded-full text-nutri-blue font-medium mb-4">
            📚 Knowledge Hub
          </span>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-nutri-blue via-nutri-green to-nutri-cyan bg-clip-text text-transparent mb-6">
            Blog & Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay at the forefront of nutrition science with expert insights, breakthrough research, and revolutionary strategies from the world's leading professionals.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <Card className="overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 glassmorphism-premium border-white/30 premium-card animate-scale-in">
            <div className="md:flex">
              <div className="md:w-1/2 relative overflow-hidden">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-64 md:h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-nutri-blue to-nutri-green text-white text-sm font-medium rounded-full pulse-glow">
                    ⭐ Featured
                  </span>
                </div>
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-nutri-blue font-medium flex items-center">
                    <Tag className="w-4 h-4 mr-1" />
                    {blogPosts[0].category}
                  </span>
                  <div className="flex gap-2">
                    {blogPosts[0].tags.map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-nutri-blue/10 text-nutri-blue text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-4 hover:text-nutri-blue transition-colors cursor-pointer">
                  {blogPosts[0].title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div>
                      <p className="font-medium text-gray-800 flex items-center">
                        <User className="w-4 h-4 mr-1 text-nutri-blue" />
                        {blogPosts[0].author}
                      </p>
                      <div className="flex items-center text-sm text-gray-500 mt-1">
                        <Clock className="w-3 h-3 mr-1" />
                        <span>{blogPosts[0].readTime}</span>
                        <span className="mx-2">•</span>
                        <span>{blogPosts[0].date}</span>
                      </div>
                    </div>
                  </div>
                  <Button className="cta-glow text-white font-semibold">
                    Read Article
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Enhanced Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-xl transition-all duration-500 premium-card glassmorphism border-white/30 animate-slide-up hover:-rotate-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-2 py-1 bg-white/90 backdrop-blur-sm text-nutri-blue text-xs font-medium rounded-full">
                    {post.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="flex gap-1">
                    {post.tags.slice(0, 2).map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-2 py-1 bg-black/20 backdrop-blur-sm text-white text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <CardHeader className="pb-2">
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-nutri-blue transition-colors cursor-pointer line-clamp-2 leading-tight">
                  {post.title}
                </h3>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed text-sm">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-800 text-sm flex items-center">
                      <User className="w-3 h-3 mr-1 text-nutri-blue" />
                      {post.author}
                    </p>
                    <div className="flex items-center text-xs text-gray-500 mt-1">
                      <Clock className="w-3 h-3 mr-1" />
                      <span>{post.readTime}</span>
                      <span className="mx-1">•</span>
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-nutri-blue hover:bg-nutri-blue hover:text-white transition-all duration-300 group-hover:scale-105"
                  >
                    Read More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced Newsletter Signup */}
        <div className="mt-20 text-center">
          <Card className="glassmorphism-premium border-white/30 p-12 max-w-3xl mx-auto shadow-2xl premium-card">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-nutri-blue/10 to-nutri-green/10 border border-nutri-blue/20 rounded-full text-nutri-blue font-medium mb-4">
                🚀 Join the Revolution
              </span>
            </div>
            <h3 className="text-4xl font-bold text-gray-800 mb-4">
              Stay Ahead with Nutrition Intelligence
            </h3>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Get exclusive insights, breakthrough research, and practical strategies delivered weekly. Join 10,000+ nutrition professionals transforming their practice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your professional email"
                className="flex-1 px-6 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-nutri-blue focus:border-transparent transition-all duration-300 text-lg"
              />
              <Button className="cta-glow text-white px-8 py-4 text-lg font-semibold">
                Subscribe Free
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              No spam. Unsubscribe anytime. Used by top dietitians worldwide.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};
