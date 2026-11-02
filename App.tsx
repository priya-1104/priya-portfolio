import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowDown, ArrowDownRight, ArrowRight, BarChart3, BriefcaseBusiness,
  Check, ChevronUp, Code2, ExternalLink, Github, GraduationCap, Linkedin,
  Mail, Menu, MousePointer2, Send, Sparkles, X,
} from 'lucide-react'
import { certificates, profile, projects, skills } from './data'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} className="mb-12 max-w-2xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      {description && <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400 md:text-base">{description}</p>}
    </motion.div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const navItems = ['About', 'Skills', 'Projects', 'Education', 'Certificates', 'Contact']

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <div className="min-h-screen overflow-hidden bg-ink text-white">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-ink/75 backdrop-blur-xl">
        <nav className="container-shell flex h-[76px] items-center justify-between">
          <a href="#home" className="flex items-center gap-3" aria-label="Go to home">
            <span className="brand-mark">PG</span>
            <span className="font-display text-sm font-semibold tracking-wide">PRIYA<span className="text-violet">.</span></span>
          </a>
          <div className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => <a key={item} className="nav-link" href={`#${item.toLowerCase()}`}>{item}</a>)}
          </div>
          <a href="#contact" className="hidden rounded-full border border-violet/40 px-5 py-2.5 text-xs font-semibold text-violet transition hover:bg-violet hover:text-ink sm:inline-flex">Let's talk <ArrowUpRightIcon /></a>
          <button onClick={() => setMenuOpen(!menuOpen)} className="rounded-lg border border-white/10 p-2 lg:hidden" aria-label="Toggle navigation">
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
        {menuOpen && <div className="border-t border-white/10 bg-panel px-6 py-4 lg:hidden">{navItems.map((item) => <a onClick={() => setMenuOpen(false)} key={item} href={`#${item.toLowerCase()}`} className="block py-3 text-sm text-slate-300">{item}</a>)}</div>}
      </header>

      <main>
        <section id="home" className="relative flex min-h-screen items-center pt-28">
          <div className="container-shell grid items-center gap-14 pb-20 pt-10 lg:grid-cols-[1.2fr_.8fr]">
            <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.12 } } }}>
              <motion.div variants={fadeUp} className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan/20 bg-cyan/[0.07] px-4 py-2 text-xs font-medium text-cyan">
                <span className="h-2 w-2 animate-pulse rounded-full bg-cyan" /> OPEN TO DATA ANALYTICS OPPORTUNITIES
              </motion.div>
              <motion.p variants={fadeUp} className="mb-4 font-display text-lg text-slate-400">Hello, I'm</motion.p>
              <motion.h1 variants={fadeUp} className="font-display text-6xl font-bold leading-[1.04] tracking-[-0.055em] sm:text-7xl xl:text-[92px]">
                Priya <span className="gradient-text">G.</span>
              </motion.h1>
              <motion.h2 variants={fadeUp} className="mt-6 font-display text-2xl font-semibold text-slate-200 sm:text-3xl">Aspiring Data Analyst<span className="text-violet">.</span></motion.h2>
              <motion.p variants={fadeUp} className="mt-6 max-w-xl text-base leading-8 text-slate-400">{profile.introduction}</motion.p>
              <motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-3">
                <a href="#projects" className="primary-button">Explore my work <ArrowDownRight size={17} /></a>
                <a href={profile.resume} download className="secondary-button"><ArrowDown size={16} /> Download resume</a>
              </motion.div>
              <motion.div variants={fadeUp} className="mt-12 flex items-center gap-5">
                <a className="social-link" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a>
                <a className="social-link" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
                <a className="social-link" href={`mailto:${profile.email}`} aria-label="Email"><Mail size={18} /></a>
                <span className="h-px w-14 bg-white/15" />
                <span className="text-xs tracking-wide text-slate-500">BASED IN {profile.location.toUpperCase()}</span>
              </motion.div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: .92, rotate: 3 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: .8, delay: .25 }} className="relative mx-auto w-full max-w-[430px]">
              <div className="absolute -inset-5 rounded-[40px] bg-gradient-to-br from-violet/20 via-transparent to-cyan/10 blur-2xl" />
              <div className="relative rounded-[30px] border border-white/10 bg-gradient-to-br from-white/[0.09] to-white/[0.02] p-7 shadow-glow backdrop-blur-xl sm:p-9">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium tracking-[.2em] text-slate-500">DATA / INSIGHTS</span>
                  <Sparkles className="text-violet" size={19} />
                </div>
                <div className="my-10 flex justify-center">
                  <div className="relative flex h-48 w-48 items-center justify-center rounded-full border border-violet/30 bg-gradient-to-br from-violet/20 to-cyan/10">
                    <div className="absolute inset-3 rounded-full border border-dashed border-white/20" />
                    <div className="flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-violet to-indigo-700 font-display text-5xl font-bold shadow-[0_0_70px_rgba(155,140,255,.35)]">PG</div>
                    <span className="absolute -right-2 top-8 rounded-xl border border-white/10 bg-panel p-3 text-cyan"><BarChart3 size={22} /></span>
                    <span className="absolute -bottom-1 left-0 rounded-xl border border-white/10 bg-panel p-3 text-violet"><Code2 size={21} /></span>
                  </div>
                </div>
                <div className="text-center">
                  <p className="font-display text-xl font-semibold">Curious by nature.</p>
                  <p className="mt-2 text-sm text-slate-400">Analytical in approach. Insight-driven in action.</p>
                </div>
                <div className="mt-8 grid grid-cols-3 gap-2 border-t border-white/10 pt-6 text-center">
                  <div><p className="font-display text-xl font-bold text-violet">05+</p><p className="mt-1 text-[10px] text-slate-500">TOOLS & SKILLS</p></div>
                  <div><p className="font-display text-xl font-bold text-cyan">03</p><p className="mt-1 text-[10px] text-slate-500">PROJECTS</p></div>
                  <div><p className="font-display text-xl font-bold text-pink-300">05</p><p className="mt-1 text-[10px] text-slate-500">CREDENTIALS</p></div>
                </div>
              </div>
              <div className="absolute -left-8 top-24 hidden rounded-2xl border border-white/10 bg-panel/90 px-4 py-3 shadow-xl sm:block"><p className="text-[10px] text-slate-500">FOCUS</p><p className="mt-1 text-sm font-semibold">Data Analytics</p></div>
              <div className="absolute -right-7 bottom-20 hidden rounded-2xl border border-white/10 bg-panel/90 px-4 py-3 shadow-xl sm:block"><p className="text-[10px] text-slate-500">MINDSET</p><p className="mt-1 text-sm font-semibold text-cyan">Always learning ↗</p></div>
            </motion.div>
          </div>
          <a href="#about" className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-[10px] tracking-[.25em] text-slate-500 md:flex">SCROLL TO EXPLORE <ChevronUp className="rotate-180" size={14} /></a>
        </section>

        <section id="about" className="section-wrap">
          <div className="container-shell">
            <SectionHeading eyebrow="01 / ABOUT ME" title="Turning curiosity into clarity." description="I enjoy working at the intersection of data, technology and decision-making." />
            <div className="grid gap-6 lg:grid-cols-[1.15fr_.85fr]">
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="glass-card p-7 sm:p-9">
                <p className="text-base leading-8 text-slate-300">I am a B.Sc. Computer Science with Data Analytics graduate from KPR College of Arts Science and Research. I am interested in understanding business problems through data, preparing reliable datasets and building dashboards that make information easier to understand.</p>
                <p className="mt-5 text-base leading-8 text-slate-400">My learning journey includes Python-based data analysis, SQL, spreadsheets and visualization tools. Through academic and practical projects, I aim to strengthen my analytical thinking and communicate insights clearly.</p>
                <div className="mt-8 flex flex-wrap gap-2">{['Problem solving', 'Analytical thinking', 'Continuous learning'].map((x) => <span key={x} className="tag">{x}</span>)}</div>
              </motion.div>
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="glass-card flex flex-col justify-between p-7 sm:p-9">
                <div><div className="icon-tile"><MousePointer2 size={22} /></div><p className="mt-6 font-display text-2xl font-semibold">My approach</p><p className="mt-3 text-sm leading-7 text-slate-400">Understand the question. Prepare the data. Explore the patterns. Share the insight.</p></div>
                <div className="mt-10 border-t border-white/10 pt-5"><p className="text-xs text-slate-500">CURRENT CAREER FOCUS</p><p className="mt-2 text-lg font-semibold text-cyan">Entry-level Data Analyst roles</p></div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="skills" className="section-wrap">
          <div className="container-shell">
            <SectionHeading eyebrow="02 / TOOLKIT" title="Tools I work with." description="A growing toolkit for preparing, analysing and communicating data." />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {skills.map((skill, i) => <motion.div key={skill.name} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: i * .04 }} className="skill-card"><div className="mb-5 flex items-center justify-between"><span className="icon-tile small"><Code2 size={18} /></span><span className="text-[10px] uppercase tracking-wider text-slate-500">{skill.group}</span></div><h3 className="font-display text-lg font-semibold">{skill.name}</h3><p className="mt-2 text-xs text-slate-500">{skill.level}</p></motion.div>)}
            </div>
            <p className="mt-5 text-xs text-slate-500">Skill levels are intentionally described qualitatively. Update them as your experience grows.</p>
          </div>
        </section>

        <section id="projects" className="section-wrap">
          <div className="container-shell">
            <SectionHeading eyebrow="03 / SELECTED WORK" title="Projects with purpose." description="A selection of projects where I apply technical skills to practical data and business problems." />
            <div className="grid gap-5 lg:grid-cols-2">
              {projects.map((project, i) => <motion.article key={project.number} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: i * .08 }} className={`project-card ${project.accent}`}>
                <div className="flex items-start justify-between"><span className="text-xs font-semibold tracking-[.2em] text-slate-500">PROJECT / {project.number}</span><span className="rounded-full border border-white/10 px-3 py-1 text-[10px] text-slate-400">{project.category}</span></div>
                <div className="project-art"><div className="art-grid" /><div className="art-orbit orbit-a" /><div className="art-orbit orbit-b" /><div className="art-center">{project.number === '01' ? <BarChart3 size={44} /> : project.number === '02' ? <BriefcaseBusiness size={42} /> : <Code2 size={42} />}</div><span className="art-label">{project.number === '01' ? 'INSIGHTS / 360°' : project.number === '02' ? 'FORECAST / INVENTORY' : 'EXPLORE / DISCOVER'}</span></div>
                <h3 className="mt-7 font-display text-2xl font-bold">{project.title}</h3>
                <p className="mt-3 min-h-[78px] text-sm leading-7 text-slate-400">{project.description}</p>
                <p className="mt-4 text-xs font-medium text-slate-300"><span className="text-cyan">↳</span> {project.outcome}</p>
                <div className="mt-5 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}</div>
                <div className="mt-7 flex gap-5 border-t border-white/10 pt-5">
                  <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs font-semibold text-slate-200 transition hover:text-violet"><Github size={15} /> Source code <ExternalLink size={12} /></a>
                  {project.live && <a href={project.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs font-semibold text-slate-200 transition hover:text-cyan">Live demo <ExternalLink size={12} /></a>}
                </div>
              </motion.article>)}
            </div>
          </div>
        </section>

        <section id="education" className="section-wrap">
          <div className="container-shell">
            <SectionHeading eyebrow="04 / EDUCATION" title="The foundation." description="Building a strong base in computing and data-focused problem solving." />
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="glass-card relative overflow-hidden p-7 sm:p-10">
              <div className="absolute -right-10 -top-12 h-48 w-48 rounded-full bg-violet/10 blur-3xl" />
              <div className="relative flex flex-col gap-6 sm:flex-row sm:items-start">
                <div className="icon-tile h-14 w-14 shrink-0"><GraduationCap size={27} /></div>
                <div className="flex-1">
                  <p className="text-xs font-semibold tracking-[.18em] text-cyan">UNDERGRADUATE DEGREE</p>
                  <h3 className="mt-3 font-display text-2xl font-bold">B.Sc. Computer Science with Data Analytics</h3>
                  <p className="mt-2 text-base text-slate-300">KPR College of Arts Science and Research</p>
                  <div className="mt-5 flex flex-wrap gap-3 text-xs text-slate-500"><span className="rounded-full border border-white/10 px-3 py-2">GPA: 7.8</span><span className="rounded-full border border-white/10 px-3 py-2">Data Analytics specialization</span></div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="certificates" className="section-wrap">
          <div className="container-shell">
            <SectionHeading eyebrow="05 / LEARNING" title="Certifications & experience." description="Learning experiences that support my technical foundation and professional growth." />
            <div className="grid gap-4 md:grid-cols-2">
              {certificates.map((cert, i) => <motion.div key={cert.title} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: i * .05 }} className="credential-card">
                <div className="flex gap-4"><div className="icon-tile small shrink-0"><Sparkles size={18} /></div><div className="min-w-0 flex-1"><p className="text-[10px] font-semibold uppercase tracking-[.16em] text-violet">{cert.issuer}</p><h3 className="mt-2 font-display text-lg font-semibold">{cert.title}</h3><p className="mt-2 text-xs leading-6 text-slate-400">{cert.detail}</p><div className="mt-4 flex items-center justify-between"><span className="text-[11px] text-slate-500">{cert.date}</span>{cert.link && <a href={cert.link} target="_blank" rel="noreferrer" className="text-xs text-cyan hover:underline">Verify <ExternalLink size={12} className="inline" /></a>}</div></div></div>
              </motion.div>)}
            </div>
            <p className="mt-5 text-xs text-slate-500">Add certificate verification links where available. Keep certificate titles and dates consistent with the original documents.</p>
          </div>
        </section>

        <section id="contact" className="section-wrap pb-28">
          <div className="container-shell">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="contact-panel">
              <div className="relative z-10 mx-auto max-w-3xl text-center">
                <p className="eyebrow justify-center">06 / CONTACT</p>
                <h2 className="mt-5 font-display text-4xl font-bold tracking-tight sm:text-6xl">Let's turn data into <span className="gradient-text">decisions.</span></h2>
                <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">I'm open to entry-level opportunities, internships and conversations around data analytics. Feel free to connect.</p>
                <div className="mt-9 flex flex-wrap justify-center gap-3">
                  <a href={`mailto:${profile.email}`} className="primary-button"><Send size={16} /> Email me</a>
                  <button onClick={copyEmail} className="secondary-button">{copied ? <Check size={16} /> : <Mail size={16} />}{copied ? 'Email copied' : 'Copy email'}</button>
                </div>
                <div className="mt-9 flex justify-center gap-4"><a className="social-link" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a><a className="social-link" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a></div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/[0.07] py-7">
        <div className="container-shell flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left"><p className="text-xs text-slate-500">© {new Date().getFullYear()} Priya G. Crafted with curiosity and data.</p><a href="#home" className="inline-flex items-center gap-2 text-xs text-slate-400 transition hover:text-white">Back to top <ArrowRight className="-rotate-45" size={13} /></a></div>
      </footer>
    </div>
  )
}

function ArrowUpRightIcon() {
  return <ArrowDownRight className="-rotate-90" size={14} />
}

export default App