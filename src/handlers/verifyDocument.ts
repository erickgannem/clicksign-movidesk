import { Request, Response, NextFunction } from 'express'
import crypto from 'crypto'

import compareHashes from '@utils/compareHashes'
import { NO_HASH_MATCH, NO_HMAC_FOUND } from '@constants/error'

export default function verifyDocument (req: Request, res: Response, next: NextFunction) {
  const { headers, rawBody } = req
  const { createHmac } = crypto
  const { CLICKSIGN_HMAC_KEY } = process.env

  if (!CLICKSIGN_HMAC_KEY || !headers['content-hmac']) {
    throw new Error(NO_HMAC_FOUND)
  }

  const _hmac = createHmac('sha256', CLICKSIGN_HMAC_KEY)
  _hmac.update(rawBody)

  const _hash = _hmac.digest('hex')
  const hmac = headers['content-hmac'] as string
  const [, hash] = hmac.split('=')

  const match = compareHashes(_hash, hash)

  if (!match) {
    throw new Error(NO_HASH_MATCH)
  }

  process.stdout.write('BODY => ' + JSON.stringify(req.body) + '\n')
  return res.status(200).end() // next()
}
