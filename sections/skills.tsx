import { Badge } from "@/components/ui/badge"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Skills() {
  return (
    <section aria-labelledby="skills-heading" className="space-y-4">
      <h2 id="skills-heading" className="text-lg font-semibold tracking-tight text-neutral-100">
        Skills
      </h2>
      <p className="text-neutral-400">
        Here's what I'm comfortable messing around with (and getting better at).
      </p>

      <div className="grid gap-3">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="languages" className="border-neutral-800">
            <AccordionTrigger className="text-neutral-200 hover:text-emerald-300">
              Languages
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-neutral-900 border border-neutral-800 text-neutral-200 hover:bg-neutral-900/80">
                  Python
                </Badge>
                <Badge className="bg-neutral-900 border border-neutral-800 text-neutral-200 hover:bg-neutral-900/80">
                  C
                </Badge>
                <Badge className="bg-neutral-900 border border-neutral-800 text-neutral-200 hover:bg-neutral-900/80">
                  HTML
                </Badge>
                <Badge className="bg-neutral-900 border border-neutral-800 text-neutral-200 hover:bg-neutral-900/80">
                  CSS
                </Badge>
                <Badge className="bg-neutral-900 border border-neutral-800 text-neutral-200 hover:bg-neutral-900/80">
                  JavaScript
                </Badge>
                <Badge className="bg-neutral-900 border border-neutral-800 text-neutral-200 hover:bg-neutral-900/80">
                  TypeScript
                </Badge>
                <Badge className="bg-neutral-900 border border-neutral-800 text-neutral-200 hover:bg-neutral-900/80">
                  SQL
                </Badge>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="frameworks" className="border-neutral-800">
            <AccordionTrigger className="text-neutral-200 hover:text-emerald-300">
              Frameworks / Libraries
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-neutral-900 border border-neutral-800 text-neutral-200 hover:bg-neutral-900/80">
                  React
                </Badge>
                <Badge className="bg-neutral-900 border border-neutral-800 text-neutral-200 hover:bg-neutral-900/80">
                  Next.js
                </Badge>
                <Badge className="bg-neutral-900 border border-neutral-800 text-neutral-200 hover:bg-neutral-900/80">
                  Astro
                </Badge>
                <Badge className="bg-neutral-900 border border-neutral-800 text-neutral-200 hover:bg-neutral-900/80">
                  ASP.NET
                </Badge>
                <Badge className="bg-neutral-900 border border-neutral-800 text-neutral-200 hover:bg-neutral-900/80">
                  Tailwind CSS
                </Badge>
                <Badge className="bg-neutral-900 border border-neutral-800 text-neutral-200 hover:bg-neutral-900/80">
                  Discord.py
                </Badge>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="tools" className="border-neutral-800">
            <AccordionTrigger className="text-neutral-200 hover:text-emerald-300">
              Tools
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-neutral-900 border border-neutral-800 text-neutral-200 hover:bg-neutral-900/80">
                  Git
                </Badge>
                <Badge className="bg-neutral-900 border border-neutral-800 text-neutral-200 hover:bg-neutral-900/80">
                  Github
                </Badge>
                <Badge className="bg-neutral-900 border border-neutral-800 text-neutral-200 hover:bg-neutral-900/80">
                  Cursor
                </Badge>
                <Badge className="bg-neutral-900 border border-neutral-800 text-neutral-200 hover:bg-neutral-900/80">
                  Vercel
                </Badge>
                <Badge className="bg-neutral-900 border border-neutral-800 text-neutral-200 hover:bg-neutral-900/80">
                  Railway
                </Badge>
                <Badge className="bg-neutral-900 border border-neutral-800 text-neutral-200 hover:bg-neutral-900/80">
                  PostgreSQL
                </Badge>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}
