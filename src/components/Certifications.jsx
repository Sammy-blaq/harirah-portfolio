import { useFlyIn, useFlyInList } from "../hooks/useFlyIn"
import certHR from "../assets/images/certificate_hr.webp"
import certCRM from "../assets/images/CRM Certificate.webp"

export default function Certifications() {
  const eyeRef   = useFlyIn("fly-from-left", 0.2)
  const titleRef = useFlyIn("fly-from-right", 0.2)
  const gridRef  = useFlyInList(0.1, 150)

  return (
    <section id="certifications" className="bg-[#EBF2EB] px-[8%] py-24">
      <div className="max-w-6xl mx-auto">
        <p ref={eyeRef} className="font-hand text-xl text-[#C4714A] mb-2 fly-from-left">Credentials</p>
        <h2 ref={titleRef} className="font-serif text-4xl text-[#5C3D2E] mb-3 fly-from-right">Certifications</h2>
        <p className="text-[#8B6355] mb-10">Proof of commitment to continuous learning and professional growth.</p>

        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* HR Certificate */}
          <div
            data-fly
            className="fly-up bg-[#FFFCF8] border border-[#E8DDD5] rounded-[20px] overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-200 group"
          >
            <div className="relative overflow-hidden h-[260px]">
              <img src={certHR} alt="HR Certificate" className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-400" />
              <div className="absolute inset-0 bg-[rgba(92,61,46,0.55)] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a
                  href="https://forms.gle/8o55ARBzzvtHWqrd6"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#FFFCF8] text-[#5C3D2E] px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#F2E0D5] transition-colors"
                >
                  Verify Certificate ↗
                </a>
              </div>
            </div>
            <div className="p-6">
              <span className="text-xs font-semibold text-[#7A9E7E] uppercase tracking-wider">✦ Certified</span>
              <h3 className="font-serif text-lg text-[#5C3D2E] mt-2 mb-1">Human Resources (HR) Management</h3>
              <p className="text-sm text-[#C4714A] font-medium mb-3">SkillForge Africa Institute</p>
              <div className="flex gap-4 flex-wrap text-xs text-[#9C8578]">
                <span>📅 May 20, 2026</span>
                <span>🔖 SFAI/HR/2026–012</span>
              </div>
            </div>
          </div>

          {/* CRM Certificate */}
          <div
            data-fly
            className="fly-up bg-[#FFFCF8] border border-[#E8DDD5] rounded-[20px] overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-200 group"
            style={{ transitionDelay: "150ms" }}
          >
            <div className="relative overflow-hidden h-[260px]">
              <img src={certCRM} alt="CRM Certificate" className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-400" />
              <div className="absolute inset-0 bg-[rgba(92,61,46,0.55)] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="bg-[#FFFCF8] text-[#5C3D2E] px-5 py-2 rounded-full text-sm font-semibold">Certificate preview</span>
              </div>
            </div>
            <div className="p-6">
              <span className="text-xs font-semibold text-[#7A9E7E] uppercase tracking-wider">✦ Certified</span>
              <h3 className="font-serif text-lg text-[#5C3D2E] mt-2 mb-1">Customer Relationship Management</h3>
              <p className="text-sm text-[#C4714A] font-medium mb-3">AQskill</p>
              <div className="flex gap-4 flex-wrap text-xs text-[#9C8578]">
                <span>📅 May 5, 2026</span>
                <span>🔖 1425A210406</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
