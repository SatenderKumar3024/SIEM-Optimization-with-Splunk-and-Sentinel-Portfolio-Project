"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { CheckCircle, Clock, AlertCircle, Shield, Filter } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// Sample incident data
const initialIncidents = [
  {
    id: 1,
    title: "Brute Force Attack",
    time: "10:15 AM",
    date: "June 15, 2023",
    status: "resolved",
    severity: "medium",
    description: "Multiple failed login attempts detected from IP 203.0.113.42",
    detectionTime: "2 minutes",
    resolutionTime: "17 minutes",
    details:
      "Attack originated from Eastern Europe targeting admin credentials. Blocked IP and enforced MFA for all admin accounts.",
    mitreTechniques: ["T1110.001", "T1110.002"],
    affectedSystems: ["Authentication Server", "VPN Gateway"],
  },
  {
    id: 2,
    title: "Data Exfiltration Attempt",
    time: "3:42 PM",
    date: "June 14, 2023",
    status: "resolved",
    severity: "high",
    description: "Unusual outbound data transfer detected to unknown IP",
    detectionTime: "5 minutes",
    resolutionTime: "28 minutes",
    details:
      "Detected large volume of data being transferred to an unknown IP address. Investigation revealed compromised user credentials. Account was locked and password reset enforced.",
    mitreTechniques: ["T1048", "T1567"],
    affectedSystems: ["File Server", "User Workstation"],
  },
  {
    id: 3,
    title: "Suspicious PowerShell Execution",
    time: "11:27 AM",
    date: "June 14, 2023",
    status: "pending",
    severity: "medium",
    description: "Encoded PowerShell command execution detected on server",
    detectionTime: "3 minutes",
    resolutionTime: "In progress",
    details:
      "Base64 encoded PowerShell commands detected on a production server. Initial analysis suggests potential credential harvesting attempt.",
    mitreTechniques: ["T1059.001", "T1027"],
    affectedSystems: ["Production Server"],
  },
  {
    id: 4,
    title: "Malware Detection",
    time: "9:05 AM",
    date: "June 13, 2023",
    status: "critical",
    severity: "critical",
    description: "Trojan detected on workstation in Finance department",
    detectionTime: "1 minute",
    resolutionTime: "Escalated",
    details:
      "Trojan.Emotet variant detected on finance department workstation. System isolated from network. Forensic investigation in progress.",
    mitreTechniques: ["T1566.001", "T1204.002"],
    affectedSystems: ["Finance Workstation", "Email Server"],
  },
]

