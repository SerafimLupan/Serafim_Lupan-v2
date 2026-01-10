import { z } from 'zod';
import { insertContactMessageSchema, contactMessages } from './schema';

export const api = {
  // Minimal API routes if we were to add a contact form backend later
  contact: {
    submit: {
      method: 'POST' as const,
      path: '/api/contact',
      input: insertContactMessageSchema,
      responses: {
        200: z.object({ success: z.boolean() }),
        400: z.object({ message: z.string() }),
      },
    },
  },
};
