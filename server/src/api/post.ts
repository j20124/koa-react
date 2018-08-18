import * as Router from 'koa-router'
import { Post, PostModel } from '../model/posts'
import { User, UserModel } from '../model/users'

const router = new Router()

router.get('/', async ctx => {
  ctx.body = {
    posts: await PostModel.find()
  }
  ctx.status = 200
})

router.get('/:id', async ctx => {
  ctx.body = {
    post: await PostModel.findById(ctx.params.id)
  }
  ctx.status = 200
})

router.post('/', async ctx => {
  const post: Post = {
    ...ctx.request.body
  }
  
  const user: User = await UserModel.findById('5b0aa69eeee6cd335e624124') || {} as User
  console.log(user)
  
  const postModel = new PostModel(post)
  postModel.author = user
  
  const result = await postModel.save()
  
  ctx.body = result
  ctx.status = 201
})

export default router.routes()