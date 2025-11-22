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
        "Correlation is a statistical measure that describes the extent to which two variables are linearly related. It indicates both the strength and direction of the relationship between variables. Correlation does not imply causation - two variables can be correlated without one causing the other.",
    },
    {
      title: "Pearson Correlation Coefficient",
      content:
        "The Pearson correlation coefficient (denoted as r) measures the linear relationship between two continuous variables. It ranges from -1 to +1, where +1 indicates a perfect positive linear relationship, -1 indicates a perfect negative linear relationship, and 0 indicates no linear relationship. It's the most commonly used correlation measure in statistics.",
    },
    {
      title: "Spearman's Rank Correlation",
      content:
        "Spearman's correlation coefficient (denoted as ρ or rs) is a non-parametric measure that assesses monotonic relationships. It works by ranking the data and then calculating the Pearson correlation on those ranks. It's useful when data is ordinal or when the relationship is not strictly linear but still monotonic.",
    },
    {
      title: "Coefficient of Determination (r²)",
      content:
        "The coefficient of determination, denoted as r², represents the proportion of variance in the dependent variable that is predictable from the independent variable. It ranges from 0 to 1, where higher values indicate a better fit. For example, an r² of 0.85 means 85% of the variance in Y can be explained by X.",
    },
    {
      title: "Interpreting Correlation Strength",
      content:
        "Common guidelines for interpreting correlation strength: |r| = 0.00-0.19 is very weak, 0.20-0.39 is weak, 0.40-0.59 is moderate, 0.60-0.79 is strong, and 0.80-1.00 is very strong. However, these are rough guidelines and interpretation should always consider the context of the specific field and application.",
    },
    {
      title: "Correlation vs Causation",
      content:
        "A fundamental principle in statistics is that correlation does not imply causation. Two variables can be highly correlated without one causing the other. There could be a third variable causing both (confounding), the relationship could be coincidental, or causation could run in the opposite direction. Establishing causation requires additional evidence beyond correlation.",
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
