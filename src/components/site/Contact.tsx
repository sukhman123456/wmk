import { useState } from "react";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { business } from "@/lib/business";

const inputClass =
  "mt-2 w-full rounded-lg border border-[#E2E8F0] bg-white px-4 py-3.5 text-base text-[#0B1B30] placeholder:text-[#64748B]/60 outline-none transition focus:border-[#F5BF3C] focus:ring-1 focus:ring-[#F5BF3C]";

const services = [
  "Roof Repair",
  "Roof Leak Repair",
  "Shingle Repair",
  "Roof Inspection",
  "Roof Replacement",
  "Gutter Installation",
  "Gutter Repair & Cleaning",
  "Skylight Repair & Installation",
  "Attic & Roof Ventilation",
  "Handyman & Home Maintenance",
  "Other Repair Service",
];

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="section-spacing bg-[#F7F9FC] border-b border-[#E2E8F0]">
      <div className="container-site">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          {/* Left Context (cols 1-5) */}
          <div className="lg:col-span-5">
            <span className="eyebrow block mb-3 text-[#F5BF3C]">GET IN TOUCH</span>
            <h2 className="font-display text-[clamp(2.4rem,4.5vw,4.2rem)] font-extrabold tracking-[-0.035em] text-[#0B1B30] uppercase leading-[0.98]">
              REQUEST A QUOTE
            </h2>

            <p className="mt-6 text-base sm:text-lg text-[#64748B] leading-relaxed">
              Tell us about your roofing, leak, shingle, gutter, skylight, or handyman
              needs. We will get back to you with straightforward guidance, dependable
              estimates, and prompt local support.
            </p>

            <div className="mt-10 p-8 rounded-2xl border border-[#E2E8F0] bg-white shadow-xs">
              <span className="text-xs font-bold tracking-widest text-[#64748B] uppercase block">
                CALL DIRECTLY
              </span>
              <a
                href={business.phoneHref}
                className="mt-2 block font-display text-2xl sm:text-3xl font-extrabold text-[#0B1B30] tracking-tight hover:text-[#F5BF3C] transition-colors"
              >
                {business.phone}
              </a>
              <p className="mt-2 text-xs text-[#64748B]">
                {business.hours} · Brampton, Ontario
              </p>
            </div>
          </div>

          {/* Right Clean Form (cols 6-12) */}
          <div className="lg:col-span-7">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="rounded-2xl border border-[#E2E8F0] bg-white p-7 sm:p-10 shadow-sm"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-bold tracking-wider text-[#0B1B30] uppercase"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    required
                    placeholder="Your full name"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-phone"
                    className="block text-xs font-bold tracking-wider text-[#0B1B30] uppercase"
                  >
                    Phone
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="+1 (437) ..."
                    className={inputClass}
                  />
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-bold tracking-wider text-[#0B1B30] uppercase"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className={inputClass}
                  />
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="contact-service"
                    className="block text-xs font-bold tracking-wider text-[#0B1B30] uppercase"
                  >
                    Service Needed
                  </label>
                  <select
                    id="contact-service"
                    name="service"
                    className={inputClass}
                  >
                    {services.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-bold tracking-wider text-[#0B1B30] uppercase"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    placeholder="Explain the roofing, gutter, or handyman issue..."
                    className={inputClass}
                  />
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="contact-photo"
                    className="block text-xs font-bold tracking-wider text-[#0B1B30] uppercase"
                  >
                    Optional Photo Upload{" "}
                    <span className="font-normal text-[#64748B] normal-case">
                      (Roof, shingle, or gutter condition)
                    </span>
                  </label>
                  <input
                    id="contact-photo"
                    name="photo"
                    type="file"
                    accept="image/*"
                    className="mt-2 w-full rounded-lg border border-dashed border-[#E2E8F0] bg-[#F7F9FC] px-4 py-3 text-sm text-[#64748B]"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-8 w-full inline-flex h-13 sm:h-14 items-center justify-center gap-2 rounded-lg bg-[#F5BF3C] font-display text-sm font-extrabold uppercase tracking-wider text-[#071525] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#FFD45A] hover:shadow-[0_4px_20px_rgba(245,191,60,0.35)] active:translate-y-0 active:scale-95 shadow-md"
              >
                <span>SEND REQUEST</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <div role="status" className="mt-4 text-xs text-[#64748B] leading-relaxed">
                {submitted ? (
                  <p className="flex items-center gap-2 text-emerald-600 font-semibold">
                    <CheckCircle2 className="h-4 w-4 shrink-0" />
                    Thank you. Your request has been received. For immediate assistance, please call {business.phone}.
                  </p>
                ) : (
                  <p>We use your details only to respond to your repair enquiry.</p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
