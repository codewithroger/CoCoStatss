import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, XCircle, RotateCcw, Award } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import type { QuizQuestion, QuizResult } from "@shared/schema";

interface QuizInterfaceProps {
  questions: QuizQuestion[];
  onSubmitQuiz: (answers: number[]) => Promise<QuizResult>;
}

export function QuizInterface({ questions, onSubmitQuiz }: QuizInterfaceProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>(new Array(questions.length).fill(-1));
  const [quizResult, setQuizResult] = useState<QuizResult | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = async () => {
    // Double-check all questions are answered (should never hit this due to button disabled state)
    if (!allQuestionsAnswered) {
      toast({
        title: "Incomplete Quiz",
        description: `Please answer all questions before submitting. ${questions.length - answeredCount} remaining.`,
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const result = await onSubmitQuiz(selectedAnswers);
      setQuizResult(result);
      setShowFeedback(true);
    } catch (error) {
      console.error("Error submitting quiz:", error);
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your quiz. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRetake = () => {
    setCurrentQuestion(0);
    setSelectedAnswers(new Array(questions.length).fill(-1));
    setQuizResult(null);
    setShowFeedback(false);
  };

  const answeredCount = selectedAnswers.filter(a => a !== -1).length;
  const progress = (answeredCount / questions.length) * 100;
  const allQuestionsAnswered = answeredCount === questions.length;
  const currentQuestionAnswered = selectedAnswers[currentQuestion] !== -1;
  const canSubmit = allQuestionsAnswered && currentQuestionAnswered;

  if (showFeedback && quizResult) {
    return (
      <section id="quiz" className="py-12 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <Card className="animate-fade-in">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award className="w-12 h-12 text-primary" />
                </div>
              </div>
              <CardTitle className="text-3xl">Quiz Complete!</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <p className="text-5xl font-bold mb-2" data-testid="quiz-score">
                  {quizResult.percentage.toFixed(0)}%
                </p>
                <p className="text-muted-foreground" data-testid="text-quiz-result">
                  You got {quizResult.score} out of {quizResult.total} questions correct
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-lg" data-testid="heading-review">Review Your Answers</h3>
                {quizResult.answers.map((answer, index) => (
                  <Card key={index} className={answer.isCorrect ? "border-chart-2" : "border-chart-5"} data-testid={`review-card-${index}`}>
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        {answer.isCorrect ? (
                          <CheckCircle2 className="w-5 h-5 text-chart-2 mt-1 flex-shrink-0" data-testid={`icon-correct-${index}`} />
                        ) : (
                          <XCircle className="w-5 h-5 text-chart-5 mt-1 flex-shrink-0" data-testid={`icon-incorrect-${index}`} />
                        )}
                        <div className="flex-1 space-y-2">
                          <p className="font-medium" data-testid={`text-review-question-${index}`}>Question {index + 1}</p>
                          <p className="text-sm text-muted-foreground" data-testid={`text-review-explanation-${index}`}>{answer.explanation}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Button onClick={handleRetake} className="w-full" data-testid="button-retake-quiz">
                <RotateCcw className="w-4 h-4 mr-2" />
                Retake Quiz
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  const question = questions[currentQuestion];

  return (
    <section id="quiz" className="py-12 px-4 bg-muted/30">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-quiz">Test Your Knowledge</h2>
          <p className="text-muted-foreground text-lg" data-testid="text-quiz-description">
            Answer all questions to see your score
          </p>
        </div>

        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground" data-testid="text-question-counter">
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <span className="text-sm font-medium" data-testid="text-questions-answered">
              {answeredCount}/{questions.length} answered
            </span>
          </div>
          <Progress value={progress} className="h-2" data-testid="progress-quiz" />
        </div>

        <Card className="mb-6 animate-fade-in">
          <CardHeader>
            <CardTitle className="text-xl" data-testid="question-text">
              {question.question}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <RadioGroup
              value={selectedAnswers[currentQuestion]?.toString() ?? ""}
              onValueChange={(value) => handleAnswerSelect(parseInt(value))}
            >
              <div className="space-y-3">
                {question.options.map((option, index) => (
                  <div
                    key={index}
                    className={`flex items-center space-x-3 p-4 rounded-lg border-2 hover-elevate transition-colors ${
                      selectedAnswers[currentQuestion] === index
                        ? "border-primary bg-primary/5"
                        : "border-border"
                    }`}
                    data-testid={`option-${index}`}
                  >
                    <RadioGroupItem value={index.toString()} id={`q${currentQuestion}-option${index}`} />
                    <Label
                      htmlFor={`q${currentQuestion}-option${index}`}
                      className="flex-1 cursor-pointer"
                    >
                      {option}
                    </Label>
                  </div>
                ))}
              </div>
            </RadioGroup>
          </CardContent>
        </Card>

        <div className="space-y-4">
          {currentQuestion === questions.length - 1 && !allQuestionsAnswered && (
            <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/20 text-center" data-testid="warning-incomplete-quiz">
              <p className="text-sm text-destructive font-medium">
                Please answer all questions before submitting ({questions.length - answeredCount} remaining)
              </p>
            </div>
          )}
          
          <div className="flex items-center justify-between gap-4">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              data-testid="button-previous-question"
            >
              Previous
            </Button>

            {currentQuestion < questions.length - 1 ? (
              <Button
                onClick={handleNext}
                disabled={selectedAnswers[currentQuestion] === -1}
                data-testid="button-next-question"
              >
                Next
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                disabled={!canSubmit || isSubmitting}
                data-testid="button-submit-quiz"
              >
                {isSubmitting ? "Submitting..." : "Submit Quiz"}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
