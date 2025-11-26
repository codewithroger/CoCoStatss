import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, BookOpen, Zap, AlertCircle } from "lucide-react";

export function LearnSection() {
  return (
    <section id="learn" className="py-12 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4 text-center">Statistical Learning Path</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-center">
            Master correlation, covariance, and statistical relationships through structured lessons
          </p>
        </div>

        {/* Section 1: What is Correlation */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6" data-testid="heading-correlation">1. What is Correlation?</h3>
          
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

          {/* Why is Correlation Important */}
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

          {/* Types of Correlation */}
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

        {/* Section 2: Pearson Correlation */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2" data-testid="heading-pearson">
            <TrendingUp className="w-6 h-6" />
            2. Pearson's Correlation Coefficient
          </h3>
          
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
        </div>

        {/* Section 3: Covariance */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2" data-testid="heading-covariance">
            <Zap className="w-6 h-6" />
            3. Covariance
          </h3>
          
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
