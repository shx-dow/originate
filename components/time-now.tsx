"use client"

import { useEffect, useState } from "react"

export default function TimeNow() {
  const [now, setNow] = useState<string>(() => formatTime(new Date()))

  useEffect(() => {
    const id = setInterval(() => {
      setNow(formatTime(new Date()))
    }, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <time
      aria-live="polite"
      className="font-medium text-neutral-200 transition-colors duration-200 hover:text-sky-300"
      suppressHydrationWarning
    >
      {"IN "}{now}
    </time>
  )
}

function formatTime(d: Date) {
  try {
    return new Intl.DateTimeFormat(undefined, {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).format(d)
  } catch {
    return d.toLocaleTimeString()
  }
}
