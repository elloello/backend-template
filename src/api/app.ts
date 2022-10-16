import fastify from "fastify";

const app = fastify({ logger: true });

// start the app
(async () => await app.listen({ port: Number(process.env.PORT) }))();