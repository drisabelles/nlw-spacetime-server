import fastify from "fastify";
import { PrismaClient } from "@prisma/client";

const app = fastify();
const prisma = new PrismaClient();

// ---- http methods: get, post, patch, put and delete

app.get("/users", async () => {
  const users = await prisma.user.findMany;

  return users;
});

// ---- api restful

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("HTTP server running on http://localhost:3333");
  });
