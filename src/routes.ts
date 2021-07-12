import { Router } from 'express'

import getServerStatus from '@handlers/getServerStatus'
import verifyDocument from '@handlers/verifyDocument'

const routes = Router()

routes.get('/status', getServerStatus)
routes.post('/deliver', verifyDocument)

export default routes
