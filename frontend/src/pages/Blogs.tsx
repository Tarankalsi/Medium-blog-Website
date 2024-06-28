import AppBar from "../components/homePage/AppBar";
import BlogCard from "../components/homePage/BlogCard";
import Skeleton from "../components/utilities/Skeleton";
import { formatDate } from "../functions/formatDate";
import { useBlogs } from "../hooks";


export default function Blogs() {

  const { loading, blogs } = useBlogs()




  return (
    <div>

      <div>
        <AppBar />
      </div>

      <div className="flex justify-center ">
        <div className=" max-w-3xl mx-12 my-12">

          {loading ? <div className="w-screen"> <Skeleton/>  <Skeleton/> <Skeleton/></div>:
            blogs.map((blog) => (
              <BlogCard
                key={blog.id} // It's better to use a unique key, such as blog.id if available
                authorName={blog.author.name}
                title={blog.title}
                content={blog.content}
                publishedDate={formatDate(blog.publishedDate)}
                id={blog.id}
              />
            ))
          }


        </div>

      </div>
    </div>

  )
}
