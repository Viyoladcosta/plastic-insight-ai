import { Camera, Brain, BarChart3, Globe, Zap, Shield } from "lucide-react";

const features = [
  {
    icon: Camera,
    title: "Instant Scanning",
    description: "Snap a photo or upload an image to instantly identify plastic types and materials.",
  },
  {
    icon: Brain,
    title: "AI Analysis",
    description: "Advanced machine learning models trained on millions of samples for precise identification.",
  },
  {
    icon: BarChart3,
    title: "Impact Tracking",
    description: "Monitor your environmental contribution with detailed analytics and reports.",
  },
  {
    icon: Globe,
    title: "Global Database",
    description: "Access comprehensive recycling guidelines for different regions worldwide.",
  },
  {
    icon: Zap,
    title: "Real-time Results",
    description: "Get instant feedback with processing times under 2 seconds per analysis.",
  },
  {
    icon: Shield,
    title: "Verified Data",
    description: "Backed by environmental research and validated recycling standards.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-background relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Powerful Features for{" "}
            <span className="gradient-text">Smarter Recycling</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to identify, track, and properly dispose of plastic waste.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group glass-card rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
