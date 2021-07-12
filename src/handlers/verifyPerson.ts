import { Request, Response, NextFunction } from 'express'
import movidesk from '@api/movidesk'
import removeCpfChars from '@utils/removeCpfChars'
import Template from '@interfaces/Template'
import Person from '@interfaces/Person'

async function _createPerson (userData: Template['data']) {}
async function _retrievePerson ({ cpf, token }: {[key: string]: string}) {
  const person = await movidesk.get(
    `/persons?token=${token}&$filter=cpfCnpj eq '${cpf}'`
  )
  return person
}

export default async function verifyPerson (req: Request, res: Response, next: NextFunction) {
  try {
    const { data: userData } = req.document.template
    const { MOVIDESK_TOKEN } = process.env

    const cpf = removeCpfChars(userData.cpf)

    const { data: retrieved } : { data: Person[] } = await _retrievePerson({
      cpf,
      token: MOVIDESK_TOKEN as string
    })

    if (!retrieved.length) {
      _createPerson(userData)
      return next()
    }
    req.person = retrieved[0]
    return next()
  } catch (e) {
    next(e)
  }
}
