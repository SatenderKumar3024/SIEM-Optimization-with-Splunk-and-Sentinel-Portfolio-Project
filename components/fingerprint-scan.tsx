"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

interface FingerprintScanProps {
  className?: string
  size?: number
  color?: string
  scanColor?: string
  duration?: number
}

export default function FingerprintScan({
  className = "",
  size = 200,
  color = "#6e3adc",
  scanColor = "#3adc9d",
  duration = 2.5,
}: FingerprintScanProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = size
    canvas.height = size

    // Draw fingerprint pattern
    const drawFingerprint = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Center of the fingerprint
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2

      // Draw outer circle
      ctx.beginPath()
      ctx.arc(centerX, centerY, size * 0.4, 0, Math.PI * 2)
      ctx.strokeStyle = color
      ctx.lineWidth = 1.5
      ctx.stroke()

      // Draw inner patterns
      for (let i = 1; i <= 8; i++) {
        const radius = size * 0.4 * (i / 8)

        ctx.beginPath()
        // Add some randomness to make it look like a fingerprint
        const startAngle = Math.random() * 0.5
        const endAngle = Math.PI * 2 - Math.random() * 0.5

        ctx.arc(centerX + Math.random() * 5 - 2.5, centerY + Math.random() * 5 - 2.5, radius, startAngle, endAngle)

        // Add some breaks in the lines
        if (Math.random() > 0.7) {
          ctx.moveTo(centerX + radius * Math.cos(endAngle + 0.5), centerY + radius * Math.sin(endAngle + 0.5))
          ctx.arc(centerX, centerY, radius, endAngle + 0.5, endAngle + 1)
        }

        ctx.strokeStyle = color
        ctx.lineWidth = 1
        ctx.stroke()
      }

      // Add some random arcs and lines for more detail
      for (let i = 0; i < 20; i++) {
        const radius = Math.random() * (size * 0.4)
        const startAngle = Math.random() * Math.PI * 2
        const endAngle = startAngle + Math.random() * Math.PI

        ctx.beginPath()
        ctx.arc(centerX, centerY, radius, startAngle, endAngle)
        ctx.strokeStyle = color
        ctx.lineWidth = 0.8
        ctx.stroke()
      }
    }

    drawFingerprint()
  }, [size, color])

  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      <canvas ref={canvasRef} className="absolute inset-0" />

      {/* Scanning effect */}
      <motion.div
        className="absolute inset-0 overflow-hidden"
        initial={{ opacity: 0.7 }}
        animate={{ opacity: [0.7, 0.9, 0.7] }}
        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
      >
        <motion.div
          className="absolute left-0 right-0 h-[4px]"
          style={{ backgroundColor: scanColor }}
          initial={{ top: 0 }}
          animate={{ top: size }}
          transition={{
            duration: duration,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </motion.div>
    </div>
  )
}
