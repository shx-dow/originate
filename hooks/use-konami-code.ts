'use client'

import { useEffect, useState } from 'react'

const KONAMI_CODE = [
  'ArrowUp',
  'ArrowUp', 
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'KeyB',
  'KeyA'
]

export function useKonamiCode() {
  const [isActivated, setIsActivated] = useState(false)
  const [sequence, setSequence] = useState<string[]>([])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const newSequence = [...sequence, event.code]
      
      // check if the new sequence matches the Konami code
      if (newSequence.length <= KONAMI_CODE.length) {
        const isMatch = newSequence.every((key, index) => key === KONAMI_CODE[index])
        
        if (isMatch) {
          if (newSequence.length === KONAMI_CODE.length) {
            // full sequence matched!
            setIsActivated(true)
            setSequence([])
            
            // show activation message
            console.log('Konami Code Activated!')
            
            // reset after 10 seconds
            setTimeout(() => {
              setIsActivated(false)
            }, 10000)
          } else {
            setSequence(newSequence)
          }
        } else {
          // reset sequence if it doesn't match
          setSequence([])
        }
      } else {
        // reset if sequence is too long
        setSequence([])
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [sequence])

  return { isActivated, sequence }
}
