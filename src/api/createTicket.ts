import movidesk from '@api/movidesk'

export default async function retrievePerson ({ cpf, token }: {[key: string]: string}) {
  const person = await movidesk.get(
    `/persons?token=${token}&$filter=cpfCnpj eq '${cpf}'`
  )
  return person
}
