import { profile, footer, links, navItems } from '../data/content.js'
import { GitHubIcon, LinkedInIcon, MailIcon, ArrowDownIcon } from './Icons.jsx'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="footer-name">{profile.name}</span>
          <span className="footer-tagline">{profile.tagline}</span>
        </div>

        <nav className="footer-nav" aria-label="Footer">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="footer-socials">
          <a href={links.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <GitHubIcon size={18} />
          </a>
          <a href={links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <LinkedInIcon size={18} />
          </a>
          <a href={`mailto:${links.email}`} aria-label="Email">
            <MailIcon size={18} />
          </a>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>
          © {year} {footer.note}
        </p>
        <a className="footer-top" href="#top">
          Back to top <ArrowDownIcon size={15} className="footer-top-icon" />
        </a>
      </div>
    </footer>
  )
}
