/** App composes the page organisms and manages its theme and active section. */
import { useEffect, useState } from 'react'
import './App.css'
import type { ColorTheme } from './components/molecules/ThemeToggle'
import { SectionIndex } from './components/molecules/SectionIndex'
import { AboutSection } from './components/organisms/AboutSection'
import { ContactSection } from './components/organisms/ContactSection'
import { EducationSection } from './components/organisms/EducationSection'
import { HeroSection } from './components/organisms/HeroSection'
import { ProfileSidebar } from './components/organisms/ProfileSidebar'
import { ProjectsSection } from './components/organisms/ProjectsSection'
import { SiteFooter } from './components/organisms/SiteFooter'
import { SiteHeader } from './components/organisms/SiteHeader'
import { SkillsSection } from './components/organisms/SkillsSection'

function getInitialTheme(): ColorTheme {
  try {
    return window.localStorage.getItem('color-mode') === 'dark' ? 'dark' : 'light'
  } catch (error) {
    console.error('Could not read the saved color theme.', error)
    return 'light'
  }
}

function App() {
  const [theme, setTheme] = useState<ColorTheme>(getInitialTheme)
  const [activeSection, setActiveSection] = useState('about')

  useEffect(() => {
    try {
      window.localStorage.setItem('color-mode', theme)
    } catch (error) {
      console.error('Could not save the selected color theme.', error)
    }
  }, [theme])

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('[data-nav-section]')
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)

        if (visibleSections[0]) {
          setActiveSection(visibleSections[0].target.id)
        }
      },
      { rootMargin: '-20% 0px -65% 0px' },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="site" id="top" data-theme={theme}>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <SiteHeader
        activeSection={activeSection}
        theme={theme}
        onThemeChange={setTheme}
      />

      <main id="main-content">
        <HeroSection />
        <div className="content-layout">
          <ProfileSidebar
            activeSection={activeSection}
            theme={theme}
            onThemeChange={setTheme}
          />
          <div className="content-column">
            <SectionIndex activeSection={activeSection} variant="mobile" />
            <div className="section-content">
              <AboutSection />
              <ProjectsSection />
              <SkillsSection />
              <EducationSection />
              <ContactSection />
            </div>
            <SiteFooter />
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
