
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, User, FileText, Activity, Calendar } from "lucide-react";

const onboardingSteps = [
  { id: 1, title: "Personal Information", completed: true, icon: User },
  { id: 2, title: "Medical History", completed: true, icon: FileText },
  { id: 3, title: "Health Goals", completed: false, icon: Activity },
  { id: 4, title: "Initial Consultation", completed: false, icon: Calendar },
];

const recentOnboardings = [
  { name: "Emma Wilson", stage: "Medical History", progress: 75, avatar: "EW" },
  { name: "James Rodriguez", stage: "Health Goals", progress: 50, avatar: "JR" },
  { name: "Sarah Kim", stage: "Initial Consultation", progress: 25, avatar: "SK" },
];

export const PatientOnboarding = () => {
  return (
    <div className="space-y-6">
      {/* Header with New Patient Button */}
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-white">Patient Onboarding</h2>
        <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white premium-button">
          <Plus size={20} className="mr-2" />
          New Patient
        </Button>
      </div>

      <Tabs defaultValue="pipeline" className="w-full">
        <TabsList className="glassmorphism-dark border-white/20 mb-6">
          <TabsTrigger value="pipeline" className="text-white data-[state=active]:bg-blue-500/30">Onboarding Pipeline</TabsTrigger>
          <TabsTrigger value="forms" className="text-white data-[state=active]:bg-blue-500/30">Forms & Templates</TabsTrigger>
          <TabsTrigger value="analytics" className="text-white data-[state=active]:bg-blue-500/30">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="pipeline">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Onboarding Process */}
            <Card className="glassmorphism-dark border-white/10 premium-card">
              <CardHeader>
                <CardTitle className="text-white">Onboarding Process</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {onboardingSteps.map((step) => (
                  <div key={step.id} className={`flex items-center p-4 rounded-lg border ${
                    step.completed ? 'bg-green-500/20 border-green-500/30' : 'bg-white/5 border-white/10'
                  } hover:scale-105 transition-transform duration-200`}>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 ${
                      step.completed ? 'bg-green-500' : 'bg-white/20'
                    }`}>
                      <step.icon size={20} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-medium">{step.title}</div>
                      <div className={`text-sm ${step.completed ? 'text-green-300' : 'text-white/60'}`}>
                        {step.completed ? 'Completed' : 'Pending'}
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Recent Onboardings */}
            <Card className="glassmorphism-dark border-white/10 premium-card">
              <CardHeader>
                <CardTitle className="text-white">Recent Onboardings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentOnboardings.map((patient, index) => (
                  <div key={index} className="p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                        {patient.avatar}
                      </div>
                      <div className="flex-1">
                        <div className="text-white font-medium">{patient.name}</div>
                        <div className="text-white/60 text-sm">{patient.stage}</div>
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
          </div>
        </TabsContent>

        <TabsContent value="forms">
          <Card className="glassmorphism-dark border-white/10 premium-card">
            <CardHeader>
              <CardTitle className="text-white">Intake Forms & Templates</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {['Medical History Form', 'Dietary Preferences', 'Health Goals Assessment', 'Lab Results Upload', 'Insurance Information', 'Emergency Contacts'].map((form, index) => (
                  <div key={index} className="p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors premium-card">
                    <div className="text-white font-medium mb-2">{form}</div>
                    <div className="text-white/60 text-sm mb-4">Customizable template</div>
                    <Button variant="outline" size="sm" className="w-full text-white border-white/20 hover:bg-white/10">
                      Edit Template
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="glassmorphism-dark border-white/10 premium-card">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">24</div>
                <div className="text-white/60">Avg. Completion Time (hours)</div>
              </CardContent>
            </Card>
            <Card className="glassmorphism-dark border-white/10 premium-card">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">87%</div>
                <div className="text-white/60">Completion Rate</div>
              </CardContent>
            </Card>
            <Card className="glassmorphism-dark border-white/10 premium-card">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">156</div>
                <div className="text-white/60">This Month</div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
