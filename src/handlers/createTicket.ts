import { Request, Response, NextFunction } from 'express'
import movidesk from '@api/movidesk'
import Person from '@interfaces/Person'
import Ticket from '@interfaces/Ticket'

import { logger as log } from '@src/utils/logger'

type CreateTicketCallOpts = {
  data: {
    person: Person
    subject: string
  }
  token: string
  adminId: string
}
const _createTicketCall = async <T>({
  data: { person, subject },
  token,
  adminId
}: CreateTicketCallOpts) => {
  const { id } = person
  const ticket = movidesk.post<T>(`/tickets?token=${token}`, {
    subject,
    type: 2,
    origin: 8,
    status: 'Novo',
    owner: null,
    ownerTeam: null,
    clients: [{ id }],
    createdBy: { id: adminId },
    actions: [{
      description: `
        Ticket gerado automaticamente pelo sistema de integração a respeito de: \n
        ${subject} \n
      `,
      htmlDescription: `<b>Ticket gerado automaticamente pelo sistema de integração a respeito de:</b> \n
      <p>${subject}</p>
      `,
      type: 1
    }]
  })
  return ticket
}

export default async function createTicket (req: Request, res: Response, next: NextFunction) {
  try {
    const { MOVIDESK_TOKEN, MOVIDESK_ADMIN_ID } = process.env
    const { person, documentSubject: subject } = req

    log({
      status: 'OK',
      message: 'Creating ticket',
      from: 'createTicket.ts'
    })
    await _createTicketCall<Ticket>({
      data: { person, subject },
      token: MOVIDESK_TOKEN as string,
      adminId: MOVIDESK_ADMIN_ID as string
    })

    log({
      status: 'OK',
      from: 'createTicket.ts',
      message: 'Ticket created'
    })
    return res.status(200).json({ message: 'Ticket created' })
  } catch (err) {
    next(err)
  }
}
