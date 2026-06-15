import { useState, useEffect, useRef } from "react"
import { useFlyIn } from "../hooks/useFlyIn"

import googleDrive from "../assets/images/google_drive.webp"
import projectMgmt from "../assets/images/project_management.webp"
import meetingMins from "../assets/images/meeting_minutes.webp"
import calendar from "../assets/images/calender.webp"
import flyer from "../assets/images/flyer design.webp"
import emailTemplates from "../assets/images/email_template.webp"

const slides = [
  { num: "01", tag: "Cloud & Drive Management", title: "Google Drive Management", desc: "Organized and structured a client's entire Google Drive — creating clearly labeled folders, archiving old files, and setting up a system that made finding anything fast and easy.", img: googleDrive },
  { num: "02", tag: "Project Coordination", title: "Project Management", desc: "Set up and managed a full client pipeline using Trello — from new leads to won clients — ensuring every stage was tracked, updated, and nothing fell through the cracks.", img: projectMgmt },
  { num: "03", tag: "Report Preparation", title: "Budget Review Meeting Minutes", desc: "Prepared a comprehensive, professionally formatted budget review document covering meeting details, agenda, financial variance reports, action items, and decisions made.", img: meetingMins },
  { num: "04", tag: "Calendar Management", title: "Time Zone Calendar Management", desc: "Managed scheduling across multiple time zones — Toronto, Los Angeles, and London — ensuring every meeting was booked at the right time for all parties without any confusion.", img: calendar },
  { num: "05", tag: "Content Creation", title: "Flyer Design", desc: "Created a polished, eye-catching promotional flyer for a live webinar — complete with event details, speaker information, and a compelling call-to-action that drove registrations.", img: flyer },
  { num: "06", tag: "Email Management", title: "Email Template Layouts", desc: "Designed a set of professional email templates covering discovery calls, program information, and application confirmations — ensuring consistent, polished outreach.", img: emailTemplates },
]

export default function Work() {
  const [current, setCurrent] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const trackRef = useRef(null)
  const eyeRef   = useFlyIn("fly-from-left", 0.2)
  const titleRef = useFlyIn("fly-from-right", 0.2)
  const total = slides.length

  // Clone first and last for infinite loop
  const allSlides = [slides[total - 1], ...slides, slides[0]]

  useEffect(() => {
    if (trackRef.current) {
      trackRef.current.style.transition = "none"
      trackRef.current.style.transform = `translateX(-100%)`
    }
  }, [])

  const goTo = (n) => {
    if (isTransitioning) return
    setIsTransitioning(true)
    const next = n
    if (trackRef.current) {
      trackRef.current.style.transition = "transform 0.45s cubic-bezier(0.4,0,0.2,1)"
      trackRef.current.style.transform = `translateX(-${(next + 1) * 100}%)`
    }
    setCurrent(((next % total) + total) % total)
  }

  const handleTransitionEnd = () => {
    const raw = trackRef.current?.style.transform.match(/translateX\(-?([\d.]+)%\)/)
    if (!raw) { setIsTransitioning(false); return }
    const pos = parseFloat(raw[1]) / 100
    if (Math.round(pos) === 0) {
      trackRef.current.style.transition = "none"
      trackRef.current.style.transform = `translateX(-${total * 100}%)`
      setCurrent(total - 1)
    } else if (Math.round(pos) === total + 1) {
      trackRef.current.style.transition = "none"
      trackRef.current.style.transform = `translateX(-100%)`
      setCurrent(0)
    }
    setIsTransitioning(false)
  }

  useEffect(() => {
    if (isTransitioning) return

    const timer = window.setInterval(() => {
      goTo(current + 1)
    }, 5000)

    return () => window.clearInterval(timer)
  }, [current, isTransitioning, total])

  return (
    <section id="work" className="bg-[#FFFCF8] px-[8%] py-24">
      <div className="max-w-6xl mx-auto">
        <p ref={eyeRef} className="font-hand text-xl text-[#C4714A] mb-2 fly-from-left">A glimpse into my work</p>
        <h2 ref={titleRef} className="font-serif text-4xl text-[#5C3D2E] mb-3 fly-from-right">Real work, real results</h2>
        <p className="text-[#8B6355] mb-10">Here's a look at some of the tasks and projects I've handled for clients.</p>

        {/* Carousel */}
        <div className="overflow-hidden rounded-[18px]">
          <div
            ref={trackRef}
            className="flex"
            onTransitionEnd={handleTransitionEnd}
          >
            {allSlides.map((slide, i) => (
              <div key={i} className="min-w-full grid grid-cols-1 md:grid-cols-[1fr_1.4fr] border border-[#E8DDD5] rounded-[18px] overflow-hidden">
                <div className="bg-[#FBF7F2] p-10 flex flex-col justify-center">
                  <div className="font-hand text-6xl text-[#F2E0D5] leading-none mb-2">{slide.num}</div>
                  <span className="inline-block text-xs font-medium bg-[#EBF2EB] text-[#7A9E7E] px-3 py-1 rounded-full border border-[#c5dcc6] mb-4 w-fit">{slide.tag}</span>
                  <h3 className="font-serif text-2xl text-[#5C3D2E] mb-3">{slide.title}</h3>
                  <p className="text-sm text-[#8B6355] leading-relaxed">{slide.desc}</p>
                </div>
                <div className="overflow-hidden max-h-[420px]">
                  <img src={slide.img} alt={slide.title} className="w-full h-full object-cover object-top" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <button onClick={() => goTo(current - 1)} className="w-11 h-11 rounded-full border border-[#E8DDD5] bg-[#FFFCF8] text-[#5C3D2E] hover:border-[#C4714A] hover:text-[#C4714A] transition-all flex items-center justify-center text-lg">←</button>
          <div className="flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`w-2 h-2 rounded-full transition-all ${i === current ? "bg-[#C4714A] scale-125" : "bg-[#E8DDD5]"}`}
              />
            ))}
          </div>
          <button onClick={() => goTo(current + 1)} className="w-11 h-11 rounded-full border border-[#E8DDD5] bg-[#FFFCF8] text-[#5C3D2E] hover:border-[#C4714A] hover:text-[#C4714A] transition-all flex items-center justify-center text-lg">→</button>
        </div>
      </div>
    </section>
  )
}
