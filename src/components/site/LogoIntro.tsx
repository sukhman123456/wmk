import { useEffect, useRef, useState } from "react";
import logoImg from "@/assets/diamond-logo.png";
import { cn } from "@/lib/utils";

interface LogoIntroProps {
  onComplete?: () => void;
  onSplitStart?: () => void;
}

/**
 * Premium Cinematic Brand Reveal for Diamond Roof Repair & Handyman Services
 * 
 * Sequence:
 * 1. 0.0s – 0.4s: Full-screen deep navy canvas (#071525) with subtle cinematic vignette.
 * 2. 0.4s – 1.1s: Restrained architectural roofline draws smoothly from left to right in warm gold.
 * 3. 0.8s – 1.5s: Soft warm-gold light sweep travels across the roofline.
 * 4. 1.1s – 1.9s: Existing Diamond logo smoothly fades in at center with gentle scale (96% -> 100%).
 * 5. 1.6s – 2.1s: Brand wordmark reveals under logo ("DIAMOND ROOF REPAIR" & "BRAMPTON • ONTARIO").
 * 6. 2.1s – 2.8s: Two cinematic dark panels separate outward from center, revealing the roofing hero.
 * 7. 2.8s+: Complete handoff to the live website.
 */
export function LogoIntro({ onComplete, onSplitStart }: LogoIntroProps) {
  const [stage, setStage] = useState<
    "initial" | "roofline" | "sweep" | "logo" | "text" | "split" | "done"
  >("initial");

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
      setStage("split");
      onSplitStartRef.current?.();
      const t = setTimeout(() => {
        setStage("done");
        onCompleteRef.current?.();
      }, 300);
      return () => clearTimeout(t);
    }

    // Step 2: Roofline draw begins at 0.4s
    const t1 = setTimeout(() => setStage("roofline"), 400);

    // Step 3: Gold light sweep begins at 0.8s
    const t2 = setTimeout(() => setStage("sweep"), 800);

    // Step 4: Existing Diamond logo reveal begins at 1.1s
    const t3 = setTimeout(() => setStage("logo"), 1100);

    // Step 5: Brand text reveal under logo at 1.6s
    const t4 = setTimeout(() => setStage("text"), 1600);

    // Step 6: Cinematic dark curtain split begins at 2.1s
    const t5 = setTimeout(() => {
      setStage("split");
      onSplitStartRef.current?.();
    }, 2100);

    // Step 7: Complete handoff at 2.8s
    const t6 = setTimeout(() => {
      setStage("done");
      onCompleteRef.current?.();
    }, 2800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
      clearTimeout(t6);
    };
  }, []);

  if (stage === "done") {
    return null;
  }

  // Allow clicking anywhere to immediately skip to hero
  const handleQuickSkip = () => {
    setStage("split");
    onSplitStartRef.current?.();
    setTimeout(() => {
      setStage("done");
      onCompleteRef.current?.();
    }, 250);
  };

  const isRoofDrawn = stage !== "initial";
  const isSweeping =
    stage === "sweep" ||
    stage === "logo" ||
    stage === "text" ||
    stage === "split";
  const isLogoVisible =
    stage === "logo" || stage === "text" || stage === "split";
  const isTextVisible = stage === "text" || stage === "split";
  const isSplitting = stage === "split";

  return (
    <div
      role="dialog"
      aria-label="Diamond Roof Repair brand reveal"
      onClick={handleQuickSkip}
      className={cn(
        "fixed inset-0 z-[100] select-none overflow-hidden cursor-default",
        isSplitting && "pointer-events-none"
      )}
    >
      {/* =========================================================================
          1. CINEMATIC DARK CURTAINS (Split outward at 2.1s)
         ========================================================================= */}
      {/* Left Dark Navy Panel */}
      <div
        className={cn(
          "absolute top-0 bottom-0 left-0 w-1/2 bg-[#071525] shadow-[28px_0_56px_rgba(2,8,16,0.95)] z-20 transition-transform ease-[cubic-bezier(0.77,0,0.175,1)]",
          isSplitting
            ? "-translate-x-full duration-700"
            : "translate-x-0 duration-0"
        )}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/30 pointer-events-none" />
      </div>

      {/* Right Dark Navy Panel */}
      <div
        className={cn(
          "absolute top-0 bottom-0 right-0 w-1/2 bg-[#071525] shadow-[-28px_0_56px_rgba(2,8,16,0.95)] z-20 transition-transform ease-[cubic-bezier(0.77,0,0.175,1)]",
          isSplitting
            ? "translate-x-full duration-700"
            : "translate-x-0 duration-0"
        )}
      >
        <div className="absolute inset-0 bg-gradient-to-l from-black/50 via-transparent to-black/30 pointer-events-none" />
      </div>

      {/* =========================================================================
          2. CENTER BRAND STAGE (z-30)
         ========================================================================= */}
      <div
        className={cn(
          "absolute inset-0 z-30 flex flex-col items-center justify-center px-4 transition-all duration-400 ease-out",
          isSplitting ? "opacity-0 scale-[1.02]" : "opacity-100 scale-100"
        )}
      >
        {/* Subtle Ambient Radial Vignette & Gold Spotlight */}
        <div
          className={cn(
            "absolute w-[360px] sm:w-[580px] h-[360px] sm:h-[460px] rounded-full pointer-events-none transition-opacity duration-700 blur-3xl",
            isLogoVisible ? "opacity-35" : "opacity-0"
          )}
          style={{
            background:
              "radial-gradient(circle, rgba(245, 191, 60, 0.22) 0%, rgba(7, 21, 37, 0) 70%)",
          }}
        />

        {/* Brand Stage Container */}
        <div className="relative flex flex-col items-center justify-center">
          {/* =========================================================================
              A. SUBTLE ARCHITECTURAL ROOFLINE DRAW (0.4s - 1.1s)
             ========================================================================= */}
          <div className="relative w-[280px] sm:w-[380px] md:w-[440px] h-[64px] sm:h-[84px] flex items-center justify-center overflow-visible">
            <svg
              viewBox="0 0 440 84"
              className="w-full h-full overflow-visible"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="introGoldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#F5BF3C" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="#F5BF3C" stopOpacity="1" />
                  <stop offset="100%" stopColor="#F5BF3C" stopOpacity="0.3" />
                </linearGradient>
              </defs>

              {/* Outer Roof Peak Silhouette: draws left to right */}
              <path
                d="M 30 76 L 80 76 L 220 12 L 360 76 L 410 76"
                stroke="url(#introGoldGrad)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="filter drop-shadow-[0_0_8px_rgba(245,191,60,0.35)]"
                style={{
                  strokeDasharray: 480,
                  strokeDashoffset: isRoofDrawn ? 0 : 480,
                  transition: "stroke-dashoffset 0.7s cubic-bezier(0.25, 1, 0.5, 1)",
                }}
              />

              {/* Inner Architectural Rafter Line */}
              <path
                d="M 130 76 L 220 36 L 310 76"
                stroke="#F5BF3C"
                strokeWidth="1"
                strokeOpacity="0.45"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  strokeDasharray: 240,
                  strokeDashoffset: isRoofDrawn ? 0 : 240,
                  transition:
                    "stroke-dashoffset 0.6s cubic-bezier(0.25, 1, 0.5, 1) 0.12s",
                }}
              />
            </svg>

            {/* B. GOLD LIGHT SWEEP (0.8s - 1.5s): travels across the drawn roofline */}
            {isSweeping && (
              <div
                className="absolute inset-0 pointer-events-none overflow-hidden"
                style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -skew-x-25 animate-light-sweep" />
              </div>
            )}
          </div>

          {/* =========================================================================
              C. EXISTING DIAMOND LOGO REVEAL (1.1s - 1.9s)
              Smooth fade in + scale 96% to 100%
             ========================================================================= */}
          <div
            className={cn(
              "relative transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] mt-1 sm:mt-2",
              isLogoVisible
                ? "opacity-100 scale-100 translate-y-0"
                : "opacity-0 scale-[0.96] translate-y-2"
            )}
          >
            <img
              src={logoImg}
              alt="Diamond Roof Repair & Handyman Services"
              className="w-auto h-20 sm:h-28 md:h-32 object-contain filter drop-shadow-[0_4px_20px_rgba(0,0,0,0.6)]"
              loading="eager"
            />
          </div>

          {/* =========================================================================
              D. BRAND TEXT REVEAL (1.6s - 2.1s)
              Under the logo:
              "DIAMOND ROOF REPAIR"
              "BRAMPTON • ONTARIO"
             ========================================================================= */}
          <div
            className={cn(
              "mt-3 sm:mt-4 text-center transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
              isTextVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-1.5"
            )}
          >
            <div className="font-display text-xs sm:text-sm font-extrabold tracking-[0.26em] sm:tracking-[0.32em] text-white uppercase drop-shadow-sm">
              DIAMOND ROOF REPAIR
            </div>
            <div className="font-display text-[0.62rem] sm:text-[0.72rem] font-bold tracking-[0.32em] sm:tracking-[0.4em] text-[#F5BF3C] uppercase mt-1 sm:mt-1.5">
              BRAMPTON • ONTARIO
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
