
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const metricsData = [
  { title: "Active Patients", value: "1,248", change: "+12%", color: "from-blue-500 to-cyan-500" },
  { title: "Meal Plans Created", value: "856", change: "+8%", color: "from-green-500 to-emerald-500" },
  { title: "Avg Adherence", value: "94.2%", change: "+5.8%", color: "from-purple-500 to-pink-500" },
  { title: "Revenue (MTD)", value: "$47,320", change: "+18%", color: "from-orange-500 to-red-500" },
];

const chartData = [
  { month: "Jan", patients: 65, revenue: 32000, adherence: 88 },
  { month: "Feb", patients: 72, revenue: 36000, adherence: 91 },
  { month: "Mar", patients: 88, revenue: 42000, adherence: 93 },
  { month: "Apr", patients: 94, revenue: 45000, adherence: 95 },
  { month: "May", patients: 112, revenue: 48000, adherence: 94 },
  { month: "Jun", patients: 125, revenue: 52000, adherence: 96 },
];

const recentActivity = [
  { type: "New Patient", name: "Sarah Johnson", time: "2 hours ago", status: "success" },
  { type: "Meal Plan", name: "Mediterranean Plan for John D.", time: "4 hours ago", status: "info" },
  { type: "Appointment", name: "Dr. Smith consultation", time: "6 hours ago", status: "warning" },
  { type: "Payment", name: "$580 received", time: "1 day ago", status: "success" },
];

export const DashboardOverview = () => {
  return (
    <div className="space-y-6">
      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metricsData.map((metric, index) => (
          <Card key={index} className="glassmorphism-dark border-white/10 premium-card group hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6">
              <div className={`text-3xl font-bold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent`}>
                {metric.value}
              </div>
              <div className="text-white/80 text-sm mt-1">{metric.title}</div>
              <div className="flex items-center mt-2">
                <span className="text-green-400 text-sm font-medium">{metric.change}</span>
                <span className="text-white/60 text-xs ml-2">vs last month</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-1 mt-3">
                <div className={`bg-gradient-to-r ${metric.color} h-1 rounded-full`} style={{ width: "75%" }}></div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Patient Growth Chart */}
        <Card className="glassmorphism-dark border-white/10 premium-card">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              Patient Growth
              <div className="ml-2 w-2 h-2 bg-green-400 rounded-full pulse-glow"></div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={{}} className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData}>
                  <defs>
                    <linearGradient id="colorPatients" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.1}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="month" className="text-white/60" />
                  <YAxis className="text-white/60" />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Area
                    type="monotone"
                    dataKey="patients"
                    stroke="#3B82F6"
                    fillOpacity={1}
                    fill="url(#colorPatients)"
                    strokeWidth={3}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Revenue Chart */}
        <Card className="glassmorphism-dark border-white/10 premium-card">
          <CardHeader>
            <CardTitle className="text-white">Revenue Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={{}} className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData}>
                  <XAxis dataKey="month" className="text-white/60" />
                  <YAxis className="text-white/60" />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="revenue" fill="#10B981" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card className="glassmorphism-dark border-white/10 premium-card">
        <CardHeader>
          <CardTitle className="text-white">Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center p-3 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                <div className={`w-3 h-3 rounded-full mr-3 ${
                  activity.status === 'success' ? 'bg-green-400' :
                  activity.status === 'info' ? 'bg-blue-400' :
                  activity.status === 'warning' ? 'bg-yellow-400' : 'bg-gray-400'
                } pulse-glow`}></div>
                <div className="flex-1">
                  <div className="text-white font-medium">{activity.name}</div>
                  <div className="text-white/60 text-sm">{activity.type}</div>
                </div>
                <div className="text-white/40 text-sm">{activity.time}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
