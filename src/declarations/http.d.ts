import Document from '@interfaces/Document'
import Person from '@src/interfaces/Person'

declare module 'http' {
  export interface IncomingMessage {
    rawBody: string | Buffer,
    document: Document,
    person: Person
  }
}
