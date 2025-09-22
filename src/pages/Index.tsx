import NavigationEnhanced from "@/components/NavigationEnhanced";
import HeroEnhanced from "@/components/HeroEnhanced";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import Newsletter from "@/components/Newsletter";
import ContactForm from "@/components/ContactForm";
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
        <HowItWorks />
        <About />
        <Testimonials />
        <Blog />
        <Newsletter />
        <ContactForm />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
