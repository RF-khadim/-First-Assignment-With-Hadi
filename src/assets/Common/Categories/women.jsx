import React, { useState } from 'react'
import Navbar from '../Navbar'
import WomenGroup from './WomenShirts/WomenGroup.jpg'
import WomenShirt1 from './WomenShirts/WomenShirt.1.jpg'
import WomenShirt2 from './WomenShirts/WomenShirt.2.jpg'
import WomenShirt3 from './WomenShirts/WomenShirt.3.jpg'
import WomenShirt4 from './WomenShirts/WomenShirt.4.jpg'
import WomenShirt5 from './WomenShirts/WomenShirt.5.jpg'
import WomenShirt6 from './WomenShirts/WomenShirt.6.jpg'
import WomenShirt7 from './WomenShirts/WomenShirt.7.jpg'
import WomenShirt8 from './WomenShirts/WomenShirt.8.jpg'
import WomenShirt9 from './WomenShirts/WomenShirt.9.jpg'
import WomenShirt10 from './WomenShirts/WomenShirt.10.jpg'
import WomenShirt11 from './WomenShirts/WomenShirt.11.jpg'
import WomenShirt12 from './WomenShirts/WomenShirt.12.jpg'
import WomenShirt13 from './WomenShirts/WomenShirt.13.jpg'
import WomenShirt14 from './WomenShirts/WomenShirt.14.jpg'
import WomenShirt15 from './WomenShirts/WomenShirt.15.jpg'
import WomenShirt16 from './WomenShirts/WomenShirt.16.jpg'
import CardModal from '../../Components/CardModal/CardModal'
import MenShirtCard from '../../Components/MenShirtCard/MenShirtCard'

const ImgComp = ({ img }) => {
  return (
    <img className="object-fill w-full h-full" src={img} />
  )
}


const WomenShirts = [
  {
    id: 1,
    title: "Blue White Printed Shirt",
    Price: 2700,
    discount: 10,
    image: <ImgComp img={WomenShirt1} />
  },

  {
    id: 2,
    title: "Multicolor Flowery Shirt",
    Price: 2700,
    discount: 10,
    image: <ImgComp img={WomenShirt2} />
  },

  {
    id: 3,
    title: " Blue Rosy Shirt",
    Price: 2700,
    discount: 10,
    image: <ImgComp img={WomenShirt3} />
  },


  {
    id: 4,
    title: " White Galaxy Shirt",
    Price: 2700,
    discount: 10,
    image: <ImgComp img={WomenShirt4} />
  },


  {
    id: 5,
    title: "Teal Pink Roses Shirt",
    Price: 2700,
    discount: 10,
    image: <ImgComp img={WomenShirt5} />
  },


  {
    id: 6,
    title: "Printed Anchor Colored Shirt",
    Price: 2700,
    discount: 10,
    image: <ImgComp img={WomenShirt6} />
  },

  {
    id: 7,
    title: "Needle Worked Red Shirt ",
    Price: 3600,
    discount: 10,
    image: <ImgComp img={WomenShirt7} />
  },


  {
    id: 8,
    title: "Carolina Pink Dotted Shirt",
    Price: 2700,
    discount: 10,
    image: <ImgComp img={WomenShirt8} />
  },


  {
    id: 9,
    title: "Light Charcoal Leafy Shirt",
    Price: 2700,
    discount: 10,
    image: <ImgComp img={WomenShirt9} />
  },

  {
    id: 10,
    title: "Salmon Multi Desined Print ",
    Price: 2700,
    discount: 10,
    image: <ImgComp img={WomenShirt10} />
  },


  {
    id: 11,
    title: "MidNight Multi Flowery Shirt",
    Price: 2700,
    discount: 10,
    image: <ImgComp img={WomenShirt11} />
  },

  {
    id: 12,
    title: "Green Check Shirt",
    Price: 2700,
    discount: 10,
    image: <ImgComp img={WomenShirt12} />
  },

  {
    id: 13,
    title: "Black V-Collar Shirt",
    Price: 3600,
    discount: 10,
    image: <ImgComp img={WomenShirt13} />
  },

  {
    id: 14,
    title: "Fern Ribbon Shirt",
    Price: 3600,
    discount: 10,
    image: <ImgComp img={WomenShirt14} />
  },

  {
    id: 15,
    title: "Navy-Blue Printed Shirt",
    Price: 2700,
    discount: 10,
    image: <ImgComp img={WomenShirt15} />
  },

  {
    id: 16,
    title: "Slate White Printed Shirt",
    Price: 2700,
    discount: 10,
    image: <ImgComp img={WomenShirt16} />
  },



]

const Women = () => {

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
        {WomenShirts.map((item, index) => (
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