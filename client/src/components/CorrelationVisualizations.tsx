import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";

const positiveData = [
  { x: 1, y: 2 }, { x: 2, y: 3.5 }, { x: 3, y: 4 }, { x: 4, y: 5.5 },
  { x: 5, y: 6 }, { x: 6, y: 7.5 }, { x: 7, y: 8 }, { x: 8, y: 9.5 },
];

const negativeData = [
  { x: 1, y: 9 }, { x: 2, y: 8 }, { x: 3, y: 7 }, { x: 4, y: 6 },
  { x: 5, y: 5 }, { x: 6, y: 4 }, { x: 7, y: 3 }, { x: 8, y: 2 },
];

const noCorrelationData = [
  { x: 1, y: 5 }, { x: 2, y: 3 }, { x: 3, y: 7 }, { x: 4, y: 4 },
  { x: 5, y: 6 }, { x: 6, y: 2 }, { x: 7, y: 8 }, { x: 8, y: 5 },
];

export function CorrelationVisualizations() {
  const visualizations = [
    {
      title: "Positive Correlation",
      description: "r ≈ +0.95 - As one variable increases, the other increases",
      data: positiveData,
      color: "hsl(var(--chart-2))",
    },
    {
      title: "Negative Correlation",
      description: "r ≈ -0.98 - As one variable increases, the other decreases",
      data: negativeData,
      color: "hsl(var(--chart-5))",
    },
    {
      title: "No Correlation",
      description: "r ≈ 0.00 - No linear relationship between variables",
      data: noCorrelationData,
      color: "hsl(var(--chart-4))",
    },
  ];

  return (
    <section id="learn" className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-visualizations">Correlation Visualizations</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto" data-testid="text-visualizations-description">
            Understand different types of correlations through interactive scatter plots
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {visualizations.map((viz, index) => (
            <Card key={index} className="hover-elevate" data-testid={`visualization-${index}`}>
              <CardHeader>
                <CardTitle className="text-xl" data-testid={`visualization-title-${index}`}>{viz.title}</CardTitle>
                <p className="text-sm text-muted-foreground" data-testid={`visualization-description-${index}`}>{viz.description}</p>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={250}>
                  <ScatterChart margin={{ top: 10, right: 10, bottom: 20, left: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis 
                      type="number" 
                      dataKey="x" 
                      name="Variable X"
                      stroke="hsl(var(--muted-foreground))"
                      tick={{ fill: "hsl(var(--muted-foreground))" }}
                    />
                    <YAxis 
                      type="number" 
                      dataKey="y" 
                      name="Variable Y"
                      stroke="hsl(var(--muted-foreground))"
                      tick={{ fill: "hsl(var(--muted-foreground))" }}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "6px",
                      }}
                      labelStyle={{ color: "hsl(var(--foreground))" }}
                    />
                    <Scatter data={viz.data} fill={viz.color}>
                      {viz.data.map((entry, i) => (
                        <Cell key={`cell-${i}`} fill={viz.color} />
                      ))}
                    </Scatter>
                  </ScatterChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="hover-elevate" data-testid="card-pearson-info">
            <CardHeader>
              <CardTitle data-testid="heading-pearson">Understanding Correlation Coefficients</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2" data-testid="subheading-pearson">Pearson Correlation (r)</h4>
                <p className="text-sm text-muted-foreground" data-testid="text-pearson-description">
                  Measures linear relationships between two continuous variables. 
                  Range: -1 to +1, where ±1 indicates perfect correlation and 0 indicates no linear relationship.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-muted/50 font-mono text-sm overflow-x-auto" data-testid="formula-pearson">
                r = Σ[(xi - x̄)(yi - ȳ)] / √[Σ(xi - x̄)² × Σ(yi - ȳ)²]
              </div>
            </CardContent>
          </Card>

          <Card className="hover-elevate" data-testid="card-rsquared-info">
            <CardHeader>
              <CardTitle data-testid="heading-rsquared">Coefficient of Determination (r²)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2" data-testid="subheading-rsquared">What does r² tell us?</h4>
                <p className="text-sm text-muted-foreground" data-testid="text-rsquared-description">
                  Represents the proportion of variance in the dependent variable that is 
                  predictable from the independent variable. Range: 0 to 1, where higher values 
                  indicate better model fit.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-muted/50 font-mono text-sm" data-testid="formula-rsquared">
                r² = (Correlation Coefficient)²
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
