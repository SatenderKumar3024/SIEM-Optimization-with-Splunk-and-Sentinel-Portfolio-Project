"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import FingerprintScan from "@/components/fingerprint-scan"

const technologies = [
  {
    name: "Splunk",
    description:
      "Used for log management, alert generation, and custom SPL queries to detect sophisticated attack patterns.",
    icon: "/placeholder.svg?height=80&width=80",
    color: "#FF0066",
    features: [
      "Real-time log analysis and correlation",
      "Custom SPL queries for advanced threat detection",
      "Automated alert generation and incident response",
      "Dashboard visualization for security metrics",
    ],
    link: "https://www.splunk.com/",
  },
  {
    name: "Microsoft Sentinel",
    description:
      "Leveraged for cloud-native SIEM capabilities, KQL queries, and automated incident response playbooks.",
    icon: "/placeholder.svg?height=80&width=80",
    color: "#0078d4",
    features: [
      "Cloud-native SIEM and SOAR capabilities",
      "KQL queries for threat hunting",
      "Integration with Microsoft 365 Defender",
      "AI-powered threat detection",
    ],
    link: "https://azure.microsoft.com/en-us/services/microsoft-sentinel/",
  },
  {
    name: "MITRE ATT&CK",
    description:
      "Framework used to map detection capabilities, identify coverage gaps, and develop new detection rules based on adversary behaviors.",
    icon: "/placeholder.svg?height=80&width=80",
    color: "#c8102e",
    features: [
      "Comprehensive framework for threat modeling",
      "Tactics, techniques, and procedures (TTPs) mapping",
      "Gap analysis for detection coverage",
      "Threat intelligence integration",
    ],
    link: "https://attack.mitre.org/",
  },
]

export default function TechStack() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <motion.section
      className="space-y-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-3">Key Technologies Used</h2>
        <p className="text-xl text-[#3adc9d] max-w-2xl mx-auto font-light leading-relaxed">
          Advanced security tools and frameworks implemented in this project
        </p>
      </div>

      <Card className="bg-[#1a1a24]/80 border-[#6e3adc]/20 backdrop-blur-sm rounded-xl overflow-hidden">
        <CardContent className="p-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                className="relative"
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="w-40 h-40 bg-[#121218] rounded-xl p-4 flex items-center justify-center cursor-pointer transition-all border border-[#6e3adc]/20 hover:border-[#6e3adc]/50"
                  style={{
                    boxShadow: activeIndex === index ? `0 0 20px ${tech.color}40` : "none",
                  }}
                >
                  {index === 0 ? (
                    <FingerprintScan size={100} color="#FF0066" scanColor="#3adc9d" />
                  ) : (
                    <Image
                      src={tech.icon || "/placeholder.svg"}
                      alt={`${tech.name} Logo`}
                      width={80}
                      height={80}
                      className="object-contain"
                    />
                  )}
                </motion.div>

                <motion.div
                  className="text-center mt-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <h3 className="font-medium text-xl text-white">{tech.name}</h3>
                </motion.div>

                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-72 bg-[#121218] p-4 rounded-md border border-[#6e3adc]/20 z-10 shadow-lg shadow-[#6e3adc]/10"
                  >
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#121218] border-t border-l border-[#6e3adc]/20 rotate-45"></div>
                    <h4 className="font-medium mb-2 text-[#FF0066]">{tech.name}</h4>
                    <p className="text-sm text-white mb-3 leading-relaxed">{tech.description}</p>
                    <ul className="text-xs text-[#3adc9d] space-y-1.5 list-disc pl-4">
                      {tech.features.map((feature, i) => (
                        <li key={i} className="leading-relaxed">
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={tech.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#3adc9d] hover:text-[#3adc9d]/80 hover:underline mt-3 inline-flex items-center gap-1"
                    >
                      Learn more
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </a>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.section>
  )
}
