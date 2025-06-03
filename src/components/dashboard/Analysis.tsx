
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, BarChart, Bar, ScatterChart, Scatter } from "recharts";
import { Brain, TrendingUp, Target, Activity, Zap, Download } from "lucide-react";

const performanceData = [
  { metric: "Patient Satisfaction", value: 95, benchmark: 85 },
  { metric: "Adherence Rate", value: 89, benchmark: 80 },
  { metric: "Weight Loss Success", value: 78, benchmark: 70 },
  { metric: "Health Improvements", value: 92, benchmark: 85 },
  { metric: "Retention Rate", value: 87, benchmark: 75 },
  { metric: "Referral Rate", value: 45, benchmark: 30 },
];

const outcomeCorrelation = [
  { adherence: 95, weightLoss: 18, satisfaction: 9.2 },
  { adherence: 87, weightLoss: 14, satisfaction: 8.8 },
  { adherence: 92, weightLoss: 16, satisfaction: 9.0 },
  { adherence: 78, weightLoss: 10, satisfaction: 7.8 },
  { adherence: 85, weightLoss: 12, satisfaction: 8.2 },
];

const aiInsights = [
  {
    title: "Optimal Consultation Frequency",
    insight: "Patients with bi-weekly check-ins show 23% better adherence",
    confidence: 94,
    action: "Recommend bi-weekly scheduling for new patients"
  },
  {
    title: "Nutrition Plan Effectiveness",
    insight: "Mediterranean plans show highest long-term success (85%)",
    confidence: 91,
    action: "Prioritize Mediterranean plans for cardiovascular patients"
  },
  {
    title: "Patient Engagement Patterns",
    insight: "App usage drops 40% after week 6 without intervention",
    confidence: 88,
    action: "Implement week 6 engagement campaign"
  },
];

