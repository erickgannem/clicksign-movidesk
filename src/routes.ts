import { Router } from 'express'
import getServerStatus from '@handlers/getServerStatus'
import verifyDocument from '@handlers/verifyDocument'
import verifyPerson from '@handlers/verifyPerson'
import createTicket from '@handlers/createTicket'

const routes = Router()

routes.get('/status', getServerStatus)
routes.post('/deliver', verifyDocument, verifyPerson, createTicket)

export default routes
