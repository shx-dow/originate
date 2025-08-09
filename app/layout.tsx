import type { Metadata } from 'next'
import { Figtree, JetBrains_Mono } from 'next/font/google'
import './globals.css'

export const metadata: Metadata = {
  title: 'Chitransh',
  icons: '/profile.jpeg'
}

const figtree = Figtree({ subsets: ['latin'], variable: '--font-sans', display: 'swap' })
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono', display: 'swap' })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${figtree.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <head />
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}
