"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Download, FileText, CheckCircle2, Calendar, Shield, FileBarChart } from "lucide-react"

const reports = [
  {
    id: 1,
    name: "GDPR Compliance Report",
    description: "Security controls assessment for GDPR compliance",
    size: "4.2 MB",
    type: "PDF",
    icon: Shield,
  },
  {
    id: 2,
    name: "NIST 800-53 Assessment",
    description: "Evaluation against NIST 800-53 security controls",
    size: "6.8 MB",
    type: "PDF",
    icon: FileBarChart,
  },
  {
    id: 3,
    name: "ISO 27001 Compliance",
    description: "Security controls mapped to ISO 27001 requirements",
    size: "5.1 MB",
    type: "PDF",
    icon: Shield,
  },
  {
    id: 4,
    name: "PCI DSS Compliance Report",
    description: "Assessment of PCI DSS security requirements",
    size: "3.9 MB",
    type: "PDF",
    icon: FileText,
  },
  {
    id: 5,
    name: "Monthly Threat Intelligence",
    description: "Summary of detected threats and mitigations",
    size: "3.5 MB",
    type: "PDF",
    icon: Calendar,
  },
]

export default function ComplianceReports() {
  const [downloading, setDownloading] = useState<number | null>(null)
  const [progress, setProgress] = useState(0)
  const [completed, setCompleted] = useState<number[]>([])

  const handleDownload = (id: number) => {
    setDownloading(id)
    setProgress(0)

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            setCompleted((prev) => [...prev, id])
            setDownloading(null)
          }, 500)
          return 100
        }
        return prev + 5
      })
    }, 100)
  }

  return (
    <motion.section
      className="space-y-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.8 }}
    >
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Automated Compliance Reports</h2>
        <p className="text-lg text-white/70 max-w-2xl mx-auto">Generate and download compliance and security reports</p>
      </div>

      <Card className="bg-[#2c0a35]/80 border-[#FF0066]/20 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>Compliance Report Generator</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {reports.map((report) => (
              <motion.div
                key={report.id}
                className="flex flex-col p-4 rounded-md bg-[#1e0d3e] border border-[#FF0066]/10 hover:border-[#FF0066]/30 transition-all"
                whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(255, 0, 102, 0.3)" }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <report.icon className="h-8 w-8 text-[#FF0066]" />
                  <div>
                    <h4 className="font-medium">{report.name}</h4>
                    <p className="text-sm text-white/70">{report.description}</p>
                  </div>
                </div>

                <div className="mt-auto pt-4">
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-white/60">
                      {report.size} • {report.type}
                    </p>

                    {downloading === report.id ? (
                      <div className="w-40">
                        <Progress value={progress} className="h-2 w-full" indicatorClassName="bg-[#FF0066]" />
                        <p className="text-xs text-white/60 mt-1 text-right">{progress}%</p>
                      </div>
                    ) : completed.includes(report.id) ? (
                      <Button variant="ghost" size="sm" className="gap-2" disabled>
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        Downloaded
                      </Button>
                    ) : (
                      <Button
                        variant="outline"
                        size="sm"
                        className="gap-2 hover:bg-[#FF0066]/20 hover:text-white"
                        onClick={() => handleDownload(report.id)}
                      >
                        <Download className="h-4 w-4" />
                        Download
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.section>
  )
}
