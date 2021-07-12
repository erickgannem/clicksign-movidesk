import { Request, Response, NextFunction } from 'express'
import movidesk from '@api/movidesk'
import removeCpfChars from '@utils/removeCpfChars'
import Template from '@interfaces/Template'

async function _createPerson (userData: Template['data']) {}
export default async function verifyPerson (req: Request, res: Response, next: NextFunction) {
  try {
    const { data: userData } = req.document.template
    const { MOVIDESK_TOKEN } = process.env

    let { cpf } = userData
    cpf = removeCpfChars(cpf)

    const response = await movidesk.get(
      `/persons?token=${MOVIDESK_TOKEN}&$filter=cpfCnpj eq '${cpf}'`
    )

    const { data: retrieved } = response

    if (!retrieved.length) {
      // User does not exist. Create
      _createPerson(userData)
      return next() // Now go to create a ticket
    }

    // User exists
    req.person = retrieved[0]

    return next() // Now go to create a ticket
  } catch (e) {
    next(e)
  }
}