export const Analysis = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-white">Advanced Analytics</h2>
        <div className="flex space-x-3">
          <Button variant="outline" className="text-white border-white/20 hover:bg-white/10">
            <Download size={20} className="mr-2" />
            Export Report
          </Button>
          <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white premium-button">
            <Brain size={20} className="mr-2" />
            AI Analysis
          </Button>
        </div>
      </div>

      <Tabs defaultValue="performance" className="w-full">
        <TabsList className="glassmorphism-dark border-white/20 mb-6">
          <TabsTrigger value="performance" className="text-white data-[state=active]:bg-purple-500/30">Performance</TabsTrigger>
          <TabsTrigger value="outcomes" className="text-white data-[state=active]:bg-purple-500/30">Outcomes</TabsTrigger>
          <TabsTrigger value="ai-insights" className="text-white data-[state=active]:bg-purple-500/30">AI Insights</TabsTrigger>
          <TabsTrigger value="predictive" className="text-white data-[state=active]:bg-purple-500/30">Predictive</TabsTrigger>
        </TabsList>

        <TabsContent value="performance">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Performance Radar */}
            <Card className="glassmorphism-dark border-white/10 premium-card">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Target className="mr-2" size={24} />
                  Performance vs Benchmarks
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ChartContainer config={{}} className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart data={performanceData}>
                      <PolarGrid stroke="rgba(255,255,255,0.2)" />
                      <PolarAngleAxis dataKey="metric" className="text-white/60 text-xs" />
                      <PolarRadiusAxis domain={[0, 100]} tick={false} />
                      <Radar
                        name="Performance"
                        dataKey="value"
                        stroke="#8B5CF6"
                        fill="#8B5CF6"
                        fillOpacity={0.3}
                        strokeWidth={2}
                      />
                      <Radar
                        name="Benchmark"
                        dataKey="benchmark"
                        stroke="#10B981"
                        fill="#10B981"
                        fillOpacity={0.1}
                        strokeWidth={2}
                        strokeDasharray="5 5"
                      />
                    </RadarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>

            {/* Key Metrics */}
            <Card className="glassmorphism-dark border-white/10 premium-card">
              <CardHeader>
                <CardTitle className="text-white">Key Performance Indicators</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {performanceData.map((metric, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-medium">{metric.metric}</span>
                      <div className="text-right">
                        <span className="text-white font-bold">{metric.value}%</span>
                        <span className="text-white/60 text-sm ml-2">({metric.benchmark}% benchmark)</span>
                      </div>
                    </div>
                    <div className="relative w-full bg-white/10 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                        style={{ width: `${metric.value}%` }}
                      ></div>
                      <div 
                        className="absolute top-0 h-2 w-1 bg-green-400 rounded-full"
                        style={{ left: `${metric.benchmark}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="outcomes">
          <Card className="glassmorphism-dark border-white/10 premium-card">
            <CardHeader>
              <CardTitle className="text-white">Outcome Correlation Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer config={{}} className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <ScatterChart data={outcomeCorrelation}>
                    <XAxis dataKey="adherence" name="Adherence %" className="text-white/60" />
                    <YAxis dataKey="weightLoss" name="Weight Loss (lbs)" className="text-white/60" />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Scatter dataKey="weightLoss" fill="#8B5CF6" />
                  </ScatterChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <Card className="glassmorphism-dark border-white/10 premium-card">
              <CardContent className="p-6 text-center">
                <TrendingUp className="mx-auto mb-2 text-green-400" size={32} />
                <div className="text-2xl font-bold text-green-400">85%</div>
                <div className="text-white/60 text-sm">Success Rate</div>
              </CardContent>
            </Card>
            <Card className="glassmorphism-dark border-white/10 premium-card">
              <CardContent className="p-6 text-center">
                <Activity className="mx-auto mb-2 text-blue-400" size={32} />
                <div className="text-2xl font-bold text-blue-400">16.2 lbs</div>
                <div className="text-white/60 text-sm">Avg. Weight Loss</div>
              </CardContent>
            </Card>
            <Card className="glassmorphism-dark border-white/10 premium-card">
              <CardContent className="p-6 text-center">
                <Zap className="mx-auto mb-2 text-yellow-400" size={32} />
                <div className="text-2xl font-bold text-yellow-400">4.8/5</div>
                <div className="text-white/60 text-sm">Patient Satisfaction</div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="ai-insights">
          <Card className="glassmorphism-dark border-white/10 premium-card">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Brain className="mr-2" size={24} />
                AI-Powered Insights
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {aiInsights.map((insight, index) => (
                <div key={index} className="p-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg border border-purple-500/20 premium-card">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-white font-semibold text-lg">{insight.title}</h3>
                    <div className="flex items-center bg-green-500/20 px-2 py-1 rounded-full">
                      <Zap size={14} className="text-green-400 mr-1" />
                      <span className="text-green-400 text-sm font-medium">{insight.confidence}%</span>
                    </div>
                  </div>
                  <p className="text-white/80 mb-4">{insight.insight}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-purple-300 font-medium">Recommended Action:</span>
                    <Button size="sm" variant="outline" className="text-white border-white/20 hover:bg-white/10">
                      Implement
                    </Button>
                  </div>
                  <p className="text-white/60 text-sm mt-2">{insight.action}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="predictive">
          <Card className="glassmorphism-dark border-white/10 premium-card">
            <CardHeader>
              <CardTitle className="text-white">Predictive Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer config={{}} className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={[
                    { month: "Jul", predicted: 62000, actual: 58000 },
                    { month: "Aug", predicted: 65000, actual: null },
                    { month: "Sep", predicted: 68000, actual: null },
                    { month: "Oct", predicted: 71000, actual: null },
                    { month: "Nov", predicted: 74000, actual: null },
                    { month: "Dec", predicted: 77000, actual: null },
                  ]}>
                    <XAxis dataKey="month" className="text-white/60" />
                    <YAxis className="text-white/60" />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Line
                      type="monotone"
                      dataKey="predicted"
                      stroke="#8B5CF6"
                      strokeWidth={3}
                      strokeDasharray="5 5"
                      dot={{ fill: "#8B5CF6", strokeWidth: 2, r: 6 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="actual"
                      stroke="#10B981"
                      strokeWidth={3}
                      dot={{ fill: "#10B981", strokeWidth: 2, r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <Card className="glassmorphism-dark border-white/10 premium-card">
              <CardHeader>
                <CardTitle className="text-white">Risk Predictions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { patient: "Sarah J.", risk: "Low", probability: 15, factor: "High adherence" },
                  { patient: "Mike C.", risk: "Medium", probability: 45, factor: "Missed appointments" },
                  { patient: "Lisa P.", risk: "High", probability: 78, factor: "Low engagement" },
                ].map((risk, index) => (
                  <div key={index} className="p-3 bg-white/5 rounded-lg border border-white/10">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-white font-medium">{risk.patient}</span>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        risk.risk === 'Low' ? 'bg-green-500/20 text-green-400' :
                        risk.risk === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-red-500/20 text-red-400'
                      }`}>
                        {risk.risk} Risk
                      </span>
                    </div>
                    <div className="text-white/60 text-sm">{risk.factor}</div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="glassmorphism-dark border-white/10 premium-card">
              <CardHeader>
                <CardTitle className="text-white">Growth Projections</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400">+18%</div>
                    <div className="text-white/60">Projected Growth (6mo)</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400">320</div>
                    <div className="text-white/60">Predicted New Patients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400">$95K</div>
                    <div className="text-white/60">Revenue Forecast</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
