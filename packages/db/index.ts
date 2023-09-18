import { Client } from "@planetscale/database";
import { drizzle } from "drizzle-orm/planetscale-serverless";

import * as domain from "./schema/domain";
export const schema = { ...domain };

export { mySqlTable as tableCreator } from "./schema/_table";

export * from "drizzle-orm";

if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not set");
}

export const db = drizzle(
  new Client({
    url: process.env.DATABASE_URL,
  }).connection(),
  { schema },
);
