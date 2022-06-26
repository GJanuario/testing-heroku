import express from 'express'
import mongoose from 'mongoose'
import swaggerUi from 'swagger-ui-express'

import { router } from './routes'
import swaggerFile from './swagger.json'

const app = express()

app.use(express.json())

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use(router)

mongoose
  .connect('mongodb://database:27017/testing-heroku')
  .then(() => {
    console.log('Connected to MongoDB!')
  })
  .catch((err) => {
    console.log(`Could not connect to MongoDB due to ${err.reason}`)
  })

app.listen(3333, () => console.log('Server running!'))
