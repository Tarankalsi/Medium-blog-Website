import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, sign, verify } from 'hono/jwt'
import zod from "zod";
import {createBlogInput} from "../../../common module/dist/zod"

export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET_KEY: string;
    },
    Variables: {
        userId: string;
    }
}>();

blogRouter.use('/*', async (c, next) => {

    const authHeader = c.req.header('Authorization');
	if (!authHeader) {
		c.status(401);
		return c.json({ error: "unauthorized" });
	}
	const token = authHeader.split(' ')[1];
	const response = await verify(token, c.env.JWT_SECRET_KEY);
	if (!response) {
		c.status(401);
		return c.json({ error: "unauthorized access" });
	}
	c.set('userId', response.id);
	await next()


})

blogRouter.post('/', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())


   
    const userId = c.get('userId')
    const body = await c.req.json()

    const { success } = createBlogInput.safeParse(body)
    
    if (!success) {
        c.status(411)
        c.json({
            error : "Invalid Inputs"
        })
    }
    

    const blog = await prisma.blog.create({
        data: {
            title: body.title,
            content: body.content,
            authorId: userId,
        }
    })

    c.status(200)
    return c.json({
        id: blog.id
    })
})

blogRouter.put('/:id', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const blogId = c.req.param('id')
    const body = await c.req.json()

    const blog = await prisma.blog.update({
        where: {
            id: blogId
        },
        data: {
            title: body.title,
            content: body.content
        }
    })

    c.status(200)
    return c.json({
        id: blog.id
    })
})

//Todo : add pagination
blogRouter.get('/bulk', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    try {
        const allblogs = await prisma.blog.findMany({
            select: {
                content: true ,
                title : true,
                id : true,
                publishedDate:true,
                author:{
                    select:{
                        name:true
                    }
                }

            }
        });
        console.log(allblogs);
        c.status(200);
        return c.json({ blogs: allblogs });
      } catch (error) {
        console.error(error);
        c.status(500);
        return c.json({ error: 'Internal server error' });
      }

})

blogRouter.get('/:id', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    try {
        const id = c.req.param('id')

        const blog = await prisma.blog.findUnique({
            where: {
                id: id
            },
            select: {
                title: true,
                id : true,
                content : true,
                publishedDate : true,
                author : {
                    select:{
                        name : true
                    }
                }
            }
        })

        c.status(200)
        return c.json({
            blog: blog
        })
    } catch (error) {
        c.status(411)
        c.json({
            error: "Error while fetching blog post"
        })
    }

})

