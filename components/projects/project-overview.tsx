"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Activity } from "lucide-react"

export default function ProjectOverview() {
  return (
    <motion.section
      className="space-y-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Card className="bg-[#1a1a24]/80 border-[#6e3adc]/20 backdrop-blur-sm overflow-hidden rounded-xl shadow-[0_8px_30px_rgb(110,58,220,0.1)]">
        <CardContent className="p-8">
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-white mb-2">Project Overview</h2>
              <p className="text-lg text-[#3adc9d] leading-relaxed font-light">
                Implemented SIEM Optimization using Splunk and Microsoft Sentinel to improve Advanced Persistent Threat
                (APT) detection by 15%. Developed customized KQL/SPL queries following the MITRE ATT&CK framework to
                reduce response times and improve incident resolution.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#6e3adc]/10">
                    <Shield className="h-5 w-5 text-[#6e3adc]" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Key Achievements</h3>
                </div>
                <ul className="space-y-3">
                  <motion.li
                    className="flex items-start gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <span className="text-[#FF0066] mt-1">•</span>
                    <span className="text-white">
                      Enhanced threat detection capabilities with custom detection rules aligned with MITRE ATT&CK
                      framework
                    </span>
                  </motion.li>
                  <motion.li
                    className="flex items-start gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <span className="text-[#FF0066] mt-1">•</span>
                    <span className="text-white">
                      Reduced Mean Time to Detect (MTTD) by 30% through optimized correlation rules
                    </span>
                  </motion.li>
                  <motion.li
                    className="flex items-start gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <span className="text-[#FF0066] mt-1">•</span>
                    <span className="text-white">
                      Implemented automated response playbooks for common security incidents
                    </span>
                  </motion.li>
                  <motion.li
                    className="flex items-start gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <span className="text-[#FF0066] mt-1">•</span>
                    <span className="text-white">
                      Increased SOC efficiency by 25% through streamlined workflows and automation
                    </span>
                  </motion.li>
                </ul>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#3a8ddc]/10">
                    <Activity className="h-5 w-5 text-[#3a8ddc]" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Performance Impact</h3>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#121218]/50 p-4 rounded-lg border border-[#6e3adc]/10 transform transition-transform hover:scale-105 hover:border-[#6e3adc]/30">
                    <div className="text-[#FF0066] text-2xl font-bold">15%</div>
                    <div className="text-white text-sm">Improved APT Detection</div>
                  </div>
                  <div className="bg-[#121218]/50 p-4 rounded-lg border border-[#6e3adc]/10 transform transition-transform hover:scale-105 hover:border-[#6e3adc]/30">
                    <div className="text-[#3a8ddc] text-2xl font-bold">30%</div>
                    <div className="text-white text-sm">Reduced MTTD</div>
                  </div>
                  <div className="bg-[#121218]/50 p-4 rounded-lg border border-[#6e3adc]/10 transform transition-transform hover:scale-105 hover:border-[#6e3adc]/30">
                    <div className="text-[#6e3adc] text-2xl font-bold">25%</div>
                    <div className="text-white text-sm">SOC Efficiency</div>
                  </div>
                  <div className="bg-[#121218]/50 p-4 rounded-lg border border-[#6e3adc]/10 transform transition-transform hover:scale-105 hover:border-[#6e3adc]/30">
                    <div className="text-[#3adc9d] text-2xl font-bold">40%</div>
                    <div className="text-white text-sm">Alert Accuracy</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-4">
              <Badge className="bg-[#6e3adc] hover:bg-[#6e3adc]/80">SIEM</Badge>
              <Badge className="bg-[#3a8ddc] hover:bg-[#3a8ddc]/80">Splunk</Badge>
              <Badge className="bg-[#FF0066] hover:bg-[#FF0066]/80">Microsoft Sentinel</Badge>
              <Badge className="bg-[#6e3adc] hover:bg-[#6e3adc]/80">MITRE ATT&CK</Badge>
              <Badge className="bg-[#3adc9d] hover:bg-[#3adc9d]/80">Threat Detection</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.section>
  )
}
