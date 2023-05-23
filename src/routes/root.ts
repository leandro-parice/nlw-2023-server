import { FastifyInstance } from 'fastify'

export async function rootRoutes(app: FastifyInstance) {
  app.get('/', () => {
    return '😎'
  })
}
