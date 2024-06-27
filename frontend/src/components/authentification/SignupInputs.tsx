import { useState} from 'react'
import LabelledInput from './LabelledInput'
import { Link, useNavigate } from 'react-router-dom'

import { BACKEND_URL } from '../../config'
import axios from 'axios'

function SignupInputs() {
    const navigate = useNavigate()

   
  
    const [postInputs, setPostInputs] = useState({
        name: "",
        email: "",
        password: ""
    })

    const sendRequest = async (): Promise<void> =>{
        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/signup`,
                postInputs
            )
            const token = response.data
            localStorage.setItem("token", token)
            navigate('/signin')
        } catch (error) {
            //alert user here that the request not failed
        }
      
    }

    return (
        <div className='h-screen flex justify-center flex-col'>
 
            <div className='flex justify-center '>
                <div>
                    <div className='px-10'>
                        <div className='text-3xl font-extrabold'>
                            Create an account
                        </div>
                        <div className='text-slate-400'>
                            Already have an account?
                            <Link className='pl-2 underline font-bold' to="/signin">
                                Sign in
                            </Link>
                        </div>
                    </div>
                    <div className='mt-7'>
                        <LabelledInput label='Name' placeholder='Your Name...' onChange={(e) => {

                            setPostInputs((c) => ({
                                ...c,
                                name: e.target.value
                            }))
                        }} ></LabelledInput>

                        <LabelledInput label='Email' type={"email"} placeholder='xxxxxxxxx@gmail.com' onChange={(e) => {

                            setPostInputs((c) => ({
                                ...c,
                                email: e.target.value
                            }))
                        }} ></LabelledInput>

                        <LabelledInput label='Password' type={"password"} placeholder='*********' onChange={(e) => {

                            setPostInputs((c) => ({
                                ...c,
                                password: e.target.value
                            }))
                        }} ></LabelledInput>

                    </div>
                    <div>
                        <button onClick={sendRequest} type="button" className="text-white w-full bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-bold rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">

                           Sign up
                        </button>
                    </div>


                </div>

            </div>

        </div>
    )
}

export default SignupInputs
