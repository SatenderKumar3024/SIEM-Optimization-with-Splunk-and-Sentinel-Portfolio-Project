"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, FileText, CheckCircle2 } from "lucide-react"
import { Progress } from "@/components/ui/progress"

const reports = [
  {
    id: 1,
    name: "GDPR Compliance Report",
    description: "Security controls assessment for GDPR compliance",
    size: "4.2 MB",
    type: "PDF",
  },
  {
    id: 2,
    name: "NIST 800-53 Assessment",
    description: "Evaluation against NIST 800-53 security controls",
    size: "6.8 MB",
    type: "PDF",
  },
  {
    id: 3,
    name: "Monthly Threat Intelligence",
    description: "Summary of detected threats and mitigations",
    size: "3.5 MB",
    type: "PDF",
  },
]

export default function AutomationSection() {
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
        return prev + 10
      })
    }, 300)
  }

  return (
    <Card className="bg-[#1a0d20] border-[#ff0066]/20">
      <CardHeader>
        <CardTitle className="text-[#3adc9d]">Automated Security Reports</CardTitle>
        <CardDescription className="text-[#3adc9d]">
          Generate and download compliance and security reports
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {reports.map((report) => (
            <div
              key={report.id}
              className="flex items-center justify-between p-4 rounded-md bg-[#2c0a35] border border-[#ff0066]/10"
            >
              <div className="flex items-center gap-3">
                <FileText className="h-8 w-8 text-[#ff0066]" />
                <div>
                  <h4 className="font-medium text-[#3adc9d]">{report.name}</h4>
                  <p className="text-sm text-[#3adc9d]">{report.description}</p>
                  <p className="text-xs text-[#3adc9d] mt-1">
                    {report.size} • {report.type}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {downloading === report.id ? (
                  <div className="w-40">
                    <Progress value={progress} className="h-2 w-full" />
                    <p className="text-xs text-[#3adc9d] mt-1 text-right">{progress}%</p>
                  </div>
                ) : completed.includes(report.id) ? (
                  <Button variant="ghost" size="sm" className="gap-2 text-[#3adc9d]" disabled>
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    Downloaded
                  </Button>
                ) : (
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2 text-[#3adc9d] border-[#ff0066]/20 hover:bg-[#ff0066]/10"
                    onClick={() => handleDownload(report.id)}
                  >
                    <Download className="h-4 w-4" />
                    Download
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
