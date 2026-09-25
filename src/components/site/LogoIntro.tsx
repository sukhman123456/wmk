import { useEffect, useRef, useState } from "react";
import logoImg from "@/assets/diamond-logo.png";
import { cn } from "@/lib/utils";

interface LogoIntroProps {
  onComplete?: () => void;
  onSplitStart?: () => void;
}

/**
 * Minimal Cinematic Brand Reveal for Diamond Roof Repair & Handyman Services
 * 
 * Sequence & Timing:
 * 0.0s – 0.3s: Clean deep navy canvas (#071525) with soft ambient vignette.
 * 0.3s – 1.1s: Diamond logo SYMBOL pops in smoothly (scale 88% -> 100%, opacity 0 -> 1) with restrained gold glow.
 * 0.9s – 1.5s: Subtle cinematic light wave gently flows underneath the symbol.
 * 1.2s – 1.9s: Brand text gently appears with subtle upward drift.
 * 1.9s – 2.6s: Pristine architectural hold in calm stillness (~0.7s).
 * 2.6s – 3.1s: Pure smooth cinematic fade / dissolve directly into the live hero.
 * 
 * Strict Rules:
 * - NO left/right wipe.
 * - NO curtain animation.
 * - NO sliding the website in.
 * - Pure, smooth opacity fade into the preloaded hero video/poster.
 */
