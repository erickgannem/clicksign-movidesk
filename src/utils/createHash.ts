import { createHmac } from 'crypto'

interface Opts {
  encoding: string,
  secretKey: string,
  payload: string | Buffer
}

export default function createHash (opts: Opts) {
  const { encoding, secretKey, payload } = opts

  const _hmac = createHmac(encoding, secretKey)
  _hmac.update(payload)
  const _hash = _hmac.digest('hex')

  return _hash
}
