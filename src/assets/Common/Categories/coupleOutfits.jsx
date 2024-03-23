import React, { useState } from 'react'
import Navbar from '../Navbar'
import CoupleImg1 from './CouplesOutfit/Couple.1.jpg'
import CoupleImg2 from './CouplesOutfit/Couple.2.jpg'
import CoupleImg3 from './CouplesOutfit/Couple.3.jpg'
import CoupleImg4 from './CouplesOutfit/Couple.4.jpg'
import CoupleImg5 from './CouplesOutfit/Couple.5.jpg'
import CoupleImg6 from './CouplesOutfit/Couple.6.jpg'
import CoupleImg7 from './CouplesOutfit/Couple.7.jpg'
import CoupleImg8 from './CouplesOutfit/Couple.8.jpg'
import CoupleImg9 from './CouplesOutfit/Couple.9.jpg'
import CoupleImg10 from './CouplesOutfit/Couple.10.jpg'
import CoupleImg11 from './CouplesOutfit/Couple.11.jpg'
import CoupleImg12 from './CouplesOutfit/Couple.12.jpg'
import CoupleImg13 from './CouplesOutfit/Couple.13.jpg'
import CoupleImg14 from './CouplesOutfit/Couple.14.jpg'
import CoupleImg15 from './CouplesOutfit/Couple.15.jpg'
import CoupleImg16 from './CouplesOutfit/Couple.16.jpg'
import CoupleImg17 from './CouplesOutfit/Couple.17.jpg'
import CoupleImg18 from './CouplesOutfit/Couple.18.jpg'
import CoupleImg19 from './CouplesOutfit/Couple.19.jpg'
import CoupleImg20 from './CouplesOutfit/Couple.20.jpg'
import CoupleImg21 from './CouplesOutfit/Couple.21.jpg'
import CoupleImg22 from './CouplesOutfit/Couple.22.jpg'
import CoupleImg23 from './CouplesOutfit/Couple.23.jpg'
import CoupleImg24 from './CouplesOutfit/Couple.24.jpg'
import CoupleImg25 from './CouplesOutfit/Couple.25.jpg'
import CoupleImg26 from './CouplesOutfit/Couple.26.jpg'
import CoupleImg27 from './CouplesOutfit/Couple.27.jpg'
import CoupleImg28 from './CouplesOutfit/Couple.28.jpg'

import Banner from './CouplesOutfit/CoupleBg.jpg'
import MenShirtCard from '../../Components/MenShirtCard/MenShirtCard'
import CardModal from '../../Components/CardModal/CardModal'

const ImgComp = ({ img }) => {
  return (
    <img className="object-fill w-full h-full" src={img} />
  )
}

