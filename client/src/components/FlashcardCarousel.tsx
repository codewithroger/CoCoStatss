import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { flashcards } from "./LearnSection";

export function FlashcardCarousel() {
  const [currentCard, setCurrentCard] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const toggleFlip = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setIsFlipped(!isFlipped);
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  const nextCard = () => {
    setCurrentCard((prev) => (prev + 1) % flashcards.length);
    setIsFlipped(false);
  };

  const prevCard = () => {
    setCurrentCard((prev) => (prev - 1 + flashcards.length) % flashcards.length);
    setIsFlipped(false);
  };

  return (
    <section className="py-12 px-4 bg-gradient-to-br from-primary/5 to-accent/5" id="flashcard-carousel" data-testid="section-flashcard-carousel">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center" data-testid="heading-flashcard-carousel">
          Interactive Flashcard Learning
        </h2>

        <div
          className="relative"
          data-testid="flashcard-carousel-container"
        >
          <Card 
            className={`min-h-96 flex flex-col justify-between overflow-hidden cursor-pointer hover-elevate transition-transform ${isAnimating ? 'flashcard-flip' : ''}`}
            onClick={toggleFlip}
            data-testid="button-flashcard-flip"
          >
            <CardContent className="flex-1 flex flex-col justify-center items-center p-8 text-center space-y-6">
              <div>
                <p className="text-xs text-muted-foreground mb-3 font-semibold">
                  {isFlipped ? "ANSWER" : "QUESTION"}
                </p>
                <p className="text-xl md:text-2xl font-semibold leading-relaxed">
                  {isFlipped ? flashcards[currentCard].a : flashcards[currentCard].q}
                </p>
              </div>

              <div className="pt-4 space-y-3 w-full">
                <p className="text-xs text-muted-foreground italic">Click to {isFlipped ? "see question" : "reveal answer"}</p>
                <div className="flex justify-between items-center text-xs text-muted-foreground">
                  <span>Card {currentCard + 1} of {flashcards.length}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex gap-4 mt-6 justify-center">
            <button
              onClick={prevCard}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover-elevate"
              data-testid="button-flashcard-prev"
            >
              Previous
            </button>
            <button
              onClick={nextCard}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover-elevate"
              data-testid="button-flashcard-next"
            >
              Next
            </button>
          </div>

          <div className="flex gap-1 mt-4 justify-center flex-wrap">
            {flashcards.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentCard(index);
                  setIsFlipped(false);
                }}
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
