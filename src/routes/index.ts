import { Router } from 'express'

import { breweriesRoutes } from './breweries.routes'

const router = Router()

router.use('/breweries', breweriesRoutes)

export { router }
