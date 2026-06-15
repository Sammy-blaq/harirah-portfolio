import { useState, useEffect } from "react"

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#work", label: "My Work" },
  { href: "#specializations", label: "Specializations" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Say hello" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState("")

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]")
    const onScroll = () => {
      let current = ""
      sections.forEach((sec) => {
        if (window.scrollY >= sec.offsetTop - 100) current = sec.id
      })
      setActive(current)
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const handleLinkClick = (e, href) => {
    e.preventDefault()
    setOpen(false)
    document.body.style.overflow = ""
    const target = document.querySelector(href)
    if (target) {
      const offset = target.getBoundingClientRect().top + window.scrollY - 72
      window.scrollTo({ top: offset, behavior: "smooth" })
    }
  }

  const toggleMenu = () => {
    const next = !open
    setOpen(next)
    document.body.style.overflow = next ? "hidden" : ""
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[500] flex justify-between items-center px-[6%] py-[1.1rem] bg-[rgba(251,247,242,0.95)] backdrop-blur-md border-b border-[#E8DDD5]">
        <a href="#" className="font-hand text-[1.35rem] font-medium text-[#5C3D2E] no-underline">
          Ajeka Harirah ✦
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8 list-none">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                onClick={(e) => handleLinkClick(e, href)}
                className={`text-sm no-underline transition-colors duration-200 ${
                  active === href.slice(1)
                    ? "text-[#C4714A]"
                    : "text-[#9C8578] hover:text-[#C4714A]"
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className="flex md:hidden flex-col justify-center gap-[5px] bg-transparent border-none cursor-pointer p-1 z-[600]"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-[2px] bg-[#5C3D2E] rounded transition-transform duration-300 ${open ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`block w-6 h-[2px] bg-[#5C3D2E] rounded transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-[2px] bg-[#5C3D2E] rounded transition-transform duration-300 ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </nav>

      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-[rgba(59,42,32,0.4)] z-[300] md:hidden"
          onClick={() => { setOpen(false); document.body.style.overflow = "" }}
        />
      )}

      {/* Mobile sidebar */}
      <ul
        className={`fixed top-0 right-0 h-full w-[72vw] max-w-[300px] bg-[#FFFCF8] flex flex-col justify-center list-none z-[400] shadow-2xl transition-all duration-[350ms] md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {links.map(({ href, label }) => (
          <li key={href} className="border-b border-[#E8DDD5]">
            <a
              href={href}
              onClick={(e) => handleLinkClick(e, href)}
              className="block px-8 py-4 text-base text-[#5C3D2E] no-underline hover:text-[#C4714A] transition-colors"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </>
  )
}
