import cplusplus from "../assets/logos/cplusplus.svg"
import css from "../assets/logos/css.svg"
import express from "../assets/logos/express.svg"
import git from "../assets/logos/git.svg"
import github from "../assets/logos/github.svg"
import html5 from "../assets/logos/html5.svg"
import java from "../assets/logos/java.svg"
import javascript from "../assets/logos/javascript.svg"
import mongodb from "../assets/logos/mongodb.svg"
import mysql from "../assets/logos/mysql.svg"
import node from "../assets/logos/nodedotjs.svg"
import python from "../assets/logos/python.svg"
import react from "../assets/logos/react.svg"
import Reveal from "../components/Reveal"

const techCategories = [
  { title: "Programming Languages", items: [cplusplus, java, python] },
  { title: "Frontend", items: [html5, css, javascript, react] },
  { title: "Backend", items: [node, express] },
  { title: "Database", items: [mongodb, mysql] },
  { title: "Tools", items: [git, github] },
]

const TechStack = () => {
  return (
    <section className="py-24 px-6">
      <Reveal>
        <div className="max-w-6xl mx-auto space-y-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center tracking-tight">
            Tech Stack
          </h2>

          {techCategories.map((category, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row md:items-start md:gap-20 gap-8"
            >
              <h3 className="text-lg font-semibold text-blue-500 min-w-[220px]">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-6">
                {category.items.map((icon, i) => (
                  <div
                    key={i}
                    className="p-4 bg-slate-700/30 backdrop-blur-md border border-slate-600/50 rounded-lg hover:border-blue-500 hover:shadow-md hover:shadow-blue-500/10 transition duration-300"
                  >
                    <img src={icon} alt="" className="h-10 w-auto opacity-90" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}

export default TechStack