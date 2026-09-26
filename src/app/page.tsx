import ContactSection from "./components/ContactSection/ContactSection";
import ExperienceSection from "./components/ExperienceSection/ExperienceSection";
import FacilitiesSection from "./components/FacilitiesSection/FacilitiesSection";
import Footer from "./components/Footer/Footer";
import GallerySection from "./components/GallerySection/GallerySection";
import Hero from "./components/Hero/Hero";
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
        <TheInnSection/>
        <GallerySection/>
        <ContactSection/>
        <Footer/>
        {/* <FeatureSection/> */}
      </main>
    </>
  );
}