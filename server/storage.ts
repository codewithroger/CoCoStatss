import type { Flashcard, QuizQuestion, UserProgress, QuizResult } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getAllFlashcards(): Promise<Flashcard[]>;
  getAllQuizQuestions(): Promise<QuizQuestion[]>;
  getUserProgress(): Promise<UserProgress>;
  updateUserProgress(quizScore: number): Promise<UserProgress>;
  updateFlashcardProgress(cardId: string): Promise<UserProgress>;
  calculateQuizResult(answers: number[]): Promise<QuizResult>;
}

export class MemStorage implements IStorage {
  private flashcards: Map<string, Flashcard>;
  private quizQuestions: Map<string, QuizQuestion>;
  private userProgress: UserProgress;

  constructor() {
    this.flashcards = new Map();
    this.quizQuestions = new Map();
    
    this.userProgress = {
      id: randomUUID(),
      flashcardsViewed: [],
      quizzesTaken: 0,
      totalQuizScore: 0,
      lastQuizScore: undefined,
    };

    this.initializeFlashcards();
    this.initializeQuizQuestions();
  }

  private initializeFlashcards() {
    const flashcardsData: Omit<Flashcard, 'id'>[] = [
      {
        term: "Correlation",
        definition: "A statistical measure that describes the extent to which two variables are linearly related.",
        formula: "r = Σ[(xi - x̄)(yi - ȳ)] / √[Σ(xi - x̄)² × Σ(yi - ȳ)²]",
        example: "Height and weight often show positive correlation - taller people tend to weigh more.",
        category: "Fundamentals",
      },
      {
        term: "Pearson Correlation Coefficient (r)",
        definition: "Measures the linear relationship between two continuous variables, ranging from -1 to +1.",
        formula: "r ∈ [-1, 1], where r = 0 means no linear relationship",
        example: "r = 0.85 indicates a strong positive linear relationship between study hours and test scores.",
        category: "Pearson",
      },
      {
        term: "Positive Correlation",
        definition: "When one variable increases, the other variable tends to increase as well.",
        formula: "r > 0",
        example: "Temperature and ice cream sales typically have positive correlation.",
        category: "Types",
      },
      {
        term: "Negative Correlation",
        definition: "When one variable increases, the other variable tends to decrease.",
        formula: "r < 0",
        example: "Outside temperature and heating bills usually have negative correlation.",
        category: "Types",
      },
      {
        term: "Coefficient of Determination (r²)",
        definition: "The proportion of variance in the dependent variable predictable from the independent variable.",
        formula: "r² = (Correlation Coefficient)²",
        example: "r² = 0.64 means 64% of the variance in Y can be explained by X.",
        category: "Advanced",
      },
      {
        term: "Spearman's Rank Correlation",
        definition: "A non-parametric measure of monotonic relationship using ranked data.",
        formula: "ρ = 1 - (6Σd²) / (n(n² - 1))",
        example: "Used when data is ordinal or not normally distributed, like ranking preferences.",
        category: "Spearman",
      },
      {
        term: "No Correlation",
        definition: "No consistent relationship exists between the two variables.",
        formula: "r ≈ 0",
        example: "Shoe size and IQ typically show no correlation.",
        category: "Types",
      },
      {
        term: "Correlation vs Causation",
        definition: "Correlation does not imply that one variable causes changes in the other.",
        formula: null,
        example: "Ice cream sales and drowning rates correlate (both increase in summer), but one doesn't cause the other.",
        category: "Fundamentals",
      },
      {
        term: "Strong Correlation",
        definition: "A relationship where variables are closely related, typically |r| > 0.7.",
        formula: "|r| > 0.7",
        example: "Height of parents and height of children often show strong positive correlation.",
        category: "Interpretation",
      },
      {
        term: "Weak Correlation",
        definition: "A relationship where variables have little linear association, typically |r| < 0.3.",
        formula: "|r| < 0.3",
        example: "Number of letters in your name and your height show weak or no correlation.",
        category: "Interpretation",
      },
      {
        term: "Perfect Correlation",
        definition: "All data points lie exactly on a straight line, with r = ±1.",
        formula: "r = +1 or r = -1",
        example: "Temperature in Celsius and Fahrenheit have perfect positive correlation (r = 1).",
        category: "Interpretation",
      },
      {
        term: "Covariance",
        definition: "A measure of how two variables change together, without standardization.",
        formula: "Cov(X,Y) = Σ[(xi - x̄)(yi - ȳ)] / (n - 1)",
        example: "Covariance is positive when variables move together, negative when they move inversely.",
        category: "Advanced",
      },
    ];

    flashcardsData.forEach((data) => {
      const id = randomUUID();
      this.flashcards.set(id, { id, ...data });
    });
  }

