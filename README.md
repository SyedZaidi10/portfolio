# Husnain Zaidi — Portfolio

A modern, single-page portfolio built with **React + Vite**. Dark theme with an
indigo accent, glass cards, smooth scroll animations, and a fully responsive
layout.

## Quick start

```bash
npm install --include=dev   # see note below
npm run dev                 # opens http://localhost:5173
```

> **Note:** this machine's npm is configured with `omit=dev`, so a plain
> `npm install` skips Vite and the build tooling. Use `--include=dev` (as above)
> for local development. It is not needed on a normal machine or on CI.

Other scripts:

```bash
npm run build     # production build -> dist/
npm run preview   # serve the production build locally
```

## Make it yours

**Almost everything you need to edit lives in one file: [`src/data/content.js`](src/data/content.js).**

It contains, with comments:

- `profile` — your name, tagline, intro, location, availability pill
- `links` — email, GitHub, LinkedIn, résumé
- `navItems` — the top navigation links
- `about` — your bio paragraphs and quick facts
- `skillGroups` — your skills, grouped
- `projects` — your project cards
- `contact` / `footer` — closing copy

Search the file for `TODO` to find every placeholder that needs your real
details.

### Add your photo and résumé

Drop two files into the `public/` folder:

| File          | Used for                                              |
| ------------- | ----------------------------------------------------- |
| `profile.jpg` | Your photo in the hero (falls back to initials `HZ`)  |
| `resume.pdf`  | Opened by the "Résumé" buttons                        |

Just create them with those exact names — no code changes needed.

### Change the colors / fonts

All design tokens are CSS variables at the top of [`src/index.css`](src/index.css)
(`--accent`, `--bg`, `--text`, `--radius`, fonts, etc.). Change them once and the
whole site re-themes.

## Project structure

```
index.html                 # page shell, fonts, meta tags
public/                    # static files (favicon, profile.jpg, resume.pdf)
src/
  main.jsx                 # React entry point
  App.jsx                  # composes all sections
  index.css                # design tokens, base styles, shared utilities
  data/content.js          # <-- EDIT YOUR CONTENT HERE
  components/
    Navbar.jsx             # sticky nav + mobile menu + scroll-spy
    Hero.jsx               # intro, portrait, social links
    About.jsx              # bio + quick facts
    Skills.jsx             # grouped skill chips
    Projects.jsx           # project cards
    Contact.jsx            # call to action
    Footer.jsx
    Reveal.jsx             # scroll-reveal animation wrapper
    Icons.jsx              # inline SVG icons
    *.css                  # per-component styles
```

## Deploy

The site builds to a static `dist/` folder, so it hosts anywhere.

**GitHub Pages**

1. Push this repo to GitHub.
2. `npm run build`.
3. Deploy the `dist/` folder (e.g. with the
   [`gh-pages`](https://www.npmjs.com/package/gh-pages) package, or a GitHub
   Actions workflow that runs `npm ci && npm run build` and publishes `dist/`).

**Netlify / Vercel**

Import the repo and set:

- Build command: `npm run build`
- Publish / output directory: `dist`

Both platforms auto-detect Vite, so this usually needs no configuration.

---

Built with React and Vite. All content is placeholder text — replace it in
`src/data/content.js`.
