
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
      {/* Main Dashboard Container */}
      <div className="glassmorphism rounded-3xl p-8 shadow-2xl border-2 border-white/20">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl font-bold text-white">Analytics Dashboard</h3>
          <div className="flex items-center space-x-4">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-300 text-sm font-medium">Live</span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="glassmorphism-dark border-white/10">
            <CardContent className="p-4 text-center">
              <div className="text-3xl font-bold text-nutri-green animate-pulse-glow">248</div>
              <div className="text-sm text-blue-200">Active Clients</div>
            </CardContent>
          </Card>
          <Card className="glassmorphism-dark border-white/10">
            <CardContent className="p-4 text-center">
              <div className="text-3xl font-bold text-nutri-cyan animate-pulse-glow">92%</div>
              <div className="text-sm text-blue-200">Adherence Rate</div>
            </CardContent>
          </Card>
          <Card className="glassmorphism-dark border-white/10">
            <CardContent className="p-4 text-center">
              <div className="text-3xl font-bold text-nutri-blue animate-pulse-glow">156</div>
              <div className="text-sm text-blue-200">Meal Plans</div>
            </CardContent>
          </Card>
          <Card className="glassmorphism-dark border-white/10">
            <CardContent className="p-4 text-center">
              <div className="text-3xl font-bold text-yellow-400 animate-pulse-glow">4.9</div>
              <div className="text-sm text-blue-200">Avg Rating</div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Line Chart */}
          <Card className="lg:col-span-2 glassmorphism-dark border-white/10">
            <CardHeader>
              <CardTitle className="text-white">Client Growth & Adherence</CardTitle>
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

          {/* Pie Chart */}
          <Card className="glassmorphism-dark border-white/10">
            <CardHeader>
              <CardTitle className="text-white">Plan Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieChartData}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={80}
                      dataKey="value"
                    >
                      {pieChartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <ChartTooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Section */}
        <div className="grid lg:grid-cols-2 gap-6 mt-6">
          {/* Radar Chart */}
          <Card className="glassmorphism-dark border-white/10">
            <CardHeader>
              <CardTitle className="text-white">Nutrition Score</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={radarData}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="metric" className="text-blue-200" />
                    <PolarRadiusAxis domain={[0, 100]} />
                    <Radar
                      name="Score"
                      dataKey="value"
                      stroke="#10b981"
                      fill="#10b981"
                      fillOpacity={0.3}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* AI Insights */}
          <Card className="glassmorphism-dark border-white/10">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                AI Insights
                <span className="ml-2 text-yellow-400 animate-pulse">🧠</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-3 bg-nutri-green/20 rounded-lg border border-nutri-green/30">
                <p className="text-green-300 text-sm">
                  <span className="font-semibold">Trend Alert:</span> Client adherence up 15% this month
                </p>
              </div>
              <div className="p-3 bg-nutri-blue/20 rounded-lg border border-nutri-blue/30">
                <p className="text-blue-300 text-sm">
                  <span className="font-semibold">Optimization:</span> Consider protein-rich breakfast plans
                </p>
              </div>
              <div className="p-3 bg-yellow-400/20 rounded-lg border border-yellow-400/30">
                <p className="text-yellow-300 text-sm">
                  <span className="font-semibold">Goal Achievement:</span> 89% of clients on track
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-nutri-green to-nutri-cyan rounded-full animate-float"></div>
      <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-r from-nutri-blue to-nutri-teal rounded-full animate-float" style={{ animationDelay: "2s" }}></div>
    </div>
  );
};
