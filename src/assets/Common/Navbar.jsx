import React, { useState } from 'react'
import { AiOutlineDingtalk, AiOutlineShoppingCart, AiOutlineMenu, AiOutlineClose, AiOutlineHome, AiFillCaretDown } from "react-icons/ai";
import { GiLargeDress, GiOppositeHearts } from "react-icons/gi";
import { PiBaseballCapBold, PiShirtFoldedFill } from "react-icons/pi";
import { ImHeadphones } from "react-icons/im";
import { IoGlasses } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'

const NavList = [
    {
        name: "Home",
        route: "/",
        icon: <AiOutlineHome />,
    },
    {
        name: "Men's",
        route: "/men",
        icon: <PiShirtFoldedFill />,
    },
    {
        name: "Women's",
        route: "/women",
        icon: <GiLargeDress />,

    },
    {
        name: "Couple Outfits",
        route: "/coupleOutfits",
        icon: <GiOppositeHearts />,

    },
];



const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [active, setActive] = useState(0)
    const [dropdown, setDropdown] = useState(true)
    return (
        <div>

            <div className='fixed top-0 left-0 w-full flex items-center justify-between bg-slate-600 px-4 w-ful py-4 z-50'>
                <div className='flex items-center'>
                    <AiOutlineDingtalk size={40} className='text-white' />
                    <h1 className='text-white text-2xl px-1 font-bold'>ShopIN</h1>
                </div>



                <div className=' hidden md:flex items-center list-none'>

                    {NavList.map((item, index) => (
                        <div className={"flex items-center px-4 mx-4 font-semibold text-white text-lg "}>
                            <div className='px-6 py-1 rounded-md flex items-center hover:ring-white hover:ring-1 duration-500 '>


                                <Link to=
                                    {item.route} className=' flex ' >
                                    <div className='pr-2 pt-1 text-xl'> {item?.icon}</div>
                                    <div
                                        className={`${active === index ? " " : ""}`}> {item.name}</div>
                                </Link>
                            </div>
                        </div>
                    ))}

                    <div className=' flex items-center mx-4 font-semibold text-white text-lg px-6 py-1 rounded-md relative transition-all duration-500'>

                        <ul onClick={() => setDropdown(!dropdown)} className='cursor-pointer'> More
                            <motion.div

                                initial={{ opacity: 0, }}
                                animate={{ opacity: dropdown ? 0 : 1, }}
                                transition={{ duration: 0.4 }}

                                className={" absolute mt-10 w-52 h-60 bg-slate-900 flex flex-col font-semibold text-white text-lg px-5 rounded-md transition-all duration-700" + (dropdown ? " hidden" : " inline-block")}>
                                <Link className='py-1 hover:ring-white hover:ring-1  w-full duration-500 mt-6 pl-4 rounded-md flex gap-3' to="/caps" > <PiBaseballCapBold size={21} className='mt-1 ' /> Caps</Link>

                                <Link className='py-1 hover:ring-white hover:ring-1  w-full duration-500 mt-6 pl-4 rounded-md flex gap-3' to="/headphones" >
                                    <ImHeadphones size={22} className='mt-1 ' />
                                    Headphones</Link>


                                <Link className='py-1 flex hover:ring-white hover:ring-1  w-full duration-500 mt-6 pl-4 rounded-md gap-3' to="/googles" >
                                    <IoGlasses size={24} className='mt-1' />  Googles</Link>

                            </motion.div>

                        </ul>
                        <AiFillCaretDown onClick={() => setDropdown(!dropdown)} size={25} className={"pt-1 cursor-pointer" + (dropdown ? "" : " rotate-180 mt-1")} />


                    </div>

                    <div className=' md:pl-10 lg:pl-56'>
                        <button className=' w-40 bg-slate-900 items-center flex rounded-full  mx-10 text-white font-semibold hover:bg-white hover:text-black duration-300 transition-all'><Link to="/cart" className='flex pl-4 py-2 items-center'> <AiOutlineShoppingCart size={28} className=' pr-2' /> Add Items</Link></button>

                    </div>

                </div >

                <div onClick={() => setNav(!nav)} className='lg:hidden md:hidden '>
                    <AiOutlineMenu onClick={() => { setNav(!nav) }} size={28} className='text-white cursor-pointer ' />

                </div>

            </div >

            {
                nav &&
                <div className='fixed left-0 top-[72px] flex flex-col md:hidden px-6 lg:hidden bg-slate-900 w-[240px] h-screen pt-20 z-40'>


                    {NavList.map((item, index) => (

                        <div className={"flex items-center mt-6 text-white px-4 py-1 text-lg font-medium rounded-md hover:ring-1 ring-white duration-200 "}
                            onClick={() => { setActive(index) }}
                            key={index}>
                            <span className={"pr-2 text-2xl font-bold" + (active === index ? "white" : "")}> {item.icon}</span>
                            <span className={"py-1   " + (active === index ? "" : "text-white")}>{item.name}</span>





                        </div>


                    ))}

                    <div>
                        <Link className='py-2 text-white text-lg font-medium w-full mt-6 pl-4 flex gap-3 hover:ring-1 ring-white rounded-md' to="/caps?category='caps'"> <PiBaseballCapBold size={21} className='mt-1 ' /> Caps</Link>

                        <Link className='py-2 text-white text-lg font-medium w-full mt-6 pl-4 flex gap-3 hover:ring-1 ring-white rounded-md' to="/headphones" ><ImHeadphones size={22} className='mt-1 ' />Headphones</Link>


                        <Link className='py-2 text-white text-lg font-medium w-full mt-6 pl-4 flex gap-3 hover:ring-1 ring-white rounded-md' to="/googles" >
                            <IoGlasses size={26} className='mt-1' />  Googles</Link>

                        <Link className='py-2 text-white text-lg font-medium w-full mt-6 pl-4 flex gap-3 hover:ring-1 ring-white rounded-md' to="/cart" ><AiOutlineShoppingCart size={22} className='mt-1 ' />Cart</Link>

                    </div>

                    <AiOutlineClose onClick={() => { setNav(!nav) }} size={28} className='text-white absolute top-0 right-0 m-4 cursor-pointer' />

                </div>
            }

        </div >
    )
}

export default Navbar