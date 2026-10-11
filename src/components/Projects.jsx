import { projects } from '../data/content.js'
import Reveal from './Reveal.jsx'
import { GitHubIcon, ExternalIcon, ArrowRightIcon } from './Icons.jsx'
import './Projects.css'

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Projects</span>
          <h2 className="section-title">Things I&rsquo;ve built</h2>
          <p className="section-sub">
            A selection of work. Replace these with your real projects in{' '}
            <code>src/data/content.js</code>.
          </p>
        </Reveal>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <Reveal className="project-card card" key={project.name} delay={index * 100}>
              <div className="project-top">
                <span className="project-badge">{project.badge}</span>
                <div className="project-links">
                  {project.repo && (
                    <a
                      className="project-link"
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.name} source code`}
                    >
                      <GitHubIcon size={18} />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      className="project-link"
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.name} live demo`}
                    >
                      <ExternalIcon size={18} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="project-name">{project.name}</h3>
              <p className="project-blurb">{project.blurb}</p>
              <p className="project-desc">{project.description}</p>

              <ul className="project-tech">
                {project.tech.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>

              {project.repo && (
                <a
                  className="project-cta"
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                >
                  View project <ArrowRightIcon size={16} />
                </a>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
