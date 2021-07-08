import { Router, Request, Response } from 'express'

const routes = Router()

routes.get('/', (req: Request, res: Response) => {
  process.stdout.write('Clicksign-Movidesk Integration \n')
  return res.status(200).json({ status: 'OK', path: '/', message: 'Clicksign-Movidesk Integration' })
})
routes.post('/run', (req: Request, res: Response) => {
  process.stdout.write('BODY => ' + JSON.stringify(req.body) + '\n')
  return res.status(200).end()
})

export default routes
