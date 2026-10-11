import { skillGroups } from '../data/content.js'
import Reveal from './Reveal.jsx'
import './Skills.css'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Skills</span>
          <h2 className="section-title">What I work with</h2>
          <p className="section-sub">
            Tools and concepts I use to design, build, and ship software.
          </p>
        </Reveal>

        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <Reveal className="skill-group card" key={group.title} delay={index * 90}>
              <h3 className="skill-group-title">{group.title}</h3>
              <ul className="skill-list">
                {group.items.map((item) => (
                  <li className="skill-chip" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
