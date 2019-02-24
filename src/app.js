import express from 'express'
import bodyParser from 'body-parser'
import config from './config'
import { router } from './router'

import { databaseConnect } from './database'

const app = express()

databaseConnect()

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true
  })
)
app.use('/', router)

const port = config.port
app.listen(port, () => {
  console.log(
    `Server started on http://localhost:${port} [${process.env.NODE_ENV}]`
  )
})
