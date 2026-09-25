import { useEffect, useRef, useState } from "react";
import logoImg from "@/assets/diamond-logo.png";
import { cn } from "@/lib/utils";

interface LogoIntroProps {
  onComplete?: () => void;
  onSplitStart?: () => void;
}

/**
 * Authentic Diamond Emblem Assembly & Cinematic Split Transition
 * 
 * Sequence:
 * 1. 0.0s - 0.65s: Left and Right roof slopes glide smoothly from opposite sides and lock at center ridge.
 * 2. 0.65s - 0.95s: Metallic light sweep glides across the joined roof apex.
 * 3. 0.95s - 1.35s: "DIAMOND" silver wordmark reveals upward.
 * 4. 1.20s - 1.55s: "ROOF REPAIR" gold wordmark reveals.
 * 5. 1.40s - 1.75s: "& HANDYMAN SERVICES" reveals.
 * 6. 1.75s - 2.10s: Assembled logo holds in pristine architectural stillness.
 * 7. 2.10s - 2.75s: Dark split panels glide outward to reveal the cinematic hero.
 * 
 * Guaranteed Single-Run:
 * - Empty dependency array and hasStartedRef ensure it executes strictly ONCE without restarting.
 * - No "Skip Intro" text clutter on screen.
 */
export function LogoIntro({ onComplete, onSplitStart }: LogoIntroProps) {
  const [phase, setPhase] = useState<
    | "initial"
    | "entering"
    | "locked"
    | "diamond"
    | "roof"
    | "handyman"
    | "hold"
    | "split"
    | "done"
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
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      setPhase("split");
      onSplitStartRef.current?.();
      const t = setTimeout(() => {
        setPhase("done");
        onCompleteRef.current?.();
      }, 350);
      return () => clearTimeout(t);
    }

    const t1 = setTimeout(() => setPhase("entering"), 80);
    const t2 = setTimeout(() => setPhase("locked"), 650);
    const t3 = setTimeout(() => setPhase("diamond"), 950);
    const t4 = setTimeout(() => setPhase("roof"), 1200);
    const t5 = setTimeout(() => setPhase("handyman"), 1400);
    const t6 = setTimeout(() => setPhase("hold"), 1750);
    const t7 = setTimeout(() => {
      setPhase("split");
      onSplitStartRef.current?.();
    }, 2100);
    const t8 = setTimeout(() => {
      setPhase("done");
      onCompleteRef.current?.();
    }, 2750);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
      clearTimeout(t6);
      clearTimeout(t7);
      clearTimeout(t8);
    };
  }, []);

  if (phase === "done") {
    return null;
  }

  // Allow clicking anywhere to immediately skip to hero
  const handleQuickSkip = () => {
    setPhase("split");
    onSplitStartRef.current?.();
    setTimeout(() => {
      setPhase("done");
      onCompleteRef.current?.();
    }, 250);
  };

  const isEntering = phase !== "initial";
  const isLocked =
    phase === "locked" ||
    phase === "diamond" ||
    phase === "roof" ||
    phase === "handyman" ||
    phase === "hold" ||
    phase === "split";
  const showDiamond =
    phase === "diamond" ||
    phase === "roof" ||
    phase === "handyman" ||
    phase === "hold" ||
    phase === "split";
  const showRoof =
    phase === "roof" ||
    phase === "handyman" ||
    phase === "hold" ||
    phase === "split";
  const showHandyman =
    phase === "handyman" || phase === "hold" || phase === "split";
  const isHolding = phase === "hold" || phase === "split";
  const isSplitting = phase === "split";

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
          LEFT DARK NAVY PANEL
          Slides from 0 to -100% during the split transition
         ========================================================================= */}
      <div
        className={cn(
          "absolute top-0 bottom-0 left-0 w-1/2 bg-[#071525] shadow-[24px_0_48px_rgba(3,10,18,0.85)] z-20 transition-transform ease-[cubic-bezier(0.77,0,0.175,1)]",
          isSplitting ? "-translate-x-full duration-800" : "translate-x-0 duration-0"
        )}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/30 pointer-events-none" />
      </div>

      {/* =========================================================================
          RIGHT DARK NAVY PANEL
          Slides from 0 to +100% during the split transition
         ========================================================================= */}
      <div
        className={cn(
          "absolute top-0 bottom-0 right-0 w-1/2 bg-[#071525] shadow-[-24px_0_48px_rgba(3,10,18,0.85)] z-20 transition-transform ease-[cubic-bezier(0.77,0,0.175,1)]",
          isSplitting ? "translate-x-full duration-800" : "translate-x-0 duration-0"
        )}
      >
        <div className="absolute inset-0 bg-gradient-to-l from-black/40 via-transparent to-black/30 pointer-events-none" />
      </div>

      {/* =========================================================================
          CENTER LOGO COMPOSITION CANVAS (z-30)
         ========================================================================= */}
      <div
        className={cn(
          "absolute inset-0 z-30 flex items-center justify-center transition-all duration-400 ease-out",
          isSplitting ? "opacity-0 scale-[1.03]" : "opacity-100 scale-100"
        )}
      >
        {/* Subtle Ambient Radial Spotlight behind logo */}
        <div
          className="absolute w-[450px] sm:w-[650px] h-[350px] rounded-full pointer-events-none opacity-40 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(245, 191, 60, 0.22) 0%, rgba(7, 21, 37, 0) 70%)",
          }}
        />

        {/* Main Logo Composition Canvas */}
        <div className="relative w-[280px] sm:w-[420px] md:w-[480px] lg:w-[540px] aspect-[1024/409] flex items-center justify-center px-4">
          {/* 1. UPPER EMBLEM: LEFT ROOF SECTION */}
          <div
            className={cn(
              "absolute inset-0 transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)]",
              isLocked
                ? "translate-x-0 opacity-100"
                : isEntering
                  ? "-translate-x-2 sm:-translate-x-3 opacity-90"
                  : "-translate-x-12 sm:-translate-x-20 opacity-0"
            )}
            style={{
              clipPath: "inset(0% 50% 49% 0%)",
            }}
          >
            <img
              src={logoImg}
              alt=""
              aria-hidden="true"
              className="w-full h-full object-contain filter drop-shadow-[0_4px_16px_rgba(0,0,0,0.5)]"
            />
          </div>

          {/* 2. UPPER EMBLEM: RIGHT ROOF SECTION */}
          <div
            className={cn(
              "absolute inset-0 transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)]",
              isLocked
                ? "translate-x-0 opacity-100"
                : isEntering
                  ? "translate-x-2 sm:translate-x-3 opacity-90"
                  : "translate-x-12 sm:translate-x-20 opacity-0"
            )}
            style={{
              clipPath: "inset(0% 0% 49% 50%)",
            }}
          >
            <img
              src={logoImg}
              alt=""
              aria-hidden="true"
              className="w-full h-full object-contain filter drop-shadow-[0_4px_16px_rgba(0,0,0,0.5)]"
            />
          </div>

          {/* 3. CENTER LOCK METALLIC LIGHT SWEEP */}
          {isLocked && !isHolding && (
            <div
              className="absolute inset-0 pointer-events-none overflow-hidden"
              style={{ clipPath: "inset(0% 0% 49% 0%)" }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-25 animate-light-sweep" />
            </div>
          )}

          {/* 4. MAIN WORDMARK: "DIAMOND" */}
          <div
            className={cn(
              "absolute inset-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
              showDiamond
                ? "translate-y-0 opacity-100 scale-100"
                : "translate-y-4 opacity-0 scale-[0.98]"
            )}
            style={{
              clipPath: "inset(49% 0% 26.5% 0%)",
            }}
          >
            <img
              src={logoImg}
              alt=""
              aria-hidden="true"
              className="w-full h-full object-contain filter drop-shadow-[0_4px_14px_rgba(0,0,0,0.6)]"
            />
          </div>

          {/* 5. SECOND WORDMARK: "ROOF REPAIR" */}
          <div
            className={cn(
              "absolute inset-0 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]",
              showRoof
                ? "translate-y-0 opacity-100 scale-100"
                : "translate-y-3.5 opacity-0 scale-[0.99]"
            )}
            style={{
              clipPath: "inset(72% 0% 13.5% 0%)",
            }}
          >
            <img
              src={logoImg}
              alt=""
              aria-hidden="true"
              className="w-full h-full object-contain filter drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
            />
          </div>

          {/* 6. SUBTITLE: "& HANDYMAN SERVICES" */}
          <div
            className={cn(
              "absolute inset-0 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]",
              showHandyman
                ? "translate-y-0 opacity-100"
                : "translate-y-2.5 opacity-0"
            )}
            style={{
              clipPath: "inset(85% 0% 0% 0%)",
            }}
          >
            <img
              src={logoImg}
              alt="Diamond Roof Repair & Handyman Services"
              className="w-full h-full object-contain"
            />
          </div>

          {/* 7. COMPLETE ASSEMBLED LOGO HOLD WITH SUBTLE METALLIC SHEEN */}
          {isHolding && (
            <div className="absolute inset-0 pointer-events-none">
              <img
                src={logoImg}
                alt="Diamond Roof Repair & Handyman Services"
                className="w-full h-full object-contain filter drop-shadow-[0_6px_20px_rgba(0,0,0,0.6)]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-20 animate-light-sweep-slow pointer-events-none" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
