import { Request, Response, NextFunction } from 'express'

import { NO_HASH_MATCH, NO_HMAC_FOUND } from '@constants/error'
import compareHashes from '@utils/compareHashes'
import createHash from '@utils/createHash'
import formatFileName from '@src/utils/formatFileName'
import cache from '@src/cache'
import { logger as log } from '@utils/logger'
import checkValidForm from '@utils/checkValidForm'
import checkDocumentsCache from '@utils/checkDocumentsCache'
import Document from '@interfaces/Document'
import Template from '@interfaces/Template'

export default async function verifyDocument (req: Request, res: Response, next: NextFunction) {
  const { headers, rawBody } = req
  const { CLICKSIGN_HMAC_KEY } = process.env

  if (!CLICKSIGN_HMAC_KEY || !headers['content-hmac']) {
    throw new Error(NO_HMAC_FOUND)
  }

  const [, receivedHash] = (headers['content-hmac'] as string).split('=')

  const _hash = createHash({
    encoding: 'sha256',
    secretKey: CLICKSIGN_HMAC_KEY,
    payload: rawBody
  })

  const match = compareHashes(_hash, receivedHash)

  if (!match) {
    throw new Error(NO_HASH_MATCH)
  }

  const { body: payload } = req
  const { document }: { document: Document } = payload
  const { template }: { template: Template } = document

  const isValid = checkValidForm(template.key)
  if (!isValid) {
    log({
      message: 'This form is not valid for this flux',
      status: 'OK',
      from: 'verifyDocument.ts'
    })
    return res.status(200).end()
  }

  const isCached = await checkDocumentsCache({ cache, key: document.key })
  if (isCached) {
    log({
      message: 'Document already cached and processed',
      status: 'OK',
      from: 'verifyDocument.ts'
    })
    return res.status(200).end()
  }

  req.document = document
  req.documentSubject = formatFileName(document.filename)

  return next()
}
