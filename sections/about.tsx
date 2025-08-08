export default function About() {
  return (
    <section aria-labelledby="about-heading" className="space-y-4">
      <div className="prose prose-invert max-w-none prose-p:leading-relaxed text-neutral-400">
        <p>
          I'm {" "}
          <strong className="font-medium text-neutral-100">Chitransh</strong>, a developer who spends way too much time turning ideas into code (and occasionally breaking them in the process).
        </p>
        <br />
        <p>
          With a combination of {" "}
          <strong className="font-medium text-neutral-100">curiosity</strong> and {" "}
          <strong className="font-medium text-neutral-100">caffeine</strong>, I enjoy creating things that are straightforward, useful, and genuinely enjoyable to use.
        </p>
        <br />
        <p>
          When I'm not buried in a project, you'll probably find me ranting about {" "}
          <strong className="font-medium text-neutral-100">cricket</strong>, discovering new {" "}
          <strong className="font-medium text-neutral-100">music</strong>, or going down a rabbit hole of the latest tech trends.
        </p>
      </div>
    </section>
  )
}
