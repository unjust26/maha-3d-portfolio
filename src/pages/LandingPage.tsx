import { useEffect, useRef, useState } from "react";

/* ─── project data ─── */
const PROJECTS = [
  {
    title: "INVINCIBLE AI",
    desc: "Personal AI companion with unrestricted intelligence — persistent memory, deep research, voice chat, image generation, and screen analysis. Web, Desktop & Android.",
    tech: ["React", "AI", "Electron", "Cross-Platform"],
    color: "#f59e0b",
    url: "https://invincible-ai-426db556.viktor.space",
    emoji: "🧠",
    featured: true,
  },
  {
    title: "HalalCalc",
    desc: "Islamic Finance Calculator Suite — zakat, mortgage comparison, investment projector & gold/silver calculators. SEO-optimized with blog. Live at halalcalc.site.",
    tech: ["React", "TypeScript", "Convex", "SEO"],
    color: "#06b6d4",
    url: "https://halalcalc.site",
    emoji: "🕌",
    featured: true,
  },
  {
    title: "NEPHILIM v2.0",
    desc: "Full cybersecurity suite — network scanning, OSINT intelligence, vulnerability assessment & real-time threat monitoring. Upgraded from Termux to full web interface.",
    tech: ["React", "Convex", "Cybersecurity", "Web App"],
    color: "#ef4444",
    url: "https://preview-maha-nephilim-v2-758656b5.viktor.space",
    emoji: "🛡️",
    featured: true,
  },
  {
    title: "CryptoPulse",
    desc: "Real-time crypto dashboard with live prices, interactive charts, Fear & Greed gauge, and MIDAS Confluence Score.",
    tech: ["React", "Convex", "CoinGecko API", "Recharts"],
    color: "#22c55e",
    url: "https://preview-maha-crypto-dash-6a1545e5.viktor.space",
    emoji: "📊",
    featured: false,
  },
  {
    title: "BruneiGPT",
    desc: "AI chatbot specialized in Brunei Darussalam — government, halal business, property, culture & daily life.",
    tech: ["React", "Convex", "AI Search", "TypeScript"],
    color: "#3b82f6",
    url: "https://preview-brunei-ai-chat-22d42006.viktor.space",
    emoji: "🤖",
    featured: false,
  },
  {
    title: "PROJECT OVERLORD",
    desc: "Professional cybersecurity recon suite — Nmap scanning, Shodan intel, subdomain enumeration, CVE mapping, OSINT engine & AI orchestration.",
    tech: ["Python", "Nmap", "Shodan", "OSINT"],
    color: "#dc2626",
    url: "#",
    emoji: "💀",
    featured: false,
  },
  {
    title: "PROJECT MIDAS",
    desc: "Algorithmic trading bot using confluence scoring — RSI, MACD, EMA200, ATR, ADX & volume confirmation.",
    tech: ["Python", "Lumibot", "Alpaca", "Backtesting"],
    color: "#eab308",
    url: "https://preview-midas-aa0bce1f.viktor.space",
    emoji: "⚡",
    featured: false,
  },
  {
    title: "Kira Finance",
    desc: "Personal finance tracker with multi-currency support (BND, MYR, SGD, USD) — budgets, categories, digital receipts & analytics.",
    tech: ["React", "Convex", "Finance", "TypeScript"],
    color: "#a855f7",
    url: "https://preview-kira-213ba25f.viktor.space",
    emoji: "💰",
    featured: false,
  },
  {
    title: "EVE Universe Tracker",
    desc: "Real-time EVE Online universe tracker with AURA AI assistant — market data, fleet intel & wormhole mapping.",
    tech: ["React", "Convex", "EVE ESI API", "AI"],
    color: "#8b5cf6",
    url: "https://eve-tracker-c1ec7286.viktor.space",
    emoji: "🚀",
    featured: false,
  },
  {
    title: "Taman Rahmat Properties",
    desc: "Community property listing site with galleries, details, pricing & WhatsApp integration for a residential estate in Brunei.",
    tech: ["React", "Convex", "Property", "Brunei"],
    color: "#10b981",
    url: "https://taman-rahmat-f854dbc6.viktor.space",
    emoji: "🏡",
    featured: false,
  },
  {
    title: "AR Property Viewer",
    desc: "Augmented reality property viewer — 3D models, floor plans & virtual tours overlaid on real-world locations.",
    tech: ["AR", "3D", "React", "Mobile"],
    color: "#14b8a6",
    url: "https://preview-maha-ar-property-cf4960a0.viktor.space",
    emoji: "🏠",
    featured: false,
  },
  {
    title: "FJ Billiard Academy",
    desc: "Booking and course management website for Brunei's billiard academy — scheduling, payments & admin panel.",
    tech: ["React", "Convex", "Booking", "TypeScript"],
    color: "#6366f1",
    url: "#",
    emoji: "🎱",
    featured: false,
  },
  {
    title: "Pool House Booking",
    desc: "Online booking system for pool & snooker tables — real-time availability, member pricing & instant confirmations.",
    tech: ["React", "Convex", "Booking System"],
    color: "#6366f1",
    url: "https://preview-maha-booking-8a4aa877.viktor.space",
    emoji: "🎯",
    featured: false,
  },
  {
    title: "UVC SteriBox",
    desc: "Product site for UV-C disinfection chambers — personal, household & commercial sizes with full specifications.",
    tech: ["React", "Product Page", "E-Commerce"],
    color: "#0ea5e9",
    url: "https://preview-uvc-disinfect-8a44c48f.viktor.space",
    emoji: "🔬",
    featured: false,
  },
  {
    title: "MahaKarya Digital",
    desc: "Full-service web development agency site with pricing, contact forms, live chat widget & client inquiry system.",
    tech: ["React", "Convex", "Agency", "TypeScript"],
    color: "#f97316",
    url: "https://preview-mahakarya-digital-0c9d561e.viktor.space",
    emoji: "🌐",
    featured: false,
  },
  {
    title: "NEPHILIM v1.0",
    desc: "Signal Awareness Radar for Android/Termux — Wi-Fi & BLE scanning with animated tactical HUD. Fully offline.",
    tech: ["Python", "Termux", "Nmap", "OSINT"],
    color: "#f87171",
    url: "#",
    emoji: "📡",
    featured: false,
  },
];

