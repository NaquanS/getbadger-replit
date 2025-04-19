import type { Express, Request, Response, NextFunction } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertNewsletterSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";
import { setupAuth } from "./auth";

export async function registerRoutes(app: Express): Promise<Server> {
  // Set up authentication
  setupAuth(app);

  // Middleware to check if user is authenticated
  const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
    if (req.isAuthenticated()) {
      return next();
    }
    res.status(401).json({ message: "Not authenticated" });
  };

  // API routes for contact form submissions
  app.post("/api/contacts", async (req: Request, res: Response) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(contactData);
      res.status(201).json({ message: "Contact message submitted successfully", id: contact.id });
    } catch (error) {
      if (error instanceof Error) {
        const validationError = fromZodError(error);
        res.status(400).json({ message: validationError.message });
      } else {
        res.status(500).json({ message: "An unexpected error occurred" });
      }
    }
  });

  // API routes for newsletter signups
  app.post("/api/newsletters", async (req: Request, res: Response) => {
    try {
      const newsletterData = insertNewsletterSchema.parse(req.body);
      
      // Check if email already exists
      const existingNewsletter = await storage.getNewsletterByEmail(newsletterData.email);
      if (existingNewsletter) {
        return res.status(409).json({ message: "Email already subscribed to newsletter" });
      }
      
      const newsletter = await storage.createNewsletter(newsletterData);
      res.status(201).json({ message: "Newsletter subscription successful", id: newsletter.id });
    } catch (error) {
      if (error instanceof Error) {
        const validationError = fromZodError(error);
        res.status(400).json({ message: validationError.message });
      } else {
        res.status(500).json({ message: "An unexpected error occurred" });
      }
    }
  });

  // Protected API routes - only accessible when logged in
  app.get("/api/dashboard", isAuthenticated, async (req: Request, res: Response) => {
    // This route is protected and only accessible to authenticated users
    const contacts = await storage.getContacts();
    const newsletters = await storage.getNewsletters();
    
    res.json({
      user: req.user,
      stats: {
        contacts: contacts.length,
        newsletters: newsletters.length
      }
    });
  });

  // Get all contacts - protected route
  app.get("/api/dashboard/contacts", isAuthenticated, async (req: Request, res: Response) => {
    try {
      const contacts = await storage.getContacts();
      res.json(contacts);
    } catch (error) {
      console.error("Error fetching contacts:", error);
      res.status(500).json({ message: "Error fetching contacts" });
    }
  });

  // Get all newsletters - protected route
  app.get("/api/dashboard/newsletters", isAuthenticated, async (req: Request, res: Response) => {
    try {
      const newsletters = await storage.getNewsletters();
      res.json(newsletters);
    } catch (error) {
      console.error("Error fetching newsletters:", error);
      res.status(500).json({ message: "Error fetching newsletters" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
