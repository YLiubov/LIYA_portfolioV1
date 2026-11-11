// AboutSection — организм: раздел обо мне, моих интересах и обучении.
import { DisplayHeading } from '../atoms/DisplayHeading'
import { SectionLabel } from '../atoms/SectionLabel'

export function AboutSection() {
  return (
    <section
      className="content-section about-section"
      id="about"
      data-nav-section
      aria-labelledby="about-title"
    >
      <div className="section-main section-main-wide">
        <SectionLabel index={1} label="About" />
        <DisplayHeading id="about-title">
          Design thinking meets
          <br />
          <em>working code.</em>
        </DisplayHeading>
        <p className="about-lead">
          I’m currently completing Hovedforløb 2 of the Web Developer
          programme at TECHCOLLEGE.
        </p>
        <div className="about-columns">
          <p>
            What interests me most is the connection between how a website
            looks and how it works. I’m drawn to colour, typography, and
            layout, as well as the structure that helps people find their
            way through a site.
          </p>
          <p>
            Through my studies, I’m developing my understanding of
            JavaScript, React, APIs, and version control. My next step is to
            bring this foundation into real projects and grow through
            practical experience and feedback.
          </p>
        </div>
      </div>
    </section>
  )
}