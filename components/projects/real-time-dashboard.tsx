"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Bar,
  BarChart,
  Line,
  LineChart,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Area,
  AreaChart,
} from "recharts"
import { AlertTriangle, Clock, Shield, Activity, BarChart2, PieChartIcon, LineChartIcon, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// Sample data for the dashboard
const eventVolumeData = [
  { time: "00:00", events: 120 },
  { time: "02:00", events: 85 },
  { time: "04:00", events: 70 },
  { time: "06:00", events: 90 },
  { time: "08:00", events: 210 },
  { time: "10:00", events: 320 },
  { time: "12:00", events: 280 },
  { time: "14:00", events: 330 },
  { time: "16:00", events: 290 },
  { time: "18:00", events: 220 },
  { time: "20:00", events: 170 },
  { time: "22:00", events: 140 },
]

const threatTypeData = [
  { name: "Phishing", value: 35 },
  { name: "Malware", value: 25 },
  { name: "Unauthorized Access", value: 20 },
  { name: "DDoS", value: 10 },
  { name: "Data Exfiltration", value: 10 },
]

const severityData = [
  { name: "Critical", value: 15, color: "#ff4d4f" },
  { name: "High", value: 25, color: "#ff7a45" },
  { name: "Medium", value: 40, color: "#ffc53d" },
  { name: "Low", value: 20, color: "#73d13d" },
]

const responseTimeData = [
  { day: "Mon", time: 28 },
  { day: "Tue", time: 25 },
  { day: "Wed", time: 22 },
  { day: "Thu", time: 26 },
  { day: "Fri", time: 24 },
  { day: "Sat", time: 20 },
  { day: "Sun", time: 18 },
]

export default function RealTimeDashboard() {
  const [timeRange, setTimeRange] = useState("24h")
  const [eventData, setEventData] = useState(eventVolumeData)
  const [chartType, setChartType] = useState("area")

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setEventData((prevData) => {
        return prevData.map((item) => ({
          ...item,
          events: item.events + Math.floor(Math.random() * 20) - 10,
        }))
      })
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.section
      className="space-y-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-[#6e3adc] to-[#3adc9d] text-transparent bg-clip-text">
            Real-Time SIEM Dashboard
          </h2>
          <p className="text-white/70 mt-2 font-light">Live security monitoring and incident tracking</p>
        </div>

        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="border-[#6e3adc]/30 hover:border-[#6e3adc]/60 bg-[#0a0d1e]/50">
                <Filter className="h-4 w-4 mr-2" />
                Filter Options
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-[#0f1631] border-[#6e3adc]/30">
              <DropdownMenuLabel>Filter By</DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-[#6e3adc]/20" />
              <DropdownMenuItem className="hover:bg-[#6e3adc]/20 cursor-pointer">All Events</DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-[#6e3adc]/20 cursor-pointer">Critical Alerts</DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-[#6e3adc]/20 cursor-pointer">Resolved Incidents</DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-[#6e3adc]/20 cursor-pointer">
                Pending Investigation
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-[120px] bg-[#0a0d1e]/50 border-[#6e3adc]/30">
              <SelectValue placeholder="Select Range" />
            </SelectTrigger>
            <SelectContent className="bg-[#0f1631] border-[#6e3adc]/30">
              <SelectItem value="24h">Last 24 Hours</SelectItem>
              <SelectItem value="7d">Last 7 Days</SelectItem>
              <SelectItem value="30d">Last 30 Days</SelectItem>
            </SelectContent>
          </Select>

          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-[#3adc9d] animate-pulse"></div>
            <span className="text-sm text-[#3adc9d]">Live</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <motion.div whileHover={{ scale: 1.03, translateZ: 10 }} transition={{ type: "spring", stiffness: 300 }}>
          <Card className="bg-[#0f1631]/80 border-[#6e3adc]/20 backdrop-blur-sm rounded-xl overflow-hidden shadow-[0_8px_30px_rgb(110,58,220,0.1)]">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-[#6e3adc]" />
                Total Incidents
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-end justify-between">
                <div>
                  <div className="text-4xl font-bold">247</div>
                  <div className="text-sm text-white/60">Last 24 hours</div>
                </div>
                <div className="text-[#3adc9d] text-sm flex items-center">+12%</div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div whileHover={{ scale: 1.03, translateZ: 10 }} transition={{ type: "spring", stiffness: 300 }}>
          <Card className="bg-[#0f1631]/80 border-[#6e3adc]/20 backdrop-blur-sm rounded-xl overflow-hidden shadow-[0_8px_30px_rgb(110,58,220,0.1)]">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium flex items-center gap-2">
                <Clock className="h-4 w-4 text-[#3a8ddc]" />
                Avg. Response Time
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-end justify-between">
                <div>
                  <div className="text-4xl font-bold">23m</div>
                  <div className="text-sm text-white/60">-30% from baseline</div>
                </div>
                <div className="text-[#3adc9d] text-sm flex items-center">Improved</div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div whileHover={{ scale: 1.03, translateZ: 10 }} transition={{ type: "spring", stiffness: 300 }}>
          <Card className="bg-[#0f1631]/80 border-[#6e3adc]/20 backdrop-blur-sm rounded-xl overflow-hidden shadow-[0_8px_30px_rgb(110,58,220,0.1)]">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium flex items-center gap-2">
                <Shield className="h-4 w-4 text-[#ff4d4f]" />
                Critical Alerts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-end justify-between">
                <div>
                  <div className="text-4xl font-bold text-[#ff4d4f]">15</div>
                  <div className="text-sm text-white/60">4 in progress</div>
                </div>
                <div className="text-[#ffc53d] text-sm flex items-center">Attention needed</div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div whileHover={{ scale: 1.03, translateZ: 10 }} transition={{ type: "spring", stiffness: 300 }}>
          <Card className="bg-[#0f1631]/80 border-[#6e3adc]/20 backdrop-blur-sm rounded-xl overflow-hidden shadow-[0_8px_30px_rgb(110,58,220,0.1)]">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium flex items-center gap-2">
                <Activity className="h-4 w-4 text-[#3adc9d]" />
                Detection Rate
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-end justify-between">
                <div>
                  <div className="text-4xl font-bold">80%</div>
                  <div className="text-sm text-white/60">+15% improvement</div>
                </div>
                <div className="text-[#3adc9d] text-sm flex items-center">Optimized</div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-[#0f1631]/80 border-[#6e3adc]/20 backdrop-blur-sm rounded-xl overflow-hidden shadow-[0_8px_30px_rgb(110,58,220,0.1)]">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-[#6e3adc]" />
              Event Volume Over Time
            </CardTitle>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                className={`p-1 ${chartType === "area" ? "bg-[#6e3adc]/20 text-[#6e3adc]" : ""}`}
                onClick={() => setChartType("area")}
              >
                <BarChart2 className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className={`p-1 ${chartType === "line" ? "bg-[#6e3adc]/20 text-[#6e3adc]" : ""}`}
                onClick={() => setChartType("line")}
              >
                <LineChartIcon className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                {chartType === "area" ? (
                  <AreaChart data={eventData}>
                    <defs>
                      <linearGradient id="eventGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#6e3adc" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#6e3adc" stopOpacity={0.1} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1a1f42" />
                    <XAxis dataKey="time" stroke="#fff" />
                    <YAxis stroke="#fff" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#0f1631",
                        borderColor: "#6e3adc",
                        borderRadius: "8px",
                      }}
                      labelStyle={{ color: "#fff" }}
                    />
                    <Area
                      type="monotone"
                      dataKey="events"
                      stroke="#6e3adc"
                      fillOpacity={1}
                      fill="url(#eventGradient)"
                    />
                  </AreaChart>
                ) : (
                  <LineChart data={eventData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1a1f42" />
                    <XAxis dataKey="time" stroke="#fff" />
                    <YAxis stroke="#fff" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#0f1631",
                        borderColor: "#6e3adc",
                        borderRadius: "8px",
                      }}
                      labelStyle={{ color: "#fff" }}
                    />
                    <Line
                      type="monotone"
                      dataKey="events"
                      stroke="#6e3adc"
                      strokeWidth={3}
                      dot={{ r: 4, fill: "#6e3adc" }}
                      activeD
                      strokeWidth={3}
                      dot={{ r: 4, fill: "#6e3adc" }}
                      activeDot={{ r: 6 }}
                    />
                  </LineChart>
                )}
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#0f1631]/80 border-[#6e3adc]/20 backdrop-blur-sm rounded-xl overflow-hidden shadow-[0_8px_30px_rgb(110,58,220,0.1)]">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PieChartIcon className="h-5 w-5 text-[#3a8ddc]" />
              Incident Severity Distribution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={severityData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    paddingAngle={5}
                    dataKey="value"
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    labelLine={false}
                  >
                    {severityData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#0f1631",
                      borderColor: "#3a8ddc",
                      borderRadius: "8px",
                    }}
                    labelStyle={{ color: "#fff" }}
                  />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-[#0f1631]/80 border-[#6e3adc]/20 backdrop-blur-sm rounded-xl overflow-hidden shadow-[0_8px_30px_rgb(110,58,220,0.1)]">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart2 className="h-5 w-5 text-[#3adc9d]" />
              Top Detected Threats
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={threatTypeData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="#1a1f42" />
                  <XAxis type="number" stroke="#fff" />
                  <YAxis dataKey="name" type="category" stroke="#fff" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#0f1631",
                      borderColor: "#3adc9d",
                      borderRadius: "8px",
                    }}
                    labelStyle={{ color: "#fff" }}
                  />
                  <Bar dataKey="value" fill="#3adc9d" radius={[0, 4, 4, 0]}>
                    {threatTypeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={`rgba(58, 220, 157, ${0.5 + index * 0.1})`} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#0f1631]/80 border-[#6e3adc]/20 backdrop-blur-sm rounded-xl overflow-hidden shadow-[0_8px_30px_rgb(110,58,220,0.1)]">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <LineChartIcon className="h-5 w-5 text-[#6e3adc]" />
              Response Time Trend
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={responseTimeData}>
                  <defs>
                    <linearGradient id="responseGradient" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#6e3adc" stopOpacity={1} />
                      <stop offset="100%" stopColor="#3adc9d" stopOpacity={1} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1a1f42" />
                  <XAxis dataKey="day" stroke="#fff" />
                  <YAxis stroke="#fff" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#0f1631",
                      borderColor: "#6e3adc",
                      borderRadius: "8px",
                    }}
                    labelStyle={{ color: "#fff" }}
                  />
                  <Line
                    type="monotone"
                    dataKey="time"
                    stroke="url(#responseGradient)"
                    strokeWidth={3}
                    dot={{ r: 4, fill: "#6e3adc" }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.section>
  )
}
