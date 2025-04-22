"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Shield, Clock, Activity } from "lucide-react"

// Animated counter component
function AnimatedCounter({ value, duration = 2000 }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const end = Number.parseInt(value)

    // Make sure we don't divide by 0
    const incrementTime = duration / end

    const timer = setInterval(() => {
      start += 1
      setCount(start)
      if (start >= end) clearInterval(timer)
    }, incrementTime)

    return () => {
      clearInterval(timer)
    }
  }, [value, duration])

  return <span>{count}</span>
}

export default function KeyMetrics() {
  return (
    <motion.section
      className="space-y-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-3">Key Performance Metrics</h2>
        <p className="text-lg text-[#3adc9d] max-w-2xl mx-auto font-light leading-relaxed">
          Quantifiable improvements in threat detection and incident response after implementing SIEM optimization
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div whileHover={{ scale: 1.03, translateZ: 10 }} transition={{ type: "spring", stiffness: 300 }}>
          <Card className="bg-[#1a1a24]/80 border-[#6e3adc]/20 backdrop-blur-sm overflow-hidden relative rounded-xl shadow-[0_8px_30px_rgb(110,58,220,0.1)]">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#6e3adc]/10 rounded-full blur-3xl"></div>
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2 text-white">
                <Shield className="h-5 w-5 text-[#6e3adc]" />
                APT Detection
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-[#3adc9d]">Before Optimization</span>
                  <span className="text-white">65%</span>
                </div>
                <Progress
                  value={65}
                  className="h-3 bg-[#121218]"
                  indicatorClassName="bg-gradient-to-r from-[#3a8ddc] to-[#3a8ddc]"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-[#3adc9d]">After Optimization</span>
                  <span className="text-white">80%</span>
                </div>
                <Progress
                  value={80}
                  className="h-3 bg-[#121218]"
                  indicatorClassName="bg-gradient-to-r from-[#3a8ddc] to-[#FF0066]"
                />
              </div>

              <div className="text-center p-4 bg-[#121218]/50 rounded-lg border border-[#6e3adc]/10">
                <div className="text-4xl font-bold text-[#FF0066]">
                  +<AnimatedCounter value="15" />%
                </div>
                <div className="text-sm text-white mt-1">Improvement</div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div whileHover={{ scale: 1.03, translateZ: 10 }} transition={{ type: "spring", stiffness: 300 }}>
          <Card className="bg-[#1a1a24]/80 border-[#6e3adc]/20 backdrop-blur-sm overflow-hidden relative rounded-xl shadow-[0_8px_30px_rgb(110,58,220,0.1)]">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#3a8ddc]/10 rounded-full blur-3xl"></div>
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <Clock className="h-5 w-5 text-[#3a8ddc]" />
                Mean Time to Detect
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Before Optimization</span>
                  <span>45 min</span>
                </div>
                <Progress value={100} className="h-3 bg-[#121218]" indicatorClassName="bg-[#ff7a45]" />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>After Optimization</span>
                  <span>31.5 min</span>
                </div>
                <Progress value={70} className="h-3 bg-[#121218]" indicatorClassName="bg-[#3adc9d]" />
              </div>

              <div className="text-center p-4 bg-[#121218]/50 rounded-lg border border-[#6e3adc]/10">
                <div className="text-4xl font-bold text-[#3a8ddc]">
                  -<AnimatedCounter value="30" />%
                </div>
                <div className="text-sm text-white/70 mt-1">Reduction</div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div whileHover={{ scale: 1.03, translateZ: 10 }} transition={{ type: "spring", stiffness: 300 }}>
          <Card className="bg-[#1a1a24]/80 border-[#6e3adc]/20 backdrop-blur-sm overflow-hidden relative rounded-xl shadow-[0_8px_30px_rgb(110,58,220,0.1)]">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#3adc9d]/10 rounded-full blur-3xl"></div>
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <Activity className="h-5 w-5 text-[#3adc9d]" />
                SOC Efficiency
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Before Optimization</span>
                  <span>Baseline</span>
                </div>
                <Progress value={100} className="h-3 bg-[#121218]" indicatorClassName="bg-[#3a8ddc]" />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>After Optimization</span>
                  <span>Enhanced</span>
                </div>
                <Progress
                  value={125}
                  className="h-3 bg-[#121218]"
                  indicatorClassName="bg-gradient-to-r from-[#3a8ddc] to-[#6e3adc]"
                />
              </div>

              <div className="text-center p-4 bg-[#121218]/50 rounded-lg border border-[#6e3adc]/10">
                <div className="text-4xl font-bold text-[#3adc9d]">
                  +<AnimatedCounter value="25" />%
                </div>
                <div className="text-sm text-white/70 mt-1">Improvement</div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  )
}
