import React from 'react'
import MenShirtCard from '../MenShirtCard/MenShirtCard'
import { RxCross2 } from "react-icons/rx";
import { motion } from 'framer-motion'
const CardModal = ({ item, setPopUp, popUp }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: popUp ? 0 : 1 }}
            transition={{ duration: 0.3 }}


            className='flex items-center justify-center  h-screen w-full fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-tr bg-slate-900/70 z-30'>
            <div className='cursor-pointer relative w-[400px] h-[620px] bg-slate-900 rounded-md ' onClick={() => setPopUp("")}>
                <div className='absolute bg-slate-900 rounded-full w-7 h-7 text-white right-[5px] top-[5px] text-xl flex items-center justify-center hover:rotate-180 duration-500'><RxCross2 /></div>
                <MenShirtCard item={item} />
            </div>
        </motion.div>
    )
}

export default CardModal