import express, { Application } from 'express'
import routes from './routes'

export default class App {
  server: Application
  constructor () {
    this.server = express()
    this.middlewares()
    this.routes()
    this.errors()
  }

  middlewares () {
    this.server.use(express.json())
  }

  routes () {
    this.server.use(routes)
  }

  errors () {}
}
