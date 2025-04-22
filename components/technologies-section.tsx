"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import FingerprintScan from "@/components/fingerprint-scan"
import { motion } from "framer-motion"

export default function TechnologiesSection() {
  return (
    <Card className="bg-[#1a0d20] border-[#ff0066]/20">
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-6 text-[#3adc9d]">Key Technologies Used</h3>

        <Tabs defaultValue="splunk" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-[#2c0a35] text-[#3adc9d]">
            <TabsTrigger value="splunk" className="text-[#3adc9d] data-[state=active]:text-[#ff0066]">
              Splunk
            </TabsTrigger>
            <TabsTrigger value="sentinel" className="text-[#3adc9d] data-[state=active]:text-[#ff0066]">
              Microsoft Sentinel
            </TabsTrigger>
            <TabsTrigger value="mitre" className="text-[#3adc9d] data-[state=active]:text-[#ff0066]">
              MITRE ATT&CK
            </TabsTrigger>
          </TabsList>

          <TabsContent value="splunk" className="mt-6">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-full md:w-1/3 flex justify-center">
                <motion.div
                  className="relative w-40 h-40 bg-[#2c0a35] rounded-full p-4 flex items-center justify-center"
                  whileHover={{ scale: 1.05, rotateY: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <FingerprintScan size={150} color="#ff0066" scanColor="#3adc9d" />
                </motion.div>
              </div>
              <div className="w-full md:w-2/3">
                <h4 className="text-lg font-medium mb-2 text-[#ff0066]">Splunk Enterprise Security</h4>
                <p className="text-[#3adc9d] mb-4">
                  Utilized Splunk for real-time monitoring and analysis of security events across the organization's
                  infrastructure.
                </p>
                <ul className="list-disc list-inside space-y-1 text-[#3adc9d]">
                  <li>Developed custom SPL queries to detect sophisticated attack patterns</li>
                  <li>Created correlation searches to identify multi-stage attacks</li>
                  <li>Implemented dashboards for SOC analysts to visualize threat landscapes</li>
                </ul>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="sentinel" className="mt-6">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-full md:w-1/3 flex justify-center">
                <motion.div
                  className="relative w-40 h-40 bg-[#2c0a35] rounded-full p-4 flex items-center justify-center"
                  whileHover={{ scale: 1.05, rotateY: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <FingerprintScan size={150} color="#3a8ddc" scanColor="#3adc9d" />
                </motion.div>
              </div>
              <div className="w-full md:w-2/3">
                <h4 className="text-lg font-medium mb-2 text-[#ff0066]">Microsoft Sentinel</h4>
                <p className="text-[#3adc9d] mb-4">
                  Leveraged Microsoft Sentinel's cloud-native SIEM capabilities to enhance threat detection and incident
                  response.
                </p>
                <ul className="list-disc list-inside space-y-1 text-[#3adc9d]">
                  <li>Developed KQL queries for advanced threat hunting</li>
                  <li>Implemented automated playbooks for incident response</li>
                  <li>Integrated with Microsoft 365 Defender for comprehensive security coverage</li>
                </ul>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="mitre" className="mt-6">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-full md:w-1/3 flex justify-center">
                <motion.div
                  className="relative w-40 h-40 bg-[#2c0a35] rounded-full p-4 flex items-center justify-center"
                  whileHover={{ scale: 1.05, rotateY: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <FingerprintScan size={150} color="#6e3adc" scanColor="#3adc9d" />
                </motion.div>
              </div>
              <div className="w-full md:w-2/3">
                <h4 className="text-lg font-medium mb-2 text-[#ff0066]">MITRE ATT&CK Framework</h4>
                <p className="text-[#3adc9d] mb-4">
                  Applied the MITRE ATT&CK framework to map detection capabilities and identify coverage gaps.
                </p>
                <ul className="list-disc list-inside space-y-1 text-[#3adc9d]">
                  <li>Mapped existing detection rules to MITRE ATT&CK tactics and techniques</li>
                  <li>Identified and addressed coverage gaps for specific attack techniques</li>
                  <li>Developed new detection rules based on adversary behaviors</li>
                </ul>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
