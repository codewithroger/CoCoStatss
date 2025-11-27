import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Zap, AlertCircle, ArrowRight, Trophy, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Cell } from "recharts";
import { useState } from "react";

export const flashcards = [
  { q: "What is the primary function of correlation as a statistical tool?", a: "To measure and describe the strength and direction of the relationship between two or more variables." },
  { q: "What are the two key questions that correlation helps to answer about variables?", a: "Do the variables move together, and if so, how strongly?" },
  { q: "In business, how is correlation used for decision making?", a: "Companies use it to understand customer behavior, such as the relationship between income and spending." },
  { q: "What type of correlation is observed when one variable increases and the other also increases?", a: "Positive Correlation." },
  { q: "What type of correlation is observed when one variable increases while the other decreases?", a: "Negative Correlation." },
  { q: "What is meant by 'Zero Correlation'?", a: "There is no meaningful or discernible relationship between the variables." },
  { q: "What is the correlation coefficient, and what is its symbol?", a: "It is a number between –1 and +1 that shows how strong a relationship is, symbolized by 'r'." },
  { q: "What does a correlation coefficient (r) value of +1 signify?", a: "A perfect positive correlation, where variables change in the exact same proportion." },
  { q: "A correlation coefficient (r) in the range of +0.7 to +0.9 indicates what kind of relationship?", a: "A high positive correlation." },
  { q: "What does the Pearson Correlation Coefficient (r) provide?", a: "It measures the strength and direction of the linear relationship between two sets of continuous data." },
  { q: "What does covariance measure?", a: "Covariance is a statistical measure that indicates how two variables change or vary together." },
  { q: "If both variables tend to increase or decrease at the same time, the covariance will be _____.", a: "positive" },
  { q: "What does a negative covariance indicate?", a: "It indicates that as one variable increases, the other tends to decrease." },
  { q: "What is the key difference between population and sample covariance?", a: "The population formula divides by N, while the sample formula divides by n-1." },
  { q: "What does Spearman's rank correlation measure?", a: "It measures how well the relationship between two variables can be described using a monotonic function, based on their ranks." },
  { q: "Spearman's correlation is used when the data is not normally distributed or when the data is _____.", a: "ordinal (ranked)" },
  { q: "What is a monotonic relationship?", a: "A relationship where as one variable increases, the other variable consistently increases or consistently decreases." },
  { q: "In Spearman's correlation, if the ranks of two variables are very similar, what does this indicate?", a: "It indicates a positive correlation." },
  { q: "What is the first step in calculating Spearman's correlation if the data is not already ranked?", a: "Rank the data for each variable separately." },
];

