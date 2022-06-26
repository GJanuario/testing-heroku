interface IBreweryDTO {
    id?: string
    name?: string
    brewery_type?: string
    city?: string
    state?: string
    country?: string
    website_url?: string
    rating_avg?: number
    rating_sum?: number
    rating_total?: number
  }

interface IBreweriesRepository {
    findByCity(cityName: string): Promise<IBreweryDTO[]>
}

export { IBreweriesRepository, IBreweryDTO }
