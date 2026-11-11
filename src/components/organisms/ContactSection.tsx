// ContactSection — организм: приглашение связаться и будущие контактные данные.
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
      <div className="contact-shape" aria-hidden="true" />
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
          <dl className="contact-details">
            <div>
              <dt>Email</dt>
              <dd>[Email address]</dd>
            </div>
            <div>
              <dt>GitHub</dt>
              <dd>[GitHub link]</dd>
            </div>
            <div>
              <dt>LinkedIn</dt>
              <dd>[LinkedIn link]</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}