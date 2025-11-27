import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, BarChart, Bar, ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from "recharts";
import { AlertCircle } from "lucide-react";

export function FormulasAndGraphs() {
  const correlationData = [
    { x: 1, y: 2 },
    { x: 2, y: 4 },
    { x: 3, y: 6 },
    { x: 4, y: 8 },
    { x: 5, y: 10 },
  ];

  const negativeCorrelationData = [
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
    <section className="py-12 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4" data-testid="heading-formulas">Formulas & Visualizations</h2>
          <p className="text-muted-foreground text-lg">Complete reference for all statistical formulas and correlation types</p>
        </div>

        {/* Formula Tables */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Pearson Formula */}
          <Card data-testid="card-pearson-formula">
            <CardHeader>
              <CardTitle className="text-xl">Pearson Correlation Coefficient (r)</CardTitle>
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
              <div className="bg-blue-50 dark:bg-blue-950/20 p-3 rounded text-sm">
                <p><strong>Interpretation:</strong> Measures linear relationship between two continuous variables. Higher absolute value indicates stronger relationship.</p>
              </div>
            </CardContent>
          </Card>

          {/* Spearman Formula */}
          <Card data-testid="card-spearman-formula">
            <CardHeader>
              <CardTitle className="text-xl">Spearman's Rank Correlation (ρ)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-muted p-4 rounded-lg font-mono text-sm space-y-2">
                <p className="font-semibold mb-2">Formula:</p>
                <p className="text-base">ρ = 1 - (6Σd²) / (n(n² - 1))</p>
              </div>
              <div className="space-y-2 text-sm">
                <p><strong>Where:</strong></p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>d = difference between ranks</li>
                  <li>n = number of observations</li>
                  <li>ρ ∈ [-1, 1] = rank correlation</li>
                </ul>
              </div>
              <div className="bg-blue-50 dark:bg-blue-950/20 p-3 rounded text-sm">
                <p><strong>Interpretation:</strong> Non-parametric measure for monotonic relationships. Robust to outliers and doesn't assume normal distribution.</p>
              </div>
            </CardContent>
          </Card>

          {/* Covariance Formula */}
          <Card data-testid="card-covariance-formula">
            <CardHeader>
              <CardTitle className="text-xl">Covariance</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-muted p-4 rounded-lg font-mono text-sm space-y-4">
                <div>
                  <p className="font-semibold mb-1">Population Covariance:</p>
                  <p className="text-base">Cov(X,Y) = Σ[(xᵢ - μₓ)(yᵢ - μᵧ)] / N</p>
                </div>
                <div className="border-t pt-3">
                  <p className="font-semibold mb-1">Sample Covariance:</p>
                  <p className="text-base">Cov(X,Y) = Σ[(xᵢ - x̄)(yᵢ - ȳ)] / (n - 1)</p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <p><strong>Where:</strong></p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Positive = variables move together</li>
                  <li>Negative = variables move inversely</li>
                  <li>Zero = no linear relationship</li>
                </ul>
              </div>
              <div className="bg-blue-50 dark:bg-blue-950/20 p-3 rounded text-sm">
                <p><strong>Interpretation:</strong> Measure of joint variability. Unlike correlation, covariance is not standardized.</p>
              </div>
            </CardContent>
          </Card>

          {/* Coefficient of Determination */}
          <Card data-testid="card-r-squared-formula">
            <CardHeader>
              <CardTitle className="text-xl">Coefficient of Determination (r²)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-muted p-4 rounded-lg font-mono text-sm space-y-2">
                <p className="font-semibold mb-2">Formula:</p>
                <p className="text-base">r² = (Pearson r)²</p>
                <p className="text-sm text-muted-foreground mt-2">Or: r² = (SSreg) / (SStotal)</p>
              </div>
              <div className="space-y-2 text-sm">
                <p><strong>Range:</strong> 0 to 1</p>
                <p><strong>Interpretation:</strong> Proportion of variance in dependent variable explained by independent variable.</p>
              </div>
              <div className="bg-blue-50 dark:bg-blue-950/20 p-3 rounded text-sm">
                <p><strong>Example:</strong> r² = 0.85 means 85% of the variance in Y is explained by X.</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Correlation Strength Scale */}
        <Card className="mb-8" data-testid="card-strength-scale">
          <CardHeader>
            <CardTitle>Correlation Strength Scale</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="space-y-3">
                <p className="font-semibold mb-3">Strength Interpretation Guide:</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center p-2 bg-muted rounded">
                    <span>Perfect:</span>
                    <span className="font-mono font-bold">|r| = 1.00</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-muted rounded">
                    <span>Very Strong:</span>
                    <span className="font-mono font-bold">|r| = 0.80-0.99</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-muted rounded">
                    <span>Strong:</span>
                    <span className="font-mono font-bold">|r| = 0.60-0.79</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-muted rounded">
                    <span>Moderate:</span>
                    <span className="font-mono font-bold">|r| = 0.40-0.59</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-muted rounded">
                    <span>Weak:</span>
                    <span className="font-mono font-bold">|r| = 0.20-0.39</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-muted rounded">
                    <span>Very Weak:</span>
                    <span className="font-mono font-bold">|r| = 0.00-0.19</span>
                  </div>
                </div>
              </div>
              <div>
                <ResponsiveContainer width="100%" height={300}>
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

        {/* Visualizations */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Positive Correlation */}
          <Card data-testid="card-viz-positive">
            <CardHeader>
              <CardTitle className="text-lg">Positive Correlation (r ≈ +0.95)</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" dataKey="x" name="Variable X" />
                  <YAxis type="number" dataKey="y" name="Variable Y" />
                  <Tooltip cursor={{ strokeDasharray: "3 3" }} />
                  <Scatter name="Data Points" data={correlationData} fill="#ef4444" />
                  <Line type="monotone" dataKey="y" stroke="#ef4444" strokeWidth={2} dot={false} isAnimationActive={false} />
                </ScatterChart>
              </ResponsiveContainer>
              <p className="text-sm text-muted-foreground mt-2">Both variables increase together</p>
            </CardContent>
          </Card>

          {/* Negative Correlation */}
          <Card data-testid="card-viz-negative">
            <CardHeader>
              <CardTitle className="text-lg">Negative Correlation (r ≈ -0.95)</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" dataKey="x" name="Variable X" />
                  <YAxis type="number" dataKey="y" name="Variable Y" domain={[0, 12]} />
                  <Tooltip cursor={{ strokeDasharray: "3 3" }} />
                  <Scatter name="Data Points" data={negativeCorrelationData} fill="#0ea5e9" />
                  <Line type="monotone" dataKey="y" stroke="#0ea5e9" strokeWidth={2} dot={false} isAnimationActive={false} />
                </ScatterChart>
              </ResponsiveContainer>
              <p className="text-sm text-muted-foreground mt-2">As one increases, other decreases</p>
            </CardContent>
          </Card>

          {/* No Correlation */}
          <Card data-testid="card-viz-none">
            <CardHeader>
              <CardTitle className="text-lg">No Correlation (r ≈ 0.0)</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" dataKey="x" name="Variable X" />
                  <YAxis type="number" dataKey="y" name="Variable Y" domain={[0, 10]} />
                  <Tooltip cursor={{ strokeDasharray: "3 3" }} />
                  <Scatter name="Data Points" data={noCorrelationData} fill="#84cc16" />
                </ScatterChart>
              </ResponsiveContainer>
              <p className="text-sm text-muted-foreground mt-2">Random scattered relationship</p>
            </CardContent>
          </Card>
        </div>

        {/* Comparison Table */}
        <Card className="mb-8" data-testid="card-comparison-table">
          <CardHeader>
            <CardTitle>Pearson vs Spearman vs Covariance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2 font-semibold">Feature</th>
                    <th className="text-left p-2 font-semibold">Pearson (r)</th>
                    <th className="text-left p-2 font-semibold">Spearman (ρ)</th>
                    <th className="text-left p-2 font-semibold">Covariance</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-muted/50">
                    <td className="p-2 font-medium">Type</td>
                    <td className="p-2 text-muted-foreground">Parametric</td>
                    <td className="p-2 text-muted-foreground">Non-parametric</td>
                    <td className="p-2 text-muted-foreground">Unstandardized</td>
                  </tr>
                  <tr className="border-b hover:bg-muted/50">
                    <td className="p-2 font-medium">Data Type</td>
                    <td className="p-2 text-muted-foreground">Continuous</td>
                    <td className="p-2 text-muted-foreground">Ordinal/Ranked</td>
                    <td className="p-2 text-muted-foreground">Any continuous</td>
                  </tr>
                  <tr className="border-b hover:bg-muted/50">
                    <td className="p-2 font-medium">Range</td>
                    <td className="p-2 text-muted-foreground">-1 to +1</td>
                    <td className="p-2 text-muted-foreground">-1 to +1</td>
                    <td className="p-2 text-muted-foreground">-∞ to +∞</td>
                  </tr>
                  <tr className="border-b hover:bg-muted/50">
                    <td className="p-2 font-medium">Standardized</td>
                    <td className="p-2 text-muted-foreground">Yes</td>
                    <td className="p-2 text-muted-foreground">Yes</td>
                    <td className="p-2 text-muted-foreground">No</td>
                  </tr>
                  <tr className="border-b hover:bg-muted/50">
                    <td className="p-2 font-medium">Outlier Sensitive</td>
                    <td className="p-2 text-muted-foreground">High</td>
                    <td className="p-2 text-muted-foreground">Low</td>
                    <td className="p-2 text-muted-foreground">High</td>
                  </tr>
                  <tr className="border-b hover:bg-muted/50">
                    <td className="p-2 font-medium">Linear Assumption</td>
                    <td className="p-2 text-muted-foreground">Required</td>
                    <td className="p-2 text-muted-foreground">Not required</td>
                    <td className="p-2 text-muted-foreground">Required</td>
                  </tr>
                  <tr className="hover:bg-muted/50">
                    <td className="p-2 font-medium">Use Case</td>
                    <td className="p-2 text-muted-foreground">Linear relationships</td>
                    <td className="p-2 text-muted-foreground">Monotonic relationships</td>
                    <td className="p-2 text-muted-foreground">Joint variability</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Important Notes */}
        <Card className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20" data-testid="card-important-notes">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="w-5 h-5" />
              Important Notes on Correlations
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <div>
              <p className="font-semibold mb-1">Correlation ≠ Causation</p>
              <p className="text-muted-foreground">Strong correlation between variables does not imply that one causes the other. There may be confounding variables or the relationship may be coincidental.</p>
            </div>
            <div>
              <p className="font-semibold mb-1">Sample Size Matters</p>
              <p className="text-muted-foreground">Small sample sizes may produce misleading correlation values. Larger samples provide more reliable estimates. Statistical significance depends on both correlation strength and sample size.</p>
            </div>
            <div>
              <p className="font-semibold mb-1">Outliers Impact Results</p>
              <p className="text-muted-foreground">Pearson correlation is sensitive to extreme values. Spearman's rank correlation is more robust. Always visualize data to identify outliers before calculating correlations.</p>
            </div>
            <div>
              <p className="font-semibold mb-1">Context is Key</p>
              <p className="text-muted-foreground">Interpretation of correlation strength depends on the field. In medical research, weak correlations (r = 0.3) may be meaningful, while in physics, stronger correlations are typically expected.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
