import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const PROJECTS = [
  {
    title: "CryptoPulse",
    status: "Live",
    url: "https://preview-maha-crypto-dash-6a1545e5.viktor.space",
    desc: "Real-time crypto dashboard",
    color: "bg-green-500",
  },
  {
    title: "BruneiGPT",
    status: "Live",
    url: "https://preview-brunei-ai-chat-22d42006.viktor.space",
    desc: "Brunei AI chatbot",
    color: "bg-amber-500",
  },
  {
    title: "HalalCalc",
    status: "Live",
    url: "https://halalcalc.site",
    desc: "Islamic finance calculator",
    color: "bg-cyan-500",
  },
  {
    title: "PROJECT MIDAS",
    status: "In Progress",
    desc: "Algorithmic trading bot",
    color: "bg-yellow-500",
  },
  {
    title: "NEPHILIM v2",
    status: "In Progress",
    desc: "Cybersecurity suite",
    color: "bg-red-500",
  },
  {
    title: "EVE Universe Tracker",
    status: "Live",
    desc: "EVE Online intel tracker",
    color: "bg-violet-500",
  },
];

export function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Portfolio Dashboard</h1>
        <p className="text-muted-foreground">
          Manage and monitor your projects
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((p) => (
          <div
            key={p.title}
            className="rounded-xl border bg-card p-5 space-y-3"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">{p.title}</h3>
              <span
                className={`text-xs px-2 py-0.5 rounded-full text-white ${p.status === "Live" ? "bg-emerald-600" : "bg-amber-600"}`}
              >
                {p.status}
              </span>
            </div>
            <p className="text-sm text-muted-foreground">{p.desc}</p>
            {p.url && (
              <Button variant="outline" size="sm" asChild>
                <a href={p.url} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
                  Visit
                </a>
              </Button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
