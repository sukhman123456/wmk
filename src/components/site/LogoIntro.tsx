import { useEffect, useRef, useState } from "react";
import logoImg from "@/assets/diamond-logo.png";
import { cn } from "@/lib/utils";

interface LogoIntroProps {
  onComplete?: () => void;
  onSplitStart?: () => void;
}

/**
 * Cinematic Brand Reveal for Diamond Roof Repair & Handyman Services
 * 
 * Exact 7-Phase Sequence:
 * 1. 0.0s – 0.4s: Dark Cinematic Background (Deep navy #040B14 + subtle ambient center warm gold light at 0.15s).
 * 2. 0.4s – 1.1s: Diamond Symbol Pop-Up (Starts at 88% scale, 0 opacity -> 100% scale, 1 opacity, cubic-bezier, warm rim light).
 * 3. 0.9s – 1.6s: Cinematic Light Wave (Golden energy sweep expands outward horizontally underneath the diamond).
 * 4. 1.0s – 1.7s: Roof / House Formation (Emerges from golden light wave into solid/metallic roof silhouette under the diamond).
 * 5. 1.5s – 2.3s: Brand Text Reveal (Typography reveals from center outward: DIAMOND ROOF REPAIR & HANDYMAN SERVICES + BRAMPTON • ONTARIO).
 * 6. 2.3s – 2.8s: Complete Logo Composition Holds (~0.5s hold with subtle cinematic gold aura).
 * 7. 2.8s – 3.2s: Smooth Cinematic Dissolve into the preloaded hero section.
 * 
 * Total runtime: ~3.25 seconds.
 */
