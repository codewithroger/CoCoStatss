import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, CheckCircle2, TrendingUp } from "lucide-react";

interface StatsOverviewProps {
  totalFlashcards: number;
  flashcardsViewed: number;
  quizzesTaken: number;
  averageScore: number;
}

export function StatsOverview({ 
  totalFlashcards, 
  flashcardsViewed, 
  quizzesTaken, 
  averageScore 
}: StatsOverviewProps) {
  const stats = [
    {
      label: "Total Concepts",
      value: totalFlashcards,
      icon: BookOpen,
      color: "text-chart-1",
    },
    {
      label: "Cards Viewed",
      value: `${flashcardsViewed}/${totalFlashcards}`,
      icon: CheckCircle2,
      color: "text-chart-2",
    },
    {
      label: "Average Score",
      value: quizzesTaken > 0 ? `${averageScore}%` : "—",
      icon: TrendingUp,
      color: "text-chart-3",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 py-8 max-w-7xl mx-auto animate-fade-in">
      {stats.map((stat, index) => (
        <Card key={index} className="hover-elevate" data-testid={`stat-card-${index}`}>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                <p className="text-3xl font-bold" data-testid={`stat-value-${index}`}>
                  {stat.value}
                </p>
              </div>
              <div className={`p-3 rounded-lg bg-card ${stat.color}`}>
                <stat.icon className="w-6 h-6" />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
