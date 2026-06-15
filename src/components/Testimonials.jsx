import { useFlyIn, useFlyInList } from "../hooks/useFlyIn"

const testimonials = [
  { name: "Giselle Palmer", role: "Founder/CEO", quote: "Ajeka has been an absolute lifesaver. My inbox used to be a daily source of stress — now it's completely handled. She anticipates things before I even ask." },
  { name: "Daniel K.", role: "CEO, E-commerce Brand", quote: "Professional, reliable, and so organized. Ajeka took ownership of our customer support and our clients noticed the difference almost immediately." },
  { name: "Amara T.", role: "Independent Consultant", quote: "I never have to follow up. She delivers on time, communicates clearly, and flags issues before they become problems. That proactiveness is genuinely rare." },
]

export default function Testimonials() {
  const eyeRef   = useFlyIn("fly-from-left", 0.2)
  const titleRef = useFlyIn("fly-from-right", 0.2)
  const gridRef  = useFlyInList(0.1, 120)

  return (
    <section id="testimonials" className="bg-[#5C3D2E] px-[8%] py-24">
      <div className="max-w-6xl mx-auto">
        <p ref={eyeRef} className="font-hand text-xl text-[#D98B6A] mb-2 fly-from-left">Kind words</p>
        <h2 ref={titleRef} className="font-serif text-4xl text-[#FFFCF8] mb-10 fly-from-right">What clients say</h2>

        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map(({ name, role, quote }) => (
            <div
              key={name}
              data-fly
              className="fly-up bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.1)] rounded-[18px] p-8"
            >
              <div className="text-[#D98B6A] mb-4">★★★★★</div>
              <p className="font-serif italic text-[rgba(255,252,248,0.85)] leading-relaxed mb-6">"{quote}"</p>
              <p className="text-sm font-medium text-[#FFFCF8]">{name}</p>
              <p className="text-xs text-[#D98B6A] mt-1">{role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
