import { Router } from 'express'

import { SearchBreweriesController } from '../controllers/SearchBreweriesController'

const breweriesRoutes = Router()

const searchBreweriesController = new SearchBreweriesController()

breweriesRoutes.get('/', searchBreweriesController.handle)

export { breweriesRoutes }
