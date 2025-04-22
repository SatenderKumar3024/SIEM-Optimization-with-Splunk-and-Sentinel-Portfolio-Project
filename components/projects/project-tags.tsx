"use client"

import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

export default function ProjectTags() {
  const tags = [
    "Splunk",
    "Sentinel",
    "MITRE ATT&CK",
    "SIEM",
    "Python",
    "KQL",
    "SPL",
    "Threat Detection",
    "Incident Response",
    "Security Automation",
    "APT Detection",
    "SOC Optimization",
  ]

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold text-white text-center mb-6">Project Tags & Skills</h2>

      <div className="flex flex-wrap justify-center gap-3">
        {tags.map((tag, index) => (
          <motion.div
            key={tag}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <Badge className="bg-[#FF0066]/20 hover:bg-[#FF0066]/40 text-white cursor-pointer px-3 py-1 text-sm font-medium transition-all hover:scale-105">
              {tag}
            </Badge>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
