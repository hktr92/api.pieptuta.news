import { Context, Router } from "../../deps.ts";
import { fetchArticleBySlug, fetchArticles } from "./repository.ts";

export const withArticleRoutes = (router: Router) => {
  router.get("/articles", async (ctx: Context) => {
    ctx.response.body = await fetchArticles();
  });
  router.get("/article/:slug", async (ctx) => {
    if (ctx.params && ctx.params.slug) {
      ctx.response.body = await fetchArticleBySlug(ctx.params.slug);
    }
  });
};
