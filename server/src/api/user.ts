import * as Router from 'koa-router'
import { User, UserModel } from '../model/users'

const router = new Router()

router.get('/', async ctx => {
  ctx.body = {
    users: await UserModel.find()
  }
  ctx.status = 200
})

router.get('/:id', async ctx => {
  ctx.body = {
    user: await UserModel.findById(ctx.params.id)
  }
  ctx.status = 200
})

router.post('/', async ctx => {
  const user: User = {
    ...ctx.request.body
  }
  
  const userModel = new UserModel(user)
  const result = await userModel.save()
  
  ctx.body = result
  ctx.status = 201
})

export default router.routes()