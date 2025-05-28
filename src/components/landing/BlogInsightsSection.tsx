
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    title: "The Science Behind Protein Timing for Optimal Muscle Synthesis",
    excerpt: "New research reveals the critical windows for protein intake that maximize muscle protein synthesis and recovery.",
    author: "Dr. Sarah Chen, RD",
    category: "Sports Nutrition",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop",
    featured: true
  },
  {
    title: "Microbiome Revolution: How Gut Health Transforms Weight Management",
    excerpt: "Discover how the latest microbiome research is reshaping our understanding of sustainable weight loss.",
    author: "Dr. Michael Torres, PhD",
    category: "Gut Health",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop"
  },
  {
    title: "AI-Powered Meal Planning: Clinical Case Study Results",
    excerpt: "Real-world data from 500+ dietitians shows 40% improvement in client adherence with AI assistance.",
    author: "NutriLynk Research Team",
    category: "AI in Nutrition",
    readTime: "15 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop"
  },
  {
    title: "Omega-3 Supplementation: New Guidelines for Clinical Practice",
    excerpt: "Updated evidence-based recommendations for EPA/DHA dosing in cardiovascular and cognitive health.",
    author: "Dr. Lisa Park, RD",
    category: "Supplements",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=250&fit=crop"
  },
  {
    title: "Plant-Based Athlete Nutrition: Performance Optimization Strategies",
    excerpt: "Evidence-based protocols for maximizing athletic performance on plant-based diets.",
    author: "Dr. James Rodriguez, RD",
    category: "Sports Nutrition",
    readTime: "11 min read",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=250&fit=crop"
  },
  {
    title: "Success Story: 95% Client Retention Through Personalized Nutrition",
    excerpt: "How one practice transformed their business model using data-driven nutrition interventions.",
    author: "Jennifer Walsh, RD",
    category: "Case Studies",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop"
  },
  {
    title: "Metabolic Flexibility: The Key to Sustainable Weight Management",
    excerpt: "Understanding metabolic adaptation and practical strategies for long-term success.",
    author: "Dr. Amanda Foster, PhD",
    category: "Weight Management",
    readTime: "13 min read",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop"
  },
  {
    title: "Nutrigenomics in Practice: Personalizing Nutrition Based on DNA",
    excerpt: "How genetic testing is revolutionizing personalized nutrition recommendations.",
    author: "Dr. Robert Kim, MD",
    category: "Personalized Nutrition",
    readTime: "14 min read",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=250&fit=crop"
  },
  {
    title: "Anti-Inflammatory Nutrition: Clinical Protocols That Work",
    excerpt: "Evidence-based dietary interventions for managing chronic inflammation and autoimmune conditions.",
    author: "Dr. Maria Gonzalez, RD",
    category: "Clinical Nutrition",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=400&h=250&fit=crop"
  }
];

export const BlogInsightsSection = () => {
  return (
    <section id="blog" className="py-24 px-6 bg-gradient-to-b from-slate-50/80 to-white">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-nutri-blue via-nutri-green to-nutri-cyan bg-clip-text text-transparent mb-6">
            Blog & Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay at the forefront of nutrition science with expert insights, research breakthroughs, and practical strategies from leading professionals.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <Card className="overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 glassmorphism border-white/30 animate-scale-in">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-nutri-blue to-nutri-green text-white text-sm font-medium rounded-full">
                    Featured
                  </span>
                  <span className="text-nutri-blue font-medium">{blogPosts[0].category}</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-4 hover:text-nutri-blue transition-colors cursor-pointer">
                  {blogPosts[0].title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-800">{blogPosts[0].author}</p>
                    <p className="text-sm text-gray-500">{blogPosts[0].readTime}</p>
                  </div>
                  <Button className="bg-gradient-to-r from-nutri-blue to-nutri-green hover:opacity-90 text-white">
                    Read More
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:scale-105 glassmorphism border-white/30 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-2 py-1 bg-white/90 text-nutri-blue text-xs font-medium rounded-full backdrop-blur-sm">
                    {post.category}
                  </span>
                </div>
              </div>
              <CardHeader className="pb-2">
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-nutri-blue transition-colors cursor-pointer line-clamp-2">
                  {post.title}
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-800 text-sm">{post.author}</p>
                    <p className="text-xs text-gray-500">{post.readTime}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-nutri-blue hover:bg-nutri-blue hover:text-white"
                  >
                    Read More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-20 text-center">
          <Card className="glassmorphism border-white/30 p-8 max-w-2xl mx-auto shadow-xl">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Stay Updated with Nutrition Intelligence
            </h3>
            <p className="text-gray-600 mb-6">
              Get weekly insights, research updates, and practical tips delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-nutri-blue"
              />
              <Button className="bg-gradient-to-r from-nutri-blue to-nutri-green hover:opacity-90 text-white px-6">
                Subscribe
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
