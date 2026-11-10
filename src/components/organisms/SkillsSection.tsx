/** SkillsSection renders the grouped technologies from the skills data. */
import { DisplayHeading } from '../atoms/DisplayHeading'
import { SectionLabel } from '../atoms/SectionLabel'
import { skillGroups } from '../../data/skills'

export function SkillsSection() {
  return (
    <section
      className="content-section skills-section"
      id="skills"
      data-nav-section
      aria-labelledby="skills-title"
    >
      <div className="section-main section-main-wide">
        <SectionLabel index={3} label="Skills" />
        <div className="section-heading-row skills-heading-row">
          <DisplayHeading id="skills-title">
            My technical <em>foundation</em>
          </DisplayHeading>
          <p className="section-description">
            Tools and technologies I use or am currently developing through
            my Web Developer studies and practical exercises.
          </p>
        </div>
        <div className="skills-table" role="table" aria-label="Technical skills">
          <div className="skills-table-header" role="row">
            <span role="columnheader">Area</span>
            <span role="columnheader">Technologies &amp; tools</span>
          </div>
          {skillGroups.map(({ area, tools }, index) => (
            <div className="skills-row" role="row" key={area}>
              <div className="skill-area" role="rowheader">
                <span className="skill-number">{String(index + 1).padStart(2, '0')}</span>
                {area}
              </div>
              <ul className="skill-list" role="cell">
                {tools.map((tool, toolIndex) => (
                  <li key={tool}>
                    <span className={`skill-dot skill-dot-${toolIndex % 3}`} aria-hidden="true" />
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}