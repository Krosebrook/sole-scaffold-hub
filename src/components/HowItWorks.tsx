import { Button } from "@/components/ui/button";
import { Upload, Wand2, ShoppingCart, CheckCircle } from "lucide-react";

const steps = [
  {
    number: 1,
    icon: Upload,
    title: "Upload Your Brand",
    description: "Share your logo, brand guidelines, and design preferences with our secure platform."
  },
  {
    number: 2,
    icon: Wand2,
    title: "AI Creates Mockups",
    description: "Our AI generates custom product designs that perfectly match your brand identity."
  },
  {
    number: 3,
    icon: ShoppingCart,
    title: "Review & Order",
    description: "Approve designs, customize quantities, and place orders with transparent pricing."
  },
  {
    number: 4,
    icon: CheckCircle,
    title: "Quality Delivery",
    description: "Receive professionally crafted merchandise with global tracking and quality guarantees."
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-gradient-hero">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            From brand upload to delivery, our streamlined process makes custom merchandise effortless
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-white/20 z-0">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-white/20 rotate-45"></div>
                </div>
              )}
              
              <div className="relative z-10">
                {/* Step number circle */}
                <div className="mx-auto w-24 h-24 bg-primary rounded-full flex items-center justify-center mb-6 shadow-brand">
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                
                {/* Step number badge */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-white text-primary rounded-full flex items-center justify-center text-sm font-bold">
                  {step.number}
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="hero" size="lg" className="bg-white text-primary hover:bg-white/90">
            Start Your First Project
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;