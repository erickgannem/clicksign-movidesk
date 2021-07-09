import { Router, Request, Response } from 'express'

import verifyDocument from '@handlers/verifyDocument'

const routes = Router()

routes.get('/status', (req: Request, res: Response) => {
  return res.status(200).json({ status: 'OK', path: '/', message: 'server is up and running' })
})
routes.post('/deliver', verifyDocument)

export default routes
