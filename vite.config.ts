import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const userDir = "C:/Users/hp/.gemini/antigravity-ide/brain/eb653358-f5c7-4f6e-809d-ed801d160752/.user_uploaded";
const imageCopies = [
  { src: `${userDir}/media_1790367606885.png`, dest: path.resolve(__dirname, "src/assets/diamond-logo.png") },
  { src: `${userDir}/media_1790370080159.jpg`, dest: path.resolve(__dirname, "src/assets/project-lake-roof.jpg") },
  { src: `${userDir}/media_1790370021350.jpg`, dest: path.resolve(__dirname, "src/assets/project-sunset-roof.jpg") },
  { src: `${userDir}/media_1790369996520.jpg`, dest: path.resolve(__dirname, "src/assets/project-skylight-roof.jpg") },
  { src: `${userDir}/media_1790369996320.jpg`, dest: path.resolve(__dirname, "src/assets/project-gables-home.jpg") },
  { src: `${userDir}/media_1790369973621.jpg`, dest: path.resolve(__dirname, "src/assets/project-baywindow-home.jpg") },
  { src: "C:/Users/hp/.gemini/antigravity-ide/brain/eb653358-f5c7-4f6e-809d-ed801d160752/cinematic_hero_roofer_1790371081755.jpg", dest: path.resolve(__dirname, "src/assets/hero-cinematic-roofer.jpg") },
  { src: "C:/Users/hp/.gemini/antigravity-ide/brain/eb653358-f5c7-4f6e-809d-ed801d160752/service_roof_install_1790372365995.jpg", dest: path.resolve(__dirname, "src/assets/service-roof-install.jpg") },
  { src: "C:/Users/hp/.gemini/antigravity-ide/brain/eb653358-f5c7-4f6e-809d-ed801d160752/service_attic_vent_1790372436297.jpg", dest: path.resolve(__dirname, "src/assets/service-attic-vent.jpg") },
  { src: "C:/Users/hp/.gemini/antigravity-ide/brain/eb653358-f5c7-4f6e-809d-ed801d160752/service_gutters_pro_1790372451513.jpg", dest: path.resolve(__dirname, "src/assets/service-gutters-pro.jpg") },
  { src: "C:/Users/hp/.gemini/antigravity-ide/brain/eb653358-f5c7-4f6e-809d-ed801d160752/about_contractor_team_1790372864630.jpg", dest: path.resolve(__dirname, "src/assets/about-contractor-team.jpg") },
  { src: "C:/Users/hp/.gemini/antigravity-ide/brain/eb653358-f5c7-4f6e-809d-ed801d160752/before_after_roof_1790372885693.jpg", dest: path.resolve(__dirname, "src/assets/before-after-roof.jpg") },
  { src: "C:/Users/hp/.gemini/antigravity-ide/brain/eb653358-f5c7-4f6e-809d-ed801d160752/service_roof_inspect_1790372907599.jpg", dest: path.resolve(__dirname, "src/assets/service-roof-inspect.jpg") },
  { src: "C:/Users/hp/.gemini/antigravity-ide/brain/eb653358-f5c7-4f6e-809d-ed801d160752/service_emergency_repair_1790372928270.jpg", dest: path.resolve(__dirname, "src/assets/service-emergency-repair.jpg") },
  { src: "C:/Users/hp/.gemini/antigravity-ide/brain/eb653358-f5c7-4f6e-809d-ed801d160752/service_leak_detect_1790372960123.jpg", dest: path.resolve(__dirname, "src/assets/service-leak-detect.jpg") },
];

for (const img of imageCopies) {
  try {
    if (fs.existsSync(img.src)) {
      fs.copyFileSync(img.src, img.dest);
    }
  } catch (e) {
    console.error("Image copy error:", img.dest, e);
  }
}

export default defineConfig({
  vite: {
    server: {
      fs: {
        allow: [
          "c:/Users/hp/Downloads/wmk",
          "C:/Users/hp/.gemini/antigravity-ide/brain",
        ],
      },
    },
  },
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
});
