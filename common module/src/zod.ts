import zod from "zod";

export const signupSchema = zod.object({
    name: zod.string().min(1),
    email: zod.string().email(),
    password: zod.string().min(6)
})

export const signinSchema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(6)
})

export const createBlogInput = zod.object({
    title: zod.string(),
    content : zod.string()
})

//type inference in zod
export type SignupInput = zod.infer<typeof signupSchema>
export type SigninInput = zod.infer<typeof signinSchema>
export type CreateBlogInput = zod.infer<typeof createBlogInput>

