import { Link } from "react-router-dom"

interface BlogCardProps {
    authorName: string,
    content: string,
    title: string,
    publishedDate?: string,
    id: string
}

export default function BlogCard({
    authorName, content, title, publishedDate , id
}: BlogCardProps) {

    return (
        <Link to={`/blog/${id}`}>
            <div className="border-b-2 border-slate-150 pb-12 p-4 cursor-pointer ">
                <div className="flex items-center mb-3">
                    <div className="flex justify-center  flex-col ">
                        <Avatar name={authorName} size="small" />
                    </div>
                    <div className="font-md pl-2 text-sm">{authorName} </div>
                    <div className="ml-2 mt-1">
                        <Circle />
                    </div>

                    <div className="font-extralight pl-2 text-slate-500 text-sm">{publishedDate}</div>

                </div>

                <div className="text-xl font-bold  mb-2">
                    {title}
                </div>
                <div className="text-lg font-thin">
                    {content.slice(0, 150) + "..."}
                </div>
                <div className="  text-slate-500 font-thin mt-8 inline-block bg-gray-200 px-3 py-0.5 rounded-full ">
                    {Math.ceil(content.length / 100) + " minute(s) read"}
                </div>

            </div>
        </Link>

    )
}

export function Circle() {
    return <div className="h-1 w-1 rounded-full bg-gray-500">

    </div>
}
export function Avatar({ name, size }: { name: string, size: "small" | "big" }) {
    return (
        <div className={`relative inline-flex items-center justify-center ${size === "small" ? "h-6 w-6" : "h-10 w-10"} overflow-hidden bg-gray-600 rounded-full dark:bg-gray-600`}>
            <span className={`${size === "small" ? "text-md font-thin " : "text-xl font-bold "} text-gray-100  `}>{name[0]}</span>
        </div>
    )
}
