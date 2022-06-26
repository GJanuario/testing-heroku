import { Request, Response } from 'express'

import { SearchBreweriesService } from '../services/SearchBreweriesService'
import { AppError } from '../shared/AppError'

const searchBreweriesService = new SearchBreweriesService()

class SearchBreweriesController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { city } = req.query

    if (typeof city !== 'string') {
      throw new AppError('Query param has to be a string!')
    }

    const breweries = await searchBreweriesService.execute(city)
    return res.json(breweries)
  }
}

export { SearchBreweriesController }
