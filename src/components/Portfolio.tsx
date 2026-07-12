import { useEffect, useMemo, useRef, useState, type ComponentType } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import {
  SiHtml5, SiCss, SiJavascript, SiPython, SiMysql, SiGit, SiGithub,
  SiOpencv, SiReact, SiSpringboot, SiC, SiClaude,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { Code2, Database, Wrench, Sparkles, Server, Brain, Network, Orbit } from "lucide-react";
import projectAttendance from "@/assets/project-attendance.png";
import projectHireflow from "@/assets/project-hireflow.png";
import projectBooknest from "@/assets/project-booknest.png";

function OracleIcon({ size = 16, className }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="10" fill="#C74634" />
      <path
        d="M7.5 12c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5-2 4.5-4.5 4.5"
        stroke="white"
        strokeWidth="2.2"
        strokeLinecap="round"
        fill="none"
      />
      <path d="M16.5 8.5l1.8-2.8" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

type IconCmp = ComponentType<{ size?: number; color?: string; className?: string }>;

const SKILL_ICON: Record<string, { Icon: IconCmp; color: string }> = {
  "HTML5":       { Icon: SiHtml5,      color: "#E34F26" },
  "CSS":         { Icon: SiCss,        color: "#1572B6" },
  "JavaScript":  { Icon: SiJavascript, color: "#F7DF1E" },
  "Java":        { Icon: FaJava,       color: "#F89820" },
  "Python":      { Icon: SiPython,     color: "#3776AB" },
  "C":           { Icon: SiC,          color: "#A8B9CC" },
  "MySQL":         { Icon: SiMysql,      color: "#4479A1" },
  "Oracle Database": { Icon: OracleIcon, color: "#C74634" },
  "Git":           { Icon: SiGit,        color: "#F05032" },
  "VS Code":     { Icon: VscVscode,    color: "#007ACC" },
  "GitHub":      { Icon: SiGithub,     color: "#0d1117" },
  "AntiGravity": { Icon: Orbit,        color: "#8b5cf6" },
  "Claude":      { Icon: SiClaude,     color: "#D97757" },
  // project tech tags
  "OpenCV":           { Icon: SiOpencv,     color: "#5C3EE8" },
  "Machine Learning": { Icon: Brain,        color: "#a78bfa" },
  "Deep Learning":    { Icon: Network,      color: "#22d3ee" },
  "Spring Boot":      { Icon: SiSpringboot, color: "#6DB33F" },
  "React.js":         { Icon: SiReact,      color: "#61DAFB" },
  "React":            { Icon: SiReact,      color: "#61DAFB" },
  "REST APIs":        { Icon: Server,       color: "#22d3ee" },
  "HTML":             { Icon: SiHtml5,      color: "#E34F26" },
};

const CATEGORY_ICON: Record<string, IconCmp> = {
  Frontend: Code2,
  Backend: Server,
  Databases: Database,
  Tools: Wrench,
  "AI Tools": Sparkles,
};

function SkillIcon({ name, size = 16 }: { name: string; size?: number }) {
  const entry = SKILL_ICON[name];
  if (!entry) return null;
  const { Icon, color } = entry;
  return <Icon size={size} color={color} />;
}

const PROJECT_IMAGE: Record<string, string> = {
  "Multi-Face Attendance Notification System": projectAttendance,
  "HireFlow — Job Application Tracking System": projectHireflow,
  "BookNest: Where Stories Nestle": projectBooknest,
};

/* -------------------------------------------------------------------------- */
/* Data                                                                       */
/* -------------------------------------------------------------------------- */

const LOGO_URL = "https://tapportfolio.lovable.app/assets/logo-CxDGoOCE.png";
const RESUME_URL = "https://drive.google.com/file/d/1oAEQIdaHGvbKKwlSQkrQ8yJhDEfxwG5u/view?usp=drive_link";
const PROFILE_URL = "https://drive.google.com/thumbnail?id=1vRxWV-gieITdmAnJPaOE77UNqJUBbPtf&sz=w800";
const VIDEO_URL = "https://www.pexels.com/download/video/19660176/";

const TYPING_ROLES = ["Frontend Developer", "Java Full Stack Web Developer", "Java Developer"];

const NAV = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Education", id: "education" },
  { label: "Certifications", id: "certs" },
  { label: "Contact", id: "contact" },
];

const SKILLS = {
  Frontend: ["HTML5", "CSS", "JavaScript", "React"],
  Backend: ["Java", "Python", "C"],
  Databases: ["MySQL", "Oracle Database"],
  Tools: ["Git", "VS Code", "GitHub", "AntiGravity"],
  "AI Tools": ["Claude"],
};

const PROJECTS = [
  {
    title: "Multi-Face Attendance Notification System",
    category: "AI / ML",
    description:
      "Real-time face recognition with automated attendance tracking and email notifications. Improved detection accuracy via image preprocessing and model optimization.",
    tech: ["Python", "OpenCV", "Machine Learning", "Deep Learning"],
    live: null as string | null,
    github: "https://github.com/vamsikumar-4807/Multi-Face-Attendance-Real-Time-Notification",
  },
  {
    title: "HireFlow — Job Application Tracking System",
    category: "Full Stack",
    description:
      "Full-stack web app to track job applications, statuses, interview progress and visualize job-search analytics.",
    tech: ["Spring Boot", "React.js", "MySQL", "REST APIs"],
    live: "https://hire-flow-job-application-tracking.vercel.app/",
    github: "https://github.com/vamsikumar-4807/HireFlow-Job-Application-Tracking-System",
  },
  {
    title: "BookNest: Where Stories Nestle",
    category: "Full Stack",
    description: "Book browsing web application with interactive UI components and cross-browser compatibility.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: null,
    github: "https://github.com/vamsikumar-4807/BookNest",
  },
];

const EDUCATION = [
  {
    degree: "B.Tech — Computer Science",
    institute: "Pydah College Of Engineering",
    location: "Kakinada, India",
    status: "Graduating 2026",
    description:
      "CSE graduate with a strong foundation in Java, web technologies and software development. Passionate about building efficient, user-focused applications.",
  },
  {
    degree: "Intermediate (BIEAP)",
    institute: "AKRG Junior College",
    location: "Nallajerla, India",
    status: "Graduated 2022",
    description: "",
  },
  {
    degree: "Class X (CBSE)",
    institute: "AKRG High School",
    location: "Nallajerla, India",
    status: "Graduated 2020",
    description: "",
  },
];

const CERTS = [
  {
    name: "Programming In Java — Elite + Gold",
    platform: "NPTEL Swayam",
    date: "Nov 2025",
    skills: ["Java"],
    link: "https://nptel.ac.in/noc/E_Certificate/NPTEL25CS110S35930025010952951",
  },
  {
    name: "Generative AI for Intelligent Applications",
    platform: "TechnoSpark IT Solutions",
    date: "Mar 2026",
    skills: ["Generative AI", "Python"],
    link: "https://script.google.com/macros/s/AKfycbyEwhWXr_NvQB00caDq_9wm7z9nHIGE8beRoP--798wbkGq3cjyyZPm39flSNO8JzNJLQ/exec",
  },
  {
    name: "Java Software Developer",
    platform: "Infosys FSP × ICT Academy",
    date: "Mar 2026",
    skills: ["Java", "Spring Boot"],
    link: "https://drive.google.com/file/d/1Xw7lCVssbgjdddM8lCDjYnY6U0q8p-Hh/view?usp=drive_link",
  },
  {
    name: "Full Stack Development (MERN)",
    platform: "APSCHE × SmartBridge",
    date: "Mar 2026",
    skills: ["MERN"],
    link: "https://drive.google.com/file/d/1gRbkj_MFzRL49VO5tDEHRLjCc6zRKHcQ/view?usp=drive_link",
  },
  {
    name: "Learnathon — Certificate of Participation",
    platform: "ICT Academy",
    date: "Nov 2025",
    skills: ["Hackathon"],
    link: "https://drive.google.com/file/d/1QpzFCFg-posLK9aYTWZrI8rSF3ydzEaA/view?usp=drive_link",
  },
  {
    name: "Welcome to ServiceNow — Micro Cert",
    platform: "ServiceNow",
    date: "Apr 2025",
    skills: ["Generative AI", "App Dev"],
    link: "https://drive.google.com/file/d/1hpDwO93jrxRGZhNagS2GMHQMqeE5grdu/view?usp=drive_link",
  },
];

/* -------------------------------------------------------------------------- */
/* Cursor light + background                                                  */
/* -------------------------------------------------------------------------- */

function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let rafId = 0;
    let tx = -500, ty = -500;
    const onMove = (e: MouseEvent) => {
      tx = e.clientX - 250;
      ty = e.clientY - 250;
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        if (ref.current) {
          // Direct style write — no CSS transition, no React re-render
          ref.current.style.transform = `translate(${tx}px,${ty}px)`;
        }
      });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);
  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[1] h-[500px] w-[500px] rounded-full opacity-40 mix-blend-screen blur-3xl hidden md:block"
      style={{
        willChange: "transform",
        background:
          "radial-gradient(circle, oklch(0.65 0.3 285 / 0.45), oklch(0.78 0.16 200 / 0.15) 40%, transparent 70%)",
      }}
    />
  );
}

