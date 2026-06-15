import { useFlyIn, useFlyInList } from "../hooks/useFlyIn"
import emailOutreach from "../assets/images/email_outreach.webp"
import calendarMgmt from "../assets/images/calendar_mgmt.webp"
import emailLabeling from "../assets/images/email_labeling.webp"

const items = [
  { tag: "Outreach", title: "Email Outreach Strategy", desc: "Crafting personalized, professional outreach emails that open doors — from podcast invitations to partnership proposals and client acquisition.", img: emailOutreach },
  { tag: "Scheduling", title: "Calendar Management", desc: "Setting up recurring meetings, managing Google Calendar events with reminders, video links, and keeping your schedule conflict-free and organized.", img: calendarMgmt },
  { tag: "Email Management", title: "Email Labeling & Organization", desc: "Structuring your inbox with smart labels, filters, and categories so every email is easy to find, nothing gets missed, and your inbox stays clean.", img: emailLabeling },
]

export default function Specializations() {
  const eyeRef   = useFlyIn("fly-from-left", 0.2)
  const titleRef = useFlyIn("fly-from-right", 0.2)
  const gridRef  = useFlyInList(0.1, 120)

  return (
    <section id="specializations" className="bg-[#FBF7F2] px-[8%] py-24">
      <div className="max-w-6xl mx-auto">
        <p ref={eyeRef} className="font-hand text-xl text-[#C4714A] mb-2 fly-from-left">Beyond the basics</p>
        <h2 ref={titleRef} className="font-serif text-4xl text-[#5C3D2E] mb-3 fly-from-right">Additional Services &<br />Specializations</h2>
        <p className="text-[#8B6355] mb-10 max-w-lg">A deeper look at some specialized work I bring to the table.</p>

        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ tag, title, desc, img }) => (
            <div
              key={title}
              data-fly
              className="fly-up bg-[#FFFCF8] border border-[#E8DDD5] rounded-[20px] overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-200 group"
            >
              <div className="overflow-hidden h-[220px]">
                <img src={img} alt={title} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-400" />
              </div>
              <div className="p-6">
                <span className="inline-block text-xs font-medium bg-[#F2E0D5] text-[#C4714A] px-3 py-1 rounded-full border border-[rgba(196,113,74,0.2)] mb-3">{tag}</span>
                <h3 className="font-serif text-lg text-[#5C3D2E] mb-2">{title}</h3>
                <p className="text-sm text-[#8B6355] leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-[#8B6355] mb-4">Want to see more of my work?</p>
          <a
            href="https://drive.google.com/drive/folders/1QWtvZ7sAbttAchS_37e7GUKv3HIf8vMi"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-[#C4714A] text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-[#b0613d] transition-all hover:-translate-y-0.5"
          >
            View full project folder →
          </a>
        </div>
      </div>
    </section>
  )
}
