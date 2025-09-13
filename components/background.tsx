'use client'

import { useEffect, useRef } from 'react'
import { useKonamiCode } from '@/hooks/use-konami-code'

export default function Background() {
  const { isActivated } = useKonamiCode()
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number | undefined>(undefined)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dotSpacing = isActivated ? 20 : 25
    const dotSize = isActivated ? 1.2 : 0.8

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
      time += isActivated ? 0.02 : 0.008

      for (let y = 0; y < canvas.height + dotSpacing; y += dotSpacing) {
        for (let x = 0; x < canvas.width + dotSpacing; x += dotSpacing) {
          const seed = getSeed(x, y)

          if (isActivated) {
            // retro 8-bit style with pixelated squares
            const flicker = Math.sin(time * 3 + seed) + Math.sin(time * 1.2 + seed * 0.6)
            let opacity = Math.max(0, flicker) * 0.3

            if (Math.sin(time * 0.15 + seed * 2.5) > 0.95) {
              opacity = 0.6
            }

            if (opacity > 0.05) {
              // draw pixelated squares instead of circles
              const pixelSize = dotSize * 2
              
              // Alternate between green and red based on position and time
              const colorPattern = Math.sin(time * 2 + x * 0.1 + y * 0.1) > 0
              const r = colorPattern ? 255 : 0  // Red or 0
              const g = colorPattern ? 0 : 255  // 0 or Green
              const b = 0  // Always 0 for pure red/green
              
              ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${opacity})`
              ctx.fillRect(
                Math.floor(x - pixelSize/2), 
                Math.floor(y - pixelSize/2), 
                Math.floor(pixelSize), 
                Math.floor(pixelSize)
              )
            }
          } else {
            // original smooth dots
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
  }, [isActivated])

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
