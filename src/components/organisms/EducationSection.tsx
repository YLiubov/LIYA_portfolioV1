/** EducationSection renders the current programme and expected graduation. */
import { DisplayHeading } from '../atoms/DisplayHeading'
import { SectionLabel } from '../atoms/SectionLabel'

export function EducationSection() {
  return (
    <section
      className="content-section education-section"
      id="education"
      data-nav-section
      aria-labelledby="education-title"
    >
      <div className="section-main section-main-wide">
        <SectionLabel index={4} label="Education" />
        <DisplayHeading id="education-title">
          Learning by <em>building.</em>
        </DisplayHeading>
        <article className="education-card">
          <div className="education-year">
            <span>Expected</span>
            <strong>2027</strong>
          </div>
          <div className="education-details">
            <p className="eyebrow">TECHCOLLEGE · AALBORG, DENMARK</p>
            <h3>Web Developer — Webudvikler</h3>
            <div className="education-meta">
              <p><span>Current stage</span>Hovedforløb 2</p>
              <p><span>Expected graduation</span>Spring 2027</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}