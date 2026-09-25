import { useEffect, useState, useMemo } from "react";
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  CloudRain,
  Droplets,
  Fan,
  Hammer,
  Home,
  Layers,
  Maximize2,
  Paintbrush,
  Phone,
  RefreshCw,
  Search,
  Settings,
  Shield,
  ShieldAlert,
  ShieldCheck,
  Sun,
  Trash2,
  Umbrella,
  Waves,
  Wind,
  Wrench,
  X,
} from "lucide-react";
import { business } from "@/lib/business";
import { cn } from "@/lib/utils";
import serviceRoofInstallImg from "@/assets/service-roof-install.jpg";
import serviceAtticVentImg from "@/assets/service-attic-vent.jpg";
import serviceGuttersProImg from "@/assets/service-gutters-pro.jpg";
import serviceHandymanProImg from "@/assets/service-handyman-pro.jpg";
import shingleRepairImg from "@/assets/shingle-repair.jpg";
import gutterRepairImg from "@/assets/gutter-repair.jpg";
import projectSkylightRoofImg from "@/assets/project-skylight-roof.jpg";
import homeExteriorImg from "@/assets/home-exterior.jpg";
import projectLakeRoofImg from "@/assets/project-lake-roof.jpg";
import projectSunsetRoofImg from "@/assets/project-sunset-roof.jpg";
import serviceRoofInspectImg from "@/assets/service-roof-inspect.jpg";
import serviceLeakDetectImg from "@/assets/service-leak-detect.jpg";
import serviceEmergencyRepairImg from "@/assets/service-emergency-repair.jpg";
import baywindowHomeImg from "@/assets/project-baywindow-home.jpg";

export interface BlueprintService {
  id: string;
  name: string;
  shortDesc: string;
  image: string;
  icon: React.ComponentType<{ className?: string }>;
  fullServiceId: string;
}

export const blueprintServices: BlueprintService[] = [
  {
    id: "bp-roof-repair",
    name: "Roof Repair",
    shortDesc: "Fix leaks, damaged shingles and more.",
    image: shingleRepairImg,
    icon: Wrench,
    fullServiceId: "roof-repair",
  },
  {
    id: "bp-roof-replacement",
    name: "Roof Replacement",
    shortDesc: "Durable, high-quality roofs for long-term protection.",
    image: projectLakeRoofImg,
    icon: Home,
    fullServiceId: "roof-replacement",
  },
  {
    id: "bp-roof-inspection",
    name: "Roof Inspection",
    shortDesc: "Find problems before they get worse.",
    image: serviceRoofInspectImg,
    icon: Search,
    fullServiceId: "roof-inspection",
  },
  {
    id: "bp-leak-detection",
    name: "Leak Detection",
    shortDesc: "Stop water damage at the source.",
    image: serviceLeakDetectImg,
    icon: Droplets,
    fullServiceId: "roof-leak-repair",
  },
  {
    id: "bp-gutter-repair-cleaning",
    name: "Gutter Repair & Cleaning",
    shortDesc: "Keep water flowing and your home safe.",
    image: gutterRepairImg,
    icon: CloudRain,
    fullServiceId: "gutter-repairs",
  },
  {
    id: "bp-siding-exterior-repairs",
    name: "Siding & Exterior Repairs",
    shortDesc: "Improve curb appeal and protection.",
    image: baywindowHomeImg,
    icon: Layers,
    fullServiceId: "exterior-repairs",
  },
  {
    id: "bp-general-handyman",
    name: "General Handyman Services",
    shortDesc: "Repairs, installations, and maintenance and more.",
    image: serviceHandymanProImg,
    icon: Hammer,
    fullServiceId: "general-handyman-services",
  },
  {
    id: "bp-emergency-repairs",
    name: "Emergency Repairs",
    shortDesc: "24/7 service for urgent roof and property issues.",
    image: serviceEmergencyRepairImg,
    icon: ShieldAlert,
    fullServiceId: "emergency-roof-repair",
  },
];

export type ServiceCategory =
  | "all"
  | "roofing"
  | "gutters"
  | "skylights"
  | "ventilation"
  | "handyman";

export interface ServiceItem {
  id: string;
  category: "roofing" | "gutters" | "skylights" | "ventilation" | "handyman";
  categoryLabel: string;
  name: string;
  shortDesc: string;
  icon: React.ComponentType<{ className?: string }>;
  includes: string[];
  whyItMatters: string;
}