export function LogoIntro({ onComplete, onSplitStart }: LogoIntroProps) {
  const [showAmbientGlow, setShowAmbientGlow] = useState(false);
  const [showDiamond, setShowDiamond] = useState(false);
  const [showWave, setShowWave] = useState(false);
  const [showRoofGlow, setShowRoofGlow] = useState(false);
  const [showRoofSolid, setShowRoofSolid] = useState(false);
  const [showText, setShowText] = useState(false);
  const [showHoldGlow, setShowHoldGlow] = useState(false);
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

    // Check for prefers-reduced-motion accessibility
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setIsExiting(true);
      onSplitStartRef.current?.();
      const t = setTimeout(() => {
        setIsDone(true);
        onCompleteRef.current?.();
      }, 200);
      return () => clearTimeout(t);
    }

    // 1. 0.15s: Subtle warm-gold ambient light source begins appearing in the center
    const t0 = setTimeout(() => setShowAmbientGlow(true), 150);

    // 2. 0.4s: Diamond symbol smoothly pops up (scale 88% -> 100%, opacity 0 -> 1)
    const t1 = setTimeout(() => setShowDiamond(true), 400);

    // 3. 0.9s: Cinematic golden light wave sweeps horizontally underneath the diamond
    const t2 = setTimeout(() => setShowWave(true), 900);

    // 4. 1.0s: Roof/house shape emerges from the golden wave
    const t3 = setTimeout(() => setShowRoofGlow(true), 1000);
    const t3b = setTimeout(() => setShowRoofSolid(true), 1280);

    // 5. 1.5s: Brand typography reveals from center outward
    const t4 = setTimeout(() => setShowText(true), 1500);

    // 6. 2.3s: Complete unified logo holds with subtle warm glow
    const t5 = setTimeout(() => setShowHoldGlow(true), 2300);

    // 7. 2.8s: Smooth cinematic dissolve into the live hero
    const t6 = setTimeout(() => {
      setIsExiting(true);
      onSplitStartRef.current?.();
    }, 2800);

    // Complete handoff and clean unmount at 3.25s
    const t7 = setTimeout(() => {
      setIsDone(true);
      onCompleteRef.current?.();
    }, 3250);

    return () => {
      clearTimeout(t0);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t3b);
      clearTimeout(t4);
      clearTimeout(t5);
      clearTimeout(t6);
      clearTimeout(t7);
    };
  }, []);

  if (isDone) {
    return null;
  }

  // Quick skip on user click or keypress
  const handleQuickSkip = () => {
    setIsExiting(true);
    onSplitStartRef.current?.();
    setTimeout(() => {
      setIsDone(true);
      onCompleteRef.current?.();
    }, 200);
  };

  return (
    <div
      role="dialog"
      aria-label="Diamond Roof Repair brand reveal"
      onClick={handleQuickSkip}
      className={cn(
        "fixed inset-0 z-[100] select-none flex items-center justify-center bg-[#040B14] cursor-default transition-opacity duration-450 ease-out",
        isExiting ? "opacity-0 pointer-events-none" : "opacity-100"
      )}
    >
      {/* 1. Cinematic Atmospheric Dark Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(7,21,37,0.45)_0%,rgba(2,6,12,0.95)_100%)] pointer-events-none" />

      {/* 2. Soft Golden Center Spotlight (Restrained & Warm) */}
      <div
        className={cn(
          "absolute w-[360px] sm:w-[500px] h-[360px] sm:h-[500px] rounded-full pointer-events-none transition-opacity duration-1000 blur-3xl will-change-transform",
          showAmbientGlow ? "opacity-25" : "opacity-0"
        )}
        style={{
          background:
            "radial-gradient(circle, rgba(245, 191, 60, 0.35) 0%, rgba(7, 21, 37, 0) 70%)",
        }}
      />

      {/* Ambient Hold Glow behind Full Logo */}
      <div
        className={cn(
          "absolute w-[440px] sm:w-[620px] h-[220px] sm:h-[300px] rounded-full pointer-events-none transition-opacity duration-700 blur-2xl will-change-transform",
          showHoldGlow ? "opacity-35" : "opacity-0"
        )}
        style={{
          background:
            "radial-gradient(ellipse, rgba(245, 191, 60, 0.4) 0%, rgba(7, 21, 37, 0) 75%)",
        }}
      />

      {/* 3. Center Brand Composition */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 w-full max-w-lg">
        {/* Unified Logo Canvas: Exact aspect ratio matching the authentic 1024x409 asset */}
        <div
          className="relative w-[310px] sm:w-[410px] md:w-[460px] will-change-transform"
          style={{ aspectRatio: "1024 / 409" }}
        >
          {/* ==========================================================
              PHASE 2: DIAMOND SYMBOL POP-UP (0.4s – 1.1s)
              Starts at 88% scale, 0 opacity.
              Emerges forward smoothly to 100% scale and opacity with
              a subtle warm-gold rim light.
              ========================================================== */}
          <div
            className={cn(
              "absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform pointer-events-none",
              showDiamond
                ? "opacity-100 scale-100"
                : "opacity-0 scale-[0.88]"
            )}
            style={{
              clipPath: "polygon(36% 0%, 64% 0%, 64% 28.5%, 36% 28.5%)",
              filter: showDiamond
                ? "drop-shadow(0 0 14px rgba(245, 191, 60, 0.45)) drop-shadow(0 2px 8px rgba(0, 0, 0, 0.5))"
                : "none",
            }}
          >
            <img
              src={logoImg}
              alt="Diamond Symbol"
              className="w-full h-full object-contain pointer-events-none"
              loading="eager"
            />
          </div>

          {/* ==========================================================
              PHASE 3: CINEMATIC LIGHT WAVE (0.9s – 1.6s)
              Elegant horizontal energy sweep underneath the Diamond.
              Expands smoothly outward with soft golden edges and slight blur.
              ========================================================== */}
          <div
            className={cn(
              "pointer-events-none absolute left-1/2 -translate-x-1/2 w-[72%] max-w-[340px] h-4 z-20 flex items-center justify-center transition-all duration-700 ease-out will-change-transform",
              showWave
                ? "opacity-100 scale-x-100"
                : "opacity-0 scale-x-0"
            )}
            style={{
              top: "27.2%",
              transformOrigin: "center center",
            }}
          >
            {/* Soft Warm-Gold Ambient Glow Ribbon */}
            <div className="absolute inset-x-2 h-3 bg-gradient-to-r from-transparent via-[#F5BF3C]/45 to-transparent blur-md" />

            {/* Luminous Energy Sweep Trail */}
            <svg
              viewBox="0 0 340 18"
              className="w-full h-full overflow-visible"
              fill="none"
            >
              <defs>
                <linearGradient id="goldLightSweep" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#F5BF3C" stopOpacity="0" />
                  <stop offset="20%" stopColor="#F5BF3C" stopOpacity="0.4" />
                  <stop offset="50%" stopColor="#FFF2B2" stopOpacity="0.95" />
                  <stop offset="80%" stopColor="#F5BF3C" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#F5BF3C" stopOpacity="0" />
                </linearGradient>
                <filter id="softTrailGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="1.5" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Main Golden Energy Filament */}
              <path
                d="M 5 9 Q 85 5, 170 9 T 335 9"
                stroke="url(#goldLightSweep)"
                strokeWidth="1.75"
                strokeLinecap="round"
                filter="url(#softTrailGlow)"
              />
              {/* Secondary delicate harmonic filament */}
              <path
                d="M 30 9 Q 100 12, 170 9 T 310 9"
                stroke="url(#goldLightSweep)"
                strokeWidth="0.8"
                strokeLinecap="round"
                opacity="0.6"
              />
            </svg>
          </div>

          {/* ==========================================================
              PHASE 4: ROOF / HOUSE FORMATION (1.0s – 1.7s)
              Emerges smoothly from the golden light wave directly underneath
              the Diamond. Starts as a soft golden light shape, then solidifies
              into the clean solid/metallic roof silhouette and chimney.
              ========================================================== */}
          {/* 4A. Luminous Golden Light Roof (Soft glow emerging from wave) */}
          <div
            className={cn(
              "absolute inset-0 pointer-events-none transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform",
              showRoofGlow
                ? (showRoofSolid ? "opacity-20 scale-100" : "opacity-85 scale-100")
                : "opacity-0 scale-[0.96]"
            )}
            style={{
              clipPath: "polygon(14% 24%, 86% 24%, 86% 48.5%, 14% 48.5%)",
              filter: "brightness(1.5) saturate(1.8) drop-shadow(0 0 16px rgba(245, 191, 60, 0.85))",
            }}
          >
            <img
              src={logoImg}
              alt=""
              className="w-full h-full object-contain pointer-events-none"
              loading="eager"
            />
          </div>

          {/* 4B. Solid Metallic Roof Silhouette (Solidifies & connects with Diamond) */}
          <div
            className={cn(
              "absolute inset-0 transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform pointer-events-none",
              showRoofSolid
                ? "opacity-100 scale-100"
                : "opacity-0 scale-[0.97]"
            )}
            style={{
              clipPath: "polygon(14% 24%, 86% 24%, 86% 48.5%, 14% 48.5%)",
              filter: showRoofSolid
                ? "drop-shadow(0 2px 10px rgba(0, 0, 0, 0.4))"
                : "none",
            }}
          >
            <img
              src={logoImg}
              alt="Roof Silhouette"
              className="w-full h-full object-contain pointer-events-none"
              loading="eager"
            />
          </div>

          {/* ==========================================================
              PHASE 5: BRAND TEXT REVEAL (1.5s – 2.3s)
              Typography reveals from the inside outward:
              Starts slightly compressed toward the center with subtle upward lift,
              then gently expands smoothly into full majestic alignment.
              ========================================================== */}
          <div
            className={cn(
              "absolute inset-0 transition-all duration-750 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform pointer-events-none",
              showText
                ? "opacity-100 scale-x-100 translate-y-0"
                : "opacity-0 scale-x-[0.91] translate-y-2"
            )}
            style={{
              clipPath: "polygon(0% 48.5%, 100% 48.5%, 100% 100%, 0% 100%)",
              transformOrigin: "center top",
              filter: showText
                ? "drop-shadow(0 2px 12px rgba(0, 0, 0, 0.55))"
                : "none",
            }}
          >
            <img
              src={logoImg}
              alt="Diamond Roof Repair Brand Typography"
              className="w-full h-full object-contain pointer-events-none"
              loading="eager"
            />
          </div>
        </div>

        {/* Small Location Accent: BRAMPTON • ONTARIO
            Reveals in harmony with the brand typography from center outward */}
        <div
          className={cn(
            "mt-2 text-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] select-none will-change-transform",
            showText
              ? "opacity-100 translate-y-0 tracking-[0.34em] sm:tracking-[0.40em]"
              : "opacity-0 translate-y-2 tracking-[0.16em]"
          )}
        >
          <span className="font-display text-[0.65rem] sm:text-xs font-black uppercase text-[#F5BF3C] drop-shadow-[0_0_8px_rgba(245,191,60,0.35)]">
            BRAMPTON • ONTARIO
          </span>
        </div>
      </div>
    </div>
  );
}

