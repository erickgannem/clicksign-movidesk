import express, { Application } from 'express'
import dotenv from 'dotenv'
import routes from './routes'
import error from '@middlewares/error'

const { NODE_ENV } = process.env

declare module 'http' {
  export interface IncomingMessage {
    rawBody: string | Buffer
  }
}

export default class App {
  server: Application
  constructor () {
    switch (NODE_ENV) {
      case 'debug':
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
    this.server.use(express.json({
      verify: (req, res, buf) => {
        req.rawBody = buf
      }
    }))
  }

  routes () {
    this.server.use(routes)
  }

  errors () {
    this.server.use(error)
  }
}
