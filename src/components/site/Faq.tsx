import { useState } from "react";
import { Plus } from "lucide-react";
import { business } from "@/lib/business";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "What services does Diamond Roof Repair & Handyman Services provide?",
    a: "Diamond Roof Repair & Handyman Services provides residential roof repairs, roof leak troubleshooting, shingle repair, gutter repair, and practical handyman services for homeowners in Brampton, Ontario.",
  },
  {
    q: "Do you help with roof leaks?",
    a: "Yes. Addressing roof leak issues is one of our primary services. Contact us to discuss the leak at your property so we can determine the appropriate repair.",
  },
  {
    q: "Do you repair shingles?",
    a: "Yes. We provide repair support for damaged, lifted, curled, or missing shingles.",
  },
  {
    q: "Do you repair gutters?",
    a: "Yes. Gutter repair and maintenance around the roofline are available to ensure proper water drainage.",
  },
  {
    q: "How can I contact the business?",
    a: `You can call ${business.phone} or submit an enquiry through the quote request form on this page.`,
  },
  {
    q: "Where is the business located?",
    a: `The business is located at ${business.street}, ${business.city}, ${business.region} ${business.postal}, Canada.`,
  },
];

export function Faq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="section-spacing bg-[#F7F9FC] border-b border-[#E2E8F0]">
      <div className="container-site max-w-4xl">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="eyebrow block mb-3">COMMON QUESTIONS</span>
          <h2 className="font-display text-[clamp(2.4rem,4.5vw,4.2rem)] font-extrabold tracking-[-0.035em] text-[#0B1B30] uppercase leading-[0.95]">
            FREQUENTLY ASKED QUESTIONS
          </h2>
        </div>

        <div className="divide-y divide-[#E2E8F0] border-y border-[#E2E8F0]">
          {faqs.map((faq, i) => {
            const isOpen = openIdx === i;
            return (
              <div key={faq.q} className="py-6 sm:py-7">
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpenIdx(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-start justify-between gap-6 text-left group"
                  >
                    <span className="font-display text-lg sm:text-xl font-bold text-[#0B1B30] tracking-tight group-hover:text-[#F5BF3C] transition-colors">
                      {faq.q}
                    </span>
                    <Plus
                      aria-hidden="true"
                      className={cn(
                        "h-5 w-5 shrink-0 text-[#F5BF3C] transition-transform duration-300 mt-1",
                        isOpen && "rotate-45 text-[#64748B]",
                      )}
                    />
                  </button>
                </h3>
                {isOpen && (
                  <p className="mt-3.5 text-base text-[#64748B] leading-relaxed animate-in fade-in duration-200">
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
