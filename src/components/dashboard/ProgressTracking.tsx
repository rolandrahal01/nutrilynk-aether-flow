
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts";
import { TrendingUp, Target, Activity, Award, Camera, Calendar } from "lucide-react";

const progressData = [
  { date: "Week 1", weight: 180, energy: 6, adherence: 85 },
  { date: "Week 2", weight: 178, energy: 7, adherence: 90 },
  { date: "Week 3", weight: 176, energy: 8, adherence: 88 },
  { date: "Week 4", weight: 174, energy: 8, adherence: 95 },
];

const healthMetrics = [
  { metric: "Energy", value: 85, target: 90, color: "from-yellow-500 to-orange-500" },
  { metric: "Sleep Quality", value: 78, target: 85, color: "from-blue-500 to-indigo-500" },
  { metric: "Mood", value: 92, target: 85, color: "from-green-500 to-emerald-500" },
  { metric: "Digestion", value: 88, target: 90, color: "from-purple-500 to-pink-500" },
];

const patientGoals = [
  { patient: "Sarah Johnson", goal: "Weight Loss", progress: 75, target: "20 lbs", current: "15 lbs" },
  { patient: "Mike Chen", goal: "Blood Sugar Control", progress: 90, target: "A1C < 7%", current: "6.8%" },
  { patient: "Lisa Park", goal: "Inflammation Reduction", progress: 65, target: "CRP < 1.0", current: "1.2" },
];

export const ProgressTracking = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-white">Progress Tracking</h2>
        <div className="flex space-x-3">
          <Button variant="outline" className="text-white border-white/20 hover:bg-white/10">
            <Camera size={20} className="mr-2" />
            Photo Progress
          </Button>
          <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white premium-button">
            <Calendar size={20} className="mr-2" />
            Schedule Check-in
          </Button>
        </div>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="glassmorphism-dark border-white/20 mb-6">
          <TabsTrigger value="overview" className="text-white data-[state=active]:bg-purple-500/30">Overview</TabsTrigger>
          <TabsTrigger value="weight-tracking" className="text-white data-[state=active]:bg-purple-500/30">Weight Tracking</TabsTrigger>
          <TabsTrigger value="biomarkers" className="text-white data-[state=active]:bg-purple-500/30">Biomarkers</TabsTrigger>
          <TabsTrigger value="goals" className="text-white data-[state=active]:bg-purple-500/30">Goals</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Health Metrics */}
            <Card className="glassmorphism-dark border-white/10 premium-card">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Activity className="mr-2" size={24} />
                  Health Metrics
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {healthMetrics.map((metric, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-medium">{metric.metric}</span>
                      <span className="text-white/60">{metric.value}%</span>
                    </div>
                    <div className="relative">
                      <Progress value={metric.value} className="h-3" />
                      <div 
                        className="absolute top-0 h-3 w-1 bg-white/60 rounded-full"
                        style={{ left: `${metric.target}%` }}
                      ></div>
                    </div>
                    <div className="text-xs text-white/60">Target: {metric.target}%</div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Progress Chart */}
            <Card className="glassmorphism-dark border-white/10 premium-card">
              <CardHeader>
                <CardTitle className="text-white">Progress Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                <ChartContainer config={{}} className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={progressData}>
                      <XAxis dataKey="date" className="text-white/60" />
                      <YAxis className="text-white/60" />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Line
                        type="monotone"
                        dataKey="weight"
                        stroke="#3B82F6"
                        strokeWidth={3}
                        dot={{ fill: "#3B82F6", strokeWidth: 2, r: 6 }}
                      />
                      <Line
                        type="monotone"
                        dataKey="energy"
                        stroke="#10B981"
                        strokeWidth={3}
                        dot={{ fill: "#10B981", strokeWidth: 2, r: 6 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>

          {/* Recent Achievements */}
          <Card className="glassmorphism-dark border-white/10 premium-card">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Award className="mr-2" size={24} />
                Recent Achievements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { title: "7-Day Streak", description: "Meal plan adherence", icon: "🔥" },
                  { title: "Weight Milestone", description: "Lost 15 lbs", icon: "🎯" },
                  { title: "Energy Boost", description: "30% improvement", icon: "⚡" },
                ].map((achievement, index) => (
                  <div key={index} className="p-4 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-lg border border-yellow-500/30 premium-card">
                    <div className="text-2xl mb-2">{achievement.icon}</div>
                    <div className="text-white font-medium">{achievement.title}</div>
                    <div className="text-white/60 text-sm">{achievement.description}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="weight-tracking">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="glassmorphism-dark border-white/10 premium-card">
              <CardContent className="p-6 text-center">
                <TrendingUp className="mx-auto mb-2 text-green-400" size={32} />
                <div className="text-2xl font-bold text-green-400">-5.2 lbs</div>
                <div className="text-white/60 text-sm">This Month</div>
              </CardContent>
            </Card>
            <Card className="glassmorphism-dark border-white/10 premium-card">
              <CardContent className="p-6 text-center">
                <Target className="mx-auto mb-2 text-blue-400" size={32} />
                <div className="text-2xl font-bold text-blue-400">174 lbs</div>
                <div className="text-white/60 text-sm">Current Weight</div>
              </CardContent>
            </Card>
            <Card className="glassmorphism-dark border-white/10 premium-card">
              <CardContent className="p-6 text-center">
                <Award className="mx-auto mb-2 text-purple-400" size={32} />
                <div className="text-2xl font-bold text-purple-400">160 lbs</div>
                <div className="text-white/60 text-sm">Goal Weight</div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="biomarkers">
          <Card className="glassmorphism-dark border-white/10 premium-card">
            <CardHeader>
              <CardTitle className="text-white">Biomarker Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { name: "Cholesterol", value: "185 mg/dL", change: "-12%", status: "good" },
                  { name: "Blood Sugar", value: "95 mg/dL", change: "-8%", status: "good" },
                  { name: "Blood Pressure", value: "118/76", change: "-5%", status: "good" },
                  { name: "Inflammation", value: "0.8 mg/L", change: "-25%", status: "excellent" },
                ].map((biomarker, index) => (
                  <div key={index} className="p-4 bg-white/5 rounded-lg border border-white/10 premium-card">
                    <div className="text-white font-medium mb-1">{biomarker.name}</div>
                    <div className="text-2xl font-bold text-blue-400 mb-1">{biomarker.value}</div>
                    <div className={`text-sm font-medium ${
                      biomarker.status === 'excellent' ? 'text-green-400' :
                      biomarker.status === 'good' ? 'text-blue-400' : 'text-yellow-400'
                    }`}>
                      {biomarker.change} improvement
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="goals">
          <Card className="glassmorphism-dark border-white/10 premium-card">
            <CardHeader>
              <CardTitle className="text-white">Patient Goals Progress</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {patientGoals.map((patient, index) => (
                <div key={index} className="p-4 bg-white/5 rounded-lg border border-white/10">
                  <div className="flex justify-between items-center mb-3">
                    <div>
                      <div className="text-white font-medium">{patient.patient}</div>
                      <div className="text-white/60 text-sm">{patient.goal}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-white font-medium">{patient.current}</div>
                      <div className="text-white/60 text-sm">Target: {patient.target}</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-white/60">Progress</span>
                      <span className="text-white">{patient.progress}%</span>
                    </div>
                    <Progress value={patient.progress} className="h-2" />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
