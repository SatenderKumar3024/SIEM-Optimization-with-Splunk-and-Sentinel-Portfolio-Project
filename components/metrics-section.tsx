"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Bar, BarChart, Line, LineChart, ResponsiveContainer, XAxis, YAxis, CartesianGrid } from "recharts"

const aptDetectionData = [
  { name: "Baseline", value: 65 },
  { name: "With MITRE ATT&CK", value: 80 },
]

const responseTimeData = [
  { month: "Jan", time: 45 },
  { month: "Feb", time: 42 },
  { month: "Mar", time: 38 },
  { month: "Apr", time: 35 },
  { month: "May", time: 30 },
  { month: "Jun", time: 25 },
]

export default function MetricsSection() {
  return (
    <Card className="bg-[#1a0d20] border-[#ff0066]/20">
      <CardHeader>
        <CardTitle className="text-[#3adc9d]">Key Performance Metrics</CardTitle>
        <CardDescription className="text-[#3adc9d]">Before and after implementation comparison</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="apt" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-[#2c0a35] text-[#3adc9d]">
            <TabsTrigger value="apt" className="text-[#3adc9d] data-[state=active]:text-[#ff0066]">
              APT Detection
            </TabsTrigger>
            <TabsTrigger value="response" className="text-[#3adc9d] data-[state=active]:text-[#ff0066]">
              Response Time
            </TabsTrigger>
          </TabsList>
          <TabsContent value="apt" className="space-y-4">
            <div className="h-[300px] mt-4">
              <ChartContainer
                config={{
                  value: {
                    label: "Detection Rate (%)",
                    color: "hsl(var(--chart-1))",
                  },
                }}
              >
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={aptDetectionData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                    <XAxis dataKey="name" stroke="#3adc9d" />
                    <YAxis stroke="#3adc9d" />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="value" fill="#ff0066" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>
            <div className="text-center text-sm text-[#3adc9d] mt-2">
              15% improvement in APT detection rate after MITRE ATT&CK implementation
            </div>
          </TabsContent>
          <TabsContent value="response">
            <div className="h-[300px] mt-4">
              <ChartContainer
                config={{
                  time: {
                    label: "Response Time (min)",
                    color: "hsl(var(--chart-2))",
                  },
                }}
              >
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={responseTimeData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                    <XAxis dataKey="month" stroke="#3adc9d" />
                    <YAxis stroke="#3adc9d" />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Line type="monotone" dataKey="time" stroke="#ff0066" strokeWidth={2} dot={{ r: 4 }} />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>
            <div className="text-center text-sm text-[#3adc9d] mt-2">
              44% reduction in incident response time over 6 months
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
