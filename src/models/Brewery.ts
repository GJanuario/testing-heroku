import mongoose from 'mongoose'

const Brewery = mongoose.model('Brewery', new mongoose.Schema({
  id: 'string',
  name: 'string',
  brewery_type: 'string',
  street: 'string',
  address_2: 'string',
  address_3: 'string',
  city: 'string',
  state: 'string',
  county_province: 'string',
  postal_code: 'string',
  country: 'string',
  longitude: 'string',
  latitude: 'string',
  phone: 'string',
  website_url: 'string',
  updated_at: 'string',
  created_at: 'string',
  rating_avg: 'number',
  rating_sum: 'number',
  rating_total: 'number',
}))

export { Brewery }
