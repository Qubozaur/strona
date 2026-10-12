import { useEffect, useState } from 'react'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Education from './components/Education.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

function initialTheme() {
  const saved = localStorage.getItem('theme')
  if (saved === 'dark' || saved === 'light') return saved

  return window.matchMedia('(prefers-color-scheme: light)').matches
    ? 'light'
    : 'dark'
}

export default function App() {
  const [theme, setTheme] = useState(initialTheme)
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <>
      <Nav
        theme={theme}
        onToggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
