'use client'

import { useEffect } from 'react'
import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import TopBar from "@/components/topbar"
import SocialLinks from "@/components/social-links"
import Background from "@/components/background"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '500 - Internal Server Error',
  description: 'Something went wrong on our end. The server encountered an unexpected condition and couldn\'t complete your request. This is definitely not your fault.',
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: '500 - Internal Server Error | Chitransh',
    description: 'Something went wrong on our end. The server encountered an unexpected condition and couldn\'t complete your request.',
    type: 'website',
  },
  twitter: {
    title: '500 - Internal Server Error | Chitransh',
    description: 'Something went wrong on our end. The server encountered an unexpected condition and couldn\'t complete your request.',
  },
}

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error)
  }, [error])

  return (
    <main className="antialiased bg-neutral-950 text-neutral-100 min-h-[100dvh] relative">
      <Background />

      <div className="relative z-20">
        <TopBar />
      </div>

      <div className="relative z-20">
        <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="text-center">
            <h1 className="text-6xl sm:text-8xl font-bold text-neutral-50 mb-4">
              500
            </h1>
            <h2 className="text-xl sm:text-2xl font-medium text-neutral-300 mb-6">
              Internal Server Error
            </h2>
            <p className="text-neutral-400 mb-8 max-w-md mx-auto">
              Something went wrong on our end. The server encountered an unexpected condition 
              and couldn't complete your request. This is definitely not your fault.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={reset}
                className="px-6 py-3 bg-neutral-800 hover:bg-neutral-700 text-neutral-100 rounded-lg transition-colors duration-200 font-medium"
              >
                Try Again
              </button>
              <Link
                href="/"
                className="px-6 py-3 border border-neutral-700 hover:border-neutral-600 text-neutral-300 hover:text-neutral-100 rounded-lg transition-colors duration-200 font-medium"
              >
                ← Back to Home
              </Link>
            </div>

            {process.env.NODE_ENV === 'development' && (
              <div className="mt-8 p-4 bg-neutral-900 border border-neutral-800 rounded-lg text-left">
                <h3 className="text-sm font-medium text-neutral-300 mb-2">Debug Info:</h3>
                <pre className="text-xs text-neutral-400 overflow-auto">
                  {error.message}
                </pre>
                {error.digest && (
                  <p className="text-xs text-neutral-500 mt-2">
                    Error ID: {error.digest}
                  </p>
                )}
              </div>
            )}
          </div>

          <Separator className="my-10 bg-neutral-800" />

          <div className="text-center">
            <h3 className="text-small font-medium text-neutral-200 mb-4">
              While we fix this, check out my socials
            </h3>
            <SocialLinks />
          </div>
        </div>
      </div>

      <footer className="relative z-20 py-10 text-center text-sm text-neutral-400">
        <p className="transition-opacity duration-200 hover:opacity-80">
          {"© "}2025 Chitransh. Built with ☕ and code.
        </p>
      </footer>
    </main>
  )
}
