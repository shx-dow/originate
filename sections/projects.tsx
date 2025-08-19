import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export default function Projects() {
  return (
    <section aria-labelledby="projects-heading" className="space-y-4">
      <h2 id="projects-heading" className="text-lg font-semibold tracking-tight text-neutral-100">
        Projects
      </h2>

      <div className="grid gap-4 sm:grid-cols-2">
        <Link
          href="https://github.com/shx-dow/AFPMS-Web-Tools"
          aria-label="Open project: AFPMS Web Tools"
          className="block h-full rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <Card className="h-full border-neutral-800 bg-neutral-950/50 transition-transform duration-300 hover:-translate-y-0.5">
            <CardHeader>
              <CardTitle className="text-neutral-100 line-clamp-1">AFPMS Web Tools</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Image
                src="/placeholder.svg?height=240&width=480"
                alt="Placeholder project cover"
                width={960}
                height={480}
                className="w-full h-36 object-cover rounded-md ring-1 ring-neutral-800"
              />
              <p className="text-sm text-neutral-400 line-clamp-3">
                A web-based task and enquiry management suite built with ASP.NET Core to streamline workflows and boost collaboration.
              </p>
            </CardContent>
          </Card>
        </Link>

        <Link
          href="https://github.com/shx-dow/fluke"
          aria-label="Open project: Fluke - A Text Editor"
          className="block h-full rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Card className="h-full border-neutral-800 bg-neutral-950/50 transition-transform duration-300 hover:-translate-y-0.5">
            <CardHeader>
              <CardTitle className="text-neutral-100 line-clamp-1">Fluke - A Text Editor</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Image
                src="/fluke.svg?height=240&width=480"
                alt="Placeholder project cover"
                width={960}
                height={480}
                className="w-full h-36 object-cover rounded-md ring-1 ring-neutral-800"
              />
              <p className="text-sm text-neutral-400 line-clamp-3">
                A minimal, terminal-based text editor in C. Fast, simple, and inspired by kilo.
              </p>
            </CardContent>
          </Card>
        </Link>

      </div>
    </section>
  )
}
