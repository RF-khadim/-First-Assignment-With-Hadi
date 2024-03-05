import React, { useState } from 'react'
import { AiOutlineDingtalk, AiOutlineSearch, AiOutlineShoppingCart, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";



const Navbar = () => {
    const [nav, setNav] = useState(false)

    return (
        <div>
            <div className='fixed top-0 left-0 w-full flex items-center justify-between bg-slate-600 px-4 w-ful py-4'>
                <div className='flex items-center'>
                    <AiOutlineDingtalk size={40} className='text-white' />
                    <h1 className='text-white text-2xl px-1 font-bold'>ShopIN</h1>
                </div>

                <div className=' hidden md:flex items-center list-none'>
                    <li className='md:px-4 lg:px-10 text-lg font-semibold text-white'>
                        Men
                    </li >

                    <li className='md:px-4 lg:px-10 text-lg font-semibold text-white'>
                        Women
                    </li>

                    <li className=' md:px-4 lg:px-10 text-lg font-semibold text-white'>
                        Kids
                    </li>
                    <div className=' md:pl-10 lg:pl-56'>
                        <button className=' bg-white w-36 items-center flex rounded-full pl-4 py-1 mx-10'> <AiOutlineShoppingCart size={28} className=' pr-1' /> Add Items</button>

                    </div>




                </div>
                <div className='hidden md:flex items-center justify-between w-72 bg-white rounded-full '>
                    <input className='bg-transparent pl-3 py-1 ouline-none border-none focus:outline-none' type="search" placeholder='Search Product' />

                    <AiOutlineSearch size={28} className='pr-2 font-bold' />
                </div>

                <div onClick={() => setNav(!nav)} className='lg:hidden md:hidden '>
                    <AiOutlineMenu onClick={() => { setNav(!nav) }} size={28} className='text-white cursor-pointer' />
                </div>

            </div>

            {
                nav &&
                <div className='fixed left-0 top-[72px] md:hidden lg:hidden bg-black/70 w-[300px] h-screen'>

                    <AiOutlineClose onClick={() => { setNav(!nav) }} size={28} className='text-white absolute top-0 right-0 m-4 cursor-pointer' />

                </div>
            }

        </div>
    )
}

export default Navbar