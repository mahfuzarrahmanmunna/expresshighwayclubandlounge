import Affiliations from "./components/Affiliations/Affiliations";
import ContactSection from "./components/ContactSection/ContactSection";
import ExperienceSection from "./components/ExperienceSection/ExperienceSection";
import FacilitiesSection from "./components/FacilitiesSection/FacilitiesSection";
import FloatingContact from "./components/FloatingContact/FloatingContact";
import Footer from "./components/Footer/Footer";
import GallerySection from "./components/GallerySection/GallerySection";
import Hero from "./components/Hero/Hero";
import HowItWorksSection from "./components/HowItWorksSection/HowItWorksSection";
import MembershipSection from "./components/MembershipSection/MembershipSection";
import Navbar from "./components/Navbar/Navbar";
import TheInnSection from "./components/TheInnSection/TheInnSection";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="relative bg-[#0B0B0D]">
        <Hero />
        <ExperienceSection />
        <MembershipSection/>
        <FacilitiesSection/>
        <HowItWorksSection/>
        {/* <TheInnSection/> */}
        <GallerySection/>
        <Affiliations/>
        <ContactSection/>
        <Footer/>
        <FloatingContact/>
        {/* <FeatureSection/> */}
      </main>
    </>
  );
}