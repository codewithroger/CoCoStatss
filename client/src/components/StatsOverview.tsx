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
  ];

  return (
    <div className="flex justify-center px-4 py-8 max-w-7xl mx-auto animate-fade-in">
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
