"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const certifications = [
  {
    name: "Splunk Certified",
    icon: "/placeholder.svg?height=60&width=60",
    issueDate: "Jan 2023",
    expiryDate: "Jan 2026",
  },
  {
    name: "Microsoft Certified: Azure Security Engineer",
    icon: "/placeholder.svg?height=60&width=60",
    issueDate: "Mar 2023",
    expiryDate: "Mar 2025",
  },
  {
    name: "CompTIA CySA+",
    icon: "/placeholder.svg?height=60&width=60",
    issueDate: "Nov 2022",
    expiryDate: "Nov 2025",
  },
  {
    name: "MITRE ATT&CK Specialist",
    icon: "/placeholder.svg?height=60&width=60",
    issueDate: "Apr 2023",
    expiryDate: "Apr 2026",
  },
]

const skills = [
  "Splunk",
  "Microsoft Sentinel",
  "MITRE ATT&CK",
  "KQL",
  "SPL",
  "Python",
  "Threat Detection",
  "Incident Response",
  "Security Automation",
  "Cloud Security",
  "Log Analysis",
  "SIEM",
  "SOAR",
  "Threat Intelligence",
  "Compliance Frameworks",
]

export default function CertificationsSkills() {
  return (
    <motion.section
      className="space-y-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.9 }}
    >
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Certifications & Skills</h2>
        <p className="text-lg text-white/70 max-w-2xl mx-auto">Professional qualifications and technical expertise</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="bg-[#2c0a35]/80 border-[#FF0066]/20 backdrop-blur-sm">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-4">Certifications</h3>
            <div className="space-y-4">
              {certifications.map((cert) => (
                <motion.div
                  key={cert.name}
                  className="flex items-center gap-4 p-3 bg-[#1e0d3e] rounded-md border border-[#FF0066]/10"
                  whileHover={{ x: 5, borderColor: "rgba(255, 0, 102, 0.3)" }}
                >
                  <div className="bg-white rounded-full p-2 flex-shrink-0">
                    <Image
                      src={cert.icon || "/placeholder.svg"}
                      alt={cert.name}
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">{cert.name}</h4>
                    <p className="text-xs text-white/60">
                      Issued: {cert.issueDate} • Expires: {cert.expiryDate}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#2c0a35]/80 border-[#FF0066]/20 backdrop-blur-sm">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-4">Technical Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 + 0.5 }}
                >
                  <Badge className="bg-[#FF0066]/20 hover:bg-[#FF0066]/40 text-white cursor-pointer px-3 py-1 text-sm font-medium transition-all hover:scale-105">
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.section>
  )
}
