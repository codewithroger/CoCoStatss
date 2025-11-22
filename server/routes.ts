import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { quizSubmissionSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Get all flashcards
  app.get("/api/flashcards", async (req, res) => {
    try {
      const flashcards = await storage.getAllFlashcards();
      res.json(flashcards);
    } catch (error) {
      console.error("Error fetching flashcards:", error);
      res.status(500).json({ error: "Failed to fetch flashcards" });
    }
  });

  // Get all quiz questions
  app.get("/api/quiz/questions", async (req, res) => {
    try {
      const questions = await storage.getAllQuizQuestions();
      res.json(questions);
    } catch (error) {
      console.error("Error fetching quiz questions:", error);
      res.status(500).json({ error: "Failed to fetch quiz questions" });
    }
  });

  // Submit quiz answers
  app.post("/api/quiz/submit", async (req, res) => {
    try {
      const submission = quizSubmissionSchema.parse(req.body);
      const result = await storage.calculateQuizResult(submission.answers);
      res.json(result);
    } catch (error) {
      console.error("Error submitting quiz:", error);
      res.status(400).json({ error: "Invalid quiz submission" });
    }
  });

  // Get user progress
  app.get("/api/progress", async (req, res) => {
    try {
      const progress = await storage.getUserProgress();
      res.json(progress);
    } catch (error) {
      console.error("Error fetching progress:", error);
      res.status(500).json({ error: "Failed to fetch progress" });
    }
  });

  // Update flashcard progress
  app.post("/api/flashcards/viewed", async (req, res) => {
    try {
      const { cardId } = req.body;
      if (!cardId || typeof cardId !== 'string') {
        return res.status(400).json({ error: "Invalid card ID" });
      }
      const progress = await storage.updateFlashcardProgress(cardId);
      res.json(progress);
    } catch (error) {
      console.error("Error updating flashcard progress:", error);
      res.status(500).json({ error: "Failed to update progress" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
