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

      <div className="grid gap-3">
        <div className="flex flex-wrap gap-2">
          <Badge className="bg-neutral-900 border border-neutral-800 text-neutral-200 hover:bg-neutral-900/80">
            Placeholder Skill
          </Badge>
          <Badge className="bg-neutral-900 border border-neutral-800 text-neutral-200 hover:bg-neutral-900/80">
            Another Skill
          </Badge>
          <Badge className="bg-neutral-900 border border-neutral-800 text-neutral-200 hover:bg-neutral-900/80">
            Tooling
          </Badge>
        </div>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="languages" className="border-neutral-800">
            <AccordionTrigger className="text-neutral-200 hover:text-emerald-300">
              Languages
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-neutral-900 border border-neutral-800 text-neutral-200 hover:bg-neutral-900/80">
                  Language A
                </Badge>
                <Badge className="bg-neutral-900 border border-neutral-800 text-neutral-200 hover:bg-neutral-900/80">
                  Language B
                </Badge>
                <Badge className="bg-neutral-900 border border-neutral-800 text-neutral-200 hover:bg-neutral-900/80">
                  Language C
                </Badge>
                <Badge className="bg-neutral-900 border border-neutral-800 text-neutral-200 hover:bg-neutral-900/80">
                  Language D
                </Badge>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}
