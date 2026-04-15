import Reveal from "../components/Reveal"

const About = () => {
  return (
    <section id="about" className="py-28 px-6">
      <Reveal>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          {/* Left Side */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center tracking-tight">
              About Me
            </h2>

            <p className="text-slate-400 leading-8 text-lg max-w-xl">
              I’m a final-year Computer Science undergraduate with hands-on experience
              in software development and full-stack applications. I have worked with
              the <span className="text-blue-500 font-medium">MERN stack</span> and
              explored machine learning projects while strengthening my understanding of
              core Computer Science concepts.
            </p>

            <p className="text-slate-400 leading-8 text-lg max-w-xl mt-6">
              I have a solid foundation in
              <span className="text-blue-500 font-medium"> Data Structures</span>,
              <span className="text-blue-500 font-medium"> Algorithms</span>,
              OOP, and DBMS, and I am continuously improving my problem-solving and
              development skills as I prepare for Software Development roles.
            </p>
          </div>

          {/* Right Side Highlights */}
          <div className="space-y-6">
            <div className="p-6 bg-slate-800/40 rounded-xl border border-slate-700">
              <h3 className="font-semibold text-lg mb-2 text-blue-500">
                🎓 Education
              </h3>
              <p className="text-slate-400">
                B.Tech in Computer Science Engineering
                <br />
                JECRC University, Jaipur (2022–Present)
              </p>
            </div>

            <div className="p-6 bg-slate-800/40 rounded-xl border border-slate-700">
              <h3 className="font-semibold text-lg mb-2 text-blue-500">
                🧠 Core Strengths
              </h3>
              <p className="text-slate-400">
                Data Structures & Algorithms, OOPs, DBMS, Backend Architecture
              </p>
            </div>

            <div className="p-6 bg-slate-800/40 rounded-xl border border-slate-700">
              <h3 className="font-semibold text-lg mb-2 text-blue-500">
                🚀 Focus Area
              </h3>
              <p className="text-slate-400">
                Full Stack Development (MERN) & Scalable Backend Systems
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

export default About