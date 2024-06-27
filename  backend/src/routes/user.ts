import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import zod from "zod";
import { HTTPException } from 'hono/http-exception';
import { decode, sign, verify } from 'hono/jwt'
import { signinSchema , signupSchema } from '../../../common module/dist/zod';

export const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET_KEY: string
    }
}>()

userRouter.post('/signup', async (c) => {

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const body = await c.req.json()

    const { success } = signupSchema.safeParse(body)

    if (!success) {
        throw new HTTPException(400, { message: "zod validation error" })
    }

    const user = await prisma.user.create({
        data: {
            name: body.name,
            email: body.email,
            password: body.password
        }
    })

    const token = await sign({ id: user.id }, c.env.JWT_SECRET_KEY)

    return c.json({
        token: token
    })
})



userRouter.post('/signin', async (c) => {

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const body = await c.req.json()

    const { success } = signinSchema.safeParse(body)

    if (!success) {
        throw new HTTPException(400, { message: "zod validation error" })
    }

    const user = await prisma.user.findUnique({
        where: {
            email: body.email,
            password: body.password
        }
    })

    if (!user) {
        c.status(403)
        return c.json({
            error: "User Not Found!!!"
        })
    }

    const token = await sign({ id: user.id }, c.env.JWT_SECRET_KEY)

    c.status(200)
    return c.json({
        token: token
    })
})



