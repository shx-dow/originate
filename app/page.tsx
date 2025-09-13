import Image from "next/image"
import { Separator } from "@/components/ui/separator"
import TopBar from "@/components/topbar"
import SocialLinks from "@/components/social-links"
import Profile from "@/sections/profile"
import About from "@/sections/about"
import Skills from "@/sections/skills"
import Projects from "@/sections/projects"
import Background from "@/components/background"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chitransh',
  description: 'Welcome to Chitransh\'s portfolio. Full-stack developer passionate about creating innovative web applications with React, Next.js, Python, and modern technologies. Explore my projects, skills, and experience.',
  keywords: [
    'Chitransh Portfolio',
    'Developer Portfolio',
    'Full Stack Developer',
    'React Developer',
    'Next.js Developer',
    'Python Developer',
    'Web Development',
    'Software Engineer',
    'Portfolio Website',
    'Developer Resume',
    'Web Applications',
    'Frontend Development',
    'Backend Development',
    'JavaScript',
    'TypeScript',
    'ASP.NET',
    'Database Design',
    'API Development'
  ],
  openGraph: {
    title: 'Chitransh',
    description: 'Welcome to Chitransh\'s portfolio. Full-stack developer passionate about creating innovative web applications with React, Next.js, Python, and modern technologies.',
    url: 'https://chitransh.me',
    type: 'website',
  },
  twitter: {
    title: 'Chitransh',
    description: 'Welcome to Chitransh\'s portfolio. Full-stack developer passionate about creating innovative web applications with React, Next.js, Python, and modern technologies.',
  },
  alternates: {
    canonical: 'https://chitransh.me',
  },
}

export default function Page() {
  return (
    <main className="antialiased bg-neutral-950 text-neutral-100 min-h-[100dvh] relative">
      <Background />

      <div className="relative z-20">
        <TopBar />
      </div>

      <div className="relative z-20">
        <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <Profile />
          <br />
          <About />

          <Separator className="my-10 bg-neutral-800" />

          <Skills />

          <Separator className="my-10 bg-neutral-800" />

          <Projects />

          <div className="mt-8 sm:mt-10">
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
