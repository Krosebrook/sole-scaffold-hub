import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <section id="features">
          <Features />
        </section>
        <section id="how-it-works">
          <HowItWorks />
        </section>
        <section id="pricing">
          <Pricing />
        </section>
        <section id="contact">
          {/* Contact section will be added when Supabase is connected */}
          <div className="py-20 bg-muted text-center">
            <div className="max-w-4xl mx-auto px-6">
              <h2 className="text-3xl font-bold text-accent-foreground mb-4">
                Ready to Transform Your Merchandise?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Contact our sales team to discuss your custom requirements
              </p>
              <div className="text-muted-foreground">
                <p>Email: sales@solemuchbetter.com</p>
                <p>Phone: 1-800-SOLE-BETTER</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
