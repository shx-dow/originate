import type { Metadata } from 'next'
import { Figtree, JetBrains_Mono } from 'next/font/google'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Chitransh',
    template: '%s | Chitransh'
  },
  description: 'Full-stack developer specializing in React, Next.js, Python, and modern web technologies. Building innovative solutions with clean code and creative problem-solving.',
  keywords: [
    'Chitransh',
    'Full Stack Developer',
    'Software Engineer',
    'React Developer',
    'Next.js Developer',
    'Python Developer',
    'TypeScript Developer',
    'Web Development',
    'Frontend Developer',
    'Backend Developer',
    'JavaScript Developer',
    'ASP.NET Developer',
    'Portfolio',
    'Developer Portfolio',
    'Software Development',
    'Web Applications',
    'Mobile Development',
    'Database Design',
    'API Development',
    'Git',
    'GitHub',
    'Open Source'
  ],
  authors: [{ name: 'Chitransh', url: 'https://github.com/shx-dow' }],
  creator: 'Chitransh',
  publisher: 'Chitransh',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://chitransh.me'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://chitransh.dev',
    title: 'Chitransh - Full Stack Developer & Software Engineer',
    description: 'Full-stack developer specializing in React, Next.js, Python, and modern web technologies. Building innovative solutions with clean code and creative problem-solving.',
    siteName: 'Chitransh Portfolio',
    images: [
      {
        url: '/pfp.jpg',
        width: 1200,
        height: 630,
        alt: 'Chitransh',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chitransh',
    description: 'Full-stack developer specializing in React, Next.js, Python, and modern web technologies. Building innovative solutions with clean code and creative problem-solving.',
    images: ['/pfp.jpg'],
    creator: '@_chitransh09',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/pfp.jpg',
    shortcut: '/pfp.jpg',
    apple: '/pfp.jpg',
  }
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
