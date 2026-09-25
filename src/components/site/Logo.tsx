import logoImg from "@/assets/diamond-logo.png";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "light" | "dark" | "gold";
  showText?: boolean;
  textSize?: "sm" | "md" | "lg";
}

/**
 * Official Brand Logo for Diamond Roof Repair & Handyman Services
 * Directly renders the authentic uploaded brand asset with responsive scaling and hover elegance.
 */
export function DiamondLogo({
  className,
  variant = "light",
  textSize = "md",
}: LogoProps) {
  return (
    <div className={cn("inline-flex items-center select-none group", className)}>
      <img
        src={logoImg}
        alt="Diamond Roof Repair & Handyman Services"
        className={cn(
          "w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]",
          textSize === "sm" && "h-8 sm:h-9",
          textSize === "md" && "h-11 sm:h-13",
          textSize === "lg" && "h-14 sm:h-18",
          variant === "dark"
            ? "filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.15)] contrast-110"
            : "filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)]",
        )}
      />
    </div>
  );
}
