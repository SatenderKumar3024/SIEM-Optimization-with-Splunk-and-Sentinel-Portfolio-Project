"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bell, AlertTriangle, Shield, ShieldAlert } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Sample alert data
const alerts = [
  {
    id: 1,
    title: "Suspicious Login Attempt",
    source: "Splunk",
    severity: "high",
    time: "2 minutes ago",
    ip: "192.168.1.45",
    attackType: "Credential Access",
  },
  {
    id: 2,
    title: "Unusual Network Traffic",
    source: "Sentinel",
    severity: "medium",
    time: "15 minutes ago",
    ip: "10.0.0.123",
    attackType: "Command and Control",
  },
  {
    id: 3,
    title: "Malware Detection",
    source: "Splunk",
    severity: "high",
    time: "32 minutes ago",
    ip: "172.16.0.87",
    attackType: "Execution",
  },
  {
    id: 4,
    title: "Privilege Escalation Attempt",
    source: "Sentinel",
    severity: "medium",
    time: "1 hour ago",
    ip: "192.168.5.22",
    attackType: "Privilege Escalation",
  },
]

export default function AlertsSection() {
  const [filter, setFilter] = useState("all")

  const filteredAlerts = filter === "all" ? alerts : alerts.filter((alert) => alert.severity === filter)

  return (
    <Card className="bg-[#1a0d20] border-[#ff0066]/20">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="flex items-center gap-2 text-[#3adc9d]">
            <Bell className="h-5 w-5 text-[#ff0066]" />
            Real-time Alerts
          </CardTitle>
          <CardDescription className="text-[#3adc9d]">Live incidents from Splunk and Sentinel</CardDescription>
        </div>
        <div className="flex items-center gap-2">
          <Select value={filter} onValueChange={setFilter}>
            <SelectTrigger className="w-[120px] bg-[#2c0a35] text-[#3adc9d] border-[#ff0066]/20">
              <SelectValue placeholder="Filter" />
            </SelectTrigger>
            <SelectContent className="bg-[#2c0a35] text-[#3adc9d] border-[#ff0066]/20">
              <SelectItem value="all">All Alerts</SelectItem>
              <SelectItem value="high">High Severity</SelectItem>
              <SelectItem value="medium">Medium Severity</SelectItem>
              <SelectItem value="low">Low Severity</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {filteredAlerts.map((alert) => (
            <div
              key={alert.id}
              className="flex items-start gap-3 p-3 rounded-md bg-[#2c0a35] border border-[#ff0066]/10 hover:border-[#ff0066]/30 transition-colors"
            >
              {alert.severity === "high" ? (
                <ShieldAlert className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
              ) : alert.severity === "medium" ? (
                <AlertTriangle className="h-5 w-5 text-yellow-500 mt-1 flex-shrink-0" />
              ) : (
                <Shield className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
              )}

              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium text-[#3adc9d]">{alert.title}</h4>
                  <Badge
                    className={
                      alert.severity === "high"
                        ? "bg-red-500/20 text-red-300 hover:bg-red-500/30 hover:text-red-200"
                        : alert.severity === "medium"
                          ? "bg-yellow-500/20 text-yellow-300 hover:bg-yellow-500/30 hover:text-yellow-200"
                          : "bg-green-500/20 text-green-300 hover:bg-green-500/30 hover:text-green-200"
                    }
                  >
                    {alert.severity}
                  </Badge>
                </div>

                <div className="text-sm text-[#3adc9d] mt-1">
                  <span className="inline-block mr-3">Source: {alert.source}</span>
                  <span className="inline-block mr-3">IP: {alert.ip}</span>
                  <span className="inline-block">Type: {alert.attackType}</span>
                </div>

                <div className="text-xs text-[#3adc9d] mt-2">{alert.time}</div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