function getServiceImage(service: ServiceItem): string {
  switch (service.id) {
    // ROOFING (10)
    case "roof-installation":
    case "shingle-installation":
    case "roof-maintenance":
      return serviceRoofInstallImg;
    case "roof-replacement":
      return projectLakeRoofImg;
    case "asphalt-shingle-roofing":
      return projectSunsetRoofImg;
    case "roof-repair":
    case "roof-leak-repair":
    case "roof-inspection":
    case "storm-wind-damage":
    case "emergency-roof-repair":
      return shingleRepairImg;

    // GUTTERS (6)
    case "gutter-installation":
    case "gutter-replacement":
    case "downspout-installation-repair":
    case "eavestrough-installation-repair":
      return serviceGuttersProImg;
    case "gutter-repairs":
    case "gutter-cleaning":
      return gutterRepairImg;

    // SKYLIGHTS (4)
    case "skylight-installation":
    case "skylight-repair":
    case "skylight-replacement":
    case "skylight-leak-repair":
      return projectSkylightRoofImg;

    // VENTILATION (3)
    case "loft-attic-ventilation":
    case "roof-vent-installation":
    case "attic-ventilation-inspection":
      return serviceAtticVentImg;

    // HANDYMAN (5)
    case "painting":
    case "exterior-repairs":
    case "caulking-sealing":
      return serviceHandymanProImg;
    case "general-handyman-services":
    case "minor-home-repairs":
      return homeExteriorImg;

    default:
      if (service.category === "roofing") return serviceRoofInstallImg;
      if (service.category === "gutters") return serviceGuttersProImg;
      if (service.category === "skylights") return projectSkylightRoofImg;
      if (service.category === "ventilation") return serviceAtticVentImg;
      return serviceHandymanProImg;
  }
}

