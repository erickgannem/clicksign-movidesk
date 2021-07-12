import { Request, Response, NextFunction } from 'express'

import { NO_HASH_MATCH, NO_HMAC_FOUND } from '@constants/error'
import compareHashes from '@utils/compareHashes'
import createHash from '@utils/createHash'

export default function verifyDocument (req: Request, res: Response, next: NextFunction) {
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

  req.document = payload.document

  return next()
}
