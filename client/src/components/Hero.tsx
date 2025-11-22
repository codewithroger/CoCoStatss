import { Button } from "@/components/ui/button";
import { BookOpen, Brain } from "lucide-react";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-background to-accent/5"></div>
      
      <div className="absolute inset-0 -z-10 opacity-[0.03]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="correlation-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <text x="10" y="30" fontSize="40" fill="currentColor" opacity="0.5">ρ</text>
              <text x="60" y="70" fontSize="30" fill="currentColor" opacity="0.4">r</text>
              <text x="30" y="90" fontSize="25" fill="currentColor" opacity="0.3">σ</text>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#correlation-pattern)" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto text-center animate-fade-in">
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20" data-testid="badge-interactive-learning">
            <Brain className="w-4 h-4" />
            <span className="text-sm font-medium">Interactive Learning</span>
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground to-muted-foreground" data-testid="heading-hero">
          Master Coefficient & Correlation
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto" data-testid="text-hero-description">
          Explore the relationships between variables through interactive flashcards, 
          engaging quizzes, and dynamic visualizations. Perfect for students and professionals 
          looking to strengthen their statistical understanding.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            size="lg" 
            onClick={() => scrollToSection('flashcards')}
            data-testid="button-start-learning"
          >
            <BookOpen className="w-5 h-5 mr-2" />
            Start Learning
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => scrollToSection('quiz')}
            data-testid="button-take-quiz"
          >
            Take Quiz
          </Button>
        </div>
      </div>
    </section>
  );
}
