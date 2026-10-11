/* ============================================================================
   EDIT EVERYTHING HERE
   ----------------------------------------------------------------------------
   This is the only file you need to touch to make the site yours.
   Replace the placeholder text below with your real details, then save —
   the page updates automatically. Anything marked TODO is sample content.
   ========================================================================== */

export const profile = {
  name: 'Husnain Zaidi',
  // Short line under your name in the hero.
  tagline: 'Computer Science student building thoughtful software.',
  // Longer intro paragraph for the hero section.
  intro:
    'I am a Computer Science student based in Houston, Texas, focused on software engineering, problem solving, and building things people actually use. Currently open to internships and collaborative projects.',
  location: 'Houston, Texas',
  // Put your photo at public/profile.jpg and it will appear here.
  // Leave as-is to show your initials instead.
  avatar: '/profile.jpg',
  // A one-line status pill shown in the hero. Set to null to hide.
  availability: 'Open to internships & collaborations',
};

// Links shown in the hero, contact section, and footer.
// TODO: replace the "#" hrefs with your real URLs. Delete any you don't use.
export const links = {
  email: 'husnainzdi@gmail.com',
  github: 'https://github.com/your-username',
  linkedin: 'https://www.linkedin.com/in/husnain-zaidi-2974b4197/',
  resume: '#', // link to a PDF in public/ e.g. '/resume.pdf'
};

// Top navigation — each href must match a section id below.
export const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const about = {
  // Each string is its own paragraph.
  paragraphs: [
    "I am pursuing a B.S. in Computer Science with a strong focus on full-stack architecture, backend infrastructure, and scalable systems. I thrive in taking messy, ambiguous problems and distilling them into modular, maintainable codebases—prioritizing high system availability, resilient API contracts, and clean design patterns.",
    "Outside the classroom, my focus is on production-grade engineering rather than toy projects. I actively maintain self-hosted infrastructure, automate CI/CD pipelines, and stress-test backend services under load. For me, good software craftsmanship isn't just about making something work—it’s about writing self-documenting code, enforcing rigorous testing suites, and ensuring the next developer can ramp up in minutes.",
    "What originally hooked me on computing was the power to peel back layers of abstraction and see how complex machines work under the hood. Today, that fascination extends to how artificial intelligence is rewriting the software engineering playbook. I’m actively exploring how to integrate intelligent agents and generative models directly into core application workflows—not as gimmicks, but to build responsive, self-healing, next-generation software that fundamentally changes how people interact with technology.",
  ],
  // Quick facts rendered as a small stat/list block.
  facts: [
    { label: 'Focus', value: 'Software Engineering' },
    { label: 'Education', value: 'B.S. Computer Science' },
    { label: 'Location', value: 'Houston, TX' },
    { label: 'Status', value: 'Open to internships' },
  ],
};

// Grouped skills. Add or remove groups and items freely.
export const skillGroups = [
  {
    title: 'Languages',
    items: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C++', 'SQL'],
  },
  {
    title: 'Frontend',
    items: ['React', 'HTML5', 'CSS3', 'Tailwind CSS', 'Vite'],
  },
  {
    title: 'Backend & Data',
    items: ['Node.js', 'Express', 'REST APIs', 'PostgreSQL', 'MongoDB', 'Git'],
  },
  {
    title: 'Foundations',
    items: [
      'Data Structures',
      'Algorithms',
      'Object-Oriented Design',
      'Testing',
      'Problem Solving',
    ],
  },
];

// TODO: replace these with your real projects. 3 is a good number.
export const projects = [
  {
    name: 'NexusFlow',
    blurb: 'Event-driven agent orchestration framework for automated multi-step workflows.',
    description:
      'Engineered an autonomous workflow runner that coordinates LLM agents to execute complex, multi-stage backend tasks. Built dynamic task dependency graphs with asynchronous error recovery, cutting manual process triage time by 75% in local benchmark testing.',
    tech: ['Python', 'FastAPI', 'Redis', 'Docker', 'OpenAI API'],
    repo: 'https://github.com/your-username/nexusflow',
    demo: 'https://nexusflow.dev',
    badge: '01',
  },
  {
    name: 'ContextLens',
    blurb: 'Hybrid vector search engine and RAG pipeline for dense engineering documentation.',
    description:
      'Created a high-throughput retrieval system pairing dense embeddings with BM25 lexical ranking to eliminate hallucination in domain-specific queries. Optimized vector indexing to achieve sub-45ms search latency across 50,000+ technical markdown documents.',
    tech: ['TypeScript', 'Node.js', 'Qdrant', 'Next.js', 'PostgreSQL'],
    repo: 'https://github.com/your-username/context-lens',
    demo: 'https://contextlens.app',
    badge: '02',
  },
  {
    name: 'KubePulse',
    blurb: 'Lightweight container metrics dashboard and anomaly detection service.',
    description:
      'Developed a real-time cluster monitoring tool designed to ingest streaming container metrics via WebSockets. Integrated isolation forest models to flag sudden CPU and memory saturation trends before pods hit OOM termination limits.',
    tech: ['Go', 'React', 'Prometheus', 'WebSockets', 'Tailwind CSS'],
    repo: 'https://github.com/your-username/kubepulse',
    demo: null,
    badge: '03',
  },
];

export const contact = {
  heading: 'Let’s build something together.',
  blurb:
    'I am looking for internship and collaboration opportunities. Whether you have a role, a project, or just want to talk shop, my inbox is open.',
};

export const footer = {
  note: 'Designed and built by Husnain Zaidi.',
};
