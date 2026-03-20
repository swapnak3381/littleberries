import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProgramsSection from "./components/ProgramsSection";
import AchievementsSection from "./components/AchievementsSection";
import GallerySection from "./components/GallerySection";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-[#f8fafc]">
      <HeroSection />
      <AboutSection />
      <ProgramsSection />
      <AchievementsSection />
      <GallerySection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}
