import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

export function ConceptsReference() {
  const concepts = [
    {
      title: "What is Correlation?",
      content:
        "Correlation is a statistical measure that describes the extent to which two variables are linearly related. It indicates both the strength and direction of the relationship between variables. Correlation does not imply causation - two variables can be correlated without one causing the other. Correlation quantifies the degree to which two variables move together, expressed through a correlation coefficient that ranges from -1 to +1.",
    },
    {
      title: "Pearson Correlation Coefficient",
      content:
        "The Pearson correlation coefficient (denoted as r) measures the linear relationship between two continuous variables. It ranges from -1 to +1, where +1 indicates a perfect positive linear relationship, -1 indicates a perfect negative linear relationship, and 0 indicates no linear relationship. It's the most commonly used correlation measure in statistics. Formula: r = Σ[(xi - x̄)(yi - ȳ)] / √[Σ(xi - x̄)² × Σ(yi - ȳ)²]. The coefficient is unitless and standardized, making it comparable across different datasets.",
    },
    {
      title: "Spearman's Rank Correlation",
      content:
        "Spearman's correlation coefficient (denoted as ρ or rs) is a non-parametric measure that assesses monotonic relationships. It works by ranking the data and then calculating the Pearson correlation on those ranks. It's useful when data is ordinal or when the relationship is not strictly linear but still monotonic. Formula: ρ = 1 - (6Σd²) / (n(n² - 1)). It's more robust to outliers than Pearson correlation and doesn't assume normal distribution.",
    },
    {
      title: "Coefficient of Determination (r²)",
      content:
        "The coefficient of determination, denoted as r², represents the proportion of variance in the dependent variable that is predictable from the independent variable. It ranges from 0 to 1, where higher values indicate a better fit. For example, an r² of 0.85 means 85% of the variance in Y can be explained by X. r² is calculated as the square of the correlation coefficient and represents the proportion of variance explained by the relationship.",
    },
    {
      title: "Covariance",
      content:
        "Covariance is a measure of how two variables change together, indicating the direction of the linear relationship between them. Formula: Cov(X,Y) = Σ[(xi - x̄)(yi - ȳ)] / (n - 1). Covariance is positive when variables move in the same direction, negative when they move in opposite directions, and zero when there's no relationship. Unlike correlation, covariance is not standardized and depends on the units of the variables.",
    },
    {
      title: "Interpreting Correlation Strength",
      content:
        "Common guidelines for interpreting correlation strength: |r| = 0.00-0.19 is very weak, 0.20-0.39 is weak, 0.40-0.59 is moderate, 0.60-0.79 is strong, and 0.80-1.00 is very strong. However, these are rough guidelines and interpretation should always consider the context of the specific field and application. In medical research, even weak correlations can be meaningful, while in physical sciences, stronger correlations may be expected.",
    },
    {
      title: "Positive Correlation",
      content:
        "Positive correlation occurs when one variable increases and the other variable tends to increase as well (r > 0). Example: Temperature and ice cream sales typically show positive correlation - as temperature rises, ice cream sales increase. Another example: Study hours and exam scores often show positive correlation.",
    },
    {
      title: "Negative Correlation",
      content:
        "Negative correlation occurs when one variable increases while the other tends to decrease (r < 0). Example: Outside temperature and heating bills usually have negative correlation - as temperature rises, heating costs decrease. Another example: Exercise frequency and body fat percentage typically show negative correlation.",
    },
    {
      title: "No Correlation",
      content:
        "No correlation exists when there is no consistent relationship between two variables (r ≈ 0). Example: Shoe size and IQ typically show no correlation. Another example: The color of a car and its fuel efficiency generally have no correlation. When variables are uncorrelated, knowing the value of one variable provides no information about the value of the other.",
    },
    {
      title: "Correlation vs Causation",
      content:
        "A fundamental principle in statistics is that correlation does not imply causation. Two variables can be highly correlated without one causing the other. There could be a third variable causing both (confounding), the relationship could be coincidental, or causation could run in the opposite direction. For example, ice cream sales and drowning rates correlate (both increase in summer), but one doesn't cause the other. Establishing causation requires controlled experiments or additional evidence beyond correlation.",
    },
    {
      title: "Perfect Correlation",
      content:
        "Perfect correlation occurs when all data points lie exactly on a straight line (r = ±1). Perfect positive correlation (r = +1) means one variable is a perfect positive linear function of the other. Perfect negative correlation (r = -1) means one variable is a perfect negative linear function of the other. Example: Temperature in Celsius and Fahrenheit have perfect positive correlation (r = 1). Perfect correlation is rare in real-world data.",
    },
    {
      title: "Strong Correlation",
      content:
        "A strong correlation exists when variables are closely related (typically |r| > 0.7). When correlation is strong, knowing the value of one variable gives reliable information about the other. Example: Height of parents and height of children often show strong positive correlation. Strong correlations are useful for prediction models, but still don't imply causation.",
    },
    {
      title: "Weak Correlation",
      content:
        "A weak correlation exists when variables have little linear association (typically |r| < 0.3). Weak correlations mean there's high variability in one variable relative to the other. Example: Number of letters in your name and your height show weak or no correlation. Even weak correlations can be statistically significant in large datasets, but their practical utility is limited.",
    },
  ];

  return (
    <section className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-concepts">Key Concepts Reference</h2>
          <p className="text-muted-foreground text-lg" data-testid="text-concepts-description">
            Quick reference guide for essential correlation concepts
          </p>
        </div>

        <Card className="p-6">
          <Accordion type="single" collapsible className="w-full">
            {concepts.map((concept, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left hover:no-underline" data-testid={`accordion-${index}`}>
                  <span className="font-semibold">{concept.title}</span>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground leading-relaxed" data-testid={`accordion-content-${index}`}>{concept.content}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Card>
      </div>
    </section>
  );
}
