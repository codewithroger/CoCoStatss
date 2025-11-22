import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Flashcard schema
export const flashcards = pgTable("flashcards", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  term: text("term").notNull(),
  definition: text("definition").notNull(),
  formula: text("formula"),
  example: text("example"),
  category: text("category").notNull(),
});

export const insertFlashcardSchema = createInsertSchema(flashcards).omit({
  id: true,
});

export type InsertFlashcard = z.infer<typeof insertFlashcardSchema>;
export type Flashcard = typeof flashcards.$inferSelect;

// Quiz question schema
export const quizQuestions = pgTable("quiz_questions", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  question: text("question").notNull(),
  options: text("options").array().notNull(),
  correctAnswer: integer("correct_answer").notNull(),
  explanation: text("explanation").notNull(),
});

export const insertQuizQuestionSchema = createInsertSchema(quizQuestions).omit({
  id: true,
});

export type InsertQuizQuestion = z.infer<typeof insertQuizQuestionSchema>;
export type QuizQuestion = typeof quizQuestions.$inferSelect;

// User progress schema
export const userProgress = pgTable("user_progress", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  flashcardsViewed: text("flashcards_viewed").array().notNull().default(sql`ARRAY[]::text[]`),
  quizzesTaken: integer("quizzes_taken").notNull().default(0),
  totalQuizScore: integer("total_quiz_score").notNull().default(0),
  lastQuizScore: integer("last_quiz_score"),
});

export const insertUserProgressSchema = createInsertSchema(userProgress).omit({
  id: true,
});

export type InsertUserProgress = z.infer<typeof insertUserProgressSchema>;
export type UserProgress = typeof userProgress.$inferSelect;

// Quiz submission schema
export const quizSubmissionSchema = z.object({
  answers: z.array(z.number()),
});

export type QuizSubmission = z.infer<typeof quizSubmissionSchema>;

// Quiz result schema
export const quizResultSchema = z.object({
  score: z.number(),
  total: z.number(),
  percentage: z.number(),
  answers: z.array(z.object({
    questionId: z.string(),
    selectedAnswer: z.number(),
    correctAnswer: z.number(),
    isCorrect: z.boolean(),
    explanation: z.string(),
  })),
});

export type QuizResult = z.infer<typeof quizResultSchema>;
