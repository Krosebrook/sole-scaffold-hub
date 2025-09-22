import NavigationEnhanced from "@/components/NavigationEnhanced";
import HeroEnhanced from "@/components/HeroEnhanced";
import Services from "@/components/Services";
import About from "@/components/About";
import Footer from "@/components/Footer";
import SkipNavigation from "@/components/SkipNavigation";
import StructuredData from "@/components/StructuredData";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SkipNavigation />
      <StructuredData />
      <NavigationEnhanced />
      <main id="main-content">
        <HeroEnhanced />
        <Services />
        <About />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
