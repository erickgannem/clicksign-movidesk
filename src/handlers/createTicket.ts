import { Request, Response, NextFunction } from 'express'

export default async function createTicket (req: Request, res: Response, next: NextFunction) {
  const { person } = req

  // Proceed to create a ticket
  return res.status(200).end()
}
