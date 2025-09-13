'use client'

import { useKonamiCode } from '@/hooks/use-konami-code'
import { useEffect, useState } from 'react'

export default function EasterEggNotification() {
  const { isActivated } = useKonamiCode()
  const [showNotification, setShowNotification] = useState(false)

  useEffect(() => {
    if (isActivated) {
      setShowNotification(true)
      
      // hide notification after 3 seconds
      const timer = setTimeout(() => {
        setShowNotification(false)
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [isActivated])

  if (!showNotification) return null

  return (
    <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 pointer-events-none">
      <div className="bg-green-500 text-black px-6 py-3 rounded-lg font-mono text-sm font-bold animate-bounce border-2 border-green-400 shadow-lg">
        KONAMI CODE ACTIVATED!
      </div>
    </div>
  )
}
