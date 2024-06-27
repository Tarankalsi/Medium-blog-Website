
import { Blog } from '../../hooks'



export default function FullBlog({ blog }: { blog: Blog })  {
    return (
        <div className='flex justify-center'>
            <div className="grid grid-cols-12 px-10  pt-20 w-full  max-w-screen-xl gap-20">
                <div className=" col-span-8">
                    <h1 className='text-5xl font-extrabold'>{blog.title}</h1>
                    <h6 className='text-slate-500 pt-4'>
                        Posted on {blog.publishedDate}
                    </h6>
                    <div className='pt-10'>
                        {blog.content}
                    </div>
                </div>
                <div className="col-span-4">
                    <div className='text-lg font-semibold text-gray-600'>
                        Author
                        </div>
                    <div className='flex justify-center items-center gap-4'>
                        <div className='pt-1'>
                        <div className='w-6 h-6 bg-gray-200 rounded-full'>
                           
                        </div>
                        

                        </div>
                        <div className='mx-1'>
                            <div className='text-3xl font-bold my-3'>
                                {blog.author.name || "Anonymous"}
                            </div>
                            <div className='text-md  text-gray-800'>
                                Random catch phrase about the author's ability to grab the user's attention
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}
