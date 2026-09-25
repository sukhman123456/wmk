import { useEffect, useState } from "react";
import { ArrowRight, CheckCircle2, Phone, X } from "lucide-react";
import { business } from "@/lib/business";
import { DiamondLogo } from "@/components/site/Logo";

const inputClass =
  "mt-1.5 w-full rounded-lg border border-[#E2E8F0] bg-[#F7F9FC] px-4 py-3 text-sm text-[#0B1B30] placeholder:text-[#64748B]/60 outline-none transition focus:border-[#F5BF3C] focus:bg-white focus:ring-1 focus:ring-[#F5BF3C]";

const services = [
  "Roof Repair",
  "Roof Replacement",
  "Roof Inspection",
  "Leak Detection",
  "Gutter Repair & Cleaning",
  "Siding & Exterior Repairs",
  "General Handyman Services",
  "Emergency Repairs",
  "Skylight Repair & Installation",
  "Attic & Roof Ventilation",
  "Other Repair Service",
];

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export function QuoteModal({ isOpen, onClose, defaultService }: QuoteModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState(defaultService || services[0]);

  useEffect(() => {
    if (defaultService) {
      setSelectedService(defaultService);
    }
  }, [defaultService]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="quote-modal-title"
      className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-2xl border border-[#E2E8F0] bg-white p-6 sm:p-8 shadow-2xl animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 grid h-9 w-9 place-items-center rounded-full bg-[#F7F9FC] text-[#64748B] hover:bg-[#071525] hover:text-white transition-colors"
          aria-label="Close dialog"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Modal Header */}
        <div className="pr-10">
          <div className="inline-flex items-center gap-2 font-display text-xs font-bold tracking-[0.2em] text-[#F5BF3C] uppercase mb-2">
            <span className="h-0.5 w-5 bg-[#F5BF3C]" />
            FREE ESTIMATE
          </div>
          <h2
            id="quote-modal-title"
            className="font-display text-2xl sm:text-3xl font-extrabold uppercase text-[#0B1B30] tracking-tight"
          >
            Request a Free Quote
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#64748B] leading-relaxed">
            Tell us about your roofing or handyman project. We will respond promptly with upfront pricing and guidance.
          </p>
        </div>

        {/* Call Direct Banner */}
        <div className="mt-4 p-3.5 rounded-xl bg-[#071525] text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="grid h-8 w-8 place-items-center rounded-lg bg-white/10 text-[#F5BF3C]">
              <Phone className="h-4 w-4" />
            </div>
            <div>
              <span className="text-[0.62rem] font-display font-bold uppercase tracking-wider text-white/60 block">
                Need Immediate Help?
              </span>
              <a
                href={business.phoneHref}
                className="font-display text-sm font-extrabold text-[#F5BF3C] hover:underline"
              >
                {business.phone}
              </a>
            </div>
          </div>
          <span className="text-[0.68rem] text-white/70 hidden sm:inline">
            Brampton &amp; GTA
          </span>
        </div>

        {/* Form Body */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          className="mt-5 space-y-4"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label
                htmlFor="modal-name"
                className="block text-xs font-bold uppercase tracking-wider text-[#0B1B30]"
              >
                Your Name *
              </label>
              <input
                id="modal-name"
                required
                placeholder="Full name"
                className={inputClass}
              />
            </div>

            <div>
              <label
                htmlFor="modal-phone"
                className="block text-xs font-bold uppercase tracking-wider text-[#0B1B30]"
              >
                Phone Number *
              </label>
              <input
                id="modal-phone"
                type="tel"
                required
                placeholder="+1 (437) ..."
                className={inputClass}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label
                htmlFor="modal-email"
                className="block text-xs font-bold uppercase tracking-wider text-[#0B1B30]"
              >
                Email Address
              </label>
              <input
                id="modal-email"
                type="email"
                placeholder="name@example.com"
                className={inputClass}
              />
            </div>

            <div>
              <label
                htmlFor="modal-service"
                className="block text-xs font-bold uppercase tracking-wider text-[#0B1B30]"
              >
                Service Needed
              </label>
              <select
                id="modal-service"
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className={inputClass}
              >
                {services.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label
              htmlFor="modal-message"
              className="block text-xs font-bold uppercase tracking-wider text-[#0B1B30]"
            >
              Project Details
            </label>
            <textarea
              id="modal-message"
              rows={3}
              placeholder="Describe your roof repair, shingle issue, gutter leak, or handyman need..."
              className={inputClass}
            />
          </div>

          <div>
            <label
              htmlFor="modal-photo"
              className="block text-xs font-bold uppercase tracking-wider text-[#0B1B30]"
            >
              Optional Photo{" "}
              <span className="font-normal normal-case text-[#64748B]">
                (Upload damage/roof photo)
              </span>
            </label>
            <input
              id="modal-photo"
              type="file"
              accept="image/*"
              className="mt-1.5 w-full rounded-lg border border-dashed border-[#E2E8F0] bg-[#F7F9FC] px-3.5 py-2 text-xs text-[#64748B]"
            />
          </div>

          <button
            type="submit"
            className="w-full inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-[#F5BF3C] font-display text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#071525] hover:bg-[#FFD45A] shadow-md transition-all active:scale-98"
          >
            <span>SUBMIT ESTIMATE REQUEST</span>
            <ArrowRight className="h-4 w-4" />
          </button>

          <div role="status" className="text-center text-xs text-[#64748B]">
            {submitted ? (
              <p className="flex items-center justify-center gap-2 text-emerald-600 font-bold py-1">
                <CheckCircle2 className="h-4 w-4 shrink-0" />
                Thank you! We have received your request and will call you shortly.
              </p>
            ) : (
              <p>We respect your privacy. No obligation, 100% free estimate.</p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
