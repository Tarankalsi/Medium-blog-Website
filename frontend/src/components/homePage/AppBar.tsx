import { Avatar } from "./BlogCard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";


export default function AppBar() {
  return (
    <div className="border-b flex bg-black justify-between px-10 py-4">
      <div className="flex flex-col jusitfy-center text-3xl font-extrabold text-white ">
        Medium
      </div>
      <div >
      <Link to={'/publish'} type="button" className="text-white mr-12 bg-green-600 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-bold rounded-full text-md px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
      <FontAwesomeIcon icon={faPenToSquare} /> Create Blog
        </Link>

        <Avatar name="Taran" size="big"/>
      </div>
    </div>
  )
}
