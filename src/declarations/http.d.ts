import Document from '@interfaces/Document'

declare module 'http' {
  export interface IncomingMessage {
    rawBody: string | Buffer,
    document: Document
  }
}
