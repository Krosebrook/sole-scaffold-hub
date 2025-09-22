import React from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import brandTshirtModel from "@/assets/brand-tshirt-model.png";

// Helper function for smooth scrolling
const handleSmoothScroll = (href: string) => {
  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen bg-background relative overflow-hidden pt-20">
      {/* Clean white background with subtle patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(229,62,62,0.03),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(26,54,93,0.03),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <Badge variant="outline" className="text-primary border-primary/30 px-6 py-2 text-sm font-semibold">
                ✨ Premium Custom Solutions
              </Badge>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-accent leading-tight">
                STEP INTO THE
                <span className="block text-primary">
                  BRAND EXPERIENCE
                </span>
              </h1>
              
              <p className="font-script text-3xl lg:text-4xl text-primary mb-6">
                Custom Shoes & Events
              </p>
              
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                Elevate your brand with custom footwear, memorable corporate events, 
                and premium branded merchandise that leaves a lasting impression.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => handleSmoothScroll("#shoes")}
                size="lg" 
                className="bg-gradient-cta text-primary-foreground px-10 py-4 text-lg font-bold rounded-brand-button shadow-brand hover:shadow-xl transition-all duration-200 hover-scale"
              >
                CUSTOM SHOES
              </Button>
              <Button 
                onClick={() => handleSmoothScroll("#events")}
                variant="outline" 
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-10 py-4 text-lg font-bold rounded-brand-button transition-all duration-200"
              >
                CORPORATE EVENTS
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-8 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">500+</div>
                <div className="text-sm text-muted-foreground">Custom Orders</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">98%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">24hr</div>
                <div className="text-sm text-muted-foreground">Quick Response</div>
              </div>
            </div>
          </div>

          {/* Right Content - Product Showcase */}
          <div className="relative animate-scale-in">
            {/* Main product container with clean white styling */}
            <div className="relative bg-card backdrop-blur-sm rounded-brand-hero p-8 border border-border shadow-card">
              <img 
                src={brandTshirtModel} 
                alt="Custom Branded Shoe Display" 
                className="w-full h-auto rounded-brand-card"
              />
              
              {/* Floating badges with brand colors */}
              <div className="absolute -top-4 -left-4 bg-gradient-cta text-primary-foreground px-6 py-3 rounded-full text-sm font-bold shadow-brand animate-pulse">
                Premium Quality
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground px-6 py-3 rounded-full text-sm font-bold shadow-elegant animate-pulse">
                Fast Delivery
              </div>
            </div>
            
            {/* Background decorative elements with brand colors */}
            <div className="absolute -z-10 top-8 left-8 w-72 h-72 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl"></div>
            <div className="absolute -z-10 bottom-8 right-8 w-64 h-64 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;