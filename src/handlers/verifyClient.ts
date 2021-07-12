import { Request, Response, NextFunction } from 'express'

export default function verifyClient (req: Request, res: Response, next: NextFunction) {
  const { template } = req.document
}
