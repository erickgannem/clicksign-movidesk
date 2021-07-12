import { Request, Response, NextFunction } from 'express'

export default async function createTicker (req: Request, res: Response, next: NextFunction) {
  return res.status(200)
}
