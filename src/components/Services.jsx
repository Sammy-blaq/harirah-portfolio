import { useFlyIn, useFlyInList } from "../hooks/useFlyIn"

const services = [
  { emoji: "📧", title: "Email Management", desc: "Organizing, filtering, and responding to emails so you never miss important messages." },
  { emoji: "📅", title: "Calendar Management", desc: "Scheduling appointments, managing meetings, and handling calendar updates across time zones." },
  { emoji: "📊", title: "Data Entry", desc: "Accurate and efficient data entry, record updates, and maintaining organized information." },
  { emoji: "🗂️", title: "File & Document Management", desc: "Organizing, naming, and managing files for easy access and better productivity." },
  { emoji: "✅", title: "Task & To-Do List Management", desc: "Creating, tracking, and managing your tasks so you stay on track and on time." },
  { emoji: "🛒", title: "Online Order & Purchase Support", desc: "Handling online orders, returns, and coordinating purchases on your behalf." },
  { emoji: "✈️", title: "Travel Arrangements", desc: "Booking flights, hotels, and transportation to make your travel stress-free." },
  { emoji: "🔍", title: "Research Support", desc: "Conducting online research and providing accurate information to support your decisions." },
  { emoji: "📋", title: "Report Preparation & Formatting", desc: "Creating, formatting, and organizing reports and documents professionally." },
  { emoji: "🖥️", title: "Presentation Support", desc: "Creating and designing presentations that are clear, engaging, and impactful." },
  { emoji: "💬", title: "Client & Customer Support", desc: "Handling inquiries, responding professionally, and ensuring client satisfaction." },
  { emoji: "🗓️", title: "Project Coordination", desc: "Supporting projects by tracking progress, deadlines, and deliverables." },
  { emoji: "⚡", title: "Other Ad-Hoc Support", desc: "Flexible support for any other tasks you need help with — just ask!" },
]

export default function Services() {
  const eyeRef   = useFlyIn("fly-from-left", 0.2)
  const titleRef = useFlyIn("fly-from-right", 0.2)
  const gridRef  = useFlyInList(0.1, 80)

  return (
    <section id="services" className="bg-[#F2E0D5] px-[8%] py-24">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end flex-wrap gap-6 mb-10">
          <div>
            <p ref={eyeRef} className="font-hand text-xl text-[#C4714A] mb-2 fly-from-left">How I can help</p>
            <h2 ref={titleRef} className="font-serif text-4xl text-[#5C3D2E] leading-snug fly-from-right">Services I offer</h2>
          </div>
          <p className="text-[#8B6355] text-sm max-w-xs leading-relaxed">
            Everything I do is designed to give you back time, reduce stress, and keep your business running smoothly.
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map(({ emoji, title, desc }) => (
            <div
              key={title}
              data-fly
              className="fly-up bg-[#FFFCF8] rounded-[18px] p-6 border border-[rgba(196,113,74,0.12)] hover:-translate-y-1 hover:shadow-lg transition-all duration-200"
            >
              <span className="text-3xl mb-4 block">{emoji}</span>
              <h3 className="font-serif text-lg text-[#5C3D2E] mb-2">{title}</h3>
              <p className="text-sm text-[#8B6355] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
