import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCircle2,
  Clock,
  DollarSign,
  HardHat,
  Layers,
  Phone,
  Shield,
  ShieldCheck,
  Star,
  UserCheck,
  Zap,
} from "lucide-react";
import aboutContractorTeamImg from "@/assets/about-contractor-team.jpg";
import beforeAfterRoofImg from "@/assets/before-after-roof.jpg";
import sunsetRoofImg from "@/assets/project-sunset-roof.jpg";
import { business } from "@/lib/business";
import { cn } from "@/lib/utils";

/* =========================================================================
   5. WHY CHOOSE US ("THE RIGHT TEAM FOR THE JOB")
   Full-width dark section inspired by the reference blueprint.
   Optimized for 2-column scanning on mobile, 6-col on desktop.
   ========================================================================= */
const whyChooseItems = [
  {
    title: "Experienced Professionals",
    desc: "Skilled, dedicated and background-checked.",
    icon: UserCheck,
  },
  {
    title: "Quality Materials",
    desc: "We use only trusted products for lasting results.",
    icon: Layers,
  },
  {
    title: "Transparent Pricing",
    desc: "Upfront quotes. No surprises.",
    icon: DollarSign,
  },
  {
    title: "Guaranteed Work",
    desc: "We stand behind our workmanship.",
    icon: ShieldCheck,
  },
  {
    title: "On-Time Service",
    desc: "We respect your time and schedule.",
    icon: Clock,
  },
  {
    title: "Fully Insured",
    desc: "Your property is in good hands.",
    icon: Shield,
  },
];

