import { ChangeEvent } from 'react'


interface LabelledInputType {
    label: string,
    placeholder: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
    type?: string
}

function LabelledInput({ label, placeholder, type, onChange }: LabelledInputType) {
    return (
        <div className="mb-5 ">
            <label htmlFor="input" className="block mb-2 text-sm font-bold  text-gray-800 dark:text-white">{label}</label>
            <input type={type || "text"} onChange={onChange} id="input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />
        </div>
    )
}

export default LabelledInput