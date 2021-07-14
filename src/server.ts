import App from '@src/app'
import { logger as log } from '@utils/logger'

const server = new App().server
const PORT = process.env.PORT || 3000

server.listen(PORT, () => log({
  status: 'OK',
  message: `Running on port ${PORT}`,
  from: 'server.ts'
}))
