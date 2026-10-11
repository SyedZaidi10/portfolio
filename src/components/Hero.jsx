import { lazy, Suspense, useEffect, useState } from 'react'
import { profile, links } from '../data/content.js'
import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  MapPinIcon,
  ArrowDownIcon,
  ExternalIcon,
} from './Icons.jsx'
import './Hero.css'

const AuroraBackground = lazy(() => import('./AuroraBackground.jsx'))

export default function Hero() {
  const [imgFailed, setImgFailed] = useState(false)
  const [webGpu, setWebGpu] = useState(false)

  useEffect(() => {
    setWebGpu(typeof navigator !== 'undefined' && Boolean(navigator.gpu))
  }, [])

  const initials = profile.name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  // Resolve the portrait through Vite's base URL so it keeps working when the
  // site is hosted under a sub-path (e.g. a GitHub Pages project site).
  const avatarSrc = profile.avatar
    ? /^(https?:|data:)/.test(profile.avatar)
      ? profile.avatar
      : `${import.meta.env.BASE_URL}${profile.avatar.replace(/^\//, '')}`
    : null

  return (
    <section id="top" className="hero">
      <div className="hero-aurora" aria-hidden="true">
        {webGpu && (
          <Suspense fallback={null}>
            <AuroraBackground />
          </Suspense>
        )}
      </div>

      <div className="container hero-inner">
        <div className="hero-content">
          {profile.availability && (
            <span className="hero-status">
              <span className="hero-status-dot" />
              {profile.availability}
            </span>
          )}

          <p className="hero-hello">Hi, I&rsquo;m</p>
          <h1 className="hero-name">{profile.name}</h1>
          <h2 className="hero-tagline">{profile.tagline}</h2>
          <p className="hero-intro">{profile.intro}</p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">
              View my work
            </a>
            <a className="btn btn-ghost" href="/resume.pdf" target="_blank" rel="noreferrer">
              <ExternalIcon size={16} />
              Résumé
            </a>
          </div>

          <ul className="hero-meta">
            <li>
              <a
                className="hero-meta-item"
                href={links.github}
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon size={17} />
                GitHub
              </a>
            </li>
            <li>
              <a
                className="hero-meta-item"
                href={links.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon size={17} />
                LinkedIn
              </a>
            </li>
            <li>
              <a className="hero-meta-item" href={`mailto:${links.email}`}>
                <MailIcon size={17} />
                Email
              </a>
            </li>
            <li>
              <span className="hero-meta-item is-static">
                <MapPinIcon size={17} />
                {profile.location}
              </span>
            </li>
          </ul>
        </div>

        <div className="hero-portrait">
          <div className="hero-portrait-glow" aria-hidden="true" />
          <div className="hero-portrait-ring" aria-hidden="true" />
          <div className="hero-portrait-frame">
            {avatarSrc && !imgFailed ? (
              <img
                className="hero-portrait-img"
                src={avatarSrc}
                alt={profile.name}
                onError={() => setImgFailed(true)}
              />
            ) : (
              <span className="hero-portrait-initials">{initials}</span>
            )}
          </div>
        </div>
      </div>

      <a href="#about" className="hero-scroll" aria-label="Scroll to about section">
        <ArrowDownIcon size={20} />
      </a>
    </section>
  )
}
