
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bell, Menu, Search, User } from "lucide-react";
import { PatientOnboarding } from "@/components/dashboard/PatientOnboarding";
import { MealPlanning } from "@/components/dashboard/MealPlanning";
import { ProgressTracking } from "@/components/dashboard/ProgressTracking";
import { Appointments } from "@/components/dashboard/Appointments";
import { Billing } from "@/components/dashboard/Billing";
import { Analysis } from "@/components/dashboard/Analysis";
import { Settings } from "@/components/dashboard/Settings";
import { DashboardOverview } from "@/components/dashboard/DashboardOverview";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-green-400 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: "4s" }}></div>
      </div>

      {/* Navigation Header */}
      <header className="relative z-10 glassmorphism-premium border-b border-white/20 sticky top-0">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
              <Menu size={20} />
            </Button>
            <h1 className="text-2xl font-bold text-white">NutriLynk Dashboard</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60" size={16} />
              <input
                type="text"
                placeholder="Search patients, plans..."
                className="pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              />
            </div>
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 relative">
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full pulse-glow"></span>
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
              <User size={20} />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 p-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="glassmorphism-dark border-white/20 mb-8 p-1 grid grid-cols-8 gap-1">
            <TabsTrigger value="overview" className="text-white data-[state=active]:bg-blue-500/30">Overview</TabsTrigger>
            <TabsTrigger value="onboarding" className="text-white data-[state=active]:bg-blue-500/30">Onboarding</TabsTrigger>
            <TabsTrigger value="meal-planning" className="text-white data-[state=active]:bg-blue-500/30">Meal Plans</TabsTrigger>
            <TabsTrigger value="progress" className="text-white data-[state=active]:bg-blue-500/30">Progress</TabsTrigger>
            <TabsTrigger value="appointments" className="text-white data-[state=active]:bg-blue-500/30">Appointments</TabsTrigger>
            <TabsTrigger value="billing" className="text-white data-[state=active]:bg-blue-500/30">Billing</TabsTrigger>
            <TabsTrigger value="analysis" className="text-white data-[state=active]:bg-blue-500/30">Analysis</TabsTrigger>
            <TabsTrigger value="settings" className="text-white data-[state=active]:bg-blue-500/30">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <DashboardOverview />
          </TabsContent>

          <TabsContent value="onboarding">
            <PatientOnboarding />
          </TabsContent>

          <TabsContent value="meal-planning">
            <MealPlanning />
          </TabsContent>

          <TabsContent value="progress">
            <ProgressTracking />
          </TabsContent>

          <TabsContent value="appointments">
            <Appointments />
          </TabsContent>

          <TabsContent value="billing">
            <Billing />
          </TabsContent>

          <TabsContent value="analysis">
            <Analysis />
          </TabsContent>

          <TabsContent value="settings">
            <Settings />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Dashboard;
