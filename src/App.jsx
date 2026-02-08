import React, { useState, useEffect } from 'react'
import Summary from './components/Summary.jsx'
import SocialLinks from './components/SocialLinks.jsx'
import About from './components/About.jsx'
import Experience from './components/Experience.jsx'
import Skills from './components/Skills.jsx'
import Education from './components/Education.jsx'
import Contact from './components/Contact.jsx'

const NAV = ['Summary', 'About', 'Experience', 'Skills', 'Education', 'Social', 'Contact']

export default function App() {
  const [mob, setMob] = useState(false)

  const initial = () => {
    const s = typeof window !== 'undefined' ? localStorage.getItem('theme') : null
    return s === 'dark' || s === 'light' ? s : 'light'
  }
  const [theme, setTheme] = useState(initial)

  useEffect(() => {
    const r = document.documentElement
    r.setAttribute('theme', theme)
    theme === 'dark' ? r.classList.add('dark') : r.classList.remove('dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <div className="min-h-screen flex flex-col">
      {/* HEADER */}
      <div className="robot-image"></div>
      <div className='snowfall-container'>
        <img className="tech-fall" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="AWS" />
        <img className="tech-fall" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
        <img className="tech-fall" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" />
        <img className="tech-fall" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" />
        <img className="tech-fall" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" alt="Spring" />
        <img className="tech-fall" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
        <img className="tech-fall" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" alt="Terraform" />
        <img className="tech-fall" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" alt="Kubernetes" />
        <img className="tech-fall" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" alt="Angular" />
        <img className="tech-fall" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" alt="Jenkins" />
        <img className="tech-fall" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" />
        <img className="tech-fall" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" />
      </div>
      <div className='portfolio-content'>
        <header className="v-header sticky top-0 z-50">
          <nav className="max-w-4xl mx-auto px-5 h-14 flex items-center justify-between">
            <a href="#summary" className="font-extrabold text-base tracking-tight" style={{ color: 'var(--accent)' }}>
              Sri Harsha
            </a>

            <ul className="flex max-[749px]:hidden gap-1">
              {NAV.map(n => (
                <li key={n}><a href={`#${n.toLowerCase()}`} className="v-nav">{n}</a></li>
              ))}
            </ul>

            <div className="flex items-center gap-2">
              <button
                aria-label="Toggle theme"
                onClick={() => setTheme(t => t === 'dark' ? 'light' : 'dark')}
                className="w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                style={{ background: 'var(--accent-soft)', color: 'var(--accent)' }}
              >
                {theme === 'dark' ? (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4"><path d="M7.455 2.004a.75.75 0 01.26.77 7 7 0 009.958 7.967.75.75 0 011.067.853A8.5 8.5 0 116.647 1.921a.75.75 0 01.808.083z"/></svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4"><path d="M10 2a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 2zm0 13a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 15zm-8-5a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5A.75.75 0 012 10zm13 0a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5A.75.75 0 0115 10zm-1.293-4.707a.75.75 0 010 1.06l-1.06 1.061a.75.75 0 11-1.061-1.06l1.06-1.061a.75.75 0 011.061 0zm-8.486 8.486a.75.75 0 010 1.06l-1.06 1.061a.75.75 0 11-1.061-1.06l1.06-1.061a.75.75 0 011.061 0zM5.293 5.293a.75.75 0 011.061 0l1.06 1.061a.75.75 0 01-1.06 1.06L5.293 6.354a.75.75 0 010-1.06zm8.486 8.486a.75.75 0 011.061 0l1.06 1.061a.75.75 0 01-1.06 1.06l-1.061-1.06a.75.75 0 010-1.06zM10 7a3 3 0 100 6 3 3 0 000-6z"/></svg>
                )}
              </button>
              <button
                aria-label="Menu"
                aria-expanded={mob}
                onClick={() => setMob(v => !v)}
                className="min-[750px]:hidden w-8 h-8 rounded-lg border flex items-center justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  {mob
                    ? <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"/>
                    : <path fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 5A.75.75 0 012.75 9h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 9.75zm0 5a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z" clipRule="evenodd"/>
                  }
                </svg>
              </button>
            </div>
          </nav>
          {mob && <div className="min-[750px]:hidden fixed inset-0 z-40" style={{ background: 'var(--overlay)' }} onClick={() => setMob(false)} />}
          <div className={`min-[750px]:hidden absolute inset-x-0 top-full ${mob ? 'block' : 'hidden'} z-50`}>
            <div className="mx-4 mt-1 rounded-xl overflow-hidden border" style={{ boxShadow: 'var(--shadow-lg)', background: 'var(--surface)' }}>
              {NAV.map(n => (
                <a key={n} href={`#${n.toLowerCase()}`} onClick={() => setMob(false)} className="v-mob border-b last:border-0">{n}</a>
              ))}
            </div>
          </div>
        </header>

        {/* MAIN */}
        <main className="flex-1 max-w-4xl w-full mx-auto px-5">
          <section id="summary" className="pt-10 pb-14 md:pt-16 md:pb-20"><Summary /></section>
          <section id="about" className="py-14 md:py-20"><About /></section>
          <section id="experience" className="py-14 md:py-20"><Experience /></section>
          <section id="skills" className="py-14 md:py-20"><Skills /></section>
          <section id="education" className="py-14 md:py-20"><Education /></section>
          <section id="social" className="py-14 md:py-20"><SocialLinks /></section>
          <section id="contact" className="py-14 md:py-20"><Contact /></section>
        </main>

        <footer className="v-footer max-w-4xl mx-auto w-full px-5" style={{ borderTop: '1px solid var(--border)' }}>
          &copy; {new Date().getFullYear()} Sri Harsha Godavarthi
        </footer>
      </div>
    </div>
  )
}
