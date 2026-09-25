import { useState } from "react";
import { ArrowUpRight, Camera, CheckCircle2, Eye, MapPin, X } from "lucide-react";
import lakeRoofImg from "@/assets/project-lake-roof.jpg";
import sunsetRoofImg from "@/assets/project-sunset-roof.jpg";
import skylightRoofImg from "@/assets/project-skylight-roof.jpg";
import gablesHomeImg from "@/assets/project-gables-home.jpg";
import baywindowHomeImg from "@/assets/project-baywindow-home.jpg";
import { cn } from "@/lib/utils";

const projects = [
  {
    id: "lakefront",
    title: "Waterfront Architectural Shingle Roof",
    tag: "SHINGLE ROOFING",
    location: "Ontario Waterfront Property",
    desc: "Precision shingle courses and seamless ridge capping with high-durability architectural materials.",
    image: lakeRoofImg,
    featured: true,
  },
  {
    id: "sunset",
    title: "Twilight Multi-Plane Rooflines",
    tag: "ROOF REPAIR & INSTALLATION",
    location: "Residential Suburban Brampton",
    desc: "Multi-tiered roof slopes with custom valley flashing and clean alignment across all hips.",
    image: sunsetRoofImg,
    featured: false,
  },
  {
    id: "skylight",
    title: "Skylight & Valley Water Protection",
    tag: "LEAK TROUBLESHOOTING",
    location: "Residential Roof Inspection",
    desc: "Watertight skylight sealing, secure hip shingles, and clean drainage valley channels.",
    image: skylightRoofImg,
    featured: false,
  },
  {
    id: "gables",
    title: "Multi-Gable Canadian Residence",
    tag: "FULL RESIDENTIAL ROOF",
    location: "Brampton, ON",
    desc: "Steep-slope architectural shingles, ventilation caps, and clean aluminum soffit & fascia lines.",
    image: gablesHomeImg,
    featured: false,
  },
  {
    id: "baywindow",
    title: "Bay Window & Overhang Detailing",
    tag: "EXTERIOR & GUTTER CARE",
    location: "Local Family Home",
    desc: "Protective overhang roof slopes, gutter alignment, and clean brick-to-roof transitions.",
    image: baywindowHomeImg,
    featured: false,
  },
];

export function ProjectGallery() {
  const [activeImg, setActiveImg] = useState<string | null>(null);

  return (
    <section id="gallery" className="section-spacing bg-white border-b border-[#E2E8F0] scroll-mt-20">
      <div className="container-site">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 font-display text-xs sm:text-sm font-bold tracking-[0.2em] text-[#F5BF3C] uppercase mb-3">
            <span className="h-0.5 w-6 bg-[#F5BF3C]" />
            OUR WORK
            <span className="h-0.5 w-6 bg-[#F5BF3C]" />
          </div>

          <h2 className="font-display text-[clamp(2.2rem,4.5vw,3.8rem)] font-extrabold tracking-[-0.03em] text-[#0B1B30] uppercase leading-[1.04]">
            Project Gallery
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#64748B] leading-relaxed max-w-2xl mx-auto">
            A look at some of our recent roofing and handyman projects.
          </p>
        </div>

        {/* 5-Column Horizontal Project Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
          {projects.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveImg(item.image)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-[#F5BF3C] flex flex-col justify-end h-64 sm:h-72"
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071525]/90 via-[#071525]/30 to-transparent" />

              <div className="relative z-10 p-4 sm:p-5 text-white">
                <span className="text-[0.62rem] font-display font-bold tracking-widest text-[#F5BF3C] uppercase block mb-1">
                  {item.tag}
                </span>
                <h3 className="font-display text-sm sm:text-base font-bold uppercase text-white tracking-tight line-clamp-2">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImg && (
        <div
          role="dialog"
          aria-label="Enlarged project view"
          onClick={() => setActiveImg(null)}
          className="fixed inset-0 z-[120] flex items-center justify-center bg-[#071525]/95 p-4 backdrop-blur-md animate-in fade-in duration-200"
        >
          <button
            type="button"
            onClick={() => setActiveImg(null)}
            className="absolute top-6 right-6 grid h-11 w-11 place-items-center rounded-full bg-white/15 text-white hover:bg-white/30 transition-colors"
            aria-label="Close image"
          >
            <X className="h-6 w-6" />
          </button>
          <img
            src={activeImg}
            alt="Enlarged project view"
            className="max-h-[90vh] max-w-[95vw] rounded-xl object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
