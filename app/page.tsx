import AboutSection from "@/components/AboutSection";
import DonationSection from "@/components/DonationSection";
import Footer from "@/components/Footer";
import GetInvolvedSection from "@/components/GetInvolvedSection";
import HeroSection from "@/components/HeroSection";
import ImpactProjectsSection from "@/components/ImpactProjectsSection";
import Navbar from "@/components/Navbar";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ImpactProjectsSection />
        <DonationSection />
        <GetInvolvedSection />
      </main>
      <Footer />
    </div>
  );
}
