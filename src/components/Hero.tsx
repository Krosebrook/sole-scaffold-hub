import { Button } from "@/components/ui/button";
import productMockup1 from "@/assets/product-mockup-1.png";
import productMockup2 from "@/assets/product-mockup-2.png";
import productMockup3 from "@/assets/product-mockup-3.png";
import { ArrowRight, Play, Star, Users, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Modern clean background */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 text-sm font-medium">
              <Star className="w-4 h-4 text-primary" />
              Trusted by Fortune 500 Companies
            </div>
            
            {/* Main headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-white">Premium</span>
              <br />
              <span className="text-primary">Corporate</span>
              <br />
              <span className="text-white">Merchandise</span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-white/80 max-w-2xl leading-relaxed">
              Transform your brand with AI-powered customization. From concept to delivery, 
              we create branded products that leave lasting impressions.
            </p>
            
            {/* Stats */}
            <div className="flex flex-wrap gap-8 text-white/70">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                <span className="font-semibold">500+</span>
                <span>Companies</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-primary" />
                <span className="font-semibold">50k+</span>
                <span>Products</span>
              </div>
            </div>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="hero" size="lg" className="group bg-primary hover:bg-primary/90 text-white">
                Get Started Free
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="hero-secondary" size="lg" className="group bg-white/10 text-white border-white/20 hover:bg-white/20">
                <Play className="w-5 h-5" />
                Watch Demo
              </Button>
            </div>
            
            {/* Trust line */}
            <p className="text-white/50 text-sm">
              No credit card required • Setup in under 5 minutes
            </p>
          </div>
          
          {/* Right content - Product showcase */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                  <img 
                    src={productMockup1} 
                    alt="Custom branded merchandise example" 
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                  <img 
                    src={productMockup2} 
                    alt="Professional branded products" 
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
              <div className="pt-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                  <img 
                    src={productMockup3} 
                    alt="High-quality corporate merchandise" 
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;