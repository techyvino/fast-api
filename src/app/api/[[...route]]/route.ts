import { db } from "@/lib/db";
import { Hono } from "hono";
import { logger } from "hono/logger";
import { handle } from "hono/vercel";

export const runtime = "edge";

const app = new Hono().basePath("/api");

app.use(logger());

app.post("/login", async (c) => {
  const body = await c.req.json();
  return c.json({
    ...body,
  });
});
app.post("/signup", async (c) => {
  const body = await c.req.json();

  const isUserExist = await db.user.findUnique({
    where: { email: body?.email },
  });

  if (isUserExist) {
    return c.json({ message: "User already exist" }, 409);
  }

  const newUser = await db.user.create({
    data: {
      ...body,
    },
  });

  return c.json(
    {
      message: "User Created Successfully",
      data: newUser,
    },
    201
  );
});

app.get("/user", async (c) => {
  return c.json({ message: "Hello world!" });
});

export const GET = handle(app);
export const POST = handle(app);
