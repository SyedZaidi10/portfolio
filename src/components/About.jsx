import { about } from '../data/content.js'
import Reveal from './Reveal.jsx'
import './About.css'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">About</span>
          <h2 className="section-title">A little about me</h2>
        </Reveal>

        <div className="about-grid">
          <Reveal className="about-text">
            {about.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </Reveal>

          <Reveal className="about-facts card" delay={140}>
            {about.facts.map((fact) => (
              <div className="about-fact" key={fact.label}>
                <span className="about-fact-label">{fact.label}</span>
                <span className="about-fact-value">{fact.value}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
