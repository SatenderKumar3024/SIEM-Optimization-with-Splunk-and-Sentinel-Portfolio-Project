"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Shield, ShieldCheck } from "lucide-react"

interface ProjectHeaderProps {
  title: string
  className?: string
}

export default function ProjectHeader({ title, className }: ProjectHeaderProps) {
  return (
    <div
      className={cn("relative py-24 px-4 overflow-hidden", "bg-gradient-to-br from-[#121218] to-[#1a1f42]", className)}
    >
      {/* 3D Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -right-10 -top-10 w-64 h-64 rounded-full bg-[#6e3adc]/20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
            z: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute left-1/4 top-1/2 w-96 h-96 rounded-full bg-[#3a8ddc]/10 blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1],
            z: [0, 20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute right-1/3 bottom-0 w-80 h-80 rounded-full bg-[#3adc9d]/15 blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.15, 0.25, 0.15],
            z: [0, 25, 0],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      </div>

      {/* Floating 3D elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-[20%] text-[#6e3adc] opacity-20"
          animate={{
            y: [0, -15, 0],
            rotateY: [0, 180, 360],
            z: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        >
          <Shield size={80} />
        </motion.div>
        <motion.div
          className="absolute bottom-20 left-[15%] text-[#3adc9d] opacity-20"
          animate={{
            y: [0, 15, 0],
            rotateY: [0, 180, 360],
            z: [0, 20, 0],
          }}
          transition={{
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        >
          <ShieldCheck size={60} />
        </motion.div>
      </div>

      <div className="container mx-auto relative z-10">
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white drop-shadow-[0_0_10px_rgba(255,0,102,0.5)] tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {title}
        </motion.h1>

        <motion.div
          className="flex items-center gap-4 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="h-1 w-20 bg-gradient-to-r from-[#FF0066] to-[#3adc9d]"></div>
          <p className="text-lg font-light">Satender Kumar</p>
        </motion.div>
      </div>

      {/* 3D Grid background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
    </div>
  )
}
