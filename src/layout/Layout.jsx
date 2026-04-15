import Navbar from "./Navbar"

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen text-white">
      <Navbar />
      <div className="pt-16">
        {children}
      </div>
    </div>
  )
}

export default Layout
