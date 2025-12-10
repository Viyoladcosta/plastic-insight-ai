import { ArrowRight, Sparkles, Scan, Recycle } from "lucide-react";
import { Button } from "@/components/ui/button";
import pollutedBeachImage from "@/assets/polluted-beach.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen hero-gradient overflow-hidden pt-24">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 py-16 lg:py-24">
          {/* Left content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6 animate-fade-up">
              <Sparkles className="w-4 h-4" />
              AI-Powered Plastic Detection
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Identify & Track{" "}
              <span className="gradient-text">Plastic Waste</span>{" "}
              with AI Precision
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Upload images, scan materials, and get instant AI analysis on plastic types, 
              recyclability, and environmental impact. Join the movement for smarter waste management.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <Button variant="hero" size="xl">
                Start Analyzing
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="hero-outline" size="xl">
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mt-12 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <div>
                <div className="font-display text-3xl font-bold text-foreground">98%</div>
                <div className="text-sm text-muted-foreground">Accuracy Rate</div>
              </div>
              <div>
                <div className="font-display text-3xl font-bold text-foreground">50+</div>
                <div className="text-sm text-muted-foreground">Plastic Types</div>
              </div>
              <div>
                <div className="font-display text-3xl font-bold text-foreground">1M+</div>
                <div className="text-sm text-muted-foreground">Scans Completed</div>
              </div>
            </div>
          </div>

          {/* Right visual */}
          <div className="flex-1 relative animate-scale-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative w-full max-w-lg mx-auto">
              {/* Main card with beach image */}
              <div className="glass-card rounded-3xl p-4 border border-border/50">
                <div className="aspect-video rounded-2xl relative overflow-hidden">
                  <img 
                    src={pollutedBeachImage} 
                    alt="Polluted beach with plastic waste for AI detection" 
                    className="w-full h-full object-cover"
                  />
                  {/* AI scanning overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full border-4 border-primary/50 animate-ping" style={{ animationDuration: "2s" }} />
                  </div>
                  <div className="absolute top-4 left-4 glass-card rounded-lg px-3 py-1.5 border border-primary/30">
                    <div className="flex items-center gap-2">
                      <Scan className="w-4 h-4 text-primary animate-pulse" />
                      <span className="text-xs font-medium text-primary">Scanning...</span>
                    </div>
                  </div>
                </div>
                
                {/* Detection results preview */}
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-secondary/50">
                    <span className="text-sm font-medium">Detected Items</span>
                    <span className="text-sm font-bold text-primary">47 objects</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="p-2 rounded-lg bg-secondary/30 text-center">
                      <div className="text-xs text-muted-foreground">Bottles</div>
                      <div className="text-sm font-bold text-foreground">18</div>
                    </div>
                    <div className="p-2 rounded-lg bg-secondary/30 text-center">
                      <div className="text-xs text-muted-foreground">Bags</div>
                      <div className="text-sm font-bold text-foreground">12</div>
                    </div>
                    <div className="p-2 rounded-lg bg-secondary/30 text-center">
                      <div className="text-xs text-muted-foreground">Other</div>
                      <div className="text-sm font-bold text-foreground">17</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-destructive/20 border border-destructive/30">
                    <span className="text-sm font-medium text-destructive">Pollution Level</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-destructive text-destructive-foreground font-semibold">Severe</span>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 glass-card rounded-2xl p-4 border border-border/50 animate-float">
                <Recycle className="w-8 h-8 text-accent" />
              </div>
              <div className="absolute -bottom-4 -left-4 glass-card rounded-2xl px-4 py-3 border border-border/50 animate-float" style={{ animationDelay: "1s" }}>
                <span className="text-sm font-semibold gradient-text">AI Powered</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
