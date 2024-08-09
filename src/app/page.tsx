import { projects } from "@/data/data";
import Header from "@/components/Header";
import AboutMeSection from "@/components/AboutMeSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import FadeInSection from "@/components/FadeInSection";

export default function Home() {
  return (
    <main className="min-h-screen min-w-[360px] py-24 px-12 flex flex-col items-center lg:flex-row lg:items-start lg:py-0">
      <Header />
      <div className="w-full space-y-12 mt-24 lg:mt-0 lg:py-24">
        <FadeInSection>
          <AboutMeSection />
        </FadeInSection>
        <FadeInSection>
          <SkillsSection />
        </FadeInSection>
        <FadeInSection>
          <ProjectsSection projects={projects} />
        </FadeInSection>
      </div>
    </main>
  );
}