export function LogoIntro({ onComplete, onSplitStart }: LogoIntroProps) {
  const [showSymbol, setShowSymbol] = useState(false);
  const [showWave, setShowWave] = useState(false);
  const [showText, setShowText] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const onCompleteRef = useRef(onComplete);
  const onSplitStartRef = useRef(onSplitStart);
  onCompleteRef.current = onComplete;
  onSplitStartRef.current = onSplitStart;

  const hasStartedRef = useRef(false);

  useEffect(() => {
    if (hasStartedRef.current) return;
    hasStartedRef.current = true;

    // Check for reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setIsExiting(true);
      onSplitStartRef.current?.();
      const t = setTimeout(() => {
        setIsDone(true);
        onCompleteRef.current?.();
      }, 250);
      return () => clearTimeout(t);
    }

    // 0.3s: Diamond symbol smoothly pops in
    const t1 = setTimeout(() => setShowSymbol(true), 300);

    // 0.9s: Subtle cinematic light wave appears underneath symbol
    const t2 = setTimeout(() => setShowWave(true), 900);

    // 1.2s: Brand text gently appears underneath
    const t3 = setTimeout(() => setShowText(true), 1200);

    // 2.6s: Begin smooth cinematic fade / dissolve into hero
    const t4 = setTimeout(() => {
      setIsExiting(true);
      onSplitStartRef.current?.();
    }, 2600);

    // 3.1s: Complete handoff and unmount intro
    const t5 = setTimeout(() => {
      setIsDone(true);
      onCompleteRef.current?.();
    }, 3100);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, []);

  if (isDone) {
    return null;
  }

  // Click anywhere to immediately dissolve into the hero
  const handleQuickSkip = () => {
    setIsExiting(true);
    onSplitStartRef.current?.();
    setTimeout(() => {
      setIsDone(true);
      onCompleteRef.current?.();
    }, 250);
  };

  return (
    <div
      role="dialog"
      aria-label="Diamond Roof Repair brand reveal"
      onClick={handleQuickSkip}
      className={cn(
        "fixed inset-0 z-[100] select-none flex items-center justify-center bg-[#071525] cursor-default transition-opacity duration-500 ease-out",
        isExiting ? "opacity-0 pointer-events-none" : "opacity-100"
      )}
    >
      {/* 1. Subtle Dark Vignette Backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(3,10,18,0.75)_100%)] pointer-events-none" />

      {/* 2. Soft Golden Spotlight behind symbol (extremely restrained) */}
      <div
        className={cn(
          "absolute w-[320px] sm:w-[480px] h-[320px] sm:h-[480px] rounded-full pointer-events-none transition-opacity duration-1000 blur-3xl",
          showSymbol ? "opacity-20" : "opacity-0"
        )}
        style={{
          background:
            "radial-gradient(circle, rgba(245, 191, 60, 0.25) 0%, rgba(7, 21, 37, 0) 70%)",
        }}
      />

      {/* 3. Center Brand Composition */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 max-w-lg w-full">
        {/* A. DIAMOND LOGO SYMBOL POP-UP (0.3s - 1.1s) */}
        <div
          className={cn(
            "relative transition-all duration-800 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform flex items-center justify-center",
            showSymbol
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-[0.88] translate-y-2"
          )}
        >
          {/* Isolated Emblem Symbol (Top half of Diamond Logo: Diamond + Roof Slopes) */}
          <div
            className="relative overflow-hidden w-[180px] sm:w-[240px] md:w-[270px] flex items-start justify-center"
            style={{ aspectRatio: "1024 / 200" }}
          >
            <img
              src={logoImg}
              alt="Diamond Roof Repair Emblem"
              className="w-full h-auto object-cover object-top filter drop-shadow-[0_4px_16px_rgba(0,0,0,0.55)] pointer-events-none"
              loading="eager"
            />
          </div>
        </div>

        {/* B. CINEMATIC LIGHT WAVE (0.9s - 1.5s) */}
        <div
          className={cn(
            "relative w-[220px] sm:w-[280px] md:w-[320px] h-6 sm:h-7 flex items-center justify-center my-2 sm:my-3 transition-all duration-600 ease-out pointer-events-none",
            showWave ? "opacity-100 scale-100" : "opacity-0 scale-95"
          )}
        >
          {/* Ambient soft glow ribbon */}
          <div className="absolute inset-x-6 h-2 sm:h-3 bg-gradient-to-r from-transparent via-[#F5BF3C]/22 to-transparent blur-md" />

          {/* Gentle cinematic harmonic light wave */}
          <svg
            viewBox="0 0 320 28"
            className="w-full h-full overflow-visible"
            fill="none"
          >
            <defs>
              <linearGradient id="softCinematicWave" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#F5BF3C" stopOpacity="0" />
                <stop offset="25%" stopColor="#F5BF3C" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#FFE082" stopOpacity="0.75" />
                <stop offset="75%" stopColor="#F5BF3C" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#F5BF3C" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M 10 14 C 80 4, 120 24, 160 14 C 200 4, 240 24, 310 14"
              stroke="url(#softCinematicWave)"
              strokeWidth="1.25"
              strokeLinecap="round"
              className="filter drop-shadow-[0_0_6px_rgba(245,191,60,0.4)] animate-wave-drift"
            />
          </svg>
        </div>

        {/* C. BRAND TEXT REVEAL (1.2s - 1.9s) */}
        <div
          className={cn(
            "text-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
            showText
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-2"
          )}
        >
          {/* Main Brand Text: Clean and Strong */}
          <div className="font-display text-sm sm:text-base md:text-lg font-black tracking-[0.24em] sm:tracking-[0.28em] text-white uppercase drop-shadow-sm">
            DIAMOND ROOF REPAIR
          </div>

          {/* Secondary Line: Smaller and Subtle */}
          <div className="font-display text-[0.68rem] sm:text-xs md:text-sm font-bold tracking-[0.2em] sm:tracking-[0.24em] text-white/80 uppercase mt-1">
            ROOFING &amp; HANDYMAN SERVICES
          </div>

          {/* Location Line: Restrained Warm Gold Accent */}
          <div className="font-display text-[0.6rem] sm:text-[0.68rem] font-semibold tracking-[0.32em] sm:tracking-[0.38em] text-[#F5BF3C] uppercase mt-2">
            BRAMPTON • ONTARIO
          </div>
        </div>
      </div>
    </div>
  );
}
