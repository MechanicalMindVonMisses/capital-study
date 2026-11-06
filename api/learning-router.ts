import { z } from "zod";
import { authedQuery, createRouter } from "./middleware";
import { getLearningData, saveLessonNote, setLessonProgress } from "./queries/learning";

export const learningRouter = createRouter({
  overview: authedQuery.query(({ ctx }) => getLearningData(ctx.user.id)),
  setProgress: authedQuery
    .input(z.object({
      lessonId: z.string().min(1).max(100),
      completed: z.boolean().optional(),
      score: z.number().int().min(0).max(100).optional(),
      bookmarked: z.boolean().optional(),
    }))
    .mutation(({ ctx, input }) => setLessonProgress({ ...input, userId: ctx.user.id })),
  saveNote: authedQuery
    .input(z.object({ lessonId: z.string().min(1).max(100), content: z.string().max(12000) }))
    .mutation(({ ctx, input }) => saveLessonNote(ctx.user.id, input.lessonId, input.content)),
});
