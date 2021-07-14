import { Request, Response, NextFunction } from 'express'
import { logger as log } from '@utils/logger'
interface HttpError {
  message: string,
}

export default function (error: HttpError, request: Request, response: Response, next: NextFunction) {
  log({
    status: 'ERROR',
    from: 'Error handler (error.ts)',
    message: error.message
  })
  return response.status(500).json({
    message: error.message
  })
}
