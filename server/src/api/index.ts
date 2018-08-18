import * as Router from 'koa-router'
import user from './user'
import post from './post'

const router = new Router()

router.use('/users', user)
router.use('/posts', post)

export default router.prefix('/api/v1').routes()