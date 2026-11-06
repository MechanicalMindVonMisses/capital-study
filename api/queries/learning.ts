import { and, eq } from "drizzle-orm";
import { lessonNotes, lessonProgress } from "@db/schema";
import { getDb } from "./connection";

export async function getLearningData(userId: number) {
  const db = getDb();
  const [progress, notes] = await Promise.all([
    db.select().from(lessonProgress).where(eq(lessonProgress.userId, userId)),
    db.select().from(lessonNotes).where(eq(lessonNotes.userId, userId)),
  ]);
  return { progress, notes };
}

export async function setLessonProgress(input: {
  userId: number;
  lessonId: string;
  completed?: boolean;
  score?: number;
  bookmarked?: boolean;
}) {
  const db = getDb();
  const [existing] = await db.select().from(lessonProgress)
    .where(and(eq(lessonProgress.userId, input.userId), eq(lessonProgress.lessonId, input.lessonId))).limit(1);
  const completed = input.completed ?? existing?.completed ?? false;
  const bestScore = Math.max(existing?.bestScore ?? 0, input.score ?? 0);
  const bookmarked = input.bookmarked ?? existing?.bookmarked ?? false;
  await db.insert(lessonProgress)
    .values({ userId: input.userId, lessonId: input.lessonId, completed, bestScore, bookmarked })
    .onDuplicateKeyUpdate({ set: { completed, bestScore, bookmarked, updatedAt: new Date() } });
  return { lessonId: input.lessonId, completed, bestScore, bookmarked };
}

export async function saveLessonNote(userId: number, lessonId: string, content: string) {
  await getDb().insert(lessonNotes).values({ userId, lessonId, content })
    .onDuplicateKeyUpdate({ set: { content, updatedAt: new Date() } });
  return { lessonId, content };
}
