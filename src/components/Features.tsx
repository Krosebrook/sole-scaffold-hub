import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Palette, Zap, Shield, Truck, BarChart3, Users } from "lucide-react";

const features = [
  {
    icon: Palette,
    title: "AI-Powered Design",
    description: "Advanced AI creates mockups and designs tailored to your brand guidelines in seconds."
  },
  {
    icon: Zap,
    title: "Instant Customization",
    description: "Real-time product customization with live previews and brand compliance checks."
  },
  {
    icon: Shield,
    title: "Brand Protection",
    description: "Automated brand guideline enforcement ensures consistency across all merchandise."
  },
  {
    icon: Truck,
    title: "Global Fulfillment",
    description: "Worldwide shipping network with quality control and tracking at every step."
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Comprehensive insights into order patterns, popular products, and ROI metrics."
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Multi-level approval workflows with territory management and sales team coordination."
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-accent-foreground mb-4">
            Why Choose SoleMuchBetter?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed to streamline your custom merchandise workflow
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-card hover:shadow-brand transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-accent-foreground">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;