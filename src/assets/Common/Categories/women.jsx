import React, { useState } from 'react'
import Navbar from '../Navbar'
import WomenGroup from './WomenShirts/WomenGroup.jpg'
import CardModal from '../../Components/CardModal/CardModal'
import MenShirtCard from '../../Components/MenShirtCard/MenShirtCard'
import Products from '../../Utils/constants'





const Women = () => {

  const womenProducts = Products.filter(obj => obj.category === 'women')

  const [popUp, setPopUp] = useState("");
  const handleClick = (item) => {
    setPopUp(item);
  };


  return (
    <div>
      <Navbar />
      <div className=' flex items-center justify-center mt-[100px] border-2 bg-gray-500/30 -z-0'>

        <img className='w-auto h-[280px] object-fill overflow-hidden' src={WomenGroup} alt="" />
        <div className=' mt-[100px] w-full h-[280px] opacity-60 z-10 bg-black absolute top-0 left-0'></div>

        <div className='flex items-center justify-center flex-col z-20 absolute'>
          <h1 className=' lg:text-5xl lg:font-extrabold lg:py-2 lg:mb-3 text-white sm:text-2xl sm:mb-2 sm:py-1 sm:font-bold font-bold text-2xl mb-2 text-center py-1'>ShopIN - Doesnt Compromise On The Quality</h1>
          <p className='text-white Lg:text-xl lg:w-[900px] text-center lg:font-medium sm:text-base sm:w-96 w-96 '>We producing the best brands across the world.Easy and fast delivery across the country within given time.</p>

          <h1 className=" lg:text-5xl lg:font-extrabold lg:py-2 lg:mb-3 text-white sm:text-2xl sm:mb-2 sm:py-1 sm:font-bold font-bold text-2xl mb-2 py-1">Women Shirts Colllections</h1>
        </div>

      </div>
      <div className=" w-full h-full grid grid-cols-1 mt-10 lg:grid-cols-4 text-center md:grid-cols-2 sm:grid-cols-1">
        {womenProducts.map((item, index) => (
          <div
            key={index}
            onClick={() => handleClick(item)}
            className=" shadow-lg bg-slate-900 w-80 rounded-md mx-auto my-10"
          >
            <MenShirtCard item={item} handleClick={handleClick} popUp={popUp} />
          </div>
        ))}

        {popUp && <CardModal item={popUp} setPopUp={setPopUp} />}
      </div>


    </div>
  )
}

export default Women