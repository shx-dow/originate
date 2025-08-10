'use client'

import { useEffect, useRef } from 'react'

export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number | undefined>(undefined)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dotSpacing = 25
    const dotSize = 0.8

    const seeds: Record<string, number> = {}

    const getSeed = (x: number, y: number) => {
      const key = `${x},${y}`
      if (!(key in seeds)) {
        const hash = (Math.sin(x * 12.9898 + y * 78.233) * 43758.5453) % 1
        seeds[key] = hash * 1000
      }
      return seeds[key]
    }

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    let time = 0

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      time += 0.008

      for (let y = 0; y < canvas.height + dotSpacing; y += dotSpacing) {
        for (let x = 0; x < canvas.width + dotSpacing; x += dotSpacing) {
          const seed = getSeed(x, y)

          const flicker = Math.sin(time * 2 + seed) + Math.sin(time * 0.7 + seed * 0.8)
          let opacity = Math.max(0, flicker) * 0.2

          if (Math.sin(time * 0.1 + seed * 2) > 0.99) {
            opacity = 0.4
          }

          if (opacity > 0.02) {
            ctx.beginPath()
            ctx.arc(x, y, dotSize, 0, Math.PI * 2)
            ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`
            ctx.fill()
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    resizeCanvas()
    animate()

    const handleResize = () => {
      resizeCanvas()
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      if (animationRef.current !== undefined) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        background: 'transparent',
        opacity: 0.6,
        filter: 'blur(0.4px)',
        mixBlendMode: 'screen',
      }}
    />
  )
}
