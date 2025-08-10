import Link from "next/link"
import { RiMailLine, RiTwitterXLine, RiGithubLine, RiLinkedinLine } from '@remixicon/react'

const socials = [
  { href: "mailto:chitransh.sharma1477@gmail.com", label: "Email", Icon: RiMailLine },
  { href: "https://x.com/_chitransh09", label: "X (Twitter)", Icon: RiTwitterXLine },
  { href: "https://github.com/shx-dow", label: "GitHub", Icon: RiGithubLine },
  { href: "https://www.linkedin.com/in/chitransh-sharma-130313308/", label: "LinkedIn", Icon: RiLinkedinLine },
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
              target="_blank"
              rel="noreferrer noopener"
          className="group inline-flex items-center gap-2 rounded-md border border-neutral-800 bg-neutral-900/60 px-3 py-1.5 text-sm text-neutral-200 transition-all duration-200 hover:border-sky-500/40 hover:bg-neutral-900 hover:text-sky-300 hover:shadow-[0_0_0_1px_rgba(14,165,233,0.15)]"
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
