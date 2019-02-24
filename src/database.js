import mongoose from 'mongoose'
import appConfig from './config'

export const databaseConnect = (config = appConfig) => {
    return mongoose
        .connect(config.database, {
            useNewUrlParser: true
        })
        .then(() => console.log('MongoDB is ready!'))
        .catch(error => console.log(`Something went wrong: ${error}`))
}