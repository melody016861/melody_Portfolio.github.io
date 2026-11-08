import { useEffect, useState } from 'react';
import {
  ArrowDown, ArrowRight, ArrowUpRight, Award, BriefcaseBusiness, ChevronRight,
  Code2, Download, ExternalLink, Github, Globe2, GraduationCap, Layers3,
  Linkedin, Mail, MapPin, Menu, Moon, Sparkles, Sun, X
} from 'lucide-react';
import { education, experiences, profile, projects, recognitions, skillGroups, type Language } from './data';

const labels = {
  zh: {
    about:'關於我', experience:'工作經歷', skills:'技術能力', projects:'精選專案', education:'教育背景', contact:'聯絡我',
    viewWork:'探索我的作品', getInTouch:'與我聯絡', available:'OPEN TO CONNECTIONS',
    aboutTitle:'從研究到實作，讓想法真正落地。', aboutText:'我喜歡將 AI 的探索精神與軟體工程的系統性結合：從影像處理與深度學習，到 API 整合、容器化部署及全端應用，都期待交付清晰、可靠且有影響力的解決方案。',
    aboutNote:'跨域思考', aboutNoteDetail:'結合資訊管理、AI 研究與工程實作',
    experienceTitle:'持續累積的工程實務', skillsTitle:'我的技術工具箱', projectsTitle:'從問題出發的實作與研究',
    projectDetail:'專案詳情', close:'關閉', educationTitle:'學習歷程', awards:'獎項與肯定',
    contactTitle:'有想法嗎？一起聊聊。', contactText:'歡迎交流軟體工程、AI、智慧製造與技術合作機會。',
    mail:'電子郵件', github:'GitHub', linkedin:'LinkedIn', noContact:'聯絡連結尚未設定，請先在 src/data.ts 加入個人資訊。',
    print:'列印 / 儲存 PDF', top:'回到頂端', portfolio:'個人作品集', scroll:'向下探索', current:'目前',
    noLinks:'專案尚無公開連結', projectsIntro:'依照履歷 PDF 整理的研究、競賽、雲端與應用專案；詳情可查看來源連結。'
  },
  en: {
    about:'About', experience:'Experience', skills:'Skills', projects:'Projects', education:'Education', contact:'Contact',
    viewWork:'Explore My Work', getInTouch:'Get in Touch', available:'OPEN TO CONNECTIONS',
    aboutTitle:'From research to engineering that makes an impact.', aboutText:'I bring together the curiosity of AI research and the discipline of software engineering. From computer vision and deep learning to APIs, containerized delivery, and full-stack apps, I enjoy building clear and dependable solutions.',
    aboutNote:'Interdisciplinary mindset', aboutNoteDetail:'Connecting information management, AI, and engineering',
    experienceTitle:'Professional experience', skillsTitle:'Tools & technologies', projectsTitle:'Selected work & research',
    projectDetail:'View details', close:'Close', educationTitle:'Educational journey', awards:'Awards & Recognition',
    contactTitle:'Have an idea? Let’s connect.', contactText:'Happy to connect about software engineering, AI, smart manufacturing, or meaningful collaborations.',
    mail:'Email', github:'GitHub', linkedin:'LinkedIn', noContact:'Contact links are not set yet. Add yours in src/data.ts.',
    print:'Print / Save as PDF', top:'Back to top', portfolio:'Personal Portfolio', scroll:'Scroll to explore', current:'Present',
    noLinks:'No public project links yet', projectsIntro:'Research, competitions, cloud solutions, and apps drawn from my résumé. Explore details and available source links.'
  }
};

const getInitialLanguage = ():Language => {
  try { return localStorage.getItem('portfolio-language') === 'en' ? 'en' : 'zh'; } catch { return 'zh'; }
};
const getInitialTheme = () => {
  try { return localStorage.getItem('portfolio-theme') === 'dark' ? 'dark' : 'light'; } catch { return 'light'; }
};

