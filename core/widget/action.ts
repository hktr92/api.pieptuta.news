import { Router } from "../../deps.ts";
import { WidgetType } from "../../util/database/schema.ts";
import { fetchWidgetByType } from "./repository.ts";

export const withWidgetRoutes = (router: Router) => {
  router.get("/widget/:type", async (ctx) => {
    if (ctx.params && ctx.params.type) {
      ctx.response.body = await fetchWidgetByType(<WidgetType> ctx.params.type);
    }
  });
};