const CoupleItems = [

  {
    id: 1,
    title: "Printed Sea Green Traingled Shirt",
    Price: 1800,
    discount: 10,
    image: <ImgComp img={CoupleImg1} />
  },

  {
    id: 2,
    title: "Printed Sea Green Traingled Shirt",
    Price: 1800,
    discount: 10,
    image: <ImgComp img={CoupleImg2} />
  },

  {
    id: 3,
    title: "Printed Sea Green Traingled Shirt",
    Price: 1800,
    discount: 10,
    image: <ImgComp img={CoupleImg3} />
  },

  {
    id: 4,
    title: "Printed Sea Green Traingled Shirt",
    Price: 1800,
    discount: 10,
    image: <ImgComp img={CoupleImg4} />
  },

  {
    id: 5,
    title: "Printed Sea Green Traingled Shirt",
    Price: 1800,
    discount: 10,
    image: <ImgComp img={CoupleImg5} />
  },

  {
    id: 6,
    title: "Printed Sea Green Traingled Shirt",
    Price: 1800,
    discount: 10,
    image: <ImgComp img={CoupleImg6} />
  },

  {
    id: 7,
    title: "Printed Sea Green Traingled Shirt",
    Price: 1800,
    discount: 10,
    image: <ImgComp img={CoupleImg7} />
  },

  {
    id: 8,
    title: "Printed Sea Green Traingled Shirt",
    Price: 1800,
    discount: 10,
    image: <ImgComp img={CoupleImg8} />
  },

  {
    id: 9,
    title: "Printed Sea Green Traingled Shirt",
    Price: 1800,
    discount: 10,
    image: <ImgComp img={CoupleImg9} />
  },

  {
    id: 10,
    title: "Printed Sea Green Traingled Shirt",
    Price: 1800,
    discount: 10,
    image: <ImgComp img={CoupleImg10} />
  },

  {
    id: 11,
    title: "Printed Sea Green Traingled Shirt",
    Price: 1800,
    discount: 10,
    image: <ImgComp img={CoupleImg11} />
  },

  {
    id: 12,
    title: "Printed Sea Green Traingled Shirt",
    Price: 1800,
    discount: 10,
    image: <ImgComp img={CoupleImg12} />
  },

  {
    id: 13,
    title: "Printed Sea Green Traingled Shirt",
    Price: 1800,
    discount: 10,
    image: <ImgComp img={CoupleImg13} />
  },

  {
    id: 14,
    title: "Printed Sea Green Traingled Shirt",
    Price: 1800,
    discount: 10,
    image: <ImgComp img={CoupleImg14} />
  },

  {
    id: 15,
    title: "Printed Sea Green Traingled Shirt",
    Price: 1800,
    discount: 10,
    image: <ImgComp img={CoupleImg15} />
  },

  {
    id: 16,
    title: "Printed Sea Green Traingled Shirt",
    Price: 1800,
    discount: 10,
    image: <ImgComp img={CoupleImg16} />
  },

  {
    id: 17,
    title: "Printed Sea Green Traingled Shirt",
    Price: 1800,
    discount: 10,
    image: <ImgComp img={CoupleImg17} />
  },

  {
    id: 18,
    title: "Printed Sea Green Traingled Shirt",
    Price: 1800,
    discount: 10,
    image: <ImgComp img={CoupleImg18} />
  },

  {
    id: 19,
    title: "Printed Sea Green Traingled Shirt",
    Price: 1800,
    discount: 10,
    image: <ImgComp img={CoupleImg19} />
  },


  {
    id: 20,
    title: "Printed Sea Green Traingled Shirt",
    Price: 1800,
    discount: 10,
    image: <ImgComp img={CoupleImg20} />
  },

  {
    id: 21,
    title: "Printed Sea Green Traingled Shirt",
    Price: 1800,
    discount: 10,
    image: <ImgComp img={CoupleImg21} />
  }, {
    id: 22,
    title: "Printed Sea Green Traingled Shirt",
    Price: 1800,
    discount: 10,
    image: <ImgComp img={CoupleImg22} />
  }, {
    id: 23,
    title: "Printed Sea Green Traingled Shirt",
    Price: 1800,
    discount: 10,
    image: <ImgComp img={CoupleImg23} />
  }, {
    id: 24,
    title: "Printed Sea Green Traingled Shirt",
    Price: 1800,
    discount: 10,
    image: <ImgComp img={CoupleImg24} />
  }, {
    id: 25,
    title: "Printed Sea Green Traingled Shirt",
    Price: 1800,
    discount: 10,
    image: <ImgComp img={CoupleImg25} />
  },

  {
    id: 26,
    title: "Printed Sea Green Traingled Shirt",
    Price: 1800,
    discount: 10,
    image: <ImgComp img={CoupleImg26} />
  },

  {
    id: 27,
    title: "Printed Sea Green Traingled Shirt",
    Price: 1800,
    discount: 10,
    image: <ImgComp img={CoupleImg27} />
  },


  {
    id: 28,
    title: "Printed Sea Green Traingled Shirt",
    Price: 1800,
    discount: 10,
    image: <ImgComp img={CoupleImg28} />
  },
]

const CoupleOutfits = () => {
  const [popUp, setPopUp] = useState("");

  const handleClick = (item) => {
    setPopUp(item);
  };
  
  return (
    <div>
      <Navbar />

      <div className=' flex items-center justify-center mt-[100px] border-2 bg-gray-500/20 -z-0'>

        <img className='w-auto h-[280px] object-fill overflow-hidden' src={Banner} alt="" />
        <div className=' mt-[100px] w-full h-[280px] opacity-60 z-10 bg-black absolute top-0 left-0'></div>

        <div className='flex items-center justify-center flex-col z-20 absolute'>
          <h1 className=' lg:text-5xl lg:font-extrabold lg:py-2 lg:mb-3 text-white sm:text-2xl sm:mb-2 sm:py-1 sm:font-bold font-bold text-2xl mb-2 text-center py-1'>ShopIN - Doesnt Compromise On The Quality</h1>
          <p className='text-white Lg:text-xl lg:w-[900px] text-center lg:font-medium sm:text-base sm:w-96 w-96 '>We producing the best brands across the world.Easy and fast delivery across the country within given time.</p>

          <h1 className=" lg:text-5xl lg:font-extrabold lg:py-2 lg:mb-3 text-white sm:text-2xl sm:mb-2 sm:py-1 sm:font-bold font-bold text-2xl mb-2 py-1">Couple's Outfit Colllectionss</h1>
        </div>

      </div>
      <div className=" w-full h-full grid grid-cols-1 mt-10 lg:grid-cols-4 text-center md:grid-cols-2 sm:grid-cols-1">
        {CoupleItems.map((item, index) => (
          <div
            key={index}
            onClick={() => handleClick(item)}
            className=" shadow-lg bg-slate-900 w-80 rounded-md mx-auto my-10"
          >
            <MenShirtCard item={item} handleClick={handleClick} popUp={popUp}  />
          </div>
        ))}

        {popUp && <CardModal item={popUp} setPopUp={setPopUp} />}
      </div>


    </div>
  )
}

export default CoupleOutfits