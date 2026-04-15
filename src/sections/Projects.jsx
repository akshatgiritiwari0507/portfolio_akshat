
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import studymate from "../assets/projects/studymate.png"
import mlpredictor from "../assets/projects/mlpredictor.png"
import documentapp from "../assets/projects/documentapp.png"
import Reveal from "../components/Reveal"


const projects = [
  {
    title: "StudyMate – ERP System",
    description:
      "Full-stack campus management system with role-based authentication, attendance tracking, assignments, notices, and structured API handling.",
    image: studymate,
    github: "https://github.com/YOUR_GITHUB_LINK",
  },
  {
    title: "ML Disease Predictor",
    description:
      "Machine learning-based disease prediction system using multiple models with a Flask API for real-time recommendations.",
    image: mlpredictor,
    github: "https://github.com/YOUR_GITHUB_LINK",
  },
  {
    title: "Document Expiry Reminder",
    description:
      "Android application that tracks document expiration dates and sends timely notification reminders.",
    image: documentapp,
    github: "https://github.com/YOUR_GITHUB_LINK",
  },
]

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id="projects" className="py-28 px-6 relative">
        <Reveal>
      <div className="max-w-6xl mx-auto">

<h2 className="text-3xl md:text-4xl font-bold mb-16 text-center tracking-tight">
          Projects
        </h2>

        {/* Project Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => setSelectedProject(project)}
              className="group bg-slate-800/40 border border-slate-700 rounded-xl overflow-hidden hover:border-blue-500 hover:-translate-y-2 transition duration-300 cursor-pointer"
            >
              {/* Screenshot */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-blue-500">
                  {project.title}
                </h3>

                <p className="text-slate-400 leading-8 text-sm">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
  {selectedProject && (
    <motion.div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={() => setSelectedProject(null)}
    >
      <motion.div
        className="bg-slate-900 border border-slate-700 rounded-xl max-w-3xl w-full p-8 relative"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-slate-400 hover:text-white text-xl"
          onClick={() => setSelectedProject(null)}
        >
          ✕
        </button>

        {/* Title */}
        <h3 className="text-2xl font-semibold mb-6 text-blue-500">
          {selectedProject.title}
        </h3>

        {/* Video Placeholder */}
        <div className="aspect-video mb-6">
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/FUKmyRLOlAA"
            title="Demo Video"
            allowFullScreen
          ></iframe>
        </div>

        {/* Description */}
        <p className="text-slate-400 mb-6 leading-8">
          {selectedProject.description}
        </p>

        {/* GitHub Button */}
        <a
          href={selectedProject.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-blue-500 hover:bg-blue-600 transition rounded-lg font-medium"
        >
          View on GitHub
        </a>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

      </Reveal>
    </section>
  )
}

export default Projects
