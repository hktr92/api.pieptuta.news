import { db } from "../../util/database/database.ts";
import { Schema } from "../../util/database/schema.ts";

export const fetchArticles = async () => {
  return await db.get<Schema["articles"]>("articles");
};

export const fetchArticleBySlug = async (slug: string) => {
  const data = await db.get<Schema["articles"]>("articles");
  return data.findOne({ slug }).value();
};
