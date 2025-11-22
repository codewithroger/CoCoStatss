import { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { StatsOverview } from "@/components/StatsOverview";
import { FlashcardSystem } from "@/components/FlashcardSystem";
import { CorrelationVisualizations } from "@/components/CorrelationVisualizations";
import { QuizInterface } from "@/components/QuizInterface";
import { ConceptsReference } from "@/components/ConceptsReference";
import { Footer } from "@/components/Footer";
import { queryClient, apiRequest } from "@/lib/queryClient";
import type { Flashcard, QuizQuestion, UserProgress, QuizSubmission, QuizResult } from "@shared/schema";

export default function Home() {
  const [viewedCards, setViewedCards] = useState<string[]>([]);

  const { data: flashcards = [], isLoading: flashcardsLoading } = useQuery<Flashcard[]>({
    queryKey: ["/api/flashcards"],
  });

  const { data: quizQuestions = [], isLoading: quizLoading } = useQuery<QuizQuestion[]>({
    queryKey: ["/api/quiz/questions"],
  });

  const { data: progress } = useQuery<UserProgress>({
    queryKey: ["/api/progress"],
  });

  const submitQuizMutation = useMutation<QuizResult, Error, QuizSubmission>({
    mutationFn: async (submission: QuizSubmission) => {
      return apiRequest("POST", "/api/quiz/submit", submission);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/progress"] });
    },
  });

  const viewCardMutation = useMutation<UserProgress, Error, string>({
    mutationFn: async (cardId: string) => {
      return apiRequest("POST", "/api/flashcards/viewed", { cardId });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/progress"] });
    },
  });

  const handleCardViewed = (cardId: string) => {
    if (!viewedCards.includes(cardId)) {
      setViewedCards([...viewedCards, cardId]);
      viewCardMutation.mutate(cardId);
    }
  };

  const handleSubmitQuiz = async (answers: number[]): Promise<QuizResult> => {
    return submitQuizMutation.mutateAsync({ answers });
  };

  const averageScore = progress && progress.quizzesTaken > 0
    ? Math.round((progress.totalQuizScore / progress.quizzesTaken))
    : 0;

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
        <StatsOverview
          totalFlashcards={flashcards.length}
          flashcardsViewed={progress?.flashcardsViewed?.length ?? 0}
          quizzesTaken={progress?.quizzesTaken ?? 0}
          averageScore={averageScore}
        />
        <FlashcardSystem
          flashcards={flashcards}
          onCardViewed={handleCardViewed}
          viewedCards={viewedCards}
        />
        <CorrelationVisualizations />
        <QuizInterface
          questions={quizQuestions}
          onSubmitQuiz={handleSubmitQuiz}
        />
        <ConceptsReference />
      </main>
      <Footer />
    </div>
  );
}
