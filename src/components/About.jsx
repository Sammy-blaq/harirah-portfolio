import headshot from "../assets/images/headshot.webp"
import { useFlyIn } from "../hooks/useFlyIn"

export default function About() {
  const imgRef   = useFlyIn("fly-left", 0.2)
  const eyeRef   = useFlyIn("fly-from-left", 0.2)
  const titleRef = useFlyIn("fly-from-right", 0.2)

  const traits = ["Organized","Reliable","Proactive","Detail-oriented","Adaptable","Discreet"]

  return (
    <section id="about" className="bg-[#FBF7F2] px-[8%] py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
        {/* Photo */}
        <div
          ref={imgRef}
          className="fly-left rounded-full overflow-hidden aspect-square max-w-[380px] mx-auto w-full"
        >
          <img src={headshot} alt="Ajeka Harirah" className="w-full h-full object-cover object-top" />
        </div>

        {/* Content */}
        <div>
          <p ref={eyeRef} className="font-hand text-xl text-[#C4714A] mb-2 fly-from-left">A little about me</p>
          <h2 ref={titleRef} className="font-serif text-4xl text-[#5C3D2E] leading-snug mb-5 fly-from-right">
            Dedicated support, so you can focus on growth
          </h2>
          <p className="text-[#8B6355] leading-relaxed mb-4">
            Hello! I'm Harirah Ajeka, a dedicated and detail-oriented Virtual Assistant passionate about helping entrepreneurs, business owners, and busy professionals stay organized, productive, and focused on growing their businesses.
          </p>
          <p className="text-[#8B6355] leading-relaxed mb-4">
            I specialize in reliable administrative support, email and calendar management, data entry, internet research, customer support, document organization, and other day-to-day business operations.
          </p>
          <p className="text-[#8B6355] leading-relaxed mb-6">
            My goal is simple: to make your work easier so you can focus on what matters most.
          </p>
          <div className="flex flex-wrap gap-2">
            {traits.map((t) => (
              <span
                key={t}
                className="bg-[#F2E0D5] text-[#C4714A] text-xs font-medium px-4 py-1.5 rounded-full border border-[rgba(196,113,74,0.2)]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
