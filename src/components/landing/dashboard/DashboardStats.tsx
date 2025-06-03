
import { Card, CardContent } from "@/components/ui/card";

const statsData = [
  { value: "248", label: "Active Clients", color: "nutri-green", progress: 85 },
  { value: "92%", label: "Adherence Rate", color: "nutri-cyan", progress: 92 },
  { value: "156", label: "Meal Plans", color: "nutri-blue", progress: 78 },
  { value: "4.9", label: "Avg Rating", color: "yellow-400", progress: 98 },
];

export const DashboardStats = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      {statsData.map((stat, index) => (
        <Card key={index} className="glassmorphism-dark border-white/10 premium-card group">
          <CardContent className="p-4 text-center">
            <div className={`text-3xl font-bold text-${stat.color} pulse-glow group-hover:scale-110 transition-transform duration-300`}>
              {stat.value}
            </div>
            <div className="text-sm text-blue-200">{stat.label}</div>
            <div className="w-full bg-white/10 rounded-full h-1 mt-2">
              <div 
                className={`bg-${stat.color} h-1 rounded-full`} 
                style={{ width: `${stat.progress}%` }}
              ></div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