function BgVideo() {
  return (
    <div
      className="fixed inset-0 z-0 overflow-hidden"
      style={{ contain: "strict", willChange: "transform" }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover opacity-45"
        style={{ willChange: "transform" }}
      >
        <source src={VIDEO_URL} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-background/75" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at top, oklch(0.55 0.28 285 / 0.22), transparent 60%), radial-gradient(ellipse at bottom, oklch(0.78 0.16 200 / 0.12), transparent 60%)",
        }}
      />
      <div className="absolute inset-0 grid-bg opacity-25" />
    </div>
  );
}

/* Floating geometric shapes — mouse parallax via direct DOM refs (no React re-renders) */
const SHAPE_DATA = [
  { size: 200, x: "8%",  y: "20%", depth: 30, shape: "circle",   color: "oklch(0.55 0.28 285 / 0.25)", delay: "0s" },
  { size: 120, x: "85%", y: "15%", depth: 50, shape: "square",   color: "oklch(0.78 0.16 200 / 0.2)",  delay: "0.8s" },
  { size: 160, x: "75%", y: "70%", depth: 40, shape: "circle",   color: "oklch(0.65 0.25 250 / 0.2)",  delay: "1.6s" },
  { size: 90,  x: "15%", y: "75%", depth: 60, shape: "triangle", color: "oklch(0.78 0.16 200 / 0.25)", delay: "2.4s" },
] as const;

