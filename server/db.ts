import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import * as schema from "@shared/schema";

const { Pool } = pg;

// For this static portfolio, we don't strictly need a DB connection.
// This handles the case where DATABASE_URL is not set without crashing.
export const pool = new Pool({ 
  connectionString: process.env.DATABASE_URL || "postgres://user:pass@localhost:5432/db" 
});

// We export a dummy db object if no connection, but ideally we just don't use it.
export const db = drizzle(pool, { schema });
