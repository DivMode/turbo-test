import { Elysia } from "elysia";
import {db} from "@acme/db";


const app = new Elysia().onError(({ code, error }) => {
    return new Response(error.toString())
})

    app.get("/test",
    async ({ body, set }) => {
          const result = await db.query.domain.findMany();
        console.log(result);
        return result
    }).listen(process.env.PORT || 3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