export default function App() {
  const [lang, setLang] = useState<Language>(getInitialLanguage);
  const [theme, setTheme] = useState(getInitialTheme);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const t = labels[lang];
  const project = projects.find(p=>p.id === selectedProject);

  useEffect(() => { document.documentElement.lang = lang === 'zh' ? 'zh-Hant' : 'en'; try {localStorage.setItem('portfolio-language', lang);} catch {} }, [lang]);
  useEffect(() => { document.documentElement.dataset.theme = theme; try {localStorage.setItem('portfolio-theme', theme);} catch {} }, [theme]);
  useEffect(() => {
    if (!project) return;
    function close(e:KeyboardEvent) { if(e.key === 'Escape') setSelectedProject(null); }
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [project]);
  const nav = [
    ['about', t.about], ['experience', t.experience], ['skills', t.skills],
    ['projects', t.projects], ['education', t.education], ['contact', t.contact]
  ];
  const contacts = [
    { name:t.mail, href: profile.email ? `mailto:${profile.email}` : '', icon:<Mail size={18} /> },
    { name:'GitHub', href:profile.github, icon:<Github size={18} /> },
    { name:'LinkedIn', href:profile.linkedin, icon:<Linkedin size={18} /> }
  ].filter(c=>c.href);

  return <>
    <div className="top-glow" aria-hidden="true" />
    <header className="site-header"><div className="container nav-inner">
      <a href="#home" className="brand" aria-label="Melody Hu, home"><span className="brand-icon">M<span>.</span></span><span>melody<span className="brand-muted">.dev</span></span></a>
      <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
        {nav.map(([id, label])=><a key={id} href={`#${id}`} onClick={()=>setMenuOpen(false)}>{label}</a>)}
      </nav>
      <div className="nav-actions">
        <button className="utility-btn language-btn" onClick={()=>setLang(lang==='zh'?'en':'zh')} aria-label="Switch language"><Globe2 size={17}/><span>{lang==='zh'?'EN':'中'}</span></button>
        <button className="utility-btn" onClick={()=>setTheme(theme==='light'?'dark':'light')} aria-label="Toggle color mode">{theme==='light'?<Moon size={18}/>:<Sun size={18}/>}</button>
        <button className="utility-btn mobile-menu-btn" onClick={()=>setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>{menuOpen?<X size={20}/>:<Menu size={20}/>}</button>
      </div>
    </div></header>

    <main>
      <section id="home" className="hero container"><div className="hero-copy">
        <div className="eyebrow"><span className="status-dot" />{t.available}<span className="eyebrow-line" /></div>
        <div className="hello">Hi, I'm <span className="blue-text">Melody.</span><span className="wave">✳</span></div>
        <h1>{profile.headline[lang]}</h1>
        <p className="hero-subtitle">{profile.subtitle[lang]}</p>
        <div className="hero-actions"><a className="btn btn-primary" href="#projects">{t.viewWork}<ArrowUpRight size={18}/></a><a className="btn btn-outline" href="#contact">{t.getInTouch}<ArrowRight size={18}/></a></div>
        <div className="hero-meta"><span><MapPin size={16}/>{profile.location[lang]}</span><span className="meta-divider"/><span><Code2 size={16}/>{lang==='zh'?'軟體 × AI × 系統':'Software × AI × Systems'}</span></div>
      </div>
      <div className="hero-visual" aria-label="Abstract engineering illustration">
        <div className="visual-grid"/><div className="orbit orbit-one"/><div className="orbit orbit-two"/>
        <div className="visual-main-card"><div className="visual-card-top"><span className="tiny-dots"><i/><i/><i/></span><span>portfolio.tsx</span><Code2 size={15}/></div>
          <div className="code-lines"><div><span className="code-purple">const</span> engineer = {'{'}</div><div className="indent">name: <span className="code-green">'Melody Hu'</span>,</div><div className="indent">focus: [</div><div className="indent2"><span className="code-green">'Software'</span>,</div><div className="indent2"><span className="code-green">'AI & Systems'</span></div><div className="indent">],</div><div className="indent">mindset: <span className="code-green">'Keep building'</span></div><div>{'}'};</div></div>
        </div>
        <div className="float-card float-card-left"><span className="float-icon"><Layers3 size={20}/></span><div><strong>Full Stack</strong><small>Build • Ship • Learn</small></div></div>
        <div className="float-card float-card-right"><span className="float-icon sparkle"><Sparkles size={19}/></span><div><strong>AI + Vision</strong><small>Research to reality</small></div></div>
        <div className="visual-decoration decoration-a"/><div className="visual-decoration decoration-b"/>
      </div>
      <a className="scroll-hint" href="#about"><ArrowDown size={14}/>{t.scroll}</a>
      </section>

      <section id="about" className="section section-tinted"><div className="container about-grid">
        <div><SectionTag number="01" text={t.about}/><h2>{t.aboutTitle}</h2><p className="section-lead">{t.aboutText}</p><div className="about-highlight"><span><Sparkles size={21}/></span><div><strong>{t.aboutNote}</strong><p>{t.aboutNoteDetail}</p></div></div></div>
        <div className="about-cards"><div className="about-card about-card-one"><div className="icon-square"><GraduationCap size={22}/></div><span>NYCU</span><strong>{lang==='zh'?'資訊管理碩士':'M.S. Information Management'}</strong><small>AI · Computer Vision · Research</small></div><div className="about-card about-card-two"><div className="icon-square"><BriefcaseBusiness size={22}/></div><span>TSMC</span><strong>{lang==='zh'?'智慧製造系統工程師':'Smart Manufacturing Engineer'}</strong><small>Software · Systems · Automation</small></div></div>
      </div></section>

      <section id="experience" className="section container"><SectionTag number="02" text={t.experience}/><h2>{t.experienceTitle}</h2><div className="timeline">
        {experiences.map(e=><article className="timeline-item" key={e.role.en}><span className="timeline-marker"/><div className="timeline-period">{e.period[lang]}</div><div className="timeline-content"><span className="org-name">{e.organization[lang]}</span><h3>{e.role[lang]}</h3><p>{e.description[lang]}</p><div className="tags">{e.tags.map(tag=><span key={tag}>{tag}</span>)}</div></div></article>)}
      </div></section>

      <section id="skills" className="section section-tinted"><div className="container"><SectionTag number="03" text={t.skills}/><h2>{t.skillsTitle}</h2><div className="skills-grid">{skillGroups.map((s,i)=><div className="skill-card" key={s.name.en}><div className="skill-heading"><span className="skill-icon">{[<Code2 size={22}/>,<Layers3 size={22}/>,<Sparkles size={22}/>,<Globe2 size={22}/>][i]}</span><h3>{s.name[lang]}</h3></div><div className="tags tags-skills">{s.skills.map(skill=><span key={skill}>{skill}</span>)}</div></div>)}</div></div></section>

      <section id="projects" className="section container"><SectionTag number="04" text={t.projects}/><h2>{t.projectsTitle}</h2><p className="section-intro">{t.projectsIntro}</p><div className="projects-grid">{projects.map((p,i)=><article key={p.id} className="project-card"><div className={`project-art art-${p.accent}`}><div className="project-art-no">0{i+1}</div><ProjectGlyph id={p.id}/><div className="project-year">{p.year}</div></div><div className="project-content"><div className="project-category">{p.category[lang]}</div><h3>{p.title[lang]}</h3><p>{p.summary[lang]}</p><div className="tags">{p.tags.slice(0,4).map(tag=><span key={tag}>{tag}</span>)}</div><button className="project-open" onClick={()=>setSelectedProject(p.id)}>{t.projectDetail}<ArrowUpRight size={17}/></button></div></article>)}</div></section>

      <section id="education" className="section section-tinted"><div className="container education-grid"><div><SectionTag number="05" text={t.education}/><h2>{t.educationTitle}</h2><div className="education-list">{education.map(e=><article key={e.period} className="education-item"><div className="education-symbol"><GraduationCap size={21}/></div><div><span className="date-label">{e.period}</span><h3>{e.degree[lang]}</h3><p className="school">{e.school[lang]}</p><p>{e.detail[lang]}</p></div></article>)}</div></div><div className="awards-wrap"><SectionTag number="✦" text={t.awards}/><div className="award-list">{recognitions.map(r=><div className="award-card" key={r.title.en}><span className="award-icon"><Award size={22}/></span><div><h3>{r.title[lang]}</h3><p>{r.issuer[lang]}</p>{r.url && <a href={r.url} target="_blank" rel="noopener noreferrer" className="award-link">{lang==='zh'?'查看證明／報導':'View source'} <ExternalLink size={13}/></a>}</div></div>)}</div></div></div></section>

      <section id="contact" className="section contact-section"><div className="container contact-box"><div className="contact-orb"/><div className="contact-content"><span className="contact-label"><span className="status-dot"/> LET'S CONNECT</span><h2>{t.contactTitle}</h2><p>{t.contactText}</p><div className="contact-actions">{contacts.length ? contacts.map(c=><a className="btn btn-white" key={c.name} href={c.href} target={c.href.startsWith('mailto:')?undefined:'_blank'} rel="noreferrer">{c.icon}{c.name}<ArrowUpRight size={15}/></a>) : <span className="contact-placeholder">{t.noContact}</span>}</div></div></div></section>
    </main>
    <footer className="site-footer"><div className="container footer-inner"><div><div className="footer-brand">Melody Hu<span>.</span></div><span>© {new Date().getFullYear()} Melody Hu · {t.portfolio}</span></div><div className="footer-actions"><button onClick={()=>window.print()}><Download size={16}/>{t.print}</button><a href="#home"><ArrowUpRight size={16}/>{t.top}</a></div></div></footer>

    {project && <div className="modal-backdrop" onMouseDown={()=>setSelectedProject(null)}><section className="project-modal" role="dialog" aria-modal="true" aria-label={project.title[lang]} onMouseDown={e=>e.stopPropagation()}><button className="modal-close" aria-label={t.close} onClick={()=>setSelectedProject(null)}><X size={20}/></button><span className="project-category">{project.category[lang]} · {project.year}</span><h2>{project.title[lang]}</h2><p className="modal-summary">{project.summary[lang]}</p><p>{project.details[lang]}</p><div className="tags">{project.tags.map(tag=><span key={tag}>{tag}</span>)}</div><div className="modal-links">{project.repo && <a className="btn btn-outline" href={project.repo} target="_blank" rel="noreferrer"><Github size={17}/>GitHub<ExternalLink size={15}/></a>}{project.demo && <a className="btn btn-primary" href={project.demo} target="_blank" rel="noreferrer">Demo<ExternalLink size={15}/></a>}{!project.repo && !project.demo && <span className="date-label">{t.noLinks}</span>}</div><button className="modal-bottom-close" onClick={()=>setSelectedProject(null)}>{t.close}<ChevronRight size={16}/></button></section></div>}
  </>;
}
function SectionTag({number,text}:{number:string;text:string}) { return <div className="section-tag"><span>{number}</span><span className="section-tag-rule"/>{text}</div>; }
function ProjectGlyph({id}:{id:string}) {
  if (id==='qr') return <div className="glyph-qr"><span/><span/><span/><span/><span/><span/><span/><span/><span/></div>;
  if (id==='devops') return <div className="glyph-flow"><span>DEV</span><ArrowRight size={23}/><span>OPS</span></div>;
  if (id==='phishing') return <div className="glyph-ai"><Sparkles size={52} strokeWidth={1.3}/><div className="glyph-ai-lines"><i/><i/><i/></div></div>;
  if (id==='trash') return <div className="glyph-aid">AI<span>✳</span></div>;
  if (id==='aws') return <div className="glyph-flow"><span>AWS</span><ArrowRight size={23}/><span>SNS</span></div>;
  if (id==='seat') return <div className="glyph-aid">UX<span>✳</span></div>;
  if (id==='food') return <div className="glyph-aid">DB<span>✳</span></div>;
  return <div className="glyph-aid">{id.slice(0,2).toUpperCase()}<span>✳</span></div>;
}
