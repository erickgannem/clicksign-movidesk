import Template from '@interfaces/Template'
import Signer from '@interfaces/Signer'

export default interface Document {
    key: string
    'account_key': string
    path: string
    filename: string
    'uploaded_at': string
    'updated_at': string
    'finished_at': string
    'deadline_at': string
    status: string
    'auto_close': boolean
    locale: string
    metadata: any
    'sequence_enabled': boolean
    'signable_group': string | null
    'remind_interval': number
    downloads: {
      'original_file_url': string
      'signed_file_url': string
      'ziped_file_url': string
    }
    template: Template
    signers: Signer[]
    events: any[]
    attachments: any[]
}