export function WhyChooseUs() {
  return (
    <section className="section-spacing bg-[#071525] text-white border-b border-[#101E32]">
      <div className="container-site">
        {/* Header */}
        <div className="mb-8 sm:mb-14">
          <div className="inline-flex items-center gap-2 font-display text-xs sm:text-sm font-bold tracking-[0.2em] text-[#F5BF3C] uppercase mb-2 sm:mb-3">
            <span className="h-0.5 w-5 sm:w-6 bg-[#F5BF3C]" />
            WHY CHOOSE US
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-[2.6rem] font-extrabold tracking-tight text-white uppercase leading-[1.08]">
            The Right Team for the Job
          </h2>
        </div>

        {/* 6 Benefits Grid: 2-col on mobile, 3-col on tablet, 6-col on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-5">
          {whyChooseItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group rounded-xl sm:rounded-2xl border border-white/10 bg-[#0B1B30] p-3.5 sm:p-5 lg:p-6 flex flex-col justify-between hover:border-[#F5BF3C] hover:bg-[#10243C] transition-all duration-300 shadow-sm"
              >
                <div>
                  <div className="grid h-9 w-9 sm:h-11 sm:w-11 place-items-center rounded-lg sm:rounded-xl bg-white/5 border border-white/15 text-[#F5BF3C] transition-all group-hover:bg-[#F5BF3C] group-hover:text-[#071525] group-hover:scale-105 mb-3 sm:mb-4">
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <h3 className="font-display text-xs sm:text-sm lg:text-base font-bold uppercase tracking-tight text-white group-hover:text-[#F5BF3C] transition-colors leading-snug">
                    {item.title}
                  </h3>
                </div>
                <p className="mt-2 text-[0.72rem] sm:text-xs lg:text-sm text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   6. RESULTS / BEFORE & AFTER ("REAL RESULTS. HAPPY HOMEOWNERS.")
   Interactive Before & After visual presentation + right information panel.
   ========================================================================= */
export function BeforeAfterSection() {
  return (
    <section className="section-spacing bg-white border-b border-[#E2E8F0] scroll-mt-20">
      <div className="container-site">
        {/* Header */}
        <div className="max-w-2xl mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 font-display text-xs sm:text-sm font-bold tracking-[0.2em] text-[#F5BF3C] uppercase mb-2 sm:mb-3">
            <span className="h-0.5 w-5 sm:w-6 bg-[#F5BF3C]" />
            BEFORE &amp; AFTER
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-[2.6rem] font-extrabold tracking-tight text-[#0B1B30] uppercase leading-[1.08]">
            Real Results. Happy Homeowners.
          </h2>
          <p className="mt-2 sm:mt-3 text-sm sm:text-base text-[#64748B] leading-relaxed">
            See the difference our roofing and handyman services can make.
          </p>
        </div>

        {/* Presentation Grid: Left Visual, Right Info Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-stretch">
          {/* Left: Large Visual Comparison (cols 1-7) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="relative aspect-16/10 rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-md bg-[#071525]">
              <img
                src={beforeAfterRoofImg}
                alt="Before and after residential roof replacement comparison with architectural shingles in Brampton"
                className="w-full h-full object-cover"
                loading="lazy"
              />

              {/* Floating Pill Badges */}
              <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 rounded-md bg-black/80 border border-white/20 px-3 py-1 sm:px-3.5 sm:py-1.5 text-[0.65rem] sm:text-xs font-display font-bold uppercase tracking-wider text-white backdrop-blur-md shadow-md">
                Before
              </div>
              <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 rounded-md bg-[#F5BF3C] px-3 py-1 sm:px-3.5 sm:py-1.5 text-[0.65rem] sm:text-xs font-display font-black uppercase tracking-wider text-[#071525] shadow-lg">
                After
              </div>
            </div>

            {/* Pagination Controls Inspired by Blueprint */}
            <div className="mt-3 sm:mt-4 flex items-center justify-between px-1">
              <span className="text-xs text-[#64748B] font-medium">
                Recent Architectural Shingle Replacement • Brampton, ON
              </span>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="h-2 w-2 rounded-full bg-[#F5BF3C]" />
                <span className="h-2 w-2 rounded-full bg-[#E2E8F0]" />
                <span className="h-2 w-2 rounded-full bg-[#E2E8F0]" />
              </div>
            </div>
          </div>

          {/* Right: Project Information Panel (cols 8-12) */}
          <div className="lg:col-span-5 rounded-2xl border border-[#E2E8F0] bg-[#F7F9FC] p-5 sm:p-7 lg:p-9 flex flex-col justify-between shadow-xs">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-md bg-white border border-[#E2E8F0] px-3 py-1 text-[0.68rem] font-display font-bold uppercase tracking-wider text-[#0B1B30] mb-3 sm:mb-4 shadow-xs">
                <span className="h-1.5 w-1.5 rounded-full bg-[#F5BF3C]" />
                <span>Featured Project</span>
              </div>

              <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-extrabold uppercase text-[#0B1B30] tracking-tight">
                Roof Replacement
              </h3>

              <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-[#64748B] leading-relaxed">
                New roof, better protection, added curb appeal.
              </p>

              {/* Bullet Points */}
              <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-[#E2E8F0] space-y-2.5 sm:space-y-3.5">
                {[
                  "Improved durability",
                  "Better energy efficiency",
                  "Enhanced home value",
                ].map((point) => (
                  <div key={point} className="flex items-center gap-2.5 sm:gap-3 text-xs sm:text-sm font-semibold text-[#0B1B30]">
                    <div className="grid h-5 w-5 place-items-center rounded-full bg-[#F5BF3C]/20 text-[#F5BF3C] shrink-0">
                      <Check className="h-3.5 w-3.5 stroke-[3]" />
                    </div>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-[#E2E8F0]">
              <a
                href="#contact"
                className="w-full inline-flex h-11 sm:h-12 items-center justify-center gap-2 rounded-lg bg-[#F5BF3C] font-display text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#071525] hover:bg-[#FFD45A] hover:shadow-[0_4px_16px_rgba(245,191,60,0.35)] transition-all shadow-sm"
              >
                <span>Get a Free Estimate for Your Roof</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   7. PROCESS SECTION ("SIMPLE. STRAIGHTFORWARD. STRESS-FREE.")
   5 numbered steps with connecting arrows on desktop, vertical timeline on mobile.
   ========================================================================= */
const processSteps = [
  {
    step: 1,
    title: "Request a Quote",
    desc: "Tell us about your needs and get a free quote.",
  },
  {
    step: 2,
    title: "Inspection",
    desc: "We assess the issue and your property.",
  },
  {
    step: 3,
    title: "Clear Estimate",
    desc: "You'll get a detailed, upfront estimate.",
  },
  {
    step: 4,
    title: "Professional Repair",
    desc: "Our team gets to work with quality materials.",
  },
  {
    step: 5,
    title: "Final Walkthrough",
    desc: "We ensure you're 100% satisfied.",
  },
];

export function ProcessSection() {
  return (
    <section className="section-spacing bg-[#F7F9FC] border-b border-[#E2E8F0]">
      <div className="container-site">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14">
          <div className="inline-flex items-center gap-2 font-display text-xs sm:text-sm font-bold tracking-[0.2em] text-[#F5BF3C] uppercase mb-2 sm:mb-3">
            <span className="h-0.5 w-5 sm:w-6 bg-[#F5BF3C]" />
            OUR PROCESS
            <span className="h-0.5 w-5 sm:w-6 bg-[#F5BF3C]" />
          </div>

          <h2 className="font-display text-2xl sm:text-3xl lg:text-[2.6rem] font-extrabold tracking-tight text-[#0B1B30] uppercase leading-[1.08]">
            Simple. Straightforward. Stress-Free.
          </h2>

          <p className="mt-3 text-sm sm:text-base text-[#64748B] leading-relaxed max-w-2xl mx-auto px-2">
            From your first call to the final walkthrough, we make the process easy and transparent.
          </p>
        </div>

        {/* 1. Mobile Vertical Connected Timeline (block md:hidden) */}
        <div className="block md:hidden space-y-6 max-w-md mx-auto">
          {processSteps.map((s, idx) => (
            <div key={s.step} className="flex items-start gap-4 relative">
              {/* Connecting vertical line */}
              {idx < processSteps.length - 1 && (
                <div className="absolute left-5 top-11 bottom-0 w-0.5 bg-[#F5BF3C]/40 -mb-6" />
              )}
              {/* Gold Numbered Circle */}
              <div className="grid h-10 w-10 place-items-center rounded-full bg-[#F5BF3C] text-[#071525] font-display text-sm font-black shadow-md shrink-0 z-10">
                {s.step}
              </div>
              <div className="pt-1">
                <h3 className="font-display text-sm font-bold uppercase tracking-tight text-[#0B1B30]">
                  {s.title}
                </h3>
                <p className="mt-1 text-xs text-[#64748B] leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 2. Desktop 5-Step Process Row (hidden md:grid) */}
        <div className="hidden md:grid md:grid-cols-5 gap-6 relative">
          {processSteps.map((s, index) => (
            <div
              key={s.step}
              className="flex flex-col items-center text-center relative group"
            >
              {/* Numbered Gold Circle */}
              <div className="grid h-14 w-14 place-items-center rounded-full bg-[#F5BF3C] text-[#071525] font-display text-lg font-black shadow-md transition-transform duration-200 group-hover:scale-110 mb-4 z-10">
                {s.step}
              </div>

              {/* Step Title */}
              <h3 className="font-display text-base font-bold uppercase tracking-tight text-[#0B1B30] group-hover:text-[#F5BF3C] transition-colors">
                {s.title}
              </h3>

              {/* Step Description */}
              <p className="mt-2 text-xs sm:text-sm text-[#64748B] leading-relaxed">
                {s.desc}
              </p>

              {/* Horizontal Connecting Arrow */}
              {index < processSteps.length - 1 && (
                <div className="absolute top-7 left-[calc(50%+2.5rem)] right-[calc(-50%+2.5rem)] h-0.5 bg-[#E2E8F0] z-0">
                  <span className="absolute right-0 -top-1.5 text-xs text-[#CBD5E1]">→</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   8. ABOUT SECTION ("YOUR LOCAL ROOFING & HANDYMAN EXPERTS")
   Split layout with team/truck image and authentic Canadian copy.
   ========================================================================= */
export function About() {
  return (
    <section id="about" className="section-spacing bg-white border-b border-[#E2E8F0] scroll-mt-20">
      <div className="container-site">
        <div className="grid gap-8 sm:gap-12 lg:grid-cols-12 lg:gap-16 items-center">
          {/* Left: Authentic Contractor Team Photo with Truck (cols 1-6) */}
          <div className="lg:col-span-6 relative overflow-hidden rounded-2xl border border-[#E2E8F0] shadow-md group">
            <img
              src={aboutContractorTeamImg}
              alt="Professional Canadian roofing contractor team and service work truck in front of a Canadian home"
              className="w-full aspect-16/10 sm:aspect-4/3 object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 rounded-lg bg-white/95 px-3 py-1 sm:px-3.5 sm:py-1.5 text-xs font-semibold text-[#0B1B30] border border-[#E2E8F0] shadow-xs backdrop-blur-xs flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#F5BF3C]" />
              <span>Brampton &amp; GTA Dedicated Team</span>
            </div>
          </div>

          {/* Right: Editorial About Copy (cols 7-12) */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 font-display text-xs sm:text-sm font-bold tracking-[0.2em] text-[#F5BF3C] uppercase mb-2 sm:mb-3">
              <span className="h-0.5 w-5 sm:w-6 bg-[#F5BF3C]" />
              ABOUT US
            </div>

            <h2 className="font-display text-2xl sm:text-3xl lg:text-[2.6rem] font-extrabold tracking-tight text-[#0B1B30] uppercase leading-[1.08]">
              Your Local Roofing &amp; Handyman Experts
            </h2>

            <div className="mt-4 sm:mt-6 space-y-3 sm:space-y-4 text-sm sm:text-base text-[#64748B] leading-relaxed">
              <p>
                At Diamond Roof Repair &amp; Handyman Services, we're committed to providing high-quality, reliable and affordable solutions for your home or business.
              </p>
              <p>
                With years of experience, a skilled team and a focus on customer satisfaction, we're proud to be the trusted choice in our community.
              </p>
            </div>

            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
              <a
                href="#contact"
                className="inline-flex h-11 sm:h-12 items-center justify-center gap-2 rounded-lg bg-[#F5BF3C] px-6 sm:px-7 font-display text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#071525] hover:bg-[#FFD45A] hover:shadow-[0_4px_16px_rgba(245,191,60,0.35)] transition-all shadow-sm"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href={business.phoneHref}
                className="inline-flex h-11 sm:h-12 items-center justify-center gap-2 rounded-lg border border-[#071525] bg-[#071525] px-6 sm:px-7 font-display text-xs sm:text-sm font-bold uppercase tracking-wider text-white hover:bg-[#101E32] transition-colors"
              >
                <Phone className="h-3.5 w-3.5 fill-[#F5BF3C] text-[#F5BF3C]" />
                <span>Call {business.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   10. CUSTOMER REVIEWS ("TRUSTED BY HOMEOWNERS LIKE YOU")
   3-column clean testimonial grid matching reference blueprint.
   ========================================================================= */
const reviewsList = [
  {
    quote:
      "The team was professional, on time, and did an amazing job on our roof. Highly recommend!",
    author: "Sarah M.",
    role: "Homeowner",
  },
  {
    quote:
      "Excellent service from start to finish. They fixed our leak quickly and even handled a few other repairs around the house.",
    author: "James T.",
    role: "Homeowner",
  },
  {
    quote:
      "Great communication, fair pricing, and top-notch work. We'll definitely use them again.",
    author: "Linda K.",
    role: "Homeowner",
  },
];

export function ReviewsSection() {
  return (
    <section id="reviews" className="section-spacing bg-white border-b border-[#E2E8F0] scroll-mt-20">
      <div className="container-site">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14">
          <div className="inline-flex items-center gap-2 font-display text-xs sm:text-sm font-bold tracking-[0.2em] text-[#F5BF3C] uppercase mb-2 sm:mb-3">
            <span className="h-0.5 w-5 sm:w-6 bg-[#F5BF3C]" />
            WHAT OUR CLIENTS SAY
            <span className="h-0.5 w-5 sm:w-6 bg-[#F5BF3C]" />
          </div>

          <h2 className="font-display text-2xl sm:text-3xl lg:text-[2.6rem] font-extrabold tracking-tight text-[#0B1B30] uppercase leading-[1.08]">
            Trusted by Homeowners Like You
          </h2>

          {/* Rating Badge */}
          <div className="mt-3 sm:mt-4 inline-flex items-center gap-2 rounded-full border border-[#E2E8F0] bg-[#F7F9FC] px-3.5 py-1.5 text-xs font-display font-bold uppercase tracking-wider text-[#0B1B30]">
            <span className="text-[#F5BF3C]">★★★★★</span>
            <span>4.9 / 5</span>
            <span className="text-[#64748B]">•</span>
            <span className="text-[#64748B]">86 Google Reviews</span>
          </div>
        </div>

        {/* 3 Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {reviewsList.map((rev) => (
            <div
              key={rev.author}
              className="rounded-2xl border border-[#E2E8F0] bg-[#F7F9FC] p-5 sm:p-7 flex flex-col justify-between shadow-xs hover:border-[#F5BF3C] transition-colors"
            >
              <div>
                {/* 5 Gold Stars */}
                <div className="flex items-center gap-1 text-[#F5BF3C] text-sm mb-3 sm:mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>

                <p className="text-xs sm:text-sm lg:text-base text-[#0B1B30] leading-relaxed italic">
                  "{rev.quote}"
                </p>
              </div>

              {/* Author & Role */}
              <div className="mt-4 sm:mt-6 pt-4 sm:pt-5 border-t border-[#E2E8F0] flex items-center gap-3">
                <div className="grid h-9 w-9 sm:h-10 sm:w-10 place-items-center rounded-full bg-[#071525] text-[#F5BF3C] font-display font-bold text-xs">
                  {rev.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-display text-xs sm:text-sm font-bold text-[#0B1B30]">
                    {rev.author}
                  </h4>
                  <p className="text-[0.68rem] sm:text-xs text-[#64748B]">{rev.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   11. SERVICE AREA ("PROUDLY SERVING OUR COMMUNITY")
   Checkmark location lists and Brampton local map visual.
   ========================================================================= */
const serviceAreas = [
  "Brampton (Central & North)",
  "Castlemore",
  "Heart Lake",
  "Springdale",
  "Peel Village",
  "Fletcher's Meadow",
  "Mount Pleasant",
  "and nearby GTA areas",
];

export function ServiceAreaSection() {
  return (
    <section id="service-area" className="section-spacing bg-[#F7F9FC] border-b border-[#E2E8F0] scroll-mt-20 overflow-hidden">
      <div className="container-site">
        <div className="grid gap-8 sm:gap-12 lg:grid-cols-12 lg:gap-14 items-center">
          {/* Left Column: Title, Subtitle, Checkmark List (cols 1-7) */}
          <div className="lg:col-span-7 min-w-0">
            <div className="inline-flex items-center gap-2 font-display text-xs sm:text-sm font-bold tracking-[0.2em] text-[#F5BF3C] uppercase mb-2 sm:mb-3">
              <span className="h-0.5 w-5 sm:w-6 bg-[#F5BF3C]" />
              SERVICE AREA
            </div>

            <h2 className="font-display text-2xl sm:text-3xl lg:text-[2.6rem] font-extrabold tracking-tight text-[#0B1B30] uppercase leading-[1.08]">
              Proudly Serving Our Community
            </h2>

            <p className="mt-3 text-sm sm:text-base text-[#64748B] leading-relaxed max-w-xl">
              We provide roof repair, replacement and handyman services in the following cities and surrounding communities:
            </p>

            {/* 2-Column Checkmark List */}
            <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3.5">
              {serviceAreas.map((area) => (
                <div key={area} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#0B1B30]">
                  <div className="grid h-5 w-5 place-items-center rounded-full bg-[#F5BF3C]/20 text-[#F5BF3C] shrink-0">
                    <Check className="h-3.5 w-3.5 stroke-[3]" />
                  </div>
                  <span>{area}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Local Map Visual Card (cols 8-12) */}
          <div className="lg:col-span-5 min-w-0 w-full rounded-2xl border border-[#E2E8F0] bg-white p-4 sm:p-6 lg:p-7 shadow-sm flex flex-col justify-between overflow-hidden">
            {/* Real Interactive Google Map */}
            <div className="relative w-full h-[220px] sm:h-[260px] md:h-[280px] rounded-xl overflow-hidden border border-[#E2E8F0] bg-[#E2E8F0] shadow-inner">
              <iframe
                title="Diamond Roof Repair Location - 349 Inspire Blvd, Brampton, ON"
                src="https://maps.google.com/maps?q=349+Inspire+Blvd,+Brampton,+ON+L6R+4E4&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 block"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="mt-4 sm:mt-6">
              <div className="flex items-center gap-2 text-xs font-display font-bold uppercase tracking-wider text-[#F5BF3C] mb-1">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>We're Local</span>
              </div>
              <h3 className="font-display text-base sm:text-lg font-bold text-[#0B1B30]">
                Fast mobile service to your area
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-[#64748B]">
                {business.street}, {business.city}, {business.region} {business.postal}
              </p>
            </div>

            <div className="mt-4 sm:mt-6 pt-4 border-t border-[#E2E8F0] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${business.mapsQuery}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center sm:justify-start gap-1.5 text-xs font-display font-bold uppercase tracking-wider text-[#0B1B30] hover:text-[#F5BF3C] transition-colors py-1"
              >
                <span>View on Google Maps</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>

              <a
                href={business.phoneHref}
                className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-[#F5BF3C] px-4 font-display text-xs font-extrabold uppercase tracking-wider text-[#071525] hover:bg-[#FFD45A] transition-all shadow-sm active:scale-95"
              >
                <Phone className="h-3.5 w-3.5 fill-[#071525]" />
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   12. FINAL CTA ("YOUR HOME DESERVES WORK DONE RIGHT.")
   Full-width dark cinematic banner matching the blueprint.
   ========================================================================= */
export function FinalCta() {
  return (
    <section className="relative py-14 sm:py-20 bg-[#071525] text-white border-b border-[#101E32] overflow-hidden">
      {/* Background Roof Image with Dark Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={sunsetRoofImg}
          alt="Residential architectural roof at twilight in Ontario"
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#071525]/85 backdrop-blur-[1px]" />
      </div>

      <div className="container-site relative z-10 text-center max-w-3xl mx-auto">
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[3.2rem] font-extrabold tracking-tight text-white uppercase leading-[1.05]">
          Your Home Deserves Work Done Right.
        </h2>

        <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl mx-auto px-2">
          Schedule your project today and get a straightforward estimate.
        </p>

        <div className="mt-7 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 sm:gap-4 max-w-md sm:max-w-none mx-auto">
          <a
            href="#contact"
            className="inline-flex h-12 sm:h-13 items-center justify-center gap-2.5 rounded-lg bg-[#F5BF3C] px-7 font-display text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#071525] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#FFD45A] hover:shadow-[0_4px_24px_rgba(245,191,60,0.4)] active:translate-y-0 active:scale-95 shadow-md"
          >
            <span>Request a Free Quote</span>
            <ArrowRight className="h-4 w-4" />
          </a>

          <a
            href={business.phoneHref}
            className="inline-flex h-12 sm:h-13 items-center justify-center gap-2.5 rounded-lg border border-white/30 bg-[#071525]/60 px-7 font-display text-xs sm:text-sm font-bold uppercase tracking-wider text-white backdrop-blur-md transition-all duration-200 hover:border-[#F5BF3C] hover:text-[#F5BF3C] hover:bg-[#071525]/85 hover:-translate-y-0.5 active:translate-y-0 active:scale-95"
          >
            <Phone className="h-4 w-4 text-[#F5BF3C]" />
            <span>Call Now</span>
          </a>
        </div>
      </div>
    </section>
  );
}