function FloatingShapes() {
  const shapeRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const mx = e.clientX / window.innerWidth - 0.5;
      const my = e.clientY / window.innerHeight - 0.5;
      shapeRefs.current.forEach((el, i) => {
        if (!el) return;
        el.style.transform = `translate(${mx * SHAPE_DATA[i].depth}px, ${my * SHAPE_DATA[i].depth}px)`;
      });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {SHAPE_DATA.map((s, i) => (
        <div
          key={i}
          ref={(el) => { shapeRefs.current[i] = el; }}
          className="absolute animate-float shape-blur"
          style={{
            left: s.x,
            top: s.y,
            width: s.size,
            height: s.size,
            background: s.color,
            borderRadius: s.shape === "circle" ? "50%" : s.shape === "square" ? "20%" : "0",
            clipPath: s.shape === "triangle" ? "polygon(50% 0%, 0% 100%, 100% 100%)" : undefined,
            animationDelay: s.delay,
          }}
        />
      ))}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Loader                                                                     */
/* -------------------------------------------------------------------------- */

function PageLoader({ done }: { done: boolean }) {
  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        >
          <div className="relative">
            <div className="h-24 w-24 animate-spin-slow rounded-full border-2 border-transparent"
                 style={{ borderTopColor: "oklch(0.65 0.3 285)", borderRightColor: "oklch(0.78 0.16 200)" }} />
            <div className="absolute inset-2 animate-pulse-glow rounded-full glass-strong flex items-center justify-center font-display text-xl gradient-text font-bold">
              VK
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* -------------------------------------------------------------------------- */
/* Navbar                                                                     */
/* -------------------------------------------------------------------------- */

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 md:px-6 py-3 transition-all ${
            scrolled ? "glass-strong shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]" : "glass"
          }`}
        >
          <button
            onClick={() => scrollTo("home")}
            className="flex items-center gap-2.5 transition-transform hover:scale-105"
            aria-label="Top of page"
          >
            <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-full p-[2px] bg-gradient-to-br from-primary via-accent to-primary shadow-[0_0_20px_-4px_hsl(var(--primary)/0.6)]">
              <img
                src={PROFILE_URL}
                alt="Profile"
                className="h-full w-full rounded-full object-cover bg-background"
              />
            </span>
            <span className="hidden sm:inline-flex h-9 w-9 items-center justify-center rounded-lg glass-strong text-primary shadow-[0_0_18px_-6px_hsl(var(--primary)/0.7)]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <path d="M8 21h8M12 17v4" />
              </svg>
            </span>
          </button>

          <nav className="hidden lg:flex items-center gap-2">
            {NAV.map((n) => (
              <BackgroundGradient
                key={n.id}
                containerClassName="rounded-full p-[1.5px]"
                className="rounded-full"
              >
                <button
                  onClick={() => scrollTo(n.id)}
                  className="relative px-4 py-1.5 text-sm font-medium rounded-full bg-background/80 backdrop-blur text-muted-foreground hover:text-foreground transition-colors"
                >
                  {n.label}
                </button>
              </BackgroundGradient>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-primary-foreground bg-gradient-to-r from-primary via-[oklch(0.6_0.26_270)] to-accent animate-gradient hover:shadow-[0_0_30px_-5px_oklch(0.65_0.3_285_/_0.7)] transition-all hover:scale-105"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14"/></svg>
              Download Resume
            </a>
            <button
              onClick={() => setOpen((o) => !o)}
              className="lg:hidden glass h-10 w-10 rounded-xl flex items-center justify-center"
              aria-label="Menu"
            >
              <div className="space-y-1.5">
                <span className={`block h-0.5 w-5 bg-foreground transition-all ${open ? "translate-y-2 rotate-45" : ""}`} />
                <span className={`block h-0.5 w-5 bg-foreground transition-all ${open ? "opacity-0" : ""}`} />
                <span className={`block h-0.5 w-5 bg-foreground transition-all ${open ? "-translate-y-2 -rotate-45" : ""}`} />
              </div>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="lg:hidden mt-2 glass-strong rounded-2xl p-3"
            >
              {NAV.map((n) => (
                <button
                  key={n.id}
                  onClick={() => scrollTo(n.id)}
                  className="block w-full text-left px-4 py-3 rounded-lg hover:bg-primary/10 text-sm"
                >
                  {n.label}
                </button>
              ))}
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="sm:hidden block mt-2 text-center rounded-lg px-4 py-3 text-sm font-semibold text-primary-foreground bg-gradient-to-r from-primary to-accent"
              >
                Download Resume
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}

/* -------------------------------------------------------------------------- */
/* Typing effect                                                              */
/* -------------------------------------------------------------------------- */

function useTyping(words: string[]) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);
  useEffect(() => {
    const current = words[i % words.length];
    const speed = del ? 40 : 80;
    const t = setTimeout(() => {
      if (!del) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDel(true), 1500);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDel(false);
          setI((p) => p + 1);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, i, words]);
  return text;
}

/* -------------------------------------------------------------------------- */
/* Section helpers                                                            */
/* -------------------------------------------------------------------------- */

function SectionHeading({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="text-center mb-14"
    >
      <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-mono uppercase tracking-widest text-accent mb-4">
        <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-glow" />
        {eyebrow}
      </div>
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
        <span className="gradient-text">{title}</span>
      </h2>
      {subtitle && <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
    </motion.div>
  );
}

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.2, 0.8, 0.2, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* 3D tilt wrapper */
function Tilt({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(1000px) rotateX(${-py * 8}deg) rotateY(${px * 10}deg) translateY(-4px)`;
  };
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "perspective(1000px) rotateX(0) rotateY(0)";
  };
  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`transition-transform duration-300 ease-out will-change-transform ${className}`}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Hero                                                                       */
