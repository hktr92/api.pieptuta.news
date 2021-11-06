import { db } from "../../util/database/database.ts";
import { Schema, WidgetType } from "../../util/database/schema.ts";

export const fetchWidgetByType = async (type: WidgetType) => {
  const data = await db.get<Schema["widgets"]>("widgets");
  return data.findOne({ type }).value();
};
