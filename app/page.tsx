import { Hero } from "@/components/sections";
import { ResearchAreas } from "@/components/sections/research-areas";
import { GlasgowProgramPreview } from "@/components/sections/glasgow-program-preview";
import { CoreLabPreview } from "@/components/sections/core-lab-preview";
import { PublicationsPreview } from "@/components/sections/publications-preview";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ResearchAreas />
      <GlasgowProgramPreview />
      <CoreLabPreview />
      <PublicationsPreview />
    </>
  );
}