export const servicesData: ServiceItem[] = [
  // ==========================================
  // ROOFING SERVICES (1 - 10)
  // ==========================================
  {
    id: "roof-installation",
    category: "roofing",
    categoryLabel: "Roofing",
    name: "Roof Installation",
    shortDesc:
      "Complete architectural roof installations engineered for Canadian climates and lasting durability.",
    icon: Hammer,
    includes: [
      "Thorough roof decking inspection & prep",
      "Synthetic weather-barrier underlayment",
      "Drip edge & starter strip installation",
      "Heavy-duty architectural shingles",
      "Precision ridge venting and capping",
    ],
    whyItMatters:
      "A properly installed roof protects your greatest investment against severe Ontario snow, wind-driven rain, and seasonal freeze-thaw cycles.",
  },
  {
    id: "roof-repair",
    category: "roofing",
    categoryLabel: "Roofing",
    name: "Roof Repair",
    shortDesc:
      "Fast, reliable repairs for leaks, damaged shingles, and weather-related roof issues.",
    icon: Wrench,
    includes: [
      "Vulnerability & damage area diagnosis",
      "Damaged or lifted shingle replacement",
      "Flashing and valley seal reinforcement",
      "Watertight seal inspection & testing",
    ],
    whyItMatters:
      "Prompt localized repairs stop moisture from seeping into plywood decking, attic insulation, and interior ceilings.",
  },
  {
    id: "roof-inspection",
    category: "roofing",
    categoryLabel: "Roofing",
    name: "Roof Inspection",
    shortDesc:
      "Detailed inspection to identify damage, wear, leaks, and potential roofing problems.",
    icon: Search,
    includes: [
      "Multi-point shingle wear analysis",
      "Flashing, chimney & valley check",
      "Gutter line and drip edge assessment",
      "Attic moisture & ventilation check",
      "Comprehensive homeowner status report",
    ],
    whyItMatters:
      "Early detection catches minor shingle lifting or failing caulking years before they develop into expensive interior water emergencies.",
  },
  {
    id: "roof-replacement",
    category: "roofing",
    categoryLabel: "Roofing",
    name: "Roof Replacement",
    shortDesc:
      "Complete tear-off and replacement for aging or extensively worn residential roofs in Brampton.",
    icon: RefreshCw,
    includes: [
      "Complete safe removal of old layers",
      "Sub-deck inspection & wood replacement",
      "Ice and water barrier application",
      "High-grade shingle installation",
      "Full magnetic sweep & clean-up",
    ],
    whyItMatters:
      "Replacing an expired roof restores full structural integrity, improves attic energy efficiency, and boosts home resale value.",
  },
  {
    id: "storm-wind-damage",
    category: "roofing",
    categoryLabel: "Roofing",
    name: "Roof Repair for Storm & Wind Damage",
    shortDesc:
      "Rapid restoration for wind-lifted shingles, fallen tree branches, and severe Ontario storm wear.",
    icon: Wind,
    includes: [
      "Emergency weatherproofing & tarping",
      "Replacement of blown-off shingles",
      "Perimeter flashing resealing",
      "Structural valley reinforcement",
    ],
    whyItMatters:
      "High winds can compromise shingle adhesion; immediate repair prevents subsequent rainfall from penetrating unprotected decking.",
  },
  {
    id: "shingle-installation",
    category: "roofing",
    categoryLabel: "Roofing",
    name: "Shingle Roof Installation",
    shortDesc:
      "Expert installation of multi-layered fiberglass asphalt shingles with precision nailing patterns.",
    icon: Layers,
    includes: [
      "Manufacturer-certified course alignment",
      "Reinforced nailing zones for high winds",
      "Closed valley or metal valley options",
      "High-profile matching ridge caps",
    ],
    whyItMatters:
      "Proper nailing depth and alignment guarantee maximum wind resistance ratings and optimal water-shedding performance.",
  },
  {
    id: "asphalt-shingle-roofing",
    category: "roofing",
    categoryLabel: "Roofing",
    name: "Asphalt Shingle Roofing",
    shortDesc:
      "High-grade architectural asphalt shingle solutions offering superior aesthetics and durability.",
    icon: ShieldCheck,
    includes: [
      "Architectural profile & color options",
      "Class-A fire-rated materials",
      "Algae-resistant surface granules",
      "Extended performance warranty options",
    ],
    whyItMatters:
      "Asphalt shingles remain Canada's premier roofing choice for reliable protection, affordability, and timeless curb appeal.",
  },
  {
    id: "emergency-roof-repair",
    category: "roofing",
    categoryLabel: "Roofing",
    name: "Emergency Roof Repair",
    shortDesc:
      "Urgent repair support to contain active leaks, storm breaches, and sudden roofing hazards.",
    icon: ShieldAlert,
    includes: [
      "Priority dispatch for active leaks",
      "Temporary water deflection & tarping",
      "Water pathway identification",
      "Permanent repair execution plan",
    ],
    whyItMatters:
      "Stopping active water penetration within hours saves thousands in drywall, electrical wiring, and insulation restoration.",
  },
  {
    id: "roof-leak-repair",
    category: "roofing",
    categoryLabel: "Roofing",
    name: "Roof Leak Repair",
    shortDesc:
      "Pinpoint diagnosis and permanent sealing of roof leaks around valleys, chimneys, and vents.",
    icon: Droplets,
    includes: [
      "Water migration trace & thermal check",
      "Compromised underlayment repair",
      "Step and counter flashing resealing",
      "Pipe boot and plumbing collar seals",
    ],
    whyItMatters:
      "Water travels along rafters before dripping down; professional pinpoint repair eliminates the true source of moisture entry.",
  },
  {
    id: "roof-maintenance",
    category: "roofing",
    categoryLabel: "Roofing",
    name: "Roof Maintenance",
    shortDesc:
      "Preventative upkeep including debris removal, minor seal touch-ups, and loose shingle securing.",
    icon: Shield,
    includes: [
      "Valley debris and leaf clearing",
      "Exposed nail head rubberized sealing",
      "Flashing sealant inspection",
      "Loose shingle tab re-adhesion",
    ],
    whyItMatters:
      "Regular seasonal maintenance prevents small aging issues from accelerating, adding years to your roof's service life.",
  },

  // ==========================================
  // GUTTER SERVICES (11 - 16)
  // ==========================================
  {
    id: "gutter-installation",
    category: "gutters",
    categoryLabel: "Gutters",
    name: "Gutter Installation",
    shortDesc:
      "Professional gutter installation designed to direct water safely away from your home.",
    icon: CloudRain,
    includes: [
      "Heavy-gauge seamless aluminum troughs",
      "Precision slope calculation for flow",
      "Secure hidden screw-in hangers",
      "Custom corner mitre leakproof seals",
    ],
    whyItMatters:
      "A correctly graded gutter system channels thousands of gallons of stormwater away from basement foundations and footings.",
  },
  {
    id: "gutter-repairs",
    category: "gutters",
    categoryLabel: "Gutters",
    name: "Gutter Repairs",
    shortDesc:
      "Fixing sagging troughs, leaky seams, loose brackets, and disconnected downspout joints.",
    icon: Wrench,
    includes: [
      "Joint and corner resealing",
      "Re-sloping sagging gutter sections",
      "Hanger bracket reinforcement",
      "Fascia board connection checks",
    ],
    whyItMatters:
      "Repairing gutter leaks stops overflow water from rotting wood fascia boards, soffits, and peeling exterior paint.",
  },
  {
    id: "gutter-cleaning",
    category: "gutters",
    categoryLabel: "Gutters",
    name: "Gutter Cleaning",
    shortDesc:
      "Thorough removal of leaves, pine needles, moss, and silt to ensure free-flowing drainage.",
    icon: Trash2,
    includes: [
      "Manual leaf & sediment removal",
      "Downspout flush & clog clearing",
      "Outlet strainer verification",
      "Ground perimeter debris cleanup",
    ],
    whyItMatters:
      "Clogged gutters trigger winter ice damming, heavy sagging, and destructive overflow down your home's exterior walls.",
  },
  {
    id: "gutter-replacement",
    category: "gutters",
    categoryLabel: "Gutters",
    name: "Gutter Replacement",
    shortDesc:
      "Replacing rusted, bent, or undersized gutters with modern high-capacity seamless systems.",
    icon: RefreshCw,
    includes: [
      "Old trough removal & disposal",
      "Fascia backing inspection",
      "Custom on-site seamless fabrication",
      "High-flow downspout connection",
    ],
    whyItMatters:
      "New seamless gutters eliminate unsightly seams that leak, providing modern aesthetics and uninterrupted drainage capacity.",
  },
  {
    id: "downspout-installation-repair",
    category: "gutters",
    categoryLabel: "Gutters",
    name: "Downspout Installation & Repair",
    shortDesc:
      "Ensuring high-capacity downspout flow with secure extensions directing water 6+ feet from foundations.",
    icon: Waves,
    includes: [
      "Secure elbow & pipe mounting",
      "High-capacity downspout sizing",
      "Hinged flip-up extension options",
      "Drainage discharge path optimization",
    ],
    whyItMatters:
      "Discharging rainwater well away from the foundation eliminates basement dampness, foundation cracking, and landscape erosion.",
  },
  {
    id: "eavestrough-installation-repair",
    category: "gutters",
    categoryLabel: "Gutters",
    name: "Eavestrough Installation & Repair",
    shortDesc:
      "Complete eavestrough care ensuring structural alignment, leak-free corners, and solid fascia anchoring.",
    icon: ShieldCheck,
    includes: [
      "Full perimeter eavestrough alignment",
      "Corner mitre sealant application",
      "Heavy snow load bracket spacing",
      "Drip edge flashing tie-in",
    ],
    whyItMatters:
      "Reliable eavestroughs safeguard home siding, entryways, and walkways from dangerous winter icicle formations.",
  },

  // ==========================================
  // SKYLIGHT SERVICES (17 - 20)
  // ==========================================
  {
    id: "skylight-installation",
    category: "skylights",
    categoryLabel: "Skylights",
    name: "Skylight Installation",
    shortDesc:
      "Custom residential skylight additions bringing natural sunlight and sky views into living spaces.",
    icon: Sun,
    includes: [
      "Roof deck framing & curb construction",
      "Multi-tier flashing kit integration",
      "Ice and water shield perimeter wrap",
      "Energy-efficient Low-E glass glazing",
    ],
    whyItMatters:
      "A professionally installed skylight floods interior spaces with healthy natural light without compromising thermal insulation.",
  },
  {
    id: "skylight-repair",
    category: "skylights",
    categoryLabel: "Skylights",
    name: "Skylight Repair",
    shortDesc:
      "Troubleshooting condensation, failing gaskets, mechanical hardware, or cracked glazing.",
    icon: Wrench,
    includes: [
      "Perimeter gasket & seal replacement",
      "Condensation channel clearing",
      "Operator hardware lubrication/repair",
      "Exterior frame seal reinforcement",
    ],
    whyItMatters:
      "Restoring skylight seals prevents thermal drafts, higher heating bills, and moisture intrusion into ceiling framing.",
  },
  {
    id: "skylight-replacement",
    category: "skylights",
    categoryLabel: "Skylights",
    name: "Skylight Replacement",
    shortDesc:
      "Upgrading old, cloudy, or leaky skylights with modern double-glazed low-E tempered units.",
    icon: Maximize2,
    includes: [
      "Aging skylight unit removal",
      "Curb inspection & moisture check",
      "New high-performance unit mounting",
      "Fresh matching roof flashing kit",
    ],
    whyItMatters:
      "Modern skylight units provide superior sound deadening, UV protection to prevent furniture fading, and enhanced insulation.",
  },
  {
    id: "skylight-leak-repair",
    category: "skylights",
    categoryLabel: "Skylights",
    name: "Skylight Leak Repair",
    shortDesc:
      "Locating and sealing water leaks around skylight frames, curb flashings, and apron transitions.",
    icon: Umbrella,
    includes: [
      "Flashing kit inspection & re-bedding",
      "Membrane barrier resealing",
      "Shingle overlap realignment",
      "High-durability roofing sealant finish",
    ],
    whyItMatters:
      "Skylight leaks can rot surrounding rafters and stain ceiling drywall; our specialized repair ensures 100% watertight protection.",
  },

  // ==========================================
  // VENTILATION (21 - 23)
  // ==========================================
  {
    id: "loft-attic-ventilation",
    category: "ventilation",
    categoryLabel: "Ventilation",
    name: "Loft / Attic Ventilation",
    shortDesc:
      "Balancing attic intake and exhaust airflow to regulate temperature and eliminate trapped humidity.",
    icon: Wind,
    includes: [
      "Attic airflow ratio calculation",
      "Soffit intake baffle verification",
      "Moisture and condensation testing",
      "Balanced intake-to-exhaust strategy",
    ],
    whyItMatters:
      "Balanced attic airflow prevents humid air from condensing on roof sheathing, protecting trusses from mold and wood rot.",
  },
  {
    id: "roof-vent-installation",
    category: "ventilation",
    categoryLabel: "Ventilation",
    name: "Roof Vent Installation",
    shortDesc:
      "Installing low-profile ridge vents, box vents, and turbine exhausts to optimize roof ventilation.",
    icon: Fan,
    includes: [
      "Precision roof deck aperture cuts",
      "Heavy-duty baffled vent installation",
      "Watertight collar flashing & sealing",
      "Shingle tie-in for seamless aesthetics",
    ],
    whyItMatters:
      "Quality roof vents continuously expel superheated summer attic air, reducing home cooling costs and extending shingle life.",
  },
  {
    id: "attic-ventilation-inspection",
    category: "ventilation",
    categoryLabel: "Ventilation",
    name: "Attic Ventilation Inspection",
    shortDesc:
      "Detailed assessment of attic airflow, insulation clearance, moisture levels, and condensation risks.",
    icon: Activity,
    includes: [
      "Intake and exhaust clearance inspection",
      "Insulation baffle blockage checks",
      "Attic thermal & humidity readings",
      "Ventilation improvement action plan",
    ],
    whyItMatters:
      "Blocked soffit vents often cause roof ice dams in winter; an inspection uncovers airflow restrictions before damage occurs.",
  },

  // ==========================================
  // HANDYMAN SERVICES (24 - 28)
  // ==========================================
  {
    id: "painting",
    category: "handyman",
    categoryLabel: "Handyman",
    name: "Painting",
    shortDesc:
      "Clean, durable exterior and interior painting for trim, doors, fascia boards, and residential accents.",
    icon: Paintbrush,
    includes: [
      "Surface scraping, sanding & cleaning",
      "High-adhesion exterior primer coat",
      "Premium weather-resistant topcoats",
      "Clean taping & protective masking",
    ],
    whyItMatters:
      "Fresh exterior paint creates an impenetrable moisture barrier over exposed wood while dramatically upgrading exterior appearance.",
  },
  {
    id: "general-handyman-services",
    category: "handyman",
    categoryLabel: "Handyman",
    name: "General Handyman Services",
    shortDesc:
      "Reliable, multi-trade home maintenance and repair solutions tailored for Brampton homeowners.",
    icon: Settings,
    includes: [
      "Door, latch & hardware adjustments",
      "Exterior fixture & lighting mounts",
      "Post, fence & gate alignments",
      "Multi-item home maintenance punch lists",
    ],
    whyItMatters:
      "Having a knowledgeable, dependable craftsman saves homeowners time, hassle, and keeps the property in peak condition.",
  },
  {
    id: "exterior-repairs",
    category: "handyman",
    categoryLabel: "Handyman",
    name: "Exterior Repairs",
    shortDesc:
      "Fixing loose siding, damaged fascia boards, loose trim, soffit panels, and exterior masonry.",
    icon: Home,
    includes: [
      "Loose or cracked vinyl siding repair",
      "Fascia board replacement & cladding",
      "Soffit panel re-securing",
      "Exterior caulking & seam sealing",
    ],
    whyItMatters:
      "Maintaining your exterior envelope prevents small animals, birds, and wind-driven water from penetrating exterior walls.",
  },
  {
    id: "caulking-sealing",
    category: "handyman",
    categoryLabel: "Handyman",
    name: "Caulking & Sealing",
    shortDesc:
      "High-grade weatherproof silicone and polyurethane sealing around windows, doors, and roof penetrations.",
    icon: Droplets,
    includes: [
      "Old, cracked sealant removal",
      "Deep joint cleaning & preparation",
      "Commercial-grade polyurethane sealant",
      "Smooth tooling for maximum adhesion",
    ],
    whyItMatters:
      "Professional caulking eliminates hidden drafts, prevents winter heat loss, and locks moisture out of wall cavities.",
  },
  {
    id: "minor-home-repairs",
    category: "handyman",
    categoryLabel: "Handyman",
    name: "Minor Home Repairs",
    shortDesc:
      "Practical solutions for everyday homeowner maintenance, loose railings, hardware, and minor fixes.",
    icon: CheckCircle2,
    includes: [
      "Railing, stair & step securing",
      "Drywall patching & touch-ups",
      "Weatherstripping renewal",
      "General carpentry & adjustments",
    ],
    whyItMatters:
      "Prompt attention to minor repairs prevents daily wear and tear from compounding into costly structural problems.",
  },
];

