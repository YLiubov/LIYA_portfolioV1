/** ProjectsSection renders the portfolio's current case-study placeholder. */
import { DisplayHeading } from '../atoms/DisplayHeading'
import { SectionLabel } from '../atoms/SectionLabel'

export function ProjectsSection() {
  return (
    <section
      className="content-section projects-section"
      id="projects"
      data-nav-section
      aria-labelledby="projects-title"
    >
      <div className="section-main section-main-wide">
        <div className="section-heading-row">
          <div>
            <SectionLabel index={2} label="Selected work" />
            <DisplayHeading id="projects-title">
              Projects<span className="heading-period">.</span>
            </DisplayHeading>
          </div>
          <p className="section-description">
            A selection of work from my studies and personal practice.
          </p>
        </div>
        <div className="projects-empty">
          <span className="empty-mark" aria-hidden="true">+</span>
          <p>Project case studies will be added here.</p>
          <span>I’m working on the next one.</span>
        </div>
      </div>
    </section>
  )
}