import { Request, Response, NextFunction } from 'express'
import movidesk from '@api/movidesk'
import removeCpfChars from '@utils/removeCpfChars'
import Template from '@interfaces/Template'
import Person from '@interfaces/Person'

type CreatePersonOpts = {
  userData: Template['data'],
  token: string
}
function _createPerson<T> ({ userData, token }: CreatePersonOpts) {
  const {
    cpf,
    cep,
    estado: state,
    cidade: city,
    bairro: district,
    logradouro: street,
    número: number,
    'nome completo': fullName,
    'e-mail signatário': email
  } = userData

  return movidesk.post<T>(`/persons?token=${token}&returnAllProperties=true`, {
    id: cpf,
    isActive: true,
    personType: 1,
    profileType: 2,
    businessName: fullName,
    cpfCnpj: cpf,
    addresses: [{
      addressType: 'Residencial',
      postalCode: cep,
      state,
      city,
      district,
      street,
      number,
      isDefault: true
    }],
    emails: [{
      email,
      emailType: 'Pessoal',
      isDefault: true
    }],
    observations: `Created by script on ${new Date()}`
  })
}
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
      const person = await _createPerson<Person>({ userData, token: MOVIDESK_TOKEN as string })
      req.person = person.data
      return next()
    }
    req.person = retrieved[0]
    return next()
  } catch (err) {
    next(err)
  }
}
