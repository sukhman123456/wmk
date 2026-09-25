import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  CloudRain,
  Droplets,
  Hammer,
  Home,
  Layers,
  Phone,
  ShieldCheck,
  Sparkles,
  Wind,
} from "lucide-react";
import { business } from "@/lib/business";
import { ActionLink, SectionHeading } from "./ui";

const roofParts = [
  {
    number: "01",
    icon: Layers,
    title: "Architectural Asphalt Shingles",
    tag: "Weather Shield",
    desc: "Your roof's primary defense against Ontario snow, severe thunderstorms, and harsh UV rays.",
    signs: "Curling edges, missing tabs, or granules shedding into gutters.",
    fix: "High-grade color-matched shingle replacement with reinforced wind nailing.",
  },
  {
    number: "02",
    icon: Droplets,
    title: "Valleys & Chimney Flashing",
    tag: "Leak Prevention",
    desc: "Heavy-duty metal flashing installed where roof slopes meet and around chimneys, vents, and walls.",
    signs: "Ceiling water rings, damp insulation, or rusted, lifted flashing seams.",
    fix: "Corrosion-resistant custom metal flashing with industrial waterproof sealants.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Ice & Water Shield Barrier",
    tag: "Winter Defense",
    desc: "Self-sealing waterproof membrane applied along eaves and valleys to stop winter ice dams.",
    signs: "Massive icicles on gutters, water backing up under shingles into ceilings during winter thaws.",
    fix: "Membrane reinforcement, heat wire inspection, and ice-dam mitigation.",
  },
  {
    number: "04",
    icon: Wind,
    title: "Attic & Ridge Ventilation",
    tag: "Climate Control",
    desc: "Balanced airflow system keeping attic temperatures regulated and preventing moisture buildup.",
    signs: "Attic condensation, mold odor, or prematurely buckled and blistered shingles.",
    fix: "Continuous ridge vent installation, baffle clearing, and ventilation balancing.",
  },
  {
    number: "05",
    icon: CloudRain,
    title: "Gutters & Eavestroughs",
    tag: "Drainage Control",
    desc: "High-capacity aluminum channels that carry runoff safely away from walls and basement foundation.",
    signs: "Overflowing water during rain, sagging brackets, and basement seepage.",
    fix: "Gutter realignment, leak sealing, bracket reinforcement, and leaf guards.",
  },
  {
    number: "06",
    icon: Hammer,
    title: "Soffits, Fascia & Handyman Repairs",
    tag: "Structural Integrity",
    desc: "Protective exterior trim under the roof overhang that prevents pest intrusion and rot.",
    signs: "Wood rot, animal or bird nesting holes, or loose aluminum fascia trim.",
    fix: "Fascia board replacement, custom aluminum bending, and exterior handyman fixes.",
  },
];

export function RoofGuide() {
  return (
    <section id="roof-guide" className="section-y bg-secondary/35 border-b border-border">
      <div className="container-site">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Home Roof Anatomy & Inspection"
            title="Understanding Your Home's Roof System"
            intro="A secure roof is more than just shingles—it is an engineered system of layers, flashing, ventilation, and drainage designed to keep your home safe and dry."
          />
          <div className="shrink-0">
            <a
              href={business.phoneHref}
              className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2.5 font-display text-xs font-bold uppercase tracking-wider text-accent-foreground shadow-sm transition hover:brightness-105"
            >
              <Phone className="h-3.5 w-3.5" />
              <span>Free Roof Assessment</span>
            </a>
          </div>
        </div>

        {/* 6 Key Roof Components Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {roofParts.map((part) => {
            const Icon = part.icon;
            return (
              <div
                key={part.number}
                className="group relative flex flex-col justify-between rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-[var(--shadow-lift)]"
              >
                <div>
                  {/* Top Bar with Number & Tag */}
                  <div className="flex items-center justify-between">
                    <div className="grid h-10 w-10 place-items-center rounded-lg bg-secondary text-steel transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="rounded-full bg-secondary px-2.5 py-0.5 text-[0.65rem] font-bold text-steel uppercase tracking-wider">
                        {part.tag}
                      </span>
                      <span className="font-display text-xs font-extrabold text-muted-foreground/60">
                        {part.number}
                      </span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="mt-4 font-display text-lg font-bold text-foreground group-hover:text-accent transition-colors">
                    {part.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                    {part.desc}
                  </p>

                  {/* Warning Signs Box */}
                  <div className="mt-4 rounded-md bg-amber-500/10 p-3 border border-amber-500/20 text-xs">
                    <div className="flex items-center gap-1.5 font-bold text-amber-700 dark:text-amber-400">
                      <AlertTriangle className="h-3.5 w-3.5 shrink-0" />
                      <span>Warning Signs:</span>
                    </div>
                    <p className="mt-1 text-muted-foreground text-[0.75rem] leading-normal">
                      {part.signs}
                    </p>
                  </div>
                </div>

                {/* Our Solution / Repair Guarantee */}
                <div className="mt-4 pt-3 border-t border-border flex items-start gap-2 text-xs text-foreground font-medium">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-[0.75rem] text-muted-foreground">
                    <strong className="text-foreground">Our Fix:</strong> {part.fix}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-12 overflow-hidden rounded-xl border border-primary/20 bg-primary text-primary-foreground p-6 sm:p-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-accent">
              <Sparkles className="h-3.5 w-3.5" />
              Not sure about your roof's condition?
            </span>
            <h3 className="mt-2 text-xl font-extrabold sm:text-2xl text-white">
              Get an Honest, 15-Minute Roof Inspection in Brampton
            </h3>
            <p className="mt-2 text-xs text-slate-300 sm:text-sm leading-relaxed">
              We climb up, inspect the shingles, valleys, flashing, and eaves, and provide photos and clear solutions—with zero pressure.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <a
              href={business.phoneHref}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-md bg-accent px-5 py-3 font-display text-xs font-bold uppercase tracking-wider text-accent-foreground shadow-sm hover:brightness-105 transition"
            >
              <Phone className="h-4 w-4" />
              <span>Call {business.phone}</span>
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-md border border-white/20 bg-white/10 px-5 py-3 font-display text-xs font-bold uppercase tracking-wider text-white hover:bg-white/20 transition"
            >
              <span>Book Online</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
