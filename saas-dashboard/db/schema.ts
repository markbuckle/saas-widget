import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";
import { use } from "react";

export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  name: text("name"),
  description: text("description"),
  url: text("url"),
  userId: varchar("user_id")
});

// export const feedbacks = pgTable("feedbacks", {
//   id: serial("id").primaryKey(),
//   projectId: varchar("project_id"),
//   feedback: text("feedback"),
//   userName: text("user_name"),
//   userEmail: text("user_email"),
//   message: text("message")
// });