  private initializeQuizQuestions() {
    const questionsData: Omit<QuizQuestion, 'id'>[] = [
      {
        question: "Correlation measures the ____.",
        options: ["Cause-and-effect relationship", "Direction and strength of relationship between variables", "Difference between variables", "Average value"],
        correctAnswer: 1,
        explanation: "Correlation measures both the direction (positive, negative, or zero) and the strength of the linear relationship between two variables.",
      },
      {
        question: "If correlation coefficient (r) = +1, it means:",
        options: ["No relationship", "Perfect negative correlation", "Perfect positive correlation", "Moderate correlation"],
        correctAnswer: 2,
        explanation: "When r = +1, it indicates a perfect positive correlation where variables move in exactly the same proportion.",
      },
      {
        question: "The value of correlation coefficient lies between:",
        options: ["-10 to +10", "-1 to +1", "0 to 1", "-5 to +5"],
        correctAnswer: 1,
        explanation: "The correlation coefficient (r) always ranges from -1 to +1, where -1 is perfect negative, 0 is no correlation, and +1 is perfect positive.",
      },
      {
        question: "Which method is used for ranked data?",
        options: ["Karl Pearson's method", "Scatter diagram", "Spearman's Rank Correlation", "Least squares method"],
        correctAnswer: 2,
        explanation: "Spearman's Rank Correlation is specifically designed for ranked or ordinal data and non-linear monotonic relationships.",
      },
      {
        question: "If price increases and demand decreases, correlation is:",
        options: ["Positive", "Negative", "Zero", "Perfect"],
        correctAnswer: 1,
        explanation: "When one variable increases while another decreases, the correlation is negative (inverse relationship).",
      },
      {
        question: "If the value of Pearson's correlation coefficient r is –0.95, what does it indicate?",
        options: ["Weak positive relationship", "Strong positive relationship", "Weak negative relationship", "Strong negative relationship"],
        correctAnswer: 3,
        explanation: "An r value of -0.95 indicates a very strong negative correlation (close to -1), showing variables move strongly in opposite directions.",
      },
      {
        question: "Which of the following is a real-life example of negative correlation?",
        options: ["Height and weight", "Income and spending", "Temperature and heater usage", "Time studied and marks scored"],
        correctAnswer: 2,
        explanation: "As temperature increases, the need to use the heater decreases - this is a classic example of negative correlation.",
      },
      {
        question: "Which of the following is a possible value of Pearson's correlation coefficient r?",
        options: ["1.2", "–0.8", "2.5", "3"],
        correctAnswer: 1,
        explanation: "Pearson's correlation coefficient must be between -1 and +1. Only -0.8 falls within this valid range.",
      },
      {
        question: "For the data X: 2, 4, 6 and Y: 10, 8, 6, the correlation is:",
        options: ["Positive", "Negative", "Zero", "Perfect positive"],
        correctAnswer: 1,
        explanation: "As X increases (2→4→6), Y decreases (10→8→6), showing a negative correlation.",
      },
      {
        question: "Pearson's correlation works best for ____ relationships.",
        options: ["Curved", "Non-linear", "Linear", "Exponential"],
        correctAnswer: 2,
        explanation: "Pearson's correlation coefficient is specifically designed to measure linear relationships between continuous variables.",
      },
      {
        question: "What primary feature of the relationship between two variables does the sign (+or -) of the covariance value indicate?",
        options: ["The strength of the relationship", "The cause-and-effect relationship", "The average value of the data set", "The direction of the linear relationship"],
        correctAnswer: 3,
        explanation: "The sign of covariance indicates direction: positive means variables move together, negative means they move in opposite directions.",
      },
      {
        question: "What does a Positive Covariance mean for two variables X and Y?",
        options: ["The variables have no linear relationship", "The variables tend to move in the same direction", "The strength of the relationship is very weak", "The variables move in opposite directions"],
        correctAnswer: 1,
        explanation: "Positive covariance means when X is above its mean, Y tends to be above its mean, and vice versa - they move together.",
      },
      {
        question: "Which formula uses the denominator (total population size)?",
        options: ["The Population Covariance formula", "Both Sample and Population formulas", "The Correlation Coefficient formula", "The Sample Covariance formula"],
        correctAnswer: 0,
        explanation: "The Population Covariance formula uses N (total population size) in the denominator, while Sample Covariance uses (n-1).",
      },
      {
        question: "Which of these pairs would most likely have a Negative Covariance?",
        options: ["Years of Education and Annual Salary", "Number of Pets Owned and Favorite Color", "Height and Weight of Adults", "Temperature and Heating Costs"],
        correctAnswer: 3,
        explanation: "As temperature increases, heating costs decrease - this inverse relationship creates negative covariance.",
      },
      {
        question: "If using the Population Covariance formula, what is the correct notation for the mean of X?",
        options: ["μX", "Xi", "n", "σX"],
        correctAnswer: 0,
        explanation: "μX (mu-X) is the standard statistical notation for the population mean of variable X.",
      },
      {
        question: "If variables X and Y have r = -0.85, what does this indicate?",
        options: [
          "As X increases, Y increases",
          "As X increases, Y decreases",
          "No relationship",
          "Perfect negative correlation"
        ],
        correctAnswer: 1,
        explanation: "A correlation of -0.85 indicates a strong negative (inverse) relationship - as one variable increases, the other tends to decrease.",
      },
      {
        question: "What correlation coefficient indicates no linear relationship?",
        options: ["r = 1", "r = -1", "r = 0", "r = 0.5"],
        correctAnswer: 2,
        explanation: "A correlation coefficient of 0 (or close to 0) indicates no linear relationship between the variables.",
      },
      {
        question: "Which of these pairs likely has positive correlation?",
        options: [
          "Study hours and test scores",
          "Speed and travel time",
          "Temperature and heating costs",
          "Exercise and weight"
        ],
        correctAnswer: 0,
        explanation: "Study hours and test scores typically have positive correlation - more study time generally leads to higher scores.",
      },
      {
        question: "What does 'moderate correlation' typically mean?",
        options: ["|r| between 0.4 and 0.6", "|r| < 0.2", "|r| > 0.9", "r = 0.5 exactly"],
        correctAnswer: 0,
        explanation: "Moderate correlation is typically considered to be when the absolute value of r is between 0.4 and 0.6, though these are rough guidelines.",
      },
      {
        question: "If two variables have perfect positive correlation (r = 1), what can you say?",
        options: [
          "They are unrelated",
          "All data points lie on a straight line with positive slope",
          "One causes the other",
          "They have opposite trends"
        ],
        correctAnswer: 1,
        explanation: "Perfect positive correlation (r = 1) means all data points lie exactly on a straight line with a positive slope. However, this does not prove causation.",
      },
      {
        question: "What is a key limitation of Pearson correlation?",
        options: [
          "It can only measure negative relationships",
          "It only detects linear relationships",
          "It requires exactly 10 data points",
          "It cannot be negative"
        ],
        correctAnswer: 1,
        explanation: "Pearson correlation only measures linear relationships. Two variables can have a strong non-linear relationship but show weak Pearson correlation.",
      },
      {
        question: "Which scenario demonstrates 'spurious correlation'?",
        options: [
          "Height and weight",
          "Ice cream sales and drowning incidents (both increase in summer)",
          "Age and income (within working years)",
          "Education level and salary"
        ],
        correctAnswer: 1,
        explanation: "Ice cream sales and drowning incidents show spurious correlation - they correlate because both increase in summer (due to weather), but neither causes the other.",
      },
    ];

    questionsData.forEach((data) => {
      const id = randomUUID();
      this.quizQuestions.set(id, { id, ...data });
    });
  }

