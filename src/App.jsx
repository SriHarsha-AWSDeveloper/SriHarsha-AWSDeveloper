import React, { useState } from 'react'
import Summary from './components/Summary.jsx'
import SocialLinks from './components/SocialLinks.jsx'
import About from './components/About.jsx'
import Experience from './components/Experience.jsx'
import Skills from './components/Skills.jsx'
import Education from './components/Education.jsx'
import Contact from './components/Contact.jsx'

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false)
  return (
    <div>
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b relative">
        <nav className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <span className="font-bold text-lg">Harsha</span>
          <ul className="flex max-[749px]:hidden gap-4 text-sm whitespace-nowrap flex-nowrap overflow-hidden max-w-[65%]">
            <li><a href="#summary" className="hover:text-blue-600">Summary</a></li>
            <li><a href="#social" className="hover:text-blue-600">Social</a></li>
            <li><a href="#about" className="hover:text-blue-600">About</a></li>
            <li><a href="#experience" className="hover:text-blue-600">Experience</a></li>
            <li><a href="#skills" className="hover:text-blue-600">Skills</a></li>
            <li><a href="#education" className="hover:text-blue-600">Education</a></li>
            <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
          </ul>
          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="min-[750px]:hidden inline-flex items-center justify-center p-2 rounded-md border bg-white text-gray-700 hover:bg-slate-100"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
              {mobileOpen ? (
                <>
                  <line x1="6" y1="6" x2="18" y2="18" />
                  <line x1="6" y1="18" x2="18" y2="6" />
                </>
              ) : (
                <>
                  <line x1="4" y1="6" x2="20" y2="6" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="18" x2="20" y2="18" />
                </>
              )}
            </svg>
          </button>
        </nav>
        {/* Backdrop */}
        {mobileOpen && (
          <div
            className="min-[750px]:hidden fixed inset-0 bg-black/30 z-40"
            onClick={() => setMobileOpen(false)}
          />
        )}
        {/* Mobile menu panel (overlay, outside normal flow) */}
        <div className={`min-[750px]:hidden absolute inset-x-0 top-full ${mobileOpen ? 'block' : 'hidden'} z-50`}> 
          <nav className="max-w-5xl mx-auto px-4">
            <ul className="bg-white rounded-b-xl shadow-lg overflow-hidden divide-y divide-slate-200">
              <li><a href="#summary" onClick={() => setMobileOpen(false)} className="block w-full px-4 py-3 text-base text-gray-800 hover:bg-slate-50">Summary</a></li>
              <li><a href="#social" onClick={() => setMobileOpen(false)} className="block w-full px-4 py-3 text-base text-gray-800 hover:bg-slate-50">Social</a></li>
              <li><a href="#about" onClick={() => setMobileOpen(false)} className="block w-full px-4 py-3 text-base text-gray-800 hover:bg-slate-50">About</a></li>
              <li><a href="#experience" onClick={() => setMobileOpen(false)} className="block w-full px-4 py-3 text-base text-gray-800 hover:bg-slate-50">Experience</a></li>
              <li><a href="#skills" onClick={() => setMobileOpen(false)} className="block w-full px-4 py-3 text-base text-gray-800 hover:bg-slate-50">Skills</a></li>
              <li><a href="#education" onClick={() => setMobileOpen(false)} className="block w-full px-4 py-3 text-base text-gray-800 hover:bg-slate-50">Education</a></li>
              <li><a href="#contact" onClick={() => setMobileOpen(false)} className="block w-full px-4 py-3 text-base text-gray-800 hover:bg-slate-50">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4">
        <section id="summary" className="py-12 md:py-16">
          <Summary />
        </section>
        <section id="about" className="py-12 md:py-16 border-t">
          <About />
        </section>
        <section id="experience" className="py-12 md:py-16 border-t">
          <Experience />
        </section>
        <section id="skills" className="py-12 md:py-16 border-t">
          <Skills />
        </section>
        <section id="education" className="py-12 md:py-16 border-t">
          <Education />
        </section>
        <section id="social" className="py-12 md:py-16 border-t">
          <SocialLinks />
        </section>
        <section id="contact" className="py-12 md:py-16 border-t">
          <Contact />
        </section>
      </main>

      <footer className="text-center text-xs text-gray-500 py-8 border-t">
        © {new Date().getFullYear()} Harsha. All rights reserved.
      </footer>
    </div>
  )
}
