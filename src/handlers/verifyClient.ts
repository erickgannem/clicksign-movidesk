import { Request, Response, NextFunction } from 'express'
import movidesk from '@api/movidesk'
import removeCpfChars from '@utils/removeCpfChars'

export default async function verifyClient (req: Request, res: Response, next: NextFunction) {
  try {
    const { data: clientData } = req.document.template
    const { MOVIDESK_TOKEN } = process.env

    let { cpf } = clientData
    cpf = removeCpfChars(cpf)

    const request = await movidesk.get(
      `/persons?token=${MOVIDESK_TOKEN}&$filter=cpfCnpj eq ${cpf}`
    )

    return res.status(200).json(request)
  } catch (e) {
    next(e)
  }
}
