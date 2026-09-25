import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, Phone, X } from "lucide-react";
import { DiamondLogo } from "@/components/site/Logo";
import { business } from "@/lib/business";
import { cn } from "@/lib/utils";

const links = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Service Area", href: "#service-area" },
  { label: "Contact", href: "#contact" },
];

/**
 * Clean Dark Architectural Sticky Navigation Bar
 * 
 * Directly matches the reference blueprint:
 * - Full-width dark bar (#071525) with subtle border
 * - Crisp Diamond Roof Repair brand logo on left
 * - Clean, spacious navigation links in center
 * - High-converting Gold "Call Now" button with phone number on right
 * - Sticky on scroll with zero content overlap or bulky blur capsules
 * - Responsive mobile drawer with touch-friendly actions
 */
export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full select-none transition-all duration-200",
        scrolled
          ? "bg-[#071525]/98 backdrop-blur-md border-b border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.5)]"
          : "bg-[#071525] border-b border-white/10 shadow-sm"
      )}
    >
      <div className="container-site flex h-18 sm:h-20 items-center justify-between">
        {/* Left: Brand Logo */}
        <a
          href="#home"
          className="group inline-flex items-center py-1 transition-transform hover:scale-[1.02]"
          aria-label="Diamond Roof Repair & Handyman Services Home"
        >
          <DiamondLogo variant="light" textSize="md" />
        </a>

        {/* Center: Navigation Links */}
        <nav
          aria-label="Main navigation"
          className="hidden lg:flex items-center gap-7 xl:gap-8"
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative py-2 text-xs xl:text-sm font-display font-semibold tracking-wide text-white/85 transition-colors hover:text-[#F5BF3C]"
            >
              <span>{link.label}</span>
            </a>
          ))}
        </nav>

        {/* Right: Call Now Button matching reference blueprint */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Quick Quote trigger for desktop */}
          <a
            href="#contact"
            className="hidden xl:inline-flex items-center gap-1.5 rounded-lg border border-white/20 bg-white/5 px-3.5 py-2 font-display text-xs font-bold uppercase tracking-wider text-white transition-all hover:border-[#F5BF3C] hover:text-[#F5BF3C] hover:bg-white/10"
          >
            <span>Quote</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>

          {/* Golden Call Now Button */}
          <a
            href={business.phoneHref}
            className="inline-flex h-10 sm:h-11 items-center gap-2 rounded-lg bg-[#F5BF3C] px-4 sm:px-5 font-display text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#071525] shadow-md transition-all duration-200 hover:bg-[#FFD45A] hover:shadow-[0_4px_20px_rgba(245,191,60,0.4)] hover:-translate-y-0.5 active:translate-y-0 active:scale-95"
          >
            <Phone className="h-4 w-4 fill-[#071525] shrink-0" />
            <span className="hidden sm:inline">Call Now:</span>
            <span>{business.phone}</span>
          </a>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="lg:hidden grid h-10 w-10 place-items-center rounded-lg border border-white/20 bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {open && (
        <div className="lg:hidden border-t border-white/10 bg-[#071525] px-6 py-6 shadow-2xl text-white animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col divide-y divide-white/10">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-3 font-display text-base font-bold text-white hover:text-[#F5BF3C] transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-xs text-[#F5BF3C]">→</span>
              </a>
            ))}

            <div className="pt-5 mt-2 flex flex-col gap-3">
              <div className="flex items-center justify-between text-xs text-white/60">
                <span>Brampton, ON · 86 Reviews</span>
                <span className="text-[#F5BF3C] font-bold">★ 4.9 Stars</span>
              </div>

              <a
                href={business.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#F5BF3C] py-3.5 font-display text-sm font-extrabold tracking-wider text-[#071525] uppercase shadow-md hover:bg-[#FFD45A]"
              >
                <Phone className="h-4 w-4 fill-[#071525]" />
                <span>Call Now: {business.phone}</span>
              </a>

              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/5 py-3 font-display text-xs font-bold tracking-wider text-white uppercase hover:border-[#F5BF3C]"
              >
                <span>Request a Free Quote</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
