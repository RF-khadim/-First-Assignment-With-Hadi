import React, { useState } from 'react'
import Navbar from '../Navbar'
import GlassesBg from './GlassesImage/GlassesBg.2.jpg'
import MenShirtCard from '../../Components/MenShirtCard/MenShirtCard'
import CardModal from '../../Components/CardModal/CardModal'
import Glasses1 from './GlassesImage/Glasses.1.jpg'
import Glasses2 from './GlassesImage/Glasses.2.jpg'
import Glasses3 from './GlassesImage/Glasses.3.jpg'
import Glasses4 from './GlassesImage/Glasses.4.jpg'
import Glasses5 from './GlassesImage/Glasses.5.jpg'
import Glasses6 from './GlassesImage/Glasses.6.jpg'
import Glasses7 from './GlassesImage/Glasses.7.jpg'
import Glasses8 from './GlassesImage/Glasses.8.jpg'
import Glasses9 from './GlassesImage/Glasses.9.jpg'
import Glasses10 from './GlassesImage/Glasses.10.jpg'
import Glasses11 from './GlassesImage/Glasses.11.jpg'
import Glasses12 from './GlassesImage/Glasses.12.jpg'
import Glasses13 from './GlassesImage/Glasses.13.jpg'
import Glasses14 from './GlassesImage/Glasses.14.jpg'
import Glasses15 from './GlassesImage/Glasses.15.jpg'
import Glasses16 from './GlassesImage/Glasses.16.jpg'
import Glasses17 from './GlassesImage/Glasses.17.jpg'
import Glasses18 from './GlassesImage/Glasses.18.jpg'
import Glasses19 from './GlassesImage/Glasses.19.jpg'
import Glasses20 from './GlassesImage/Glasses.20.jpg'
import Glasses21 from './GlassesImage/Glasses.21.jpg'
import Glasses22 from './GlassesImage/Glasses.22.jpg'
import Glasses23 from './GlassesImage/Glasses.23.jpg'
import Glasses24 from './GlassesImage/Glasses.24.jpg'
import Glasses25 from './GlassesImage/Glasses.25.jpg'
import Glasses26 from './GlassesImage/Glasses.26.jpg'
import Glasses27 from './GlassesImage/Glasses.27.jpg'
import Glasses28 from './GlassesImage/Glasses.28.jpg'
import Glasses29 from './GlassesImage/Glasses.29.jpg'
import Glasses30 from './GlassesImage/Glasses.30.jpg'
import Glasses31 from './GlassesImage/Glasses.31.jpg'
import Glasses32 from './GlassesImage/Glasses.32.jpg'
import Glasses33 from './GlassesImage/Glasses.33.jpg'
import Glasses34 from './GlassesImage/Glasses.34.jpg'
import Glasses35 from './GlassesImage/Glasses.35.jpg'
import Glasses36 from './GlassesImage/Glasses.36.jpg'
import Glasses37 from './GlassesImage/Glasses.37.jpg'
import Glasses38 from './GlassesImage/Glasses.38.jpg'
import Glasses39 from './GlassesImage/Glasses.39.jpg'
import Glasses40 from './GlassesImage/Glasses.40.jpg'






const ImgComp = ({ img }) => {
  return (
    <img className="object-fill w-full h-full" src={img} />
  )
}

