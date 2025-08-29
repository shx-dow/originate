import { Badge } from "@/components/ui/badge"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { 
  SiPython, 
  SiC, 
  SiHtml5, 
  SiCss3, 
  SiJavascript, 
  SiTypescript, 
  SiPostgresql,
  SiReact,
  SiNextdotjs,
  SiAstro,
  SiDotnet,
  SiTailwindcss,
  SiDiscord,
  SiGit,
  SiGithub,
  SiVercel,
  SiRailway
} from "react-icons/si"
import { GoDatabase } from "react-icons/go";
const CursorIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 50 50" 
    className={className}
    fill="currentColor"
  >
    <path d="M 24.949219 2.9980469 A 1.0001 1.0001 0 0 0 24.480469 3.1445312 L 6.4746094 14.146484 A 1.0001 1.0001 0 0 0 5.9960938 15 L 6 35 A 1.0001 1.0001 0 0 0 6.0078125 35.113281 A 1.0001 1.0001 0 0 0 6.0234375 35.210938 A 1.0001 1.0001 0 0 0 6.046875 35.298828 A 1.0001 1.0001 0 0 0 6.0488281 35.308594 A 1.0001 1.0001 0 0 0 6.078125 35.388672 A 1.0001 1.0001 0 0 0 6.5917969 35.921875 L 24.505859 46.853516 A 1.0001 1.0001 0 0 0 25.548828 46.853516 L 43.523438 35.847656 A 1.0001 1.0001 0 0 0 44.001953 34.994141 L 43.998047 15 A 1.0001 1.0001 0 0 0 43.521484 14.148438 L 25.523438 3.1445312 A 1.0001 1.0001 0 0 0 24.949219 2.9980469 z M 25.998047 5.7773438 L 41.076172 14.998047 L 25.992188 14.998047 L 25.998047 5.7773438 z M 23.998047 5.78125 L 23.992188 14.996094 L 8.921875 14.996094 L 23.998047 5.78125 z M 12.015625 16.996094 L 24.779297 16.996094 A 1.0001 1.0001 0 0 0 25.205078 16.998047 L 25.208984 16.998047 L 40.253906 16.998047 L 26 41.314453 L 25.996094 25.005859 A 1.0001 1.0001 0 0 0 25.464844 24.123047 L 12.015625 16.996094 z M 7.9980469 17.128906 L 23.121094 25.144531 L 8 33.335938 L 7.9980469 17.128906 z M 42 17.970703 L 42 32.871094 L 35.349609 29.318359 L 42 17.970703 z M 23.996094 26.945312 L 24.001953 44.203125 L 9.015625 35.058594 L 23.996094 26.945312 z M 34.335938 31.046875 L 41.386719 34.810547 L 26.949219 43.650391 L 34.335938 31.046875 z" />
  </svg>
)

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
            <AccordionTrigger className="text-neutral-200 hover:text-sky-300">
              Languages
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-neutral-900 border border-neutral-800 text-neutral-200 hover:bg-neutral-900/80 flex items-center gap-2">
                  <SiPython className="w-4 h-4" />
                  Python
                </Badge>
                <Badge className="bg-neutral-900 border border-neutral-800 text-neutral-200 hover:bg-neutral-900/80 flex items-center gap-2">
                  <SiC className="w-4 h-4" />
                  C
                </Badge>
                <Badge className="bg-neutral-900 border border-neutral-800 text-neutral-200 hover:bg-neutral-900/80 flex items-center gap-2">
                  <SiHtml5 className="w-4 h-4" />
                  HTML
                </Badge>
                <Badge className="bg-neutral-900 border border-neutral-800 text-neutral-200 hover:bg-neutral-900/80 flex items-center gap-2">
                  <SiCss3 className="w-4 h-4" />
                  CSS
                </Badge>
                <Badge className="bg-neutral-900 border border-neutral-800 text-neutral-200 hover:bg-neutral-900/80 flex items-center gap-2">
                  <SiJavascript className="w-4 h-4" />
                  JavaScript
                </Badge>
                <Badge className="bg-neutral-900 border border-neutral-800 text-neutral-200 hover:bg-neutral-900/80 flex items-center gap-2">
                  <SiTypescript className="w-4 h-4" />
                  TypeScript
                </Badge>
                <Badge className="bg-neutral-900 border border-neutral-800 text-neutral-200 hover:bg-neutral-900/80 flex items-center gap-2">
                  <GoDatabase className="w-4 h-4" />
                  SQL
                </Badge>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="frameworks" className="border-neutral-800">
            <AccordionTrigger className="text-neutral-200 hover:text-sky-300">
              Frameworks / Libraries
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-neutral-900 border border-neutral-800 text-neutral-200 hover:bg-neutral-900/80 flex items-center gap-2">
                  <SiReact className="w-4 h-4" />
                  React
                </Badge>
                <Badge className="bg-neutral-900 border border-neutral-800 text-neutral-200 hover:bg-neutral-900/80 flex items-center gap-2">
                  <SiNextdotjs className="w-4 h-4" />
                  Next.js
                </Badge>
                <Badge className="bg-neutral-900 border border-neutral-800 text-neutral-200 hover:bg-neutral-900/80 flex items-center gap-2">
                  <SiAstro className="w-4 h-4" />
                  Astro
                </Badge>
                <Badge className="bg-neutral-900 border border-neutral-800 text-neutral-200 hover:bg-neutral-900/80 flex items-center gap-2">
                  <SiDotnet className="w-4 h-4" />
                  ASP.NET
                </Badge>
                <Badge className="bg-neutral-900 border border-neutral-800 text-neutral-200 hover:bg-neutral-900/80 flex items-center gap-2">
                  <SiTailwindcss className="w-4 h-4" />
                  Tailwind CSS
                </Badge>
                <Badge className="bg-neutral-900 border border-neutral-800 text-neutral-200 hover:bg-neutral-900/80 flex items-center gap-2">
                  <SiDiscord className="w-4 h-4" />
                  Discord.py
                </Badge>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="tools" className="border-neutral-800">
            <AccordionTrigger className="text-neutral-200 hover:text-sky-300">
              Tools
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-neutral-900 border border-neutral-800 text-neutral-200 hover:bg-neutral-900/80 flex items-center gap-2">
                  <SiGit className="w-4 h-4" />
                  Git
                </Badge>
                <Badge className="bg-neutral-900 border border-neutral-800 text-neutral-200 hover:bg-neutral-900/80 flex items-center gap-2">
                  <SiGithub className="w-4 h-4" />
                  Github
                </Badge>
                <Badge className="bg-neutral-900 border border-neutral-800 text-neutral-200 hover:bg-neutral-900/80 flex items-center gap-2">
                  <CursorIcon className="w-4 h-4" />
                  Cursor
                </Badge>
                <Badge className="bg-neutral-900 border border-neutral-800 text-neutral-200 hover:bg-neutral-900/80 flex items-center gap-2">
                  <SiVercel className="w-4 h-4" />
                  Vercel
                </Badge>
                <Badge className="bg-neutral-900 border border-neutral-800 text-neutral-200 hover:bg-neutral-900/80 flex items-center gap-2">
                  <SiRailway className="w-4 h-4" />
                  Railway
                </Badge>
                <Badge className="bg-neutral-900 border border-neutral-800 text-neutral-200 hover:bg-neutral-900/80 flex items-center gap-2">
                  <SiPostgresql className="w-4 h-4" />
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
