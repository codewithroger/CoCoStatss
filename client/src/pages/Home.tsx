import { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { LearnSection } from "@/components/LearnSection";
import { QuizInterface } from "@/components/QuizInterface";
import { FlashcardCarousel } from "@/components/FlashcardCarousel";
import { ConceptsReference } from "@/components/ConceptsReference";
import { queryClient, apiRequest } from "@/lib/queryClient";
import type { Flashcard, QuizQuestion, QuizSubmission, QuizResult } from "@shared/schema";

export default function Home() {
  const [viewedCards, setViewedCards] = useState<string[]>([]);

  const { data: flashcards = [], isLoading: flashcardsLoading } = useQuery<Flashcard[]>({
    queryKey: ["/api/flashcards"],
  });

  const { data: quizQuestions = [], isLoading: quizLoading } = useQuery<QuizQuestion[]>({
    queryKey: ["/api/quiz/questions"],
  });

  const submitQuizMutation = useMutation<QuizResult, Error, QuizSubmission>({
    mutationFn: async (submission: QuizSubmission) => {
      return apiRequest<QuizResult>("POST", "/api/quiz/submit", submission);
    },
  });

  const handleSubmitQuiz = async (answers: number[]): Promise<QuizResult> => {
    return submitQuizMutation.mutateAsync({ answers });
  };

  if (flashcardsLoading || quizLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading content...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        
        <LearnSection />

        <QuizInterface
          questions={quizQuestions}
          onSubmitQuiz={handleSubmitQuiz}
        />
        <FlashcardCarousel />
        <ConceptsReference />
      </main>
    </div>
  );
}
