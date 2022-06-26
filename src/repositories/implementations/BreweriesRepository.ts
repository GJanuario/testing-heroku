import { Brewery } from '../../models/Brewery'
import { IBreweriesRepository, IBreweryDTO } from '../IBreweriesRepository'

class BreweriesRepository implements IBreweriesRepository {
  async findByCity(cityName: string): Promise<IBreweryDTO[]> {
    const breweries = await Brewery.find({ city: cityName })

    return breweries.map(({
      id, name, brewery_type, city, state, country,
      website_url, rating_avg, rating_sum, rating_total,
    }) => ({
      id,
      name,
      brewery_type,
      city,
      state,
      country,
      website_url,
      rating_avg,
      rating_sum,
      rating_total,
    }))
  }
}

export { BreweriesRepository }
