import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart,  } from '../../store/cartslice'


const MenShirtCard = ({ item, handleClick }) => {
    const dispatch = useDispatch()
    const handleAdd = () => {
        dispatch(addToCart(item));
    };



    return (
        <div onClick={handleClick} className='cursor-pointer'>
            <div className='overflow-hidden h-[370px] w-full'   >
                {
                    item.image
                }
            </div>

            <div className=' flex justify-around mt-5'>
                <p className='bg-white rounded-md text-sm px-3 py-1 font-medium text-black'>Stock is ready </p>
                <p className='bg-white rounded-md text-sm px-3 py-1 font-medium text-black'>Official store</p></div>

            <h1 className=' text-xl text-white font-semibold my-1 py-4 border-b-2 border-white' >{item.title}</h1>
        
            <p className='text-white text-sm px-3 py-1 font-medium border-b-2 border-white'> Still the {item.quantity} items are left.</p>

            <div className='flex justify-around pb-3 text-xs p-4'>
                <div className='text-white'>
                    <p className=' pb-2 font-bold '>Only {item.price} Rupees</p>
                    <p className=' pb-2 font-bold'> Original Price <span className='line-through'>{item.originalPrice}</span></p>

                    <p className=' pb-2 font-bold '>Discount {item.dicount}</p>
                                   </div>

                <button onClick={handleAdd} className='bg-white h-8 mt-[20px] text-black px-10 py-0 rounded-md hover:bg-slate-800  hover:ring-white hover:ring-2 hover:text-white  duration-300 font-bold '> Add</button>

            </div>

        </div>
    )
}

export default MenShirtCard