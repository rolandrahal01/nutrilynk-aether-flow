
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

export const DashboardCharts = () => {
  return (
    <>
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
      </div>
    </>
  );
};
