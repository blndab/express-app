import express from 'express'
import config from './config'

import {
    databaseConnect
} from './database'

const app = express()

databaseConnect()

app.get('/', (req, res) => {
    res.send('Welcome to Express!')
})

const port = config.port

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port} [${process.env.NODE_ENV}]`)
})