const categoryTabs: { key: ServiceCategory; label: string; count: number }[] = [
  { key: "all", label: "All", count: 28 },
  { key: "roofing", label: "Roofing", count: 10 },
  { key: "gutters", label: "Gutters", count: 6 },
  { key: "skylights", label: "Skylights", count: 4 },
  { key: "ventilation", label: "Ventilation", count: 3 },
  { key: "handyman", label: "Handyman", count: 5 },
];

export function Services() {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>("all");
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  // Filter services by category
  const filteredServices = useMemo(() => {
    if (activeCategory === "all") return servicesData;
    return servicesData.filter((s) => s.category === activeCategory);
  }, [activeCategory]);

  // Lock background scroll when modal is open
  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setSelectedService(null);
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [selectedService]);

  return (
    <section
      id="services"
      className="section-spacing bg-[#F7F9FC] border-b border-[#E2E8F0] scroll-mt-20"
    >
      <div className="container-site">
        {/* =========================================================================
            1. SECTION HEADER (Centered matching reference blueprint)
           ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 font-display text-xs sm:text-sm font-bold tracking-[0.2em] text-[#F5BF3C] uppercase mb-3">
            <span className="h-0.5 w-6 bg-[#F5BF3C]" />
            OUR SERVICES
            <span className="h-0.5 w-6 bg-[#F5BF3C]" />
          </div>

          <h2 className="font-display text-[clamp(2.2rem,4.5vw,3.8rem)] font-extrabold tracking-[-0.03em] text-[#0B1B30] uppercase leading-[1.04]">
            Complete Roofing &amp; Handyman Solutions
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#64748B] leading-relaxed max-w-2xl mx-auto">
            We offer a full range of roofing and handyman services to protect and improve your home or business. No job is too big or too small.
          </p>
        </div>

        {/* =========================================================================
            2. 4-COLUMN SERVICE CARD GRID (8 Featured Blueprint Services)
           ========================================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {blueprintServices.map((service) => {
            const Icon = service.icon;
            // Find corresponding full service item for modal
            const fullService =
              servicesData.find((s) => s.id === service.fullServiceId) ||
              servicesData[0];

            return (
              <div
                key={service.id}
                onClick={() => setSelectedService(fullService)}
                className="group relative cursor-pointer overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white flex flex-col justify-between shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-[#F5BF3C]"
              >
                {/* Image Banner */}
                <div className="relative h-44 w-full overflow-hidden bg-[#071525]">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071525]/85 via-black/20 to-black/30" />

                  {/* Floating Icon Badge */}
                  <div className="absolute bottom-3 left-4">
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-white shadow-md border border-[#E2E8F0] text-[#F5BF3C] transition-all duration-200 group-hover:bg-[#F5BF3C] group-hover:text-[#071525] group-hover:scale-105">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                </div>

                {/* Card Text Content */}
                <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="font-display text-base sm:text-lg font-bold uppercase tracking-tight text-[#0B1B30] group-hover:text-[#F5BF3C] transition-colors">
                      {service.name}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-[#64748B] leading-relaxed line-clamp-2">
                      {service.shortDesc}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-[#E2E8F0] flex items-center justify-between text-xs font-display font-bold tracking-wider uppercase text-[#0B1B30] group-hover:text-[#F5BF3C] transition-colors">
                    <span>Learn More</span>
                    <div className="grid h-6 w-6 place-items-center rounded-full bg-[#F7F9FC] text-[#F5BF3C] transition-all group-hover:bg-[#F5BF3C] group-hover:text-[#071525] group-hover:translate-x-1">
                      <ArrowRight className="h-3 w-3" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* =========================================================================
            3. EXPANDABLE 28-TRADE DIRECTORY TOGGLE
           ========================================================================= */}
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={() => setActiveCategory((prev) => (prev === "all" ? "roofing" : "all"))}
            className="inline-flex items-center gap-2 rounded-full border border-[#E2E8F0] bg-white px-5 py-2.5 text-xs font-display font-bold uppercase tracking-wider text-[#0B1B30] hover:border-[#F5BF3C] hover:bg-[#F7F9FC] transition-colors shadow-xs"
          >
            <span>Browse All 28 Specialized Trades (Roofing, Gutters, Skylights, Vents, Handyman)</span>
            <span className="text-[#F5BF3C]">↓</span>
          </button>
        </div>

        {/* =========================================================================
            4. BOTTOM CALL-TO-ACTION BLOCK
           ========================================================================= */}
        <div className="mt-14 sm:mt-18 rounded-2xl border border-[#E2E8F0] bg-white p-8 sm:p-12 shadow-sm text-center max-w-4xl mx-auto">
          <span className="eyebrow block mb-3 text-[#F5BF3C]">GET STARTED TODAY</span>
          <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase text-[#0B1B30] tracking-tight">
            Need Roofing or Home Repair Services?
          </h3>
          <p className="mt-3 text-sm sm:text-base text-[#64748B] max-w-xl mx-auto leading-relaxed">
            Get in touch with Diamond Roof Repair &amp; Handyman Services for
            reliable workmanship and a free estimate.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex h-12 sm:h-13 items-center justify-center gap-2.5 rounded-lg bg-[#F5BF3C] px-7 font-display text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#071525] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#FFD45A] hover:shadow-[0_4px_20px_rgba(245,191,60,0.35)] active:translate-y-0 active:scale-95 shadow-sm"
            >
              <span>Get a Free Estimate</span>
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href={business.phoneHref}
              className="w-full sm:w-auto inline-flex h-12 sm:h-13 items-center justify-center gap-2.5 rounded-lg border border-[#071525] bg-[#071525] px-7 font-display text-xs sm:text-sm font-bold uppercase tracking-wider text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#101E32] active:translate-y-0 active:scale-95"
            >
              <Phone className="h-4 w-4 fill-[#F5BF3C] text-[#F5BF3C]" />
              <span>Call Now: {business.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* =========================================================================
          5. SERVICE DETAILS MODAL
         ========================================================================= */}
      {selectedService && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-service-title"
          onClick={() => setSelectedService(null)}
          className="fixed inset-0 z-[120] flex items-center justify-center bg-[#071525]/85 p-3 sm:p-6 backdrop-blur-sm animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl max-h-[92vh] overflow-hidden rounded-2xl bg-white shadow-2xl border border-[#E2E8F0] flex flex-col animate-in zoom-in-95 duration-200"
          >
            {/* Cinematic Hero Image Banner */}
            <div className="relative h-56 sm:h-72 w-full overflow-hidden bg-[#071525] shrink-0">
              <img
                src={getServiceImage(selectedService)}
                alt={selectedService.name}
                className="h-full w-full object-cover"
              />
              {/* Gradient Scrims for text contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#071525] via-[#071525]/50 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent" />

              {/* Close Button on Image */}
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                aria-label="Close dialog"
                className="absolute top-4 right-4 grid h-10 w-10 place-items-center rounded-full bg-black/60 border border-white/20 text-white hover:bg-[#F5BF3C] hover:text-[#071525] transition-all backdrop-blur-md z-10 shadow-lg cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Top Category Badge */}
              <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-[#071525]/85 border border-white/20 px-3.5 py-1 text-[0.68rem] font-display font-bold tracking-wider uppercase text-[#FFD45A] backdrop-blur-md shadow-md">
                <span className="h-2 w-2 rounded-full bg-[#F5BF3C] animate-pulse" />
                <span>{selectedService.categoryLabel} Trade Service</span>
              </div>

              {/* Title & Location Banner on Image */}
              <div className="absolute bottom-4 left-5 right-5 sm:left-7 sm:right-7 text-white">
                <span className="text-[0.65rem] sm:text-xs font-display font-extrabold tracking-widest text-[#F5BF3C] uppercase block mb-1">
                  DIAMOND ROOF REPAIR &amp; HANDYMAN • BRAMPTON &amp; GTA
                </span>
                <h3
                  id="modal-service-title"
                  className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase text-white tracking-tight drop-shadow-md leading-tight"
                >
                  {selectedService.name}
                </h3>
              </div>
            </div>

            {/* Scrollable Body Content */}
            <div className="overflow-y-auto p-5 sm:p-7 space-y-6 flex-1">
              {/* Short Explanation */}
              <div className="p-4 rounded-xl bg-[#F7F9FC] border border-[#E2E8F0]">
                <p className="text-sm sm:text-base text-[#0B1B30] font-medium leading-relaxed">
                  {selectedService.shortDesc}
                </p>
              </div>

              {/* What The Service Includes */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-display text-xs font-bold uppercase tracking-wider text-[#0B1B30] flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-[#F5BF3C]" />
                    <span>What This Service Includes:</span>
                  </h4>
                  <span className="text-[0.68rem] font-display font-semibold text-[#64748B] uppercase">
                    Guaranteed Workmanship
                  </span>
                </div>
                <div className="grid gap-2.5 sm:grid-cols-2">
                  {selectedService.includes.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-2.5 p-3 rounded-lg bg-white border border-[#E2E8F0] shadow-xs text-xs sm:text-sm text-[#0B1B30]"
                    >
                      <CheckCircle2 className="h-4 w-4 text-[#F5BF3C] shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why It Matters */}
              <div className="p-4 rounded-xl bg-[#071525] text-white border border-[#101E32]">
                <div className="flex items-center gap-2 text-[#F5BF3C] mb-1.5">
                  <AlertTriangle className="h-4 w-4" />
                  <h4 className="font-display text-xs font-bold uppercase tracking-wider">
                    Why It Matters For Your Home:
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {selectedService.whyItMatters}
                </p>
              </div>

              {/* Modal CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href="#contact"
                  onClick={() => setSelectedService(null)}
                  className="flex-1 inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-[#F5BF3C] font-display text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#071525] hover:bg-[#FFD45A] hover:shadow-[0_4px_16px_rgba(245,191,60,0.35)] transition-all shadow-sm"
                >
                  <span>Request Free Estimate</span>
                  <ArrowRight className="h-4 w-4" />
                </a>

                <a
                  href={business.phoneHref}
                  className="flex-1 inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-[#071525] bg-[#071525] font-display text-xs sm:text-sm font-bold uppercase tracking-wider text-white hover:bg-[#101E32] transition-colors"
                >
                  <Phone className="h-4 w-4 fill-[#F5BF3C] text-[#F5BF3C]" />
                  <span>Call Now: {business.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
