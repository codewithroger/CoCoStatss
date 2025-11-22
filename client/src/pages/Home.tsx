import { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { StatsOverview } from "@/components/StatsOverview";
import { FlashcardSystem } from "@/components/FlashcardSystem";
import { CorrelationVisualizations } from "@/components/CorrelationVisualizations";
import { QuizInterface } from "@/components/QuizInterface";
import { ConceptsReference } from "@/components/ConceptsReference";
import { queryClient, apiRequest } from "@/lib/queryClient";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, BarChart3, Zap, BookOpen } from "lucide-react";
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
        
        {/* Educational Content Section */}
        <section className="py-12 px-4 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h2 className="text-4xl font-bold mb-4" data-testid="heading-understanding">Understanding Coefficients & Correlation</h2>
              <p className="text-lg text-muted-foreground max-w-3xl">
                Coefficients and correlation are fundamental concepts in statistics and data analysis. Learn how to measure relationships between variables and interpret their strength.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Card data-testid="card-pearson-coefficient">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <TrendingUp className="w-5 h-5 text-chart-1" />
                    Pearson Correlation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Measures linear relationship between two continuous variables. Range: -1 to +1. Higher absolute values indicate stronger relationships.
                  </p>
                </CardContent>
              </Card>

              <Card data-testid="card-spearman-coefficient">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <BarChart3 className="w-5 h-5 text-chart-2" />
                    Spearman Correlation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Rank-based correlation measure for ordinal data or non-linear relationships. Non-parametric alternative to Pearson.
                  </p>
                </CardContent>
              </Card>

              <Card data-testid="card-r-squared">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Zap className="w-5 h-5 text-chart-3" />
                    R-Squared (R²)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Coefficient of determination. Shows proportion of variance in dependent variable explained by independent variable.
                  </p>
                </CardContent>
              </Card>

              <Card data-testid="card-regression">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <BookOpen className="w-5 h-5 text-chart-4" />
                    Regression Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Statistical method for predicting a dependent variable based on one or more independent variables.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="mb-12" data-testid="card-key-insights">
              <CardHeader>
                <CardTitle>Key Insights About Correlation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2" data-testid="text-positive-correlation">Positive Correlation</h4>
                    <p className="text-sm text-muted-foreground">
                      When two variables increase together. Example: Height and weight typically show positive correlation.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2" data-testid="text-negative-correlation">Negative Correlation</h4>
                    <p className="text-sm text-muted-foreground">
                      When one variable increases while the other decreases. Example: Study time and error rate often show negative correlation.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2" data-testid="text-zero-correlation">Zero Correlation</h4>
                    <p className="text-sm text-muted-foreground">
                      No linear relationship between variables. Example: Shoe size and intelligence have no meaningful correlation.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2" data-testid="text-causation-warning">Correlation ≠ Causation</h4>
                    <p className="text-sm text-muted-foreground">
                      Two variables can be correlated without one causing the other. Always investigate the underlying relationship.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card data-testid="card-practical-applications">
              <CardHeader>
                <CardTitle>Practical Applications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border-l-2 border-chart-1 pl-4">
                    <h4 className="font-semibold mb-1">Finance</h4>
                    <p className="text-sm text-muted-foreground">Portfolio diversification using correlation between assets.</p>
                  </div>
                  <div className="border-l-2 border-chart-2 pl-4">
                    <h4 className="font-semibold mb-1">Healthcare</h4>
                    <p className="text-sm text-muted-foreground">Analyzing relationships between treatment variables and patient outcomes.</p>
                  </div>
                  <div className="border-l-2 border-chart-3 pl-4">
                    <h4 className="font-semibold mb-1">Marketing</h4>
                    <p className="text-sm text-muted-foreground">Understanding customer demographics and purchasing behavior relationships.</p>
                  </div>
                  <div className="border-l-2 border-chart-4 pl-4">
                    <h4 className="font-semibold mb-1">Research</h4>
                    <p className="text-sm text-muted-foreground">Exploring relationships between experimental variables and outcomes.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <QuizInterface
          questions={quizQuestions}
          onSubmitQuiz={handleSubmitQuiz}
        />
        <ConceptsReference />
      </main>
    </div>
  );
}