const SKILLS = [
  { name: "React / TypeScript", level: 90 },
  { name: "Python", level: 88 },
  { name: "Next.js / Node.js", level: 85 },
  { name: "AI / Machine Learning", level: 82 },
  { name: "Cybersecurity / OSINT", level: 80 },
  { name: "Tailwind CSS / UI Design", level: 85 },
  { name: "Convex / Real-Time DB", level: 88 },
  { name: "Git / GitHub / DevOps", level: 82 },
];

const EXPERIENCE = [
  {
    role: "Founder & CEO",
    company: "MahaKarya Digital",
    period: "2026 — Present",
    desc: "Founded a digital product studio building fintech, cybersecurity, AI, and proptech solutions. Shipped 16+ full-stack applications from concept to deployment.",
    tech: ["React", "TypeScript", "Python", "Convex", "AI"],
  },
  {
    role: "Property Manager",
    company: "Taman Rahmat Properties",
    period: "2018 — Present",
    desc: "Managing residential property rentals and sales across Brunei. Built digital listing platforms and AR property viewers to modernize real estate in Brunei.",
    tech: ["Real Estate", "Property Management", "AR", "Web Development"],
  },
];

/* ─── particle star field ─── */
function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const stars: { x: number; y: number; z: number; o: number }[] = [];
    const STAR_COUNT = 300;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * 2 + 0.2,
        o: Math.random(),
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const s of stars) {
        s.o += (Math.random() - 0.5) * 0.02;
        s.o = Math.max(0.1, Math.min(1, s.o));
        s.y -= s.z * 0.15;
        if (s.y < -5) {
          s.y = canvas.height + 5;
          s.x = Math.random() * canvas.width;
        }
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.z * 0.8, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${s.o * 0.7})`;
        ctx.fill();
      }
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}

/* ─── animated counter ─── */
function Counter({ end, label }: { end: number; label: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const dur = 1500;
          const t0 = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - t0) / dur, 1);
            start = Math.floor(p * end);
            setVal(start);
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          obs.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [end]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
        {val}+
      </div>
      <div className="text-sm text-zinc-400 mt-1">{label}</div>
    </div>
  );
}

/* ─── project card ─── */
function ProjectCard({
  project,
  index,
}: {
  project: (typeof PROJECTS)[0];
  index: number;
}) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="group relative"
      style={{
        animation: `floatUp 0.6s ease-out ${index * 0.08}s both`,
        perspective: "1000px",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className="relative rounded-2xl border border-white/[0.08] bg-zinc-900/60 backdrop-blur-xl p-6 transition-all duration-500 overflow-hidden h-full"
        style={{
          transform: hover
            ? "translateY(-8px) rotateX(2deg)"
            : "translateY(0)",
          boxShadow: hover
            ? `0 20px 60px ${project.color}15, 0 0 30px ${project.color}08`
            : "none",
        }}
      >
        {/* Glow line */}
        <div
          className="absolute top-0 left-0 right-0 h-[2px] transition-opacity duration-500"
          style={{
            background: `linear-gradient(90deg, transparent, ${project.color}, transparent)`,
            opacity: hover ? 1 : 0.3,
          }}
        />

        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-3 right-3">
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30">
              FEATURED
            </span>
          </div>
        )}

        <div className="flex items-start justify-between mb-3">
          <span className="text-2xl">{project.emoji}</span>
          {project.url && project.url !== "#" && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs px-2.5 py-1 rounded-full border border-white/10 text-zinc-400 hover:text-white hover:border-white/30 transition-colors"
            >
              Live ↗
            </a>
          )}
        </div>

        <h3
          className="text-lg font-bold mb-2 transition-colors"
          style={{ color: hover ? project.color : "white" }}
        >
          {project.title}
        </h3>
        <p className="text-sm text-zinc-400 leading-relaxed mb-4">
          {project.desc}
        </p>

        <div className="flex flex-wrap gap-1.5 mt-auto">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-[11px] px-2 py-0.5 rounded-md bg-white/5 text-zinc-500"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── skill bar ─── */
function SkillBar({ name, level }: { name: string; level: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(level), 100);
          obs.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [level]);

  return (
    <div ref={ref}>
      <div className="flex justify-between text-sm mb-1.5">
        <span className="text-zinc-300">{name}</span>
        <span className="text-zinc-500">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-white/5 overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: `${width}%`,
            background: `linear-gradient(90deg, #06b6d4, #8b5cf6)`,
          }}
        />
      </div>
    </div>
  );
}

