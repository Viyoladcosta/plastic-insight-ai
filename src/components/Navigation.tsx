import { Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center glow-effect">
              <Leaf className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-display text-xl font-bold text-foreground">
              PlasticSense<span className="gradient-text">AI</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
              How it Works
            </a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
            <Button variant="default" size="sm">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
