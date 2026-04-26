import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Blog from './components/Blog'
import Papers from './components/Papers'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './styles/glassmorphism.css'

function App() {
  // Handle hash navigation when coming from external pages
  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      // Small delay to ensure DOM is fully rendered
      setTimeout(() => {
        const element = document.querySelector(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    }
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Testimonials />
        <Blog />
        <Papers />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
