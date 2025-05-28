
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { LineChart, Line, PieChart, Pie, Cell, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from "recharts";

const lineChartData = [
  { month: "Jan", clients: 65, adherence: 78 },
  { month: "Feb", clients: 72, adherence: 82 },
  { month: "Mar", clients: 88, adherence: 85 },
  { month: "Apr", clients: 94, adherence: 88 },
  { month: "May", clients: 112, adherence: 92 },
  { month: "Jun", clients: 125, adherence: 95 },
];

const pieChartData = [
  { name: "Completed", value: 68, color: "#10b981" },
  { name: "In Progress", value: 22, color: "#0ea5e9" },
  { name: "Pending", value: 10, color: "#f59e0b" },
];

const radarData = [
  { metric: "Protein", value: 85 },
  { metric: "Carbs", value: 78 },
  { metric: "Fats", value: 92 },
  { metric: "Fiber", value: 88 },
  { metric: "Vitamins", value: 95 },
  { metric: "Minerals", value: 82 },
];

const chartConfig = {
  clients: { label: "Active Clients", color: "#0ea5e9" },
  adherence: { label: "Adherence %", color: "#10b981" },
};

export const DashboardPreview = () => {
  return (
    <div className="relative max-w-4xl mx-auto">
      {/* AI Avatar in Corner */}
      <div className="absolute -top-6 -right-6 z-20">
        <div className="ai-avatar w-16 h-16 bg-gradient-to-r from-nutri-green to-nutri-cyan rounded-full flex items-center justify-center glassmorphism-premium">
          <span className="text-2xl">🧠</span>
        </div>
      </div>

      {/* Main Dashboard Container */}
      <div className="glassmorphism-premium rounded-3xl p-8 shadow-2xl border-2 border-white/20 premium-card">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl font-bold text-white">Analytics Dashboard</h3>
          <div className="flex items-center space-x-4">
            <div className="w-3 h-3 bg-green-400 rounded-full pulse-glow"></div>
            <span className="text-green-300 text-sm font-medium">Live</span>
          </div>
        </div>

        {/* Enhanced Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="glassmorphism-dark border-white/10 premium-card group">
            <CardContent className="p-4 text-center">
              <div className="text-3xl font-bold text-nutri-green pulse-glow group-hover:scale-110 transition-transform duration-300">248</div>
              <div className="text-sm text-blue-200">Active Clients</div>
              <div className="w-full bg-white/10 rounded-full h-1 mt-2">
                <div className="bg-nutri-green h-1 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </CardContent>
          </Card>
          <Card className="glassmorphism-dark border-white/10 premium-card group">
            <CardContent className="p-4 text-center">
              <div className="text-3xl font-bold text-nutri-cyan pulse-glow group-hover:scale-110 transition-transform duration-300">92%</div>
              <div className="text-sm text-blue-200">Adherence Rate</div>
              <div className="w-full bg-white/10 rounded-full h-1 mt-2">
                <div className="bg-nutri-cyan h-1 rounded-full" style={{ width: '92%' }}></div>
              </div>
            </CardContent>
          </Card>
          <Card className="glassmorphism-dark border-white/10 premium-card group">
            <CardContent className="p-4 text-center">
              <div className="text-3xl font-bold text-nutri-blue pulse-glow group-hover:scale-110 transition-transform duration-300">156</div>
              <div className="text-sm text-blue-200">Meal Plans</div>
              <div className="w-full bg-white/10 rounded-full h-1 mt-2">
                <div className="bg-nutri-blue h-1 rounded-full" style={{ width: '78%' }}></div>
              </div>
            </CardContent>
          </Card>
          <Card className="glassmorphism-dark border-white/10 premium-card group">
            <CardContent className="p-4 text-center">
              <div className="text-3xl font-bold text-yellow-400 pulse-glow group-hover:scale-110 transition-transform duration-300">4.9</div>
              <div className="text-sm text-blue-200">Avg Rating</div>
              <div className="w-full bg-white/10 rounded-full h-1 mt-2">
                <div className="bg-yellow-400 h-1 rounded-full" style={{ width: '98%' }}></div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Enhanced Charts Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Animated Line Chart */}
          <Card className="lg:col-span-2 glassmorphism-dark border-white/10 premium-card">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                Client Growth & Adherence
                <div className="ml-2 w-2 h-2 bg-green-400 rounded-full pulse-glow"></div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-64">
                <LineChart data={lineChartData}>
                  <Line
                    type="monotone"
                    dataKey="clients"
                    stroke="#0ea5e9"
                    strokeWidth={3}
                    dot={{ fill: "#0ea5e9", strokeWidth: 2, r: 6 }}
                    strokeDasharray="5 5"
                    className="animate-pulse"
                  />
                  <Line
                    type="monotone"
                    dataKey="adherence"
                    stroke="#10b981"
                    strokeWidth={3}
                    dot={{ fill: "#10b981", strokeWidth: 2, r: 6 }}
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                </LineChart>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Enhanced Pie Chart */}
          <Card className="glassmorphism-dark border-white/10 premium-card">
            <CardHeader>
              <CardTitle className="text-white">Plan Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 relative">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieChartData}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={80}
                      dataKey="value"
                      className="drop-shadow-lg"
                    >
                      {pieChartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <ChartTooltip />
                  </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">100</div>
                    <div className="text-xs text-blue-200">Total Plans</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Enhanced Section */}
        <div className="grid lg:grid-cols-2 gap-6 mt-6">
          {/* Enhanced Radar Chart */}
          <Card className="glassmorphism-dark border-white/10 premium-card">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                Nutrition Score
                <span className="ml-2 text-yellow-400 pulse-glow">⭐</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={radarData}>
                    <PolarGrid stroke="rgba(255,255,255,0.2)" />
                    <PolarAngleAxis dataKey="metric" className="text-blue-200 text-xs" />
                    <PolarRadiusAxis domain={[0, 100]} tick={false} />
                    <Radar
                      name="Score"
                      dataKey="value"
                      stroke="#10b981"
                      fill="#10b981"
                      fillOpacity={0.4}
                      strokeWidth={2}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Enhanced AI Insights */}
          <Card className="glassmorphism-dark border-white/10 premium-card">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                AI Insights
                <span className="ml-2 text-yellow-400 pulse-glow">🧠</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-3 bg-nutri-green/20 rounded-lg border border-nutri-green/30 premium-card">
                <p className="text-green-300 text-sm">
                  <span className="font-semibold">🔥 Trending:</span> Client adherence up 15% this month
                </p>
              </div>
              <div className="p-3 bg-nutri-blue/20 rounded-lg border border-nutri-blue/30 premium-card">
                <p className="text-blue-300 text-sm">
                  <span className="font-semibold">💡 Optimization:</span> Consider protein-rich breakfast plans
                </p>
              </div>
              <div className="p-3 bg-yellow-400/20 rounded-lg border border-yellow-400/30 premium-card">
                <p className="text-yellow-300 text-sm">
                  <span className="font-semibold">🎯 Goals:</span> 89% of clients on track for success
                </p>
              </div>
              <div className="p-3 bg-purple-500/20 rounded-lg border border-purple-500/30 premium-card">
                <p className="text-purple-300 text-sm">
                  <span className="font-semibold">🚀 Prediction:</span> 23% growth expected next month
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Enhanced Floating Elements */}
      <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-nutri-green to-nutri-cyan rounded-full animate-float pulse-glow"></div>
      <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-r from-nutri-blue to-nutri-teal rounded-full animate-float pulse-glow" style={{ animationDelay: "2s" }}></div>
      <div className="absolute top-1/2 -left-8 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-float pulse-glow" style={{ animationDelay: "4s" }}></div>
    </div>
  );
};
