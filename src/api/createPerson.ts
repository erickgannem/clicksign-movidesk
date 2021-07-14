import movidesk from '@api/movidesk'
import Template from '@interfaces/Template'

type CreatePersonOpts = {
  userData: Template['data'],
  token: string
}
export default async function createPerson<T> ({ userData, token }: CreatePersonOpts) {
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
