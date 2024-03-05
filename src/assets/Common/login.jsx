import React, { useState } from 'react'
import Input from '../Components/Input'
import * as yup from 'yup'
import { useFormik } from 'formik'
import { Link } from 'react-router-dom'
import Register from './register'

const schema = yup.object({
    email: yup.string().email("Inavlid Email").required("Enter Your Email"),
    password: yup.string().min(8).max(18).required("Enter a Correct Password")
})

const initialValue = {
    email: "",
    password: "",
}
const Login = () => {
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

                <div className=' flex items-center text-white flex-col w-72 h-96 bg-slate-700 py-3 px-5 rounded md:w-96 md:h-3/5'>

                    <h1 className=' text-3xl font-bold mt-4 border-b-2 border-white px-2 py-1  md:text-3xl'  >Login</h1>

                    <Input value={values.email} error={errors.email} onChange={handleChange} name="email" type="text" placeholder="Enter Email" />

                    <Input value={values.password} error={errors.password} onChange={handleChange} name="password" type="password" placeholder="Enter Your Password" />

                    <p className='text-sm mt-2 p-3 md:text-base  md:mt-8'>Forgot password? </p>

                    <button className=' bg-slate-950 w-40 py-2 rounded-full mt-4 md:w-64 md:mt-4'>Login</button>

                    <p className='text-sm mt-2 p-3 md:text-base md:mt-2'>New here?
                        <Link to='/register' className='border-b-2
                        py-1 border-gray-300'> Create an Account</Link>

                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login