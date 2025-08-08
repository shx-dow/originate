import Link from "next/link"
import { Mail, Twitter, Github, Linkedin, LinkIcon } from 'lucide-react'

const socials = [
  { href: "#", label: "Email", Icon: Mail },
  { href: "#", label: "Twitter", Icon: Twitter },
  { href: "#", label: "GitHub", Icon: Github },
  { href: "#", label: "LinkedIn", Icon: Linkedin },
]

export default function SocialLinks() {
  return (
    <nav aria-label="Social links">
      <ul className="flex flex-wrap items-center gap-3">
        {socials.map(({ href, label, Icon }) => (
          <li key={label}>
            <Link
              href={href}
              aria-label={label}
              className="group inline-flex items-center gap-2 rounded-md border border-neutral-800 bg-neutral-900/60 px-3 py-1.5 text-sm text-neutral-200 transition-all duration-200 hover:border-emerald-500/40 hover:bg-neutral-900 hover:text-emerald-300 hover:shadow-[0_0_0_1px_rgba(16,185,129,0.15)]"
            >
              <Icon className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5" />
              <span className="sr-only">{label}</span>
              <span aria-hidden="true" className="hidden sm:inline">
                {label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
