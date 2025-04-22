"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

// Sample attack vector data
const attackVectors = [
  { name: "Phishing", value: 35, color: 0xff0066 },
  { name: "Malware", value: 25, color: 0x00aaff },
  { name: "Unauthorized Access", value: 20, color: 0xffaa00 },
  { name: "DDoS", value: 10, color: 0x00ff88 },
  { name: "Data Exfiltration", value: 10, color: 0xaa00ff },
]

export default function PieChart3D() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x1e0d3e)

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      60,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000,
    )
    camera.position.z = 200

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    containerRef.current.appendChild(renderer.domElement)

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.05

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
    directionalLight.position.set(1, 1, 1)
    scene.add(directionalLight)

    // Create 3D pie chart
    const pieGroup = new THREE.Group()
    scene.add(pieGroup)

    const radius = 50
    const height = 20
    const segments = 32

    let startAngle = 0
    const total = attackVectors.reduce((sum, item) => sum + item.value, 0)

    // Create pie segments
    attackVectors.forEach((item, index) => {
      const angle = (item.value / total) * Math.PI * 2
      const endAngle = startAngle + angle

      // Create pie segment
      const shape = new THREE.Shape()
      shape.moveTo(0, 0)
      shape.arc(0, 0, radius, startAngle, endAngle, false)
      shape.lineTo(0, 0)

      const extrudeSettings = {
        depth: height,
        bevelEnabled: true,
        bevelThickness: 2,
        bevelSize: 1,
        bevelOffset: 0,
        bevelSegments: 3,
      }

      const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings)
      const material = new THREE.MeshStandardMaterial({
        color: item.color,
        metalness: 0.3,
        roughness: 0.5,
      })

      const mesh = new THREE.Mesh(geometry, material)
      mesh.position.z = -height / 2

      // Add hover effect
      mesh.userData = {
        isHovered: false,
        originalPosition: mesh.position.clone(),
        name: item.name,
        value: item.value,
      }

      pieGroup.add(mesh)

      // Create label
      const midAngle = startAngle + angle / 2
      const labelDistance = radius * 0.7
      const labelX = Math.cos(midAngle) * labelDistance
      const labelY = Math.sin(midAngle) * labelDistance

      // Update for next segment
      startAngle = endAngle
    })

    // Tilt the pie chart for better 3D effect
    pieGroup.rotation.x = -Math.PI / 6

    // Animation loop
    function animate() {
      requestAnimationFrame(animate)

      // Slowly rotate the pie chart
      pieGroup.rotation.y += 0.005

      controls.update()
      renderer.render(scene, camera)
    }
    animate()

    // Handle resize
    function handleResize() {
      if (!containerRef.current) return

      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    }
    window.addEventListener("resize", handleResize)

    // Cleanup
    return () => {
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement)
      }
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <div className="relative h-full w-full">
      <div ref={containerRef} className="h-full w-full" />
      <div className="absolute bottom-4 left-4 bg-[#1e0d3e]/80 p-3 rounded-md border border-[#FF0066]/20">
        <div className="font-medium mb-2">Attack Vectors</div>
        {attackVectors.map((item) => (
          <div key={item.name} className="flex items-center gap-2 mb-1">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: `#${item.color.toString(16).padStart(6, "0")}` }}
            ></div>
            <span className="text-sm">
              {item.name} ({item.value}%)
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
