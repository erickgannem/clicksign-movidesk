export default interface Signer {
  'list_key': string
  key: string
  'request_signature_key': string
  email: string
  name: string
  'has_documentation': boolean
  documentation: string
  birthday: string
  'phone_number': string | null
  'sign_as': string | null
  delivery: string
  group: number | null
  url: string
  auths: string[],
  'created_at': string,
  signature: {
    name: string
    email: string
    birthday: string
    documentation: string
    validation: {
      [key: string]: string
    },
    'ip_address': string
    'signed_at': string
    'sign_as': string
  }
}
