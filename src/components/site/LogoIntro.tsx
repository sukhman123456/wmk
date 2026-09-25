import { useEffect, useRef, useState } from "react";
import logoImg from "@/assets/diamond-logo.png";
import { cn } from "@/lib/utils";

interface LogoIntroProps {
  onComplete?: () => void;
  onSplitStart?: () => void;
}

/**
 * Premium Roofing-Themed Loading Animation for Diamond Roof Repair
 * 
 * Features:
 * - Full-screen deep navy background (#050E1A) with soft dark vignette.
 * - Existing Diamond logo centered at the top.
 * - Subtle, elegant architectural vector illustration of a professional roofer working on a rooftop slope.
 * - Micro-animated roofer placing and inspecting a golden shingle tile.
 * - Thin gold loading line that smoothly fills from 0% to 100% over ~2.2 seconds.
 * - Underneath text: "PREPARING YOUR ROOF..." in brand gold tracking.
 * - Smooth cinematic fade directly into the preloaded hero section at ~2.5s (total duration ~2.8s).
 * - Click/tap quick-skip for instant entry.
 * - Prefers-reduced-motion accessibility support.
 */
export function LogoIntro({ onComplete, onSplitStart }: LogoIntroProps) {
  const [progress, setProgress] = useState(0);
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

    // Check for prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setIsExiting(true);
      onSplitStartRef.current?.();
      const t = setTimeout(() => {
        setIsDone(true);
        onCompleteRef.current?.();
      }, 150);
      return () => clearTimeout(t);
    }

    // Trigger smooth 0% to 100% progress line fill
    const tProgress = setTimeout(() => {
      setProgress(100);
    }, 80);

    // At 2.4s: start smooth dissolve into hero
    const tExit = setTimeout(() => {
      setIsExiting(true);
      onSplitStartRef.current?.();
    }, 2400);

    // At 2.85s: complete unmount
    const tComplete = setTimeout(() => {
      setIsDone(true);
      onCompleteRef.current?.();
    }, 2850);

    return () => {
      clearTimeout(tProgress);
      clearTimeout(tExit);
      clearTimeout(tComplete);
    };
  }, []);

  if (isDone) {
    return null;
  }

  // Quick skip on click or keypress
  const handleQuickSkip = () => {
    setIsExiting(true);
    onSplitStartRef.current?.();
    setTimeout(() => {
      setIsDone(true);
      onCompleteRef.current?.();
    }, 180);
  };

  return (
    <div
      role="dialog"
      aria-label="Loading Diamond Roof Repair"
      onClick={handleQuickSkip}
      className={cn(
        "fixed inset-0 z-[100] select-none flex flex-col items-center justify-center bg-[#050E1A] cursor-default transition-opacity duration-450 ease-out",
        isExiting ? "opacity-0 pointer-events-none" : "opacity-100"
      )}
    >
      {/* 1. Cinematic Dark Ambient Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(7,21,37,0.4)_0%,rgba(2,6,12,0.92)_100%)] pointer-events-none" />

      {/* 2. Soft Warm Gold Ambient Spotlight behind center */}
      <div
        className="absolute w-[360px] sm:w-[480px] h-[360px] sm:h-[480px] rounded-full pointer-events-none blur-3xl opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(245, 191, 60, 0.4) 0%, rgba(7, 21, 37, 0) 70%)",
        }}
      />

      {/* 3. Main Centered Loader Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 w-full max-w-sm">
        {/* A. Existing Diamond Logo (Small and Centered) */}
        <div className="mb-5 sm:mb-6 flex justify-center">
          <img
            src={logoImg}
            alt="Diamond Roof Repair & Handyman Services"
            className="w-[170px] sm:w-[210px] h-auto object-contain filter drop-shadow-[0_4px_16px_rgba(0,0,0,0.55)] pointer-events-none"
            loading="eager"
          />
        </div>

        {/* B. Professional Roofer Working on Rooftop (Architectural Modern Vector Illustration) */}
        <div className="relative w-[230px] sm:w-[260px] h-[115px] sm:h-[130px] flex items-center justify-center">
          <svg
            viewBox="0 0 260 130"
            className="w-full h-full overflow-visible pointer-events-none"
            fill="none"
          >
            <defs>
              {/* Gold Shingle Gradient */}
              <linearGradient id="goldShingleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#F5BF3C" stopOpacity="0.85" />
                <stop offset="60%" stopColor="#FFE082" stopOpacity="0.98" />
                <stop offset="100%" stopColor="#F5BF3C" stopOpacity="0.85" />
              </linearGradient>

              {/* Roof Slope Deep Slate Gradient */}
              <linearGradient id="roofDeckGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#1E293B" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#0B1320" stopOpacity="0.85" />
              </linearGradient>
            </defs>

            {/* --- 1. Architectural Roof Pitch --- */}
            {/* Slope fill under the rafters */}
            <polygon
              points="32,45 228,102 228,114 32,114"
              fill="url(#roofDeckGrad)"
            />

            {/* Architectural Rafter / Deck Line */}
            <line
              x1="28"
              y1="45"
              x2="232"
              y2="102"
              stroke="#475569"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            {/* Roof Eave Baseline */}
            <line
              x1="32"
              y1="114"
              x2="228"
              y2="114"
              stroke="#1E293B"
              strokeWidth="1.5"
            />

            {/* Shingle Courses (Horizontal architectural row guides) */}
            <line
              x1="70"
              y1="96"
              x2="220"
              y2="96"
              stroke="#334155"
              strokeWidth="1.5"
              strokeDasharray="16 4"
              opacity="0.6"
            />
            <line
              x1="52"
              y1="80"
              x2="198"
              y2="80"
              stroke="#334155"
              strokeWidth="1.5"
              strokeDasharray="16 4"
              opacity="0.6"
            />
            <line
              x1="36"
              y1="64"
              x2="176"
              y2="64"
              stroke="#334155"
              strokeWidth="1.5"
              strokeDasharray="16 4"
              opacity="0.6"
            />

            {/* Background Rooftop Chimney Silhouette */}
            <rect
              x="52"
              y="28"
              width="14"
              height="22"
              fill="#101E32"
              stroke="#334155"
              strokeWidth="1"
              rx="1"
            />

            {/* Safety Anchor Line (Subtle professional roofing detail) */}
            <path
              d="M 34 45 C 52 48, 70 54, 88 62"
              stroke="#F5BF3C"
              strokeWidth="1"
              strokeDasharray="3 3"
              opacity="0.4"
            />

            {/* --- 2. Professional Roofer Figure --- */}
            {/* Kneeling Legs / Work Trousers resting safely on roof pitch */}
            <path
              d="M 80 80 L 96 84 L 114 85 L 104 72 L 88 68 Z"
              fill="#334155"
            />

            {/* Work Boot */}
            <path
              d="M 75 79 C 75 76, 80 75, 84 78 L 82 82 Z"
              fill="#1E293B"
            />

            {/* Upper Body / Workwear Jacket */}
            <path
              d="M 88 68 C 91 58, 100 52, 112 53 C 120 53, 126 59, 124 68 L 108 72 Z"
              fill="#64748B"
            />
            {/* High-visibility safety harness lines */}
            <path
              d="M 102 53 L 110 71 M 114 54 L 120 70"
              stroke="#F5BF3C"
              strokeWidth="1.25"
              opacity="0.85"
            />

            {/* Head & Safety Hard Hat (Brand Gold) */}
            <circle cx="118" cy="46" r="6" fill="#CBD5E1" />
            {/* Helmet dome */}
            <path
              d="M 110 46 C 110 39, 126 39, 126 46 L 129 48 L 109 48 Z"
              fill="#F5BF3C"
            />
            {/* Helmet visor */}
            <line
              x1="126"
              y1="47"
              x2="132"
              y2="48"
              stroke="#FFE082"
              strokeWidth="1.5"
              strokeLinecap="round"
            />

            {/* --- 3. Simple Roofing Action: Placing / Inspecting Shingle --- */}
            {/* Group with gentle placing micro-motion */}
            <g className="animate-shingle-action">
              {/* Roofer Arms reaching down to align the shingle */}
              <path
                d="M 116 59 L 130 65 L 144 71"
                stroke="#94A3B8"
                strokeWidth="2.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Work Glove */}
              <circle cx="145" cy="72" r="2.5" fill="#F5BF3C" />

              {/* The Shingle Tile being placed precisely into the roof row */}
              <polygon
                points="141,71 175,81 170,85 136,75"
                fill="url(#goldShingleGrad)"
                filter="drop-shadow(0 1px 4px rgba(245,191,60,0.5))"
              />
              {/* Shingle top architectural bevel edge */}
              <line
                x1="141"
                y1="71"
                x2="175"
                y2="81"
                stroke="#FFFFFF"
                strokeWidth="0.75"
                opacity="0.85"
              />
            </g>

            {/* Subtle Alignment Glint on Roof Line */}
            <circle
              cx="160"
              cy="78"
              r="1.5"
              fill="#FFE082"
              className="animate-ping opacity-75"
              style={{ animationDuration: "2.2s" }}
            />
          </svg>

          {/* Keyframe animation for subtle roofer shingle placement */}
          <style>{`
            @keyframes shingleAction {
              0%, 100% {
                transform: translate(0, 0);
              }
              50% {
                transform: translate(1.5px, -2.5px);
              }
            }
            .animate-shingle-action {
              animation: shingleAction 2.2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
              transform-origin: 116px 59px;
            }
          `}</style>
        </div>

        {/* C. Thin Gold Loading Line (0% to 100% over ~2.2s) */}
        <div className="w-52 sm:w-60 h-[2px] sm:h-[2.5px] bg-white/10 rounded-full overflow-hidden mt-6 relative shadow-inner">
          <div
            className="h-full bg-gradient-to-r from-[#F5BF3C] to-[#FFE082] rounded-full transition-all duration-[2200ms] ease-[cubic-bezier(0.16,1,0.3,1)] shadow-[0_0_8px_rgba(245,191,60,0.6)]"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* D. Roofing-Themed Loading Text */}
        <div className="mt-3.5 text-center select-none">
          <span className="font-display text-[0.68rem] sm:text-xs font-bold uppercase tracking-[0.28em] text-[#F5BF3C] drop-shadow-[0_0_8px_rgba(245,191,60,0.3)]">
            PREPARING YOUR ROOF...
          </span>
        </div>
      </div>
    </div>
  );
}

