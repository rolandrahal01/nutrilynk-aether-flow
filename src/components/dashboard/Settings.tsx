
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { User, Bell, Shield, Palette, Database, CreditCard } from "lucide-react";

const notificationSettings = [
  { label: "New Patient Registrations", enabled: true },
  { label: "Appointment Reminders", enabled: true },
  { label: "Payment Notifications", enabled: false },
  { label: "Weekly Reports", enabled: true },
  { label: "System Updates", enabled: false },
];

const integrations = [
  { name: "Stripe", status: "Connected", type: "Payment Processing" },
  { name: "Zoom", status: "Connected", type: "Video Consultations" },
  { name: "Lab Corp", status: "Pending", type: "Lab Results" },
  { name: "Epic", status: "Not Connected", type: "EHR Integration" },
];

export const Settings = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-white">Settings</h2>
        <Button className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white premium-button">
          Save Changes
        </Button>
      </div>

      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="glassmorphism-dark border-white/20 mb-6">
          <TabsTrigger value="profile" className="text-white data-[state=active]:bg-blue-500/30">Profile</TabsTrigger>
          <TabsTrigger value="notifications" className="text-white data-[state=active]:bg-blue-500/30">Notifications</TabsTrigger>
          <TabsTrigger value="security" className="text-white data-[state=active]:bg-blue-500/30">Security</TabsTrigger>
          <TabsTrigger value="integrations" className="text-white data-[state=active]:bg-blue-500/30">Integrations</TabsTrigger>
          <TabsTrigger value="appearance" className="text-white data-[state=active]:bg-blue-500/30">Appearance</TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <Card className="glassmorphism-dark border-white/10 premium-card">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <User className="mr-2" size={24} />
                Profile Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-white">First Name</Label>
                  <Input id="firstName" placeholder="Dr. Sarah" className="bg-white/10 border-white/20 text-white placeholder-white/60" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-white">Last Name</Label>
                  <Input id="lastName" placeholder="Johnson" className="bg-white/10 border-white/20 text-white placeholder-white/60" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">Email</Label>
                  <Input id="email" type="email" placeholder="dr.johnson@nutrilynk.com" className="bg-white/10 border-white/20 text-white placeholder-white/60" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-white">Phone</Label>
                  <Input id="phone" placeholder="+1 (555) 123-4567" className="bg-white/10 border-white/20 text-white placeholder-white/60" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="license" className="text-white">License Number</Label>
                  <Input id="license" placeholder="RD123456" className="bg-white/10 border-white/20 text-white placeholder-white/60" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="specialty" className="text-white">Specialty</Label>
                  <Input id="specialty" placeholder="Clinical Nutrition" className="bg-white/10 border-white/20 text-white placeholder-white/60" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications">
          <Card className="glassmorphism-dark border-white/10 premium-card">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Bell className="mr-2" size={24} />
                Notification Preferences
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {notificationSettings.map((setting, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
                  <div>
                    <div className="text-white font-medium">{setting.label}</div>
                    <div className="text-white/60 text-sm">Receive notifications for this activity</div>
                  </div>
                  <Switch checked={setting.enabled} />
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security">
          <div className="space-y-6">
            <Card className="glassmorphism-dark border-white/10 premium-card">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Shield className="mr-2" size={24} />
                  Security Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="currentPassword" className="text-white">Current Password</Label>
                  <Input id="currentPassword" type="password" className="bg-white/10 border-white/20 text-white" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="newPassword" className="text-white">New Password</Label>
                  <Input id="newPassword" type="password" className="bg-white/10 border-white/20 text-white" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-white">Confirm New Password</Label>
                  <Input id="confirmPassword" type="password" className="bg-white/10 border-white/20 text-white" />
                </div>
                <Button variant="outline" className="text-white border-white/20 hover:bg-white/10">
                  Update Password
                </Button>
              </CardContent>
            </Card>

            <Card className="glassmorphism-dark border-white/10 premium-card">
              <CardHeader>
                <CardTitle className="text-white">Two-Factor Authentication</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
                  <div>
                    <div className="text-white font-medium">SMS Authentication</div>
                    <div className="text-white/60 text-sm">Receive codes via text message</div>
                  </div>
                  <Switch />
                </div>
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
                  <div>
                    <div className="text-white font-medium">Authenticator App</div>
                    <div className="text-white/60 text-sm">Use Google Authenticator or similar</div>
                  </div>
                  <Switch checked />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="integrations">
          <Card className="glassmorphism-dark border-white/10 premium-card">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Database className="mr-2" size={24} />
                Third-Party Integrations
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {integrations.map((integration, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold mr-4">
                      {integration.name.substring(0, 2)}
                    </div>
                    <div>
                      <div className="text-white font-medium">{integration.name}</div>
                      <div className="text-white/60 text-sm">{integration.type}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      integration.status === 'Connected' ? 'bg-green-500/20 text-green-400' :
                      integration.status === 'Pending' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-gray-500/20 text-gray-400'
                    }`}>
                      {integration.status}
                    </span>
                    <Button size="sm" variant="outline" className="text-white border-white/20 hover:bg-white/10">
                      {integration.status === 'Connected' ? 'Configure' : 'Connect'}
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="appearance">
          <Card className="glassmorphism-dark border-white/10 premium-card">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Palette className="mr-2" size={24} />
                Appearance Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="text-white font-medium">Theme</div>
                <div className="grid grid-cols-3 gap-4">
                  {['Dark', 'Light', 'Auto'].map((theme, index) => (
                    <div key={index} className={`p-4 rounded-lg border cursor-pointer transition-colors ${
                      theme === 'Dark' ? 'bg-blue-500/20 border-blue-500/30' : 'bg-white/5 border-white/10 hover:bg-white/10'
                    }`}>
                      <div className="text-white text-center">{theme}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div className="text-white font-medium">Color Scheme</div>
                <div className="grid grid-cols-4 gap-4">
                  {[
                    { name: 'Blue', colors: 'from-blue-500 to-indigo-500' },
                    { name: 'Green', colors: 'from-green-500 to-emerald-500' },
                    { name: 'Purple', colors: 'from-purple-500 to-pink-500' },
                    { name: 'Orange', colors: 'from-orange-500 to-red-500' },
                  ].map((scheme, index) => (
                    <div key={index} className="text-center">
                      <div className={`w-full h-12 rounded-lg bg-gradient-to-r ${scheme.colors} mb-2 cursor-pointer hover:scale-105 transition-transform`}></div>
                      <div className="text-white/60 text-sm">{scheme.name}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
                <div>
                  <div className="text-white font-medium">Reduced Animations</div>
                  <div className="text-white/60 text-sm">Minimize motion for better performance</div>
                </div>
                <Switch />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
