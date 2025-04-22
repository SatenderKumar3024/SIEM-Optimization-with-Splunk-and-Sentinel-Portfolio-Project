"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/use-toast"

const splQuery = `
| search sourcetype="windows:eventlog:security" EventCode=4625
| stats count by src_ip, user
| where count > 10
| sort -count
| rename src_ip as "Source IP", user as "Username", count as "Failed Attempts"
| table "Source IP", "Username", "Failed Attempts"
`

const kqlQuery = `
SecurityEvent
| where EventID == 4625
| summarize FailedAttempts = count() by SourceIP = IpAddress, Account
| where FailedAttempts > 10
| order by FailedAttempts desc
| project SourceIP, Account, FailedAttempts
`

const pythonCode = `
import pandas as pd
import matplotlib.pyplot as plt
from datetime import datetime, timedelta

# Load SIEM data from CSV export
df = pd.read_csv('siem_alerts.csv')

# Convert timestamp to datetime
df['timestamp'] = pd.to_datetime(df['timestamp'])

# Filter for last 30 days
start_date = datetime.now() - timedelta(days=30)
df_filtered = df[df['timestamp'] >= start_date]

# Group by MITRE ATT&CK technique
technique_counts = df_filtered.groupby('mitre_technique').size().reset_index(name='count')
technique_counts = technique_counts.sort_values('count', ascending=False).head(10)

# Create bar chart
plt.figure(figsize=(12, 6))
plt.bar(technique_counts['mitre_technique'], technique_counts['count'], color='purple')
plt.title('Top 10 MITRE ATT&CK Techniques (Last 30 Days)')
plt.xlabel('Technique ID')
plt.ylabel('Alert Count')
plt.xticks(rotation=45)
plt.tight_layout()
plt.savefig('mitre_techniques.png')
plt.show()
`

export default function CodeSnippets() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text)
    setCopiedIndex(index)

    toast({
      title: "Copied to clipboard",
      description: "Code snippet has been copied to your clipboard.",
    })

    setTimeout(() => setCopiedIndex(null), 2000)
  }

  return (
    <motion.section
      className="space-y-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.7 }}
    >
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Code Snippets</h2>
        <p className="text-lg text-white/70 max-w-2xl mx-auto">
          Sample queries and scripts used in the SIEM optimization project
        </p>
      </div>

      <Card className="bg-[#2c0a35]/80 border-[#FF0066]/20 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>Detection Queries & Automation Scripts</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="splunk" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="splunk">Splunk SPL</TabsTrigger>
              <TabsTrigger value="sentinel">Sentinel KQL</TabsTrigger>
              <TabsTrigger value="python">Python Automation</TabsTrigger>
            </TabsList>

            <TabsContent value="splunk">
              <div className="relative">
                <pre className="bg-[#1e0d3e] p-4 rounded-md overflow-x-auto text-white/90 font-mono text-sm">
                  {splQuery}
                </pre>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 opacity-70 hover:opacity-100"
                  onClick={() => copyToClipboard(splQuery, 0)}
                >
                  {copiedIndex === 0 ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
              <div className="mt-4 text-sm text-white/70">
                <p>
                  This SPL query identifies potential brute force attacks by finding source IPs with more than 10 failed
                  login attempts.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="sentinel">
              <div className="relative">
                <pre className="bg-[#1e0d3e] p-4 rounded-md overflow-x-auto text-white/90 font-mono text-sm">
                  {kqlQuery}
                </pre>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 opacity-70 hover:opacity-100"
                  onClick={() => copyToClipboard(kqlQuery, 1)}
                >
                  {copiedIndex === 1 ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
              <div className="mt-4 text-sm text-white/70">
                <p>
                  This KQL query for Microsoft Sentinel detects potential brute force attacks by identifying source IPs
                  with multiple failed login attempts.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="python">
              <div className="relative">
                <pre className="bg-[#1e0d3e] p-4 rounded-md overflow-x-auto text-white/90 font-mono text-sm">
                  {pythonCode}
                </pre>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 opacity-70 hover:opacity-100"
                  onClick={() => copyToClipboard(pythonCode, 2)}
                >
                  {copiedIndex === 2 ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
              <div className="mt-4 text-sm text-white/70">
                <p>
                  This Python script analyzes SIEM alert data to visualize the most common MITRE ATT&CK techniques
                  observed in the last 30 days.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </motion.section>
  )
}
