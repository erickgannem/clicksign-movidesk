import express, {Application} from 'express'

export default class App {
  server: Application
  constructor() {
    this.server = express()
    this.middlewares()
    this.routes()
    this.errors()
  }

  middlewares() {}
  routes() {}
  errors() {}
}