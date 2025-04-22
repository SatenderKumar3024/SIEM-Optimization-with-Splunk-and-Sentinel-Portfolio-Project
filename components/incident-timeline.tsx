"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, AlertCircle } from "lucide-react"

const incidents = [
  {
    id: 1,
    title: "Brute Force Attack",
    time: "10:15 AM",
    date: "June 15, 2023",
    status: "resolved",
    description: "Multiple failed login attempts detected from IP 203.0.113.42",
    detectionTime: "2 minutes",
    resolutionTime: "17 minutes",
  },
  {
    id: 2,
    title: "Data Exfiltration Attempt",
    time: "3:42 PM",
    date: "June 14, 2023",
    status: "resolved",
    description: "Unusual outbound data transfer detected to unknown IP",
    detectionTime: "5 minutes",
    resolutionTime: "28 minutes",
  },
  {
    id: 3,
    title: "Suspicious PowerShell Execution",
    time: "11:27 AM",
    date: "June 14, 2023",
    status: "pending",
    description: "Encoded PowerShell command execution detected on server",
    detectionTime: "3 minutes",
    resolutionTime: "In progress",
  },
  {
    id: 4,
    title: "Malware Detection",
    time: "9:05 AM",
    date: "June 13, 2023",
    status: "high",
    description: "Trojan detected on workstation in Finance department",
    detectionTime: "1 minute",
    resolutionTime: "Escalated",
  },
]

export default function IncidentTimeline() {
  return (
    <Card className="bg-[#1a0d20] border-[#ff0066]/20">
      <CardHeader>
        <CardTitle className="text-[#3adc9d]">Incident Timeline</CardTitle>
        <CardDescription className="text-[#3adc9d]">Recent security incidents and response times</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative pl-6 border-l border-[#ff0066]/30">
          {incidents.map((incident, index) => (
            <div key={incident.id} className={`mb-6 ${index === incidents.length - 1 ? "" : ""}`}>
              <div className="absolute -left-[9px]">
                {incident.status === "resolved" ? (
                  <div className="w-4 h-4 rounded-full bg-green-500 border-2 border-[#1a0d20]" />
                ) : incident.status === "pending" ? (
                  <div className="w-4 h-4 rounded-full bg-yellow-500 border-2 border-[#1a0d20]" />
                ) : (
                  <div className="w-4 h-4 rounded-full bg-red-500 border-2 border-[#1a0d20]" />
                )}
              </div>

              <div className="bg-[#2c0a35] rounded-md p-4 border border-[#ff0066]/10">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-[#3adc9d]">{incident.title}</h4>
                  <Badge
                    className={
                      incident.status === "resolved"
                        ? "bg-green-500/20 text-green-300"
                        : incident.status === "pending"
                          ? "bg-yellow-500/20 text-yellow-300"
                          : "bg-red-500/20 text-red-300"
                    }
                  >
                    {incident.status === "resolved"
                      ? "Resolved"
                      : incident.status === "pending"
                        ? "In Progress"
                        : "Critical"}
                  </Badge>
                </div>

                <p className="text-sm text-[#3adc9d] mb-3">{incident.description}</p>

                <div className="flex items-center text-xs text-[#3adc9d] gap-4">
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {incident.time}, {incident.date}
                  </div>

                  <div className="flex items-center gap-1">
                    <AlertCircle className="h-3 w-3 text-[#ff0066]" />
                    Detected in {incident.detectionTime}
                  </div>

                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    {incident.resolutionTime}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
