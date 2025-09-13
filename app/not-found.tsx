import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import TopBar from "@/components/topbar"
import SocialLinks from "@/components/social-links"
import Background from "@/components/background"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404 - Page Not Found',
  description: 'The page you\'re looking for seems to have vanished into the digital void. Don\'t worry, even the best developers lose things sometimes. Return to Chitransh\'s portfolio.',
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: '404 - Page Not Found | Chitransh',
    description: 'The page you\'re looking for seems to have vanished into the digital void. Return to Chitransh\'s portfolio.',
    type: 'website',
  },
  twitter: {
    title: '404 - Page Not Found | Chitransh',
    description: 'The page you\'re looking for seems to have vanished into the digital void. Return to Chitransh\'s portfolio.',
  },
}

export default function NotFound() {
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
              404
            </h1>
            <h2 className="text-xl sm:text-2xl font-medium text-neutral-300 mb-6">
              Page Not Found
            </h2>
            <p className="text-neutral-400 mb-8 max-w-md mx-auto">
              The page you're looking for seems to have vanished into the digital void. 
              Don't worry, even the best developers lose things sometimes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/"
                className="px-6 py-3 bg-neutral-800 hover:bg-neutral-700 text-neutral-100 rounded-lg transition-colors duration-200 font-medium"
              >
                ← Back to Home
              </Link>
            </div>
          </div>

          <Separator className="my-10 bg-neutral-800" />

          <div>
            <h3 className="text-small font-medium text-neutral-200 mb-4">
              While you're here, check out my socials
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
