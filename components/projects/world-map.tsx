"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import countries from "@/data/countries.json"

// Sample threat data
const threatData = [
  { lat: 37.7749, lng: -122.4194, intensity: 0.8, country: "United States" }, // San Francisco
  { lat: 40.7128, lng: -74.006, intensity: 0.9, country: "United States" }, // New York
  { lat: 51.5074, lng: -0.1278, intensity: 0.7, country: "United Kingdom" }, // London
  { lat: 55.7558, lng: 37.6173, intensity: 0.95, country: "Russia" }, // Moscow
  { lat: 39.9042, lng: 116.4074, intensity: 0.85, country: "China" }, // Beijing
  { lat: -33.8688, lng: 151.2093, intensity: 0.6, country: "Australia" }, // Sydney
  { lat: 35.6762, lng: 139.6503, intensity: 0.75, country: "Japan" }, // Tokyo
  { lat: 1.3521, lng: 103.8198, intensity: 0.5, country: "Singapore" }, // Singapore
  { lat: -23.5505, lng: -46.6333, intensity: 0.65, country: "Brazil" }, // São Paulo
  { lat: 28.6139, lng: 77.209, intensity: 0.8, country: "India" }, // New Delhi
]

export default function WorldMap() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x0a0d1e)

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
    controls.rotateSpeed = 0.5
    controls.minDistance = 120
    controls.maxDistance = 300

    // Earth
    const earthGeometry = new THREE.SphereGeometry(100, 64, 64)
    const earthMaterial = new THREE.MeshBasicMaterial({
      color: 0x1a1f42,
      wireframe: true,
      transparent: true,
      opacity: 0.6,
    })
    const earth = new THREE.Mesh(earthGeometry, earthMaterial)
    scene.add(earth)

    // Add country outlines
    const countryGroup = new THREE.Group()
    countries.features.forEach((feature) => {
      if (feature.geometry.type === "Polygon") {
        feature.geometry.coordinates.forEach((coordinates) => {
          const points = []
          coordinates.forEach((coord) => {
            const lat = coord[1]
            const lng = coord[0]
            const point = latLngToVector3(lat, lng, 101)
            points.push(point)
          })

          const lineGeometry = new THREE.BufferGeometry().setFromPoints(points)
          const lineMaterial = new THREE.LineBasicMaterial({ color: 0x3a8ddc, transparent: true, opacity: 0.3 })
          const line = new THREE.Line(lineGeometry, lineMaterial)
          countryGroup.add(line)
        })
      }
    })
    scene.add(countryGroup)

    // Add threat points
    threatData.forEach((threat) => {
      const position = latLngToVector3(threat.lat, threat.lng, 102)

      // Create hotspot
      const hotspotGeometry = new THREE.SphereGeometry(2 + threat.intensity * 3, 16, 16)
      const hotspotMaterial = new THREE.MeshBasicMaterial({
        color: 0x6e3adc,
        transparent: true,
        opacity: 0.7,
      })
      const hotspot = new THREE.Mesh(hotspotGeometry, hotspotMaterial)
      hotspot.position.copy(position)
      scene.add(hotspot)

      // Create glow effect
      const glowGeometry = new THREE.SphereGeometry(3 + threat.intensity * 4, 16, 16)
      const glowMaterial = new THREE.MeshBasicMaterial({
        color: 0x6e3adc,
        transparent: true,
        opacity: 0.3,
      })
      const glow = new THREE.Mesh(glowGeometry, glowMaterial)
      glow.position.copy(position)
      scene.add(glow)

      // Animate glow
      const pulseSpeed = 0.5 + Math.random() * 0.5
      const initialScale = 1
      const maxScale = 1.5
      let time = Math.random() * Math.PI * 2

      function animateGlow() {
        time += 0.01 * pulseSpeed
        const scale = initialScale + Math.sin(time) * (maxScale - initialScale) * 0.5
        glow.scale.set(scale, scale, scale)
      }

      // Add to animation loop
      animationFunctions.push(animateGlow)
    })

    // Helper function to convert lat/lng to 3D position
    function latLngToVector3(lat, lng, radius) {
      const phi = (90 - lat) * (Math.PI / 180)
      const theta = (lng + 180) * (Math.PI / 180)

      const x = -radius * Math.sin(phi) * Math.cos(theta)
      const y = radius * Math.cos(phi)
      const z = radius * Math.sin(phi) * Math.sin(theta)

      return new THREE.Vector3(x, y, z)
    }

    // Animation loop
    const animationFunctions = []

    const animate = () => {
      requestAnimationFrame(animate)

      animationFunctions.forEach((func) => func())

      controls.update()
      renderer.render(scene, camera)
    }

    animate()

    // Handle window resize
    const handleResize = () => {
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    }

    window.addEventListener("resize", handleResize)

    // Clean up on unmount
    return () => {
      window.removeEventListener("resize", handleResize)
      containerRef.current.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={containerRef} style={{ width: "100%", height: "100vh" }} />
}