/* -------------------------------------------------------------------------- */

function Hero() {
  const typed = useTyping(TYPING_ROLES);
  // Direct DOM parallax — no React state updates on scroll, no Framer Motion spring lag
  const textRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const y = window.scrollY;
          if (textRef.current) textRef.current.style.transform = `translateY(${y * -0.13}px)`;
          if (imgRef.current) imgRef.current.style.transform = `translateY(${y * -0.07}px)`;
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
      <FloatingShapes />
      <div className="mx-auto max-w-7xl px-4 md:px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
          <div ref={textRef} className="space-y-6" style={{ willChange: "transform" }}>
            <Reveal delay={0.1}>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
                Hi, I'm <span className="gradient-text glow-text animate-name-glow">Vamsi Kumar</span>
                <br />
                <span className="gradient-text glow-text animate-name-glow">Dusanapudi</span>
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="h-9 font-mono text-lg md:text-xl text-accent">
                <span>{typed}</span>
                <span className="ml-0.5 animate-blink">▌</span>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <p className="text-muted-foreground text-lg max-w-xl leading-relaxed">
                Aspiring Frontend Developer | Aspiring Java Full Stack Developer — building efficient, user-focused software with a passion for clean code and continuous learning.
              </p>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary via-[oklch(0.6_0.26_270)] to-accent animate-gradient px-6 py-3 text-sm font-semibold text-primary-foreground glow-primary hover:scale-105 transition-transform"
                >
                  View Projects
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14m0 0l-6-6m6 6l-6 6"/></svg>
                </button>
                <button
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="inline-flex items-center gap-2 rounded-xl glass-strong px-6 py-3 text-sm font-semibold hover:bg-primary/10 transition-colors"
                >
                  Get in Touch
                </button>
              </div>
            </Reveal>

            <Reveal delay={0.5}>
              <div className="flex items-center gap-4 pt-2">
                <a href="https://github.com/vamsikumar-4807" target="_blank" rel="noopener noreferrer" className="glass h-11 w-11 rounded-xl flex items-center justify-center hover:text-accent hover:scale-110 transition-all">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.58 2 12.22c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.49-1.11-1.49-.91-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.13-4.56-5.04 0-1.11.39-2.02 1.03-2.74-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05A9.4 9.4 0 0112 6.84c.85 0 1.71.12 2.51.34 1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.74 0 3.92-2.34 4.78-4.57 5.03.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.59.69.49A10.02 10.02 0 0022 12.22C22 6.58 17.52 2 12 2z"/></svg>
                </a>
                <a href="https://www.linkedin.com/in/vamsi-kumar-dusanapudi-5b3b99235/" target="_blank" rel="noopener noreferrer" className="glass h-11 w-11 rounded-xl flex items-center justify-center hover:text-accent hover:scale-110 transition-all">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 11.001-4.121A2.06 2.06 0 015.34 7.43zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/></svg>
                </a>
                <a href="mailto:vamsikumardusanapudi2005@gmail.com" className="glass h-11 w-11 rounded-xl flex items-center justify-center hover:text-accent hover:scale-110 transition-all">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>
                </a>
              </div>
            </Reveal>
          </div>

          {/* Profile */}
          <div ref={imgRef} className="relative flex justify-center lg:justify-end mt-10 md:mt-12 lg:mt-14" style={{ willChange: "transform" }}>
            <div className="relative">
              {/* Rotating gradient ring */}
              <div className="absolute inset-0 -m-6 animate-spin-slow opacity-70">
                <div className="h-full w-full rounded-full bg-gradient-to-br from-primary via-accent to-primary blur-2xl" />
              </div>
              <Tilt>
                <div className="relative h-72 w-72 md:h-96 md:w-96 rounded-full glass-strong p-2 glow-primary">
                  <div className="relative h-full w-full rounded-full overflow-hidden ring-2 ring-primary/40">
                    <img
                      src={PROFILE_URL}
                      alt="Vamsi Kumar Dusanapudi"
                      className="h-full w-full object-cover"
                      onError={(e) => { (e.currentTarget as HTMLImageElement).src = "https://api.dicebear.com/7.x/initials/svg?seed=Vamsi%20Kumar&backgroundType=gradientLinear&backgroundColor=3b00db,06b6d4"; }}
                    />
                  </div>
                  {/* Orbiting badges */}
                  <div className="absolute -top-2 -right-2 animate-float">
                    <div className="glass-strong rounded-2xl px-3 py-2 text-xs font-mono">
                      <span className="gradient-text font-bold">{"</>"}</span> Java
                    </div>
                  </div>
                  <div className="absolute -bottom-2 -left-2 animate-float-slow">
                    <div className="glass-strong rounded-2xl px-3 py-2 text-xs font-mono">
                      ⚡ Full Stack
                    </div>
                  </div>
                  <div className="absolute top-1/2 -left-8 animate-float" style={{ animationDelay: "1s" }}>
                    <div className="glass-strong rounded-2xl px-3 py-2 text-xs font-mono">🗄️ MySQL</div>
                  </div>
                </div>
              </Tilt>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground text-xs font-mono"
      >
        <span>SCROLL</span>
        <div className="h-10 w-5 rounded-full border border-foreground/30 flex justify-center p-1">
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="h-1.5 w-1.5 rounded-full bg-accent" />
        </div>
      </motion.div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* About                                                                      */
/* -------------------------------------------------------------------------- */

function About() {
  const stats = [
    { v: "10+", l: "Technologies" },
    { v: "3", l: "Projects" },
    { v: "6", l: "Certifications" },
    { v: "2026", l: "Graduating" },
  ];
  return (
    <section id="about" className="relative py-24 md:py-32" style={{ contentVisibility: "auto", containIntrinsicSize: "0 800px" }}>
      <div className="mx-auto max-w-7xl px-4 md:px-6 relative z-10">
        <SectionHeading eyebrow="About" title="Who I Am" />
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <Reveal>
            <Tilt>
              <BackgroundGradient containerClassName="rounded-3xl" className="rounded-3xl bg-background/80">
              <div className="rounded-3xl p-8 md:p-10 relative overflow-hidden">
                <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
                <p className="relative text-foreground/90 leading-relaxed text-lg">
                  Computer Science and Engineering graduate with a strong interest in <span className="text-accent font-semibold">Java Full Stack</span> and <span className="text-accent font-semibold">Frontend Development</span>.
                </p>
                <p className="relative mt-4 text-muted-foreground leading-relaxed">
                  Through academic projects and hands-on experience, I've developed skills in building responsive web applications and efficient software solutions. I'm passionate about problem-solving, continuous learning, and contributing to impactful technology-driven projects.
                </p>
              </div>
              </BackgroundGradient>
            </Tilt>
          </Reveal>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <Reveal key={s.l} delay={i * 0.08}>
                <Tilt>
                  <BackgroundGradient containerClassName="rounded-2xl" className="rounded-2xl bg-background/80">
                  <div className="rounded-2xl p-6 text-center">
                    <div className="font-display text-4xl md:text-5xl font-bold gradient-text">{s.v}</div>
                    <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground font-mono">{s.l}</div>
                  </div>
                  </BackgroundGradient>
                </Tilt>
              </Reveal>
            ))}
            <Reveal delay={0.3}>
              <BackgroundGradient containerClassName="rounded-2xl col-span-2" className="rounded-2xl bg-background/80">
              <div className="rounded-2xl p-6 flex items-center gap-4">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-2xl">📍</div>
                <div>
                  <div className="font-semibold">Tadepalligudem, India</div>
                  <div className="text-xs text-muted-foreground font-mono">Available for remote & on-site</div>
                </div>
              </div>
              </BackgroundGradient>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Skills                                                                     */
