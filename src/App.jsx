import AboutSection from "./components/AboutSection.jsx";
import ContactSection from "./components/ContactSection.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import ProjectsSection from "./components/ProjectsSection.jsx";
import SkillsSection from "./components/SkillsSection.jsx";
import TechStack from "./components/TechStack.jsx";

export default function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#0b0f14] text-slate-200 selection:bg-lime-300 selection:text-slate-950">
      <Header />
      <main>
        <Hero />
        <TechStack />
        <ProjectsSection />
        <AboutSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
