import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with shoe tread pattern */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="space-y-8">
          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="text-white">Step Into The</span>
            <br />
            <span className="text-primary bg-white px-4 py-2 rounded-brand-button inline-block transform -rotate-1">
              Brand Experience
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Transform your corporate merchandise with AI-powered customization. 
            From concept to delivery, create branded products that leave lasting impressions.
          </p>
          
          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-white/70 text-sm">
            <span className="flex items-center gap-2">
              ✓ Fortune 500 Trusted
            </span>
            <span className="flex items-center gap-2">
              ✓ 50k+ Products Customized
            </span>
            <span className="flex items-center gap-2">
              ✓ AI-Powered Design
            </span>
          </div>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button variant="hero" size="lg" className="group">
              Get Started Free
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="hero-secondary" size="lg" className="group">
              <Play className="w-5 h-5" />
              Watch Demo
            </Button>
          </div>
          
          {/* Secondary CTA */}
          <p className="text-white/60 text-sm">
            No credit card required • Setup in under 5 minutes
          </p>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;