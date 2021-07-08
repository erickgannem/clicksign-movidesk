import { Router, Request, Response } from 'express'

const routes = Router()

routes.get('/status', (req: Request, res: Response) => {
  return res.status(200).json({ status: 'OK', path: '/', message: 'server is up and running' })
})
routes.post('/deliver', (req: Request, res: Response) => {
  process.stdout.write('BODY => ' + JSON.stringify(req.body) + '\n')
  return res.status(200).end()
})

routes.get('/error', (req: Request, res: Response) => {
  throw new Error('ERRORORORORO')
})

export default routes
