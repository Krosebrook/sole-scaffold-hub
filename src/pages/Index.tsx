import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Footer from "@/components/Footer";
import SkipNavigation from "@/components/SkipNavigation";
import StructuredData from "@/components/StructuredData";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SkipNavigation />
      <StructuredData />
      <Navigation />
      <main id="main-content">
        <Hero />
        <Services />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
