import { Request, Response, NextFunction } from 'express'

export default function getServerStatus (req: Request, res: Response, next: NextFunction) {
  return res.status(200).json(
    {
      status: 'OK',
      path: '/status',
      message: 'server is up and running'
    }
  )
}
