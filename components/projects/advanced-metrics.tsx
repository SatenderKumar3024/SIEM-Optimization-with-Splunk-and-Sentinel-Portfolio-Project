"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import dynamic from "next/dynamic"
import { Globe, PieChart } from "lucide-react"

// Dynamically import the 3D components to avoid SSR issues
const WorldMap = dynamic(() => import("@/components/projects/world-map"), { ssr: false })
const PieChart3D = dynamic(() => import("@/components/projects/pie-chart-3d"), { ssr: false })

export default function AdvancedMetrics() {
  const [activeTab, setActiveTab] = useState("map")

  return (
    <motion.section
      className="space-y-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <div className="text-center">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-[#6e3adc] to-[#3adc9d] text-transparent bg-clip-text">
          Advanced Security Metrics
        </h2>
        <p className="text-lg text-white/70 max-w-2xl mx-auto font-light">
          Interactive visualizations of threat intelligence and security posture
        </p>
      </div>

      <Card className="bg-[#0f1631]/80 border-[#6e3adc]/20 backdrop-blur-sm rounded-xl overflow-hidden shadow-[0_8px_30px_rgb(110,58,220,0.1)]">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="h-5 w-5 text-[#6e3adc]" />
            Threat Intelligence Visualization
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="map" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-[#0a0d1e] border border-[#6e3adc]/20 rounded-lg p-1">
              <TabsTrigger
                value="map"
                className="data-[state=active]:bg-[#6e3adc]/20 data-[state=active]:text-[#6e3adc] rounded-md"
              >
                <Globe className="h-4 w-4 mr-2" />
                Geographic Threat Map
              </TabsTrigger>
              <TabsTrigger
                value="vectors"
                className="data-[state=active]:bg-[#6e3adc]/20 data-[state=active]:text-[#6e3adc] rounded-md"
              >
                <PieChart className="h-4 w-4 mr-2" />
                Attack Vectors
              </TabsTrigger>
            </TabsList>

            <TabsContent value="map" className="h-[500px] relative">
              <WorldMap />
            </TabsContent>

            <TabsContent value="vectors" className="h-[500px] relative">
              <PieChart3D />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </motion.section>
  )
}
