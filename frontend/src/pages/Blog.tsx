import { useParams } from "react-router-dom"
import Spinner from "../components/utilities/Spinner"
import { useBlog } from "../hooks"
import FullBlog from "../components/blogPage/FullBlog"
import AppBar from "../components/homePage/AppBar"




function Blog() {
  const { id } = useParams()

  const { loading, blog } = useBlog({
    id: id || ""
  })

  
  return (
    <div>
      <AppBar />
      { loading ? <div className=" flex justify-center mt-20"><Spinner/></div> :
        <div>
          {blog ? <FullBlog blog={blog} /> : <h1>Blog Not Found</h1>}
        </div>
      }

    </div>

  )
}

export default Blog
