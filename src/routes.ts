import { Router } from 'express'

import getServerStatus from '@handlers/getServerStatus'
import verifyDocument from '@handlers/verifyDocument'
import verifyClient from '@handlers/verifyClient'

const routes = Router()

routes.get('/status', getServerStatus)
routes.post('/deliver', verifyDocument, verifyClient)

routes.post('/test', verifyClient)
export default routes
