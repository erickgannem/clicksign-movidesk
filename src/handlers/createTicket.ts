import { Request, Response, NextFunction } from 'express'
import movidesk from '@api/movidesk'
import Person from '@interfaces/Person'
import Ticket from '@interfaces/Ticket'

type CreateTicketOpts = {
  person: Person
  token: string
  adminId: string
}
const _createTicketCall = async <T>({ person, token, adminId }: CreateTicketOpts) => {
  const { id } = person
  const ticket = movidesk.post<T>('/tickets?token=' + token, {
    type: 2,
    subject: '[TESTE] Assunto do Ticket via REST',
    status: 'Novo',
    origin: 8, // contact form
    owner: null,
    ownerTeam: null,
    clients: [{ id }],
    createdBy: { id: adminId },
    actions: [{
      description: 'Teste from REST CLIENT \n',
      htmlDescription: '<p>Teste FROM REST CLIENT</p>',
      type: 1 // intern
    }]
  })
  return ticket
}
export default async function createTicket (req: Request, res: Response, next: NextFunction) {
  try {
    const { MOVIDESK_TOKEN, MOVIDESK_ADMIN_ID } = process.env
    const { person } = req

    process.stdout.write('Creating ticket...')
    const ticket = await _createTicketCall<Ticket>({
      person,
      token: MOVIDESK_TOKEN as string,
      adminId: MOVIDESK_ADMIN_ID as string
    })

    return res.status(200).json(ticket)
  } catch (err) {
    next(err)
  }
}
