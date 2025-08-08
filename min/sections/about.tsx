export default function About() {
  return (
    <section aria-labelledby="about-heading" className="space-y-4">
      <h2 id="about-heading" className="text-lg font-semibold tracking-tight text-neutral-100">
        About
      </h2>
      <div className="prose prose-invert max-w-none prose-p:leading-relaxed">
        <p>
          This is placeholder text that describes who you are and what you do. It supports{" "}
          <strong className="font-bold text-neutral-100">bold styling</strong> for emphasis when needed.
        </p>
        <p>
          Keep this concise, professional, and focused on value. You can add a{" "}
          <strong className="font-bold text-neutral-100">mission statement</strong>, areas of expertise, and interests.
        </p>
      </div>
    </section>
  )
}
