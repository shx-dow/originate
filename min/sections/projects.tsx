import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export default function Projects() {
  return (
    <section aria-labelledby="projects-heading" className="space-y-4">
      <h2 id="projects-heading" className="text-lg font-semibold tracking-tight text-neutral-100">
        Projects
      </h2>

      <div className="grid gap-4 sm:grid-cols-2">
        <Card className="border-neutral-800 bg-neutral-950/50 transition-transform duration-300 hover:-translate-y-0.5">
          <CardHeader>
            <CardTitle className="text-neutral-100">Placeholder Project</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Image
              src="/placeholder.svg?height=240&width=480"
              alt="Placeholder project cover"
              width={960}
              height={480}
              className="w-full h-36 object-cover rounded-md ring-1 ring-neutral-800"
            />
            <p className="text-sm text-neutral-300">
              Brief placeholder summary describing what the project is about and the impact it had.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
