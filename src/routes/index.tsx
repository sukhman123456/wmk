import { useCallback, useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { LogoIntro } from "@/components/site/LogoIntro";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import {
  About,
  BeforeAfterSection,
  FinalCta,
  ProcessSection,
  ReviewsSection,
  ServiceAreaSection,
  WhyChooseUs,
} from "@/components/site/Sections";
import { Services } from "@/components/site/ServicesSection";
import { ProjectGallery } from "@/components/site/ProjectGallery";
import { QuoteModal } from "@/components/site/QuoteModal";
import { Footer } from "@/components/site/Footer";
import { business } from "@/lib/business";

const title = "Diamond Roof Repair & Handyman Services | Brampton, ON";
const description =
  "Roof repair, roof leak, shingle, gutter and handyman services in Brampton, Ontario. Contact Diamond Roof Repair & Handyman Services at +1 437-215-8624.";

const schema = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  name: business.name,
  telephone: business.phone,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: business.rating,
    reviewCount: business.reviewCount,
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: business.street,
    addressLocality: business.city,
    addressRegion: business.region,
    postalCode: business.postal,
    addressCountry: "CA",
  },
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(schema) },
    ],
  }),
  component: Index,
});

function Index() {
  const [introDone, setIntroDone] = useState(false);
  const [heroActive, setHeroActive] = useState(false);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  const handleSplitStart = useCallback(() => {
    setHeroActive(true);
  }, []);

  const handleComplete = useCallback(() => {
    setIntroDone(true);
    setHeroActive(true);
  }, []);

  // Global listener for opening quote modal from #contact hash or quote clicks
  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === "#contact" || window.location.hash === "#quote") {
        setQuoteModalOpen(true);
      }
    };

    const handleCustomOpen = () => setQuoteModalOpen(true);

    window.addEventListener("hashchange", handleHash);
    window.addEventListener("open-quote-modal", handleCustomOpen);

    // Global click delegate for quote anchor buttons
    const handleGlobalClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a[href="#contact"], a[href="#quote"]');
      if (target) {
        e.preventDefault();
        setQuoteModalOpen(true);
      }
    };

    document.addEventListener("click", handleGlobalClick);

    return () => {
      window.removeEventListener("hashchange", handleHash);
      window.removeEventListener("open-quote-modal", handleCustomOpen);
      document.removeEventListener("click", handleGlobalClick);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#F7F9FC] text-[#0B1B30] selection:bg-[#F5BF3C] selection:text-[#071525]">
      {/* 1. Cinematic Logo Intro Animation & Dark Split Wipe */}
      {!introDone && (
        <LogoIntro
          onSplitStart={handleSplitStart}
          onComplete={handleComplete}
        />
      )}

      {/* 2. Navigation Header (Sticky Dark Glass Navbar) */}
      <Navbar />

      <main>
        {/* 3. Large Cinematic Hero */}
        <Hero isActive={heroActive} />

        {/* 4. Complete Roofing & Handyman Solutions (4-Column 8-Card Grid + Modal) */}
        <Services />

        {/* 5. Why Choose Us ("The Right Team for the Job" - Full-Width Dark Section) */}
        <WhyChooseUs />

        {/* 6. Results / Before & After ("Real Results. Happy Homeowners.") */}
        <BeforeAfterSection />

        {/* 7. Process ("Simple. Straightforward. Stress-Free." - 5 Numbered Steps) */}
        <ProcessSection />

        {/* 8. About Section ("Your Local Roofing & Handyman Experts" - Split Layout) */}
        <About />

        {/* 9. Project Gallery ("Project Gallery" - 5-Image Horizontal Layout) */}
        <ProjectGallery />

        {/* 10. Customer Reviews ("Trusted by Homeowners Like You" - 4.9 Stars / 86 Reviews) */}
        <ReviewsSection />

        {/* 11. Service Area ("Proudly Serving Our Community" - Brampton & Local Map) */}
        <ServiceAreaSection />

        {/* 12. Final CTA ("Your Home Deserves Work Done Right.") */}
        <FinalCta />
      </main>

      {/* 13. Footer (4-Column Dark Editorial Footer) */}
      <Footer />

      {/* Interactive Free Quote Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
      />
    </div>
  );
}
