const fastify = require('fastify')({logger : true});
const PORT = 5000

const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/fastify-mongodb')
.then(() => console.log("MONGO is ready"))
.catch(err => console.log(err))

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