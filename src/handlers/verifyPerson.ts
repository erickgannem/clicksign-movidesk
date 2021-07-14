import { Request, Response, NextFunction } from 'express'
import removeCpfChars from '@utils/removeCpfChars'
import Person from '@interfaces/Person'
import { logger as log } from '@src/utils/logger'
import retrievePerson from '@src/api/createTicket'
import createPerson from '@src/api/createPerson'

export default async function verifyPerson (req: Request, res: Response, next: NextFunction) {
  try {
    const { data: userData } = req.document.template
    const { MOVIDESK_TOKEN } = process.env

    const cpf = removeCpfChars(userData.cpf)

    const { data: retrieved } : { data: Person[] } = await retrievePerson({
      cpf,
      token: MOVIDESK_TOKEN as string
    })

    if (!retrieved.length) {
      log({
        status: 'OK',
        message: 'User does not exist. Creating',
        from: 'verifyPerson.ts'
      })
      const person = await createPerson<Person>({
        userData,
        token: MOVIDESK_TOKEN as string
      })
      req.person = person.data
      return next()
    }
    log({
      status: 'OK',
      message: 'User already exists. Skipping',
      from: 'verifyPerson.ts'
    })
    req.person = retrieved[0]
    return next()
  } catch (err) {
    next(err)
  }
}
