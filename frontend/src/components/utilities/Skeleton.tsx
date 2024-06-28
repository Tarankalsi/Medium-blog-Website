import { Circle } from "../homePage/BlogCard"


function Skeleton() {
    return (

        <div role="status" className="max-w-sm animate-pulse">
            <div className="border-b-2 border-slate-150 pb-12 w-screen max-w-screen-md p-4 cursor-pointer ">
                <div className="flex items-center mb-3">
                    <div className="flex justify-center  flex-col ">
                        <div className="h-6 w-6 bg-gray-200 rounded-full mb-4"></div>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                    <div className="flex justify-center flex-col pl-2 ml-2 mt-1">
                        <Circle />
                    </div>
                    <div className="flex justify-center flex-col pl-2">
                    <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                    </div>
                

                </div>

                <div className="text-xl font-bold  mb-2">
                    <div className="h-3 bg-gray-200 rounded-full mb-2.5"></div>
                </div>
                <div className="text-lg font-thin">
                    <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                </div>
                <div className="  text-slate-500 font-thin mt-8 inline-block bg-gray-200 px-3 py-0.5 rounded-full ">
                    <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                </div>






                <span className="sr-only">Loading...</span>
            </div>



        </div>
    )
}

export default Skeleton
