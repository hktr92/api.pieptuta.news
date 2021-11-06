import { Application, Router, SimpleDB } from "./deps.ts";

const db = new SimpleDB({ filePath: "./pieptuta.db.json" });
const app = new Application();
const router = new Router();

router.get("/articles", (ctx) => {
  ctx.response.body = { data: [] };
});

// Logger
app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.headers.get("X-Response-Time");
  console.log(`${ctx.request.method} ${ctx.request.url} - ${rt}`);
});

// Timing
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.response.headers.set("X-Response-Time", `${ms}ms`);
});

app.use(router.routes());
app.use(router.allowedMethods());

app.use((ctx) => {
  ctx.throw(500);
});

console.log("HTTP Server started on http://localhost:8000");
await app.listen({ port: 8000 });
