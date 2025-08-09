"use client"

import { useEffect, useLayoutEffect, useState } from "react"

export default function TimeNow() {
  const [now, setNow] = useState<string | null>(null)

  // Ensure the correct IST value is set before the first paint
  useLayoutEffect(() => {
    setNow(formatTime(new Date()))
  }, [])

  useEffect(() => {
    // Align updates to the next minute boundary to avoid unnecessary per-second updates
    const scheduleNextTick = () => {
      const current = new Date()
      const msUntilNextMinute =
        (60 - current.getSeconds()) * 1000 - current.getMilliseconds()

      const timeoutId = setTimeout(() => {
        setNow(formatTime(new Date()))
        intervalId = setInterval(() => {
          setNow(formatTime(new Date()))
        }, 60_000)
      }, Math.max(0, msUntilNextMinute))

      return timeoutId
    }

    let intervalId: ReturnType<typeof setInterval> | null = null
    const timeoutId = scheduleNextTick()

    return () => {
      clearTimeout(timeoutId)
      if (intervalId) clearInterval(intervalId)
    }
  }, [])

  return (
    <time
      aria-live="polite"
      className="font-normal text-neutral-200 transition-colors duration-200 hover:text-sky-300"
      suppressHydrationWarning
      title="India Standard Time (IST)"
    >
      {"IN "}{now ?? ""}
    </time>
  )
}

function formatTime(d: Date) {
  try {
    return new Intl.DateTimeFormat("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: "Asia/Kolkata",
    }).format(d)
  } catch {
    return d.toLocaleTimeString()
  }
}
