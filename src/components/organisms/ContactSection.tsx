/** ContactSection renders the job-search introduction and contact placeholder. */
import { DisplayHeading } from '../atoms/DisplayHeading'
import { SectionLabel } from '../atoms/SectionLabel'

export function ContactSection() {
  return (
    <section
      className="content-section contact-section"
      id="contact"
      data-nav-section
      aria-labelledby="contact-title"
    >
      <div className="section-main section-main-wide">
        <SectionLabel index={5} label="Contact" />
        <DisplayHeading id="contact-title">
          Let’s <em>connect.</em>
        </DisplayHeading>
        <div className="contact-content">
          <p>
            I’m looking for my first opportunity in frontend development. If
            your team has room for a junior developer with an interest in
            design and implementation, I’d love to hear from you.
          </p>
          <div className="contact-placeholder">
            Contact links will be added before the site is published.
          </div>
        </div>
      </div>
    </section>
  )
}