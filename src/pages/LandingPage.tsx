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
  },
  {
    title: "CryptoPulse",
    desc: "Real-time crypto dashboard with live prices, interactive charts, Fear & Greed gauge, and MIDAS Confluence Score.",
    tech: ["React", "Convex", "CoinGecko API", "Recharts"],
    color: "#22c55e",
    url: "https://preview-maha-crypto-dash-6a1545e5.viktor.space",
    emoji: "📊",
  },
  {
    title: "BruneiGPT",
    desc: "AI chatbot specialized in Brunei Darussalam — government, halal business, property, culture & daily life.",
    tech: ["React", "Convex", "AI Search", "TypeScript"],
    color: "#3b82f6",
    url: "https://preview-brunei-ai-chat-22d42006.viktor.space",
    emoji: "🤖",
  },
  {
    title: "PROJECT OVERLORD",
    desc: "Professional cybersecurity recon suite — Nmap scanning, Shodan intel, subdomain enumeration, CVE mapping, OSINT engine & AI orchestration.",
    tech: ["Python", "Nmap", "Shodan", "OSINT"],
    color: "#dc2626",
    url: "#",
    emoji: "💀",
  },
  {
    title: "NEPHILIM v2.0",
    desc: "Full cybersecurity suite — network scanning, OSINT intelligence, vulnerability assessment & real-time threat monitoring. Upgraded to full web interface.",
    tech: ["React", "Convex", "Cybersecurity", "Web App"],
    color: "#ef4444",
    url: "https://preview-maha-nephilim-v2-758656b5.viktor.space",
    emoji: "🛡️",
  },
  {
    title: "PROJECT MIDAS",
    desc: "Algorithmic trading bot using confluence scoring — RSI, MACD, EMA200, ATR, ADX & volume confirmation.",
    tech: ["Python", "Lumibot", "Alpaca", "Backtesting"],
    color: "#eab308",
    url: "https://preview-midas-aa0bce1f.viktor.space",
    emoji: "⚡",
  },
  {
    title: "HalalCalc",
    desc: "Islamic Finance Calculator Suite — zakat, mortgage comparison, investment projector & gold/silver calculators. SEO-optimized with blog.",
    tech: ["Web App", "Islamic Finance", "Calculator Engine"],
    color: "#06b6d4",
    url: "https://halalcalc-b4ee51bd.viktor.space",
    emoji: "🕌",
  },
  {
    title: "EVE Universe Tracker",
    desc: "Real-time EVE Online universe tracker with AURA AI assistant — market data, fleet intel & wormhole mapping.",
    tech: ["React", "Convex", "EVE ESI API", "AI"],
    color: "#8b5cf6",
    url: "https://eve-tracker-c1ec7286.viktor.space",
    emoji: "🚀",
  },
  {
    title: "Taman Rahmat AR",
    desc: "Augmented reality property viewer — 3D models, floor plans & virtual tours overlaid on real-world locations.",
    tech: ["AR", "3D", "React", "Mobile"],
    color: "#14b8a6",
    url: "https://preview-maha-ar-property-cf4960a0.viktor.space",
    emoji: "🏠",
  },
  {
    title: "Taman Rahmat Properties",
    desc: "Community property listing site for a residential estate in Brunei — galleries, details, pricing & WhatsApp integration.",
    tech: ["React", "Convex", "Property", "Brunei"],
    color: "#10b981",
    url: "https://taman-rahmat-f854dbc6.viktor.space",
    emoji: "🏡",
  },
  {
    title: "Kira",
    desc: "Personal finance tracker with multi-currency support (BND, MYR, SGD, USD) — budgets, categories, digital receipts & analytics.",
    tech: ["React", "Convex", "Finance", "TypeScript"],
    color: "#a855f7",
    url: "https://preview-kira-213ba25f.viktor.space",
    emoji: "💰",
  },
  {
    title: "Pool House Booking",
    desc: "Online booking system for pool & snooker tables — real-time availability, member pricing & instant confirmations.",
    tech: ["React", "Convex", "Booking System"],
    color: "#6366f1",
    url: "https://preview-maha-booking-8a4aa877.viktor.space",
    emoji: "🎱",
  },
  {
    title: "UVC SteriBox",
    desc: "Product site for UV-C disinfection chambers — personal, household & commercial sizes with full specifications.",
    tech: ["React", "Product Page", "E-Commerce"],
    color: "#0ea5e9",
    url: "https://preview-uvc-disinfect-8a44c48f.viktor.space",
    emoji: "🔬",
  },
  {
    title: "NEPHILIM v1.0",
    desc: "Signal Awareness Radar for Android/Termux — Wi-Fi & BLE scanning with animated tactical HUD. Fully offline.",
    tech: ["Python", "Termux", "Nmap", "OSINT"],
    color: "#f87171",
    url: "#",
    emoji: "📡",
  },
];

