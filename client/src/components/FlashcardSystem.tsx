import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ChevronLeft, ChevronRight, RotateCw } from "lucide-react";
import type { Flashcard } from "@shared/schema";

interface FlashcardSystemProps {
  flashcards: Flashcard[];
  onCardViewed: (cardId: string) => void;
  viewedCards: string[];
}

export function FlashcardSystem({ flashcards, onCardViewed, viewedCards }: FlashcardSystemProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const currentCard = flashcards[currentIndex];
  const progress = ((viewedCards.length) / flashcards.length) * 100;

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    if (!isFlipped && !viewedCards.includes(currentCard.id)) {
      onCardViewed(currentCard.id);
    }
  };

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % flashcards.length);
  };

  const handlePrevious = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + flashcards.length) % flashcards.length);
  };

  if (!currentCard) {
    return null;
  }

  return (
    <section id="flashcards" className="py-12 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-flashcards">Interactive Flashcards</h2>
          <p className="text-muted-foreground text-lg" data-testid="text-flashcards-description">
            Click cards to reveal definitions and formulas
          </p>
        </div>

        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground" data-testid="text-card-counter">
              Card {currentIndex + 1} of {flashcards.length}
            </span>
            <span className="text-sm font-medium" data-testid="text-cards-viewed">
              {viewedCards.length}/{flashcards.length} viewed
            </span>
          </div>
          <Progress value={progress} className="h-2" data-testid="progress-flashcards" />
        </div>

        <div className="perspective-1000 mb-6">
          <div
            className={`relative w-full aspect-[3/2] transition-transform duration-600 ease-in-out transform-style-3d cursor-pointer ${
              isFlipped ? "rotate-y-180" : ""
            }`}
            onClick={handleFlip}
            data-testid="flashcard"
            style={{
              transformStyle: "preserve-3d",
              transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
            }}
          >
            <Card className="absolute inset-0 backface-hidden hover-elevate" style={{ backfaceVisibility: "hidden" }}>
              <CardContent className="flex flex-col items-center justify-center h-full p-8 text-center">
                <Badge className="mb-4" data-testid="card-category-front">
                  {currentCard.category}
                </Badge>
                <h3 className="text-2xl md:text-3xl font-bold mb-4" data-testid="card-term">{currentCard.term}</h3>
                <div className="flex items-center gap-2 text-muted-foreground" data-testid="text-flip-hint">
                  <RotateCw className="w-4 h-4" />
                  <span className="text-sm">Click to flip</span>
                </div>
              </CardContent>
            </Card>

            <Card
              className="absolute inset-0 backface-hidden hover-elevate"
              style={{
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
              }}
            >
              <CardContent className="flex flex-col justify-center h-full p-8">
                <Badge className="mb-4 self-start" data-testid="card-category-back">
                  {currentCard.category}
                </Badge>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">Definition</h4>
                    <p className="text-base" data-testid="card-definition">{currentCard.definition}</p>
                  </div>
                  
                  {currentCard.formula && (
                    <div>
                      <h4 className="text-sm font-semibold text-muted-foreground mb-2">Formula</h4>
                      <div className="p-4 rounded-lg bg-muted/50 font-mono text-sm overflow-x-auto" data-testid="card-formula">
                        {currentCard.formula}
                      </div>
                    </div>
                  )}
                  
                  {currentCard.example && (
                    <div>
                      <h4 className="text-sm font-semibold text-muted-foreground mb-2">Example</h4>
                      <p className="text-sm text-muted-foreground" data-testid="card-example">{currentCard.example}</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4">
          <Button
            variant="outline"
            onClick={handlePrevious}
            data-testid="button-previous-card"
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Previous
          </Button>
          <Button
            onClick={handleNext}
            data-testid="button-next-card"
          >
            Next
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
