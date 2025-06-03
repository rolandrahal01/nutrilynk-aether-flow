
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock, Video, User, Plus, Phone } from "lucide-react";

const todayAppointments = [
  { time: "9:00 AM", patient: "Sarah Johnson", type: "Initial Consultation", duration: "60 min", status: "confirmed" },
  { time: "10:30 AM", patient: "Mike Chen", type: "Follow-up", duration: "30 min", status: "confirmed" },
  { time: "2:00 PM", patient: "Lisa Park", type: "Nutrition Review", duration: "45 min", status: "pending" },
  { time: "3:30 PM", patient: "John Smith", type: "Lab Review", duration: "30 min", status: "confirmed" },
];

const upcomingWeek = [
  { date: "Tomorrow", count: 6, revenue: "$1,240" },
  { date: "Wednesday", count: 8, revenue: "$1,680" },
  { date: "Thursday", count: 5, revenue: "$1,050" },
  { date: "Friday", count: 7, revenue: "$1,470" },
];

const appointmentTypes = [
  { type: "Initial Consultation", duration: "60 min", price: "$200", color: "from-blue-500 to-blue-600" },
  { type: "Follow-up", duration: "30 min", price: "$120", color: "from-green-500 to-green-600" },
  { type: "Nutrition Review", duration: "45 min", price: "$150", color: "from-purple-500 to-purple-600" },
  { type: "Lab Review", duration: "30 min", price: "$100", color: "from-orange-500 to-orange-600" },
];

export const Appointments = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-white">Appointments</h2>
        <div className="flex space-x-3">
          <Button variant="outline" className="text-white border-white/20 hover:bg-white/10">
            <Calendar size={20} className="mr-2" />
            Calendar View
          </Button>
          <Button className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white premium-button">
            <Plus size={20} className="mr-2" />
            New Appointment
          </Button>
        </div>
      </div>

      <Tabs defaultValue="today" className="w-full">
        <TabsList className="glassmorphism-dark border-white/20 mb-6">
          <TabsTrigger value="today" className="text-white data-[state=active]:bg-blue-500/30">Today</TabsTrigger>
          <TabsTrigger value="upcoming" className="text-white data-[state=active]:bg-blue-500/30">Upcoming</TabsTrigger>
          <TabsTrigger value="availability" className="text-white data-[state=active]:bg-blue-500/30">Availability</TabsTrigger>
          <TabsTrigger value="analytics" className="text-white data-[state=active]:bg-blue-500/30">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="today">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Today's Schedule */}
            <div className="lg:col-span-2">
              <Card className="glassmorphism-dark border-white/10 premium-card">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Clock className="mr-2" size={24} />
                    Today's Schedule
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {todayAppointments.map((appointment, index) => (
                    <div key={index} className={`p-4 rounded-lg border ${
                      appointment.status === 'confirmed' ? 'bg-green-500/10 border-green-500/30' : 'bg-yellow-500/10 border-yellow-500/30'
                    } hover:scale-105 transition-transform duration-200`}>
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                            {appointment.patient.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <div className="text-white font-medium">{appointment.patient}</div>
                            <div className="text-white/60 text-sm">{appointment.type}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-white font-medium">{appointment.time}</div>
                          <div className="text-white/60 text-sm">{appointment.duration}</div>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline" className="text-white border-white/20 hover:bg-white/10">
                          <Video size={16} className="mr-1" />
                          Join Call
                        </Button>
                        <Button size="sm" variant="outline" className="text-white border-white/20 hover:bg-white/10">
                          <Phone size={16} className="mr-1" />
                          Call
                        </Button>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Quick Stats */}
            <div className="space-y-4">
              <Card className="glassmorphism-dark border-white/10 premium-card">
                <CardContent className="p-6 text-center">
                  <Calendar className="mx-auto mb-2 text-blue-400" size={32} />
                  <div className="text-2xl font-bold text-blue-400">4</div>
                  <div className="text-white/60 text-sm">Today's Appointments</div>
                </CardContent>
              </Card>
              <Card className="glassmorphism-dark border-white/10 premium-card">
                <CardContent className="p-6 text-center">
                  <Clock className="mx-auto mb-2 text-green-400" size={32} />
                  <div className="text-2xl font-bold text-green-400">165</div>
                  <div className="text-white/60 text-sm">Minutes Scheduled</div>
                </CardContent>
              </Card>
              <Card className="glassmorphism-dark border-white/10 premium-card">
                <CardContent className="p-6 text-center">
                  <User className="mx-auto mb-2 text-purple-400" size={32} />
                  <div className="text-2xl font-bold text-purple-400">$670</div>
                  <div className="text-white/60 text-sm">Today's Revenue</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="upcoming">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {upcomingWeek.map((day, index) => (
              <Card key={index} className="glassmorphism-dark border-white/10 premium-card hover:scale-105 transition-transform duration-300">
                <CardHeader className="pb-2">
                  <CardTitle className="text-white text-lg">{day.date}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-white/60">Appointments</span>
                      <span className="text-white font-medium">{day.count}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/60">Revenue</span>
                      <span className="text-green-400 font-medium">{day.revenue}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="glassmorphism-dark border-white/10 premium-card mt-6">
            <CardHeader>
              <CardTitle className="text-white">This Week's Schedule</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-7 gap-2 text-center">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
                  <div key={index} className="p-3 bg-white/5 rounded-lg border border-white/10">
                    <div className="text-white/60 text-sm">{day}</div>
                    <div className="text-white font-medium mt-1">{Math.floor(Math.random() * 8) + 1}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="availability">
          <Card className="glassmorphism-dark border-white/10 premium-card">
            <CardHeader>
              <CardTitle className="text-white">Appointment Types & Pricing</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {appointmentTypes.map((type, index) => (
                  <div key={index} className={`p-6 rounded-lg bg-gradient-to-br ${type.color} text-white premium-card hover:scale-105 transition-transform duration-300`}>
                    <div className="text-lg font-semibold mb-2">{type.type}</div>
                    <div className="text-white/90 text-sm mb-4">{type.duration}</div>
                    <div className="text-2xl font-bold">{type.price}</div>
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
                <div className="text-3xl font-bold text-blue-400 mb-2">94%</div>
                <div className="text-white/60">Show-up Rate</div>
              </CardContent>
            </Card>
            <Card className="glassmorphism-dark border-white/10 premium-card">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">42min</div>
                <div className="text-white/60">Avg. Duration</div>
              </CardContent>
            </Card>
            <Card className="glassmorphism-dark border-white/10 premium-card">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">$156</div>
                <div className="text-white/60">Avg. Revenue</div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
