import { useEffect, useState } from "react"

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0f172a]/95 shadow-lg border-b border-slate-800"
          : "bg-[#0f172a]/70"
      } backdrop-blur-md`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <h1 className="text-lg font-semibold tracking-wide">
          AKSHAT GIRI TIWARI
        </h1>

        <div className="flex gap-8 text-slate-300">
          <a href="#about" className="hover:text-blue-500 transition">
            About
          </a>
          <a href="#projects" className="hover:text-blue-500 transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-blue-500 transition">
            Contact
          </a>
        </div>

      </div>
    </nav>
  )
}

export default Navbar
