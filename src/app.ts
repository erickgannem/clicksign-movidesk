import express, { Application } from 'express'
import dotenv from 'dotenv'
import routes from './routes'
import error from './middlewares/error'

const { NODE_ENV } = process.env

export default class App {
  server: Application
  constructor () {
    switch (NODE_ENV) {
      case 'dev':
        dotenv.config({ path: '.env.dev' })
        break
      case 'prod':
        dotenv.config({ path: '.env.prod' })
        break
      default:
        dotenv.config()
    }
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

  errors () {
    this.server.use(error)
  }
}
