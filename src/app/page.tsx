import { projects } from "@/data/data";
import Header from "@/components/Header";
import AboutMeSection from "@/components/AboutMeSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <main className="min-h-screen min-w-[400px] max-w-5xl py-24 lg:px-24 px-12 space-y-12 flex flex-col items-center">
      <Header />
      <AboutMeSection />
      <SkillsSection />
      <ProjectsSection projects={projects} />
    </main>
  );
}
