
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis } from "recharts";
import { Brain, Utensils, Users, TrendingUp, Clock, Star } from "lucide-react";

const nutritionData = [
  { name: "Protein", value: 30, color: "#3B82F6" },
  { name: "Carbs", value: 45, color: "#10B981" },
  { name: "Fats", value: 25, color: "#F59E0B" },
];

const planTemplates = [
  { name: "Mediterranean", patients: 45, rating: 4.8, category: "Heart Health" },
  { name: "Keto", patients: 32, rating: 4.6, category: "Weight Loss" },
  { name: "Anti-Inflammatory", patients: 28, rating: 4.9, category: "Autoimmune" },
  { name: "DASH", patients: 24, rating: 4.7, category: "Hypertension" },
];

const aiSuggestions = [
  { patient: "Sarah J.", suggestion: "Increase omega-3 rich foods", confidence: 94 },
  { patient: "Michael R.", suggestion: "Reduce refined sugar intake", confidence: 89 },
  { patient: "Emma K.", suggestion: "Add more fiber sources", confidence: 92 },
];

export const MealPlanning = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-white">AI Meal Planning</h2>
        <div className="flex space-x-3">
          <Button variant="outline" className="text-white border-white/20 hover:bg-white/10">
            <Brain size={20} className="mr-2" />
            AI Assistant
          </Button>
          <Button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white premium-button">
            <Utensils size={20} className="mr-2" />
            Create Plan
          </Button>
        </div>
      </div>

      <Tabs defaultValue="active-plans" className="w-full">
        <TabsList className="glassmorphism-dark border-white/20 mb-6">
          <TabsTrigger value="active-plans" className="text-white data-[state=active]:bg-green-500/30">Active Plans</TabsTrigger>
          <TabsTrigger value="templates" className="text-white data-[state=active]:bg-green-500/30">Templates</TabsTrigger>
          <TabsTrigger value="ai-insights" className="text-white data-[state=active]:bg-green-500/30">AI Insights</TabsTrigger>
          <TabsTrigger value="nutrition" className="text-white data-[state=active]:bg-green-500/30">Nutrition Analysis</TabsTrigger>
        </TabsList>

        <TabsContent value="active-plans">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 gap-4">
              <Card className="glassmorphism-dark border-white/10 premium-card">
                <CardContent className="p-6 text-center">
                  <Users className="mx-auto mb-2 text-blue-400" size={32} />
                  <div className="text-2xl font-bold text-blue-400">248</div>
                  <div className="text-white/60 text-sm">Active Plans</div>
                </CardContent>
              </Card>
              <Card className="glassmorphism-dark border-white/10 premium-card">
                <CardContent className="p-6 text-center">
                  <TrendingUp className="mx-auto mb-2 text-green-400" size={32} />
                  <div className="text-2xl font-bold text-green-400">94.2%</div>
                  <div className="text-white/60 text-sm">Adherence Rate</div>
                </CardContent>
              </Card>
              <Card className="glassmorphism-dark border-white/10 premium-card">
                <CardContent className="p-6 text-center">
                  <Clock className="mx-auto mb-2 text-purple-400" size={32} />
                  <div className="text-2xl font-bold text-purple-400">18min</div>
                  <div className="text-white/60 text-sm">Avg. Creation Time</div>
                </CardContent>
              </Card>
            </div>

            {/* Nutrition Distribution */}
            <Card className="glassmorphism-dark border-white/10 premium-card">
              <CardHeader>
                <CardTitle className="text-white">Nutrition Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <ChartContainer config={{}} className="h-48">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={nutritionData}
                        cx="50%"
                        cy="50%"
                        innerRadius={40}
                        outerRadius={80}
                        dataKey="value"
                      >
                        {nutritionData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <ChartTooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </ChartContainer>
                <div className="mt-4 space-y-2">
                  {nutritionData.map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: item.color }}></div>
                        <span className="text-white/80">{item.name}</span>
                      </div>
                      <span className="text-white font-medium">{item.value}%</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Plans */}
            <Card className="glassmorphism-dark border-white/10 premium-card">
              <CardHeader>
                <CardTitle className="text-white">Recent Plans</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {['Sarah Johnson - Keto Plan', 'Mike Chen - Mediterranean', 'Lisa Park - Anti-Inflammatory', 'John Smith - DASH Diet'].map((plan, index) => (
                  <div key={index} className="p-3 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="text-white font-medium">{plan}</div>
                    <div className="text-white/60 text-sm">Created 2 hours ago</div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="templates">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {planTemplates.map((template, index) => (
              <Card key={index} className="glassmorphism-dark border-white/10 premium-card hover:scale-105 transition-transform duration-300">
                <CardHeader>
                  <CardTitle className="text-white text-lg">{template.name}</CardTitle>
                  <div className="text-white/60 text-sm">{template.category}</div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-white/60">Patients</span>
                      <span className="text-white font-medium">{template.patients}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/60">Rating</span>
                      <div className="flex items-center">
                        <Star size={16} className="text-yellow-400 fill-current mr-1" />
                        <span className="text-white font-medium">{template.rating}</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="w-full text-white border-white/20 hover:bg-white/10">
                      Use Template
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="ai-insights">
          <Card className="glassmorphism-dark border-white/10 premium-card">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Brain className="mr-2" size={24} />
                AI Recommendations
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {aiSuggestions.map((suggestion, index) => (
                <div key={index} className="p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <div className="text-white font-medium">{suggestion.patient}</div>
                    <div className="text-green-400 text-sm font-medium">{suggestion.confidence}% confidence</div>
                  </div>
                  <div className="text-white/80">{suggestion.suggestion}</div>
                  <div className="flex space-x-2 mt-3">
                    <Button size="sm" variant="outline" className="text-white border-white/20 hover:bg-white/10">
                      Apply
                    </Button>
                    <Button size="sm" variant="ghost" className="text-white/60 hover:bg-white/10">
                      Dismiss
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="nutrition">
          <Card className="glassmorphism-dark border-white/10 premium-card">
            <CardHeader>
              <CardTitle className="text-white">Nutrition Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer config={{}} className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={[
                    { nutrient: 'Protein', target: 120, actual: 115 },
                    { nutrient: 'Fiber', target: 35, actual: 28 },
                    { nutrient: 'Iron', target: 18, actual: 22 },
                    { nutrient: 'Calcium', target: 1000, actual: 950 },
                    { nutrient: 'Vitamin D', target: 600, actual: 450 },
                  ]}>
                    <XAxis dataKey="nutrient" className="text-white/60" />
                    <YAxis className="text-white/60" />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="target" fill="#3B82F6" name="Target" />
                    <Bar dataKey="actual" fill="#10B981" name="Actual" />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
