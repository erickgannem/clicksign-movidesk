declare module 'http' {
  export interface IncomingMessage {
    rawBody: string | Buffer
  }
}
