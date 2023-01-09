const fastify = require('fastify')({logger : true});
const PORT = 5000

fastify.get('/', async(request , reply) => {
    return {visitor: "Fastify MongoDB"}
})

const start = async () => {
  try {
    await fastify.listen(PORT)
  } catch (error) {
    fastify.log.error(error)
    process.exit(1)
  }
}

start()