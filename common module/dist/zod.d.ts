import zod from "zod";
export declare const signupSchema: zod.ZodObject<{
    name: zod.ZodString;
    email: zod.ZodString;
    password: zod.ZodString;
}, "strip", zod.ZodTypeAny, {
    name: string;
    email: string;
    password: string;
}, {
    name: string;
    email: string;
    password: string;
}>;
export declare const signinSchema: zod.ZodObject<{
    email: zod.ZodString;
    password: zod.ZodString;
}, "strip", zod.ZodTypeAny, {
    email: string;
    password: string;
}, {
    email: string;
    password: string;
}>;
export declare const createBlogInput: zod.ZodObject<{
    title: zod.ZodString;
    content: zod.ZodString;
}, "strip", zod.ZodTypeAny, {
    title: string;
    content: string;
}, {
    title: string;
    content: string;
}>;
export type SignupInput = zod.infer<typeof signupSchema>;
export type SigninInput = zod.infer<typeof signinSchema>;
export type CreateBlogInput = zod.infer<typeof createBlogInput>;
