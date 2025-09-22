import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import brandTshirtModel from "@/assets/brand-tshirt-model.png";
const Hero = () => {
  const handleSmoothScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section className="relative min-h-screen bg-gray-700 overflow-hidden">
      {/* Dark gray background */}
      <div className="absolute inset-0 bg-gray-700"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left content */}
          <div className="space-y-8 animate-fade-in">
            {/* Trust Badge */}
            
            
            {/* Script headline */}
            <h2 className="text-4xl md:text-5xl font-script text-white italic animate-fade-in">
              Custom Branding
            </h2>
            
            {/* Main headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white uppercase tracking-wide animate-scale-in">
              ELEVATE YOUR BRAND
              <span className="text-primary animate-pulse">.</span>
            </h1>
            
            {/* Enhanced description */}
            <div className="space-y-4 animate-fade-in">
              <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed">
                SOLEMUCHBETTER Branding Solutions delivers <span className="text-primary font-semibold">distinctive high-impact merchandise</span> 
                globally through our streamlined workflow: Quote → Approval → In-house Production → Shopify Fulfillment.
              </p>
              <p className="text-base text-white/80 max-w-2xl">
                With zero geographic restrictions and our dedicated production facility, we complete your 
                brand's story with purpose and global reach.
              </p>
            </div>

            {/* Enhanced CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-bold tracking-wide hover-scale shadow-xl hover:shadow-2xl transition-all duration-300" onClick={() => handleSmoothScroll('#services')}>
                EXPLORE SERVICES
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-700 px-8 py-4 rounded-lg font-bold tracking-wide hover-scale transition-all duration-300" onClick={() => handleSmoothScroll('#contact')}>
                GET QUOTE
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-6 pt-4 text-white/70 text-sm animate-fade-in">
              <div className="flex items-center gap-2">
                <span className="text-primary">✓</span>
                Global Service
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary">✓</span>
                In-House Production
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary">✓</span>
                Zero Minimums
              </div>
            </div>
          </div>
          
          {/* Right side */}
          <div className="relative animate-scale-in">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-all duration-300 hover-scale">
              <img src={brandTshirtModel} alt="SoleMuchBetter branded t-shirt showcase - custom apparel and branded merchandise" className="w-full h-auto rounded-lg" loading="eager" />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-primary text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse">
              Premium Quality
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white text-gray-700 px-4 py-2 rounded-full text-sm font-bold shadow-lg">
              Fast Delivery
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;