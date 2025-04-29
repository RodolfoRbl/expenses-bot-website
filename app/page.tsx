import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection"; // Ensure this file exists or correct the path
import PricingSection from "./components/PricingSection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center min-h-screen">
        <HeroSection />
        <div className="w-full bg-secondary">
          <FeaturesSection />
        </div>
        <div className="w-full bg-white">
          <PricingSection />
        </div>
        <div className="w-full bg-white">
          <FAQSection />
        </div>
        <Footer />
      </main>
    </>
  );
}
