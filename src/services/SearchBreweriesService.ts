import { ISearchBreweriesDTO } from '../repositories/IBreweriesRepository'
import { BreweriesRepository } from '../repositories/implementations/BreweriesRepository'

const breweriesRepository = new BreweriesRepository()

class SearchBreweriesService {
  async execute(city: string): Promise<ISearchBreweriesDTO[]> {
    const breweries = await breweriesRepository.findByCity(city)

    return breweries
  }
}

export { SearchBreweriesService }
