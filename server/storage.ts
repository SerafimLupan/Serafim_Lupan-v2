import { type ContactMessage, type InsertContactMessage } from "@shared/schema";

export interface IStorage {
  // Add any methods if needed, for now just a placeholder
  createContactMessage(message: InsertContactMessage): Promise<number>;
}

export class MemStorage implements IStorage {
  private messages: Map<number, ContactMessage>;
  private currentId: number;

  constructor() {
    this.messages = new Map();
    this.currentId = 1;
  }

  async createContactMessage(message: InsertContactMessage): Promise<number> {
    const id = this.currentId++;
    this.messages.set(id, { ...message, id });
    return id;
  }
}

export const storage = new MemStorage();
