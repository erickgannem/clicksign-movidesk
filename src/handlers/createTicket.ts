import { Request, Response, NextFunction } from 'express'

const _createTicket = async () => {

}
export default async function createTicket (req: Request, res: Response, next: NextFunction) {
  const { person } = req
  console.log(person)
  // Proceed to create a ticket
  return res.status(200).end()
}
