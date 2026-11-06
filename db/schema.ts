import { mysqlTable, mysqlEnum, serial, varchar, text, timestamp, bigint, int, boolean, uniqueIndex } from "drizzle-orm/mysql-core";

export const users = mysqlTable("users", {
  id: serial("id").primaryKey(),
  unionId: varchar("unionId", { length: 255 }).notNull().unique(),
  name: varchar("name", { length: 255 }),
  email: varchar("email", { length: 320 }),
  avatar: text("avatar"),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().notNull().$onUpdate(() => new Date()),
  lastSignInAt: timestamp("lastSignInAt").defaultNow().notNull(),
});
export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

export const lessonProgress = mysqlTable("lesson_progress", {
  id: serial("id").primaryKey(),
  userId: bigint("userId", { mode: "number", unsigned: true }).notNull(),
  lessonId: varchar("lessonId", { length: 100 }).notNull(),
  completed: boolean("completed").default(false).notNull(),
  bestScore: int("bestScore").default(0).notNull(),
  bookmarked: boolean("bookmarked").default(false).notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().notNull().$onUpdate(() => new Date()),
}, (table) => ({ userLesson: uniqueIndex("lesson_progress_user_lesson").on(table.userId, table.lessonId) }));

export const lessonNotes = mysqlTable("lesson_notes", {
  id: serial("id").primaryKey(),
  userId: bigint("userId", { mode: "number", unsigned: true }).notNull(),
  lessonId: varchar("lessonId", { length: 100 }).notNull(),
  content: text("content").notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().notNull().$onUpdate(() => new Date()),
}, (table) => ({ userLesson: uniqueIndex("lesson_notes_user_lesson").on(table.userId, table.lessonId) }));

export type LessonProgress = typeof lessonProgress.$inferSelect;
export type LessonNote = typeof lessonNotes.$inferSelect;
