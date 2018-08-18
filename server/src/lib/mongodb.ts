import * as mongoose from 'mongoose'
import config from '../config'

const { host, port, database } = config.mongodb

console.log(`mongodb port: ${port}`)

namespace mongodb {
  export let connect = async () => {
    await mongoose.connect(`mongodb://${host}:${port}/${database}`)
  }

  mongoose.connection.on('error', console.error)
  mongoose.connection.once('open', () => {
    console.log('Connected to mongod server')
  })
}

export default mongodb