function FlashcardViewer() {
  const [currentCard, setCurrentCard] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleNext = () => {
    setCurrentCard((prev) => (prev + 1) % flashcards.length);
    setIsFlipped(false);
  };

  const handlePrev = () => {
    setCurrentCard((prev) => (prev - 1 + flashcards.length) % flashcards.length);
    setIsFlipped(false);
  };

  return (
    <div className="w-full">
      <div className="mb-6 min-h-64 cursor-pointer perspective" onClick={() => setIsFlipped(!isFlipped)}>
        <Card className="h-64 flex flex-col justify-between hover-elevate transition-all">
          <CardContent className="flex-1 flex flex-col justify-center items-center p-6 text-center">
            <p className="text-xs text-muted-foreground mb-4">{isFlipped ? "Answer" : "Question"}</p>
            <p className="text-lg font-medium leading-relaxed">
              {isFlipped ? flashcards[currentCard].a : flashcards[currentCard].q}
            </p>
            <p className="text-xs text-muted-foreground mt-6">Click to flip</p>
          </CardContent>
          <div className="px-6 pb-4 flex justify-between items-center border-t">
            <span className="text-xs text-muted-foreground">Card {currentCard + 1} of {flashcards.length}</span>
            <div className="flex gap-2">
              <Button size="sm" variant="outline" onClick={(e) => { e.stopPropagation(); handlePrev(); }} data-testid="button-prev-flashcard">
                Previous
              </Button>
              <Button size="sm" variant="outline" onClick={(e) => { e.stopPropagation(); handleNext(); }} data-testid="button-next-flashcard">
                Next
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export function LearnSection() {
  const scrollToTopic = (topicId: string) => {
    const element = document.getElementById(topicId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const positiveData = [
    { x: 1, y: 2 },
    { x: 2, y: 4 },
    { x: 3, y: 6 },
    { x: 4, y: 8 },
    { x: 5, y: 10 },
  ];

  const negativeData = [
    { x: 1, y: 10 },
    { x: 2, y: 8 },
    { x: 3, y: 6 },
    { x: 4, y: 4 },
    { x: 5, y: 2 },
  ];

  const noCorrelationData = [
    { x: 1, y: 5 },
    { x: 2, y: 2 },
    { x: 3, y: 8 },
    { x: 4, y: 3 },
    { x: 5, y: 7 },
  ];

  const strengthData = [
    { name: "Perfect", value: 1.0, color: "#ef4444" },
    { name: "Very Strong", value: 0.9, color: "#f97316" },
    { name: "Strong", value: 0.7, color: "#eab308" },
    { name: "Moderate", value: 0.5, color: "#84cc16" },
    { name: "Weak", value: 0.3, color: "#22c55e" },
    { name: "Very Weak", value: 0.1, color: "#0ea5e9" },
  ];

  return (
    <section className="py-12 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Main Navigation */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4 text-center">Statistical Learning Path</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-center mb-8">
            Master statistical relationships through interconnected topics
          </p>

          {/* Topic Navigation Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card
              className="cursor-pointer hover:shadow-lg transition-shadow hover-elevate"
              onClick={() => scrollToTopic("correlation-topic")}
              data-testid="card-navigate-correlation"
            >
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Topic 1: Correlation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Understand the fundamental concept of measuring relationships between variables
                </p>
                <Button variant="ghost" size="sm" className="w-full justify-between">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Button>
              </CardContent>
            </Card>

            <Card
              className="cursor-pointer hover:shadow-lg transition-shadow hover-elevate"
              onClick={() => scrollToTopic("pearson-topic")}
              data-testid="card-navigate-pearson"
            >
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Topic 2: Pearson Coefficient
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Measure linear relationships with the correlation coefficient (r)
                </p>
                <Button variant="ghost" size="sm" className="w-full justify-between">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Button>
              </CardContent>
            </Card>

            <Card
              className="cursor-pointer hover:shadow-lg transition-shadow hover-elevate"
              onClick={() => scrollToTopic("covariance-topic")}
              data-testid="card-navigate-covariance"
            >
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Topic 3: Covariance
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Measure how variables change together using covariance
                </p>
                <Button variant="ghost" size="sm" className="w-full justify-between">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Topic 1: Correlation */}
        <div id="correlation-topic" className="mb-16 scroll-mt-20">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-bold" data-testid="heading-correlation">
              Topic 1: What is Correlation?
            </h3>
            <Button
              variant="outline"
              size="sm"
              onClick={() => scrollToTopic("pearson-topic")}
              className="gap-2"
              data-testid="button-next-to-pearson"
            >
              Next Topic <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <Card data-testid="card-correlation-intro">
              <CardHeader>
                <CardTitle className="text-lg">Definition</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm">
                  Correlation is a statistical tool used to measure and describe the <strong>strength and direction</strong> of the relationship between two or more variables.
                </p>
                <div className="bg-muted p-3 rounded-lg text-sm space-y-2">
                  <p><strong>It tells us:</strong></p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Do the variables move together?</li>
                    <li>If yes, how strongly?</li>
                    <li>Is the relationship positive or negative?</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card data-testid="card-correlation-example">
              <CardHeader>
                <CardTitle className="text-lg">Example</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm font-medium">Study Hours vs Marks</p>
                <div className="bg-primary/10 p-3 rounded-lg text-sm space-y-2">
                  <p><strong>Hours Studied (X) → Marks (Y)</strong></p>
                  <p>1 → 10</p>
                  <p>2 → 20</p>
                  <p>3 → 30</p>
                  <p>4 → 40</p>
                  <p>5 → 50</p>
                </div>
                <p className="text-xs text-muted-foreground">As study hours increase, marks also increase → <strong>Positive Correlation</strong></p>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-6" data-testid="card-importance">
            <CardHeader>
              <CardTitle className="text-lg">Why is Correlation Important?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border-l-4 border-chart-1 pl-4">
                  <h4 className="font-semibold text-sm mb-2">Understanding Relationships</h4>
                  <p className="text-sm text-muted-foreground">Example: Relationship between rainfall and crop growth</p>
                </div>
                <div className="border-l-4 border-chart-2 pl-4">
                  <h4 className="font-semibold text-sm mb-2">Prediction</h4>
                  <p className="text-sm text-muted-foreground">If strong correlation exists between study and marks, marks can be predicted</p>
                </div>
                <div className="border-l-4 border-chart-3 pl-4">
                  <h4 className="font-semibold text-sm mb-2">Decision Making</h4>
                  <p className="text-sm text-muted-foreground">Companies use correlation to understand customer behavior patterns</p>
                </div>
                <div className="border-l-4 border-chart-4 pl-4">
                  <h4 className="font-semibold text-sm mb-2">Identifying Patterns</h4>
                  <p className="text-sm text-muted-foreground">Analyzing trends in business, economics, science, and psychology</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card data-testid="card-correlation-types">
            <CardHeader>
              <CardTitle className="text-lg">Types of Correlation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3 text-primary">Based on Direction:</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="font-semibold text-sm mb-2">Positive Correlation (r &gt; 0)</p>
                    <p className="text-xs text-muted-foreground mb-2">When one variable increases, the other also increases</p>
                    <p className="text-xs">Example: Height and weight</p>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="font-semibold text-sm mb-2">Negative Correlation (r &lt; 0)</p>
                    <p className="text-xs text-muted-foreground mb-2">When one variable increases, the other decreases</p>
                    <p className="text-xs">Example: Price ↑ → Demand ↓</p>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="font-semibold text-sm mb-2">Zero Correlation (r ≈ 0)</p>
                    <p className="text-xs text-muted-foreground mb-2">No meaningful relationship exists</p>
                    <p className="text-xs">Example: Shoe size and intelligence</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3 text-primary">Based on Strength (Pearson r value):</h4>
                <div className="bg-muted p-4 rounded-lg space-y-2 text-sm">
                  <div className="flex justify-between"><span>Perfect:</span><span className="font-mono">r = ±1.0</span></div>
                  <div className="flex justify-between"><span>High:</span><span className="font-mono">r = ±0.7 to ±0.9</span></div>
                  <div className="flex justify-between"><span>Moderate:</span><span className="font-mono">r = ±0.3 to ±0.6</span></div>
                  <div className="flex justify-between"><span>Low/Weak:</span><span className="font-mono">r = 0 to ±0.3</span></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Topic 2: Pearson Correlation */}
        <div id="pearson-topic" className="mb-16 scroll-mt-20">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-bold flex items-center gap-2" data-testid="heading-pearson">
              <TrendingUp className="w-8 h-8" />
              Topic 2: Pearson's Correlation Coefficient
            </h3>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => scrollToTopic("correlation-topic")}
                className="gap-2"
                data-testid="button-prev-to-correlation"
              >
                ← Previous
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => scrollToTopic("covariance-topic")}
                className="gap-2"
                data-testid="button-next-to-covariance"
              >
                Next Topic <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <Card className="mb-6" data-testid="card-pearson-intro">
            <CardHeader>
              <CardTitle className="text-lg">What is Pearson's Correlation Coefficient?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm">
                <strong>The Pearson Correlation Coefficient (r)</strong> is a statistical measure that tells you two things about the relationship between two sets of continuous data:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="bg-primary/10 p-4 rounded-lg">
                  <p className="font-semibold text-sm mb-2">1. Strength</p>
                  <p className="text-sm text-muted-foreground">How close the data points are to forming a straight line</p>
                </div>
                <div className="bg-primary/10 p-4 rounded-lg">
                  <p className="font-semibold text-sm mb-2">2. Direction</p>
                  <p className="text-sm text-muted-foreground">Whether the variables move in the same direction (positive) or opposite directions (negative)</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground italic">Basically: If one thing changes, does the other thing also change and how much?</p>
              <p className="text-sm"><strong>The value of r is always between -1 and +1.</strong></p>
            </CardContent>
          </Card>

          <Card className="mb-6" data-testid="card-pearson-interpretation-table">
            <CardHeader>
              <CardTitle className="text-lg">Interpreting Pearson's r - Complete Table</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-primary/10">
                      <th className="border p-3 text-left font-semibold">Value</th>
                      <th className="border p-3 text-left font-semibold">Meaning</th>
                      <th className="border p-3 text-left font-semibold">Interpretation</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-green-50 dark:bg-green-950/10">
                      <td className="border p-3 font-mono font-bold">+1</td>
                      <td className="border p-3">Perfect Positive</td>
                      <td className="border p-3">If A increases, B always increases (perfect linear relationship)</td>
                    </tr>
                    <tr className="bg-emerald-50 dark:bg-emerald-950/10">
                      <td className="border p-3 font-mono">Close to +1 (e.g., +0.8)</td>
                      <td className="border p-3">Strong Positive Correlation</td>
                      <td className="border p-3">Variables generally move together with strong relationship</td>
                    </tr>
                    <tr className="bg-cyan-50 dark:bg-cyan-950/10">
                      <td className="border p-3 font-mono">0</td>
                      <td className="border p-3">No Relation</td>
                      <td className="border p-3">A changes, B doesn't care - no linear relationship</td>
                    </tr>
                    <tr className="bg-orange-50 dark:bg-orange-950/10">
                      <td className="border p-3 font-mono">Close to -1 (e.g., -0.8)</td>
                      <td className="border p-3">Strong Negative Correlation</td>
                      <td className="border p-3">As one goes up, the other goes down strongly</td>
                    </tr>
                    <tr className="bg-red-50 dark:bg-red-950/10">
                      <td className="border p-3 font-mono font-bold">-1</td>
                      <td className="border p-3">Perfect Negative</td>
                      <td className="border p-3">If A increases, B always decreases (perfect inverse relationship)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-6" data-testid="card-strength-scale">
            <CardHeader>
              <CardTitle className="text-lg">Correlation Coefficient Range: +1 to -1 Table</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <p className="font-semibold">Complete Interpretation Guide:</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between items-center p-3 bg-green-50 dark:bg-green-950/20 rounded border border-green-200 dark:border-green-900">
                      <span className="font-semibold">Perfect Positive</span>
                      <span className="font-mono font-bold">r = +1.00</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-emerald-50 dark:bg-emerald-950/20 rounded border border-emerald-200 dark:border-emerald-900">
                      <span>Very Strong Positive</span>
                      <span className="font-mono">r = +0.80 to +0.99</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-teal-50 dark:bg-teal-950/20 rounded border border-teal-200 dark:border-teal-900">
                      <span>Strong Positive</span>
                      <span className="font-mono">r = +0.60 to +0.79</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-cyan-50 dark:bg-cyan-950/20 rounded border border-cyan-200 dark:border-cyan-900">
                      <span>Moderate Positive</span>
                      <span className="font-mono">r = +0.40 to +0.59</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-blue-50 dark:bg-blue-950/20 rounded border border-blue-200 dark:border-blue-900">
                      <span>Weak Positive</span>
                      <span className="font-mono">r = +0.20 to +0.39</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-950/20 rounded border border-slate-200 dark:border-slate-900">
                      <span>No Correlation</span>
                      <span className="font-mono">r = 0.00</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-orange-50 dark:bg-orange-950/20 rounded border border-orange-200 dark:border-orange-900">
                      <span>Weak Negative</span>
                      <span className="font-mono">r = -0.20 to -0.39</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-amber-50 dark:bg-amber-950/20 rounded border border-amber-200 dark:border-amber-900">
                      <span>Moderate Negative</span>
                      <span className="font-mono">r = -0.40 to -0.59</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-red-50 dark:bg-red-950/20 rounded border border-red-200 dark:border-red-900">
                      <span>Strong Negative</span>
                      <span className="font-mono">r = -0.60 to -0.79</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-rose-50 dark:bg-rose-950/20 rounded border border-rose-200 dark:border-rose-900">
                      <span>Very Strong Negative</span>
                      <span className="font-mono">r = -0.80 to -0.99</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-pink-50 dark:bg-pink-950/20 rounded border border-pink-200 dark:border-pink-900">
                      <span className="font-semibold">Perfect Negative</span>
                      <span className="font-mono font-bold">r = -1.00</span>
                    </div>
                  </div>
                </div>
                <div>
                  <ResponsiveContainer width="100%" height={420}>
                    <BarChart data={strengthData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" angle={-45} textAnchor="end" height={100} />
                      <YAxis domain={[-1, 1]} />
                      <Tooltip formatter={(value) => value.toFixed(2)} />
                      <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                        {strengthData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-6" data-testid="card-pearson-examples">
            <CardHeader>
              <CardTitle className="text-lg">Real-World Examples</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <p className="font-semibold text-sm mb-3 text-green-600 dark:text-green-400">Example 1: Positive Correlation (Hours of studying vs Marks)</p>
                <div className="bg-muted p-3 rounded-lg mb-3 overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-primary/10">
                        <th className="p-2 text-left">Hours of studying</th>
                        <th className="p-2 text-center">1</th>
                        <th className="p-2 text-center">2</th>
                        <th className="p-2 text-center">3</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t">
                        <td className="p-2 font-semibold">Marks</td>
                        <td className="p-2 text-center">50</td>
                        <td className="p-2 text-center">60</td>
                        <td className="p-2 text-center">70</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-muted-foreground mb-2">As the number of hours invested in studying increases, marks also increase.</p>
                <p className="text-sm font-semibold text-green-700 dark:text-green-400">r = +1 (perfect positive correlation)</p>
              </div>

              <div>
                <p className="font-semibold text-sm mb-3 text-red-600 dark:text-red-400">Example 2: Negative Correlation (Exercise vs Body fat)</p>
                <div className="bg-muted p-3 rounded-lg mb-3 overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-primary/10">
                        <th className="p-2 text-left">Exercise</th>
                        <th className="p-2 text-center">1</th>
                        <th className="p-2 text-center">2</th>
                        <th className="p-2 text-center">4</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t">
                        <td className="p-2 font-semibold">Body fat</td>
                        <td className="p-2 text-center">30</td>
                        <td className="p-2 text-center">25</td>
                        <td className="p-2 text-center">20</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-muted-foreground mb-2">As you exercise more, your body fat goes down.</p>
                <p className="text-sm font-semibold text-red-700 dark:text-red-400">r ≈ -0.98 (strong negative correlation)</p>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-6" data-testid="card-pearson-formulas">
            <CardHeader>
              <CardTitle className="text-lg">How to Find r (Pearson Correlation Coefficient)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <p className="font-semibold text-sm mb-3">Formula 1: Deviation from Mean Formula</p>
                <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border border-blue-200 dark:border-blue-900 mb-3">
                  <div className="font-mono text-sm text-center space-y-2">
                    <p className="text-base font-bold">r = Σ[(X - X̄)(Y - Ȳ)] / √[Σ(X - X̄)² × Σ(Y - Ȳ)²]</p>
                  </div>
                </div>
              </div>

              <div>
                <p className="font-semibold text-sm mb-3">Formula 2: Product Moment Formula</p>
                <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg border border-green-200 dark:border-green-900 mb-3 space-y-2">
                  <div className="font-mono text-sm">
                    <p className="text-base font-bold mb-2">r_xy = s_xy / (s_x × s_y)</p>
                    <p className="text-xs text-muted-foreground">Where:</p>
                    <p className="text-xs text-muted-foreground">r_xy = sample correlation coefficient</p>
                    <p className="text-xs text-muted-foreground">s_xy = sample covariance</p>
                    <p className="text-xs text-muted-foreground">s_x = sample standard deviation of x</p>
                    <p className="text-xs text-muted-foreground">s_y = sample standard deviation of y</p>
                  </div>
                </div>
              </div>

              <div className="border-t pt-4">
                <p className="font-semibold text-sm mb-4">Worked Example: Let's take an easy example</p>
                <div className="bg-muted p-3 rounded-lg mb-4 overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-primary/10">
                        <th className="p-2 text-center">X</th>
                        <th className="p-2 text-center">Y</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t"><td className="p-2 text-center">1</td><td className="p-2 text-center">2</td></tr>
                      <tr><td className="p-2 text-center">2</td><td className="p-2 text-center">4</td></tr>
                      <tr><td className="p-2 text-center">3</td><td className="p-2 text-center">6</td></tr>
                    </tbody>
                  </table>
                </div>

                <div className="space-y-2 text-sm mb-4">
                  <p className="font-semibold">First find out the mean of X and Y:</p>
                  <p className="text-muted-foreground">X̄ = 2    Ȳ = 4</p>
                </div>

                <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg mb-4">
                  <p className="font-semibold text-sm mb-3">Pearson's Correlation Coefficient Formula (R):</p>
                  <div className="font-mono text-xs bg-white dark:bg-slate-900 p-3 rounded mb-3 overflow-x-auto">
                    <p className="font-bold mb-2">r = Σ(X - X̄)(Y - Ȳ) / √[Σ(X - X̄)² × Σ(Y - Ȳ)²]</p>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2"><strong>Where:</strong></p>
                  <ul className="text-xs text-muted-foreground space-y-1 list-disc list-inside">
                    <li><strong>Numerator:</strong> Σ(X - X̄)(Y - Ȳ) = Sum of products of deviations</li>
                    <li><strong>Denominator:</strong> √[Σ(X - X̄)² × Σ(Y - Ȳ)²] = Square root of product of sum of squared deviations</li>
                    <li>This formula standardizes the covariance to a value between -1 and +1</li>
                  </ul>
                </div>

                <div className="bg-muted p-3 rounded-lg mb-4 overflow-x-auto">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="bg-primary/10">
                        <th className="p-2">X</th>
                        <th className="p-2">Y</th>
                        <th className="p-2">X - X̄</th>
                        <th className="p-2">(X - X̄)²</th>
                        <th className="p-2">Y - Ȳ</th>
                        <th className="p-2">(Y - Ȳ)²</th>
                        <th className="p-2">(X - X̄)(Y - Ȳ)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td className="p-2">1</td><td className="p-2">2</td><td className="p-2">1-2=-1</td><td className="p-2">1</td><td className="p-2">2-4=-2</td><td className="p-2">4</td><td className="p-2">2</td></tr>
                      <tr><td className="p-2">2</td><td className="p-2">4</td><td className="p-2">2-2=0</td><td className="p-2">0</td><td className="p-2">4-4=0</td><td className="p-2">0</td><td className="p-2">0</td></tr>
                      <tr><td className="p-2">3</td><td className="p-2">6</td><td className="p-2">3-2=1</td><td className="p-2">1</td><td className="p-2">6-4=2</td><td className="p-2">4</td><td className="p-2">2</td></tr>
                    </tbody>
                  </table>
                </div>

                <div className="space-y-2 font-mono text-sm bg-amber-50 dark:bg-amber-950/20 p-4 rounded-lg">
                  <p><strong>Using the formula:</strong></p>
                  <p>Σ (X - X̄)(Y - Ȳ) = 2 + 0 + 2 = 4</p>
                  <p>Σ(X - X̄)² = 1 + 0 + 1 = 2</p>
                  <p>Σ(Y - Ȳ)² = 4 + 0 + 4 = 8</p>
                  <p className="border-t pt-2 mt-2"><strong>r = 4 / √(2 × 8)</strong></p>
                  <p><strong>r = 4 / √16</strong></p>
                  <p><strong>r = 4 / 4 = 1</strong></p>
                  <p className="font-bold text-lg mt-2"><strong>r = +1</strong></p>
                </div>

                <div className="border-t pt-6">
                  <p className="font-semibold text-sm mb-4">Alternative Method: Using Product Moment Formula</p>
                  <p className="text-xs text-muted-foreground mb-3">The correlation coefficient can also be calculated using sample covariance and standard deviations:</p>
                  
                  <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg mb-4 space-y-3">
                    <div className="font-mono text-xs space-y-2">
                      <p className="font-bold">r = s_xy / (s_x × s_y)</p>
                      <p className="border-t pt-2 mt-2">Where:</p>
                      <p><strong>s_xy</strong> = sample covariance = [ΣXY - (ΣX × ΣY)/n] / (n - 1)</p>
                      <p><strong>s_x</strong> = sample standard deviation of X</p>
                      <p><strong>s_y</strong> = sample standard deviation of Y</p>
                    </div>
                  </div>

                  <div className="bg-purple-50 dark:bg-purple-950/20 p-4 rounded-lg space-y-2 font-mono text-xs">
                    <p className="font-semibold mb-2">Calculation using Product Moment Formula:</p>
                    <p>s_x = √[Σ(X - X̄)² / (n-1)] = √[2 / 2] = √1 = 1</p>
                    <p>s_y = √[Σ(Y - Ȳ)² / (n-1)] = √[8 / 2] = √4 = 2</p>
                    <p>s_xy = Σ(X - X̄)(Y - Ȳ) / (n-1) = 4 / 2 = 2</p>
                    <p className="border-t pt-2 mt-2"><strong>r = 2 / (1 × 2) = 2 / 2 = +1</strong></p>
                  </div>

                  <div className="bg-primary/10 p-3 rounded mt-3">
                    <p className="text-xs"><strong>Result:</strong> Both methods give r = +1 (Perfect Positive Correlation)</p>
                    <p className="text-xs text-muted-foreground">The Product Moment Formula is more intuitive: correlation = (covariance) / (product of standard deviations)</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-6" data-testid="card-pearson-graphs">
            <CardHeader>
              <CardTitle className="text-lg">Graphical Representation of Correlation Types</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <p className="text-sm font-semibold mb-3 text-green-600 dark:text-green-400">Positive Correlation (r ≈ +0.95)</p>
                  <p className="text-xs text-muted-foreground mb-2">Both variables move in the same direction</p>
                  <ResponsiveContainer width="100%" height={200}>
                    <ScatterChart margin={{ top: 10, right: 10, bottom: 10, left: 10 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" dataKey="x" />
                      <YAxis type="number" dataKey="y" />
                      <Tooltip />
                      <Scatter data={positiveData} fill="#22c55e" />
                    </ScatterChart>
                  </ResponsiveContainer>
                </div>
                <div>
                  <p className="text-sm font-semibold mb-3 text-red-600 dark:text-red-400">Negative Correlation (r ≈ -0.95)</p>
                  <p className="text-xs text-muted-foreground mb-2">Variables move in opposite directions</p>
                  <ResponsiveContainer width="100%" height={200}>
                    <ScatterChart margin={{ top: 10, right: 10, bottom: 10, left: 10 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" dataKey="x" />
                      <YAxis type="number" dataKey="y" domain={[0, 12]} />
                      <Tooltip />
                      <Scatter data={negativeData} fill="#ef4444" />
                    </ScatterChart>
                  </ResponsiveContainer>
                </div>
                <div>
                  <p className="text-sm font-semibold mb-3 text-slate-600 dark:text-slate-400">No Correlation (r ≈ 0)</p>
                  <p className="text-xs text-muted-foreground mb-2">No relationship between variables</p>
                  <ResponsiveContainer width="100%" height={200}>
                    <ScatterChart margin={{ top: 10, right: 10, bottom: 10, left: 10 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" dataKey="x" />
                      <YAxis type="number" dataKey="y" domain={[0, 10]} />
                      <Tooltip />
                      <Scatter data={noCorrelationData} fill="#64748b" />
                    </ScatterChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Topic 3: Covariance */}
        <div id="covariance-topic" className="mb-16 scroll-mt-20">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-bold flex items-center gap-2" data-testid="heading-covariance">
              <Zap className="w-8 h-8" />
              Topic 3: Covariance
            </h3>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => scrollToTopic("pearson-topic")}
                className="gap-2"
                data-testid="button-prev-to-pearson"
              >
                ← Previous
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => scrollToTopic("spearman-topic")}
                className="gap-2"
                data-testid="button-next-to-spearman"
              >
                Next Topic <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <Card className="mb-6" data-testid="card-covariance-intro">
            <CardHeader>
              <CardTitle className="text-lg">What is Covariance?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm">
                <strong>Covariance</strong> is a measure that tells us how two variables change together. Theoretically, Covariance is a statistical measure that indicates the degree and direction of the linear relationship between two variables. It shows how two variables vary together.
              </p>
              <div className="bg-muted p-4 rounded-lg space-y-3">
                <p className="text-sm font-semibold">Key Characteristics:</p>
                <ul className="text-sm space-y-2 list-disc list-inside text-muted-foreground">
                  <li>Measures how much two variables vary from their means together</li>
                  <li>Depends on the units of measurement (unlike correlation)</li>
                  <li>Can be any value (not limited to [-1, 1])</li>
                  <li>Shows only direction and magnitude, not strength as a ratio</li>
                  <li>Foundation for understanding correlation coefficient</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-6" data-testid="card-covariance-types">
            <CardHeader>
              <CardTitle className="text-lg">Three Types of Covariance</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border-l-4 border-chart-2 pl-4 bg-chart-2/5 p-4 rounded">
                  <p className="font-semibold text-sm mb-2">Positive Covariance</p>
                  <p className="text-xs text-muted-foreground mb-2">Cov(X,Y) &gt; 0</p>
                  <p className="text-xs text-muted-foreground">Both variables increase together OR both decrease together</p>
                </div>
                <div className="border-l-4 border-chart-5 pl-4 bg-chart-5/5 p-4 rounded">
                  <p className="font-semibold text-sm mb-2">Negative Covariance</p>
                  <p className="text-xs text-muted-foreground mb-2">Cov(X,Y) &lt; 0</p>
                  <p className="text-xs text-muted-foreground">One variable increases while the other decreases (inverse relationship)</p>
                </div>
                <div className="border-l-4 border-muted-foreground pl-4 bg-muted p-4 rounded">
                  <p className="font-semibold text-sm mb-2">Zero Covariance</p>
                  <p className="text-xs text-muted-foreground mb-2">Cov(X,Y) ≈ 0</p>
                  <p className="text-xs text-muted-foreground">No linear relationship between variables (independent)</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-6" data-testid="card-covariance-formulas">
            <CardHeader>
              <CardTitle className="text-lg">Covariance Formulas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg">
                  <p className="font-semibold text-sm mb-2">Population Covariance:</p>
                  <div className="font-mono text-sm bg-muted p-3 rounded mb-2">
                    <p>σₓᵧ = Cov(X,Y) = Σ[(Xᵢ - μₓ)(Yᵢ - μᵧ)] / N</p>
                  </div>
                  <p className="text-xs text-muted-foreground">Used when dealing with entire population of data</p>
                </div>

                <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg">
                  <p className="font-semibold text-sm mb-2">Sample Covariance:</p>
                  <div className="font-mono text-sm bg-muted p-3 rounded mb-2">
                    <p>sₓᵧ = Cov(X,Y) = Σ[(Xᵢ - X̄)(Yᵢ - Ȳ)] / (n - 1)</p>
                  </div>
                  <p className="text-xs text-muted-foreground">Used when working with sample data (most common)</p>
                </div>

                <div className="bg-amber-50 dark:bg-amber-950/20 p-4 rounded-lg">
                  <p className="font-semibold text-sm mb-2">Alternative Computational Formula:</p>
                  <div className="font-mono text-sm bg-muted p-3 rounded mb-2">
                    <p className="mb-1">Cov(X,Y) = [Σ(Xᵢ·Yᵢ) - (ΣXᵢ·ΣYᵢ)/n] / (n - 1)</p>
                    <p className="text-xs text-muted-foreground mt-1">Easier for calculations, less affected by rounding errors</p>
                  </div>
                </div>
              </div>

              <div className="bg-primary/10 p-3 rounded text-sm space-y-2">
                <p className="font-semibold">Symbol Legend:</p>
                <ul className="text-xs space-y-1 text-muted-foreground list-disc list-inside">
                  <li>σₓᵧ = Population covariance</li>
                  <li>sₓᵧ = Sample covariance</li>
                  <li>Xᵢ, Yᵢ = Individual data values</li>
                  <li>μₓ, μᵧ = Population means</li>
                  <li>X̄, Ȳ = Sample means</li>
                  <li>N = Population size, n = Sample size</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-6" data-testid="card-covariance-calculation">
            <CardHeader>
              <CardTitle className="text-lg">How to Calculate Covariance - Step by Step</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <p className="font-semibold text-sm mb-3">5-Step Process:</p>
                <div className="space-y-2 text-sm">
                  <div className="bg-muted p-3 rounded-lg">
                    <p className="font-semibold mb-1">Step 1: Calculate the means</p>
                    <p className="text-muted-foreground text-xs">Find X̄ and Ȳ (or μₓ and μᵧ for population)</p>
                  </div>
                  <div className="bg-muted p-3 rounded-lg">
                    <p className="font-semibold mb-1">Step 2: Find deviations from mean</p>
                    <p className="text-muted-foreground text-xs">Calculate (Xᵢ - X̄) and (Yᵢ - Ȳ) for each data point</p>
                  </div>
                  <div className="bg-muted p-3 rounded-lg">
                    <p className="font-semibold mb-1">Step 3: Multiply the deviations</p>
                    <p className="text-muted-foreground text-xs">For each pair, calculate (Xᵢ - X̄) × (Yᵢ - Ȳ)</p>
                  </div>
                  <div className="bg-muted p-3 rounded-lg">
                    <p className="font-semibold mb-1">Step 4: Sum all products</p>
                    <p className="text-muted-foreground text-xs">Add all the products: Σ[(Xᵢ - X̄)(Yᵢ - Ȳ)]</p>
                  </div>
                  <div className="bg-muted p-3 rounded-lg">
                    <p className="font-semibold mb-1">Step 5: Divide by n-1 (or N)</p>
                    <p className="text-muted-foreground text-xs">Sample: divide by (n-1), Population: divide by N</p>
                  </div>
                </div>
              </div>

              <div className="border-t pt-4">
                <p className="font-semibold text-sm mb-4">Worked Example: Study Hours vs Test Scores</p>
                <p className="text-xs text-muted-foreground mb-3">A teacher examines the relationship between study hours and test scores for 5 students:</p>
                <div className="bg-muted p-3 rounded-lg mb-4 overflow-x-auto">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="border-b">
                        <th className="p-2 text-left">Student</th>
                        <th className="p-2 text-center">Study Hours (X)</th>
                        <th className="p-2 text-center">Test Score (Y)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b"><td className="p-2">A</td><td className="p-2 text-center">2</td><td className="p-2 text-center">50</td></tr>
                      <tr className="border-b"><td className="p-2">B</td><td className="p-2 text-center">3</td><td className="p-2 text-center">60</td></tr>
                      <tr className="border-b"><td className="p-2">C</td><td className="p-2 text-center">4</td><td className="p-2 text-center">70</td></tr>
                      <tr className="border-b"><td className="p-2">D</td><td className="p-2 text-center">5</td><td className="p-2 text-center">80</td></tr>
                      <tr><td className="p-2">E</td><td className="p-2 text-center">6</td><td className="p-2 text-center">90</td></tr>
                    </tbody>
                  </table>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="bg-blue-50 dark:bg-blue-950/20 p-3 rounded">
                    <p className="font-semibold mb-1">Step 1 - Calculate means:</p>
                    <p className="text-xs text-muted-foreground">X̄ = (2+3+4+5+6)/5 = 20/5 = <strong>4 hours</strong></p>
                    <p className="text-xs text-muted-foreground">Ȳ = (50+60+70+80+90)/5 = 350/5 = <strong>70 marks</strong></p>
                  </div>

                  <div className="bg-green-50 dark:bg-green-950/20 p-3 rounded">
                    <p className="font-semibold mb-2">Steps 2-4 - Deviations and Products:</p>
                    <div className="overflow-x-auto">
                      <table className="w-full text-xs">
                        <thead>
                          <tr className="border-b">
                            <th className="p-1 text-left">Student</th>
                            <th className="p-1 text-center">(X-X̄)</th>
                            <th className="p-1 text-center">(Y-Ȳ)</th>
                            <th className="p-1 text-center">(X-X̄)(Y-Ȳ)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b"><td className="p-1">A</td><td className="p-1 text-center">-2</td><td className="p-1 text-center">-20</td><td className="p-1 text-center">40</td></tr>
                          <tr className="border-b"><td className="p-1">B</td><td className="p-1 text-center">-1</td><td className="p-1 text-center">-10</td><td className="p-1 text-center">10</td></tr>
                          <tr className="border-b"><td className="p-1">C</td><td className="p-1 text-center">0</td><td className="p-1 text-center">0</td><td className="p-1 text-center">0</td></tr>
                          <tr className="border-b"><td className="p-1">D</td><td className="p-1 text-center">1</td><td className="p-1 text-center">10</td><td className="p-1 text-center">10</td></tr>
                          <tr><td className="p-1">E</td><td className="p-1 text-center">2</td><td className="p-1 text-center">20</td><td className="p-1 text-center">40</td></tr>
                        </tbody>
                      </table>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">Σ[(Xᵢ - X̄)(Yᵢ - Ȳ)] = 40 + 10 + 0 + 10 + 40 = <strong>100</strong></p>
                  </div>

                  <div className="bg-amber-50 dark:bg-amber-950/20 p-3 rounded font-mono text-xs">
                    <p className="font-semibold mb-2">Step 5 - Final Calculation:</p>
                    <p className="mb-1">Cov(X,Y) = Σ[(Xᵢ - X̄)(Yᵢ - Ȳ)] / (n - 1)</p>
                    <p className="mb-1">Cov(X,Y) = 100 / (5 - 1) = 100 / 4</p>
                    <p className="font-bold text-base">Cov(X,Y) = 25</p>
                  </div>

                  <div className="bg-primary/10 p-3 rounded">
                    <p className="text-xs"><strong>Result:</strong> Cov(X,Y) = 25 (Positive Covariance)</p>
                    <p className="text-xs text-muted-foreground">Interpretation: Strong positive relationship. As study hours increase, test scores tend to increase together.</p>
                  </div>
                </div>
              </div>

              <div className="border-t pt-6">
                <p className="font-semibold text-sm mb-4">Worked Example 2: Plant Height vs Number of Leaves</p>
                <p className="text-xs text-muted-foreground mb-3">A botanist examines the relationship between height and leaf count for a population of 5 plants:</p>
                <div className="bg-muted p-3 rounded-lg mb-4 overflow-x-auto">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="border-b">
                        <th className="p-2 text-left">Plant</th>
                        <th className="p-2 text-center">Height (X, cm)</th>
                        <th className="p-2 text-center">Leaves (Y)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b"><td className="p-2">1</td><td className="p-2 text-center">10</td><td className="p-2 text-center">2</td></tr>
                      <tr className="border-b"><td className="p-2">2</td><td className="p-2 text-center">12</td><td className="p-2 text-center">4</td></tr>
                      <tr className="border-b"><td className="p-2">3</td><td className="p-2 text-center">14</td><td className="p-2 text-center">3</td></tr>
                      <tr className="border-b"><td className="p-2">4</td><td className="p-2 text-center">16</td><td className="p-2 text-center">5</td></tr>
                      <tr><td className="p-2">5</td><td className="p-2 text-center">18</td><td className="p-2 text-center">6</td></tr>
                    </tbody>
                  </table>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="bg-blue-50 dark:bg-blue-950/20 p-3 rounded">
                    <p className="font-semibold mb-1">Step 1 - Calculate population means:</p>
                    <p className="text-xs text-muted-foreground">μₓ = (10 + 12 + 14 + 16 + 18) / 5 = 70 / 5 = <strong>14 cm</strong></p>
                    <p className="text-xs text-muted-foreground">μᵧ = (2 + 4 + 3 + 5 + 6) / 5 = 20 / 5 = <strong>4 leaves</strong></p>
                  </div>

                  <div className="bg-green-50 dark:bg-green-950/20 p-3 rounded">
                    <p className="font-semibold mb-2">Steps 2-4 - Deviations and Products:</p>
                    <div className="overflow-x-auto">
                      <table className="w-full text-xs">
                        <thead>
                          <tr className="border-b">
                            <th className="p-1 text-left">Plant</th>
                            <th className="p-1 text-center">(X-μₓ)</th>
                            <th className="p-1 text-center">(Y-μᵧ)</th>
                            <th className="p-1 text-center">(X-μₓ)(Y-μᵧ)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b"><td className="p-1">1</td><td className="p-1 text-center">-4</td><td className="p-1 text-center">-2</td><td className="p-1 text-center">8</td></tr>
                          <tr className="border-b"><td className="p-1">2</td><td className="p-1 text-center">-2</td><td className="p-1 text-center">0</td><td className="p-1 text-center">0</td></tr>
                          <tr className="border-b"><td className="p-1">3</td><td className="p-1 text-center">0</td><td className="p-1 text-center">-1</td><td className="p-1 text-center">0</td></tr>
                          <tr className="border-b"><td className="p-1">4</td><td className="p-1 text-center">2</td><td className="p-1 text-center">1</td><td className="p-1 text-center">2</td></tr>
                          <tr><td className="p-1">5</td><td className="p-1 text-center">4</td><td className="p-1 text-center">2</td><td className="p-1 text-center">8</td></tr>
                        </tbody>
                      </table>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">Σ[(Xᵢ - μₓ)(Yᵢ - μᵧ)] = 8 + 0 + 0 + 2 + 8 = <strong>18</strong></p>
                  </div>

                  <div className="bg-amber-50 dark:bg-amber-950/20 p-3 rounded font-mono text-xs">
                    <p className="font-semibold mb-2">Step 5 - Final Calculation (Population):</p>
                    <p className="mb-1">σₓᵧ = Σ[(Xᵢ - μₓ)(Yᵢ - μᵧ)] / N</p>
                    <p className="mb-1">σₓᵧ = 18 / 5 = <strong>3.6</strong></p>
                    <p className="text-base">Result: Cov(X,Y) = 3.6</p>
                  </div>

                  <div className="bg-primary/10 p-3 rounded">
                    <p className="text-xs"><strong>Result:</strong> Cov(X,Y) = 3.6 (Positive Covariance)</p>
                    <p className="text-xs text-muted-foreground">Interpretation: Positive relationship. Taller plants tend to have more leaves.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-6" data-testid="card-covariance-examples-summary">
            <CardHeader>
              <CardTitle className="text-lg">Covariance Examples Summary Table</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b">
                      <th className="p-3 text-left bg-muted">Example</th>
                      <th className="p-3 text-center bg-muted">Sample/Population</th>
                      <th className="p-3 text-center bg-muted">Cov(X,Y)</th>
                      <th className="p-3 text-left bg-muted">Interpretation</th>
                    </tr>
                  </thead>
                  <tbody className="text-xs">
                    <tr className="border-b"><td className="p-3"><strong>Study Hours vs Scores</strong></td><td className="p-3 text-center">Sample (n=5)</td><td className="p-3 text-center"><strong>25</strong></td><td className="p-3">Strong positive: more study → higher scores</td></tr>
                    <tr><td className="p-3"><strong>Plant Height vs Leaves</strong></td><td className="p-3 text-center">Population (N=5)</td><td className="p-3 text-center"><strong>3.6</strong></td><td className="p-3">Positive: taller plants have more leaves</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-blue-50 dark:bg-blue-950/20 p-3 rounded-lg text-sm mt-4">
                <p className="text-xs"><strong>Note:</strong> Same data, different divisor changes the result. Sample uses (n-1) for unbiased estimate, Population uses N for exact value.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-6" data-testid="card-covariance-example3">
            <CardHeader>
              <CardTitle className="text-lg">Worked Example 3: Price vs Demand (Negative Covariance)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <p className="text-xs text-muted-foreground mb-3">A business analyzes the relationship between product price and demand for 4 weeks of data:</p>
                <div className="bg-muted p-3 rounded-lg mb-4 overflow-x-auto">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="border-b">
                        <th className="p-2 text-left">Week</th>
                        <th className="p-2 text-center">Price (X, $)</th>
                        <th className="p-2 text-center">Demand (Y, units)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b"><td className="p-2">1</td><td className="p-2 text-center">10</td><td className="p-2 text-center">50</td></tr>
                      <tr className="border-b"><td className="p-2">2</td><td className="p-2 text-center">12</td><td className="p-2 text-center">40</td></tr>
                      <tr className="border-b"><td className="p-2">3</td><td className="p-2 text-center">14</td><td className="p-2 text-center">30</td></tr>
                      <tr><td className="p-2">4</td><td className="p-2 text-center">16</td><td className="p-2 text-center">20</td></tr>
                    </tbody>
                  </table>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="bg-blue-50 dark:bg-blue-950/20 p-3 rounded">
                    <p className="font-semibold mb-1">Step 1 - Calculate means:</p>
                    <p className="text-xs text-muted-foreground">X̄ = (10+12+14+16)/4 = 52/4 = <strong>13 $</strong></p>
                    <p className="text-xs text-muted-foreground">Ȳ = (50+40+30+20)/4 = 140/4 = <strong>35 units</strong></p>
                  </div>

                  <div className="bg-green-50 dark:bg-green-950/20 p-3 rounded">
                    <p className="font-semibold mb-2">Steps 2-4 - Deviations and Products:</p>
                    <div className="overflow-x-auto">
                      <table className="w-full text-xs">
                        <thead>
                          <tr className="border-b">
                            <th className="p-1 text-left">Week</th>
                            <th className="p-1 text-center">(X-X̄)</th>
                            <th className="p-1 text-center">(Y-Ȳ)</th>
                            <th className="p-1 text-center">(X-X̄)(Y-Ȳ)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b"><td className="p-1">1</td><td className="p-1 text-center">-3</td><td className="p-1 text-center">15</td><td className="p-1 text-center">-45</td></tr>
                          <tr className="border-b"><td className="p-1">2</td><td className="p-1 text-center">-1</td><td className="p-1 text-center">5</td><td className="p-1 text-center">-5</td></tr>
                          <tr className="border-b"><td className="p-1">3</td><td className="p-1 text-center">1</td><td className="p-1 text-center">-5</td><td className="p-1 text-center">-5</td></tr>
                          <tr><td className="p-1">4</td><td className="p-1 text-center">3</td><td className="p-1 text-center">-15</td><td className="p-1 text-center">-45</td></tr>
                        </tbody>
                      </table>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">Σ[(Xᵢ - X̄)(Yᵢ - Ȳ)] = -45 + (-5) + (-5) + (-45) = <strong>-100</strong></p>
                  </div>

                  <div className="bg-amber-50 dark:bg-amber-950/20 p-3 rounded font-mono text-xs">
                    <p className="font-semibold mb-2">Step 5 - Final Calculation:</p>
                    <p className="mb-1">Cov(X,Y) = Σ[(Xᵢ - X̄)(Yᵢ - Ȳ)] / (n - 1)</p>
                    <p className="mb-1">Cov(X,Y) = -100 / (4 - 1) = -100 / 3</p>
                    <p className="font-bold text-base">Cov(X,Y) = -33.33</p>
                  </div>

                  <div className="bg-primary/10 p-3 rounded">
                    <p className="text-xs"><strong>Result:</strong> Cov(X,Y) = -33.33 (Negative Covariance)</p>
                    <p className="text-xs text-muted-foreground">Interpretation: Strong negative relationship. As price increases, demand decreases (inverse relationship).</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-6" data-testid="card-covariance-formulas-applied">
            <CardHeader>
              <CardTitle className="text-lg">Covariance Formulas Applied to All Examples</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="overflow-x-auto">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="border-b">
                        <th className="p-2 text-left bg-muted">Example</th>
                        <th className="p-2 text-center bg-muted">Formula Type</th>
                        <th className="p-2 text-left bg-muted">Formula Applied</th>
                        <th className="p-2 text-center bg-muted">Result</th>
                      </tr>
                    </thead>
                    <tbody className="text-xs">
                      <tr className="border-b">
                        <td className="p-2"><strong>Study Hours vs Scores</strong></td>
                        <td className="p-2 text-center">Sample</td>
                        <td className="p-2 font-mono">100 / (5-1) = 100/4</td>
                        <td className="p-2 text-center"><strong>25</strong></td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2"><strong>Plant Height vs Leaves</strong></td>
                        <td className="p-2 text-center">Population</td>
                        <td className="p-2 font-mono">18 / 5</td>
                        <td className="p-2 text-center"><strong>3.6</strong></td>
                      </tr>
                      <tr>
                        <td className="p-2"><strong>Price vs Demand</strong></td>
                        <td className="p-2 text-center">Sample</td>
                        <td className="p-2 font-mono">-100 / (4-1) = -100/3</td>
                        <td className="p-2 text-center"><strong>-33.33</strong></td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg space-y-2">
                  <p className="font-semibold text-sm">Key Formulas Used:</p>
                  <div className="font-mono text-xs space-y-1 bg-muted p-2 rounded">
                    <p><strong>Sample:</strong> Cov(X,Y) = Σ[(Xᵢ - X̄)(Yᵢ - Ȳ)] / (n - 1)</p>
                    <p><strong>Population:</strong> σₓᵧ = Σ[(Xᵢ - μₓ)(Yᵢ - μᵧ)] / N</p>
                    <p><strong>Alternative:</strong> Cov(X,Y) = [Σ(Xᵢ·Yᵢ) - (ΣXᵢ·ΣYᵢ)/n] / (n - 1)</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-6" data-testid="card-covariance-example-pdf1">
            <CardHeader>
              <CardTitle className="text-lg">Example 1: Sample Covariance Calculation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <p className="text-xs text-muted-foreground mb-3">Calculate the sample covariance for the following student data:</p>
                <div className="bg-muted p-3 rounded-lg mb-4 overflow-x-auto">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="border-b">
                        <th className="p-2 text-left">Student (i)</th>
                        <th className="p-2 text-center">Xi (Hours)</th>
                        <th className="p-2 text-center">Yi (Score)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b"><td className="p-2">1</td><td className="p-2 text-center">2</td><td className="p-2 text-center">4</td></tr>
                      <tr className="border-b"><td className="p-2">2</td><td className="p-2 text-center">4</td><td className="p-2 text-center">8</td></tr>
                      <tr><td className="p-2">3</td><td className="p-2 text-center">6</td><td className="p-2 text-center">6</td></tr>
                    </tbody>
                  </table>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="bg-blue-50 dark:bg-blue-950/20 p-3 rounded">
                    <p className="font-semibold mb-1">Step 1 - Calculate means:</p>
                    <p className="text-xs text-muted-foreground">X̄ = (2+4+6)/3 = 12/3 = <strong>4 hours</strong></p>
                    <p className="text-xs text-muted-foreground">Ȳ = (4+8+6)/3 = 18/3 = <strong>6 marks</strong></p>
                  </div>

                  <div className="bg-green-50 dark:bg-green-950/20 p-3 rounded">
                    <p className="font-semibold mb-2">Steps 2-4 - Deviations and Products:</p>
                    <div className="overflow-x-auto">
                      <table className="w-full text-xs">
                        <thead>
                          <tr className="border-b">
                            <th className="p-1 text-left">i</th>
                            <th className="p-1 text-center">(Xi-X̄)</th>
                            <th className="p-1 text-center">(Yi-Ȳ)</th>
                            <th className="p-1 text-center">(Xi-X̄)(Yi-Ȳ)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b"><td className="p-1">1</td><td className="p-1 text-center">-2</td><td className="p-1 text-center">-2</td><td className="p-1 text-center">4</td></tr>
                          <tr className="border-b"><td className="p-1">2</td><td className="p-1 text-center">0</td><td className="p-1 text-center">2</td><td className="p-1 text-center">0</td></tr>
                          <tr><td className="p-1">3</td><td className="p-1 text-center">2</td><td className="p-1 text-center">0</td><td className="p-1 text-center">0</td></tr>
                        </tbody>
                      </table>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">Σ[(Xᵢ - X̄)(Yᵢ - Ȳ)] = 4 + 0 + 0 = <strong>4</strong></p>
                  </div>

                  <div className="bg-amber-50 dark:bg-amber-950/20 p-3 rounded font-mono text-xs">
                    <p className="font-semibold mb-2">Step 5 - Final Calculation:</p>
                    <p className="mb-1">Cov(X,Y) = Σ[(Xᵢ - X̄)(Yᵢ - Ȳ)] / (n - 1)</p>
                    <p className="mb-1">Cov(X,Y) = 4 / (3 - 1) = 4 / 2</p>
                    <p className="font-bold text-base">Cov(X,Y) = 2</p>
                  </div>

                  <div className="bg-primary/10 p-3 rounded">
                    <p className="text-xs"><strong>Result:</strong> Cov(X,Y) = 2 (Positive Covariance)</p>
                    <p className="text-xs text-muted-foreground">Interpretation: Positive relationship. Students who study more tend to score higher.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-6" data-testid="card-covariance-example-pdf2">
            <CardHeader>
              <CardTitle className="text-lg">Example 2: Population Covariance Calculation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <p className="text-xs text-muted-foreground mb-3">Calculate the population covariance for employee years of experience and salary:</p>
                <div className="bg-muted p-3 rounded-lg mb-4 overflow-x-auto">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="border-b">
                        <th className="p-2 text-left">Employee (i)</th>
                        <th className="p-2 text-center">Xi (Years Exp.)</th>
                        <th className="p-2 text-center">Yi (Salary $1000s)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b"><td className="p-2">1</td><td className="p-2 text-center">2</td><td className="p-2 text-center">4</td></tr>
                      <tr className="border-b"><td className="p-2">2</td><td className="p-2 text-center">4</td><td className="p-2 text-center">8</td></tr>
                      <tr className="border-b"><td className="p-2">3</td><td className="p-2 text-center">6</td><td className="p-2 text-center">6</td></tr>
                      <tr><td className="p-2">4</td><td className="p-2 text-center">8</td><td className="p-2 text-center">10</td></tr>
                    </tbody>
                  </table>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="bg-blue-50 dark:bg-blue-950/20 p-3 rounded">
                    <p className="font-semibold mb-2">Step 1 - Calculate population means:</p>
                    <p className="text-xs text-muted-foreground">μₓ = (ΣXᵢ)/(N) = (2+4+6+8)/4 = 20/4 = <strong>5 years</strong></p>
                    <p className="text-xs text-muted-foreground">μᵧ = (ΣYᵢ)/(N) = (4+8+6+10)/4 = 28/4 = <strong>7 ($1000s)</strong></p>
                  </div>

                  <div className="bg-green-50 dark:bg-green-950/20 p-3 rounded">
                    <p className="font-semibold mb-2">Steps 2-4 - Deviations and Products (The Numerator):</p>
                    <div className="overflow-x-auto">
                      <table className="w-full text-xs">
                        <thead>
                          <tr className="border-b">
                            <th className="p-1 text-left">i</th>
                            <th className="p-1 text-center">(Xi-μx)</th>
                            <th className="p-1 text-center">(Yi-μy)</th>
                            <th className="p-1 text-center">(Xi-μx)(Yi-μy)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b"><td className="p-1">1</td><td className="p-1 text-center">-3</td><td className="p-1 text-center">-3</td><td className="p-1 text-center">9</td></tr>
                          <tr className="border-b"><td className="p-1">2</td><td className="p-1 text-center">-1</td><td className="p-1 text-center">1</td><td className="p-1 text-center">-1</td></tr>
                          <tr className="border-b"><td className="p-1">3</td><td className="p-1 text-center">1</td><td className="p-1 text-center">-1</td><td className="p-1 text-center">-1</td></tr>
                          <tr><td className="p-1">4</td><td className="p-1 text-center">3</td><td className="p-1 text-center">3</td><td className="p-1 text-center">9</td></tr>
                        </tbody>
                      </table>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">The numerator Σ[(Xᵢ - μₓ)(Yᵢ - μᵧ)] = 9 + (-1) + (-1) + 9 = <strong>16</strong></p>
                  </div>

                  <div className="bg-amber-50 dark:bg-amber-950/20 p-3 rounded font-mono text-xs">
                    <p className="font-semibold mb-2">Step 5 - Calculate Population Covariance:</p>
                    <p className="mb-1">σₓᵧ = Σ[(Xᵢ - μₓ)(Yᵢ - μᵧ)] / N</p>
                    <p className="mb-1">σₓᵧ = 16 / 4</p>
                    <p className="font-bold text-base">σₓᵧ = 4</p>
                  </div>

                  <div className="bg-primary/10 p-3 rounded">
                    <p className="text-xs"><strong>Result:</strong> σₓᵧ = 4 (Positive Population Covariance)</p>
                    <p className="text-xs text-muted-foreground">Interpretation: Positive relationship. Employees with more experience tend to have higher salaries.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-6" data-testid="card-covariance-vs-correlation">
            <CardHeader>
              <CardTitle className="text-lg">Covariance vs Correlation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b">
                      <th className="p-3 text-left bg-muted">Property</th>
                      <th className="p-3 text-left bg-muted">Covariance</th>
                      <th className="p-3 text-left bg-muted">Correlation</th>
                    </tr>
                  </thead>
                  <tbody className="text-xs">
                    <tr className="border-b"><td className="p-3"><strong>Definition</strong></td><td className="p-3">Measure of joint variability</td><td className="p-3">Standardized measure of association</td></tr>
                    <tr className="border-b"><td className="p-3"><strong>Range</strong></td><td className="p-3">-∞ to +∞</td><td className="p-3">-1 to +1</td></tr>
                    <tr className="border-b"><td className="p-3"><strong>Units</strong></td><td className="p-3">Product of X and Y units</td><td className="p-3">Unit-free (dimensionless)</td></tr>
                    <tr className="border-b"><td className="p-3"><strong>Interpretation</strong></td><td className="p-3">Harder to interpret magnitude</td><td className="p-3">Easy to interpret strength</td></tr>
                    <tr className="border-b"><td className="p-3"><strong>Formula</strong></td><td className="p-3">Σ[(Xᵢ-X̄)(Yᵢ-Ȳ)]/(n-1)</td><td className="p-3">Cov(X,Y)/[σₓ·σᵧ]</td></tr>
                    <tr><td className="p-3"><strong>Use</strong></td><td className="p-3">Intermediate calculation</td><td className="p-3">Final analysis & reporting</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-blue-50 dark:bg-blue-950/20 p-3 rounded-lg text-sm mt-4">
                <p className="text-xs"><strong>Key Insight:</strong> Correlation = Covariance / (Standard Deviation of X × Standard Deviation of Y)</p>
                <p className="text-xs text-muted-foreground mt-1">This standardization is what allows correlation to always be between -1 and +1</p>
              </div>
            </CardContent>
          </Card>

          <Card data-testid="card-covariance-interpretation">
            <CardHeader>
              <CardTitle className="text-lg">Interpreting Covariance Values</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3 text-sm">
                <div className="border-l-4 border-chart-2 pl-4 bg-muted/50 p-3 rounded">
                  <p className="font-semibold">Cov(X,Y) &gt; 0 (Positive)</p>
                  <p className="text-xs text-muted-foreground">Variables move in same direction. Example: Height and Weight</p>
                </div>
                <div className="border-l-4 border-chart-5 pl-4 bg-muted/50 p-3 rounded">
                  <p className="font-semibold">Cov(X,Y) &lt; 0 (Negative)</p>
                  <p className="text-xs text-muted-foreground">Variables move in opposite directions. Example: Price and Demand</p>
                </div>
                <div className="border-l-4 border-muted-foreground pl-4 bg-muted/50 p-3 rounded">
                  <p className="font-semibold">Cov(X,Y) ≈ 0 (Zero/Near Zero)</p>
                  <p className="text-xs text-muted-foreground">No clear linear relationship. Example: Shoe size and Intelligence</p>
                </div>
                <div className="border-l-4 border-chart-3 pl-4 bg-muted/50 p-3 rounded">
                  <p className="font-semibold">Large |Cov(X,Y)| (High Magnitude)</p>
                  <p className="text-xs text-muted-foreground">Strong joint variability (but interpretation depends on data units)</p>
                </div>
                <div className="border-l-4 border-chart-4 pl-4 bg-muted/50 p-3 rounded">
                  <p className="font-semibold">Small |Cov(X,Y)| (Low Magnitude)</p>
                  <p className="text-xs text-muted-foreground">Weak joint variability (units matter - small absolute value might still indicate relationship)</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Topic 4: Spearman's Rank Correlation */}
        <div id="spearman-topic" className="mb-16 scroll-mt-20">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-bold flex items-center gap-2" data-testid="heading-spearman">
              <Trophy className="w-8 h-8" />
              Topic 4: Spearman's Rank Correlation
            </h3>
            <Button
              variant="outline"
              size="sm"
              onClick={() => scrollToTopic("covariance-topic")}
              className="gap-2"
              data-testid="button-prev-to-covariance"
            >
              ← Previous
            </Button>
          </div>

          <Card className="mb-6" data-testid="card-spearman-intro">
            <CardHeader>
              <CardTitle className="text-lg">What is Spearman's Rank Correlation?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm">
                <strong>Spearman's Rank Correlation</strong> measures how well two things move together in terms of <strong>rank (positions)</strong>, not actual values. It answers: if one variable increases, does the other also increase (or decrease) in a consistent pattern?
              </p>
              <div className="bg-muted p-4 rounded-lg space-y-3">
                <p className="text-sm font-semibold mb-2">It measures a <strong>monotonic relationship</strong>:</p>
                <div className="text-sm space-y-2">
                  <div className="flex gap-2"><span className="font-semibold min-w-fit">Positive Monotonic:</span> <span className="text-muted-foreground">As one variable increases, the other always increases</span></div>
                  <div className="flex gap-2"><span className="font-semibold min-w-fit">Negative Monotonic:</span> <span className="text-muted-foreground">As one variable increases, the other always decreases</span></div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-6" data-testid="card-spearman-why">
            <CardHeader>
              <CardTitle className="text-lg">Why Use Spearman's Correlation?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="border-l-4 border-chart-2 pl-4">
                  <p className="font-semibold mb-2">When data is not normally distributed</p>
                  <p className="text-xs text-muted-foreground">Works with data that don't follow typical distribution patterns</p>
                </div>
                <div className="border-l-4 border-chart-3 pl-4">
                  <p className="font-semibold mb-2">When data is ordinal (ranked)</p>
                  <p className="text-xs text-muted-foreground">Works with ranked or categorical data (1st, 2nd, 3rd, etc.)</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-6" data-testid="card-spearman-formula">
            <CardHeader>
              <CardTitle className="text-lg">Spearman Formula</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-muted p-4 rounded-lg font-mono text-sm space-y-2">
                <p className="font-semibold mb-2">Formula:</p>
                <p className="text-base">ρ = 1 - [6Σd²] / [n(n² - 1)]</p>
              </div>
              <div className="space-y-2 text-sm">
                <p><strong>Where:</strong></p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>ρ (rho) = Spearman's rank correlation coefficient</li>
                  <li>d = difference in ranks for each pair</li>
                  <li>Σd² = sum of squared differences</li>
                  <li>n = number of data pairs</li>
                  <li>ρ ∈ [-1, 1] = correlation coefficient</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-6" data-testid="card-spearman-values">
            <CardHeader>
              <CardTitle className="text-lg">Interpreting Spearman's ρ Values</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <div className="flex gap-3 bg-muted p-3 rounded-lg">
                  <div className="font-mono font-bold min-w-fit">ρ = +1</div>
                  <div><span className="font-semibold">Perfect Positive:</span> Ranks move together exactly</div>
                </div>
                <div className="flex gap-3 bg-muted p-3 rounded-lg">
                  <div className="font-mono font-bold min-w-fit">ρ = 0</div>
                  <div><span className="font-semibold">No Relation:</span> Ranks have no relationship</div>
                </div>
                <div className="flex gap-3 bg-muted p-3 rounded-lg">
                  <div className="font-mono font-bold min-w-fit">ρ = -1</div>
                  <div><span className="font-semibold">Perfect Negative:</span> Ranks move opposite exactly</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-6" data-testid="card-spearman-calculation">
            <CardHeader>
              <CardTitle className="text-lg">How to Calculate Spearman's ρ - Step by Step</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <p className="font-semibold text-sm mb-3">6-Step Process:</p>
                <div className="space-y-3 text-sm">
                  <div className="bg-muted p-3 rounded-lg">
                    <p className="font-semibold mb-1">Step 1: Rank the data</p>
                    <p className="text-muted-foreground text-xs">Convert raw scores to ranks (1st, 2nd, 3rd...)</p>
                  </div>
                  <div className="bg-muted p-3 rounded-lg">
                    <p className="font-semibold mb-1">Step 2: Find the difference in ranks (d)</p>
                    <p className="text-muted-foreground text-xs">d = Rank₁ - Rank₂ for each pair</p>
                  </div>
                  <div className="bg-muted p-3 rounded-lg">
                    <p className="font-semibold mb-1">Step 3: Square each difference</p>
                    <p className="text-muted-foreground text-xs">d² for each pair</p>
                  </div>
                  <div className="bg-muted p-3 rounded-lg">
                    <p className="font-semibold mb-1">Step 4: Sum all squared differences</p>
                    <p className="text-muted-foreground text-xs">Σd² = sum of all d² values</p>
                  </div>
                  <div className="bg-muted p-3 rounded-lg">
                    <p className="font-semibold mb-1">Step 5: Calculate denominator</p>
                    <p className="text-muted-foreground text-xs">n(n² - 1) where n is number of pairs</p>
                  </div>
                  <div className="bg-muted p-3 rounded-lg">
                    <p className="font-semibold mb-1">Step 6: Apply the formula</p>
                    <p className="text-muted-foreground text-xs">ρ = 1 - [6Σd²] / [n(n² - 1)]</p>
                  </div>
                </div>
              </div>

              <div className="border-t pt-4">
                <p className="font-semibold text-sm mb-4">Worked Example: Maths vs English Ranks</p>
                <div className="bg-muted p-3 rounded-lg mb-4 overflow-x-auto">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="border-b">
                        <th className="p-2 text-left">Student</th>
                        <th className="p-2 text-center">Maths Rank</th>
                        <th className="p-2 text-center">English Rank</th>
                        <th className="p-2 text-center">d</th>
                        <th className="p-2 text-center">d²</th>
                      </tr>
                    </thead>
                    <tbody className="text-xs">
                      <tr className="border-b hover:bg-black/5">
                        <td className="p-2">A</td>
                        <td className="p-2 text-center">1</td>
                        <td className="p-2 text-center">2</td>
                        <td className="p-2 text-center">-1</td>
                        <td className="p-2 text-center">1</td>
                      </tr>
                      <tr className="border-b hover:bg-black/5">
                        <td className="p-2">B</td>
                        <td className="p-2 text-center">2</td>
                        <td className="p-2 text-center">1</td>
                        <td className="p-2 text-center">1</td>
                        <td className="p-2 text-center">1</td>
                      </tr>
                      <tr className="border-b hover:bg-black/5">
                        <td className="p-2">C</td>
                        <td className="p-2 text-center">3</td>
                        <td className="p-2 text-center">3</td>
                        <td className="p-2 text-center">0</td>
                        <td className="p-2 text-center">0</td>
                      </tr>
                      <tr className="border-b hover:bg-black/5">
                        <td className="p-2">D</td>
                        <td className="p-2 text-center">4</td>
                        <td className="p-2 text-center">4</td>
                        <td className="p-2 text-center">0</td>
                        <td className="p-2 text-center">0</td>
                      </tr>
                      <tr className="border-b hover:bg-black/5">
                        <td className="p-2">E</td>
                        <td className="p-2 text-center">5</td>
                        <td className="p-2 text-center">5</td>
                        <td className="p-2 text-center">0</td>
                        <td className="p-2 text-center">0</td>
                      </tr>
                      <tr className="font-semibold bg-primary/10">
                        <td className="p-2" colSpan={4}>Σd² =</td>
                        <td className="p-2 text-center">2</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="bg-blue-50 dark:bg-blue-950/20 p-3 rounded">
                    <p className="font-semibold mb-1">Step 1 & 2 - Ranks and Differences (from table above):</p>
                    <p className="text-xs text-muted-foreground">Each student already has ranks in Maths and English</p>
                    <p className="text-xs text-muted-foreground">d values show how much ranks differ for each student</p>
                  </div>

                  <div className="bg-green-50 dark:bg-green-950/20 p-3 rounded">
                    <p className="font-semibold mb-1">Steps 3 & 4 - Sum of d² (from table above):</p>
                    <p className="text-xs text-muted-foreground">Σd² = 1 + 1 + 0 + 0 + 0 = 2</p>
                  </div>

                  <div className="bg-amber-50 dark:bg-amber-950/20 p-3 rounded font-mono text-xs">
                    <p className="font-semibold mb-2">Step 5 & 6 - Final Calculation:</p>
                    <p className="mb-1">n = 5 students</p>
                    <p className="mb-1">n(n² - 1) = 5(25 - 1) = 5 × 24 = 120</p>
                    <p className="mb-1">ρ = 1 - (6 × 2) / 120</p>
                    <p className="mb-1">ρ = 1 - 12 / 120</p>
                    <p className="mb-1">ρ = 1 - 0.1</p>
                    <p className="font-bold text-base">ρ = 0.9</p>
                  </div>

                  <div className="bg-primary/10 p-3 rounded">
                    <p className="text-xs"><strong>Result:</strong> ρ = 0.9 = Very Strong Positive Correlation</p>
                    <p className="text-xs text-muted-foreground">Students who score high in Maths also tend to score high in English</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card data-testid="card-spearman-meaning">
            <CardHeader>
              <CardTitle className="text-lg">Real-Life Applications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <div className="border-l-4 border-chart-2 pl-4 bg-muted/50 p-3 rounded">
                  <p className="font-semibold">"Do students who score high in Maths also score high in Science?"</p>
                </div>
                <div className="border-l-4 border-chart-3 pl-4 bg-muted/50 p-3 rounded">
                  <p className="font-semibold">"Do people who like spicy food also like horror movies?"</p>
                </div>
                <div className="border-l-4 border-chart-4 pl-4 bg-muted/50 p-3 rounded">
                  <p className="font-semibold">"Do richer people also have larger houses?"</p>
                </div>
                <div className="border-l-4 border-chart-5 pl-4 bg-muted/50 p-3 rounded">
                  <p className="font-semibold">"Do employees with more experience always get higher salaries?"</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Flashcards Section */}
        <div id="flashcards-section" className="mb-16 scroll-mt-20">
          <h3 className="text-3xl font-bold flex items-center gap-2 mb-8" data-testid="heading-flashcards">
            <Zap className="w-8 h-8" />
            Interactive Flashcards
          </h3>
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Test Your Knowledge</CardTitle>
            </CardHeader>
            <CardContent>
              <FlashcardViewer />
            </CardContent>
          </Card>
        </div>

        {/* Examples for Practicals */}
        <div id="practicals-section" className="mb-16 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2" data-testid="heading-practicals">
            <AlertCircle className="w-8 h-8" />
            Examples for Practicals
          </h2>

          {/* Question 1 */}
          <Card className="mb-6" data-testid="card-practical-q1">
            <CardHeader>
              <CardTitle className="text-lg">Q.1: Correlation with a Negative Trend</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <p className="text-sm"><strong>Scenario:</strong> A local business is trying to find the relationship between Price (X, in $) and Demand (Y, units sold). Data for four weeks:</p>
                <div className="bg-muted p-3 rounded-lg overflow-x-auto">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="border-b">
                        <th className="p-2 text-left">Week</th>
                        <th className="p-2 text-center">Price (X)</th>
                        <th className="p-2 text-center">Demand (Y)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b"><td className="p-2">1</td><td className="p-2 text-center">10</td><td className="p-2 text-center">50</td></tr>
                      <tr className="border-b"><td className="p-2">2</td><td className="p-2 text-center">12</td><td className="p-2 text-center">40</td></tr>
                      <tr className="border-b"><td className="p-2">3</td><td className="p-2 text-center">14</td><td className="p-2 text-center">30</td></tr>
                      <tr><td className="p-2">4</td><td className="p-2 text-center">16</td><td className="p-2 text-center">20</td></tr>
                    </tbody>
                  </table>
                </div>

                <div className="space-y-3 text-sm">
                  <p className="font-semibold">Given: X̄ = $13, Ȳ = 35 units</p>
                  
                  <div className="bg-blue-50 dark:bg-blue-950/20 p-3 rounded">
                    <p className="font-semibold mb-2">(a) Calculate three required components for r formula:</p>
                    <div className="font-mono text-xs space-y-1 text-muted-foreground">
                      <p>• Σ(Xᵢ-X̄)(Yᵢ-Ȳ) = (-3)(-15) + (-1)(-5) + (1)(5) + (3)(15) = 45 + 5 + 5 + 45 = <strong>100</strong></p>
                      <p>• Σ(Xᵢ-X̄)² = (-3)² + (-1)² + (1)² + (3)² = 9 + 1 + 1 + 9 = <strong>20</strong></p>
                      <p>• Σ(Yᵢ-Ȳ)² = (-15)² + (-5)² + (5)² + (15)² = 225 + 25 + 25 + 225 = <strong>500</strong></p>
                    </div>
                  </div>

                  <div className="bg-green-50 dark:bg-green-950/20 p-3 rounded">
                    <p className="font-semibold mb-2">(b) Calculate Pearson's r:</p>
                    <div className="font-mono text-xs space-y-1">
                      <p>r = Σ(Xᵢ-X̄)(Yᵢ-Ȳ) / √[Σ(Xᵢ-X̄)² × Σ(Yᵢ-Ȳ)²]</p>
                      <p>r = 100 / √(20 × 500) = 100 / √10000</p>
                      <p>r = 100 / 100 = <strong>-1.0</strong></p>
                      <p className="text-muted-foreground">Perfect negative correlation: as price increases, demand always decreases</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Question 2 */}
          <Card className="mb-6" data-testid="card-practical-q2">
            <CardHeader>
              <CardTitle className="text-lg">Q.2: Population Covariance Calculation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <p className="text-sm"><strong>Scenario:</strong> A scientist studies population (N=5) of local plant species measuring Height (X, cm) and Number of Leaves (Y):</p>
                <div className="bg-muted p-3 rounded-lg overflow-x-auto">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="border-b">
                        <th className="p-2 text-left">Plant</th>
                        <th className="p-2 text-center">Height (X)</th>
                        <th className="p-2 text-center">Leaves (Y)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b"><td className="p-2">1</td><td className="p-2 text-center">10</td><td className="p-2 text-center">2</td></tr>
                      <tr className="border-b"><td className="p-2">2</td><td className="p-2 text-center">12</td><td className="p-2 text-center">4</td></tr>
                      <tr className="border-b"><td className="p-2">3</td><td className="p-2 text-center">14</td><td className="p-2 text-center">3</td></tr>
                      <tr className="border-b"><td className="p-2">4</td><td className="p-2 text-center">16</td><td className="p-2 text-center">5</td></tr>
                      <tr><td className="p-2">5</td><td className="p-2 text-center">18</td><td className="p-2 text-center">6</td></tr>
                    </tbody>
                  </table>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="bg-blue-50 dark:bg-blue-950/20 p-3 rounded">
                    <p className="font-semibold mb-2">(a) Calculate population means:</p>
                    <div className="font-mono text-xs space-y-1 text-muted-foreground">
                      <p>μₓ = (10 + 12 + 14 + 16 + 18) / 5 = 70 / 5 = <strong>14 cm</strong></p>
                      <p>μᵧ = (2 + 4 + 3 + 5 + 6) / 5 = 20 / 5 = <strong>4 leaves</strong></p>
                    </div>
                  </div>

                  <div className="bg-green-50 dark:bg-green-950/20 p-3 rounded">
                    <p className="font-semibold mb-2">(b) Calculate population covariance:</p>
                    <div className="font-mono text-xs space-y-1">
                      <p>Cov(X,Y) = Σ[(Xᵢ - μₓ)(Yᵢ - μᵧ)] / N</p>
                      <p className="text-muted-foreground">Deviations: (-4,-2), (-2,0), (0,-1), (2,1), (4,2)</p>
                      <p>Products: 8 + 0 + 0 + 2 + 8 = 18</p>
                      <p>Cov(X,Y) = 18 / 5 = <strong>3.6</strong></p>
                      <p className="text-muted-foreground">Positive covariance: height and leaf count increase together</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Question 3 */}
          <Card className="mb-6" data-testid="card-practical-q3">
            <CardHeader>
              <CardTitle className="text-lg">Q.3: Why is Correlation Always Between –1 and +1?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3 text-sm">
                <div className="bg-amber-50 dark:bg-amber-950/20 p-4 rounded-lg space-y-3">
                  <p className="font-semibold">Mathematical Explanation:</p>
                  
                  <div className="space-y-2">
                    <p>The Pearson correlation coefficient uses the formula:</p>
                    <p className="font-mono text-xs bg-muted p-2 rounded">r = Σ(Xᵢ-X̄)(Yᵢ-Ȳ) / √[Σ(Xᵢ-X̄)² × Σ(Yᵢ-Ȳ)²]</p>
                  </div>

                  <div className="space-y-2">
                    <p><strong>By Cauchy-Schwarz Inequality:</strong></p>
                    <p className="text-xs text-muted-foreground">The numerator [sum of products of deviations] is always ≤ denominator [geometric mean of squared deviations]</p>
                    <p className="font-mono text-xs bg-muted p-2 rounded">|Σ(Xᵢ-X̄)(Yᵢ-Ȳ)| ≤ √[Σ(Xᵢ-X̄)² × Σ(Yᵢ-Ȳ)²]</p>
                  </div>

                  <div className="border-l-4 border-chart-2 pl-3">
                    <p><strong>Result:</strong></p>
                    <p className="text-xs text-muted-foreground">Therefore: -1 ≤ r ≤ +1</p>
                  </div>

                  <div className="space-y-2">
                    <p><strong>Boundary Cases:</strong></p>
                    <ul className="list-disc list-inside text-xs space-y-1 text-muted-foreground">
                      <li>r = +1: Perfect positive linear relationship (all points on upward line)</li>
                      <li>r = -1: Perfect negative linear relationship (all points on downward line)</li>
                      <li>r = 0: No linear relationship (points scattered randomly)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Question 4 */}
          <Card className="mb-6" data-testid="card-practical-q4">
            <CardHeader>
              <CardTitle className="text-lg">Q.4: Calculate Spearman's Rank Correlation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <p className="text-sm"><strong>Scenario:</strong> Marks of 6 students in Economics and Statistics:</p>
                <div className="bg-muted p-3 rounded-lg overflow-x-auto mb-4">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="border-b">
                        <th className="p-2 text-left">Student</th>
                        <th className="p-2 text-center">A</th>
                        <th className="p-2 text-center">B</th>
                        <th className="p-2 text-center">C</th>
                        <th className="p-2 text-center">D</th>
                        <th className="p-2 text-center">E</th>
                        <th className="p-2 text-center">F</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-2 font-semibold">Economics</td>
                        <td className="p-2 text-center">50</td>
                        <td className="p-2 text-center">60</td>
                        <td className="p-2 text-center">40</td>
                        <td className="p-2 text-center">75</td>
                        <td className="p-2 text-center">65</td>
                        <td className="p-2 text-center">80</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-semibold">Statistics</td>
                        <td className="p-2 text-center">55</td>
                        <td className="p-2 text-center">65</td>
                        <td className="p-2 text-center">45</td>
                        <td className="p-2 text-center">70</td>
                        <td className="p-2 text-center">60</td>
                        <td className="p-2 text-center">85</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="bg-blue-50 dark:bg-blue-950/20 p-3 rounded">
                    <p className="font-semibold mb-2">Step 1 & 2: Assign Ranks and Find d:</p>
                    <div className="overflow-x-auto">
                      <table className="w-full text-xs mt-2">
                        <thead>
                          <tr className="border-b">
                            <th className="p-1 text-left">Student</th>
                            <th className="p-1 text-center">Econ Rank</th>
                            <th className="p-1 text-center">Stat Rank</th>
                            <th className="p-1 text-center">d</th>
                            <th className="p-1 text-center">d²</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b"><td className="p-1">A</td><td className="p-1 text-center">3</td><td className="p-1 text-center">3</td><td className="p-1 text-center">0</td><td className="p-1 text-center">0</td></tr>
                          <tr className="border-b"><td className="p-1">B</td><td className="p-1 text-center">4</td><td className="p-1 text-center">4</td><td className="p-1 text-center">0</td><td className="p-1 text-center">0</td></tr>
                          <tr className="border-b"><td className="p-1">C</td><td className="p-1 text-center">1</td><td className="p-1 text-center">1</td><td className="p-1 text-center">0</td><td className="p-1 text-center">0</td></tr>
                          <tr className="border-b"><td className="p-1">D</td><td className="p-1 text-center">5</td><td className="p-1 text-center">5</td><td className="p-1 text-center">0</td><td className="p-1 text-center">0</td></tr>
                          <tr className="border-b"><td className="p-1">E</td><td className="p-1 text-center">2</td><td className="p-1 text-center">2</td><td className="p-1 text-center">0</td><td className="p-1 text-center">0</td></tr>
                          <tr className="border-b"><td className="p-1">F</td><td className="p-1 text-center">6</td><td className="p-1 text-center">6</td><td className="p-1 text-center">0</td><td className="p-1 text-center">0</td></tr>
                          <tr className="font-semibold bg-primary/10"><td className="p-1" colSpan={4}>Σd² =</td><td className="p-1 text-center">0</td></tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="bg-green-50 dark:bg-green-950/20 p-3 rounded font-mono text-xs">
                    <p className="font-semibold mb-2">Step 3-6: Calculate ρ:</p>
                    <p className="mb-1">n = 6 students</p>
                    <p className="mb-1">ρ = 1 - [6Σd²] / [n(n² - 1)]</p>
                    <p className="mb-1">ρ = 1 - (6 × 0) / [6(36 - 1)]</p>
                    <p className="mb-1">ρ = 1 - 0 / (6 × 35) = 1 - 0 / 210</p>
                    <p className="font-bold text-base">ρ = 1.0</p>
                  </div>

                  <div className="bg-primary/10 p-3 rounded">
                    <p className="text-xs"><strong>Result:</strong> ρ = 1.0 = Perfect Positive Correlation</p>
                    <p className="text-xs text-muted-foreground">Students rank identically in both subjects - perfect monotonic relationship</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Question 5 */}
          <Card data-testid="card-practical-q5">
            <CardHeader>
              <CardTitle className="text-lg">Q.5: Limitations of Correlation as a Measure of Association</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3 text-sm">
                <div className="border-l-4 border-chart-5 pl-4 bg-muted/50 p-3 rounded">
                  <p className="font-semibold mb-1">1. Does Not Imply Causation</p>
                  <p className="text-xs text-muted-foreground">Two variables moving together doesn't mean one causes the other. For example, ice cream sales and drowning deaths are correlated but both are caused by warm weather.</p>
                </div>

                <div className="border-l-4 border-chart-5 pl-4 bg-muted/50 p-3 rounded">
                  <p className="font-semibold mb-1">2. Outliers Can Distort Results</p>
                  <p className="text-xs text-muted-foreground">Extreme values can significantly change the correlation coefficient. One outlier can shift r from 0.8 to 0.3, making the correlation appear weaker than it truly is.</p>
                </div>

                <div className="border-l-4 border-chart-5 pl-4 bg-muted/50 p-3 rounded">
                  <p className="font-semibold mb-1">3. Only Measures Linear Relationships</p>
                  <p className="text-xs text-muted-foreground">Pearson's r = 0 doesn't mean no relationship exists. A curved or U-shaped relationship will show r ≈ 0 even though variables are strongly related.</p>
                </div>

                <div className="border-l-4 border-chart-5 pl-4 bg-muted/50 p-3 rounded">
                  <p className="font-semibold mb-1">4. Requires Accurate Data</p>
                  <p className="text-xs text-muted-foreground">Measurement errors, missing values, or incorrect data entry lead to misleading correlation results. "Garbage in, garbage out"</p>
                </div>

                <div className="border-l-4 border-chart-5 pl-4 bg-muted/50 p-3 rounded">
                  <p className="font-semibold mb-1">5. Assumes Bivariate Normal Distribution</p>
                  <p className="text-xs text-muted-foreground">Pearson's correlation is most reliable with normally distributed data. For skewed or non-normal data, Spearman's correlation is preferable.</p>
                </div>

                <div className="border-l-4 border-chart-5 pl-4 bg-muted/50 p-3 rounded">
                  <p className="font-semibold mb-1">6. Sensitive to Scale Changes</p>
                  <p className="text-xs text-muted-foreground">While the correlation coefficient itself doesn't change with scale, the practical interpretation can be affected by different units of measurement.</p>
                </div>

                <div className="border-l-4 border-chart-5 pl-4 bg-muted/50 p-3 rounded">
                  <p className="font-semibold mb-1">7. Sample Size Matters</p>
                  <p className="text-xs text-muted-foreground">With small sample sizes, correlation can be high by chance. Always verify statistical significance (p-value) alongside correlation coefficient.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Question 6: Flashcard Practice */}
          <Card className="mb-6" data-testid="card-practical-q6">
            <CardHeader>
              <CardTitle className="text-lg">Q.6: Key Flashcard Concepts Review</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3 text-sm">
                <div className="border-l-4 border-chart-2 pl-4 bg-green-50 dark:bg-green-950/10 p-3 rounded">
                  <p className="font-semibold mb-2">What is Pearson Correlation Coefficient?</p>
                  <p className="text-xs text-muted-foreground">It is a statistical measure that tells you two things about the relationship between two sets of continuous data: (1) Strength - how close data points are to forming a straight line, and (2) Direction - whether variables move in the same direction (positive) or opposite directions (negative).</p>
                </div>

                <div className="border-l-4 border-chart-3 pl-4 bg-blue-50 dark:bg-blue-950/10 p-3 rounded">
                  <p className="font-semibold mb-2">What does covariance measure?</p>
                  <p className="text-xs text-muted-foreground">Covariance is a statistical measure that indicates how two variables change or vary together. It shows the degree and direction of the linear relationship between two variables. Positive covariance means both increase together, negative means they move inversely.</p>
                </div>

                <div className="border-l-4 border-chart-4 pl-4 bg-purple-50 dark:bg-purple-950/10 p-3 rounded">
                  <p className="font-semibold mb-2">What is Spearman's rank correlation?</p>
                  <p className="text-xs text-muted-foreground">Spearman's correlation measures how well the relationship between two variables can be described using a monotonic function, based on their ranks. It is used when data is not normally distributed or when data is ordinal (ranked).</p>
                </div>

                <div className="border-l-4 border-chart-5 pl-4 bg-orange-50 dark:bg-orange-950/10 p-3 rounded">
                  <p className="font-semibold mb-2">What is a monotonic relationship?</p>
                  <p className="text-xs text-muted-foreground">A monotonic relationship is where as one variable increases, the other variable consistently increases or consistently decreases. It doesn't have to be linear, but the direction of change is consistent throughout.</p>
                </div>

                <div className="border-l-4 border-chart-1 pl-4 bg-red-50 dark:bg-red-950/10 p-3 rounded">
                  <p className="font-semibold mb-2">What is the difference between population and sample covariance?</p>
                  <p className="text-xs text-muted-foreground">Population covariance divides by N (total population), while sample covariance divides by (n-1). The (n-1) adjustment in sample covariance provides an unbiased estimate of the true population covariance.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Key Takeaways */}
        <Card className="border-primary/20 bg-primary/5" data-testid="card-takeaways">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="w-5 h-5" />
              Important Limitations
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="text-sm space-y-3">
              <div className="border-l-4 border-chart-5 pl-4">
                <p className="font-semibold">Does not imply causation</p>
                <p className="text-xs text-muted-foreground">Two variables moving together doesn't mean one causes the other</p>
              </div>
              <div className="border-l-4 border-chart-5 pl-4">
                <p className="font-semibold">Outliers affect results</p>
                <p className="text-xs text-muted-foreground">Extreme values can distort the correlation measurement</p>
              </div>
              <div className="border-l-4 border-chart-5 pl-4">
                <p className="font-semibold">Only measures linear relationships</p>
                <p className="text-xs text-muted-foreground">May fail if relationship is curved or complex</p>
              </div>
              <div className="border-l-4 border-chart-5 pl-4">
                <p className="font-semibold">Requires accurate data</p>
                <p className="text-xs text-muted-foreground">Incorrect data leads to misleading results</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