  async getAllFlashcards(): Promise<Flashcard[]> {
    return Array.from(this.flashcards.values());
  }

  async getAllQuizQuestions(): Promise<QuizQuestion[]> {
    return Array.from(this.quizQuestions.values());
  }

  async getUserProgress(): Promise<UserProgress> {
    return this.userProgress;
  }

  async updateUserProgress(quizScore: number): Promise<UserProgress> {
    this.userProgress.quizzesTaken += 1;
    this.userProgress.totalQuizScore += quizScore;
    this.userProgress.lastQuizScore = quizScore;
    return this.userProgress;
  }

  async updateFlashcardProgress(cardId: string): Promise<UserProgress> {
    if (!this.userProgress.flashcardsViewed.includes(cardId)) {
      this.userProgress.flashcardsViewed.push(cardId);
    }
    return this.userProgress;
  }

  async calculateQuizResult(answers: number[]): Promise<QuizResult> {
    const questions = Array.from(this.quizQuestions.values());
    
    // Validate all questions are answered
    if (answers.length !== questions.length) {
      throw new Error("Invalid number of answers");
    }
    
    for (let i = 0; i < answers.length; i++) {
      if (answers[i] < 0 || answers[i] >= questions[i].options.length) {
        throw new Error(`Question ${i + 1} has invalid answer index`);
      }
    }
    
    let correctCount = 0;
    
    const detailedAnswers = questions.map((question, index) => {
      const selectedAnswer = answers[index];
      const isCorrect = selectedAnswer === question.correctAnswer;
      
      if (isCorrect) {
        correctCount++;
      }

      return {
        questionId: question.id,
        selectedAnswer,
        correctAnswer: question.correctAnswer,
        isCorrect,
        explanation: question.explanation,
      };
    });

    const percentage = (correctCount / questions.length) * 100;
    
    await this.updateUserProgress(correctCount);

    return {
      score: correctCount,
      total: questions.length,
      percentage,
      answers: detailedAnswers,
    };
  }
}

export const storage = new MemStorage();
