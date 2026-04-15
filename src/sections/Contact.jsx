import Reveal from "../components/Reveal"

const Contact = () => {
  return (
    <section id="contact" className="py-28 px-6">
        <Reveal>
      <div className="max-w-4xl mx-auto text-center">

<h2 className="text-3xl md:text-4xl font-bold mb-16 text-center tracking-tight">
          Get In Touch
        </h2>

        <p className="text-slate-400 mb-12 leading-8">
          I'm currently open to Software Development and Full Stack opportunities.  
          Feel free to reach out for collaborations, discussions, or opportunities.
        </p>

        <div className="flex flex-wrap justify-center gap-6">

          <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=akshatgiritiwari@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="px-6 py-3 bg-blue-500 hover:bg-blue-600 transition rounded-lg font-medium"
>
  Email Me
</a>


          <a
            href="https://www.linkedin.com/in/akshat0507/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-slate-600 hover:border-blue-500 hover:text-blue-500 transition rounded-lg font-medium"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/akshatgiritiwari0507"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-slate-600 hover:border-blue-500 hover:text-blue-500 transition rounded-lg font-medium"
          >
            GitHub
          </a>

        </div>

      </div>
      </Reveal>
    </section>
  )
}

export default Contact
