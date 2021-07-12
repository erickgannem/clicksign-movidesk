import { createHmac } from 'crypto'

type Opts = {
  encoding: string,
  secretKey: string,
  payload: string | Buffer
}

export default function createHash ({ encoding, secretKey, payload }: Opts) {
  const _hmac = createHmac(encoding, secretKey)
  _hmac.update(payload)
  const _hash = _hmac.digest('hex')

  return _hash
}
