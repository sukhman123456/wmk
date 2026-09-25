import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronDown, Phone } from "lucide-react";
import heroCinematicRooferImg from "@/assets/hero-cinematic-roofer.jpg";
import { business } from "@/lib/business";
import { cn } from "@/lib/utils";

interface HeroProps {
  /** Controls when the hero animations trigger (e.g. after intro curtains split) */
  isActive?: boolean;
}

/**
 * Premium Full-Screen Cinematic Roofing Hero
 * 
 * - Cinematic visual: Professional roofer working on asphalt shingles atop a Canadian suburban home at golden hour.
 * - Minimal agency art-direction: Large architectural typography, uncluttered layout.
 * - Staggered fade & upward translation for eyebrow -> headline -> text -> CTA.
 * - Parallax scroll responsiveness with gentle scale & content fade.
 * - Mobile optimized focal positioning.
 */
export function Hero({ isActive = true }: HeroProps) {
  const [stage, setStage] = useState<number>(0);
  const [scrollY, setScrollY] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Staggered text reveal after the hero becomes visible
  useEffect(() => {
    if (!isActive) return;

    // Check for reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setStage(4);
      return;
    }

    // Step 1: Eyebrow (150ms)
    const t1 = setTimeout(() => setStage(1), 150);
    // Step 2: Main headline (400ms)
    const t2 = setTimeout(() => setStage(2), 400);
    // Step 3: Supporting copy (650ms)
    const t3 = setTimeout(() => setStage(3), 650);
    // Step 4: CTA buttons (900ms)
    const t4 = setTimeout(() => setStage(4), 900);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [isActive]);

  // Gentle scroll listener for filmic exit parallax
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToNext = () => {
    const nextSection = document.getElementById("standards") || document.getElementById("services");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: window.innerHeight * 0.9, behavior: "smooth" });
    }
  };

  // Calculate subtle scroll transformations (fades & scales down smoothly)
  const heroOpacity = Math.max(0, 1 - scrollY / 650);
  const heroTranslateY = scrollY * 0.22;
  const bgScale = Math.max(0.96, 1 - scrollY / 4000);

  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-5rem)] w-full flex items-center overflow-hidden bg-[#071525] select-none py-8 sm:py-12 lg:py-16"
    >
      {/* =========================================================================
          1. CINEMATIC VIDEO & HIGH-DEFINITION POSTER BACKGROUND
          Includes continuous slow drone push effect (scale 1.0 -> 1.045)
          and mobile focal positioning centered on roofer & roofline.
         ========================================================================= */}
      <div
        className="absolute inset-0 z-0 overflow-hidden will-change-transform"
        style={{
          transform: `scale(${bgScale})`,
          transition: "transform 0.1s ease-out",
        }}
      >
        {/* HTML5 video element with WebM & MP4 sources for future video insertion */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster={heroCinematicRooferImg}
          className="hidden sm:block absolute inset-0 h-full w-full object-cover object-[72%_35%] sm:object-[center_35%] pointer-events-none opacity-0 transition-opacity duration-1000"
          onCanPlay={(e) => {
            // If actual video stream is present, seamlessly reveal it over poster
            e.currentTarget.classList.remove("opacity-0");
            e.currentTarget.classList.add("opacity-100");
          }}
        >
          <source src="/assets/hero-cinematic-roof.webm" type="video/webm" />
          <source src="/assets/hero-cinematic-roof.mp4" type="video/mp4" />
        </video>

        {/* High-Definition Photographic Poster with subtle slow drone camera drift */}
        <img
          src={heroCinematicRooferImg}
          alt="Professional Canadian roofing contractor inspecting architectural asphalt shingles on suburban home rooftop at golden hour"
          className="absolute inset-0 h-full w-full object-cover object-[75%_35%] sm:object-[center_35%] animate-drone-push"
          loading="eager"
        />

        {/* =========================================================================
            2. HERO OVERLAY GRADIENTS
            Stronger on the left side to guarantee high-contrast legibility,
            while keeping the contractor and Canadian roof brightly visible on the right.
           ========================================================================= */}
        {/* Left directional vignette for text readability */}
        <div className="absolute inset-y-0 left-0 w-full sm:w-3/4 lg:w-3/5 bg-gradient-to-r from-[#071525]/95 via-[#071525]/75 to-transparent pointer-events-none" />

        {/* Top subtle clear fade */}
        <div className="absolute top-0 inset-x-0 h-12 bg-gradient-to-b from-[#071525]/40 to-transparent pointer-events-none" />

        {/* Bottom subtle edge fade into the following section */}
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#071525] via-[#071525]/40 to-transparent pointer-events-none" />
      </div>

      {/* =========================================================================
          3. MINIMAL HERO CONTENT
          Large, pristine typography directly on canvas.
          Staggered reveal: Eyebrow -> Headline -> Supporting Copy -> CTA Buttons.
         ========================================================================= */}
      <div
        className="container-site relative z-10 will-change-transform"
        style={{
          opacity: heroOpacity,
          transform: `translateY(${heroTranslateY}px)`,
          transition: "opacity 0.1s ease-out, transform 0.1s ease-out",
        }}
      >
        <div className="max-w-3xl">
          {/* 1. Small Eyebrow */}
          <div
            className={cn(
              "transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)]",
              stage >= 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            )}
          >
            <span className="inline-flex items-center gap-2 font-display text-xs sm:text-sm font-bold tracking-[0.2em] text-[#F5BF3C] uppercase">
              <span className="h-0.5 w-6 bg-[#F5BF3C]" />
              ROOF REPAIR &amp; HANDYMAN SERVICES
            </span>
          </div>

          {/* 2. Main Headline: Exactly matching reference blueprint */}
          <h1
            className={cn(
              "mt-2.5 sm:mt-4 font-display text-[1.75rem] sm:text-3xl md:text-4xl lg:text-[3.25rem] xl:text-[3.65rem] font-extrabold tracking-tight text-white uppercase leading-[1.08] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
              stage >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            )}
          >
            Reliable Roof Repairs.
            <br />
            Expert Handyman Services.
            <br />
            <span className="text-[#F5BF3C]">Built to Last.</span>
          </h1>

          {/* 3. Supporting Text */}
          <p
            className={cn(
              "mt-3.5 sm:mt-5 max-w-xl text-sm sm:text-base lg:text-lg text-white/90 font-normal leading-relaxed transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
              stage >= 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            )}
          >
            From roof repairs and replacements to general home improvements, we
            help keep your property safe, functional and looking its best.
          </p>

          {/* 4. Action Buttons (Primary CTA + Call Now) */}
          <div
            className={cn(
              "mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
              stage >= 4 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            {/* Primary Action Button */}
            <a
              href="#contact"
              className="inline-flex h-12 sm:h-14 items-center justify-center gap-2.5 rounded-lg bg-[#F5BF3C] px-6 sm:px-8 font-display text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#071525] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#FFD45A] hover:shadow-[0_4px_24px_rgba(245,191,60,0.4)] active:translate-y-0 active:scale-95 shadow-md"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="h-4 w-4" />
            </a>

            {/* Secondary Option: Call Now */}
            <a
              href={business.phoneHref}
              className="inline-flex h-12 sm:h-14 items-center justify-center gap-2.5 rounded-lg border border-white/30 bg-[#071525]/60 px-6 sm:px-7 font-display text-xs sm:text-sm font-bold uppercase tracking-wider text-white backdrop-blur-md transition-all duration-200 hover:border-[#F5BF3C] hover:text-[#F5BF3C] hover:bg-[#071525]/85 hover:-translate-y-0.5 active:translate-y-0 active:scale-95"
            >
              <Phone className="h-4 w-4 text-[#F5BF3C]" />
              <span>Call Now</span>
            </a>
          </div>

          {/* 5. Trust Row below buttons */}
          <div
            className={cn(
              "mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-6 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
              stage >= 4 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            {/* Trust Item 1 */}
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 border border-white/20 text-[#F5BF3C] shrink-0">
                <span className="text-lg text-[#F5BF3C]">★</span>
              </div>
              <div>
                <h4 className="font-display text-sm font-extrabold uppercase text-white tracking-wide">
                  4.9-Star Rated
                </h4>
                <p className="text-xs text-white/70">86 Happy Customers</p>
              </div>
            </div>

            {/* Trust Item 2 */}
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 border border-white/20 text-[#F5BF3C] shrink-0">
                <span className="text-lg text-[#F5BF3C]">🛡️</span>
              </div>
              <div>
                <h4 className="font-display text-sm font-extrabold uppercase text-white tracking-wide">
                  Licensed &amp; Insured
                </h4>
                <p className="text-xs text-white/70">For Your Peace of Mind</p>
              </div>
            </div>

            {/* Trust Item 3 */}
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 border border-white/20 text-[#F5BF3C] shrink-0">
                <span className="text-lg text-[#F5BF3C]">⚡</span>
              </div>
              <div>
                <h4 className="font-display text-sm font-extrabold uppercase text-white tracking-wide">
                  Fast Response
                </h4>
                <p className="text-xs text-white/70">When You Need It</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          4. SCROLL TO EXPLORE INDICATOR
          Subtle indicator at bottom center of the hero.
         ========================================================================= */}
      <button
        type="button"
        onClick={handleScrollToNext}
        aria-label="Scroll to explore services"
        className={cn(
          "absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 text-white/60 hover:text-[#F5BF3C] transition-all duration-500 group cursor-pointer",
          stage >= 4 ? "opacity-100" : "opacity-0"
        )}
      >
        <span className="text-[0.65rem] sm:text-[0.7rem] font-display font-bold tracking-[0.24em] uppercase text-white/60 group-hover:text-[#F5BF3C] transition-colors">
          SCROLL TO EXPLORE
        </span>
        <ChevronDown className="h-4 w-4 text-[#F5BF3C] animate-bounce" />
      </button>
    </section>
  );
}
