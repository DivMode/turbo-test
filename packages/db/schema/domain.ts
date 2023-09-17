import { sql } from "drizzle-orm";
import { serial, timestamp, tinyint, varchar } from "drizzle-orm/mysql-core";

import { mySqlTable } from "./_table";

export const domain = mySqlTable("domain", {
  id: serial("id").primaryKey(),
  domain: varchar("name", { length: 256 }).notNull().unique(),
  tld: varchar("tld", { length: 63 }).notNull(),
  length: tinyint("length").notNull(),
  createdAt: timestamp("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updatedAt").onUpdateNow()
});
