const config = {
  mongodb: {
    host: process.env.NODE_HOST || 'localhost',
    port: 27017,
    database: 'hello-koa'
  }
}

export default config