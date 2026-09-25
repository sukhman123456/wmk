import { Phone } from "lucide-react";
import { DiamondLogo } from "@/components/site/Logo";
import { business, navLinks } from "@/lib/business";

export function Footer() {
  return (
    <footer className="bg-[#050D17] text-white pt-14 sm:pt-16 pb-12 sm:pb-16 border-t border-[#101E32]">
      <div className="container-site">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 pb-14 border-b border-white/10">
          {/* Col 1: Brand & Logo */}
          <div>
            <DiamondLogo variant="light" textSize="base" />
            <p className="mt-4 text-xs sm:text-sm text-slate-400 leading-relaxed max-w-xs">
              Reliable residential roofing, shingle fixes, gutter care, and practical handyman services across Brampton and the GTA.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <span className="font-display text-xs font-bold tracking-widest text-[#F5BF3C] uppercase block mb-4">
              QUICK LINKS
            </span>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              {[
                { label: "Home", href: "#home" },
                { label: "Services", href: "#services" },
                { label: "About", href: "#about" },
                { label: "Gallery", href: "#gallery" },
                { label: "Reviews", href: "#reviews" },
                { label: "Service Area", href: "#service-area" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-[#F5BF3C] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Our Services */}
          <div>
            <span className="font-display text-xs font-bold tracking-widest text-[#F5BF3C] uppercase block mb-4">
              OUR SERVICES
            </span>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              {[
                "Roof Repair",
                "Roof Replacement",
                "Roof Inspection",
                "Leak Detection",
                "Gutter Repair & Cleaning",
                "Siding & Exterior Repairs",
                "General Handyman Services",
              ].map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="hover:text-[#F5BF3C] transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Us */}
          <div>
            <span className="font-display text-xs font-bold tracking-widest text-[#F5BF3C] uppercase block mb-4">
              CONTACT US
            </span>
            <div className="space-y-3 text-xs sm:text-sm text-slate-300">
              <a
                href={business.phoneHref}
                className="flex items-center gap-2 text-white hover:text-[#F5BF3C] font-bold transition-colors"
              >
                <Phone className="h-4 w-4 text-[#F5BF3C] shrink-0" />
                <span>{business.phone}</span>
              </a>

              <p className="text-slate-400">
                {business.street}
                <br />
                {business.city}, {business.region} {business.postal}, Canada
              </p>

              <div className="pt-2 text-xs text-slate-400 border-t border-white/10 space-y-1">
                <p>Mon–Sat: 7:00 AM – 6:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Diamond Roof Repair &amp; Handyman Services. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span>Licensed &amp; Insured</span>
            <span>•</span>
            <span>Brampton, Ontario</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
