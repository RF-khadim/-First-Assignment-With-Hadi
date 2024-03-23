import React, { useState } from 'react'
import { AiFillCaretRight, AiFillProject, AiOutlineAppstore, AiOutlineDeliveredProcedure, AiOutlineDingtalk, AiOutlineHighlight, AiOutlineLogout, AiOutlineSetting, AiOutlineTransaction, AiOutlineUser } from "react-icons/ai"





const AdminNavLinks = [
    {
        name: "Dashboard",
        icon: <AiOutlineAppstore />,
    },

    {
        name: "Activity",
        icon: <AiOutlineHighlight />,
    },

    {
        name: "Analytics",
        icon: <AiFillProject />,
    },
    {
        name: "Products",
        icon: <AiOutlineDeliveredProcedure />,
    },


    {
        name: "Transactions",
        icon: <AiOutlineTransaction />,
    },

    {
        name: "Users",
        icon: <AiOutlineUser />,
    },

    {
        name: "Setting",
        icon: <AiOutlineSetting />,
    },
    {
        name: "Logout",
        icon: <AiOutlineLogout />,
    },

];

const AdminNavigation = () => {
    const [activeLink, setActiveLink] = useState(0)
    const [open, setOpen] = useState(false)


    return (
        <div
            className={` duration-500 relative bg-slate-600 h-screen pl-1 ${open ? "w-64" : "w-20"}`}>
            <div className='flex flex-col items-center relative'>
                <div className='flex mt-10'>

                    <AiOutlineDingtalk size={40} className='text-white border-b-[1px]' />
                    <h1 className={`text-white text-3xl px-2 border-b-[1px] font-bold ${open ? "block" : "hidden"}`} >ShopIN</h1>
                </div>

                <div onClick={() => setOpen(!open)} className={`w-7 h-7 bg-slate-950 rounded-full top-28 ${open ? "left-[230px]" : "right-[-10px] "} absolute `}>
                    <AiFillCaretRight size={28} className=' text-white pl-[3px] ' />
                </div>

                <div className='text-white mt-20 font-semibold '>
                    {AdminNavLinks.map((item, index) => (
                        <div className={"my-8 flex py-[7px] pl-2 cursor-pointer " + (activeLink === index ? "bg-white text-slate-950 rounded" : "")}
                            onClick={() => { setActiveLink(index) }}
                            key={index}>
                            <span className={`pt-1 text-2xl   ${open ? "pr-10" : " pl-2 pr-4 pb-1"}  `}> {item.icon}</span>
                            <span className={`pr-12 my-1 ${open ? "block" : "hidden"}`}>{item.name}</span></div>
                    ))}

                </div>


            </div>
        </div>

    )
}

export default AdminNavigation