/* ─── experience card ─── */
function ExperienceCard({ exp }: { exp: (typeof EXPERIENCE)[0] }) {
  return (
    <div className="relative pl-8 pb-8 border-l border-white/10 last:pb-0">
      <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 -translate-x-[7px]" />
      <div className="bg-zinc-900/60 backdrop-blur-xl rounded-2xl border border-white/[0.08] p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-1">
          <h3 className="text-lg font-bold text-white">{exp.role}</h3>
          <span className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-zinc-400 w-fit">
            {exp.period}
          </span>
        </div>
        <p className="text-sm font-medium text-cyan-400 mb-3">{exp.company}</p>
        <p className="text-sm text-zinc-400 leading-relaxed mb-3">
          {exp.desc}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {exp.tech.map((t) => (
            <span
              key={t}
              className="text-[11px] px-2 py-0.5 rounded-md bg-white/5 text-zinc-500"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── main page ─── */
export function LandingPage() {
  const [filter, setFilter] = useState<"all" | "featured">("all");
  const filtered =
    filter === "featured" ? PROJECTS.filter((p) => p.featured) : PROJECTS;

  return (
    <div className="min-h-screen bg-zinc-950 text-white overflow-x-hidden">
      <StarField />

      {/* CSS Animations */}
      <style>{`
        @keyframes floatUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(6, 182, 212, 0.15); }
          50% { box-shadow: 0 0 40px rgba(139, 92, 246, 0.25); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .orbit-ring {
          animation: spin-slow 20s linear infinite;
        }
        .orbit-ring-reverse {
          animation: spin-slow 30s linear infinite reverse;
        }
        .shimmer-text {
          background-size: 200% auto;
          animation: shimmer 3s ease-in-out infinite;
        }
      `}</style>

      {/* ── NAV ── */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-zinc-950/70 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-violet-600 flex items-center justify-center font-bold text-sm">
              IH
            </div>
            <span className="font-bold tracking-tight">Iqbal Hisyamuddin</span>
          </div>
          <div className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#about" className="text-zinc-400 hover:text-white transition-colors">About</a>
            <a href="#experience" className="text-zinc-400 hover:text-white transition-colors">Experience</a>
            <a href="#projects" className="text-zinc-400 hover:text-white transition-colors">Projects</a>
            <a href="#skills" className="text-zinc-400 hover:text-white transition-colors">Skills</a>
            <a href="#contact" className="text-zinc-400 hover:text-white transition-colors">Contact</a>
          </div>
          <a
            href="https://wa.me/6737280573?text=Hi%20Iqbal,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-violet-600 text-white text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Hire Me
          </a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-16">
        {/* Orbital rings background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="orbit-ring w-[500px] h-[500px] rounded-full border border-cyan-500/[0.07]" />
          <div className="orbit-ring-reverse absolute w-[700px] h-[700px] rounded-full border border-violet-500/[0.05]" />
          <div className="orbit-ring absolute w-[350px] h-[350px] rounded-full border border-cyan-400/[0.04]" />
        </div>

        {/* Gradient blobs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-600/10 rounded-full blur-[130px]" />

        <div className="relative z-10 text-center max-w-3xl" style={{ animation: "floatUp 0.8s ease-out" }}>
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5 mb-6 text-sm text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Open to Work — Available for Hire
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-4">
            <span className="bg-gradient-to-r from-white via-zinc-300 to-zinc-500 bg-clip-text text-transparent">
              Iqbal Hisyamuddin
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-zinc-400 mb-2 font-light">
            Full-Stack Developer · Founder of MahaKarya Digital
          </p>
          <p className="text-base text-zinc-500 mb-8 max-w-xl mx-auto">
            Building fintech, AI, cybersecurity & proptech solutions from Brunei 🇧🇳 — 16+ live projects shipped, 8+ years managing real-world operations.
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-medium text-sm hover:opacity-90 transition-opacity"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl border border-white/10 text-zinc-300 font-medium text-sm hover:bg-white/5 transition-colors"
            >
              Get in Touch
            </a>
            <a
              href="https://github.com/unjust26"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl border border-white/10 text-zinc-300 font-medium text-sm hover:bg-white/5 transition-colors flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              GitHub
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-500 text-xs">
          <span>Scroll</span>
          <div className="w-5 h-8 rounded-full border border-zinc-700 flex items-start justify-center p-1">
            <div className="w-1 h-2 rounded-full bg-zinc-500 animate-bounce" />
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="relative z-10 py-12 border-y border-white/5 bg-zinc-950/80 backdrop-blur">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          <Counter end={16} label="Projects Shipped" />
          <Counter end={16} label="GitHub Repos" />
          <Counter end={8} label="Technologies" />
          <Counter end={5} label="AI Products" />
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="relative z-10 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              About{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                Me
              </span>
            </h2>
          </div>

          <div className="bg-zinc-900/60 backdrop-blur-xl rounded-2xl border border-white/[0.08] p-8 md:p-10">
            <div className="space-y-4 text-zinc-300 leading-relaxed">
              <p>
                I'm <span className="text-white font-semibold">Iqbal Hisyamuddin Ibrahim</span> — a full-stack developer 
                and the founder of <span className="text-cyan-400 font-medium">MahaKarya Digital</span>, 
                based in Brunei Darussalam 🇧🇳.
              </p>
              <p>
                I build digital products that solve real-world problems across <span className="text-white">fintech</span>, 
                <span className="text-white"> cybersecurity</span>, <span className="text-white">AI</span>, 
                and <span className="text-white">proptech</span>. From Islamic finance tools used by Muslims worldwide, 
                to cybersecurity radar apps, to AI chatbots tailored for Southeast Asia — I ship fast, build to last, 
                and never stop learning.
              </p>
              <p>
                With 8+ years managing a real estate portfolio and 16+ live applications deployed, 
                I bring both technical depth and business operations experience to every project.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-white/5">
              <div>
                <div className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Location</div>
                <div className="text-sm text-white">Brunei Darussalam 🇧🇳</div>
              </div>
              <div>
                <div className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Education</div>
                <div className="text-sm text-white">Information Systems</div>
                <div className="text-xs text-zinc-400">Politeknik Brunei</div>
              </div>
              <div>
                <div className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Focus</div>
                <div className="text-sm text-white">Web Development</div>
                <div className="text-xs text-zinc-400">Full-Stack / AI / Security</div>
              </div>
              <div>
                <div className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Status</div>
                <div className="text-sm text-emerald-400 font-medium">Open to Work</div>
                <div className="text-xs text-zinc-400">Entry-level & freelance</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section id="experience" className="relative z-10 py-20 px-6 bg-zinc-950/80">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Work{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
          </div>

          <div>
            {EXPERIENCE.map((exp) => (
              <ExperienceCard key={exp.company} exp={exp} />
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Featured{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="text-zinc-400 max-w-lg mx-auto mb-6">
              From AI chatbots to algorithmic trading — each project pushes
              boundaries in a different domain.
            </p>

            {/* Filter buttons */}
            <div className="inline-flex gap-2 bg-zinc-900/60 rounded-xl p-1 border border-white/5">
              <button
                onClick={() => setFilter("all")}
                className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${
                  filter === "all"
                    ? "bg-gradient-to-r from-cyan-500 to-violet-600 text-white"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                All ({PROJECTS.length})
              </button>
              <button
                onClick={() => setFilter("featured")}
                className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${
                  filter === "featured"
                    ? "bg-gradient-to-r from-cyan-500 to-violet-600 text-white"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                Featured
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((p, i) => (
              <ProjectCard key={p.title} project={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills" className="relative z-10 py-20 px-6 bg-zinc-950/80">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Tech{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                Arsenal
              </span>
            </h2>
            <p className="text-zinc-400">
              The tools and technologies powering every build.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-5 mb-12">
            {SKILLS.map((s) => (
              <SkillBar key={s.name} name={s.name} level={s.level} />
            ))}
          </div>

          {/* Tech tags */}
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "React", "TypeScript", "Python", "JavaScript", "Next.js", "Node.js",
              "Tailwind CSS", "Convex", "Three.js", "Electron", "REST APIs",
              "Git & GitHub", "HTML5/CSS3", "Vite", "AI/ML", "OSINT",
              "Nmap", "Cybersecurity", "Augmented Reality", "Islamic Finance"
            ].map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1.5 rounded-full bg-white/5 text-zinc-400 border border-white/5"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="relative z-10 py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Let's{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="text-zinc-400 mb-10 max-w-lg mx-auto">
            Looking for a web developer in Brunei? I'm open to full-time roles,
            freelance projects, and collaborations. Let's build something amazing.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            <a
              href="mailto:terrequarta@gmail.com"
              className="flex flex-col items-center gap-2 p-5 rounded-2xl bg-zinc-900/60 border border-white/[0.08] hover:border-cyan-500/30 transition-colors group"
            >
              <span className="text-2xl">📧</span>
              <span className="text-sm text-zinc-400 group-hover:text-white transition-colors">Email</span>
              <span className="text-xs text-zinc-500">terrequarta@gmail.com</span>
            </a>
            <a
              href="https://wa.me/6737280573"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 p-5 rounded-2xl bg-zinc-900/60 border border-white/[0.08] hover:border-emerald-500/30 transition-colors group"
            >
              <span className="text-2xl">📱</span>
              <span className="text-sm text-zinc-400 group-hover:text-white transition-colors">WhatsApp</span>
              <span className="text-xs text-zinc-500">+673 728 0573</span>
            </a>
            <a
              href="https://www.linkedin.com/in/iqbal-hisyamuddin-ibrahim-ba52aa162"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 p-5 rounded-2xl bg-zinc-900/60 border border-white/[0.08] hover:border-blue-500/30 transition-colors group"
            >
              <span className="text-2xl">💼</span>
              <span className="text-sm text-zinc-400 group-hover:text-white transition-colors">LinkedIn</span>
              <span className="text-xs text-zinc-500">Iqbal Hisyamuddin</span>
            </a>
            <a
              href="https://github.com/unjust26"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 p-5 rounded-2xl bg-zinc-900/60 border border-white/[0.08] hover:border-violet-500/30 transition-colors group"
            >
              <span className="text-2xl">🐙</span>
              <span className="text-sm text-zinc-400 group-hover:text-white transition-colors">GitHub</span>
              <span className="text-xs text-zinc-500">unjust26 (16 repos)</span>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/6737280573?text=Hi%20Iqbal,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project!"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-medium text-sm hover:opacity-90 transition-opacity"
            >
              💬 Let's Talk
            </a>
            <a
              href="https://preview-mahakarya-digital-0c9d561e.viktor.space"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-xl border border-white/10 text-zinc-300 font-medium text-sm hover:bg-white/5 transition-colors"
            >
              🌐 MahaKarya Digital
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="relative z-10 border-t border-white/5 py-8 text-center text-sm text-zinc-500">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="text-zinc-300 font-medium">Iqbal Hisyamuddin Ibrahim</span>{" "}
          · Built in Brunei 🇧🇳
        </p>
        <div className="flex items-center justify-center gap-4 mt-3">
          <a href="https://github.com/unjust26" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors text-xs">GitHub</a>
          <span className="text-zinc-700">·</span>
          <a href="https://www.linkedin.com/in/iqbal-hisyamuddin-ibrahim-ba52aa162" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors text-xs">LinkedIn</a>
          <span className="text-zinc-700">·</span>
          <a href="mailto:terrequarta@gmail.com" className="text-zinc-500 hover:text-white transition-colors text-xs">Email</a>
        </div>
      </footer>
    </div>
  );
}
