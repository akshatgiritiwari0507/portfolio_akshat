import Layout from "./layout/Layout"
import Hero from "./sections/Hero"
import About from "./sections/About"
import TechStack from "./sections/TechStack"
import Projects from "./sections/Projects"
import Contact from "./sections/Contact"

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Contact />
    </Layout>
  )
}

export default App
