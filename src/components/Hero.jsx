import { useEffect, useRef } from "react"
import headshot from "../assets/images/headshot.webp"

export default function Hero({ loading }) {
  const greetingRef = useRef(null)
  const nameRef = useRef(null)
  const imgRef = useRef(null)

  useEffect(() => {
    if (!loading) {
      setTimeout(() => greetingRef.current?.classList.add("revealed"), 100)
      setTimeout(() => nameRef.current?.classList.add("revealed"), 280)
      setTimeout(() => imgRef.current?.classList.add("hero-img-visible"), 200)
    }
  }, [loading])

  return (
    <section id="home" className="min-h-screen pt-[72px] grid grid-cols-1 md:grid-cols-2">
      {/* Left */}
      <div className="bg-[#FFFCF8] flex flex-col justify-center px-[8%] py-16 relative overflow-hidden">
        <div className="absolute -top-20 -right-16 w-80 h-80 bg-[#F2E0D5] rounded-[60%_40%_70%_30%/50%_60%_40%_50%] opacity-50 z-0" />
        <div className="relative z-10">
          <p ref={greetingRef} className="font-hand text-2xl text-[#C4714A] mb-3 fly-from-left">
            Hi, I'm Ajeka 👋
          </p>
          <h1 ref={nameRef} className="font-serif text-5xl lg:text-6xl leading-tight text-[#5C3D2E] mb-5 fly-from-bottom">
            Your Dedicated<br />Virtual Assistant
          </h1>
          <p className="text-base font-light text-[#8B6355] max-w-md leading-relaxed mb-8">
            I help entrepreneurs, business owners, and busy professionals stay organized, productive, and focused on what truly matters — growing their business.
          </p>
          <div className="flex gap-4 flex-wrap items-center mb-8">
            <a
              href="#contact"
              className="bg-[#C4714A] text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-[#b0613d] transition-all hover:-translate-y-0.5"
            >
              Let's work together
            </a>
            <a
              href="#work"
              className="text-[#C4714A] text-sm font-medium border-b border-[#C4714A] pb-0.5 hover:opacity-70 transition-opacity"
            >
              See my work →
            </a>
          </div>
          <span className="inline-flex items-center gap-2 bg-[#EBF2EB] text-[#7A9E7E] text-xs font-medium px-4 py-2 rounded-full border border-[#c5dcc6]">
            <span className="w-2 h-2 rounded-full bg-[#7A9E7E] avail-dot" />
            Available for new clients
          </span>
        </div>
      </div>

      {/* Right — photo */}
      <div className="relative overflow-hidden min-h-[340px] md:min-h-0">
        <img
          ref={imgRef}
          src={headshot}
          alt="Ajeka Harirah"
          className="w-full h-full object-cover object-top hero-img-hidden"
        />
      </div>
    </section>
  )
}
