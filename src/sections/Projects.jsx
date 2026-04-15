import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Reveal from "../components/Reveal"

// StudyMate screenshots
import sm1 from "../assets/projects/studymate/1.png"
import sm2 from "../assets/projects/studymate/2.png"
import sm3 from "../assets/projects/studymate/3.png"
import sm4 from "../assets/projects/studymate/4.png"
import sm5 from "../assets/projects/studymate/5.png"
import sm6 from "../assets/projects/studymate/6.png"

// ML Predictor screenshots
import ml1 from "../assets/projects/mlpredictor/1.png"
import ml2 from "../assets/projects/mlpredictor/2.png"
import ml3 from "../assets/projects/mlpredictor/3.png"
import ml4 from "../assets/projects/mlpredictor/4.png"
import ml5 from "../assets/projects/mlpredictor/5.png"
import ml6 from "../assets/projects/mlpredictor/6.png"

// Document App screenshots
import doc1 from "../assets/projects/documentapp/1.png"
import doc2 from "../assets/projects/documentapp/2.png"
import doc3 from "../assets/projects/documentapp/3.png"

const projects = [
  {
    title: "StudyMate – ERP System",
    description:
      "Full-stack campus management system with role-based authentication, attendance tracking, assignments, notices, and structured API handling.",
    images: [sm1, sm2, sm3, sm4, sm5, sm6],
    github: "https://github.com/akshatgiritiwari0507/studymate-erp",
  },
  {
    title: "ML Disease Predictor",
    description:
      "Machine learning-based disease prediction system using multiple models with a Flask API for real-time recommendations.",
    images: [ml1, ml2, ml3, ml4, ml5, ml6],
    github: "https://github.com/akshatgiritiwari0507/ml-recomendation-syst",
  },
  {
    title: "Document Expiry Reminder",
    description:
      "Android application that tracks document expiration dates and sends timely notification reminders.",
    images: [doc1, doc2, doc3],
    github: "https://github.com/akshatgiritiwari0507/doc-reminder-flutter",
  },
]

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const [currentImage, setCurrentImage] = useState(0)

  const openProject = (project) => {
  preloadImages(project.images)
  setSelectedProject(project)
  setCurrentImage(0)
}

  const nextImage = () => {
    setCurrentImage((prev) =>
      prev === selectedProject.images.length - 1 ? 0 : prev + 1
    )
  }

  const prevImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? selectedProject.images.length - 1 : prev - 1
    )
  }
  const preloadImages = (images) => {
  images.forEach((src) => {
    const img = new Image()
    img.src = src
  })
}
  return (
    <section id="projects" className="py-28 px-6 relative">
      <Reveal>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center tracking-tight">
            Projects
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <div
                key={index}
                onClick={() => openProject(project)}
                className="group bg-slate-800/40 border border-slate-700 rounded-xl overflow-hidden hover:border-blue-500 hover:-translate-y-2 transition duration-300 cursor-pointer"
              >
                <div className="overflow-hidden">
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-56 object-contain bg-slate-900 group-hover:scale-105 transition duration-500"
                  />
                </div>

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
                <button
                  className="absolute top-4 right-4 text-slate-400 hover:text-white text-xl"
                  onClick={() => setSelectedProject(null)}
                >
                  ✕
                </button>

                <h3 className="text-2xl font-semibold mb-6 text-blue-500">
                  {selectedProject.title}
                </h3>

                <div className="relative mb-6">
                  <motion.img
  src={selectedProject.images[currentImage]}
  alt="Project Screenshot"
  initial={false}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.2 }}
  className="w-full max-h-[80vh] object-contain bg-slate-950 rounded-lg"
/>

                  {selectedProject.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700 hover:border-blue-500 hover:scale-110 transition-all duration-300 flex items-center justify-center text-xl shadow-lg"
                      >
                        ❮
                      </button>

                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700 hover:border-blue-500 hover:scale-110 transition-all duration-300 flex items-center justify-center text-xl shadow-lg"
                      >
                        ❯
                      </button>
                    </>
                  )}
                </div>

                <p className="mx-auto w-fit px-3 py-1 rounded-full bg-slate-800 text-sm text-slate-400 mb-6">
                  {currentImage + 1} / {selectedProject.images.length}
                </p>

                <p className="text-slate-400 mb-6 leading-8">
                  {selectedProject.description}
                </p>

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