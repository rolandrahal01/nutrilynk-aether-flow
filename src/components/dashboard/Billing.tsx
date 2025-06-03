
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, BarChart, Bar } from "recharts";
import { DollarSign, CreditCard, FileText, TrendingUp, Download, Plus } from "lucide-react";

const revenueData = [
  { month: "Jan", revenue: 42000, expenses: 18000 },
  { month: "Feb", revenue: 45000, expenses: 19000 },
  { month: "Mar", revenue: 48000, expenses: 20000 },
  { month: "Apr", revenue: 52000, expenses: 21000 },
  { month: "May", revenue: 55000, expenses: 22000 },
  { month: "Jun", revenue: 58000, expenses: 23000 },
];

const recentInvoices = [
  { id: "INV-001", patient: "Sarah Johnson", amount: "$200", date: "2024-06-03", status: "paid" },
  { id: "INV-002", patient: "Mike Chen", amount: "$150", date: "2024-06-02", status: "pending" },
  { id: "INV-003", patient: "Lisa Park", amount: "$180", date: "2024-06-01", status: "paid" },
  { id: "INV-004", patient: "John Smith", amount: "$120", date: "2024-05-31", status: "overdue" },
];

const paymentMethods = [
  { type: "Credit Card", percentage: 65, amount: "$37,700" },
  { type: "Insurance", percentage: 25, amount: "$14,500" },
  { type: "Cash/Check", percentage: 10, amount: "$5,800" },
];

export const Billing = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-white">Billing & Revenue</h2>
        <div className="flex space-x-3">
          <Button variant="outline" className="text-white border-white/20 hover:bg-white/10">
            <Download size={20} className="mr-2" />
            Export
          </Button>
          <Button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white premium-button">
            <Plus size={20} className="mr-2" />
            New Invoice
          </Button>
        </div>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="glassmorphism-dark border-white/20 mb-6">
          <TabsTrigger value="overview" className="text-white data-[state=active]:bg-green-500/30">Overview</TabsTrigger>
          <TabsTrigger value="invoices" className="text-white data-[state=active]:bg-green-500/30">Invoices</TabsTrigger>
          <TabsTrigger value="payments" className="text-white data-[state=active]:bg-green-500/30">Payments</TabsTrigger>
          <TabsTrigger value="reports" className="text-white data-[state=active]:bg-green-500/30">Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
            <Card className="glassmorphism-dark border-white/10 premium-card">
              <CardContent className="p-6 text-center">
                <DollarSign className="mx-auto mb-2 text-green-400" size={32} />
                <div className="text-2xl font-bold text-green-400">$58,000</div>
                <div className="text-white/60 text-sm">Monthly Revenue</div>
              </CardContent>
            </Card>
            <Card className="glassmorphism-dark border-white/10 premium-card">
              <CardContent className="p-6 text-center">
                <CreditCard className="mx-auto mb-2 text-blue-400" size={32} />
                <div className="text-2xl font-bold text-blue-400">$4,800</div>
                <div className="text-white/60 text-sm">Outstanding</div>
              </CardContent>
            </Card>
            <Card className="glassmorphism-dark border-white/10 premium-card">
              <CardContent className="p-6 text-center">
                <FileText className="mx-auto mb-2 text-purple-400" size={32} />
                <div className="text-2xl font-bold text-purple-400">156</div>
                <div className="text-white/60 text-sm">Invoices Sent</div>
              </CardContent>
            </Card>
            <Card className="glassmorphism-dark border-white/10 premium-card">
              <CardContent className="p-6 text-center">
                <TrendingUp className="mx-auto mb-2 text-orange-400" size={32} />
                <div className="text-2xl font-bold text-orange-400">+12%</div>
                <div className="text-white/60 text-sm">Growth Rate</div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Revenue Chart */}
            <Card className="glassmorphism-dark border-white/10 premium-card">
              <CardHeader>
                <CardTitle className="text-white">Revenue vs Expenses</CardTitle>
              </CardHeader>
              <CardContent>
                <ChartContainer config={{}} className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={revenueData}>
                      <XAxis dataKey="month" className="text-white/60" />
                      <YAxis className="text-white/60" />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Line
                        type="monotone"
                        dataKey="revenue"
                        stroke="#10B981"
                        strokeWidth={3}
                        dot={{ fill: "#10B981", strokeWidth: 2, r: 6 }}
                      />
                      <Line
                        type="monotone"
                        dataKey="expenses"
                        stroke="#EF4444"
                        strokeWidth={3}
                        dot={{ fill: "#EF4444", strokeWidth: 2, r: 6 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>

            {/* Payment Methods */}
            <Card className="glassmorphism-dark border-white/10 premium-card">
              <CardHeader>
                <CardTitle className="text-white">Payment Methods</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {paymentMethods.map((method, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-medium">{method.type}</span>
                      <span className="text-white/60">{method.amount}</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full"
                        style={{ width: `${method.percentage}%` }}
                      ></div>
                    </div>
                    <div className="text-xs text-white/60">{method.percentage}%</div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="invoices">
          <Card className="glassmorphism-dark border-white/10 premium-card">
            <CardHeader>
              <CardTitle className="text-white">Recent Invoices</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentInvoices.map((invoice, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                        {invoice.patient.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div className="text-white font-medium">{invoice.id}</div>
                        <div className="text-white/60 text-sm">{invoice.patient}</div>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-white font-medium">{invoice.amount}</div>
                      <div className="text-white/60 text-sm">{invoice.date}</div>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                      invoice.status === 'paid' ? 'bg-green-500/20 text-green-400' :
                      invoice.status === 'pending' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="payments">
          <Card className="glassmorphism-dark border-white/10 premium-card">
            <CardHeader>
              <CardTitle className="text-white">Payment Processing</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg text-white premium-card">
                  <div className="text-lg font-semibold mb-2">Credit Card Processing</div>
                  <div className="text-white/90 text-sm mb-4">Stripe Integration</div>
                  <div className="text-2xl font-bold">2.9% + 30¢</div>
                </div>
                <div className="p-6 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg text-white premium-card">
                  <div className="text-lg font-semibold mb-2">Insurance Claims</div>
                  <div className="text-white/90 text-sm mb-4">Automated Processing</div>
                  <div className="text-2xl font-bold">95% Success</div>
                </div>
                <div className="p-6 bg-gradient-to-br from-green-500 to-green-600 rounded-lg text-white premium-card">
                  <div className="text-lg font-semibold mb-2">ACH Payments</div>
                  <div className="text-white/90 text-sm mb-4">Bank Transfers</div>
                  <div className="text-2xl font-bold">$0.50 Fee</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports">
          <Card className="glassmorphism-dark border-white/10 premium-card">
            <CardHeader>
              <CardTitle className="text-white">Financial Reports</CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer config={{}} className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={revenueData}>
                    <XAxis dataKey="month" className="text-white/60" />
                    <YAxis className="text-white/60" />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="revenue" fill="#10B981" name="Revenue" />
                    <Bar dataKey="expenses" fill="#EF4444" name="Expenses" />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
