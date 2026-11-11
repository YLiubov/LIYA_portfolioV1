// HeroSection — организм: первый экран с именем, представлением и ссылками.
import { ActionLink } from '../atoms/ActionLink'

export function HeroSection() {
  return (
    <section className="hero" id="hero" aria-labelledby="hero-title">
      <div className="hero-shape hero-shape-mint" aria-hidden="true" />
      <div className="hero-shape hero-shape-pink" aria-hidden="true" />

      <p className="eyebrow hero-label">Junior Frontend Developer · Aalborg, Denmark</p>
      <h1 id="hero-title">
        Liubov
        <br />
        <span>Yakymenko</span>
      </h1>

      <div className="hero-bottom">
        <p className="hero-tagline">
          An eye for design.
          <br />
          A focus on how websites work.
        </p>
        <div className="hero-intro">
          <p>
            I’m studying Web Development at TECHCOLLEGE in Aalborg, Denmark,
            with an interest in frontend development, interface design, and
            clear website navigation.
          </p>
          <p>
            I’m looking for my first opportunity to contribute to a team and
            learn alongside experienced developers.
          </p>
          <div className="hero-actions">
            <ActionLink href="#projects" variant="primary">
              View projects <span aria-hidden="true">↓</span>
            </ActionLink>
            <ActionLink href="#contact" variant="secondary">
              Get in touch <span aria-hidden="true">↓</span>
            </ActionLink>
          </div>
        </div>
      </div>
    </section>
  )
}