const SKILLS = [
  { name: "Python", level: 92 },
  { name: "React / TypeScript", level: 88 },
  { name: "AI / Machine Learning", level: 85 },
  { name: "Cybersecurity", level: 80 },
  { name: "Algorithmic Trading", level: 78 },
  { name: "Cloud / DevOps", level: 75 },
  { name: "Blockchain / Web3", level: 72 },
  { name: "UI/UX Design", level: 70 },
];

/* ─── particle star field (pure CSS + JS) ─── */
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
        animation: `floatUp 0.6s ease-out ${index * 0.1}s both`,
        perspective: "1000px",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className="relative rounded-2xl border border-white/[0.08] bg-zinc-900/60 backdrop-blur-xl p-6 transition-all duration-500 overflow-hidden"
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

        <div className="flex flex-wrap gap-1.5">
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

/* ─── main page ─── */
export function LandingPage() {
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
        .orbit-ring {
          animation: spin-slow 20s linear infinite;
        }
        .orbit-ring-reverse {
          animation: spin-slow 30s linear infinite reverse;
        }
      `}</style>

      {/* ── NAV ── */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-zinc-950/70 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-violet-600 flex items-center justify-center font-bold text-sm">
              M
            </div>
            <span className="font-bold tracking-tight">MahaKarya</span>
          </div>
          <div className="flex items-center gap-6 text-sm">
            <a href="#projects" className="text-zinc-400 hover:text-white transition-colors">Projects</a>
            <a href="#skills" className="text-zinc-400 hover:text-white transition-colors">Skills</a>
            <a href="#contact" className="text-zinc-400 hover:text-white transition-colors">Contact</a>
          </div>
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
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6 text-sm text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for projects
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-4">
            <span className="bg-gradient-to-r from-white via-zinc-300 to-zinc-500 bg-clip-text text-transparent">
              Maha Karya
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-zinc-400 mb-2 font-light">
            Full-Stack Developer · AI Engineer · Cybersecurity
          </p>
          <p className="text-base text-zinc-500 mb-8 max-w-xl mx-auto">
            Building the future from Brunei 🇧🇳 — fintech, AI assistants,
            algorithmic trading, and cybersecurity tools.
          </p>

          <div className="flex items-center justify-center gap-4">
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
          <Counter end={14} label="Projects Built" />
          <Counter end={5} label="Years Experience" />
          <Counter end={12} label="Technologies" />
          <Counter end={5} label="AI Products" />
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Featured{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="text-zinc-400 max-w-lg mx-auto">
              From AI chatbots to algorithmic trading — each project pushes
              boundaries in a different domain.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROJECTS.map((p, i) => (
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

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-5">
            {SKILLS.map((s) => (
              <SkillBar key={s.name} name={s.name} level={s.level} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="relative z-10 py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Let's{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="text-zinc-400 mb-8">
            Got a project idea? Want to collaborate? Let's build something
            amazing together.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://mahakarya.digital"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-medium text-sm hover:opacity-90 transition-opacity"
            >
              mahakarya.digital
            </a>
            <a
              href="https://tiktok.com/@mahakarya.digital"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl border border-white/10 text-zinc-300 font-medium text-sm hover:bg-white/5 transition-colors"
            >
              TikTok @mahakarya.digital
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="relative z-10 border-t border-white/5 py-8 text-center text-sm text-zinc-500">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="text-zinc-300 font-medium">MahaKarya Digital</span>{" "}
          · Built in Brunei 🇧🇳
        </p>
      </footer>
    </div>
  );
}
