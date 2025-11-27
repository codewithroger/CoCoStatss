import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { flashcards } from "./LearnSection";

export function FlashcardCarousel() {
  const [currentCard, setCurrentCard] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCard((prev) => (prev + 1) % flashcards.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const progressPercentage = ((currentCard + 1) / flashcards.length) * 100;

  return (
    <section className="py-12 px-4 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center" data-testid="heading-flashcard-carousel">
          Flashcard Carousel - Auto Learning
        </h2>

        <div
          className="relative"
          data-testid="flashcard-carousel-container"
        >
          <Card className="min-h-96 flex flex-col justify-between overflow-hidden hover-elevate">
            <CardContent className="flex-1 flex flex-col justify-center items-center p-8 text-center space-y-6">
              <div>
                <p className="text-xs text-muted-foreground mb-3 font-semibold">QUESTION</p>
                <p className="text-xl md:text-2xl font-semibold leading-relaxed">
                  {flashcards[currentCard].q}
                </p>
              </div>

              <div className="w-full h-px bg-border"></div>

              <div>
                <p className="text-xs text-muted-foreground mb-3 font-semibold">ANSWER</p>
                <p className="text-lg md:text-xl leading-relaxed text-foreground/90">
                  {flashcards[currentCard].a}
                </p>
              </div>

              <div className="pt-4 space-y-2 w-full">
                <div className="flex justify-between items-center text-xs text-muted-foreground">
                  <span>Card {currentCard + 1} of {flashcards.length}</span>
                  <span>Auto-advance in 5s</span>
                </div>
                <div className="w-full h-1 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary transition-all duration-500"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex gap-1 mt-4 justify-center">
            {flashcards.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentCard(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentCard
                    ? "bg-primary w-8"
                    : "bg-muted-foreground/30 w-2 hover-elevate"
                }`}
                data-testid={`button-carousel-dot-${index}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
