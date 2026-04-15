import profile from "../assets/profile.jpeg"

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center px-6 overflow-hidden">
      
      {/* Glow Background */}
      <div className="absolute w-[500px] h-[500px] bg-blue-500/10 blur-3xl rounded-full top-[-100px] left-1/2 -translate-x-1/2"></div>

      <div className="relative max-w-6xl mx-auto w-full grid md:grid-cols-2 items-center gap-12">

        {/* Left Content */}
        <div className="text-center md:text-left">
          
<h1 className="text-4xl md:text-6xl font-bold leading-[1.1] tracking-tight">
            Hi, I'm{" "}
            <span className="text-blue-500">
              Akshat Giri Tiwari
            </span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-slate-400 leading-8">
            Full Stack Developer specializing in MERN stack and building
            scalable applications with clean architecture and real-world impact.
          </p>

          <div className="mt-10 flex justify-center md:justify-start gap-6 flex-wrap">

            <a
              href="#projects"
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 transition-all duration-300 rounded-lg font-medium shadow-lg shadow-blue-500/20"
            >
              View Projects
            </a>

            <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-slate-600 hover:border-blue-500 hover:text-blue-500 transition-all duration-300 rounded-lg font-medium"
            >
                View Resume
            </a>


          </div>

        </div>

        {/* Right Photo */}
        <div className="flex justify-center md:justify-end">
          <div className="relative group">
            
            {/* Glow Ring */}
            <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-xl group-hover:bg-blue-500/30 transition duration-500"></div>

            <img
              src={profile}
              alt="Akshat Tiwari"
              className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-slate-700 group-hover:scale-105 transition duration-500"
            />

          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero
