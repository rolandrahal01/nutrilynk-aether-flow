
import { DashboardStats } from "./dashboard/DashboardStats";
import { DashboardCharts } from "./dashboard/DashboardCharts";
import { DashboardInsights } from "./dashboard/DashboardInsights";

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
        <DashboardStats />

        {/* Enhanced Charts Grid */}
        <DashboardCharts />

        {/* Bottom Enhanced Section */}
        <div className="grid lg:grid-cols-2 gap-6 mt-6">
          <div className="lg:col-span-1">
            {/* This will be filled by the radar chart from DashboardCharts */}
          </div>
          
          {/* Enhanced AI Insights */}
          <DashboardInsights />
        </div>
      </div>

      {/* Enhanced Floating Elements */}
      <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-nutri-green to-nutri-cyan rounded-full animate-float pulse-glow"></div>
      <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-r from-nutri-blue to-nutri-teal rounded-full animate-float pulse-glow" style={{ animationDelay: "2s" }}></div>
      <div className="absolute top-1/2 -left-8 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-float pulse-glow" style={{ animationDelay: "4s" }}></div>
    </div>
  );
};
