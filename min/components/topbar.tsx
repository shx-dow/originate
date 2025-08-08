"use client"

import TimeNow from "@/components/time-now"

export default function TopBar() {
  return (
    <header
      className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 border-b border-neutral-900"
      role="banner"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 h-12 flex items-center justify-between text-sm">
        <div className="flex items-center gap-2 text-neutral-300">
          <span className="sr-only">Local time</span>
          <TimeNow />
        </div>
        <div className="text-neutral-400">
          <span aria-label="Location" className="transition-opacity duration-200 hover:opacity-80">
            {"🌍 "}Somewhere on Earth
          </span>
        </div>
      </div>
    </header>
  )
}