const GooglesItem = [
  {
    id: 1,
    title: "Retro Square Neon Framed",
    Price: 1200,
    discount: 20,
    image: <ImgComp img={Glasses1} />
  },
  {
    id: 2,
    title: "Square Aviator Tinted",
    Price: 1200,
    discount: 20,
    image: <ImgComp img={Glasses2} />
  },

  {
    id: 3,
    title: "Oval Black Tinted Neon",
    Price: 1800,
    discount: 10,
    image: <ImgComp img={Glasses3} />
  },

  {
    id: 4,
    title: "Retro Square Tinted",
    Price: 1200,
    discount: 20,
    image: <ImgComp img={Glasses4} />
  },

  {
    id: 5,
    title: "WayFramer Orange Tinted",
    Price: 1200,
    discount: 20,
    image: <ImgComp img={Glasses5} />
  },

  {
    id: 6,
    title: "Pilot Classic Clear",
    Price: 1800,
    discount: 10,
    image: <ImgComp img={Glasses6} />
  },

  {
    id: 7,
    title: "Pilot Classic Black",
    Price: 1800,
    discount: 10,
    image: <ImgComp img={Glasses7} />
  },

  {
    id: 8,
    title: "Retro Square Black Tinted",
    Price: 1200,
    discount: 20,
    image: <ImgComp img={Glasses8} />
  },

  {
    id: 9,
    title: "Thick Framed Green Tinted",
    Price: 1200,
    discount: 20,
    image: <ImgComp img={Glasses9} />
  },

  {
    id: 10,
    title: "Low Wings Thick Framed",
    Price: 1200,
    discount: 20,
    image: <ImgComp img={Glasses10} />
  },

  {
    id: 11,
    title: "Thick Framed Black Tinted",
    Price: 1800,
    discount: 10,
    image: <ImgComp img={Glasses11} />
  },

  {
    id: 12,
    title: "Black Aviator",
    Price: 1200,
    discount: 20,
    image: <ImgComp img={Glasses12} />
  },

  {
    id: 13,
    title: "WayFramer Rimless",
    Price: 1200,
    discount: 20,
    image: <ImgComp img={Glasses13} />
  },

  {
    id: 14,
    title: "WayFramer Dusk ",
    Price: 1200,
    discount: 20,
    image: <ImgComp img={Glasses14} />
  },

  {
    id: 15,
    title: "Rounded Black Tinted",
    Price: 1800,
    discount: 10,
    image: <ImgComp img={Glasses15} />
  },

  {
    id: 16,
    title: "Wayframer Thick Framed  ",
    Price: 1800,
    discount: 10,
    image: <ImgComp img={Glasses16} />
  },

  {
    id: 17,
    title: "Pilot High Framer",
    Price: 1800,
    discount: 10,
    image: <ImgComp img={Glasses17} />
  },

  {
    id: 18,
    title: "Pilot Mid Framer",
    Price: 1800,
    discount: 10,
    image: <ImgComp img={Glasses18} />
  },

  {
    id: 19,
    title: "Square Rimless Designed Temple",
    Price: 1500,
    discount: 20,
    image: <ImgComp img={Glasses19} />
  },

  {
    id: 20,
    title: "Square Rimless Black DT",
    Price: 1800,
    discount: 10,
    image: <ImgComp img={Glasses20} />
  },

  {
    id: 21,
    title: " Square Rimless Wavy Glasses ",
    Price: 1500,
    discount: 20,
    image: <ImgComp img={Glasses21} />
  },

  {
    id: 22,
    title: "Octanle Black Tinted",
    Price: 1200,
    discount: 20,
    image: <ImgComp img={Glasses22} />
  },

  {
    id: 23,
    title: "Square Rimless Red Temples",
    Price: 1500,
    discount: 20,
    image: <ImgComp img={Glasses23} />
  },

  {
    id: 24,
    title: "Square Rimless Golden Temples",
    Price: 1500,
    discount: 20,
    image: <ImgComp img={Glasses24} />
  },

  {
    id: 25,
    title: "Square Rimless Sea GG",
    Price: 1200,
    discount: 20,
    image: <ImgComp img={Glasses25} />
  },

  {
    id: 26,
    title: "Aviator Sky Designed Temple ",
    Price: 1500,
    discount: 20,
    image: <ImgComp img={Glasses26} />
  },

  {
    id: 27,
    title: "Aviator Black Designed Temple",
    Price: 1500,
    discount: 20,
    image: <ImgComp img={Glasses27} />
  },

  {
    id: 28,
    title: "Square Rimless Transparent DT",
    Price: 1200,
    discount: 20,
    image: <ImgComp img={Glasses28} />
  },

  {
    id: 29,
    title: "Retro Jet-Black",
    Price: 1500,
    discount: 20,
    image: <ImgComp img={Glasses29} />
  },

  {
    id: 30,
    title: "Butterfly Printed Black Glasses",
    Price: 1500,
    discount: 20,
    image: <ImgComp img={Glasses30} />
  },

  {
    id: 31,
    title: "Clubmaster Classic Black",
    Price: 1200,
    discount: 20,
    image: <ImgComp img={Glasses31} />
  },

  {
    id: 32,
    title: "Aviator Classic black",
    Price: 1500,
    discount: 20,
    image: <ImgComp img={Glasses32} />
  },

  {
    id: 33,
    title: "Blue Neon Thick Framed ",
    Price: 1500,
    discount: 20,
    image: <ImgComp img={Glasses33} />
  },

  {
    id: 34,
    title: "Down Cat Eye SG Tinted",
    Price: 1800,
    discount: 10,
    image: <ImgComp img={Glasses34} />
  },

  {
    id: 35,
    title: "Aviator Classic Sea Blue",
    Price: 1500,
    discount: 20,
    image: <ImgComp img={Glasses35} />
  },

  {
    id: 36,
    title: "White Framed Cat Eye",
    Price: 1800,
    discount: 10,
    image: <ImgComp img={Glasses36} />
  },

  {
    id: 37,
    title: "Double Framed Cat Eye ",
    Price: 1800,
    discount: 10,
    image: <ImgComp img={Glasses37} />
  },

  {
    id: 38,
    title: "White Pointed Cat Eye",
    Price: 1800,
    discount: 10,
    image: <ImgComp img={Glasses38} />
  },

  {
    id: 39,
    title: "Wide Square Double Colored",
    Price: 1500,
    discount: 20,
    image: <ImgComp img={Glasses39} />
  },

  {
    id: 40,
    title: "Wide Rounded Tigred Frame",
    Price: 1500,
    discount: 20,
    image: <ImgComp img={Glasses40} />
  },

]

