import { ArrowRight, Sparkles, Scan, Recycle } from "lucide-react";
import { Button } from "@/components/ui/button";
import pollutedBeachImage from "@/assets/polluted-beach.jpg";
import { Client } from "@gradio/client";
import { useRef, useState } from "react";

// Define the type for the prediction data
interface Confidence {
  label: string;
  confidence: number;
}

interface Prediction {
  label: string;
  confidences: Confidence[];
}

const HeroSection = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [prediction, setPrediction] = useState<Prediction[] | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [scanCompleted, setScanCompleted] = useState(false);

  const handleAnalyzeClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      setIsLoading(true);
      setScanCompleted(false);
      setPrediction(null);

      try {
        const client = await Client.connect("https://39f8597ac7b633d416.gradio.live/");
        const result = await client.predict("/predict", {
          img: file,
        });
        setPrediction(result.data as Prediction[]);
        setScanCompleted(true);
      } catch (error) {
        console.error("Error analyzing image:", error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const getScanText = () => {
    if (isLoading) {
      return "Loading...";
    } else if (scanCompleted) {
      return "Completed";
    } else {
      return "Scanning...";
    }
  };

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
              ML-Powered Waste Detection
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Identify & Classify{" "}
              <span className="gradient-text">Waste Materials</span>{" "}
              with AI-ML analysis
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Upload an image of waste material and get an instant AI-ML analysis of its composition.
              Join the movement for smarter waste management.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
                accept="image/*"
              />
              <Button variant="hero" size="xl" onClick={handleAnalyzeClick}>
                Start Analyzing
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mt-12 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <div>
                <div className="font-display text-3xl font-bold text-foreground">98%</div>
                <div className="text-sm text-muted-foreground">Accuracy Rate</div>
              </div>
              <div>
                <div className="font-display text-3xl font-bold text-foreground">5</div>
                <div className="text-sm text-muted-foreground">Material Classes</div>
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
                    src={selectedImage || pollutedBeachImage}
                    alt="Polluted beach with plastic waste for AI detection"
                    className="w-full h-full object-cover"
                  />
                  {/* AI scanning overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    {(isLoading || scanCompleted) &&
                      <div className="w-24 h-24 rounded-full border-4 border-primary/50 animate-ping" style={{ animationDuration: "2s" }} />
                    }
                  </div>
                  <div className="absolute top-4 left-4 glass-card rounded-lg px-3 py-1.5 border border-primary/30">
                    <div className="flex items-center gap-2">
                      <Scan className={`w-4 h-4 text-primary ${isLoading ? 'animate-pulse' : ''}`} />
                      <span className="text-xs font-medium text-primary">{getScanText()}</span>
                    </div>
                  </div>
                </div>

                {/* Detection results preview */}
                {prediction && prediction[0] && (
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center justify-between p-3 rounded-xl bg-secondary/50">
                      <span className="text-sm font-medium">Top Match</span>
                      <span className="text-sm font-bold text-primary">{prediction[0].label}</span>
                    </div>
                    <div className="space-y-2">
                      {prediction[0].confidences.map((item, index) => (
                        <div key={index} className="p-2 rounded-lg bg-secondary/30">
                          <div className="flex justify-between items-center text-sm">
                            <span className="font-medium">{item.label}</span>
                            <span className="font-bold text-foreground">{(item.confidence * 100).toFixed(2)}%</span>
                          </div>
                          <div className="w-full bg-secondary rounded-full h-1.5 mt-1">
                            <div
                              className="bg-primary h-1.5 rounded-full"
                              style={{ width: `${item.confidence * 100}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
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
    </section>
  );
};

export default HeroSection;
