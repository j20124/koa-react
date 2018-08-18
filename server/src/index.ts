import { createServer } from 'http'

import app from './server'
import mongodb from './lib/mongodb'

mongodb.connect()

const currentApp = app.callback()
const server = createServer(currentApp)

server.listen(3001).on('error', err => {
  console.error(err)
})

export default server
