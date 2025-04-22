"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Download, FileText, CheckCircle2 } from "lucide-react"

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
    name: "ISO 27001 Compliance",
    description: "Security controls mapped to ISO 27001 requirements",
    size: "5.1 MB",
    type: "PDF",
  },
  {
    id: 4,
    name: "PCI DSS Compliance Report",
    description: "Assessment of PCI DSS security requirements",
    size: "3.9 MB",
    type: "PDF",
  },
]

export default function ReportsSection() {
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
    <section className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Interactive Reports</h2>
        <p className="text-lg text-white/70 max-w-2xl mx-auto">
          Automated compliance and security reports generated from the SIEM implementation
        </p>
      </div>

      <Card className="bg-[#3a1045]/80 border-[#FF0066]/20 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>Compliance Report Generator</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {reports.map((report) => (
              <div
                key={report.id}
                className="flex flex-col p-4 rounded-md bg-[#2c0a35] border border-[#FF0066]/10 hover:border-[#FF0066]/30 transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <FileText className="h-8 w-8 text-[#FF0066]" />
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
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
