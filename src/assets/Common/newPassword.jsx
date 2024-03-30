import React, { useState } from 'react'
import Input from '../Components/Input'
import * as yup from 'yup'
import { useFormik } from 'formik'
import { Link } from 'react-router-dom'


const schema = yup.object({
    email: yup.string().email("Inavlid Email").required("Enter Your Email"),
    password: yup.string().min(8).max(18).required("Enter a Correct Password")
})

const initialValue = {
    password: "",
    ConfirmPassword: "",
}
const NewPassword = () => {
    const [initialValues, setInitialValues] = useState(initialValue)

    const formik = useFormik({
        validationSchema: schema,
        initialValues: initialValue,
        onSubmit: (data) => {
            console.log("data", data)
        }
    })

    const { values, errors, handleChange, handleSubmit } = formik || {}


    return (
        <div className=' bg-white w-full h-screen'>

            <div className=' flex items-center justify-center w-full h-screen'>

                <div onSubmit={handleSubmit} className=' flex items-center text-white flex-col w-72 h-96 bg-slate-700 py-3 px-5 rounded md:w-96 md:h-3/5'>

                    <h1 className=' text-3xl font-bold mt-4 border-b-2 border-white px-2 py-1  md:text-3xl mb-7'  >Recovery</h1>

                    <Input className=' space-y-10' value={values.password} error={errors.password} onChange={handleChange} name="password" type="text" placeholder="Enter Password" />

                    <Input value={values.password} error={errors.password} onChange={handleChange} name="password" type="password" placeholder="Conform Password " />

                    <p className='text-sm mt-2 p-3 md:text-base  md:mt-8'>Forgot password? </p>

                    <button type='submit' className='  bg-slate-950 w-40 py-2 rounded-full mt-4 md:w-64 md:mt-4 hover:bg-white hover:text-black duration-300 transition-all'>Login</button>

                    <p className='text-sm mt-2 p-3 md:text-base md:mt-2'>wanna Create Account?
                        <Link to='/register' className='border-b-2
                        py-1 border-gray-300'> Click Here</Link>

                    </p>
                </div>
            </div>
        </div>
    )
}

export default NewPassword