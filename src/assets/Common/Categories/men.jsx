import React, { useState } from "react";
import CardModal from "../../Components/CardModal/CardModal";
import Navbar from "../Navbar";
import MenPrinted1 from "./Images/MenParty.1.jpg";
import MenPrinted2 from "./Images/MenParty.2.jpg";
import MenPrinted5 from "./Images/MenParty.5.jpg";
import MenPrinted6 from "./Images/MenParty.6.jpg";
import MenPrinted7 from "./Images/menparty.7.jpg";
import MenPrinted8 from "./Images/MenParty.8.jpg";
import MenPrinted9 from "./Images/MenParty.9.jpg";
import MenPrinted10 from "./Images/MenParty.10.jpg";
import MenPrinted11 from "./Images/MenParty.11.jpg";
import MenPrinted13 from "./Images/MenParty.13.jpg";
import MenPrinted14 from "./Images/MenParty.14.jpg";
import MenPrinted15 from "./Images/MenParty.15.jpg";
import MenPrinted16 from "./Images/MenParty.16.jpg";
import MenPrinted17 from "./Images/MenParty.17.jpg";
import MenPrinted18 from "./Images/MenParty.18.jpg";
import MenPrinted19 from "./Images/MenParty.19.jpg";
import MenPrinted20 from "./Images/MenParty20.jpg";
import MenPrinted21 from "./Images/MenParty21.jpg";
import MenPrinted22 from "./Images/MenParty.22.jpg";
import MenProfile from "./Images/MenProfile.jpg";
import MenShirtCard from "../../Components/MenShirtCard/MenShirtCard";

const ImgComp = ({ img }) => {
  return (
    <img className="object-fill w-full h-full" src={img} />
  )
}

const MenItems = [
  {
    id: 1,
    title: "Printed Sea Green Traingled Shirt",
    Price: 1800,
    discount: 10,
    image: <ImgComp img={MenPrinted1} />
  },

  {
    id: 2,
    title: "Printed Blue Traingled Shirt",
    Price: 1800,
    discount: 10,
    image: <ImgComp img={MenPrinted2} />

  },

  {
    id: 3,
    title: "White Alpha Cutton Shirt",
    Price: 1800,
    discount: 10,
    image: <ImgComp img={MenPrinted5} />

  },
  {
    id: 4,
    title: "Blue Geographical Texture Shirt",
    Price: 2250,
    discount: 10,
    image: <ImgComp img={MenPrinted6} />

  },
  {
    id: 5,
    title: " Brown Map Texture Shirt",
    Price: 1800,
    discount: 10,
    image: <ImgComp img={MenPrinted7} />

  },
  {
    id: 6,
    title: "Cultural Texture Blue shirt",
    Price: 1800,
    discount: 10,
    image: <ImgComp img={MenPrinted8} />

  },

  {
    id: 7,
    title: "Multi Symbolic Shirt ",
    Price: 2250,
    discount: 10,
    image: <ImgComp img={MenPrinted9} />

  },

  {
    id: 8,
    title: "Multi Articles Design Shirt ",
    Price: 2250,
    discount: 10,
    image: <ImgComp img={MenPrinted10} />

  },

  {
    id: 9,
    title: "Multi Articles Design Shirt ",
    Price: 2250,
    discount: 10,
    image: <ImgComp img={MenPrinted11} />

  },

  {
    id: 11,
    title: "Multi Articles Design Shirt ",
    Price: 2250,
    discount: 10,
    image: <ImgComp img={MenPrinted13} />

  },

  {
    id: 12,
    title: "Multi Articles Design Shirt ",
    Price: 2250,
    discount: 10,
    image: <ImgComp img={MenPrinted14} />

  },

  {
    id: 13,
    title: "Multi Articles Design Shirt ",
    Price: 2250,
    discount: 10,
    image: <ImgComp img={MenPrinted15} />

  },

  {
    id: 14,
    title: "Multi Articles Design Shirt ",
    Price: 2250,
    discount: 10,
    image: <ImgComp img={MenPrinted16} />

  },

  {
    id: 15,
    title: "Multi Articles Design Shirt ",
    Price: 2250,
    discount: 10,
    image: <ImgComp img={MenPrinted17} />

  },

  {
    id: 16,
    title: "Multi Articles Design Shirt ",
    Price: 2250,
    discount: 10,
    image: <ImgComp img={MenPrinted18} />

  },

  {
    id: 17,
    title: "Multi Articles Design Shirt ",
    Price: 2250,
    discount: 10,
    image: <ImgComp img={MenPrinted19} />

  },

  {
    id: 18,
    title: "Multi Articles Design Shirt ",
    Price: 2250,
    discount: 10,
    image: <ImgComp img={MenPrinted20} />

  },

  {
    id: 19,
    title: "Multi Articles Design Shirt ",
    Price: 2250,
    discount: 10,
    image: <ImgComp img={MenPrinted21} />

  },
  {
    id: 20,
    title: "Multi Articles Design Shirt ",
    Price: 2250,
    discount: 10,
    image: <ImgComp img={MenPrinted22} />

  },
];

const Men = () => {
  const [popUp, setPopUp] = useState("");
  const handleClick = (item) => {
    setPopUp(item);
  };


  return (
    <div>
      <Navbar />

      <div className=' flex items-center justify-center mt-[100px] border-2 bg-gray-500/30 -z-0'>

        <img className='w-auto h-[280px] object-fill overflow-hidden' src={MenProfile} alt="" />
        <div className=' mt-[100px] w-full h-[280px] opacity-60 z-10 bg-black absolute top-0 left-0'></div>

        <div className='flex items-center justify-center flex-col z-20 absolute'>
          <h1 className=' lg:text-5xl lg:font-extrabold lg:py-2 lg:mb-3 text-white sm:text-2xl sm:mb-2 sm:py-1 sm:font-bold font-bold text-2xl mb-2 text-center py-1'>ShopIN - Doesnt Compromise On The Quality</h1>
          <p className='text-white Lg:text-xl lg:w-[900px] text-center lg:font-medium sm:text-base sm:w-96 w-96 '>We producing the best brands across the world.Easy and fast delivery across the country within given time.</p>

          <h1 className=" lg:text-5xl lg:font-extrabold lg:py-2 lg:mb-3 text-white sm:text-2xl sm:mb-2 sm:py-1 sm:font-bold font-bold text-2xl mb-2 py-1">Men's Shirts Colllections</h1>
        </div>

      </div>
      <div className=" w-full h-full grid grid-cols-1 mt-10 lg:grid-cols-4 text-center md:grid-cols-2 sm:grid-cols-1">
        {MenItems.map((item, index) => (
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
  );
};

export default Men;
