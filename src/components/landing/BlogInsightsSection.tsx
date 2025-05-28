
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight, Filter } from "lucide-react";

const blogCategories = [
  { id: 'all', label: 'All Articles' },
  { id: 'supplements', label: 'Supplements' },
  { id: 'sports', label: 'Sports Nutrition' },
  { id: 'clinical', label: 'Clinical Research' },
  { id: 'ai', label: 'AI & Technology' },
  { id: 'success', label: 'Success Stories' }
];

const blogPosts = [
  {
    id: 1,
    title: "The Science Behind Personalized Supplement Protocols",
    excerpt: "Discover how AI-driven nutrigenomics is revolutionizing supplement recommendations for optimal health outcomes.",
    author: "Dr. Sarah Chen, PhD Nutrition",
    date: "December 15, 2024",
    readTime: "8 min read",
    category: "supplements",
    tags: ["Nutrigenomics", "Personalization", "Supplements"],
    image: "/placeholder.svg"
  },
  {
    id: 2,
    title: "Optimizing Athletic Performance Through Data-Driven Nutrition",
    excerpt: "How elite athletes are gaining competitive advantages with precision nutrition timing and macro optimization.",
    author: "Marcus Rodriguez, RD Sports Nutritionist",
    date: "December 12, 2024",
    readTime: "6 min read",
    category: "sports",
    tags: ["Athletics", "Performance", "Data Science"],
    image: "/placeholder.svg"
  },
  {
    id: 3,
    title: "Gut Health Revolution: Microbiome-Based Meal Planning",
    excerpt: "Clinical insights into how personalized nutrition can restore gut health and improve overall wellness.",
    author: "Dr. Amanda Foster, MD Gastroenterology",
    date: "December 10, 2024",
    readTime: "10 min read",
    category: "clinical",
    tags: ["Gut Health", "Microbiome", "Clinical Nutrition"],
    image: "/placeholder.svg"
  },
  {
    id: 4,
    title: "AI in Nutrition: Transforming Dietetic Practice",
    excerpt: "Exploring how artificial intelligence is reshaping nutrition counseling and improving client outcomes.",
    author: "Jennifer Kim, MS RD Tech Innovation",
    date: "December 8, 2024",
    readTime: "7 min read",
    category: "ai",
    tags: ["Artificial Intelligence", "Digital Health", "Innovation"],
    image: "/placeholder.svg"
  },
  {
    id: 5,
    title: "Client Success: 50-Pound Weight Loss Journey",
    excerpt: "Follow Maria's transformation using evidence-based nutrition protocols and continuous monitoring.",
    author: "Lisa Thompson, RD Certified Specialist",
    date: "December 5, 2024",
    readTime: "5 min read",
    category: "success",
    tags: ["Weight Loss", "Case Study", "Client Success"],
    image: "/placeholder.svg"
  },
  {
    id: 6,
    title: "Breaking: New Research on Intermittent Fasting",
    excerpt: "Latest clinical trials reveal optimal fasting protocols for metabolic health and longevity.",
    author: "Dr. Robert Park, PhD Metabolism",
    date: "December 3, 2024",
    readTime: "9 min read",
    category: "clinical",
    tags: ["Intermittent Fasting", "Research", "Metabolism"],
    image: "/placeholder.svg"
  }
];

export const BlogInsightsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const filteredPosts = activeCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <section id="blog" className="py-32 relative section-container">
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 text-overlay">
            Latest Nutrition
            <span className="block bg-gradient-to-r from-nutri-blue to-nutri-green bg-clip-text text-transparent pulse-glow">
              Insights & Research
            </span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed text-overlay">
            Stay ahead with cutting-edge research, clinical insights, and success stories 
            from the world's leading nutrition experts.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {blogCategories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              className={`transition-all duration-300 micro-interaction ${
                activeCategory === category.id 
                  ? "cta-glow text-white" 
                  : "glassmorphism-premium border-white/20 text-white hover:bg-white/10"
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              <Filter className="w-4 h-4 mr-2" />
              {category.label}
            </Button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredPosts.map((post) => (
            <article key={post.id} className="glassmorphism-premium rounded-2xl overflow-hidden premium-card group">
              {/* Article Image */}
              <div className="aspect-video bg-gradient-to-br from-nutri-blue/30 to-nutri-green/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-nutri-green/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-white">
                    {blogCategories.find(cat => cat.id === post.category)?.label}
                  </span>
                </div>
              </div>

              {/* Article Content */}
              <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, index) => (
                    <span key={index} className="bg-white/10 px-2 py-1 rounded-md text-xs text-white/80">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-nutri-green transition-colors duration-300">
                  {post.title}
                </h3>
                
                <p className="text-blue-100 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Author & Meta */}
                <div className="flex items-center justify-between text-sm text-white/70 mb-4">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Read More */}
                <Button 
                  variant="ghost" 
                  className="w-full justify-between text-white hover:bg-white/10 micro-interaction group"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>

              {/* Structured Data for SEO */}
              <script type="application/ld+json" suppressHydrationWarning>
                {JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "Article",
                  "headline": post.title,
                  "description": post.excerpt,
                  "author": {
                    "@type": "Person",
                    "name": post.author
                  },
                  "datePublished": post.date,
                  "publisher": {
                    "@type": "Organization",
                    "name": "NutriLynk",
                    "logo": {
                      "@type": "ImageObject",
                      "url": "https://nutrilynk.com/logo.png"
                    }
                  }
                })}
              </script>
            </article>
          ))}
        </div>

        {/* Blog CTA */}
        <div className="text-center">
          <div className="glassmorphism-premium rounded-2xl p-8 max-w-2xl mx-auto premium-card">
            <h3 className="text-2xl font-bold text-white mb-4">Want More Expert Insights?</h3>
            <p className="text-blue-100 mb-6">Subscribe to our weekly newsletter for the latest nutrition research and clinical insights.</p>
            <Button className="cta-glow text-white font-semibold px-8 py-4 text-lg rounded-xl">
              Subscribe to Newsletter
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
