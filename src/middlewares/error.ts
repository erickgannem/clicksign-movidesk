import { Request, Response, NextFunction } from 'express'

interface HttpError {
  message: string,
}

export default function (error: HttpError, request: Request, response: Response, next: NextFunction) {
  process.stdout.write(`\n>> [Error Handler] ${error.message} \n`)

  return response.status(500).json({
    message: error.message
  })
}
