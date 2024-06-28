import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import AppBar from "../components/homePage/AppBar"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { ChangeEvent, useState } from "react"
import axios from "axios"
import { BACKEND_URL } from "../config"
import { useNavigate } from "react-router-dom"


export default function Publish() {
    const navigate = useNavigate()


    const [input, setInput] = useState({
        title :  "",
        content : ""
    })

    const createBlog =()=>{
        try {
            axios.post(`${BACKEND_URL}/api/v1/blog`,{
                title : input.title,
                content :  input.content
            },{
                headers:{
                    Authorization : `Bearer ${localStorage.getItem('token')}`
                }
            })
            alert("succesfully create blog")
            navigate('/blogs')
        } catch (error) {
            alert("Can't create new blog")
        }
    }

    return (
        <div>
            <AppBar />
            <div className="flex justify-center w-full pt-20">

                <div className="max-w-screen-lg w-full flex gap-2 md:gap-8 mx-10">
                    <div className="mt-12  ">
                        <FontAwesomeIcon className=" border-2 md:border-4  text-2xl md:text-4xl text-gray-400 px-2 py-1.5 md:px-6 md:py-5 rounded-full" icon={faPlus} />
                    </div>
                    <div className="w-full">
                        <div className="mb-6 ">
                            <input
                            onChange={(e)=>{
                                setInput((c) => ({
                                    ...c,
                                    title: e.target.value
                                }))
                            }}
                            type="text" className=" w-full block p-4 text-gray-900 italic  rounded-lg border-b-2 border-t-2 text-3xl py-8 font-bold " placeholder="Title" />

                        </div>


                        <TextEditor onChange={(e)=>{
                                setInput((c) => ({
                                    ...c,
                                    content: e.target.value
                                }))
                            }} />

                    </div>
                    <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2" onClick={createBlog}>Publish</button>
                </div>




            </div>
        </div>

    )
}


function TextEditor({onChange}:{onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void}) {
    return (
        <div className="mb-4">

            <textarea
                id="message"
                rows={4}
                className="block p-2.5 w-full text-md text-gray-900 font-semibold  rounded-lg border-b-2 border-t-2  focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write your thoughts here..."
                onChange={onChange}
            ></textarea>
        </div>
    )
}
