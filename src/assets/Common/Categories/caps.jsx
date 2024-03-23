import React, { useState } from 'react'
import Navbar from '../Navbar'
import CapImage1 from './CapImages/Cap.1.jpg'
import CapImage2 from './CapImages/Cap.2.jpg'
import CapImage3 from './CapImages/Cap.3.jpg'
import CapImage4 from './CapImages/Cap.4.jpg'
import CapImage5 from './CapImages/Cap.5.jpg'
import CapImage6 from './CapImages/Cap.6.jpg'
import CapImage7 from './CapImages/Cap.7.jpg'
import CapImage8 from './CapImages/Cap.8.jpg'
import CapImage9 from './CapImages/Cap.9.jpg'
import CapImage10 from './CapImages/Cap.10.jpg'
import CapImage11 from './CapImages/Cap.11.jpg'
import CapImage12 from './CapImages/Cap.12.jpg'
import CapImage13 from './CapImages/Cap.13.jpg'
import CapImage14 from './CapImages/Cap.14.jpg'
import CapImage15 from './CapImages/Cap.15.jpg'
import CapImage16 from './CapImages/Cap.16.jpg'
import CapImage17 from './CapImages/Cap.17.jpg'
import CapImage18 from './CapImages/Cap.18.jpg'
import CapImage19 from './CapImages/Cap.19.jpg'
import CapImage20 from './CapImages/Cap.20.jpg'
import CapImage21 from './CapImages/Cap.21.jpg'
import CapImage22 from './CapImages/Cap.22.jpg'
import CapImage23 from './CapImages/Cap.23.jpg'
import CapImage24 from './CapImages/Cap.24.jpg'
import MenShirtCard from '../../Components/MenShirtCard/MenShirtCard'
import CardModal from '../../Components/CardModal/CardModal'
import CapCover from './CapImages/CapCover.jpg'
const ImgComp = ({ img }) => {
  return (
    <img className="object-fill w-full h-full" src={img} />
  )
}


const capItems = [
  {
    id: 1,
    title: "Classic Flex-fit Gray Cap",
    Price: 900,
    discount: 10,
    image: <ImgComp img={CapImage1} />
  },

  {
    id: 2,
    title: "Classic Flex-fit Navy-Blue Cap",
    Price: 900,
    discount: 10,
    image: <ImgComp img={CapImage2} />
  },

  {
    id: 3,
    title: "Classic Flex-fit White Cap",
    Price: 900,
    discount: 10,
    image: <ImgComp img={CapImage3} />
  },

  {
    id: 4,
    title: "Classic Flex-fit Dark-Blue Cap",
    Price: 900,
    discount: 10,
    image: <ImgComp img={CapImage4} />
  },

  {
    id: 5,
    title: "Classic Flex-fit Sky-blue Cap",
    Price: 900,
    discount: 10,
    image: <ImgComp img={CapImage5} />
  },

  {
    id: 6,
    title: "Classic Flex-fit Light-Blue Cap",
    Price: 900,
    discount: 10,
    image: <ImgComp img={CapImage6} />
  },

  {
    id: 7,
    title: "Classic Flex-fit Cinnamon Cap",
    Price: 900,
    discount: 10,
    image: <ImgComp img={CapImage7} />
  },

  {
    id: 8,
    title: "Classic Flex-fit Hunter-Green Cap",
    Price: 900,
    discount: 10,
    image: <ImgComp img={CapImage8} />
  },

  {
    id: 9,
    title: "Flat Brim Black NY Cap",
    Price: 1200,
    discount: 20,
    image: <ImgComp img={CapImage9} />
  },

  {
    id: 10,
    title: "Flat Brim Blue NY Cap",
    Price: 1200,
    discount: 20,
    image: <ImgComp img={CapImage10} />
  },

  {
    id: 11,
    title: "Flat Brim Blue Cap",
    Price: 1200,
    discount: 20,
    image: <ImgComp img={CapImage11} />
  },

  {
    id: 12,
    title: "Flat Brim Black Cap",
    Price: 1200,
    discount: 20,
    image: <ImgComp img={CapImage12} />
  },

  {
    id: 13,
    title: "Black News Circled Cap",
    Price: 1500,
    discount: 20,
    image: <ImgComp img={CapImage13} />
  },

  {
    id: 14,
    title: "Black Net News Circled Cap",
    Price: 1500,
    discount: 20,
    image: <ImgComp img={CapImage14} />
  },

  {
    id: 15,
    title: " B&W Circled Cap",
    Price: 1500,
    discount: 20,
    image: <ImgComp img={CapImage15} />
  },

  {
    id: 16,
    title: "B&B Circled Cap",
    Price: 1500,
    discount: 20,
    image: <ImgComp img={CapImage16} />
  },

  {
    id: 17,
    title: "Bronze&B Circled Cap",
    Price: 1500,
    discount: 20,
    image: <ImgComp img={CapImage17} />
  },

  {
    id: 18,
    title: "Black & Coral Circled Cap",
    Price: 1500,
    discount: 20,
    image: <ImgComp img={CapImage18} />
  },

  {
    id: 19,
    title: "White & Khaki Circled Cap",
    Price: 1500,
    discount: 20,
    image: <ImgComp img={CapImage19} />
  },

  {
    id: 20,
    title: "Red & NB Cap",
    Price: 1500,
    discount: 20,
    image: <ImgComp img={CapImage20} />
  },

  {
    id: 21,
    title: "Black & Gray Cap",
    Price: 1500,
    discount: 20,
    image: <ImgComp img={CapImage21} />
  },

  {
    id: 22,
    title: "Black & Silver Square Cap",
    Price: 1500,
    discount: 20,
    image: <ImgComp img={CapImage22} />
  },

  {
    id: 23,
    title: "Dark Gray Net Back Cap",
    Price: 1500,
    discount: 20,
    image: <ImgComp img={CapImage23} />
  },

  {
    id: 24,
    title: "Burgundy Net Back Cap",
    Price: 1500,
    discount: 20,
    image: <ImgComp img={CapImage24} />
  },


]

const Caps = () => {

  const [popUp, setPopUp] = useState("");
  const handleClick = (item) => {
    setPopUp(item);
  };


  return (
    <div>
      <Navbar />

      <div className=' flex items-center justify-center mt-[100px] border-2 bg-gray-500/30 -z-0'>

        <img className='w-auto h-[280px] object-fill overflow-hidden' src={CapCover} alt="" />
        <div className=' mt-[100px] w-full h-[280px] opacity-60 z-10 bg-black absolute top-0 left-0'></div>

        <div className='flex items-center justify-center flex-col z-20 absolute'>
          <h1 className=' lg:text-5xl lg:font-extrabold lg:py-2 lg:mb-3 text-white sm:text-2xl sm:mb-2 sm:py-1 sm:font-bold font-bold text-2xl mb-2 text-center py-1'>ShopIN - Doesnt Compromise On The Quality</h1>
          <p className='text-white Lg:text-xl lg:w-[900px] text-center lg:font-medium sm:text-base sm:w-96 w-96 '>We producing the best brands across the world.Easy and fast delivery across the country within given time.</p>

          <h1 className=" lg:text-5xl lg:font-extrabold lg:py-2 lg:mb-3 text-white sm:text-2xl sm:mb-2 sm:py-1 sm:font-bold font-bold text-2xl mb-2 py-1">Caps Colllections</h1>
        </div>

      </div>
      <div className=" w-full h-full grid grid-cols-1 mt-10 lg:grid-cols-4 text-center md:grid-cols-2 sm:grid-cols-1">
        {capItems.map((item, index) => (
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

export default Caps