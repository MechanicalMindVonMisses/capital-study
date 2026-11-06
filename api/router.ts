import { authRouter } from "./auth-router";
import { learningRouter } from "./learning-router";
import { createRouter, publicQuery } from "./middleware";

export const appRouter = createRouter({
  ping: publicQuery.query(() => ({ ok: true, ts: Date.now() })),
  auth: authRouter,
  learning: learningRouter,
});

export type AppRouter = typeof appRouter;
