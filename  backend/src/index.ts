import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import zod from "zod";
import { HTTPException } from 'hono/http-exception';
import { decode, sign, verify } from 'hono/jwt'
import { userRouter } from './routes/user';
import { blogRouter } from './routes/blog';
import { cors } from 'hono/cors'

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET_KEY :string
  }
}>()

// app.use('/api/v1/blog/*', async (c, next) => {

//   const authToken = c.req.header('Authorization') || ""

//   const token = authToken.split("")[1]

//   const respone = await verify(token, c.env.JWT_SECRET_KEY)

//   if (respone.id) {
//     next()
//   }else{
//     c.status(403)
//     return c.json({
//       error :"unauthoruized"
//     })
//   }
// })

app.use('/*',cors())

app.route("/api/v1/user", userRouter)
app.route("/api/v1/blog" , blogRouter)





export default app
