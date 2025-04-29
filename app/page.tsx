import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import ScreenshotSection from "./components/ScreenshotSection";
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
          <ScreenshotSection />
        </div>
        <div className="w-full bg-secondary">
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