/* -------------------------------------------------------------------------- */

function Skills() {
  const entries = Object.entries(SKILLS);
  return (
    <section id="skills" className="relative py-24 md:py-32" style={{ contentVisibility: "auto", containIntrinsicSize: "0 900px" }}>
      <div className="mx-auto max-w-7xl px-4 md:px-6 relative z-10">
        <SectionHeading eyebrow="Skills" title="Tech Stack" subtitle="Tools and technologies I work with" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-fr">
          {entries.map(([cat, items], i) => (
            <Reveal key={cat} delay={i * 0.08} className="h-full">
              <Tilt className="h-full">
                <BackgroundGradient containerClassName="rounded-2xl h-full min-h-[220px]" className="rounded-2xl h-full min-h-[220px] bg-background/80">
                <div className="rounded-2xl p-6 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground animate-float">
                      {(() => {
                        const CatIcon = CATEGORY_ICON[cat] ?? Sparkles;
                        return <CatIcon size={20} />;
                      })()}
                    </div>
                    <h3 className="font-display text-lg font-semibold">{cat}</h3>
                  </div>
                  <div className="flex-1 flex flex-wrap gap-2 content-start">
                    {items.map((it) => (
                      <span
                        key={it}
                        className="group/skill inline-flex items-center gap-2 px-3 py-1.5 rounded-lg glass text-xs font-mono hover:bg-primary/20 hover:text-foreground hover:-translate-y-0.5 transition-all cursor-default"
                      >
                        <span className="inline-flex h-[26px] w-[26px] items-center justify-center rounded-md bg-white shadow-[0_0_12px_-2px_oklch(0.78_0.16_200/0.5)] transition-transform duration-300 group-hover/skill:scale-110">
                          <SkillIcon name={it} size={16} />
                        </span>
                        {it}
                      </span>
                    ))}
                  </div>
                </div>
                </BackgroundGradient>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Projects                                                                   */
/* -------------------------------------------------------------------------- */

function Projects() {
  const cats = useMemo(() => ["All", ...Array.from(new Set(PROJECTS.map((p) => p.category)))], []);
  const [active, setActive] = useState("All");
  const filtered = PROJECTS.filter((p) => active === "All" || p.category === active);

  return (
    <section id="projects" className="relative py-24 md:py-32" style={{ contentVisibility: "auto", containIntrinsicSize: "0 1200px" }}>
      <div className="mx-auto max-w-7xl px-4 md:px-6 relative z-10">
        <SectionHeading eyebrow="Projects" title="Featured Work" subtitle="A selection of things I've built" />

        <Reveal>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-4 py-2 rounded-xl text-sm font-mono transition-all ${
                  active === c
                    ? "bg-gradient-to-r from-primary to-accent text-primary-foreground glow-primary"
                    : "glass hover:bg-primary/10"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.div
                key={p.title}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="h-full"
              >
                <Tilt className="h-full">
                  <BackgroundGradient containerClassName="rounded-2xl h-full min-h-[480px]" className="rounded-2xl h-full min-h-[480px] bg-background">
                  <div className="rounded-2xl overflow-hidden h-full min-h-[480px] flex flex-col group transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_-20px_oklch(0.65_0.3_285/0.7),0_0_60px_-10px_oklch(0.78_0.16_200/0.5)]">
                    <div className="relative h-[220px] overflow-hidden rounded-t-[18px] flex-shrink-0">
                      {PROJECT_IMAGE[p.title] ? (
                        <img
                          src={PROJECT_IMAGE[p.title]}
                          alt={p.title}
                          loading="lazy"
                          width={1280}
                          height={720}
                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-[oklch(0.5_0.2_270)]/20 to-accent/30" />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent pointer-events-none" />
                      <span className="absolute top-3 right-3 glass-strong rounded-full px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-accent">
                        {p.category}
                      </span>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="font-display text-lg font-semibold leading-tight">{p.title}</h3>
                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1 line-clamp-3">{p.description}</p>
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {p.tech.map((t) => (
                          <span key={t} className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-primary/10 text-[10px] font-mono text-accent transition-transform duration-300 hover:scale-[1.08]">
                            <SkillIcon name={t} size={12} />
                            {t}
                          </span>
                        ))}
                      </div>
                      <div className="mt-5 flex gap-2">
                        {p.live && (
                          <a href={p.live} target="_blank" rel="noopener noreferrer" onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.open(p.live!, "_blank", "noopener,noreferrer"); }} className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg bg-gradient-to-r from-primary to-accent px-3 py-2 text-xs font-semibold text-primary-foreground hover:scale-[1.02] transition-transform cursor-pointer relative z-20">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><path d="M15 3h6v6"/><path d="M10 14L21 3"/></svg>
                            Live
                          </a>
                        )}
                        <a href={p.github} target="_blank" rel="noopener noreferrer" onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.open(p.github, "_blank", "noopener,noreferrer"); }} className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg glass px-3 py-2 text-xs font-semibold hover:bg-primary/10 transition-colors cursor-pointer relative z-20">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.58 2 12.22c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.49-1.11-1.49-.91-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.13-4.56-5.04 0-1.11.39-2.02 1.03-2.74-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05A9.4 9.4 0 0112 6.84c.85 0 1.71.12 2.51.34 1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.74 0 3.92-2.34 4.78-4.57 5.03.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.59.69.49A10.02 10.02 0 0022 12.22C22 6.58 17.52 2 12 2z"/></svg>
                          Code
                        </a>
                      </div>
                    </div>
                  </div>
                  </BackgroundGradient>
                </Tilt>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Education (timeline)                                                       */
/* -------------------------------------------------------------------------- */

function Education() {
  return (
    <section id="education" className="relative py-24 md:py-32" style={{ contentVisibility: "auto", containIntrinsicSize: "0 800px" }}>
      <div className="mx-auto max-w-7xl px-4 md:px-6 relative z-10">
        <SectionHeading eyebrow="Education" title="Academic Journey" />
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary/0 md:-translate-x-1/2" />
          {EDUCATION.map((e, i) => {
            const left = i % 2 === 0;
            return (
              <Reveal key={e.degree} delay={i * 0.1}>
                <div className={`relative pl-12 md:pl-0 mb-10 md:flex ${left ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-2 z-10">
                    <div className="h-4 w-4 rounded-full bg-gradient-to-br from-primary to-accent ring-4 ring-background animate-pulse-glow" />
                  </div>
                  <div className="md:w-1/2 md:px-8">
                    <Tilt>
                      <BackgroundGradient containerClassName="rounded-2xl" className="rounded-2xl bg-background/80">
                      <div className="rounded-2xl p-6">
                        <div className="text-xs font-mono text-accent uppercase tracking-widest">{e.status}</div>
                        <h3 className="mt-2 font-display text-lg font-semibold">{e.degree}</h3>
                        <div className="text-sm text-foreground/80 mt-1">{e.institute}</div>
                        <div className="text-xs text-muted-foreground font-mono mt-1">{e.location}</div>
                        {e.description && <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{e.description}</p>}
                      </div>
                      </BackgroundGradient>
                    </Tilt>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Certifications                                                             */
/* -------------------------------------------------------------------------- */

function Certifications() {
  return (
    <section id="certs" className="relative py-24 md:py-32" style={{ contentVisibility: "auto", containIntrinsicSize: "0 700px" }}>
      <div className="mx-auto max-w-7xl px-4 md:px-6 relative z-10">
        <SectionHeading eyebrow="Credentials" title="Certifications" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CERTS.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.05}>
              <Tilt>
                <BackgroundGradient containerClassName="rounded-2xl h-full" className="rounded-2xl h-full bg-background/80">
                <a
                  href={c.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.open(c.link, "_blank", "noopener,noreferrer"); }}
                  className="block rounded-2xl p-6 h-full group cursor-pointer relative z-20"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-lg shadow-lg shadow-primary/30">
                      🎓
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">{c.date}</span>
                  </div>
                  <h3 className="font-display font-semibold leading-tight group-hover:text-accent transition-colors">{c.name}</h3>
                  <div className="mt-1 text-xs text-muted-foreground">{c.platform}</div>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {c.skills.map((s) => (
                      <span key={s} className="px-2 py-1 rounded-md bg-primary/10 text-[10px] font-mono text-accent">{s}</span>
                    ))}
                  </div>
                  <div className="mt-4 text-xs font-mono text-accent flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    Verify <span>→</span>
                  </div>
                </a>
                </BackgroundGradient>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* CTA + Contact                                                              */
/* -------------------------------------------------------------------------- */

function CTAContact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:vamsikumardusanapudi2005@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6 relative z-10">
        <Reveal>
          <div className="glass-strong rounded-3xl p-8 md:p-12 mb-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
            <div className="absolute -top-32 -left-32 h-64 w-64 rounded-full bg-primary/30 blur-3xl animate-pulse-glow" />
            <div className="absolute -bottom-32 -right-32 h-64 w-64 rounded-full bg-accent/30 blur-3xl animate-pulse-glow" />
            <div className="relative">
              <div className="text-xs font-mono uppercase tracking-widest text-accent mb-3">Let's collaborate</div>
              <h2 className="font-display text-4xl md:text-6xl font-bold gradient-text glow-text">Let's work together!</h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                Open for internships, full-time roles, and exciting collaborations in Java Full Stack and Frontend Development.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <a href="mailto:vamsikumardusanapudi2005@gmail.com" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary via-[oklch(0.6_0.26_270)] to-accent animate-gradient px-6 py-3 text-sm font-semibold text-primary-foreground glow-primary hover:scale-105 transition-transform">
                  Email Me
                </a>
                <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl glass-strong px-6 py-3 text-sm font-semibold hover:bg-primary/10 transition-colors">
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        <SectionHeading eyebrow="Contact" title="Get In Touch" />

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-6">
          <Reveal>
            <div className="space-y-4">
              {[
                { i: "✉️", l: "Email", v: "vamsikumardusanapudi2005@gmail.com", h: "mailto:vamsikumardusanapudi2005@gmail.com" },
                { i: "📍", l: "Location", v: "Tadepalligudem, India" },
                { i: "in", l: "LinkedIn", v: "Vamsi Kumar Dusanapudi", h: "https://www.linkedin.com/in/vamsi-kumar-dusanapudi-5b3b99235/" },
                { i: "<>", l: "GitHub", v: "@vamsikumar-4807", h: "https://github.com/vamsikumar-4807" },
              ].map((c) => {
                const Inner = (
                  <Tilt>
                    <BackgroundGradient containerClassName="rounded-2xl" className="rounded-2xl bg-background/80">
                    <div className="rounded-2xl p-5 flex items-center gap-4">
                      <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center font-display font-bold">
                        {c.i}
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">{c.l}</div>
                        <div className="font-medium truncate">{c.v}</div>
                      </div>
                    </div>
                    </BackgroundGradient>
                  </Tilt>
                );
                return c.h ? (
                  <a key={c.l} href={c.h} target={c.h.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="block">
                    {Inner}
                  </a>
                ) : (
                  <div key={c.l}>{Inner}</div>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <BackgroundGradient containerClassName="rounded-2xl" className="rounded-2xl bg-background/80">
              <form onSubmit={submit} className="rounded-2xl p-6 md:p-8 space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <label className="block">
                    <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Name</span>
                    <BackgroundGradient containerClassName="rounded-xl mt-1" className="rounded-xl bg-background/80">
                      <input
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full rounded-xl bg-transparent px-4 py-3 text-sm focus:outline-none"
                        placeholder="Your name"
                      />
                    </BackgroundGradient>
                  </label>
                  <label className="block">
                    <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Email</span>
                    <BackgroundGradient containerClassName="rounded-xl mt-1" className="rounded-xl bg-background/80">
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full rounded-xl bg-transparent px-4 py-3 text-sm focus:outline-none"
                        placeholder="you@email.com"
                      />
                    </BackgroundGradient>
                  </label>
                </div>
                <label className="block">
                  <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Message</span>
                  <BackgroundGradient containerClassName="rounded-xl mt-1" className="rounded-xl bg-background/80">
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full rounded-xl bg-transparent px-4 py-3 text-sm focus:outline-none resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </BackgroundGradient>
                </label>
                <BackgroundGradient containerClassName="rounded-xl" className="rounded-xl bg-background/80">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary via-[oklch(0.6_0.26_270)] to-accent animate-gradient px-6 py-3 text-sm font-semibold text-primary-foreground glow-primary hover:scale-[1.01] transition-transform"
                  >
                    {sent ? "✓ Opening your email…" : "Send Message →"}
                  </button>
                </BackgroundGradient>
              </form>
            </BackgroundGradient>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Footer                                                                     */
/* -------------------------------------------------------------------------- */

function Footer() {
  return (
    <footer className="relative py-10 border-t border-border/50">
      <div className="mx-auto max-w-7xl px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="text-xs text-muted-foreground font-mono">
              © {new Date().getFullYear()} Vamsi Kumar Dusanapudi
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a href="https://github.com/vamsikumar-4807" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors text-xs font-mono">GitHub</a>
            <span className="text-muted-foreground/40">•</span>
            <a href="https://www.linkedin.com/in/vamsi-kumar-dusanapudi-5b3b99235/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors text-xs font-mono">LinkedIn</a>
            <span className="text-muted-foreground/40">•</span>
            <a href="mailto:vamsikumardusanapudi2005@gmail.com" className="text-muted-foreground hover:text-accent transition-colors text-xs font-mono">Email</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* -------------------------------------------------------------------------- */
/* Root                                                                       */
/* -------------------------------------------------------------------------- */

export default function Portfolio() {
  const [loaded, setLoaded] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 900);
    return () => clearTimeout(t);
  }, []);

  // Scroll progress bar — direct DOM write, no Framer Motion spring overhead
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const el = document.documentElement;
          const progress = el.scrollTop / (el.scrollHeight - el.clientHeight);
          if (progressRef.current) {
            progressRef.current.style.transform = `scaleX(${isNaN(progress) ? 0 : progress})`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative min-h-screen text-foreground">
      <PageLoader done={loaded} />

      {/* Scroll progress bar — plain div, RAF-driven, zero spring overhead */}
      <div
        ref={progressRef}
        className="fixed top-0 left-0 right-0 z-[60] h-0.5 origin-left bg-gradient-to-r from-primary via-[oklch(0.6_0.26_270)] to-accent"
        style={{ transform: "scaleX(0)", willChange: "transform" }}
      />

      <BgVideo />
      <CursorGlow />

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Certifications />
          <CTAContact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