const Googles = () => {

  const [popUp, setPopUp] = useState("");
  const handleClick = (item) => {
    setPopUp(item);
  };
  return (
    <div>
      <Navbar />

      <div className=' flex items-center justify-center mt-[100px] border-2 bg-gray-500/30 -z-0'>

        <img className='w-auto h-[280px] object-fill overflow-hidden' src={GlassesBg} alt="" />
        <div className=' mt-[100px] w-full h-[280px] opacity-60 z-10 bg-black absolute top-0 left-0'></div>

        <div className='flex items-center justify-center flex-col z-20 absolute'>
          <h1 className=' lg:text-5xl lg:font-extrabold lg:py-2 lg:mb-3 text-white sm:text-2xl sm:mb-2 sm:py-1 sm:font-bold font-bold text-2xl mb-2 text-center py-1'>ShopIN - Doesnt Compromise On The Quality</h1>
          <p className='text-white Lg:text-xl lg:w-[900px] text-center lg:font-medium sm:text-base sm:w-96 w-96 '>We producing the best brands across the world.Easy and fast delivery across the country within given time.</p>

          <h1 className=" lg:text-5xl lg:font-extrabold lg:py-2 lg:mb-3 text-white sm:text-2xl sm:mb-2 sm:py-1 sm:font-bold font-bold text-2xl mb-2 py-1">Men's & Women's Glasses Colllections</h1>
        </div>

      </div>
      <div className=" w-full h-full grid grid-cols-1 mt-10 lg:grid-cols-4 text-center md:grid-cols-2 sm:grid-cols-1">
        {GooglesItem.map((item, index) => (
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

export default Googles