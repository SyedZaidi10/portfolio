import { contact, links, profile } from '../data/content.js'
import Reveal from './Reveal.jsx'
import { MailIcon, GitHubIcon, LinkedInIcon, ExternalIcon } from './Icons.jsx'
import './Contact.css'

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <Reveal className="contact-card card">
          <div className="contact-glow" aria-hidden="true" />
          <span className="eyebrow">Contact</span>
          <h2 className="contact-heading">{contact.heading}</h2>
          <p className="contact-blurb">{contact.blurb}</p>

          <div className="contact-actions">
            <a className="btn btn-primary" href={`mailto:${links.email}`}>
              <MailIcon size={17} />
              {links.email}
            </a>
            <a className="btn btn-ghost" href="/resume.pdf" target="_blank" rel="noreferrer">
              <ExternalIcon size={16} />
              View résumé
            </a>
          </div>

          <div className="contact-socials">
            <a
              className="contact-social"
              href={links.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <GitHubIcon size={20} />
            </a>
            <a
              className="contact-social"
              href={links.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedInIcon size={20} />
            </a>
            <a
              className="contact-social"
              href={`mailto:${links.email}`}
              aria-label="Email"
            >
              <MailIcon size={20} />
            </a>
            <span className="contact-location">{profile.location}</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
