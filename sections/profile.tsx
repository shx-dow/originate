import Image from "next/image"

export default function Profile() {
  return (
    <section aria-labelledby="profile-heading" className="flex items-center gap-6">
      <div className="relative">
        <Image
          src="/pfp.jpg"
          alt="profile picture"
          width={96}
          height={96}
          className="h-22 w-22 rounded-full"
          priority
        />
      </div>
      <div className="min-w-0">
        <h1 id="profile-heading" className="text-xl sm:text-2xl font-bold text-neutral-50">
          Chitransh
        </h1>
        <p className="mt-1 text-neutral-400">@_chitransh09</p>
      </div>
    </section>
  )
}
