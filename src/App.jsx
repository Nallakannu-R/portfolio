import { useEffect, useState } from 'react'
import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  AtSign,
  BadgeCheck,
  BrainCircuit,
  BriefcaseBusiness,
  Check,
  Clock3,
  Code2,
  Database,
  ExternalLink,
  FileText,
  Github,
  Instagram,
  Layout,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Moon,
  Send,
  Pencil,
  Sun,
  Terminal,
  Twitter,
  Wrench,
  X,
} from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { siJavascript, siOpenjdk, siPython } from 'simple-icons'
import Timeline from './components/Timeline.jsx'
import TypingText from './components/TypingText.jsx'
import {
  certifications,
  internships,
  initialTimeline,
  learningTopics,
  profile,
  projects,
  skillGroups,
} from './data/portfolio.js'

const navigation = [
  ['Home', 'home'],
  ['About', 'about'],
  ['Skills', 'skills'],
  ['Projects', 'projects'],
  ['Internships', 'internships'],
  ['Experience', 'experience'],
  ['Certifications', 'certifications'],
  ['Resume', 'resume'],
  ['Contact', 'contact'],
]

const iconByName = {
  code: Code2,
  layout: Layout,
  terminal: Terminal,
  database: Database,
  tools: Wrench,
  brain: BrainCircuit,
}

const languageLogos = {
  Python: { icon: siPython, color: '#3776ab' },
  JavaScript: { icon: siJavascript, color: '#b98a00' },
  Java: { icon: siOpenjdk, color: '#ed2024' },
}

