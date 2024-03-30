import React, { useState } from 'react'
import Input from '../Components/Input'
import * as yup from "yup"
import { useFormik } from "formik"
import { Link } from 'react-router-dom'
import Login from './login'

const schema = yup.object({
    email: yup.string().email("Invalid email").required(
        "email is required"
    ),
    Name: yup.string().min(4).max(20).required("Enter your complete Name"),
    password: yup.string().min(8).max(20).required("Enter your password"),
    confirmPassword: yup.string()
        .oneOf([yup.ref('password'), null], 'Passwords must match')

})

const initialValue = {
    email: "",
    Name: '',
    password: "",
    confirmPassword: ""
}
const Register = () => {
    const [initialValues, setInitialValues] = useState(initialValue)

    const formik = useFormik({
        validationSchema: schema,
        initialValues: initialValues,
        onSubmit: (data) => {
            console.log("data", data)
        }
    })

    const { values, errors, handleChange, handleSubmit } = formik || {}

    return (
        <div className=' bg-white w-full h-screen'>

            <div className=' flex items-center justify-center w-full h-screen'>

                <div className=' flex items-center text-white flex-col w-80 h-[450px] bg-slate-700 py-3 px-5 rounded md:w-96 md:h-2/3'>

                    <h1 className=' text-3xl font-bold mt-4 border-b-2 border-white px-2 py-1  md:text-3xl'  >Register</h1>


                    <Input value={values.email} error={errors.email} onChange={handleChange} name="email" type="text" placeholder="Enter Email" />

                    <Input value={values.Name} error={errors.Name} onChange={handleChange} name="Name" type="text" placeholder="Enter Your Name" />

                    <Input value={values.password} error={errors.password} onChange={handleChange} name="password" type="password" placeholder="Type Password" />

                    <Input value={values.confirmPassword} error={errors.confirmPassword} onChange={handleChange} name="confirmPassword" type="password" placeholder="Confirm Password" />

                    <p className='text-sm mt-2 p-3 md:text-base  md:mt-2'>Forgot password? </p>

                    <button className=' bg-slate-950 w-40 py-2 rounded-full mt-4 md:w-64 md:mt-4 hover:bg-white hover:text-black duration-300 transition-all'>Register</button>

                    <p className='text-sm mt-2 p-3 md:text-base md:mt-2 text-center' >Have an Account? <Link to='/login' className='border-b-2 py-1 border-gray-300'>Login</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Register