export default function IncidentTimeline() {
  const [selectedIncident, setSelectedIncident] = useState(null)
  const [incidents, setIncidents] = useState(initialIncidents)
  const [statusFilter, setStatusFilter] = useState("all")

  // Filter incidents based on status
  const filteredIncidents =
    statusFilter === "all" ? incidents : incidents.filter((incident) => incident.status === statusFilter)

  // Simulate real-time incident updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Randomly update an incident status or add a new one
      const random = Math.random()

      if (random > 0.7) {
        // Add a new incident
        const newIncident = {
          id: incidents.length + 1,
          title: "New Security Alert",
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          date: new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
          status: "pending",
          severity: "medium",
          description: "New suspicious activity detected",
          detectionTime: "Just now",
          resolutionTime: "In progress",
          details: "Investigation in progress. Initial indicators suggest potential unauthorized access attempt.",
          mitreTechniques: ["T1078"],
          affectedSystems: ["Unknown"],
        }

        setIncidents((prev) => [newIncident, ...prev.slice(0, 3)])
      } else if (random > 0.4) {
        // Update an existing incident
        setIncidents((prev) =>
          prev.map((incident, index) => {
            if (index === 0 && incident.status === "pending") {
              return {
                ...incident,
                status: "resolved",
                resolutionTime: "5 minutes",
              }
            }
            return incident
          }),
        )
      }
    }, 15000) // Update every 15 seconds

    return () => clearInterval(interval)
  }, [incidents])

  return (
    <motion.section
      className="space-y-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <div className="text-center">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-[#6e3adc] to-[#3adc9d] text-transparent bg-clip-text">
          Real-Time Incident Timeline
        </h2>
        <p className="text-lg text-white/70 max-w-2xl mx-auto font-light">
          Live security incident tracking with detection and response metrics
        </p>
      </div>

      <Card className="bg-[#0f1631]/80 border-[#6e3adc]/20 backdrop-blur-sm rounded-xl overflow-hidden shadow-[0_8px_30px_rgb(110,58,220,0.1)]">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-[#6e3adc]" />
              Security Incident Timeline
            </CardTitle>
            <div className="flex items-center gap-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-[#6e3adc]/30 hover:border-[#6e3adc]/60 bg-[#0a0d1e]/50"
                  >
                    <Filter className="h-4 w-4 mr-2" />
                    {statusFilter === "all"
                      ? "All Incidents"
                      : statusFilter === "resolved"
                        ? "Resolved"
                        : statusFilter === "pending"
                          ? "In Progress"
                          : "Critical"}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-[#0f1631] border-[#6e3adc]/30">
                  <DropdownMenuLabel>Filter By Status</DropdownMenuLabel>
                  <DropdownMenuSeparator className="bg-[#6e3adc]/20" />
                  <DropdownMenuItem
                    className="hover:bg-[#6e3adc]/20 cursor-pointer"
                    onClick={() => setStatusFilter("all")}
                  >
                    All Incidents
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="hover:bg-[#6e3adc]/20 cursor-pointer"
                    onClick={() => setStatusFilter("resolved")}
                  >
                    Resolved
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="hover:bg-[#6e3adc]/20 cursor-pointer"
                    onClick={() => setStatusFilter("pending")}
                  >
                    In Progress
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="hover:bg-[#6e3adc]/20 cursor-pointer"
                    onClick={() => setStatusFilter("critical")}
                  >
                    Critical
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-[#3adc9d] animate-pulse"></div>
                <span className="text-sm text-[#3adc9d]">Live Updates</span>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="relative pl-6 border-l border-[#6e3adc]/30">
            {filteredIncidents.map((incident, index) => (
              <motion.div
                key={incident.id}
                className="mb-6"
                initial={index === 0 ? { opacity: 0, x: -20 } : {}}
                animate={index === 0 ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5 }}
              >
                <div className="absolute -left-[9px]">
                  {incident.status === "resolved" ? (
                    <div className="w-4 h-4 rounded-full bg-[#3adc9d] border-2 border-[#0f1631]" />
                  ) : incident.status === "pending" ? (
                    <div className="w-4 h-4 rounded-full bg-[#ffc53d] border-2 border-[#0f1631]" />
                  ) : (
                    <div className="w-4 h-4 rounded-full bg-[#ff4d4f] border-2 border-[#0f1631]" />
                  )}
                </div>

                <motion.div
                  className="bg-[#0a0d1e]/80 rounded-lg p-4 border border-[#6e3adc]/10 hover:border-[#6e3adc]/30 transition-all cursor-pointer transform hover:translate-y-[-2px] hover:shadow-[0_8px_30px_rgb(110,58,220,0.15)]"
                  onClick={() => setSelectedIncident(incident)}
                  whileHover={{ scale: 1.02, translateZ: 5 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium">{incident.title}</h4>
                    <Badge
                      className={
                        incident.status === "resolved"
                          ? "bg-[#3adc9d]/20 text-[#3adc9d]"
                          : incident.status === "pending"
                            ? "bg-[#ffc53d]/20 text-[#ffc53d]"
                            : "bg-[#ff4d4f]/20 text-[#ff4d4f]"
                      }
                    >
                      {incident.status === "resolved"
                        ? "Resolved"
                        : incident.status === "pending"
                          ? "In Progress"
                          : "Critical"}
                    </Badge>
                  </div>

                  <p className="text-sm text-white/70 mb-3">{incident.description}</p>

                  <div className="flex items-center text-xs text-white/60 gap-4">
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {incident.time}, {incident.date}
                    </div>

                    <div className="flex items-center gap-1">
                      <AlertCircle className="h-3 w-3 text-[#6e3adc]" />
                      Detected in {incident.detectionTime}
                    </div>

                    <div className="flex items-center gap-1">
                      <CheckCircle className="h-3 w-3 text-[#3adc9d]" />
                      {incident.resolutionTime}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Dialog open={!!selectedIncident} onOpenChange={(open) => !open && setSelectedIncident(null)}>
        <DialogContent className="bg-[#0f1631] border-[#6e3adc]/20 text-white max-w-3xl rounded-xl">
          {selectedIncident && (
            <>
              <DialogHeader>
                <div className="flex items-center justify-between">
                  <DialogTitle className="text-xl">{selectedIncident.title}</DialogTitle>
                  <Badge
                    className={
                      selectedIncident.severity === "low"
                        ? "bg-[#3a8ddc]/20 text-[#3a8ddc]"
                        : selectedIncident.severity === "medium"
                          ? "bg-[#ffc53d]/20 text-[#ffc53d]"
                          : selectedIncident.severity === "high"
                            ? "bg-[#ff7a45]/20 text-[#ff7a45]"
                            : "bg-[#ff4d4f]/20 text-[#ff4d4f]"
                    }
                  >
                    {selectedIncident.severity.charAt(0).toUpperCase() + selectedIncident.severity.slice(1)} Severity
                  </Badge>
                </div>
                <DialogDescription className="text-white/70">
                  {selectedIncident.time}, {selectedIncident.date}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#0a0d1e]/80 p-3 rounded-lg border border-[#6e3adc]/10">
                    <div className="text-sm text-white/60 mb-1">Detection Time</div>
                    <div className="font-medium flex items-center gap-2">
                      <AlertCircle className="h-4 w-4 text-[#6e3adc]" />
                      {selectedIncident.detectionTime}
                    </div>
                  </div>
                  <div className="bg-[#0a0d1e]/80 p-3 rounded-lg border border-[#6e3adc]/10">
                    <div className="text-sm text-white/60 mb-1">Resolution Time</div>
                    <div className="font-medium flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-[#3adc9d]" />
                      {selectedIncident.resolutionTime}
                    </div>
                  </div>
                </div>

                <div className="bg-[#0a0d1e]/80 p-4 rounded-lg border border-[#6e3adc]/10">
                  <h4 className="font-medium mb-2">Incident Details</h4>
                  <p className="text-white/80">{selectedIncident.details}</p>
                </div>

                <div className="bg-[#0a0d1e]/80 p-4 rounded-lg border border-[#6e3adc]/10">
                  <h4 className="font-medium mb-2">MITRE ATT&CK Techniques</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedIncident.mitreTechniques.map((technique) => (
                      <Badge key={technique} className="bg-[#6e3adc]/20 hover:bg-[#6e3adc]/30 text-[#6e3adc]">
                        {technique}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="bg-[#0a0d1e]/80 p-4 rounded-lg border border-[#6e3adc]/10">
                  <h4 className="font-medium mb-2">Affected Systems</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedIncident.affectedSystems.map((system) => (
                      <Badge key={system} variant="outline" className="border-white/20">
                        {system}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <Button variant="default" className="bg-[#6e3adc] hover:bg-[#6e3adc]/80">
                  View Full Report
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </motion.section>
  )
}
