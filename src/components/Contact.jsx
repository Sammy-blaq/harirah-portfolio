import { useFlyIn } from "../hooks/useFlyIn"

export default function Contact() {
  const eyeRef   = useFlyIn("fly-from-left", 0.2)
  const titleRef = useFlyIn("fly-from-right", 0.2)
  const cardRef  = useFlyIn("fly-up", 0.15)

  return (
    <section id="contact" className="bg-[#FBF7F2] px-[8%] py-24 text-center">
      <div className="max-w-6xl mx-auto">
        <p ref={eyeRef} className="font-hand text-xl text-[#C4714A] mb-2 fly-from-left">Get in touch</p>
        <h2 ref={titleRef} className="font-serif text-4xl text-[#5C3D2E] fly-from-right">Ready to get some time back?</h2>

        <div ref={cardRef} className="fly-up bg-[#FFFCF8] border border-[#E8DDD5] rounded-[28px] max-w-xl mx-auto mt-10 p-12">
          <p className="font-hand text-2xl text-[#C4714A] mb-3">Let's chat! ✦</p>
          <p className="text-[#8B6355] leading-relaxed mb-8">
            Whether you need ongoing support or help with a specific project, I'd love to hear about your business. No pressure — just a friendly conversation to see if we're a great fit.
          </p>
          <div className="flex flex-col gap-3 items-center">
            <a
              href="mailto:hareerah951@gmail.com"
              className="flex items-center justify-center gap-2 w-full max-w-xs bg-[#C4714A] text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-[#b0613d] transition-all"
            >
              📬 Send me an email
            </a>
            <a
              href="https://www.linkedin.com/in/harirah-seidu-ajeka-825131298"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 w-full max-w-xs border border-[#E8DDD5] text-[#8B6355] px-8 py-3 rounded-full text-sm font-medium hover:border-[#C4714A] hover:text-[#C4714A] transition-all"
            >
              Connect on LinkedIn
            </a>
          </div>
          <p className="text-xs text-[#9C8578] mt-6">Available for remote work worldwide · Usually responds within 24 hours</p>
        </div>
      </div>
    </section>
  )
}