function Reveal({ children, className = '', delay = 0 }) {
  const reducedMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={reducedMotion ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

function SectionHeading({ eyebrow, title, description, number }) {
  return (
    <div className="section-heading">
      <div className="section-heading-copy">
        <div className="eyebrow-row">
          {number && <span className="section-number">{number}</span>}
          <span className="eyebrow">{eyebrow}</span>
        </div>
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </div>
    </div>
  )
}

function ProjectArtwork({ type }) {
  if (type === 'agents') {
    return (
      <svg className="project-artwork agents-artwork" viewBox="0 0 540 240" aria-hidden="true">
        <defs>
          <radialGradient id="agents-glow">
            <stop offset="0" stopColor="#79e6d0" stopOpacity=".24" />
            <stop offset="1" stopColor="#79e6d0" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="270" cy="112" r="135" fill="url(#agents-glow)" />
        <path d="M170 112h200M270 50v125M205 72l130 83M335 72l-130 83" stroke="#477f73" strokeWidth="1.5" strokeDasharray="4 6" />
        <circle cx="270" cy="112" r="48" fill="#192a26" stroke="#79e6d0" strokeOpacity=".7" />
        <circle cx="270" cy="112" r="30" fill="#213831" stroke="#79e6d0" strokeOpacity=".55" />
        <path d="M260 112h20M270 102v20" stroke="#a1ffe9" strokeWidth="3" strokeLinecap="round" />
        <circle cx="170" cy="112" r="15" fill="#1e302b" stroke="#79e6d0" strokeOpacity=".6" />
        <circle cx="370" cy="112" r="15" fill="#1e302b" stroke="#79e6d0" strokeOpacity=".6" />
        <circle cx="205" cy="72" r="11" fill="#1e302b" stroke="#79e6d0" strokeOpacity=".45" />
        <circle cx="335" cy="72" r="11" fill="#1e302b" stroke="#79e6d0" strokeOpacity=".45" />
        <circle cx="205" cy="155" r="11" fill="#1e302b" stroke="#79e6d0" strokeOpacity=".45" />
        <circle cx="335" cy="155" r="11" fill="#1e302b" stroke="#79e6d0" strokeOpacity=".45" />
        <text x="54" y="214" fill="#94b7ac" fontFamily="monospace" fontSize="11">DIGITAL WELLBEING · AI AGENTS</text>
      </svg>
    )
  }

  if (type === 'transit') {
    return (
      <svg className="project-artwork transit-artwork" viewBox="0 0 540 240" aria-hidden="true">
        <defs>
          <linearGradient id="transit-glow" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="#c4f36b" stopOpacity=".3" />
            <stop offset="1" stopColor="#c4f36b" stopOpacity="0" />
          </linearGradient>
        </defs>
        <circle cx="412" cy="48" r="112" fill="url(#transit-glow)" />
        <path d="M65 177h405" stroke="#424a3c" strokeWidth="1.5" strokeDasharray="5 7" />
        <path d="M111 177c34-74 76-61 111-24 34 36 66 8 103-36 38-44 66-34 106-1" fill="none" stroke="#c4f36b" strokeWidth="2" />
        <circle cx="111" cy="177" r="5" fill="#c4f36b" />
        <circle cx="222" cy="153" r="5" fill="#c4f36b" />
        <circle cx="325" cy="117" r="5" fill="#c4f36b" />
        <circle cx="431" cy="116" r="5" fill="#c4f36b" />
        <g transform="translate(212 57)">
          <rect x="0" y="0" width="144" height="73" rx="14" fill="#20251b" stroke="#505a43" />
          <rect x="13" y="13" width="118" height="35" rx="8" fill="#c4f36b" />
          <path d="M24 24h50v14H24z" fill="#192018" />
          <path d="M87 24h13v14H87z" fill="#192018" />
          <circle cx="34" cy="61" r="8" fill="#10120f" stroke="#a9b393" strokeWidth="2" />
          <circle cx="111" cy="61" r="8" fill="#10120f" stroke="#a9b393" strokeWidth="2" />
        </g>
        <rect x="66" y="70" width="112" height="46" rx="10" fill="#1b2018" stroke="#343c2d" />
        <circle cx="85" cy="93" r="6" fill="#c4f36b" />
        <path d="M100 88h59M100 98h41" stroke="#828c72" strokeWidth="3" strokeLinecap="round" />
        <text x="67" y="215" fill="#9ea690" fontFamily="monospace" fontSize="11">LIVE ROUTE · COMPUTER VISION</text>
      </svg>
    )
  }

  return (
    <svg className="project-artwork document-artwork" viewBox="0 0 540 240" aria-hidden="true">
      <defs>
        <linearGradient id="document-glow" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#b0adff" stopOpacity=".22" />
          <stop offset="1" stopColor="#b0adff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <circle cx="400" cy="102" r="133" fill="url(#document-glow)" />
      <g transform="translate(152 28) rotate(-8 89 92)">
        <rect x="0" y="0" width="162" height="183" rx="13" fill="#252532" stroke="#53516e" />
        <rect x="21" y="23" width="43" height="43" rx="11" fill="#9e9aff" fillOpacity=".22" />
        <path d="M34 34h17M34 42h17M34 50h12" stroke="#b3b0ff" strokeWidth="2" strokeLinecap="round" />
        <path d="M77 36h61M77 46h44" stroke="#aaa7c7" strokeWidth="4" strokeLinecap="round" />
        <path d="M23 86h116M23 98h93M23 110h107M23 122h86" stroke="#73728c" strokeWidth="3" strokeLinecap="round" />
        <rect x="22" y="143" width="116" height="23" rx="7" fill="#343347" />
        <path d="M31 154h47" stroke="#b3b0ff" strokeWidth="3" strokeLinecap="round" />
      </g>
      <g transform="translate(309 87)">
        <rect width="118" height="97" rx="13" fill="#24242e" stroke="#57536e" />
        <circle cx="27" cy="28" r="12" fill="#b0adff" fillOpacity=".22" />
        <path d="M22 28h10M27 23v10" stroke="#c6c3ff" strokeWidth="2" strokeLinecap="round" />
        <path d="M49 24h49M49 33h34" stroke="#a6a3bd" strokeWidth="3" strokeLinecap="round" />
        <path d="M19 54h79M19 65h79M19 76h55" stroke="#73728c" strokeWidth="3" strokeLinecap="round" />
      </g>
      <text x="62" y="215" fill="#a5a1bc" fontFamily="monospace" fontSize="11">PROPERTY WORKFLOWS · DOCUMENTS</text>
    </svg>
  )
}

function ProjectCard({ project, onOpen }) {
  const reducedMotion = useReducedMotion()

  return (
    <motion.article
      className={`project-card project-card-${project.type}`}
      whileHover={reducedMotion ? undefined : { y: -7 }}
      transition={{ duration: 0.22 }}
    >
      <div className="project-art">
        <ProjectArtwork type={project.type} />
        <span className="project-index">{project.number} / FEATURED</span>
      </div>
      <div className="project-body">
        <div className="project-title-line">
          <div>
            <span className="project-subtitle">{project.subtitle}</span>
            <h3>{project.name}</h3>
          </div>
          <div className="project-title-actions">
            {project.status && <span className="project-status">{project.status}</span>}
            <button
              className="project-open"
              type="button"
              aria-label={`View details for ${project.name}`}
              onClick={() => onOpen(project)}
            >
              <ArrowUpRight size={18} />
            </button>
          </div>
        </div>
        <p className="project-description">{project.description}</p>
        <div className="technology-list">
          {project.technologies.map((technology) => (
            <span className="technology-tag" key={technology}>
              {technology}
            </span>
          ))}
        </div>
        <div className="project-links">
          <button type="button" className="project-link" onClick={() => onOpen(project)}>
            View project <ArrowRight size={14} />
          </button>
          {project.repository ? (
            <a href={project.repository} className="project-link" target="_blank" rel="noreferrer">
              <Github size={14} /> Repository <ExternalLink size={12} />
            </a>
          ) : (
            <span className="project-link project-link-unavailable" aria-label="Repository link not added yet">
              <Github size={14} /> Repository soon
            </span>
          )}
          {project.demo ? (
            <a href={project.demo} className="project-link" target="_blank" rel="noreferrer">
              Live demo <ExternalLink size={12} />
            </a>
          ) : (
            <span className="project-link project-link-unavailable" aria-label="Live demo link not added yet">
              Live demo soon
            </span>
          )}
        </div>
      </div>
    </motion.article>
  )
}

function ProjectDialog({ project, onClose }) {
  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [onClose])

  return (
    <div
      className="dialog-backdrop"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <section
        className="project-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-dialog-title"
      >
        <button className="icon-button dialog-close" type="button" onClick={onClose} aria-label="Close project details">
          <X size={18} />
        </button>
        <span className="eyebrow">FEATURED PROJECT · {project.number}</span>
        <h2 id="project-dialog-title">{project.name}</h2>
        <p className="project-dialog-subtitle">{project.subtitle}</p>
        <p>{project.description}</p>
        <h3>Built with</h3>
        <div className="technology-list">
          {project.technologies.map((technology) => (
            <span className="technology-tag" key={technology}>
              {technology}
            </span>
          ))}
        </div>
        <p className="dialog-note">
          Project links and progress are maintained in <code>src/data/portfolio.js</code>.
        </p>
      </section>
    </div>
  )
}

function CredentialDialog({ credential, onClose }) {
  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [onClose])

  return (
    <div
      className="dialog-backdrop"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <section
        className="credential-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="credential-dialog-title"
      >
        <button className="icon-button dialog-close" type="button" onClick={onClose} aria-label="Close certificate preview">
          <X size={18} />
        </button>
        <span className="eyebrow">CERTIFICATE PREVIEW</span>
        <h2 id="credential-dialog-title">{credential.name}</h2>
        <p>{credential.organization} · {credential.year}</p>
        {credential.previewUrl ? (
          <img className="credential-preview-image" src={credential.previewUrl} alt={`${credential.name} certificate`} />
        ) : (
          <div className="credential-preview-placeholder">
            <FileText size={34} />
            <strong>Certificate preview not added</strong>
            <span>Add a certificate image URL in <code>src/data/portfolio.js</code>.</span>
          </div>
        )}
        {credential.verificationUrl ? (
          <a className="button button-primary" href={credential.verificationUrl} target="_blank" rel="noreferrer">
            Verify certificate <ExternalLink size={14} />
          </a>
        ) : (
          <span className="credential-verification-pending">
            Verification link not provided
          </span>
        )}
      </section>
    </div>
  )
}

function CertificateCard({ credential, onPreview }) {
  return (
    <article className="certificate-card">
      <div className="certificate-card-top">
        <span className="certificate-icon"><BadgeCheck size={19} /></span>
        <span className={`certificate-status${credential.status === 'In Progress' ? ' certificate-status-progress' : ''}`}>
          {credential.status}
        </span>
      </div>
      <span className="certificate-year">{credential.year}</span>
      <h3>{credential.name}</h3>
      <p className="certificate-organization">{credential.organization}</p>
      <div className="certificate-skills">
        {credential.skills.map((skill) => (
          <span className="technology-tag" key={skill}>{skill}</span>
        ))}
      </div>
      <div className="certificate-actions">
        {credential.status === 'In Progress' ? (
          <span className="project-link project-link-unavailable">Certificate after completion</span>
        ) : (
          <button className="project-link" type="button" onClick={() => onPreview(credential)}>
            Preview certificate <ArrowUpRight size={13} />
          </button>
        )}
        {credential.verificationUrl ? (
          <a className="project-link" href={credential.verificationUrl} target="_blank" rel="noreferrer">
            Verify <ExternalLink size={12} />
          </a>
        ) : (
          <span className="certificate-link-pending">Verification link pending</span>
        )}
      </div>
    </article>
  )
}

function InternshipCard({ internship, index }) {
  return (
    <article className="internship-card">
      <div className="internship-card-index">0{index + 1}</div>
      <div className="internship-card-icon"><BriefcaseBusiness size={18} /></div>
      <span className="eyebrow">INTERNSHIP · {internship.duration}</span>
      <h3>{internship.role}</h3>
      <p>{internship.organization}</p>
    </article>
  )
}

function SocialLinks({ compact = false }) {
  const links = [
    { label: 'GitHub', href: profile.github, icon: Github },
    { label: 'Discord', href: profile.discord, icon: MessageCircle },
    { label: 'X', href: profile.x, icon: Twitter },
    { label: 'Instagram', href: profile.instagram, icon: Instagram },
    { label: 'Threads', href: profile.threads, icon: AtSign },
    { label: 'Telegram', href: profile.telegram, icon: Send },
  ]

  return (
    <div className={compact ? 'hero-socials' : 'contact-social-links'}>
      <span>{compact ? 'FIND ME ON' : 'SOCIALS'}</span>
      {links.map(({ label, href, icon: Icon }) => (
        <a
          href={href}
          key={label}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          title={label}
        >
          <Icon size={17} />
          {!compact && <span>{label}</span>}
        </a>
      ))}
    </div>
  )
}

function LanguageBadge({ name }) {
  const logo = languageLogos[name]

  return (
    <span className="skill-tag">
      {logo && (
        <svg
          className="skill-language-logo"
          viewBox="0 0 24 24"
          aria-hidden="true"
          style={{ color: logo.color }}
        >
          <path fill="currentColor" d={logo.icon.path} />
        </svg>
      )}
      {name}
    </span>
  )
}

function ResumePreview() {
  return (
    <div className="resume-preview">
      <iframe
        className="resume-embed"
        src="/resume.pdf#page=1&view=FitH"
        title="Resume PDF preview"
        loading="lazy"
      />
      <span className="resume-preview-stamp">RESUME · PDF</span>
    </div>
  )
}

function CertificationSection({ onPreview }) {
  return (
    <section className="certification-section section-anchor section-pad" id="certifications">
      <div className="container">
        <Reveal>
          <SectionHeading
            number="06"
            eyebrow="CERTIFICATIONS & PROFESSIONAL LEARNING"
            title={<>Learning that keeps <span className="text-accent">moving.</span></>}
            description="Courses and programs completed or currently in progress."
          />
        </Reveal>
        <div className="certification-grid">
          {certifications.map((credential, index) => (
            <Reveal key={credential.name} delay={index * 0.07}>
              <CertificateCard credential={credential} onPreview={onPreview} />
            </Reveal>
          ))}
        </div>
        <p className="certification-note">
          Certificate images and verification links have not been provided yet; completed items show clearly marked placeholders.
        </p>
      </div>
    </section>
  )
}

function App() {
  const [theme, setTheme] = useState('light')
  const [now, setNow] = useState(() => new Date())
  const [menuOpen, setMenuOpen] = useState(false)
  const [timeline, setTimeline] = useState(initialTimeline)
  const [selectedProject, setSelectedProject] = useState(null)
  const [selectedCredential, setSelectedCredential] = useState(null)
  const [activeSection, setActiveSection] = useState('home')
  const [formStatus, setFormStatus] = useState('')
  const [isSending, setIsSending] = useState(false)

  useEffect(() => {
    const sections = document.querySelectorAll('.section-anchor[id]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-18% 0px -68% 0px' },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 1000)
    return () => window.clearInterval(timer)
  }, [])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.querySelector('meta[name="theme-color"]')?.setAttribute(
      'content',
      theme === 'dark' ? '#10120f' : '#f5f6ff',
    )
  }, [theme])

  async function handleContactSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    setIsSending(true)
    setFormStatus('Sending your message…')

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${profile.email}`, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      })

      if (!response.ok) {
        throw new Error('The email service could not accept this message.')
      }

      const result = await response.json()
      if (result.success !== 'true' && result.success !== true) {
        throw new Error(result.message || 'The email service did not confirm delivery.')
      }

      form.reset()
      setFormStatus('Message sent. Thanks for reaching out!')
    } catch (error) {
      setFormStatus(`${error.message} You can email ${profile.email} directly.`)
    } finally {
      setIsSending(false)
    }
  }

  const localTime = new Intl.DateTimeFormat('en-IN', {
    timeZone: 'Asia/Kolkata',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  }).format(now)
  const localDate = new Intl.DateTimeFormat('en-IN', {
    timeZone: 'Asia/Kolkata',
    weekday: 'short',
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(now)

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="site-header">
        <nav className="navigation container" aria-label="Main navigation">
          <a className="brand" href="#home" aria-label="R Nallakannu home">
            <span className="brand-mark">N</span>
            <span>R Nallakannu<span className="brand-period">.</span></span>
          </a>
          <div className={`navigation-links${menuOpen ? ' navigation-links-open' : ''}`}>
            {navigation.map(([label, target]) => (
              <a
                href={`#${target}`}
                key={target}
                className={activeSection === target ? 'navigation-link-active' : ''}
                aria-current={activeSection === target ? 'location' : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}
          </div>
          <div className="navigation-actions">
            <button
              className="theme-toggle"
              type="button"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            >
              {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
            </button>
            <a className="nav-contact" href="#contact">
              Let&apos;s talk <ArrowUpRight size={14} />
            </a>
            <button
              className="menu-toggle"
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </nav>
      </header>

      <main id="main-content">
        <section className="hero-section section-anchor" id="home">
          <div className="hero-grid container">
            <div className="hero-copy">
              <motion.div
                className="availability"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="availability-dot" />
                OPEN TO OPPORTUNITIES
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.08 }}
              >
                Hello, I&apos;m
                <span className="hero-name"><span className="hero-name-animated">{profile.name}</span><span className="hero-period">.</span></span>
              </motion.h1>
              <motion.div
                className="hero-role"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.22 }}
              >
                <span className="hero-role-prefix">I&apos;m a</span>
                <TypingText />
              </motion.div>
              <motion.p
                className="hero-intro"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                A Computer Science Engineering graduate passionate about technology, software
                development, and building solutions that solve real-world problems.
              </motion.p>
              <motion.div
                className="hero-location"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <span className="hero-location-place"><MapPin size={15} /> {profile.location}</span>
                <span className="location-separator">/</span>
                <span className="hero-clock" aria-label={`Current local time ${localTime}`}>
                  <Clock3 size={14} /> {localTime}
                </span>
                <span className="hero-date">{localDate}</span>
              </motion.div>
              <motion.div
                className="hero-actions"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.45 }}
              >
                <a className="button button-primary" href="#projects">
                  View projects <ArrowRight size={16} />
                </a>
                <a className="button button-outline" href="#resume">
                  Download resume <FileText size={15} />
                </a>
              </motion.div>
              <motion.div
                className="hero-socials"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.55 }}
              >
                <SocialLinks compact />
              </motion.div>
            </div>
          </div>
          <a href="#about" className="scroll-cue" aria-label="Scroll to about section">
            <span>SCROLL TO EXPLORE</span>
            <ArrowDown size={14} />
          </a>
        </section>

        <section className="about-section section-anchor section-pad" id="about">
          <div className="container">
            <Reveal>
              <SectionHeading
                number="01"
                eyebrow="A LITTLE ABOUT ME"
                title={<>Technology with <span className="text-accent">purpose.</span></>}
                description="The person behind the projects, and the ideas that keep me curious."
              />
            </Reveal>
            <div className="about-grid">
              <Reveal className="about-copy">
                <p className="about-lead">
                  I&apos;m a Computer Science Engineering graduate with a genuine interest in
                  making technology useful, thoughtful, and accessible.
                </p>
                <p>
                  My learning journey moves between software development, Python, and artificial
                  intelligence. I enjoy taking a real-world problem, understanding what it needs,
                  and exploring how a well-built product can help.
                </p>
                <p>
                  Through academic projects like a smart bus attendance and tracking concept and
                  PropertyDocs, I&apos;ve been exploring both applied AI and full-stack development.
                  I&apos;m looking forward to contributing to a team, strengthening my engineering
                  fundamentals, and growing into a dependable software developer.
                </p>
                <a className="inline-link" href="#contact">
                  A little more about my journey <ArrowRight size={15} />
                </a>
              </Reveal>
              <Reveal className="about-aside" delay={0.12}>
                <span className="about-quote-mark">“</span>
                <p>Good software starts with understanding the people and problems it is built for.</p>
                <span className="about-aside-rule" />
                <div className="about-aside-footer">
                  <span><MapPin size={14} /> Based in {profile.location}</span>
                  <span className="about-aside-code">ABOUT / 01</span>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="skills-section section-anchor section-pad" id="skills">
          <div className="container">
            <Reveal>
              <SectionHeading
                number="02"
                eyebrow="MY TOOLKIT"
                title={<>Skills I&apos;m <span className="text-accent">building with.</span></>}
                description="Technologies and tools I've worked with across coursework and projects."
              />
            </Reveal>
            <div className="skills-grid">
              {skillGroups.map((group, index) => {
                const Icon = iconByName[group.icon]
                return (
                  <Reveal key={group.name} delay={index * 0.04}>
                    <article className="skill-card">
                      <div className="skill-card-header">
                        <span className="skill-icon"><Icon size={18} /></span>
                        <span className="skill-card-index">0{index + 1}</span>
                      </div>
                      <h3>{group.name}</h3>
                      <div className="skill-tags">
                        {group.skills.map((skill) => (
                          <LanguageBadge name={skill} key={skill} />
                        ))}
                      </div>
                    </article>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </section>

        <section className="projects-section section-anchor section-pad" id="projects">
          <div className="container">
            <Reveal>
              <SectionHeading
                number="03"
                eyebrow="SELECTED WORK"
                title={<>Ideas turned into <span className="text-accent">projects.</span></>}
                description="Academic and personal explorations in building technology that solves practical problems."
              />
            </Reveal>
            <div className="projects-grid">
              {projects.map((project, index) => (
                <Reveal key={project.name} delay={index * 0.1}>
                  <ProjectCard project={project} onOpen={setSelectedProject} />
                </Reveal>
              ))}
            </div>
            <Reveal>
              <p className="projects-footnote">
                <span className="footnote-dot" />
                TNSTC source is linked; PropertyDocs and the in-progress AI project will be linked when available.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="internships-section section-anchor section-pad" id="internships">
          <div className="container">
            <Reveal>
              <SectionHeading
                number="04"
                eyebrow="INTERNSHIP EXPERIENCE"
                title={<>Learning by <span className="text-accent">doing.</span></>}
                description="Short-term internship experiences across AI, mobile applications, and web development."
              />
            </Reveal>
            <div className="internship-grid">
              {internships.map((internship, index) => (
                <Reveal key={internship.organization} delay={index * 0.07}>
                  <InternshipCard internship={internship} index={index} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="experience-section section-anchor section-pad" id="experience">
          <div className="container">
            <Reveal>
              <SectionHeading
                number="05"
                eyebrow="THE JOURNEY SO FAR"
                title={<>Learning, making, <span className="text-accent">moving forward.</span></>}
                description="An evolving timeline of education, project work, and what comes next."
              />
            </Reveal>
            <Reveal>
              <div className="timeline-editor-note">
                <span><Pencil size={14} /> Editable timeline</span>
                <p>Update or add milestones below. Items you edit stay in this browser session.</p>
              </div>
              <Timeline entries={timeline} onChange={setTimeline} />
            </Reveal>
          </div>
        </section>

        <section className="learning-section section-pad">
          <div className="container learning-container">
            <Reveal>
              <div className="learning-heading">
                <span className="learning-symbol"><BrainCircuit size={20} /></span>
                <div>
                  <span className="eyebrow">ALWAYS IN PROGRESS</span>
                  <h2>Currently learning</h2>
                </div>
              </div>
            </Reveal>
            <div className="learning-list">
              {learningTopics.map((topic, index) => (
                <Reveal key={topic} delay={index * 0.06}>
                  <div className="learning-item">
                    <span className="learning-check"><Check size={14} /></span>
                    <span>{topic}</span>
                    <ArrowUpRight className="learning-arrow" size={15} />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <CertificationSection onPreview={setSelectedCredential} />

        <section className="resume-section section-anchor section-pad" id="resume">
          <div className="container">
            <Reveal>
              <div className="resume-card">
                <div className="resume-copy">
                  <span className="eyebrow">MY RESUME</span>
                  <h2>A little more, <span className="text-accent">on paper.</span></h2>
                  <p>
                    Here&apos;s my resume with more detail on my education, projects, and experience.
                  </p>
                  <a
                    className="button button-primary"
                    href="/resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                    download="Nallakannu-Resume.pdf"
                  >
                    Download my resume <FileText size={15} />
                  </a>
                  <span className="resume-note">PDF · Open or download</span>
                </div>
                <ResumePreview />
              </div>
            </Reveal>
          </div>
        </section>

        <section className="contact-section section-anchor section-pad" id="contact">
          <div className="container">
            <Reveal>
              <SectionHeading
                number="07"
                eyebrow="LET'S CONNECT"
                title={<>Have a good one in <span className="text-accent">mind?</span></>}
                description="Open to conversations about software roles, projects, and opportunities to learn and contribute."
              />
            </Reveal>
            <div className="contact-grid">
              <Reveal className="contact-copy">
                <a className="contact-email" href={`mailto:${profile.email}`}>
                  {profile.email} <ArrowUpRight size={17} />
                </a>
                <p className="contact-placeholder-note">
                  Send a note directly to my inbox or reach me through any of these profiles.
                </p>
                <div className="contact-details">
                  <span><MapPin size={15} /> {profile.location}</span>
                  <a href={`mailto:${profile.email}`}><Mail size={15} /> {profile.email}</a>
                </div>
                <SocialLinks />
              </Reveal>
              <Reveal className="contact-form-wrap" delay={0.1}>
                <form className="contact-form" onSubmit={handleContactSubmit}>
                  <input type="hidden" name="_subject" value="New portfolio message for Nallakannu" />
                  <label>
                    Your name
                    <input type="text" name="name" autoComplete="name" placeholder="How should I address you?" required />
                  </label>
                  <label>
                    Email address
                    <input type="email" name="email" autoComplete="email" placeholder="you@example.com" required />
                  </label>
                  <label>
                    Your message
                    <textarea name="message" rows="4" placeholder="Tell me a little about it..." required />
                  </label>
                  <button className="button button-primary contact-submit" type="submit" disabled={isSending}>
                    {isSending ? 'Sending…' : 'Send a message'} <Send size={15} />
                  </button>
                  <p className="form-note" aria-live="polite">
                    {formStatus || 'Your message will be sent to my email address.'}
                  </p>
                </form>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="closing-thought">
          <span className="eyebrow">A NOTE TO SELF</span>
          <p>“My goal is not to be better than anyone else, but to be better than I used to be.”</p>
        </div>
        <div className="container footer-inner">
          <a className="brand footer-brand" href="#home">
            <span className="brand-mark">N</span>
            <span>R Nallakannu<span className="brand-period">.</span></span>
          </a>
          <span className="footer-copy">Designed with care · {new Date().getFullYear()}</span>
          <a className="back-to-top" href="#home">
            Back to top <ArrowUp size={14} />
          </a>
        </div>
      </footer>
      {selectedProject && (
        <ProjectDialog project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
      {selectedCredential && (
        <CredentialDialog
          credential={selectedCredential}
          onClose={() => setSelectedCredential(null)}
        />
      )}
    </div>
  )
}

export default App
