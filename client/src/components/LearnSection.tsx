import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Zap, AlertCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Cell } from "recharts";

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
              <CardTitle className="text-lg">What is Pearson Correlation?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm">
                The Pearson Correlation Coefficient (r) is a statistical measure that tells you <strong>two things</strong> about the relationship between two sets of continuous data:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-primary/10 p-4 rounded-lg">
                  <p className="font-semibold text-sm mb-2">1. Strength</p>
                  <p className="text-sm text-muted-foreground">How close the data points are to forming a straight line</p>
                </div>
                <div className="bg-primary/10 p-4 rounded-lg">
                  <p className="font-semibold text-sm mb-2">2. Direction</p>
                  <p className="text-sm text-muted-foreground">Whether variables move in same direction (positive) or opposite (negative)</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground italic">Basically: If one thing changes, does the other thing also change and how much?</p>
            </CardContent>
          </Card>

          <Card className="mb-6" data-testid="card-pearson-interpretation">
            <CardHeader>
              <CardTitle className="text-lg">Interpreting Pearson's r</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex gap-3 text-sm">
                  <div className="font-mono font-bold min-w-fit">r = +1</div>
                  <div><span className="font-semibold">Perfect Positive:</span> Variables always increase together exactly</div>
                </div>
                <div className="flex gap-3 text-sm">
                  <div className="font-mono font-bold min-w-fit">r ≈ +0.8</div>
                  <div><span className="font-semibold">Strong Positive:</span> Variables generally move together</div>
                </div>
                <div className="flex gap-3 text-sm">
                  <div className="font-mono font-bold min-w-fit">r = 0</div>
                  <div><span className="font-semibold">No Relation:</span> A changes, B doesn't care</div>
                </div>
                <div className="flex gap-3 text-sm">
                  <div className="font-mono font-bold min-w-fit">r ≈ -0.8</div>
                  <div><span className="font-semibold">Strong Negative:</span> As one goes up, other goes down strongly</div>
                </div>
                <div className="flex gap-3 text-sm">
                  <div className="font-mono font-bold min-w-fit">r = -1</div>
                  <div><span className="font-semibold">Perfect Negative:</span> If A increases, B always decreases</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card data-testid="card-pearson-examples">
            <CardHeader>
              <CardTitle className="text-lg">Real Examples</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border-l-4 border-chart-2 pl-4">
                <h4 className="font-semibold text-sm mb-2">Study Hours vs Marks</h4>
                <p className="text-xs text-muted-foreground mb-2">Hours: 1, 2, 3 | Marks: 50, 60, 70</p>
                <p className="text-xs font-medium">Result: r = +1 (Perfect Positive Correlation)</p>
              </div>
              <div className="border-l-4 border-chart-5 pl-4">
                <h4 className="font-semibold text-sm mb-2">Exercise vs Body Fat</h4>
                <p className="text-xs text-muted-foreground mb-2">Exercise: 1, 2, 4 | Body Fat: 30, 25, 20</p>
                <p className="text-xs font-medium">Result: r ≈ -0.98 (Strong Negative Correlation)</p>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-6" data-testid="card-pearson-formula">
            <CardHeader>
              <CardTitle className="text-lg">Pearson Formula</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-muted p-4 rounded-lg font-mono text-sm space-y-2">
                <p className="font-semibold mb-2">Formula:</p>
                <p className="text-base">r = Σ[(xᵢ - x̄)(yᵢ - ȳ)] / √[Σ(xᵢ - x̄)² × Σ(yᵢ - ȳ)²]</p>
              </div>
              <div className="space-y-2 text-sm">
                <p><strong>Where:</strong></p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>xᵢ, yᵢ = individual data points</li>
                  <li>x̄, ȳ = means of x and y</li>
                  <li>r ∈ [-1, 1] = correlation coefficient</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-6" data-testid="card-pearson-calculation">
            <CardHeader>
              <CardTitle className="text-lg">How to Calculate Pearson's r - Step by Step</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <p className="font-semibold text-sm mb-3">5-Step Process:</p>
                <div className="space-y-3 text-sm">
                  <div className="bg-muted p-3 rounded-lg">
                    <p className="font-semibold mb-1">Step 1: Calculate the means</p>
                    <p className="text-muted-foreground text-xs">x̄ = Σx / n and ȳ = Σy / n</p>
                  </div>
                  <div className="bg-muted p-3 rounded-lg">
                    <p className="font-semibold mb-1">Step 2: Find deviations from mean</p>
                    <p className="text-muted-foreground text-xs">For each data point: (xᵢ - x̄) and (yᵢ - ȳ)</p>
                  </div>
                  <div className="bg-muted p-3 rounded-lg">
                    <p className="font-semibold mb-1">Step 3: Multiply deviations</p>
                    <p className="text-muted-foreground text-xs">(xᵢ - x̄) × (yᵢ - ȳ) for each pair, then sum all products: Σ[(xᵢ - x̄)(yᵢ - ȳ)]</p>
                  </div>
                  <div className="bg-muted p-3 rounded-lg">
                    <p className="font-semibold mb-1">Step 4: Calculate sum of squared deviations</p>
                    <p className="text-muted-foreground text-xs">Square each deviation and sum: Σ(xᵢ - x̄)² and Σ(yᵢ - ȳ)²</p>
                  </div>
                  <div className="bg-muted p-3 rounded-lg">
                    <p className="font-semibold mb-1">Step 5: Apply the formula</p>
                    <p className="text-muted-foreground text-xs">r = Σ[(xᵢ - x̄)(yᵢ - ȳ)] / √[Σ(xᵢ - x̄)² × Σ(yᵢ - ȳ)²]</p>
                  </div>
                </div>
              </div>

              <div className="border-t pt-4">
                <p className="font-semibold text-sm mb-4">Worked Example: Study Hours vs Test Marks</p>
                <div className="bg-muted p-3 rounded-lg mb-4 overflow-x-auto">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="border-b">
                        <th className="p-2 text-left">Student</th>
                        <th className="p-2 text-center">X (Hours)</th>
                        <th className="p-2 text-center">Y (Marks)</th>
                        <th className="p-2 text-center">X - X̄</th>
                        <th className="p-2 text-center">Y - Ȳ</th>
                        <th className="p-2 text-center">(X - X̄)²</th>
                        <th className="p-2 text-center">(Y - Ȳ)²</th>
                        <th className="p-2 text-center">(X - X̄)(Y - Ȳ)</th>
                      </tr>
                    </thead>
                    <tbody className="text-xs">
                      <tr className="border-b hover:bg-black/5">
                        <td className="p-2">A</td>
                        <td className="p-2 text-center">2</td>
                        <td className="p-2 text-center">50</td>
                        <td className="p-2 text-center">-2</td>
                        <td className="p-2 text-center">-20</td>
                        <td className="p-2 text-center">4</td>
                        <td className="p-2 text-center">400</td>
                        <td className="p-2 text-center">40</td>
                      </tr>
                      <tr className="border-b hover:bg-black/5">
                        <td className="p-2">B</td>
                        <td className="p-2 text-center">4</td>
                        <td className="p-2 text-center">60</td>
                        <td className="p-2 text-center">0</td>
                        <td className="p-2 text-center">-10</td>
                        <td className="p-2 text-center">0</td>
                        <td className="p-2 text-center">100</td>
                        <td className="p-2 text-center">0</td>
                      </tr>
                      <tr className="border-b hover:bg-black/5">
                        <td className="p-2">C</td>
                        <td className="p-2 text-center">6</td>
                        <td className="p-2 text-center">70</td>
                        <td className="p-2 text-center">2</td>
                        <td className="p-2 text-center">0</td>
                        <td className="p-2 text-center">4</td>
                        <td className="p-2 text-center">0</td>
                        <td className="p-2 text-center">0</td>
                      </tr>
                      <tr className="border-b hover:bg-black/5">
                        <td className="p-2">D</td>
                        <td className="p-2 text-center">3</td>
                        <td className="p-2 text-center">55</td>
                        <td className="p-2 text-center">-1</td>
                        <td className="p-2 text-center">-15</td>
                        <td className="p-2 text-center">1</td>
                        <td className="p-2 text-center">225</td>
                        <td className="p-2 text-center">15</td>
                      </tr>
                      <tr className="font-semibold bg-primary/10">
                        <td className="p-2">SUM</td>
                        <td className="p-2 text-center">15</td>
                        <td className="p-2 text-center">235</td>
                        <td className="p-2 text-center">-1</td>
                        <td className="p-2 text-center">-45</td>
                        <td className="p-2 text-center">9</td>
                        <td className="p-2 text-center">725</td>
                        <td className="p-2 text-center">55</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="bg-blue-50 dark:bg-blue-950/20 p-3 rounded">
                    <p className="font-semibold mb-1">Step 1 - Calculate Means:</p>
                    <p className="text-xs text-muted-foreground">x̄ = 15 ÷ 4 = 3.75 hours</p>
                    <p className="text-xs text-muted-foreground">ȳ = 235 ÷ 4 = 58.75 marks</p>
                  </div>

                  <div className="bg-green-50 dark:bg-green-950/20 p-3 rounded">
                    <p className="font-semibold mb-1">Steps 2-4 - Calculate Components (from table above):</p>
                    <p className="text-xs text-muted-foreground">Σ[(xᵢ - x̄)(yᵢ - ȳ)] = 55</p>
                    <p className="text-xs text-muted-foreground">Σ(xᵢ - x̄)² = 9</p>
                    <p className="text-xs text-muted-foreground">Σ(yᵢ - ȳ)² = 725</p>
                  </div>

                  <div className="bg-amber-50 dark:bg-amber-950/20 p-3 rounded font-mono text-xs">
                    <p className="font-semibold mb-2">Step 5 - Final Calculation:</p>
                    <p className="mb-1">r = 55 / √(9 × 725)</p>
                    <p className="mb-1">r = 55 / √6525</p>
                    <p className="mb-1">r = 55 / 80.78</p>
                    <p className="font-bold text-base">r ≈ 0.68</p>
                  </div>

                  <div className="bg-primary/10 p-3 rounded">
                    <p className="text-xs"><strong>Result:</strong> r ≈ 0.68 = Strong Positive Correlation</p>
                    <p className="text-xs text-muted-foreground">Study hours and test marks have a strong positive relationship</p>
                  </div>
                </div>
              </div>

              <div className="border-t pt-4">
                <p className="font-semibold text-sm mb-3">Alternative Formula (Computational):</p>
                <div className="bg-muted p-3 rounded-lg font-mono text-xs space-y-2 mb-3">
                  <p>r = [n·Σ(xy) - Σx·Σy] / √{`[n·Σ(x²) - (Σx)²] × [n·Σ(y²) - (Σy)²]`}</p>
                </div>
                <p className="text-xs text-muted-foreground">This formula is often easier to use in calculations and gives the same result</p>
              </div>
            </CardContent>
          </Card>

          <Card data-testid="card-pearson-graphs">
            <CardHeader>
              <CardTitle className="text-lg">Visualization of Correlation Types</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <p className="text-sm font-semibold mb-3">Positive (r ≈ +0.95)</p>
                  <ResponsiveContainer width="100%" height={200}>
                    <ScatterChart margin={{ top: 10, right: 10, bottom: 10, left: 10 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" dataKey="x" />
                      <YAxis type="number" dataKey="y" />
                      <Tooltip />
                      <Scatter data={positiveData} fill="#ef4444" />
                    </ScatterChart>
                  </ResponsiveContainer>
                </div>
                <div>
                  <p className="text-sm font-semibold mb-3">Negative (r ≈ -0.95)</p>
                  <ResponsiveContainer width="100%" height={200}>
                    <ScatterChart margin={{ top: 10, right: 10, bottom: 10, left: 10 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" dataKey="x" />
                      <YAxis type="number" dataKey="y" domain={[0, 12]} />
                      <Tooltip />
                      <Scatter data={negativeData} fill="#0ea5e9" />
                    </ScatterChart>
                  </ResponsiveContainer>
                </div>
                <div>
                  <p className="text-sm font-semibold mb-3">No Correlation (r ≈ 0)</p>
                  <ResponsiveContainer width="100%" height={200}>
                    <ScatterChart margin={{ top: 10, right: 10, bottom: 10, left: 10 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" dataKey="x" />
                      <YAxis type="number" dataKey="y" domain={[0, 10]} />
                      <Tooltip />
                      <Scatter data={noCorrelationData} fill="#84cc16" />
                    </ScatterChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card data-testid="card-strength-scale">
            <CardHeader>
              <CardTitle className="text-lg">Correlation Strength Scale</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <p className="font-semibold">Interpretation Guide:</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between p-2 bg-muted rounded">
                      <span>Perfect:</span>
                      <span className="font-mono">|r| = 1.00</span>
                    </div>
                    <div className="flex justify-between p-2 bg-muted rounded">
                      <span>Very Strong:</span>
                      <span className="font-mono">|r| = 0.80-0.99</span>
                    </div>
                    <div className="flex justify-between p-2 bg-muted rounded">
                      <span>Strong:</span>
                      <span className="font-mono">|r| = 0.60-0.79</span>
                    </div>
                    <div className="flex justify-between p-2 bg-muted rounded">
                      <span>Moderate:</span>
                      <span className="font-mono">|r| = 0.40-0.59</span>
                    </div>
                    <div className="flex justify-between p-2 bg-muted rounded">
                      <span>Weak:</span>
                      <span className="font-mono">|r| = 0.20-0.39</span>
                    </div>
                    <div className="flex justify-between p-2 bg-muted rounded">
                      <span>Very Weak:</span>
                      <span className="font-mono">|r| = 0.00-0.19</span>
                    </div>
                  </div>
                </div>
                <div>
                  <ResponsiveContainer width="100%" height={280}>
                    <BarChart data={strengthData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" angle={-45} textAnchor="end" height={80} />
                      <YAxis domain={[0, 1]} />
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
        </div>

        {/* Topic 3: Covariance */}
        <div id="covariance-topic" className="mb-16 scroll-mt-20">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-bold flex items-center gap-2" data-testid="heading-covariance">
              <Zap className="w-8 h-8" />
              Topic 3: Covariance
            </h3>
            <Button
              variant="outline"
              size="sm"
              onClick={() => scrollToTopic("pearson-topic")}
              className="gap-2"
              data-testid="button-prev-to-pearson"
            >
              ← Previous
            </Button>
          </div>

          <Card className="mb-6" data-testid="card-covariance-intro">
            <CardHeader>
              <CardTitle className="text-lg">What is Covariance?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm">
                <strong>Covariance</strong> is a measure that tells us how two variables change together. It indicates the degree and direction of the linear relationship between two variables without standardization.
              </p>
              <div className="bg-muted p-4 rounded-lg space-y-2">
                <p className="text-sm font-semibold">Three Types of Covariance:</p>
                <div className="text-sm space-y-2">
                  <div><strong>1) Positive Covariance (r &gt; 0):</strong> Both variables increase or decrease together</div>
                  <div><strong>2) Negative Covariance (r &lt; 0):</strong> One increases while the other decreases</div>
                  <div><strong>3) Zero Covariance (r ≈ 0):</strong> No clear pattern between variables</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-6" data-testid="card-covariance-examples">
            <CardHeader>
              <CardTitle className="text-lg">Covariance Examples</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border-l-4 border-chart-2 pl-4 bg-chart-2/5 p-3 rounded">
                  <p className="font-semibold text-sm mb-2">Positive Covariance</p>
                  <p className="text-xs text-muted-foreground">More hours studied → Higher exam scores</p>
                </div>
                <div className="border-l-4 border-chart-5 pl-4 bg-chart-5/5 p-3 rounded">
                  <p className="font-semibold text-sm mb-2">Negative Covariance</p>
                  <p className="text-xs text-muted-foreground">Less study hours → Lower exam scores</p>
                </div>
                <div className="border-l-4 border-muted-foreground pl-4 bg-muted p-3 rounded">
                  <p className="font-semibold text-sm mb-2">Zero Covariance</p>
                  <p className="text-xs text-muted-foreground">More studying ≠ Always higher scores</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card data-testid="card-covariance-formula">
            <CardHeader>
              <CardTitle className="text-lg">Covariance Formulas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-muted p-4 rounded-lg font-mono text-sm space-y-3">
                <div>
                  <p className="font-semibold mb-1">Population Covariance:</p>
                  <p>Cov(X,Y) = Σ[(Xᵢ - μₓ)(Yᵢ - μᵧ)] / N</p>
                </div>
                <div className="border-t pt-3">
                  <p className="font-semibold mb-1">Sample Covariance:</p>
                  <p>Cov(X,Y) = Σ[(Xᵢ - X̄)(Yᵢ - Ȳ)] / (n - 1)</p>
                </div>
              </div>
              <div className="bg-blue-50 dark:bg-blue-950/20 p-3 rounded-lg text-sm text-muted-foreground">
                <p><strong>Note:</strong> Population uses N in denominator, Sample uses (n-1)</p>
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
