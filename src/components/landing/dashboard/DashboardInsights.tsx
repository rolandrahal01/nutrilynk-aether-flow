
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const insightsData = [
  {
    icon: "🔥",
    type: "Trending",
    message: "Client adherence up 15% this month",
    bgColor: "nutri-green/20",
    borderColor: "nutri-green/30",
    textColor: "green-300"
  },
  {
    icon: "💡",
    type: "Optimization",
    message: "Consider protein-rich breakfast plans",
    bgColor: "nutri-blue/20",
    borderColor: "nutri-blue/30",
    textColor: "blue-300"
  },
  {
    icon: "🎯",
    type: "Goals",
    message: "89% of clients on track for success",
    bgColor: "yellow-400/20",
    borderColor: "yellow-400/30",
    textColor: "yellow-300"
  },
  {
    icon: "🚀",
    type: "Prediction",
    message: "23% growth expected next month",
    bgColor: "purple-500/20",
    borderColor: "purple-500/30",
    textColor: "purple-300"
  }
];

export const DashboardInsights = () => {
  return (
    <Card className="glassmorphism-dark border-white/10 premium-card">
      <CardHeader>
        <CardTitle className="text-white flex items-center">
          AI Insights
          <span className="ml-2 text-yellow-400 pulse-glow">🧠</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {insightsData.map((insight, index) => (
          <div 
            key={index}
            className={`p-3 bg-${insight.bgColor} rounded-lg border border-${insight.borderColor} premium-card`}
          >
            <p className={`text-${insight.textColor} text-sm`}>
              <span className="font-semibold">{insight.icon} {insight.type}:</span> {insight.message}
            </p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
