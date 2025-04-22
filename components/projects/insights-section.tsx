"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Lightbulb, TrendingUp, AlertTriangle, CheckCircle, BarChart2, PieChart } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function InsightsSection() {
  const [expandedInsight, setExpandedInsight] = useState<string | null>(null)

  const toggleInsight = (id: string) => {
    setExpandedInsight(expandedInsight === id ? null : id)
  }

  return (
    <motion.section
      className="space-y-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-3">Advanced Security Insights</h2>
        <p className="text-lg text-[#3adc9d] max-w-2xl mx-auto font-light leading-relaxed">
          In-depth analysis and actionable intelligence from SIEM data
        </p>
      </div>

      <Tabs defaultValue="trends" className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-[#0a0d1e] border border-[#FF0066]/20 rounded-lg p-1 mb-6">
          <TabsTrigger
            value="trends"
            className="data-[state=active]:bg-[#FF0066]/20 data-[state=active]:text-[#FF0066] rounded-md"
          >
            <TrendingUp className="h-4 w-4 mr-2" />
            Threat Trends
          </TabsTrigger>
          <TabsTrigger
            value="recommendations"
            className="data-[state=active]:bg-[#FF0066]/20 data-[state=active]:text-[#FF0066] rounded-md"
          >
            <Lightbulb className="h-4 w-4 mr-2" />
            Recommendations
          </TabsTrigger>
          <TabsTrigger
            value="vulnerabilities"
            className="data-[state=active]:bg-[#FF0066]/20 data-[state=active]:text-[#FF0066] rounded-md"
          >
            <AlertTriangle className="h-4 w-4 mr-2" />
            Vulnerabilities
          </TabsTrigger>
        </TabsList>

        <TabsContent value="trends">
          <Card className="bg-[#0f1631]/80 border-[#FF0066]/20 backdrop-blur-sm rounded-xl overflow-hidden shadow-[0_8px_30px_rgb(255,0,102,0.1)]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <TrendingUp className="h-5 w-5 text-[#FF0066]" />
                Emerging Threat Patterns
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1" className="border-[#FF0066]/20">
                    <AccordionTrigger className="hover:bg-[#FF0066]/10 px-4 rounded-lg text-white">
                      <div className="flex items-center gap-2">
                        <div className="p-1.5 rounded-full bg-[#FF0066]/20">
                          <BarChart2 className="h-4 w-4 text-[#FF0066]" />
                        </div>
                        <span>Increase in Lateral Movement Attempts</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4">
                      <div className="bg-[#0a0d1e]/50 p-4 rounded-lg border border-[#FF0066]/10">
                        <p className="text-white mb-3">
                          Analysis shows a 27% increase in lateral movement attempts following initial compromise,
                          particularly targeting privileged accounts.
                        </p>
                        <div className="flex items-center gap-2 text-sm text-[#3adc9d]">
                          <CheckCircle className="h-4 w-4" />
                          <span>Mitigated through enhanced network segmentation and privileged access management</span>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2" className="border-[#6e3adc]/20">
                    <AccordionTrigger className="hover:bg-[#6e3adc]/10 px-4 rounded-lg">
                      <div className="flex items-center gap-2">
                        <div className="p-1.5 rounded-full bg-[#3a8ddc]/20">
                          <PieChart className="h-4 w-4 text-[#3a8ddc]" />
                        </div>
                        <span>Shift in Attack Vectors</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4">
                      <div className="bg-[#0a0d1e]/50 p-4 rounded-lg border border-[#6e3adc]/10">
                        <p className="text-white/80 mb-3">
                          Data indicates a shift from traditional phishing to supply chain compromise attempts, with a
                          35% increase in third-party application exploitation.
                        </p>
                        <div className="flex items-center gap-2 text-sm text-[#3a8ddc]">
                          <AlertTriangle className="h-4 w-4" />
                          <span>Recommended action: Implement enhanced vendor security assessment protocols</span>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3" className="border-[#6e3adc]/20">
                    <AccordionTrigger className="hover:bg-[#6e3adc]/10 px-4 rounded-lg">
                      <div className="flex items-center gap-2">
                        <div className="p-1.5 rounded-full bg-[#3adc9d]/20">
                          <TrendingUp className="h-4 w-4 text-[#3adc9d]" />
                        </div>
                        <span>Evolving Evasion Techniques</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4">
                      <div className="bg-[#0a0d1e]/50 p-4 rounded-lg border border-[#6e3adc]/10">
                        <p className="text-white/80 mb-3">
                          Advanced threat actors are increasingly using fileless malware and living-off-the-land
                          techniques to evade traditional detection methods.
                        </p>
                        <div className="flex items-center gap-2 text-sm text-[#3adc9d]">
                          <CheckCircle className="h-4 w-4" />
                          <span>Addressed through behavior-based detection rules and enhanced memory analysis</span>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="recommendations">
          <Card className="bg-[#0f1631]/80 border-[#6e3adc]/20 backdrop-blur-sm rounded-xl overflow-hidden shadow-[0_8px_30px_rgb(110,58,220,0.1)]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-[#3adc9d]" />
                Security Optimization Recommendations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.div
                  className="bg-[#0a0d1e]/50 p-4 rounded-lg border border-[#6e3adc]/10 hover:border-[#6e3adc]/30 transition-all cursor-pointer"
                  whileHover={{ scale: 1.02, translateZ: 5 }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-full bg-[#3adc9d]/20">
                      <CheckCircle className="h-5 w-5 text-[#3adc9d]" />
                    </div>
                    <h3 className="font-medium">Enhanced Detection Rules</h3>
                  </div>
                  <p className="text-white/70 text-sm">
                    Implement additional MITRE ATT&CK-aligned detection rules for credential access and privilege
                    escalation techniques.
                  </p>
                  <div className="mt-3 text-xs text-[#3adc9d]">High Impact | Medium Effort</div>
                </motion.div>

                <motion.div
                  className="bg-[#0a0d1e]/50 p-4 rounded-lg border border-[#6e3adc]/10 hover:border-[#6e3adc]/30 transition-all cursor-pointer"
                  whileHover={{ scale: 1.02, translateZ: 5 }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-full bg-[#3a8ddc]/20">
                      <CheckCircle className="h-5 w-5 text-[#3a8ddc]" />
                    </div>
                    <h3 className="font-medium">Correlation Rule Tuning</h3>
                  </div>
                  <p className="text-white/70 text-sm">
                    Optimize existing correlation rules to reduce false positives by 25% while maintaining detection
                    coverage.
                  </p>
                  <div className="mt-3 text-xs text-[#3a8ddc]">Medium Impact | Low Effort</div>
                </motion.div>

                <motion.div
                  className="bg-[#0a0d1e]/50 p-4 rounded-lg border border-[#6e3adc]/10 hover:border-[#6e3adc]/30 transition-all cursor-pointer"
                  whileHover={{ scale: 1.02, translateZ: 5 }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-full bg-[#6e3adc]/20">
                      <CheckCircle className="h-5 w-5 text-[#6e3adc]" />
                    </div>
                    <h3 className="font-medium">Automated Response Playbooks</h3>
                  </div>
                  <p className="text-white/70 text-sm">
                    Develop additional automated response playbooks for common incident types to reduce manual
                    intervention.
                  </p>
                  <div className="mt-3 text-xs text-[#6e3adc]">High Impact | High Effort</div>
                </motion.div>

                <motion.div
                  className="bg-[#0a0d1e]/50 p-4 rounded-lg border border-[#6e3adc]/10 hover:border-[#6e3adc]/30 transition-all cursor-pointer"
                  whileHover={{ scale: 1.02, translateZ: 5 }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-full bg-[#3adc9d]/20">
                      <CheckCircle className="h-5 w-5 text-[#3adc9d]" />
                    </div>
                    <h3 className="font-medium">Log Source Integration</h3>
                  </div>
                  <p className="text-white/70 text-sm">
                    Integrate additional log sources from cloud infrastructure to improve visibility and detection
                    capabilities.
                  </p>
                  <div className="mt-3 text-xs text-[#3adc9d]">Medium Impact | Medium Effort</div>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="vulnerabilities">
          <Card className="bg-[#0f1631]/80 border-[#6e3adc]/20 backdrop-blur-sm rounded-xl overflow-hidden shadow-[0_8px_30px_rgb(110,58,220,0.1)]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-[#ff7a45]" />
                Identified Vulnerabilities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-[#0a0d1e]/50 p-4 rounded-lg border border-[#ff4d4f]/20 hover:border-[#ff4d4f]/40 transition-all">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-1.5 rounded-full bg-[#ff4d4f]/20">
                        <AlertTriangle className="h-4 w-4 text-[#ff4d4f]" />
                      </div>
                      <h3 className="font-medium">Critical: Log4j Vulnerability (CVE-2021-44228)</h3>
                    </div>
                    <div className="text-xs px-2 py-1 rounded bg-[#ff4d4f]/20 text-[#ff4d4f]">CVSS: 10.0</div>
                  </div>
                  <p className="mt-3 text-white/70 text-sm">
                    Remote code execution vulnerability in Log4j library affecting multiple internal applications.
                    Exploitation attempts detected.
                  </p>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="text-xs text-[#ff4d4f]">Remediation Priority: Critical</div>
                    <div className="text-xs text-white/60">Affected Systems: 12</div>
                  </div>
                </div>

                <div className="bg-[#0a0d1e]/50 p-4 rounded-lg border border-[#ff7a45]/20 hover:border-[#ff7a45]/40 transition-all">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-1.5 rounded-full bg-[#ff7a45]/20">
                        <AlertTriangle className="h-4 w-4 text-[#ff7a45]" />
                      </div>
                      <h3 className="font-medium">High: Outdated VPN Software</h3>
                    </div>
                    <div className="text-xs px-2 py-1 rounded bg-[#ff7a45]/20 text-[#ff7a45]">CVSS: 8.2</div>
                  </div>
                  <p className="mt-3 text-white/70 text-sm">
                    Multiple VPN endpoints running outdated software versions with known vulnerabilities. No active
                    exploitation detected.
                  </p>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="text-xs text-[#ff7a45]">Remediation Priority: High</div>
                    <div className="text-xs text-white/60">Affected Systems: 5</div>
                  </div>
                </div>

                <div className="bg-[#0a0d1e]/50 p-4 rounded-lg border border-[#ffc53d]/20 hover:border-[#ffc53d]/40 transition-all">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-1.5 rounded-full bg-[#ffc53d]/20">
                        <AlertTriangle className="h-4 w-4 text-[#ffc53d]" />
                      </div>
                      <h3 className="font-medium">Medium: Weak Password Policies</h3>
                    </div>
                    <div className="text-xs px-2 py-1 rounded bg-[#ffc53d]/20 text-[#ffc53d]">CVSS: 6.5</div>
                  </div>
                  <p className="mt-3 text-white/70 text-sm">
                    Password policies not enforcing sufficient complexity requirements on non-critical systems.
                  </p>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="text-xs text-[#ffc53d]">Remediation Priority: Medium</div>
                    <div className="text-xs text-white/60">Affected Systems: 28</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </motion.section>
  )
}
