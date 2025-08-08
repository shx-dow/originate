import Image from "next/image"
import { Separator } from "@/components/ui/separator"
import TopBar from "@/components/topbar"
import SocialLinks from "@/components/social-links"
import Profile from "@/sections/profile"
import About from "@/sections/about"
import Skills from "@/sections/skills"
import Projects from "@/sections/projects"

export default function Page() {
  return (
    <main className="antialiased bg-neutral-950 text-neutral-100 min-h-[100dvh]">
      {/* Decorative subtle vignette */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(14,165,233,0.10),transparent_60%)]"
      />
      <TopBar />

      <div className="relative">
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

      <footer className="py-10 text-center text-sm text-neutral-400">
        <p className="transition-opacity duration-200 hover:opacity-80">
          {"© "}2025 Chitransh. Built with ☕ and code.
        </p>
      </footer>
    </main>
  )
}
