import { withArticleRoutes } from "./core/article/action.ts";
import { withWidgetRoutes } from "./core/widget/action.ts";

import { Application, Context, NextFn, oakCors, Router } from "./deps.ts";
import { dbSeed } from "./util/database/database.ts";

dbSeed();

const app = new Application();
const router = new Router();

// Logger
app.use(async (ctx: Context, next: NextFn) => {
  await next();
  const rt = ctx.response.headers.get("X-Response-Time");
  console.log(`${ctx.request.method} ${ctx.request.url} - ${rt}`);
});

// Timing
app.use(async (ctx: Context, next: NextFn) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.response.headers.set("X-Response-Time", `${ms}ms`);
});

app.use(oakCors());

withArticleRoutes(router);
withWidgetRoutes(router);

app.use(router.routes());
app.use(router.allowedMethods());

app.use((ctx: Context) => {
  ctx.response.status = 404;
  ctx.response.body = { error: "Not Found" };
});

console.log("HTTP Server started on http://localhost:8000");
await app.listen({ port: 8000 });
