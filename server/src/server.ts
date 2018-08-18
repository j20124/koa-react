import * as Koa from 'koa'
import * as cors from 'koa2-cors'
import * as bodyparser from 'koa-bodyparser'
import api from './api'

const app = new Koa()

app
  .use(cors())
  .use(bodyparser())
  .use(api)

export default app